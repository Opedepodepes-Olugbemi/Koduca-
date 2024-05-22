import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';
import openAiSlice from './openAiSlice';

import usersSlice from './users/usersSlice';
import analyticsSlice from './analytics/analyticsSlice';
import coursesSlice from './courses/coursesSlice';
import discussion_boardsSlice from './discussion_boards/discussion_boardsSlice';
import enrollmentsSlice from './enrollments/enrollmentsSlice';
import instructorsSlice from './instructors/instructorsSlice';
import postsSlice from './posts/postsSlice';
import studentsSlice from './students/studentsSlice';
import rolesSlice from './roles/rolesSlice';
import permissionsSlice from './permissions/permissionsSlice';
import organizationsSlice from './organizations/organizationsSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,
    openAi: openAiSlice,

    users: usersSlice,
    analytics: analyticsSlice,
    courses: coursesSlice,
    discussion_boards: discussion_boardsSlice,
    enrollments: enrollmentsSlice,
    instructors: instructorsSlice,
    posts: postsSlice,
    students: studentsSlice,
    roles: rolesSlice,
    permissions: permissionsSlice,
    organizations: organizationsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
