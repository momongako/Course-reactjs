import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initData = {
  isPending: false,
  courseData: [],
  error: '',
};

export const fetchCourse = createSlice({
  name: 'courseData',
  initialState: initData,
  reducers: {
    fetchDataSuccess(state, action) {
      console.log(action);
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

export const fetchActions = fetchCourse.actions;

// export const fetchCourseData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         'https://62c253232af60be89ed60e41.mockapi.io/Courses'
//       );
//       if (!response.ok) {
//         throw new Error('Data not found');
//       }
//       const data = await respond.json();
//       return data;
//     };
//     try {
//       const courseData = await fetchData();
//       dispatch(fetchActions.fetchDataSuccess(courseData));
//     } catch (error) {
//       dispatch();
//     }
//   };
// };
