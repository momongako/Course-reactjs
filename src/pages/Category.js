import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const Category = (prop) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(prop.data);


  }, [prop.data])

  return (
    <div className="container-fluid py-5">

      <div className="container pt-5 pb-3">
        <div className="text-center mb-5">
          <h5
            className="text-primary text-uppercase mb-3"
            style={{ letterSpacing: '5px' }}
          >
            Danh mục
          </h5>
          <h1>Danh mục phổ biến nhất</h1>
        </div>
        <div className="row">
          {data && data.length > 0 ?

            data.map((item, index) => {
              return (
                <div key={index + 1} className="col-lg-3 col-md-6 mb-4">
                  <Link to={'/coursecategory/' + item.category}>
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                      <img className="img-fluid" src={require(`./img/cat-${item.id}.jpg`)} />
                      <div className="cat-overlay text-white text-decoration-none">
                        <h4 className="text-white font-weight-medium">{item.category}</h4>
                        <span> Courses</span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
            :
            <Loading />
          }
        </div>
      </div>

    </div>
  );
};
export default Category;
