import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="d-flex align-items-center justify-content-between w-100 text-decoration-none"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: '67px', padding: '0 30px' }}
          >
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button type="button" className="btn btn-outline-primary">
                search
              </button>
            </div>
          </a>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <Link to="/" className="text-decoration-none d-block d-lg-none">
              <h1 className="m-0">
                <span className="text-primary">E</span>COURSES
              </h1>
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav py-0">
                <Link to="/" className="nav-item nav-link active">
                  Trang chủ
                </Link>
                <Link to="category" className="nav-item nav-link">
                  Danh mục
                </Link>
                <Link to="detail" className="nav-item nav-link">
                  Teachers
                </Link>
                <Link to="about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="contact" className="nav-item nav-link">
                  Contact
                </Link>
                <Link to="admin" className="nav-item nav-link">
                  Admin
                </Link>
              </div>
              <Link to="cart" className="btn btn-outline-info">
                <i className="fas fa-shopping-cart" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
