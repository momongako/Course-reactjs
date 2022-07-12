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


    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [date, setdate] = useState('');




    const saveProduct = () => {

        let data = {
            name: name,
            category: category,
            price: price,
            description: description,
            date: date
        }
        console.log('>>> check data', name, category, price)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
        fetch(
            "https://62c253232af60be89ed60e41.mockapi.io/Courses/",
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                navigate(-1);
                console.log(data)
            });
    };

    const testsubmit = () => {
        console.log(">>> check ", name, price)
    }
    const handleChange = (event) => {
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;

        // let data = { ...product };
        // data[name] = value;
        // setProduct(data);
        console.log('>>> check event', event)


    };





    return (
        <>
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
                                                    ADD NEW COURSE
                                                </strong>
                                            </h1>
                                            <div className="table-responsive">
                                                <table className="table table-user-information">
                                                    <tbody>
                                                        <tr>

                                                            <td>
                                                                <strong>Course ID</strong>
                                                            </td>

                                                            {/* <td className="text-primary">{product.id}</td> */}
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Course's Name</strong>
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={name}
                                                                    name="name"
                                                                    onChange={(event) => setName(event.target.value)}
                                                                ></input>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Category</strong>
                                                            </td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={category}
                                                                    name="category"
                                                                    onChange={(event) => setCategory(event.target.value)}
                                                                ></input>
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
                                                                    value={price}
                                                                    name="price"
                                                                    onChange={(event) => setPrice(event.target.value)}
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
                                                                    value={description}
                                                                    onChange={(event) => setDescription(event.target.value)}
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
                                                                    // value={product.date}
                                                                    name="date"
                                                                // onChange={(e) => handleChange(e)}
                                                                ></input>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Course Curriculum</strong>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div>
                                                    <button
                                                        type="button"
                                                        class="btn btn-primary"
                                                        onClick={saveProduct}
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

        </>
    );
};

export default CourseEdit;
