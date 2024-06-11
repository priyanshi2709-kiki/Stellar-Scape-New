import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom'

function USidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <h6 className='icon_header'/> OpenGalaxy
            </div>
            <span className='icon1 close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
           
            <li className='sidebar-list-item'>
                <Link to="/User/UserDashboard">
                    <BsFillGrid3X3GapFill className='icon'/> Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsFillGrid3X3GapFill className='icon'/> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Project">
                    <BsFillGrid3X3GapFill className='icon'/> Project
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Contactus">
                    <BsFillGrid3X3GapFill className='icon'/> Contact
                </Link>
            </li>
            
        </ul>
    </aside>
  )
}

export default USidebar