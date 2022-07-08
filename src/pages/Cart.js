import React from 'react';
import SummaryCart from '../components/SummaryCart';
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();
  console.log('>>>check items : ', items)
  let isEmptyObj = Object.keys(items).length === 0;
  console.log('check isEmtyObj true and false : ', isEmptyObj)
  return (
    <>
      {isEmptyObj === false ?
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

                                      <div className="col-md-6 ">
                                        <span><h2>  ${item.price}</h2></span>
                                      </div>
                                      <div className='col-md-2 '>
                                        {/* <button type="button" class="btn btn-danger" onClick={() => removeItem(item.id)} >delete</button> */}
                                        <h2><i onClick={() => removeItem(item.id)} class="fa fad fa-trash"></i></h2>
                                      </div>
                                      <div>{item.description}</div>
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
        :
        <>
          <div className="cart-empty clearfix d-flex justify-content-center">
            <div className="title">Bạn chưa chọn được khóa học nào!</div>
          </div>
          <br />
          <div className="cart-empty clearfix d-flex justify-content-center">
            <img src="https://media-kyna.cdn.vccloud.vn/img/cart/icon-checkout-empty-1.png" className="img-fluid" />

          </div>
          <br />
          <br />
          <div class="col text-center">
            <button onClick={() => navigate(-1)} class="btn btn-primary">Go Back</button>
          </div>
        </>
      }

    </>
  );
};

export default Cart;
