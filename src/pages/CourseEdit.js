import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCourseActions, fetchCategoryActions } from "../store/Fetch";
import { useSelector, useDispatch } from "react-redux";
import Scroll from "../components/Scroll";
import AddSection from "../components/AddSection";

const CourseEdit = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const data = useSelector((state) => state.courses.courseData);

  let navigate = useNavigate();
  useEffect(() => {
    if (params.id !== "new") {
      let product_url =
        "https://62c253232af60be89ed60e41.mockapi.io/Courses/" + params.id;

      fetch(product_url)
        .then((response) => response.json())
        .then((data) => {
          var date = new Date(data.date);
          data.date = date.toISOString().slice(0, 10);
          setProduct(data);
        });
    } else {
      let initData = {};
      setProduct(initData);
      console.log('>>> check product: ', product)
    }
  }, []);

  const categories = useSelector((state) => state.categories.categories);
  const test = [];
  useEffect(() => {
    if (data !== null) {
      data.forEach((item) => {
        if (test.indexOf(item.category) === -1) {
          test.push(item.category);
          dispatch(
            fetchCategoryActions.updateCategories({
              name: item.category,
              picture: item.catPic,
            })
          );
        }
      });
    }
  }, [data]);


  const saveProduct = () => {
    let method = "POST";
    let id = "";
    if (product.id) {
      method = "PUT";
      id = product.id;
    }

    const requestOptions = {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    };
    fetch(
      "https://62c253232af60be89ed60e41.mockapi.io/Courses/" + id,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        navigate(-1);
      });
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let data = { ...product };
    data[name] = value;
    setProduct(data);
  };

  //   const handleSectionName=(event,section)=>{
  //     const target = event.target;
  //     const value = target.value;
  //     let data = { ...product };
  //     let content = data.content;
  //     Object.values(section)[1] = value
  //     setProduct(data)
  //   }

  const handleSectionName = (event, sectionNumber, moreInfo) => {
    const target = event.target;
    const value = target.value;
    let data = { ...product };
    let content = data.content;
    console.log(1, Object.values(content[sectionNumber])[1])
    console.log(2, Object.values(moreInfo)[1])
    // Object.values(moreInfo)[1] = value
    setProduct(data)
  }

  const handleSectionContent = (event, parent) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let data = { ...product };
    let content = data.content;
    Object.values(content[parent])[0][name] = value
    setProduct(data)
  }

  return (
    <>
      {product !== null && categories !== [] ? (
        <div className="container p-0">
          <div className="container">
            <div className="table-responsive">
              <div className="table-wrapper col-12">
                <div className="table-title">
                  <div className="col-12">
                    <h2 className="text-white fs-3">
                      Manage{" "}
                      <b className="text-special fs-2 fw-bolder fw-italic">
                        Courses
                      </b>
                    </h2>
                  </div>
                </div>
                <div className="container">
                  <div className="container card-body">
                    <div className="container dataTable-wrapper">
                      <div className="col-lg-10 col-md-12 mx-auto col-sm-12">
                        <h1>
                          <strong>
                            {product.id ? "EDIT COURSE" : "ADD NEW COURSE"}
                          </strong>
                        </h1>
                        <div className="table-responsive">
                          <table className="table table-user-information">
                            <tbody>
                              <tr>
                                {product.id ? (
                                  <td>
                                    <strong>Course ID</strong>
                                  </td>
                                ) : null}
                                <td className="text-primary">{product.id}</td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Course's Name</strong>
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value={product.name}
                                    name="name"
                                    onChange={(e) => handleChange(e)}
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Category</strong>
                                </td>
                                <td>
                                  <select
                                    name="category"
                                    value={product.category}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                  >
                                    {categories != null ? (
                                      categories.map((item) => (
                                        <option key={item.id} value={item.name}>
                                          {item.name}
                                        </option>
                                      ))
                                    ) : (
                                      <option key={item.id} value="loading">
                                        loading
                                      </option>
                                    )}
                                  </select>
                                </td>
                              </tr>

                              <tr>
                                <td>
                                  <strong>Price</strong>
                                </td>
                                <td>
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={product.price}
                                    name="price"
                                    onChange={(e) => handleChange(e)}
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Picture</strong>
                                </td>
                                <td class="text-primary">
                                  <input type="file" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Description</strong>
                                </td>
                                <td>
                                  <textarea
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    value={product.description}
                                    onChange={(e) => handleChange(e)}
                                  ></textarea>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Manufaturing Date</strong>
                                </td>
                                <td>
                                  <input
                                    type="date"
                                    className="form-control w-50"
                                    value={product.date}
                                    name="date"
                                    onChange={(e) => handleChange(e)}
                                  ></input>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <strong>Course Curriculum</strong>
                                </td>
                                <td>
                                  <Scroll>
                                    {product !== null ? (product.content.map((item, key1 = index) => (
                                      <>
                                        {/* <h4>SECTION:<input className="col-6 border" value={Object.values(item)[1]} onChange={(e) => handleSectionName(e,key1,item)}/> </h4> */}
                                        <h4>SECTION:<input className="col-6 border" value={Object.values(product.content[key1])[1]} onChange={(e) => handleSectionName(e, key1, item)} /> </h4>

                                        {Object.values(item)[0].map((content, key2 = index) =>
                                          <div className="ms-5 my-1 border col-10"><input className="col-12" value={content} name={key2} onChange={(e) => handleSectionContent(e, key1)} /></div>
                                        )}
                                      </>
                                    ))) : (<>
                                      <h4>SECTION: <AddSection field="section" /></h4>
                                    </>)}
                                  </Scroll>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => saveProduct()}
                            >
                              Save
                            </button>
                            <span> </span>
                            <Link to="/admin">
                              <button type="button" class="btn btn-secondary">
                                Cancel
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export default CourseEdit;
