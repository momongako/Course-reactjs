import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './CartSlice';
import { fetchCourse,fetchCategories } from './Fetch';
import { courseInfoSlice } from './ItemInfoSlice'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: { cart: cartSlice.reducer, courses: fetchCourse.reducer, courseInfo: courseInfoSlice.reducer, categories: fetchCategories.reducer}
});
export default store;
