import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './CartSlice';
import { fetchCourse } from './Fetch';
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: { cart: cartSlice.reducer, courses: fetchCourse.reducer }
});
export default store;
