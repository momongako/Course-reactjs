import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './CartSlice';
import { fetchCourse } from './Fetch';

const store = configureStore({
  // reducer: { cart: cartSlice.reducers}
  reducer: { cart: cartSlice.reducer, courses: fetchCourse.reducer }
});
export default store;
