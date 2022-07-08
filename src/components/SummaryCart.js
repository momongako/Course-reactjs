import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
const SummaryCart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();
  return (
    <div className="col-md-12 col-lg-4">


      <div className="summary">
        <h3>Summary</h3>
        <br />
        <div className="summary-item">
          <span className="text">Khóa Học :</span>
          <span className="price">{totalUniqueItems}</span>
        </div>
        <br />
        <div className="summary-item">
          <span className="text">Tổng Tiền :</span>
          <span className="price">${cartTotal}</span>
        </div>
      </div>



    </div>
  );
};

export default SummaryCart;
