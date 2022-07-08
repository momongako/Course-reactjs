import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Admin.css";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import {courseInfoActions} from "../store/ItemInfoSlice"
import { fetchCourseData, fetchCourseActions, fetchCategoryActions } from "../store/Fetch";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Admin = () => {
  const [products, setProducts] = useState(null);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(-1);
  const [direction, setDirection] = useState(1)
  const [entries, setEntries] = useState(5)
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    let url = 'https://62c253232af60be89ed60e41.mockapi.io/Courses/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
}, []);

  
  useEffect(() => {
    if (products != null) {
      setPage(0);
    }
  }, [products]);


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


  useEffect(() => {
    if (products!==null&&page*entries>products.length){
      setPage(0)
    }
    pageHandler(products)
  },[page||entries]);

  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  useEffect(() => {
    let url = 'https://62c253232af60be89ed60e41.mockapi.io/Courses';
    if (searchTerm.length > 0) {
      url = url + '?search=' + searchTerm;
    }
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => {
        setCurrentItems(data)
        setProducts(data); 
      });
  }, [searchTerm]);

  const deleteUser = (id) => {
    fetch('https://62c253232af60be89ed60e41.mockapi.io/Courses/' + id, {
      method: 'DELETE',
    }).then(() => {
      let result = [...currentItems];
      result = result.filter((item) => {
        return item.id !== id;
      });
      setCurrentItems(result);
    });
  };

const [products_list,setProductList]=useState([]);
useEffect(() => {  if (currentItems!== null) {
  var list = currentItems.map((item, key) => (
    <tr key={key}>
      <td className='adminTableSTT'>{item.id}</td>
      <td className='adminTableCName'>{item.name}</td>
      <td className='adminTableCat'>{item.category}</td>
      <td className='adminTableLevel'>{item.level>75?'Expert':item.level>50?'Advanced':item.level>25?'Intermediate':'Beginner'}</td>
      <td className='adminTablePic'><img src={item.picture} alt='' width='50px' height='50px'/></td>
      <td className='adminTablePrice'>${item.price}</td>
      <td className='adminTableEdit'>
      <Link to={'/edit/' + item.id}>
        <button className="btn btn-primary mx-1 adminEditButton">
        <i className="fa-solid fa-pen-to-square"></i>
        </button>
        </Link>
        <button className="btn btn-danger mx-1 adminDelete,Button" data-bs-toggle="modal" onClick={() => deleteUser(item.id)}>
        <i className="fa-solid fa-trash"></i>
        </button>

      </td>
    </tr>
  ));
  setProductList(list);
}},[currentItems])
  
  const SortColumn = (event,field, type) => {
    const sortData = [...products];
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
      <div className="container p-0">
        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper col-12">
              <div className="table-title">
                <div className="row">
                  <div className="col-6">
                    <h2 className="text-white fs-3">
                      Manage <b className="text-special fs-2 fw-bolder fw-italic">Courses</b>
                    </h2>
                  </div>
                  <div className="col-6 my-auto">
                  <Link to="edit/new" className="ms-5">
                    <button
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="fa-solid fa-circle-plus"></i>
                      <span className="py-1 px-1">Add New Course</span>
                    </button>
                    </Link>
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
                        </select>
                        entries per page
                      </label>
                    </div>
                    <div className="dataTable-search">
                      <input
                        className="dataTable-input"
                        placeholder="Search..."
                        type="text"
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="dataTable-container">
                    <table id="datatablesSimple" className="responsive">
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
