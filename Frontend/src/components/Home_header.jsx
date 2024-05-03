import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import useAppContext from '../AppContext';


const Home_header = () => {

    const isLoggedIn = sessionStorage.getItem('user');
    const { logout, loggedIn, setLoggedIn } = useAppContext();
    const showLoginOption = () => {

        if (isLoggedIn) {
            return (
                // <button type="submit" className='login-container' >
                // <div className="dropdown">
                //   <button className="dropbtn login-container" >{currentUser.}</button>
                //   <div className="dropdown-content">
                <button className="login-container btn" onClick={logout} >
                    Logout
                </button>
                //   </div>
                // </div>
            )
        }
        else {
            return (
                <Link type="submit" to="/Login" className="login-container btn" >Login

                </Link>
            )
        }
    }

    return (
        <div>
            {/* Header */}

            <nav className=" navbar home-head  bg-opacity-75 p-0 "  >
                <div className="container d-flex flex-wrap ">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link text-white pt-2 "

                            >
                                Unlock Real Learning! Join Now to Code on Actual Projects!
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item" >
                            <Link to="/Signup" className="nav-link " >
                                <i className="fa-solid fa-user text-white"></i>

                            </Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/ContactUs" className="nav-link " >
                                <i className="fa-solid fa-phone text-white"></i>

                            </Link>
                        </li>
                        <li className="nav-item my-auto" >
                            {showLoginOption()}
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Home_header