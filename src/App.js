import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import CourseDetail from './pages/CourseDetail';
import Admin from './pages/Admin';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourseData, fetchActions } from './store/Fetch';

export default function App() {
  const dispatch = useDispatch();
  const requestData = () => {
    dispatch(fetchActions.fetchDataPending);
    fetch('https://62c253232af60be89ed60e41.mockapi.io/Courses')
      .then((response) => response.json())
      .then((data) => dispatch(fetchActions.fetchDataSuccess(data)))
      .catch((error) => dispatch(fetchActions.fetchDataFailed(error)));
  };

  useEffect(() => {
    requestData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="detail" element={<CourseDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="category" element={<Category />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
