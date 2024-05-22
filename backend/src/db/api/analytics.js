const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class AnalyticsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.create(
      {
        id: data.id || undefined,

        student_engagement: data.student_engagement || null,
        course_completion_rate: data.course_completion_rate || null,
        instructor_performance: data.instructor_performance || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await analytics.setCourse(data.course || null, {
      transaction,
    });

    await analytics.setOrganization(currentUser.organization.id || null, {
      transaction,
    });

    return analytics;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const analyticsData = data.map((item, index) => ({
      id: item.id || undefined,

      student_engagement: item.student_engagement || null,
      course_completion_rate: item.course_completion_rate || null,
      instructor_performance: item.instructor_performance || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const analytics = await db.analytics.bulkCreate(analyticsData, {
      transaction,
    });

    // For each item created, replace relation files

    return analytics;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;
    const globalAccess = currentUser.app_role?.globalAccess;

    const analytics = await db.analytics.findByPk(id, {}, { transaction });

    await analytics.update(
      {
        student_engagement: data.student_engagement || null,
        course_completion_rate: data.course_completion_rate || null,
        instructor_performance: data.instructor_performance || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await analytics.setCourse(data.course || null, {
      transaction,
    });

    await analytics.setOrganization(
      (globalAccess ? data.organization : currentUser.organization.id) || null,
      {
        transaction,
      },
    );

    return analytics;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findByPk(id, options);

    await analytics.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await analytics.destroy({
      transaction,
    });

    return analytics;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const analytics = await db.analytics.findOne({ where }, { transaction });

    if (!analytics) {
      return analytics;
    }

    const output = analytics.get({ plain: true });

    output.course = await analytics.getCourse({
      transaction,
    });

    output.organization = await analytics.getOrganization({
      transaction,
    });

    return output;
  }

  static async findAll(filter, globalAccess, options) {
    var limit = filter.limit || 0;
    var offset = 0;
    const currentPage = +filter.page;

    offset = currentPage * limit;

    var orderBy = null;

    const transaction = (options && options.transaction) || undefined;
    let where = {};
    let include = [
      {
        model: db.courses,
        as: 'course',
      },

      {
        model: db.organizations,
        as: 'organization',
      },
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: Utils.uuid(filter.id),
        };
      }

      if (filter.student_engagementRange) {
        const [start, end] = filter.student_engagementRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            student_engagement: {
              ...where.student_engagement,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            student_engagement: {
              ...where.student_engagement,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.course_completion_rateRange) {
        const [start, end] = filter.course_completion_rateRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            course_completion_rate: {
              ...where.course_completion_rate,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            course_completion_rate: {
              ...where.course_completion_rate,
              [Op.lte]: end,
            },
          };
        }
      }

      if (filter.instructor_performanceRange) {
        const [start, end] = filter.instructor_performanceRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            instructor_performance: {
              ...where.instructor_performance,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            instructor_performance: {
              ...where.instructor_performance,
              [Op.lte]: end,
            },
          };
        }
      }

      if (
        filter.active === true ||
        filter.active === 'true' ||
        filter.active === false ||
        filter.active === 'false'
      ) {
        where = {
          ...where,
          active: filter.active === true || filter.active === 'true',
        };
      }

      if (filter.course) {
        var listItems = filter.course.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          courseId: { [Op.or]: listItems },
        };
      }

      if (filter.organization) {
        var listItems = filter.organization.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          organizationId: { [Op.or]: listItems },
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (start !== undefined && start !== null && start !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (end !== undefined && end !== null && end !== '') {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let { rows, count } = options?.countOnly
      ? {
          rows: [],
          count: await db.analytics.count({
            where: globalAccess ? {} : where,
            include,
            distinct: true,
            limit: limit ? Number(limit) : undefined,
            offset: offset ? Number(offset) : undefined,
            order:
              filter.field && filter.sort
                ? [[filter.field, filter.sort]]
                : [['createdAt', 'desc']],
            transaction,
          }),
        }
      : await db.analytics.findAndCountAll({
          where: globalAccess ? {} : where,
          include,
          distinct: true,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order:
            filter.field && filter.sort
              ? [[filter.field, filter.sort]]
              : [['createdAt', 'desc']],
          transaction,
        });

    //    rows = await this._fillWithRelationsAndFilesForRows(
    //      rows,
    //      options,
    //    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, globalAccess, organizationId) {
    let where = {};

    if (!globalAccess && organizationId) {
      where.organizationId = organizationId;
    }

    if (query) {
      where = {
        [Op.or]: [
          { ['id']: Utils.uuid(query) },
          Utils.ilike('analytics', 'course', query),
        ],
      };
    }

    const records = await db.analytics.findAll({
      attributes: ['id', 'course'],
      where,
      limit: limit ? Number(limit) : undefined,
      orderBy: [['course', 'ASC']],
    });

    return records.map((record) => ({
      id: record.id,
      label: record.course,
    }));
  }
};
