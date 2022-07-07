import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import CourseDetail from "./pages/CourseDetail";
import Admin from "./pages/Admin";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseData, fetchCourseActions, fetchCategoryActions } from "./store/Fetch";
import CourseCategory from "./pages/CourseCategory";
import { getCourses } from './store/Fetch'

export default function App() {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState(null)
  const data = useSelector((state) => state.courses.courseData)
  
  // const requestData = () => {
  //   async () => {
  //     dispatch(fetchCourseActions.fetchDataPending);
  //     fetch("https://62c253232af60be89ed60e41.mockapi.io/Courses")
  //       .then((response) => response.json())
  //       .then((data) => dispatch(fetchCourseActions.fetchDataSuccess(data)))
  //       .then(setCourseData(data))
  //       .catch((error) => dispatch(fetchCourseActions.fetchDataFailed(error)));
  //   }
  // };
  
  
  
  const requestData = () => {
    dispatch(fetchCourseActions.fetchDataPending);
    fetch("https://62c253232af60be89ed60e41.mockapi.io/Courses")
      .then((response) => response.json())
      .then((data) => dispatch(fetchCourseActions.fetchDataSuccess(data)))
      .then(setCourseData(data))
      .catch((error) => dispatch(fetchCourseActions.fetchDataFailed(error)));
  };

  useEffect(() => {
    requestData()
  }, []);

  useEffect(() => {
    setCourseData(data)
    if (courseData !== null) { requestCategories() }
  }, [data]);


  const categories = [];
  const test = [];
  const requestCategories = () => {
    courseData.forEach((item) => {
      if (test.indexOf(item.category) === -1) {
        test.push(item.category);
        categories.push({ name: item.category, picture: item.catPic });
      }
    });
    dispatch(fetchCategoryActions.updateCategories());
  }


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
          <Route path="courseCategory/:name" element={<CourseCategory />} />
          <Route path="admin" element={<Admin />} />
          <Route path='detail/:id' element={<CourseDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
