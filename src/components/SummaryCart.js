import React from 'react';
import { CartProvider, useCart } from 'react-use-cart';
const SummaryCart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, cartTotal } =
    useCart();
  return (
    <div className="col-md-12 col-lg-4">
      {items.map((item) => {
        return (
          <div className="summary">
            <h3>Summary</h3>
            <div className="summary-item">
              <span className="text">Giá tiền</span>
              <span className="price">${item.price}</span>
            </div>
            <div className="summary-item">
              <span className="text">Số lượng sản phẩm</span>
              <span className="price">{totalUniqueItems}</span>
            </div>
            <div className="summary-item">
              <span className="text">Shipping</span>
              <span className="price">$0</span>
            </div>
            <div className="summary-item">
              <span className="text">Tổng Tiền</span>
              <span className="price">${cartTotal}</span>
            </div>
          </div>
        )
      })}

    </div>
  );
};

export default SummaryCart;
