import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initData = {
  isPending: false,
  courseData: [],
  error: '',
};

const initCategories ={
  categories:[]
}

export const fetchCourse = createSlice({
  name: 'courseData',
  initialState: initData,
  reducers: {
    fetchDataSuccess(state, action) {
      state.courseData = action.payload;
    },
    fetchDataPending(state) {
      state.state.isPending = true;
    },
    fetchDataFailed(state, action) {
      state.error = action.payload;
      state.isPending = false;
    },
  },
});

export const fetchCategories = createSlice({
  name: 'categories',
  initialState: initCategories,
  reducers: {
    updateCategories(state,action){
      state.categories=action
    }
  }
});

export const fetchCourseActions = fetchCourse.actions;
export const fetchCategoryActions = fetchCategories.actions;