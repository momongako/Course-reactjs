import React from 'react';
import SummaryCart from '../components/SummaryCart';
import './Checkout.css';
import { CartProvider, useCart } from 'react-use-cart';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';;


const Checkout = () => {
  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')
  const [title3, setTitle3] = useState('')
  let navigate = useNavigate();
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal, emptyCart } =
    useCart();
  const Addcart = () => {


    if (title && title2 && title3) {
      toast.success('Thanh Toán thành công', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTitle('')
      setTitle2('')
      setTitle3('')
      emptyCart();
      navigate(-1);

      return;

    } else (
      toast.error('Sai dữ liệu vui lòng nhập lại hoặc kiểm tra giỏ hàng!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    )

    // toast.error('Dữ liệu sai vui lòng nhập lại!')
  }
  return (
    <div className="container">
      <div className="card mx-auto col-md-5 col-8 mt-3 p-0">
        <img className="mx-auto pic" src="http://300b5338.vws.vegacdn.vn/image/img.news/0/0/0/8341.jpg?v=1&w=480&h=295&nocache=1" />
        <div className="card-title d-flex px-4">
          <p className="item text-muted">Tổng Tiền : </p>
          <p>${cartTotal}</p>
        </div>
        <div className="card-body">
          <p className="text-muted">Your payment details</p>
          <div className="numbr mb-3">
            <i className=" col-1 fas fa-credit-card text-muted p-0" />
            <input value={title} onChange={(event) => setTitle(event.target.value)} className="col-10 p-0" type="text" placeholder="Card Number" />
          </div>
          <div className="line2 col-lg-12 col-12 mb-4">
            <i className="col-1 far fa-calendar-minus text-muted p-0" />
            <input value={title2} onChange={(event) => setTitle2(event.target.value)} className="cal col-5 p-0" type="text" placeholder="MM/YY" />
            <i className="col-1 fas fa-lock text-muted" />
            <input value={title3} onChange={(event) => setTitle3(event.target.value)} className="cvc col-5 p-0" type="password" placeholder="CVC" />
          </div>
        </div>
        <div className="footer text-center p-0">
          <div onClick={Addcart} className="col-lg-12 col-12 p-0">
            <p className="order">Order Now</p>
          </div>
        </div>
      </div>
    </div>

  )
};
export default Checkout;
