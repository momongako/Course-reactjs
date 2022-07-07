import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Admin.css";
import ReactPaginate from "react-paginate";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AdminModal from "../components/AdminModal";
import { useSelector, useDispatch } from "react-redux";
import {courseInfoActions} from "../store/ItemInfoSlice"
import { fetchCourseData, fetchCourseActions, fetchCategoryActions } from "../store/Fetch";


const Admin = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.courses.courseData);
  const isPending = useSelector((state) => state.courses.isPending);
  const [products, setProducts] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(-1);
  const [showEdit, setEditShow] = useState(false);
  const [showNew, setNewShow] = useState(false);
  const [direction, setDirection] = useState(1)
  const [entries, setEntries] = useState(5)
  
  
  const requestData = () => {
    dispatch(fetchCourseActions.fetchDataPending);
    fetch("https://62c253232af60be89ed60e41.mockapi.io/Courses")
      .then((response) => response.json())
      .then((data) => dispatch(fetchCourseActions.fetchDataSuccess(data)))
  };

  useEffect(() => {
    requestData()
  }, []);

  console.log('Data',data)
  
  useEffect(() => {
    setProducts(data)
    if (products != null) {
      setPage(0);
    }
  }, [data]);

  const handleEditClose = () => setEditShow(false);
  const handleNewClose = () => setNewShow(false);
  const handleEditShow = () => {setEditShow(true)}
  const handleNewShow = () => setNewShow(true);
  const handleCancle=()=>{setShow(false);}


  const pageHandler =(data)=>{
    if (data !== null) {
      let itemsPerPage = entries;
      const starOffset = page * itemsPerPage;
      let endOffset = (page + 1) * itemsPerPage;
      if (endOffset > data.length) {
        endOffset = data.length;
      }
      setCurrentItems(data.slice(starOffset, endOffset));
      setPageCount(Math.ceil(data.length / itemsPerPage));
    }
  }

  console.log('Products',products)

  const editHandler=(item)=>{
    dispatch(courseInfoActions.getCourseInfo(item))
    handleEditShow()
  }

  useEffect(() => {
    pageHandler(products)
  }, products||[page]||[entries]);

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

const [products_list,setProductList]=useState([]);
useEffect(() => {  if (products !== null&&currentItems!== null) {
  var list = currentItems.map((item, key) => (
    <tr key={key}>
      <td className='adminTableSTT'>{item.id}</td>
      <td className='adminTableCName'>{item.name}</td>
      <td className='adminTableCat'>{item.category}</td>
      <td className='adminTableLevel'>{item.level>75?'Expert':item.level>50?'Advanced':item.level>25?'Intermediate':'Beginner'}</td>
      <td className='adminTablePic'><img src={item.picture} alt='' width='50px' height='50px'/></td>
      <td className='adminTablePrice'>${item.price}</td>
      <td className='adminTableEdit'>
        <button onClick={()=>{editHandler(item)}} className="btn btn-primary mx-1 adminEditButton" data-toggle="modal">
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className="btn btn-danger mx-1 adminDelete,Button" data-toggle="modal">
        <i className="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  ));
  setProductList(list);
}},[data])

console.log('Product_list:',products_list)
  
  const SortColumn = (event,field, type) => {
    const sortData = [...products];
    // const sortData = [...currentItems];
    if (type === 'number') {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    } else if (type === 'string') {
      sortData.sort(
        (a, b) =>
        direction*(a[field].toLowerCase().localeCompare(b[field].toLowerCase()))
      );
    }
    var otherClass = document.querySelector('.theadRow th')
    otherClass.classList.value = "sort"
    
    var itemClass = (event.target.classList);
    itemClass.value=('sort'+" "+(direction===1?'asc':'desc'));
    setDirection(direction * -1);
    pageHandler(sortData)
  };

  return currentItems !== null ? (
    <div>
      <>
        <Modal size="lg" show={showEdit} onHide={handleEditClose} >
          <Modal.Header closeButton>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdminModal />
          </Modal.Body>
        </Modal>
      </>
      <>
        <Modal show={showNew} onHide={handleNewClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AdminModal />
          </Modal.Body>
        </Modal>
      </>
      <div className="container p-0">
        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper col-12">
              <div className="table-title">
                <div className="row">
                  <div className="col-6">
                    <h2 className="text-white fs-3">
                      Manage <b className="text-success fs-2 fw-bolder fw-italic">Employees</b>
                    </h2>
                  </div>
                  <div className="col-6 my-auto">
                    <button
                      onClick={handleNewShow}
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="fa-solid fa-circle-plus"></i>
                      <span className="py-1 px-1">Add New Employee</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body col-12">
                <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                  <div className="dataTable-top">
                    <div className="dataTable-dropdown">
                      <label>
                        <select className="dataTable-selector" onChange={(e)=>{setEntries(e.target.value)}}>
                          <option value={5}>5</option>
                          <option value={10}>10</option>
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
                        <tr className="theadRow">
                          <th className="sort" data-sort="number" onClick={(e)=>SortColumn(e,'id','number')}>
                            No.
                          </th>
                          <th className="sort" data-sort="name" onClick={(e)=>SortColumn(e,'name','string')}>
                              Course Name
                          </th>
                          <th className="sort" data-sort="category" onClick={(e)=>SortColumn(e,'category','string')}>
                              Category
                          </th>
                          <th className="sort" data-sort="level" onClick={(e)=>SortColumn(e,'level','number')}>
                              Level
                          </th>
                          <th>
                              Picture
                          </th>
                          <th className="sort" data-sort="price" onClick={(e)=>SortColumn(e,'price','number')}>
                              Price
                          </th>
                          <th>
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
                  Showing <b>{entries}</b> out of <b>{products.length}</b> entries
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
                  marginPagesDisplayed={1}
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
    <div className="text-center">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};
export default Admin;
