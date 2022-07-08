import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Loading from './Loading';
import { CartProvider, useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
const CourseDetail = () => {
  const params = useParams('');
  const [course, setCourse] = useState(null);
  const [data, setData] = useState([])
  const [review,setReview] = useState(null);

  const { addItem } = useCart();
  const { updateItem } = useCart();
  let navigate = useNavigate();


  useEffect(() => {
    let country_url =
      'https://62c253232af60be89ed60e41.mockapi.io/Courses/' + params.id;

    fetch(country_url)
      .then((response) => response.json())
      .then((data) => {
        setCourse(data);
      });
    fetch ('https://62c253232af60be89ed60e41.mockapi.io/Reviews')
    .then((response) => response.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  useEffect(() => {
    let country_url =
      'https://62c253232af60be89ed60e41.mockapi.io/Courses/' + params.id;

    fetch(country_url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.content)

      });

  }, []);




  var listTodo = [];
  listTodo = data.map((item, index) => (


    <div key={index + 1}>

      <li className="justify-content-between d-flex">
        <p>{item.section1Name || item.section2Name || item.section3Name || item.section4Name || item.section5Name || item.section6Name || item.section7Name || item.section8Name || item.section9Name}</p>
        <a className="btn text-uppercase" href={`#chapter${index + 1}`} data-toggle="collapse" aria-expanded="false" >View Details</a>
      </li>
      <div className="collapse in" id={`chapter${index + 1}`} aria-expanded="true" >
        <li>{item.section1Content.map((element, indow) => (
          <p key={indow + 1}>
            {indow + 1} - {element}
          </p>
        ))}</li>
      </div>
    </div>




  ))





  return (
    <section className="course-details-area section-gap">
      <div className="top-container dark-background">
        <div className="dark-background-inner-position-container">
          <div className="udlite-text-sm clp-lead">
            <h1 className="udlite-heading-xl clp-lead__title clp-lead__title--small" data-purpose="lead-title">Learn Python: The Complete Python Programming Course</h1>
            <div className="udlite-text-md clp-lead__headline" data-purpose="lead-headline">Learn A-Z everything about Python, from the basics, to advanced topics like Python GUI, Python Data Analysis, and more!</div>
          </div>
        </div>
      </div>


      <div className="container">
        {course != null ? (
          <div className="row">
            <div className="col-lg-8 course-details-left">
              <div className="main-image">
                {/* <img className="img-fluid" src="img/courses/course-details.jpg" alt="" data-pagespeed-url-hash={3785246945} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" /> */}
              </div>
              <div className="content-wrapper">
                <h4 className="title">Objectives</h4>
                <div className="content">
                  {course.description}
                  <br />
                  <br />
                  {course.description2}
                </div>
                <h4 className="title">Eligibility</h4>
                <div className="content">
                  {course.description3}
                </div>
                <h4 className="title">Course Outline</h4>
                <div className="content">

                  <ul className="course-list">

                    {data && data.length > 0 ?
                      listTodo : 'Loading...'}

                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 right-contents">
              <span className="intro-asset--img-aspect--1UbeZ">
                <img className="img-fluid" src={require(`./img/course-1.jpg`)}
                  alt="" width={350} height={200} style={{ backgroundSize: 'cover', backgroundImage: 'url("data:image/png' }}
                />


              </span>

              <ul>
                <li>
                  <a className="justify-content-between d-flex" href="#">
                    <p>Trainer's Name</p>
                    <span className="or">{course.name}</span>
                  </a>
                </li>
                <li>
                  <a className="justify-content-between d-flex" href="#">
                    <p>Course Fee </p>
                    <span>${course.price}</span>
                  </a>
                </li>
                <li>
                  <a className="justify-content-between d-flex" href="#">
                    <p>Available Seats </p>
                    <span>15</span>
                  </a>
                </li>
                <li>
                  <a className="justify-content-between d-flex" href="#">
                    <p>Date Submitted </p>
                    <span>{moment(course.date.slice(0, 10), 'DD-MM-YYYY').format('DD/MM/YYYY')}</span>
                  </a>
                </li>
              </ul>

              <button onClick={() => addItem(course, toast.success('Thêm Giỏ hàng thành công!!', {
                position: "top-center",

              }))} className="btn text-uppercase enroll">Buy Course</button>

              <h4 className="title">Reviews</h4>
              <div className="content">
                <div className="review-top row pt-40">
                  <div className="col-lg-12">
                    <h6 className="mb-15">Provide Your Rating</h6>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Puncuality</span>
                      <div className="star">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span>Outstanding</span>
                    </div>
                    <div className="d-flex flex-row reviews justify-content-between">
                      <span>Quality</span>
                      <div className="star">
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star checked" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <span>Outstanding</span>
                    </div>
                  </div>
                </div>
                <div className="feedeback">
                  <h6 className="mb-10">Your Feedback</h6>
                  <textarea name="feedback" className="form-control" cols={10} rows={10} defaultValue={""} />
                  <div className="mt-10 text-right">
                    <a href="#" className="btn text-center text-uppercase enroll">Submit</a>
                  </div>
                </div>
                <div className="comments-area mb-30">
                  <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/blog/c1.jpg" alt="" data-pagespeed-url-hash={837045043} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                        </div>
                        <div className="desc">
                          <h5><a href="#">Emilly Blunt</a>
                            <div className="star">
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/blog/c2.jpg" alt="" data-pagespeed-url-hash={1131544964} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                        </div>
                        <div className="desc">
                          <h5><a href="#">Elsie Cunningham</a>
                            <div className="star">
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-list">
                    <div className="single-comment single-reviews justify-content-between d-flex">
                      <div className="user justify-content-between d-flex">
                        <div className="thumb">
                          <img src="img/blog/c3.jpg" alt="" data-pagespeed-url-hash={1426044885} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                        </div>
                        <div className="desc">
                          <h5><a href="#">Maria Luna</a>
                            <div className="star">
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star checked" />
                              <span className="fa fa-star" />
                              <span className="fa fa-star" />
                            </div>
                          </h5>
                          <p className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
          :
          <Loading />
        }
      </div>
    </section>

  );
};
export default CourseDetail;
