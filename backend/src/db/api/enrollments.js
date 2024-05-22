const db = require('../models');
const FileDBApi = require('./file');
const crypto = require('crypto');
const Utils = require('../utils');

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

module.exports = class EnrollmentsDBApi {
  static async create(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const enrollments = await db.enrollments.create(
      {
        id: data.id || undefined,

        payment_status: data.payment_status || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await enrollments.setStudent(data.student || null, {
      transaction,
    });

    await enrollments.setCourse(data.course || null, {
      transaction,
    });

    await enrollments.setOrganization(currentUser.organization.id || null, {
      transaction,
    });

    return enrollments;
  }

  static async bulkImport(data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    // Prepare data - wrapping individual data transformations in a map() method
    const enrollmentsData = data.map((item, index) => ({
      id: item.id || undefined,

      payment_status: item.payment_status || null,
      importHash: item.importHash || null,
      createdById: currentUser.id,
      updatedById: currentUser.id,
      createdAt: new Date(Date.now() + index * 1000),
    }));

    // Bulk create items
    const enrollments = await db.enrollments.bulkCreate(enrollmentsData, {
      transaction,
    });

    // For each item created, replace relation files

    return enrollments;
  }

  static async update(id, data, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;
    const globalAccess = currentUser.app_role?.globalAccess;

    const enrollments = await db.enrollments.findByPk(id, {}, { transaction });

    await enrollments.update(
      {
        payment_status: data.payment_status || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await enrollments.setStudent(data.student || null, {
      transaction,
    });

    await enrollments.setCourse(data.course || null, {
      transaction,
    });

    await enrollments.setOrganization(
      (globalAccess ? data.organization : currentUser.organization.id) || null,
      {
        transaction,
      },
    );

    return enrollments;
  }

  static async remove(id, options) {
    const currentUser = (options && options.currentUser) || { id: null };
    const transaction = (options && options.transaction) || undefined;

    const enrollments = await db.enrollments.findByPk(id, options);

    await enrollments.update(
      {
        deletedBy: currentUser.id,
      },
      {
        transaction,
      },
    );

    await enrollments.destroy({
      transaction,
    });

    return enrollments;
  }

  static async findBy(where, options) {
    const transaction = (options && options.transaction) || undefined;

    const enrollments = await db.enrollments.findOne(
      { where },
      { transaction },
    );

    if (!enrollments) {
      return enrollments;
    }

    const output = enrollments.get({ plain: true });

    output.student = await enrollments.getStudent({
      transaction,
    });

    output.course = await enrollments.getCourse({
      transaction,
    });

    output.organization = await enrollments.getOrganization({
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
        model: db.students,
        as: 'student',
      },

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

      if (filter.payment_status) {
        where = {
          ...where,
          payment_status: filter.payment_status,
        };
      }

      if (filter.student) {
        var listItems = filter.student.split('|').map((item) => {
          return Utils.uuid(item);
        });

        where = {
          ...where,
          studentId: { [Op.or]: listItems },
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
          count: await db.enrollments.count({
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
      : await db.enrollments.findAndCountAll({
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
          Utils.ilike('enrollments', 'course', query),
        ],
      };
    }

    const records = await db.enrollments.findAll({
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
