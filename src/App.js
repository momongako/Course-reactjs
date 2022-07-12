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
import CourseEdit from "./pages/CourseEdit";
import Admin from "./pages/Admin";
import { useEffect, useState, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourseData, fetchCourseActions, fetchCategoryActions } from "./store/Fetch";
import CourseCategory from "./pages/CourseCategory";
import { getCourses } from './store/Fetch'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotPage from "./pages/NotPage";
import Login from "./pages/Login";
import AddCourses from './pages/AddCourse';

export const themeContext = createContext();

export default function App() {
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState(null)
  const data = useSelector((state) => state.courses.courseData)

  const [theme, settheme] = useState('dark');
  const themeEdit = () => {
    settheme(theme === 'dark' ? 'light' : 'dark');
  };
  console.log(theme)



  return (
    <themeContext.Provider value={theme}>

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
            <Route path="admin/addcourse" element={<AddCourses />} />
            <Route path='detail/:id' element={<CourseDetail />} />
            <Route path="admin/edit/:id" element={<CourseEdit />} />
            <Route path="login" element={<Login themeEdit={themeEdit} />} />
            <Route path='*' element={<NotPage />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </BrowserRouter>
    </themeContext.Provider>

  );
}
