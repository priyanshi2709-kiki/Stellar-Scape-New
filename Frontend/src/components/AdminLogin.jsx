import React from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack';
import * as Yup from 'yup'
import useAppContext from '../AppContext'

const LoginSchema = Yup.object().shape({
    password: Yup.string().min(4, 'Too short!').max(20, 'Too Long!'),
    email: Yup.string().email('Invalid email').required('Required')
});

const AdminLogin = () => {
    const { setLoggedIn } = useAppContext();

    const navigate = useNavigate();
    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, action) => {
            console.log(values);

            const res = await fetch('http://localhost:3000/userData/authenticate', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                enqueueSnackbar('Login Successful', {
                    variant: 'success', anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }

                });
                setLoggedIn(true);

                const data = await res.json();
                sessionStorage.setItem('isloggedin', true);
                if(data.role === 'admin'){
                    sessionStorage.setItem('admin', JSON.stringify(data));
                    navigate('/Admin/ManageProject');
                }else{
                    sessionStorage.setItem('user', JSON.stringify(data));
                    navigate('/');
                }
            } else if (res.status === 400
                ) {
                    enqueueSnackbar('Failed to login', {
                        variant: 'error', anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'right',
                        }
    
                    });
            }
        },
        // step6: validation of LoginSchema
        validationSchema: LoginSchema
    });
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://i.pinimg.com/736x/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.jpg"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={loginForm.handleSubmit}>
                            
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    placeholder="Enter a valid email address"
                                    id="email"
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.email}
                                />
                                <label className="form-label" htmlFor="form3Example3">
                                    Email address
                                </label>
                                <span style={{ color: 'red', fontsize: '10', marginLeft: 10 }}>{loginForm.touched.name && loginForm.errors.name}</span>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-3">
                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    id="password"
                                    onChange={loginForm.handleChange}
                                    value={loginForm.values.password}
                                />
                                <label className="form-label" htmlFor="form3Example4">
                                    Password
                                </label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                {/* Checkbox */}
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        defaultValue=""
                                        id="form2Example3"
                                    />
                                    <label className="form-check-label" htmlFor="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <Link to="/ForgetPassword" className="text-body">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Don't have an account?{" "}
                                    <Link to="/Signup" className="link-danger">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default AdminLogin