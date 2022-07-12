import { Link, useNavigate } from 'react-router-dom';;
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { themeContext, themeEdit } from '../App'
const Login = (props) => {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        },
        {
            username: "maou",
            password: "123"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {

                setIsSubmitted(true);
                navigate('/admin/')
                props.themeEdit()
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }

    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error" style={{ color: 'red' }}>{errorMessages.message}</div>
        );




    const renderForm = (

        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-facebook-f" />
                    </button>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-twitter" />
                    </button>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                        <i className="fab fa-linkedin-in" />
                    </button>
                </div>
                <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <input type="email" name="uname" required id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                    {renderErrorMessage("uname")}
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                    <input type="password" name="pass" required id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                    {renderErrorMessage("pass")}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    {/* Checkbox */}
                    <div className="form-check mb-0">
                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                        <label className="form-check-label" htmlFor="form2Example3">
                            Remember me
                        </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to="" type="button" onClick={handleSubmit} className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</Link>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
                </div>
            </form>
        </div>

    );




    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </div>
                    {isSubmitted ? <div className="d-flex justify-content-center" ><h1>User is successfully logged in</h1></div> : renderForm}
                </div>
            </div>
            {/* <button onClick={props.themeEdit} >ok</button> */}
        </section>

    )
}
export default Login;