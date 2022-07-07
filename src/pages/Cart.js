import React from 'react';
import SummaryCart from '../components/SummaryCart';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  return (
    <div>
      <main className="page">
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2>Cart ({totalUniqueItems}) </h2>
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
                      {items.map((item, index) => {
                        return (
                          <div className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid mx-auto d-block image"
                                src={item.picture}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="info">
                                <div className="row">
                                  <div className="col-md-5 product-name">
                                    <div className="product-name">
                                      <a href="#">{item.name}</a>
                                      <div className="product-info">
                                        <div>
                                          Danh mục:{' '}
                                          <span className="value">{item.category}</span>
                                        </div>
                                        <div>
                                          Tiền: <span className="value">${item.price}</span>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4 quantity">




                                  </div>
                                  <div className="col-md-3 price">
                                    <span>${item.price}</span>
                                  </div>
                                  <button onClick={() => removeItem(item.id)} >delete</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
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
