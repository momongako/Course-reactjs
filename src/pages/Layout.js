import React from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider, useCart } from 'react-use-cart';

const Layout = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
