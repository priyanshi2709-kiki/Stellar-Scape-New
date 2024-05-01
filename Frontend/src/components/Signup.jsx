import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import video from '../assets/SignupPage.mp4'
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
    .max(15, 'Password must be at most 15 characters')
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
    <div style={{ position: 'relative' }}>
      {/* Video */}
      <video className="video" src={video} type="video/mp4" autoPlay loop style={{ width: '100%' }} />

      {/* Overlay Components */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {/* Form */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
          <form onSubmit={signupForm.handleSubmit} className='bg-dark'>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div data-mdb-input-init="" className="form-outline">
                  <label className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    value={signupForm.values.fname}
                    onChange={signupForm.handleChange}
                  />
                </div>
                <div data-mdb-input-init="" className="form-outline">

                  <label className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    value={signupForm.values.lname}
                    onChange={signupForm.handleChange}
                  />
                </div>
                <div data-mdb-input-init="" className="form-outline">

                  <label className="form-label" >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={signupForm.values.email}
                    onChange={signupForm.handleChange}
                  />
                </div>
                <div data-mdb-input-init="" className="form-outline">

                  <label className="form-label">
                    Password
                  </label>
                  <span style={{color:'red'}}>{signupForm.errors.password && signupForm.touched.password && signupForm.errors.password}</span>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={signupForm.values.password}
                    onChange={signupForm.handleChange}
                    
                  />
                  {/*{signupForm.errors.password && signupForm.touched.password && (
                    <div>{signupForm.errors.password}</div>
                  )}*/}
                </div>
              </div>
              {/* Add more form fields as needed */}
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
