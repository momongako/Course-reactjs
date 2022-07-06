import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Admin.css';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AdminModal from '../components/AdminModal';
import { useSelector, useDispatch } from "react-redux";

const Admin = () => {
  const data = useSelector((state) => state.courses.courseData);
  const isPending = useSelector((state) => state.courses.isPending);
  const [products, setProducts] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(-1);
  const [show, setShow] = useState(false);
  
  console.log('Admin 1',data)

  useEffect(()=>{
    setProducts(data);
    if (products != null) {
      setPage(0);}
  },[data])

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
  if (products !== null&&currentItems!==null) {
    products_list = currentItems.map((item,key) => (
      <tr key={key}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td>{item.phone}</td>
        <td>
          <a onClick={handleShow} className="edit" data-toggle="modal">
            <i className="material-icons" data-toggle="tooltip" title="Edit">
              
            </i>
          </a>
          <a className="delete" data-toggle="modal">
            <i className="material-icons" data-toggle="tooltip" title="Delete">
              
            </i>
          </a>
        </td>
      </tr>
    ));
  }
  
  return (
    <>
    {products!==null?(
      <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdminModal />
          </Modal.Body>
          {/* <Modal.Footer>

            </Modal.Footer> */}
        </Modal>
      </>
      <nav
        className=" w3-collapse w3-animate-left"
        style={{ zIndex: 3, width: '300px', height: '46%' }}
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
            style={{ width: '45%' }}
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
      {/* Overlay effect when opening sidebar on small screens */}
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onClick="w3_close()"
        style={{ cursor: 'pointer' }}
        title="close side menu"
        id="myOverlay"
      />
      {/* !PAGE CONTENT! */}
      <div className="w3-main" style={{ marginLeft: '300px' }}>
        {/* Header */}
        <header id="portfolio">
          <a href="#">
            <img
              src="img/blog-1.jpg"
              style={{ width: '65px' }}
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
              <b>My Portfolio</b>
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
        {/* table  Admin*/}
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
                      <i className="material-icons"></i>{' '}
                      <span>Add New Employee</span>
                    </a>

                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>{products!==null?products_list:(<tr><td>LOADING...</td></tr>)}</tbody>
              </table>
              <div className="clearfix">
                <div className="hint-text">
                  Showing <b>5</b> out of <b>25</b> entries
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

        {/* Edit Modal HTML */}

        {/* table Admin */}
        {/* Contact Section */}
        {/* Footer */}
        {/* End page content */}
      </div>
    </div>):<div><h1>loading</h1></div>}
    
    </>
  );
};
export default Admin;
