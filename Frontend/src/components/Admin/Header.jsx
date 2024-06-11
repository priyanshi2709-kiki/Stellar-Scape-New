import React from 'react'
import { Link } from 'react-router-dom'
// import logo from '../../assets/og.png'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'

function Header({ OpenSidebar, children }) {
    return (
        <div className='admin-header'>

            <header className='header1  d-flex justify-content-center'>
                
                <Link className="navbar-brand me-2" to="/">
                    {/* <img
                        src={logo}
                        height={190}
                        alt="skjh"
                        // loading="lazy"
                        style={{ marginTop: "-8px", marginBottom: "-8px", transform: "rotate(90deg)" }}
                    /> */}
                </Link>
               
            </header>
            {children}
        </div>
    )
}

export default Header
