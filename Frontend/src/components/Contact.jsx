import React from 'react'
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import '../components/Contact.css'

const Contact = () => {
    const formContact = useFormik({
        initialValues: {
            name: '',
            email: '',
            query: '',
        },
        onSubmit: async (values, action) => {
            console.log(values);
            const res = await fetch('http://localhost:3000/contact/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res.status)
            action.resetForm();
            if (res.status === 200) {
                enqueueSnackbar('Query Submitted', { variant: 'success' });
            } else {
                enqueueSnackbar('Signup failed', { variant: 'error' });
            }
        },
    });

return (
    <>
  <div className="wrapper centered">
    <article className="letter">
      <div className="side">
                                    <form onSubmit={formContact.handleSubmit}>
                                        {/* 2 column grid layout with text inputs for the first and last names */}
                                        <div className="row">
                                            <div className=" ">
                                                <div data-mdb-inputt-init="" className="form-outline">
                                                    <inputt
                                                        type="text"
                                                        id="name"
                                                        className="form-control"
                                                        onChange={formContact.handleChange}
                                                        value={formContact.values.name}
                                                    />
                                                    <label className="form-label" htmlFor="form3Example1">
                                                        Name
                                                    </label>

                                                </div>
                                            </div>

                                        </div>
                                        {/* Email input */}
                                        <div data-mdb-inputt-init="" className="form-outline">
                                            <inputt
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                onChange={formContact.handleChange}
                                                value={formContact.values.email}
                                            />
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                        </div>
                                        {/* Password input */}
                                        <div data-mdb-inputt-init="" className="form-outline">
                                            <textareaa
                                                type="text"
                                                id="query"
                                                className="form-control"
                                                onChange={formContact.handleChange}
                                                value={formContact.values.query}
                                            />
                                            <label className="form-label" htmlFor="form3Example4">
                                                Your query
                                            </label>
                                        </div>
                                        </form>
        <p>
          <button id="sendLetter">Send</button>
        </p>
      </div>
    </article>
    <div className="envelope front" />
    <div className="envelope back" />
  </div>
  <p className="result-message centered">Thank you for your message</p>
</>

)
    }

export default Contact