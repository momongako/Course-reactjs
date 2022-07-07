import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Admin.css";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdminModal from "../components/AdminModal";
import { useSelector, useDispatch } from "react-redux";


const Admin = () => {
  const data = useSelector((state) => state.courses.courseData);
  const isPending = useSelector((state) => state.courses.isPending);
  const [products, setProducts] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(-1);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setProducts(data);
    if (products != null) {
      setPage(0);
    }
  }, [data]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (products !== null) {
      let itemsPerPage = 5;
      const starOffset = page * itemsPerPage;
      let endOffset = (page + 1) * itemsPerPage;
      if (endOffset > products.length) {
        endOffset = products.length;
      }
      setCurrentItems(products.slice(starOffset, endOffset));
      setPageCount(Math.ceil(products.length / itemsPerPage));
    }
  }, [page]);

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  var products_list = [];
  if (products !== null && currentItems !== null) {
    products_list = currentItems.map((item, key) => (
      <tr key={key}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.category}</td>
        <td>{item.level>75?'Expert':item.level>50?'Advanced':item.level>25?'Intermediate':'Beginner'}</td>
        <td><img src={item.picture} alt='' width='50px' height='50px'/></td>
        <td>${item.price}</td>
        <td>
          <button onClick={handleShow} className="btn btn-primary mx-1 adminEditButton" data-toggle="modal">
          <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="btn btn-danger mx-1 adminDelete,Button" data-toggle="modal">
          <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return products !== null ? (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdminModal />
          </Modal.Body>
        </Modal>
      </>
      <nav
        className=" w3-collapse w3-animate-left"
        style={{ zIndex: 3, width: "300px", height: "46%" }}
        id="mySidebar"
      >
        <br />
        <div className="w3-container">
          <a
            href="#"
            onClick="w3_close()"
            className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
            title="close menu"
          >
            <i className="fa fa-remove" />
          </a>
          <img
            src="https://www.w3schools.com/w3images/avatar_g2.jpg"
            style={{ width: "45%" }}
            className="w3-round"
          />
          <br />
          <br />
          <h4>
            <b>PORTFOLIO</b>
          </h4>
          <p className="w3-text-grey">Template by W3.CSS</p>
        </div>
        <div className="w3-bar-block">
          <a
            onClick="w3_close()"
            className="w3-bar-item w3-button w3-padding w3-text-teal"
          >
            <i className="fa fa-th-large fa-fw w3-margin-right" />
            PORTFOLIO
          </a>
          <a
            href="#about"
            onClick="w3_close()"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-user fa-fw w3-margin-right" />
            ABOUT
          </a>
          <a
            href="#contact"
            onClick="w3_close()"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-envelope fa-fw w3-margin-right" />
            CONTACT
          </a>
        </div>
        <div className="w3-panel w3-large">
          <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" />
        </div>
      </nav>

      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick="w3_close()"
        style={{ cursor: "pointer" }}
        title="close side menu"
        id="myOverlay"
      />

      <div className="w3-main" style={{ marginLeft: "300px" }}>
        <header id="portfolio">
          <a href="#">
            <img
              src="img/blog-1.jpg"
              style={{ width: "65px" }}
              className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
            />
          </a>
          <span
            className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
            onClick="w3_open()"
          >
            <i className="fa fa-bars" />
          </span>
          <div className="w3-container">
            <h1>
              <b>Trang quản lý</b>
            </h1>
            <div className="w3-section w3-bottombar w3-padding-16">
              <span className="w3-margin-right">Filter:</span>
              <button className="w3-button w3-black">ALL</button>
              <button className="w3-button w3-white">
                <i className="fa fa-diamond w3-margin-right" />
                Design
              </button>
              <button className="w3-button w3-white w3-hide-small">
                <i className="fa fa-photo w3-margin-right" />
                Photos
              </button>
              <button className="w3-button w3-white w3-hide-small">
                <i className="fa fa-map-pin w3-margin-right" />
                Art
              </button>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-xs-6">
                    <h2>
                      Manage <b>Employees</b>
                    </h2>
                  </div>
                  <div className="col-xs-6">
                    <a
                      onClick={handleShow}
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i>{" "}
                      <span>Add New Employee</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                  <div className="dataTable-top">
                    <div className="dataTable-dropdown">
                      <label>
                        <select className="dataTable-selector">
                          <option value={5}>5</option>
                          <option value={10} selected>
                            10
                          </option>
                          <option value={15}>15</option>
                          <option value={20}>20</option>
                          <option value={25}>25</option>
                        </select>
                        entries per page
                      </label>
                    </div>
                    <div className="dataTable-search">
                      <input
                        className="dataTable-input"
                        placeholder="Search..."
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="dataTable-container">
                    <table id="datatablesSimple" className="dataTable-table">
                      <thead>
                        <tr>
                          <th>
                              No.
                          </th>
                          <th>
                              Course Name
                          </th>
                          <th>
                              Category
                          </th>
                          <th>
                              Level
                          </th>
                          <th>
                              Picture
                          </th>
                          <th>
                              Price
                          </th>
                          <th>
                              Salary
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {products_list}
                      </tbody>
                    </table>
                  </div>
                  <div className="clearfix">
                <div className="hint-text">
                  Showing <b>5</b> out of <b>{products.length}</b> entries
                </div>
                <ReactPaginate
                  previousLabel="Previous"
                  nextLabel="Next"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakLabel="..."
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName="pagination"
                  activeClassName="active"
                  forcePage={page}
                />
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div class="text-center">
      <button class="btn btn-primary" type="button" disabled>
        <span
          class="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};
export default Admin;
