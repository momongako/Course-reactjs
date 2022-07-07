import React from 'react';
import Category from './Category';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import moment from 'moment';
import Loading from './Loading';
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62c253232af60be89ed60e41.mockapi.io/Courses';
    // if (search.length > 0) {
    //     url = url + '?search=' + search;
    // }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {


        setData(data); //setStudents(data)
      });
    console.log('>>> check dataUse : ', data);

  }, []);
  const [itemsToShow, setItemToShow] = useState(6);
  const showMore = () => {
    setItemToShow(itemsToShow + 6);

  }

  return (
    <div className="container">
      <Category data={data} />
      <div className="button-category col text-center">
        <button
          type="button"
          className="btn btn-primary btn-lg align-content-center"
        >
          <Link to="category">Courses</Link>
        </button>
      </div>

      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5
              className="text-primary text-uppercase mb-3"
              style={{ letterSpacing: '5px' }}
            >
              Khóa Học
            </h5>
            <h1>Các khóa học phổ biến</h1>
          </div>
          <div className="row">

            {data && data.length > 0 ?
              data.slice(0, itemsToShow).map((item, index) => {
                return (

                  <div key={index + 1} className="col-lg-4 col-md-6 mb-4">
                    <Link to={'/detail/' + item.id} className="h5">
                      <div className="rounded overflow-hidden mb-2">
                        <img className="img-fluid" src={require(`./img/course-${++index >= 6 ? index = 1 : index + 1}.jpg`)} />
                        <div className="bg-secondary p-4">
                          <div className="d-flex justify-content-between mb-3">
                            <small className="m-0">
                              <i className="fa fa-users text-primary mr-2" />
                              {item.rating} Students
                            </small>
                            <small className="m-0">
                              <i className="far fa-clock text-primary mr-2" />
                              {moment(item.date.slice(0, 10), 'DD-MM-YYYY').format('DD/MM/YYYY')}
                            </small>
                          </div>
                          <Link to={'/detail/' + item.id} className="h5">
                            {item.name}
                          </Link>
                          <div className="border-top mt-4 pt-4">
                            <div className="d-flex justify-content-between">
                              <h6 className="m-0">
                                <i className="fa fa-star text-primary mr-2" />
                                4.5
                                <small>({item.level})</small>
                              </h6>
                              <h5 className="m-0">${item.price}</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>


                  </div>

                )
              })
              :
              <Loading />
            }
            <div className='text-center'>
              <button type='button' className='btn' onClick={() => showMore()}>Xem thêm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5
              className="text-primary text-uppercase mb-3"
              style={{ letterSpacing: '5px' }}
            >
              Giáo viên
            </h5>
            <h1>Giáo viên của chúng tôi</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src={require(`./img/team-${1}.jpg`)} />
                  <div className="team-social">
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src={require(`./img/team-${2}.jpg`)} />
                  <div className="team-social">
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src={require(`./img/team-${3}.jpg`)} />
                  <div className="team-social">
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src={require(`./img/team-${4}.jpg`)} />
                  <div className="team-social">
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-outline-light btn-square mx-1"
                      href="#"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
                <div className="bg-secondary p-4">
                  <h5>Jhon Doe</h5>
                  <p className="m-0">Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="fa fa-angle-double-up" />
      </a>
    </div>
  );
};

export default Home;
