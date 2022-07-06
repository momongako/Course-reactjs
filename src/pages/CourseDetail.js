import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  const params = useParams();
  const [course, setCourse] = useState(null);
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const [data5, setData5] = useState([])
  const [data6, setData6] = useState([])
  const [data7, setData7] = useState([])
  const [data8, setData8] = useState([])
  const [data9, setData9] = useState([])

  let navigate = useNavigate();
  useEffect(() => {
    console.log('user use effect!!');
    let country_url =
      'https://62b04ad4e460b79df042497f.mockapi.io/ListTest/dataCourse/' + params.id;

    console.log(country_url);
    fetch(country_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCourse(data);

      });
  }, []);
  useEffect(() => {
    console.log('user use effect!!');
    let country_url =
      'https://62b04ad4e460b79df042497f.mockapi.io/ListTest/dataCourse/' + params.id;

    console.log(country_url);
    fetch(country_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.content.section1.content);
        setData(data.content.section1.content);
        setData2(data.content.section2.content)
        setData3(data.content.section3.content)
        setData4(data.content.section4.content)
        setData5(data.content.section5.content)
        setData6(data.content.section6.content)
        setData7(data.content.section7.content)
        setData8(data.content.section8.content)
        setData9(data.content.section9.content)

      });
    console.log('check data', data)

  }, []);

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
                <img className="img-fluid" src="img/courses/course-details.jpg" alt="" data-pagespeed-url-hash={3785246945} onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);" />
              </div>
              <div className="content-wrapper">
                <h4 className="title">Objectives</h4>
                <div className="content">
                  When you enter into any new area of science, you almost always find yourself with a
                  baffling new language of
                  technical terms to learn before you can converse with the experts. This is certainly
                  true in astronomy both in
                  terms of terms that refer to the cosmos and terms that describe the tools of the trade,
                  the most prevalent
                  being the telescope.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea
                  commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </div>
                <h4 className="title">Eligibility</h4>
                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea
                  commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum.
                </div>
                <h4 className="title">Course Outline</h4>
                <div className="content">


                  <ul className="course-list">
                    <li className="justify-content-between d-flex">
                      <p>Introduction Lesson</p>
                      <a className="btn text-uppercase" href="#chapter0" data-toggle="collapse" aria-expanded="false" >View Details</a>
                    </li>
                    <li class="collapse in" id="chapter0" aria-expanded="true" >
                      {data.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>
                    <li className="justify-content-between d-flex">
                      <p>Basics of HTML</p>
                      <a className="btn text-uppercase" href="#chapter1" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter1" aria-expanded="true" >
                      {data2.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>

                    <li className="justify-content-between d-flex">
                      <p>Getting Know about HTML</p>
                      <a className="btn text-uppercase" href="#chapter2" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter2" aria-expanded="true" >
                      {data3.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>

                    <li className="justify-content-between d-flex">
                      <p>Tags and Attributes</p>
                      <a className="btn text-uppercase" href="#chapter3" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter3" aria-expanded="true" >
                      {data4.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>

                    <li className="justify-content-between d-flex">
                      <p>Basics of CSS</p>
                      <a className="btn text-uppercase" href="#chapter4" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter4" aria-expanded="true" >
                      {data5.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>

                    <li className="justify-content-between d-flex">
                      <p>Getting Familiar with CSS</p>
                      <a className="btn text-uppercase" href="#chapter5" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter5" aria-expanded="true" >
                      {data6.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>

                    <li className="justify-content-between d-flex">
                      <p>Introduction to Bootstrap</p>
                      <a className="btn text-uppercase" href="#chapter6" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter6" aria-expanded="true" >
                      {data7.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>

                    <li className="justify-content-between d-flex">
                      <p>Responsive Design</p>
                      <a className="btn text-uppercase" href="#chapter7" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter7" aria-expanded="true" >
                      {data8.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>

                    <li className="justify-content-between d-flex">
                      <p>Canvas in HTML 5</p>
                      <a className="btn text-uppercase" href="#chapter8" data-toggle="collapse" aria-expanded="false">View Details</a>
                    </li>

                    <li class="collapse in" id="chapter8" aria-expanded="true" >
                      {data9.map((item, index) => {
                        return (
                          <>
                            <p>{index + 1} - {item}</p>

                          </>
                        )
                      })}

                    </li>


                  </ul>



                </div>
              </div>
            </div>
            <div className="col-lg-4 right-contents">
              <span className="intro-asset--img-aspect--1UbeZ">
                <img class="img-fluid" src={require(`./img/course-${course.id}.jpg`)}
                  alt="" width={350} height={200} style={{ backgroundSize: 'cover', backgroundImage: 'url("data:image/png' }}
                />


              </span>

              <ul>
                <li>
                  <a className="justify-content-between d-flex" href="#">
                    <p>Trainer’s Name</p>
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
                    <span>{course.date.slice(0, 10)}</span>
                  </a>
                </li>
              </ul>
              <a href="#" className="btn text-uppercase enroll">Buy Course</a>
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
                        <i className="fa fa-star" />
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
                          <img src="img/blog/c1.jpg" alt="" data-pagespeed-url-hash={837045043} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
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
                          <img src="img/blog/c2.jpg" alt="" data-pagespeed-url-hash={1131544964} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
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
                          <img src="img/blog/c3.jpg" alt="" data-pagespeed-url-hash={1426044885} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
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
          'loading...'
        }
      </div>
    </section>

  );
};
export default CourseDetail;
