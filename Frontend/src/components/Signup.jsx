import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import '../components/Signup.css'
import SourceNestLogo from '../assets/SourceNestLogo.png'
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
      name: '',
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
    <div className="container-fluid px-4 py-5 mx-auto back">
      <div className="maincard">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="cardleft">
          <form onSubmit={signupForm.handleSubmit}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <div className="row justify-content-center px-3 mb-3">
                  <img src={SourceNestLogo} style={{width:'50%', marginTop: '10px'}} />
                </div>
                <h6 className="msg-info">Create a new acccount</h6>
                  <div className="form-group fields">
                    <label className="form-control-label text-muted ">Name</label>
                    <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{signupForm.touched.name && signupForm.errors.name}</span>
                    <input
                      type="text"
                      className="form-control mb-4"
                      id='name'
                      placeholder="Enter your name"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.name} />

                  </div>
                  <div className="form-group fields">
                    <label className="form-control-label text-muted">Email</label>
                    <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{signupForm.touched.email && signupForm.errors.email}</span>
                    <input
                      type="text"
                      id="email"
                      placeholder="Phone no or email id"
                      className="form-control"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.email} />
                  </div>
                  <div className="form-group fields ">
                    <label className="form-control-label text-muted">Password</label>
                    <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{signupForm.touched.password && signupForm.errors.password}</span>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={signupForm.handleChange}
                      value={signupForm.values.password} />
                  </div>
                  <div className="row justify-content-center my-3 px-3">
                    <button className="btn-block btn-color">Signup</button>
                  </div>
              </div>
            </div>
            </form>
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
