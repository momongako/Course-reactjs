import React from 'react';

const SummaryCart = () => {
  return (
    <div className="col-md-12 col-lg-4">
      <div className="summary">
        <h3>Summary</h3>
        <div className="summary-item">
          <span className="text">Subtotal</span>
          <span className="price">$360</span>
        </div>
        <div className="summary-item">
          <span className="text">Discount</span>
          <span className="price">$0</span>
        </div>
        <div className="summary-item">
          <span className="text">Shipping</span>
          <span className="price">$0</span>
        </div>
        <div className="summary-item">
          <span className="text">Total</span>
          <span className="price">$360</span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCart;
