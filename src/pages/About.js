import React from 'react';

const About = () => {
  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row m-0 p20">
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h3>Our Values</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis,et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis,et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis,et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <img
              className="img-fluid"
              src="https://bn8p3.csb.app/images/about.jpg"
              alt="source"
            />
          </div>
        </div>
        <div className="our-story">
          <h2>Our Story</h2>
          <div className="wrap">
            <div className="inner-wrap">
              <h4>Foreign Followers</h4>
              <p className="counter" data-target={88000}>
                0
              </p>
            </div>
            <div className="inner-wrap">
              <h4>Certfied Institutions</h4>
              <p className="counter" data-target={96}>
                0
              </p>
            </div>
            <div className="inner-wrap">
              <h4>Students Enrolled</h4>
              <p className="counter" data-target={4789}>
                0
              </p>
            </div>
            <div className="inner-wrap">
              <h4>Complete Courses</h4>
              <p className="counter" data-target={488}>
                0
              </p>
            </div>
          </div>
        </div>
        <div className="row m-0 p20">
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h1>Who We Are</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis,et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
            <p>
              Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia,consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, adipisci velit, sed quia non numquam
              eius modi tempora
            </p>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h1>What We Do</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
              inventore veritatis,et quasi architecto beatae vitae dicta sunt
              explicabo.
            </p>
            <p>
              Nemo enim ipsam,voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia,consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.,Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, adipisci velit, sed quia non numquam
              eius modi tempora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
