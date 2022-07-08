import React from 'react';
import SummaryCart from '../components/SummaryCart';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  console.log('>>>check items : ', items)
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
                          <div key={item.id} className="row">
                            <div className="col-md-3">
                              <img
                                className="img-fluid mx-auto d-block image"
                                src={item.picture}
                              />
                            </div>
                            <div className="col-md-8">
                              <div className="info">
                                <div className="row">
                                  <div className="col-md-4 product-name">
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
                                  <div className="col-md-2 quantity">


                                    Quantity  {item.quantity}

                                  </div>
                                  <div className="col-md-1 ">
                                    {/* <button type="button" class="btn btn-primary"
                                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >
                                      +
                                    </button> */}
                                    <i onClick={() => updateItemQuantity(item.id, item.quantity + 1)} class="fa fad fa-chevron-up"></i>
                                    <i onClick={() => updateItemQuantity(item.id, item.quantity - 1)} class="fa fad fa-chevron-down"></i>
                                  </div>

                                  {/* <div className="col-md-1 price">
                                    <i onClick={() => updateItemQuantity(item.id, item.quantity - 1)} class="fa fad fa-chevron-down"></i>
                                    <button type="button" class="btn btn-primary"
                                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >
                                      -
                                    </button>
                                  </div> */}
                                  <div className="col-md-3 ">
                                    <h2>${item.price}</h2>
                                  </div>
                                  <div className='col-md-2 '>
                                    {/* <button type="button" class="btn btn-danger" onClick={() => removeItem(item.id)} >delete</button> */}
                                    <h2><i onClick={() => removeItem(item.id)} class="fa fad fa-trash"></i></h2>
                                  </div>
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
                <div class="col-md-12 text-right">
                  <Link to="/checkout">
                    <button className="btn btn-danger m-1" type="button">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
