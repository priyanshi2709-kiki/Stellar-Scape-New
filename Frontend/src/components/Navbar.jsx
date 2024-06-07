import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import useAppContext from '../AppContext';
const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isLoggedIn = sessionStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(null);

  const { logout, loggedIn, setLoggedIn } = useAppContext();

  console.log(isLoggedIn);

  const { githubusername } = useParams();

  console.log(githubusername);

  const getGithubData = async () => {
    const res = await fetch(`http://localhost:3000/user/${githubusername}`);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      sessionStorage.setItem('user', JSON.stringify(data));
      setLoggedIn(true);
      setCurrentUser(data.displayName);
    }
  }

  useEffect(() => {
    if (githubusername)
      getGithubData();
  }, []);

  const showLoginOption = () => {

    if (isLoggedIn) {
      return (
        // <button type="submit" className='login-container' >
        // <div className="dropdown">
        //   <button className="dropbtn login-container" >{currentUser.}</button>
        //   <div className="dropdown-content">
        <button className="login-container btn" style={{ color: 'red' }} onClick={logout} >
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
    <div><nav className="navbar navbar-expand-lg navbar-dark bg-warning"id='navbar'>
      <div className="container-fluid">
        <Link className="navbar-brand" to="Home">
          <img src="" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="Home">
                Home
              </Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
            {showLoginOption()}
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar*/