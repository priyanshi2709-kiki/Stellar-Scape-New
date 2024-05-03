import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import useAppContext from '../AppContext';

// import './YourComponent.css'; // Create a CSS file for your styles

const Home_sidebar = () => {

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isLoggedIn = sessionStorage.getItem('isloggedin');
  const user = JSON.parse(sessionStorage.getItem('user'));
  const [currentAdmin, setCurrentAdmin] = useState(JSON.parse(sessionStorage.getItem('admin')));

  const { logout, loggedIn, setLoggedIn } = useAppContext();

  const [isNavOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
    document.getElementById("mySidenav").style.width = "400px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    setLoggedIn(true);
  };

  const closeNav = () => {
    setNavOpen(false);
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  };

  return (
    <div>
      <div id="mySidenav" className={`sidenav ${isNavOpen ? 'open' : ''}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <ul>

          {user ? (
            <>
              <Link to="/">Home </Link>
              <Link to="Project">Project</Link>
              <Link to="ContactUs">Contact</Link>
              <Link to="User/UserDashboard">Dashboard</Link>
              {/* <Link to="">User Profile</Link> */}
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="Project">Project</Link>
              <Link to="ContactUs">Contact</Link>
            </>
          )}

          {isLoggedIn ? (
            <>
              <Link type='button' onClick={logout} className="">
                Admin Logout
              </Link>
              <Link to='/Admin/ManageProject'>Admin Dashboard</Link>
            </>
          ) : (
            <Link to="/AdminLogin" className="">
              Admin Login
            </Link>
          )}
        </ul>
      </div>

      <div id="main">

        <span
          style={{ fontSize: '20px', cursor: 'pointer', marginTop: '-42px', color: 'white' }}
          onClick={openNav}
          className='b-icon'
        >
          &#9776;
        </span>
      </div>
    </div>
  );
};

export default Home_sidebar;
