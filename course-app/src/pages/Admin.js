import React from 'react';
import './Admin.css';

const Admin = () => {
  return (
    <div>
      <nav
        className="w3-sidebar w3-collapse w3-white w3-animate-left"
        style={{ zIndex: 3, width: '300px' }}
        id="mySidebar"
      >
        <br />
        <div className="w3-container">
          <a
            href="#"
            onclick="w3_close()"
            className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
            title="close menu"
          >
            <i className="fa fa-remove" />
          </a>
          <img
            src="/w3images/avatar_g2.jpg"
            style={{ width: '45%' }}
            className="w3-round"
          />
          <br />
          <br />
          <h4>
            <b>PORTFOLIO</b>
          </h4>
          <p className="w3-text-grey">Template by W3.CSS</p>
        </div>
        <div className="w3-bar-block">
          <a
            href="#portfolio"
            onclick="w3_close()"
            className="w3-bar-item w3-button w3-padding w3-text-teal"
          >
            <i className="fa fa-th-large fa-fw w3-margin-right" />
            PORTFOLIO
          </a>
          <a
            href="#about"
            onclick="w3_close()"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-user fa-fw w3-margin-right" />
            ABOUT
          </a>
          <a
            href="#contact"
            onclick="w3_close()"
            className="w3-bar-item w3-button w3-padding"
          >
            <i className="fa fa-envelope fa-fw w3-margin-right" />
            CONTACT
          </a>
        </div>
        <div className="w3-panel w3-large">
          <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" />
        </div>
      </nav>
      {/* Overlay effect when opening sidebar on small screens */}
      <div
        className="w3-overlay w3-hide-large w3-animate-opacity"
        onclick="w3_close()"
        style={{ cursor: 'pointer' }}
        title="close side menu"
        id="myOverlay"
      />
      {/* !PAGE CONTENT! */}
      <div className="w3-main" style={{ marginLeft: '300px' }}>
        {/* Header */}
        <header id="portfolio">
          <a href="#">
            <img
              src="img/blog-1.jpg"
              style={{ width: '65px' }}
              className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
            />
          </a>
          <span
            className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
            onclick="w3_open()"
          >
            <i className="fa fa-bars" />
          </span>
          <div className="w3-container">
            <h1>
              <b>My Portfolio</b>
            </h1>
            <div className="w3-section w3-bottombar w3-padding-16">
              <span className="w3-margin-right">Filter:</span>
              <button className="w3-button w3-black">ALL</button>
              <button className="w3-button w3-white">
                <i className="fa fa-diamond w3-margin-right" />
                Design
              </button>
              <button className="w3-button w3-white w3-hide-small">
                <i className="fa fa-photo w3-margin-right" />
                Photos
              </button>
              <button className="w3-button w3-white w3-hide-small">
                <i className="fa fa-map-pin w3-margin-right" />
                Art
              </button>
            </div>
          </div>
        </header>
        {/* table  Admin*/}
        <div className="container">
          <div className="table-responsive">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-xs-6">
                    <h2>
                      Manage <b>Employees</b>
                    </h2>
                  </div>
                  <div className="col-xs-6">
                    <a
                      href="#addEmployeeModal"
                      className="btn btn-success"
                      data-toggle="modal"
                    >
                      <i className="material-icons"></i>{' '}
                      <span>Add New Employee</span>
                    </a>
                  </div>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>
                      <span className="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label htmlFor="selectAll" />
                      </span>
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox1"
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor="checkbox1" />
                      </span>
                    </td>
                    <td>Thomas Hardy</td>
                    <td>thomashardy@mail.com</td>
                    <td>89 Chiaroscuro Rd, Portland, USA</td>
                    <td>(171) 555-2222</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        className="edit"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox2"
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor="checkbox2" />
                      </span>
                    </td>
                    <td>Dominique Perrier</td>
                    <td>dominiqueperrier@mail.com</td>
                    <td>Obere Str. 57, Berlin, Germany</td>
                    <td>(313) 555-5735</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        className="edit"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox3"
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor="checkbox3" />
                      </span>
                    </td>
                    <td>Maria Anders</td>
                    <td>mariaanders@mail.com</td>
                    <td>25, rue Lauriston, Paris, France</td>
                    <td>(503) 555-9931</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        className="edit"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox4"
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor="checkbox4" />
                      </span>
                    </td>
                    <td>Fran Wilson</td>
                    <td>franwilson@mail.com</td>
                    <td>C/ Araquil, 67, Madrid, Spain</td>
                    <td>(204) 619-5731</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        className="edit"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          
                        </i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="custom-checkbox">
                        <input
                          type="checkbox"
                          id="checkbox5"
                          name="options[]"
                          defaultValue={1}
                        />
                        <label htmlFor="checkbox5" />
                      </span>
                    </td>
                    <td>Martin Blank</td>
                    <td>martinblank@mail.com</td>
                    <td>Via Monte Bianco 34, Turin, Italy</td>
                    <td>(480) 631-2097</td>
                    <td>
                      <a
                        href="#editEmployeeModal"
                        className="edit"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                        >
                          
                        </i>
                      </a>
                      <a
                        href="#deleteEmployeeModal"
                        className="delete"
                        data-toggle="modal"
                      >
                        <i
                          className="material-icons"
                          data-toggle="tooltip"
                          title="Delete"
                        >
                          
                        </i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="clearfix">
                <div className="hint-text">
                  Showing <b>5</b> out of <b>25</b> entries
                </div>
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a href="#">Previous</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      2
                    </a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">
                      Next
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="addEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Add Employee</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={''}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-success"
                    defaultValue="Add"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Edit Modal HTML */}
        <div id="editEmployeeModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <form>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Employee</h4>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      className="form-control"
                      required
                      defaultValue={''}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="modal-footer">
                  <input
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                    defaultValue="Cancel"
                  />
                  <input
                    type="submit"
                    className="btn btn-info"
                    defaultValue="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* table Admin */}
        {/* Pagination */}
        <div className="w3-center w3-padding-32">
          <div className="w3-bar">
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              «
            </a>
            <a href="#" className="w3-bar-item w3-black w3-button">
              1
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              2
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              3
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              4
            </a>
            <a href="#" className="w3-bar-item w3-button w3-hover-black">
              »
            </a>
          </div>
        </div>
        {/* Images of Me */}
        {/* Contact Section */}
        {/* Footer */}
        {/* End page content */}
      </div>
    </div>
  );
};
export default Admin;
