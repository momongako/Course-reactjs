import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Loading from './Loading';
const CourseCategory = () => {
    const [data, setData] = useState([]);
    const [category_namme, setName] = useState(null);
    const params = useParams();
    useEffect(() => {

        let url =
            'https://62c253232af60be89ed60e41.mockapi.io/Courses?category=' +
            params.name;

        console.log('>>> check url couser category : ', url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setName(params.name);
            });
    }, []);
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>Courses</h5>
                        <h1> Khóa học {category_namme} </h1>
                    </div>
                    <div className="row">
                        {data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="rounded overflow-hidden mb-2">
                                            <img className="img-fluid" src={require(`./img/course-${++index >= 6 ? index = 1 : index + 1}.jpg`)} />
                                            <div className="bg-secondary p-4">
                                                <div className="d-flex justify-content-between mb-3">
                                                    <small className="m-0"><i className="fa fa-users text-primary mr-2" />{item.rating} Students</small>
                                                    <small className="m-0"><i className="far fa-clock text-primary mr-2" />
                                                        {moment(item.date.slice(0, 10), 'DD-MM-YYYY').format('DD/MM/YYYY')}
                                                    </small>
                                                </div>
                                                <Link className="h5" to={'/detail/' + item.id}>{item.category} &amp; {item.name}</Link>
                                                <div className="border-top mt-4 pt-4">
                                                    <div className="d-flex justify-content-between">
                                                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5
                                                            <small>({item.level})</small>
                                                        </h6>
                                                        <h5 className="m-0">${item.price} </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <Loading />
                        }

                    </div>
                </div>
            </div>

        </>
    )
}
export default CourseCategory;