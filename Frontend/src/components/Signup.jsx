import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import '../components/Signup.css'
const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must be at most 15 characters'),
  email: Yup.string()
    .required('Email is required')
    .min(8, 'Email must be at least 8 characters')
    .max(50, 'Email must be at most 50 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(15, 'Password must be at most 25 characters')
});

const Signup = () => {
  const signupForm = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
    },
    onSubmit: async (values, action) => {
      console.log(values);
      const res = await fetch('http://localhost:3000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status)
      action.resetForm();
      if (res.status === 200) {
        enqueueSnackbar('Signup successful', { variant: 'success' });
      } else {
        enqueueSnackbar('Signup failed', { variant: 'error' });
      }
    },
    validationSchema: signupSchema
  });
  return (
    <div className="container px-4 py-5 mx-auto">
      <div className="card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card1">
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <div className="row justify-content-center px-3 mb-3">
                  <img id="logo" src="https://i.imgur.com/PSXxjNY.png" />
                </div>
                <h3 className="mb-5 text-center heading">We are Tidi</h3>
                <h6 className="msg-info">Please login to your account</h6>
                <div className="form-group">
                  <label className="form-control-label text-muted">Username</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Phone no or email id"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="form-control-label text-muted">Password</label>
                  <input
                    type="password"
                    id="psw"
                    name="psw"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="row justify-content-center my-3 px-3">
                  <button className="btn-block btn-color">Login to Tidi</button>
                </div>
                <div className="row justify-content-center my-2">
                  <a href="#">
                    <small className="text-muted">Forgot Password?</small>
                  </a>
                </div>
              </div>
            </div>
            <div className="bottom text-center mb-5">
              <p href="#" className="sm-text mx-auto mb-3">
                Don't have an account?
                <button className="btn btn-white ml-2">Create new</button>
              </p>
            </div>
          </div>
          <div className="cardright">
            <div className="my-auto mx-md-5 px-md-5 right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
