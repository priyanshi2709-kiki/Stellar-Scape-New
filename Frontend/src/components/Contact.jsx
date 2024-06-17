import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { Link } from 'react-router-dom';
import '../components/Contact.css';

const Contact = () => {
    const formContact = useFormik({
        initialValues: {
            name: '',
            email: '',
            query: '',
        },
        onSubmit: async (values, action) => {
            console.log(values);
            try {
                const res = await fetch('http://localhost:3000/contact/add', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(res.status);
                action.resetForm();
                if (res.status === 200) {
                    enqueueSnackbar('Query Submitted', { variant: 'success' });
                } else {
                    enqueueSnackbar('Signup failed', { variant: 'error' });
                }
            } catch (error) {
                console.error('Error:', error);
                enqueueSnackbar('Error submitting query', { variant: 'error' });
            }
        },
    });

    useEffect(() => {
        function addClass() {
            document.body.classList.add("sent");
        }

        const sendLetter = document.getElementById("sendLetter");
        sendLetter.addEventListener("click", addClass);

        // Cleanup function
        return () => {
            sendLetter.removeEventListener("click", addClass);
        };
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <>
        <div>
                <>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Contact
                            </li>
                        </ol>
                    </nav>
                    
                </>

            </div>
            <div className="wrapper centered ">
                <article className="letter">
                    <div className="side">
                        <form onSubmit={formContact.handleSubmit}>
                            <div className="row">
                                <div className="">
                                    <div data-mdb-input-init="" className="form-outline">
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control"
                                            onChange={formContact.handleChange}
                                            value={formContact.values.name}
                                        />
                                        <label className="form-label" htmlFor="name">
                                            Name
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div data-mdb-input-init="" className="form-outline">
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    onChange={formContact.handleChange}
                                    value={formContact.values.email}
                                />
                                <label className="form-label" htmlFor="email">
                                    Email address
                                </label>
                            </div>
                            <div data-mdb-input-init="" className="form-outline">
                                <textarea
                                    id="query"
                                    className="form-control"
                                    onChange={formContact.handleChange}
                                    value={formContact.values.query}
                                />
                                <label className="form-label" htmlFor="query">
                                    Your query
                                </label>
                            </div>
                            <button type="submit" id="sendLetter">Send</button>
                        </form>
                    </div>
                </article>
                <div className="envelope front" />
                <div className="envelope back" />
            </div>
            {formContact.submitCount > 0 && (
                <p className="result-message centered">Thank you for your message</p>
            )}
        </>
    );
};

export default Contact;
