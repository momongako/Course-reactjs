import React from "react";
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartProvider, useCart } from 'react-use-cart';
import { useState } from "react";

const Layout = () => {
  const [checkLogin, setLogin] = useState('true');
  const ButtoncheckLogin = () => {
    return setLogin(checkLogin === 'true' ? 'false' : 'true')

  }
  console.log(checkLogin)
  return (
    <>
      <CartProvider>
        <Header ButtoncheckLogin={ButtoncheckLogin} />
        <Outlet ButtoncheckLogin={ButtoncheckLogin} />
        {/* <button onClick={ButtoncheckLogin} >click</button> */}
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
