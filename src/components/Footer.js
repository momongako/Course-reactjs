import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let url = 'https://62b04ad4e460b79df042497f.mockapi.io/ListTest/dataCourse';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  var catagory_list = [];
  if (data != null)
    catagory_list = data.map((item) => {
      return (

        <Link to={'/coursecategory' + '/' + item.category}>
          <div className="col-lg-3 col-md-6 mb-4 text-white" style={{float:'left', marginRight:'50px',marginLeft:'30px'}}>
            {item.category}
          </div>
        </Link>

      )
    })
  return (
    <>
      <div
        className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
        style={{ marginTop: '90px' }}
      >
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: '5px' }}
                >
                  Liên hệ
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2" />
                  Peakview Tower, Phố Hoàng Cầu, Ô Chợ Dừa, Đống Đa, Hà Nội,
                  Việt Nam
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2" />
                  024 3202 0339
                </p>
                <p>
                  <i className="fa fa-envelope mr-2" />
                  changwon46.lee@multicampus.com
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-outline-light btn-square" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: '5px', marginLeft:'45px' }}
                >
                  Our Courses
                </h5>
                {catagory_list}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: '5px' }}
            >
              Newsletter
            </h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: '30px' }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}
      >
        <div className="row">
          <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0 text-white">
              © <a href="#">Domain Name</a>. All Rights Reserved. Designed by{' '}
              <a href="https://htmlcodex.com">HTML Codex</a>
            </p>
          </div>
          <div className="col-lg-6 text-center text-md-right">
            <ul className="nav d-inline-flex">
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Privacy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white py-0" href="#">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
