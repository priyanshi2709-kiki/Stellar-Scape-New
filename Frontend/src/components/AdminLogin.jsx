import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import {Link} from 'react-router-dom'
const adminSchema = Yup.object().shape({
    email:Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must at least 6 charachters')
    .max(15, 'Password must at most 15 charachters')
})

const AdminLogin = () => {

    const adminLoginForm = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        //step 5. Valdidation schema
        onSubmit: async(values, action) =>{
            console.log(values);

            const res = await fetch('http://localhost:3000/user/authenticate',{
                method: 'POST',
                body: JSON.stringify(values),
                headers : {
                    'Content-Type': 'application/json'
                }
            }); 
            console.log(res.status)
            action.resetForm()

            if (res.status)
            action.resetForm()
        if (res.status === 200){
            enqueueSnackbar('Login Successfull',{variant: 'success'})

            const data = await res.json();
            console.log(data)
            //to save user data in session,inbuilt api- session storage
            sessionStorage.setItem('user', JSON.stringify(data));
            
        } else{
            enqueueSnackbar('Login Failed',{variant: 'error'})
        }
        },
        validationSchema: adminSchema
    })
  return (
    <div>
    <section className="vh-100">
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-sm-6 text-black">
                    <div className="px-5 ms-xl-4">
                        <i
                            className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                            style={{ color: "#709085" }}
                        />
                        <span className="h1 fw-bold mb-0">Welcome </span>
                    </div>
                    <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                        <form style={{ width: "23rem" }}>
                            <h3 className="fw-normal mb-3 pb-3 fs-1" style={{ letterSpacing: 1,fontFamily:"-moz-initial" }}>
                                LOGIN
                            </h3>
                            <div className="form-outline mb-4">
                            <label >
                                    Email address
                                </label>
                                <span style={{color:'red', fontSize:'10', marginLeft:10}}>{adminLoginForm.touched.email && adminLoginForm.errors.email}</span>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control form-control-lg" onChange={adminLoginForm.handleChange}
                                    value={adminLoginForm.values.email}/>
                            </div>
                            <div className="form-outline mb-4">
                            <label >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password" className="form-control form-control-lg" onChange={adminLoginForm.handleChange}
                                    value={adminLoginForm.values.password} />
                            </div>
                            <div className="pt-1 mb-4">
                                <button className="btn btn-info btn-lg btn-block" type="submit">
                                    Login
                                </button>
                            </div>
                            <p className="small mb-5 pb-lg-2">
                                <Link className="text-muted" to="/ForgetPassword">
                                    Forgot password?
                                </Link>
                            </p>
                            <p>
                                Don't have an account?{" "}
                                <a href="signup" className="link-info">
                                    Register here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
                <div className="col-sm-6 px-0 d-none d-sm-block">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/002/027/488/large_2x/illustration-of-sign-in-page-login-website-page-and-form-people-with-smartphone-screen-vector.jpg"
                        alt="Login image"
                        className="w-100 vh-100"
                        style={{ objectFit: "cover", objectPosition: "left" }}
                    />
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default AdminLogin