import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62c253232af60be89ed60e41.mockapi.io/Courses';
    // if (search.length > 0) {
    //     url = url + '?search=' + search;
    // }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data); //setStudents(data)
      });
    console.log('>>> check dataUse : ', data);

  }, []);
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
                  <Link to='/Coursecategory'>
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                      <img class="img-fluid" src={require(`./img/cat-${item.id}.jpg`)} />
                      <a className="cat-overlay text-white text-decoration-none" href>
                        <h4 className="text-white font-weight-medium">Web Design</h4>
                        <span>100 Courses</span>
                      </a>
                    </div>
                  </Link>
                </div>
              )
            })
            :
            'Loading....'
          }
        </div>
      </div>

    </div>
  );
};
export default Category;
