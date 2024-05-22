import dayjs from 'dayjs';
import _ from 'lodash';

export default {
  filesFormatter(arr) {
    if (!arr || !arr.length) return [];
    return arr.map((item) => item);
  },
  imageFormatter(arr) {
    if (!arr || !arr.length) return [];
    return arr.map((item) => ({
      publicUrl: item.publicUrl || '',
    }));
  },
  oneImageFormatter(arr) {
    if (!arr || !arr.length) return '';
    return arr[0].publicUrl || '';
  },
  dateFormatter(date) {
    if (!date) return '';
    return dayjs(date).format('YYYY-MM-DD');
  },
  dateTimeFormatter(date) {
    if (!date) return '';
    return dayjs(date).format('YYYY-MM-DD HH:mm');
  },
  booleanFormatter(val) {
    return val ? 'Yes' : 'No';
  },
  dataGridEditFormatter(obj) {
    return _.transform(obj, (result, value, key) => {
      if (_.isArray(value)) {
        result[key] = _.map(value, 'id');
      } else if (_.isObject(value)) {
        result[key] = value.id;
      } else {
        result[key] = value;
      }
    });
  },

  usersManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.firstName);
  },
  usersOneListFormatter(val) {
    if (!val) return '';
    return val.firstName;
  },
  usersManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.firstName };
    });
  },
  usersOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.firstName, id: val.id };
  },

  coursesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.title);
  },
  coursesOneListFormatter(val) {
    if (!val) return '';
    return val.title;
  },
  coursesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.title };
    });
  },
  coursesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.title, id: val.id };
  },

  discussion_boardsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.course);
  },
  discussion_boardsOneListFormatter(val) {
    if (!val) return '';
    return val.course;
  },
  discussion_boardsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.course };
    });
  },
  discussion_boardsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.course, id: val.id };
  },

  enrollmentsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.course);
  },
  enrollmentsOneListFormatter(val) {
    if (!val) return '';
    return val.course;
  },
  enrollmentsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.course };
    });
  },
  enrollmentsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.course, id: val.id };
  },

  instructorsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.user);
  },
  instructorsOneListFormatter(val) {
    if (!val) return '';
    return val.user;
  },
  instructorsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.user };
    });
  },
  instructorsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.user, id: val.id };
  },

  postsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.content);
  },
  postsOneListFormatter(val) {
    if (!val) return '';
    return val.content;
  },
  postsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.content };
    });
  },
  postsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.content, id: val.id };
  },

  studentsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.user);
  },
  studentsOneListFormatter(val) {
    if (!val) return '';
    return val.user;
  },
  studentsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.user };
    });
  },
  studentsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.user, id: val.id };
  },

  rolesManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  rolesOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  rolesManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  rolesOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  permissionsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  permissionsOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  permissionsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  permissionsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },

  organizationsManyListFormatter(val) {
    if (!val || !val.length) return [];
    return val.map((item) => item.name);
  },
  organizationsOneListFormatter(val) {
    if (!val) return '';
    return val.name;
  },
  organizationsManyListFormatterEdit(val) {
    if (!val || !val.length) return [];
    return val.map((item) => {
      return { id: item.id, label: item.name };
    });
  },
  organizationsOneListFormatterEdit(val) {
    if (!val) return '';
    return { label: val.name, id: val.id };
  },
};
