import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
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
        <div className="container">
  <div className="content">
    <div className="left-side">
      <div className="address details">
        <i className="fas fa-map-marker-alt" />
        <div className="topic">Address</div>
        <div className="text-one">Surkhet, NP12</div>
        <div className="text-two">Birendranagar 06</div>
      </div>
      <div className="phone details">
        <i className="fas fa-phone-alt" />
        <div className="topic">Phone</div>
        <div className="text-one">+0098 9893 5647</div>
        <div className="text-two">+0096 3434 5678</div>
      </div>
      <div className="email details">
        <i className="fas fa-envelope" />
        <div className="topic">Email</div>
        <div className="text-one">codinglab@gmail.com</div>
        <div className="text-two">info.codinglab@gmail.com</div>
      </div>
    </div>
    <div className="right-side">
      <div className="topic-text">Send us a message</div>
      <p>
        If you have any work from me or any types of quries related to my
        tutorial, you can send me message from here. It's my pleasure to help
        you.
      </p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-box message-box"></div>
        <div className="button">
          <input type="button" defaultValue="Send Now" />
        </div>
      </form>
    </div>
  </div>
</div>
    )}

export default Contact;
