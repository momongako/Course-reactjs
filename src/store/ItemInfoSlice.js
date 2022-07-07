import { createSlice } from '@reduxjs/toolkit';

const initCourseInfo = {
courseInfo:[]
};
export const courseInfoSlice = createSlice({
  name: 'courseInfo',
  initialState: initCourseInfo,
  reducers: {
    getCourseInfo(state, action) {
      state.courseInfo = action.payload
    },
  },
});

export const courseInfoActions = courseInfoSlice.actions;
