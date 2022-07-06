import React from 'react';
import SummaryCart from '../components/SummaryCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Cart</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quam urna, dignissim nec auctor in, mattis vitae leo.
              </p>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    <div className="product">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="img-fluid mx-auto d-block image"
                            src="assets/img/image.jpg"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="info">
                            <div className="row">
                              <div className="col-md-5 product-name">
                                <div className="product-name">
                                  <a href="#">Lorem Ipsum dolor</a>
                                  <div className="product-info">
                                    <div>
                                      Display:{' '}
                                      <span className="value">5 inch</span>
                                    </div>
                                    <div>
                                      RAM: <span className="value">4GB</span>
                                    </div>
                                    <div>
                                      Memory:{' '}
                                      <span className="value">32GB</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 quantity">
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                  id="quantity"
                                  type="number"
                                  defaultValue={1}
                                  className="form-control quantity-input"
                                />
                              </div>
                              <div className="col-md-3 price">
                                <span>$120</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="img-fluid mx-auto d-block image"
                            src="assets/img/image.jpg"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="info">
                            <div className="row">
                              <div className="col-md-5 product-name">
                                <div className="product-name">
                                  <a href="#">Lorem Ipsum dolor</a>
                                  <div className="product-info">
                                    <div>
                                      Display:{' '}
                                      <span className="value">5 inch</span>
                                    </div>
                                    <div>
                                      RAM: <span className="value">4GB</span>
                                    </div>
                                    <div>
                                      Memory:{' '}
                                      <span className="value">32GB</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 quantity">
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                  id="quantity"
                                  type="number"
                                  defaultValue={1}
                                  className="form-control quantity-input"
                                />
                              </div>
                              <div className="col-md-3 price">
                                <span>$120</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="img-fluid mx-auto d-block image"
                            src="assets/img/image.jpg"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="info">
                            <div className="row">
                              <div className="col-md-5 product-name">
                                <div className="product-name">
                                  <a href="#">Lorem Ipsum dolor</a>
                                  <div className="product-info">
                                    <div>
                                      Display:{' '}
                                      <span className="value">5 inch</span>
                                    </div>
                                    <div>
                                      RAM: <span className="value">4GB</span>
                                    </div>
                                    <div>
                                      Memory:{' '}
                                      <span className="value">32GB</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 quantity">
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                  id="quantity"
                                  type="number"
                                  defaultValue={1}
                                  className="form-control quantity-input"
                                />
                              </div>
                              <div className="col-md-3 price">
                                <span>$120</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SummaryCart />
                <Link to="/checkout">
                  <button className="btn btn-danger m-1" type="button">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
