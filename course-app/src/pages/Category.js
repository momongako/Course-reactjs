import React from 'react';

const Category = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-5">
          <h5
            className="text-primary text-uppercase mb-3"
            style={{ letterSpacing: '5px' }}
          >
            Danh mục
          </h5>
          <h1>Danh mục phổ biến nhất</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">Web Design</h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">Development</h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">Game Design</h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">Apps Design</h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">Marketing</h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">Research</h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">
                  Content Writing
                </h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="cat-item position-relative overflow-hidden rounded mb-2">
              IMG
              <a className="cat-overlay text-white text-decoration-none" href>
                <h4 className="text-white font-weight-medium">SEO</h4>
                <span>100 Courses</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
