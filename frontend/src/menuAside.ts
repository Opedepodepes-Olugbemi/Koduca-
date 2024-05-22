import * as icon from '@mdi/js';
import { MenuAsideItem } from './interfaces';

const menuAside: MenuAsideItem[] = [
  {
    href: '/dashboard',
    icon: icon.mdiViewDashboardOutline,
    label: 'Dashboard',
  },

  {
    href: '/users/users-list',
    label: 'Users',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiAccountGroup ? icon.mdiAccountGroup : icon.mdiTable,
    permissions: 'READ_USERS',
  },
  {
    href: '/analytics/analytics-list',
    label: 'Analytics',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiChartLine ? icon.mdiChartLine : icon.mdiTable,
    permissions: 'READ_ANALYTICS',
  },
  {
    href: '/courses/courses-list',
    label: 'Courses',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiBookOpenPageVariant
      ? icon.mdiBookOpenPageVariant
      : icon.mdiTable,
    permissions: 'READ_COURSES',
  },
  {
    href: '/discussion_boards/discussion_boards-list',
    label: 'Discussion boards',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiForum ? icon.mdiForum : icon.mdiTable,
    permissions: 'READ_DISCUSSION_BOARDS',
  },
  {
    href: '/enrollments/enrollments-list',
    label: 'Enrollments',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiClipboardCheck ? icon.mdiClipboardCheck : icon.mdiTable,
    permissions: 'READ_ENROLLMENTS',
  },
  {
    href: '/instructors/instructors-list',
    label: 'Instructors',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiAccountTie ? icon.mdiAccountTie : icon.mdiTable,
    permissions: 'READ_INSTRUCTORS',
  },
  {
    href: '/posts/posts-list',
    label: 'Posts',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiCommentText ? icon.mdiCommentText : icon.mdiTable,
    permissions: 'READ_POSTS',
  },
  {
    href: '/students/students-list',
    label: 'Students',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiSchool ? icon.mdiSchool : icon.mdiTable,
    permissions: 'READ_STUDENTS',
  },
  {
    href: '/roles/roles-list',
    label: 'Roles',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiShieldAccountVariantOutline
      ? icon.mdiShieldAccountVariantOutline
      : icon.mdiTable,
    permissions: 'READ_ROLES',
  },
  {
    href: '/permissions/permissions-list',
    label: 'Permissions',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiShieldAccountOutline
      ? icon.mdiShieldAccountOutline
      : icon.mdiTable,
    permissions: 'READ_PERMISSIONS',
  },
  {
    href: '/organizations/organizations-list',
    label: 'Organizations',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    icon: icon.mdiTable ? icon.mdiTable : icon.mdiTable,
    permissions: 'READ_ORGANIZATIONS',
  },
  {
    href: '/profile',
    label: 'Profile',
    icon: icon.mdiAccountCircle,
  },
  {
    href: '/api-docs',
    target: '_blank',
    label: 'Swagger API',
    icon: icon.mdiFileCode,
    permissions: 'READ_API_DOCS',
  },
];

export default menuAside;
