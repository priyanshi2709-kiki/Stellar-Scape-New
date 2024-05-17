import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
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
              <Link className="nav-link" to="Signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar