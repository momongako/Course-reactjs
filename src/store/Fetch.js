import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initData = {
  isPending: false,
  courseData: [],
  error: '',
};

const initCategories ={
  categories:[]
}

// export const getCourses =createAsyncThunk(
//   'courseData/getCourses',
//   // async ({limit},{dispatch,getState}) => {
//   async () => {
//     dispatch(fetchCourseActions.fetchDataPending);
//     fetch("https://62c253232af60be89ed60e41.mockapi.io/Courses")
//       .then((response) => response.json())
//       .then((data) => dispatch(fetchCourseActions.fetchDataSuccess(data)))
//       .then(setCourseData(data))
//       .catch((error) => dispatch(fetchCourseActions.fetchDataFailed(error)));
      
//   }
// )

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



// export const getCourses =createAsyncThunk(
//   'courseData/getCourses',
//   async () => {
//     fetch("https://62c253232af60be89ed60e41.mockapi.io/Courses")
//       .then((response) => response.json())
//   }
// )

// export const fetchCourse = createSlice({
//   name: 'courseData',
//   initialState: initData,
//   reducers: {
//     [getCourses.success](state, {payload}) {
//       state.courseData = payload;
//     },
//     [getCourses.pending](state) {
//       state.state.isPending = true;
//     },
//     [getCourses.failed](state, action) {
//       state.error = action.payload;
//       state.isPending = false;
//     },
//   },
// });

// export const fetchCourse = createSlice({
//   name: 'courseData',
//   initialState: initData,
//   reducers: {
//     fetchDataSuccess(state, action) {
//       state.courseData = action.payload;
//     },
//     fetchDataPending(state) {
//       state.state.isPending = true;
//     },
//     fetchDataFailed(state, action) {
//       state.error = action.payload;
//       state.isPending = false;
//     },
//   },
// });

export const fetchCategories = createSlice({
  name: 'categories',
  initialState: initCategories,
  reducers: {
    updateCategories(state,action){
      state.categories.push(action.payload)
    }
  }
});

export const fetchCourseActions = fetchCourse.actions;
export const fetchCategoryActions = fetchCategories.actions;