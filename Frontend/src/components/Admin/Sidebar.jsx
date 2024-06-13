import React from 'react'
import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""} >
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <h6 className='icon_header' /> Source Hype
                </div>
                <span className='icon1 close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>

                <li className='sidebar-list-item'>
                    <Link to="/Admin/AdminDashboard">
                        <BsFillGrid3X3GapFill className='icon' /> Dashboard
                    </Link>
                </li>
                {/* <li className='sidebar-list-item'>
                <Link to="/Admin/enrolledProject">
                <BsFillGrid3X3GapFill className='icon'/> Enrollment Data
                </Link>
            </li> */}
                <li className='sidebar-list-item'>
                    <Link to="ManageProject">
                        <BsFillGrid3X3GapFill className='icon' /> Manage Projects
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="ManageUser">
                        <BsFillGrid3X3GapFill className='icon' /> Manage Users
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="AdminProfile">
                        <BsFillGrid3X3GapFill className='icon' /> Admin Profile
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/">
                        <BsFillGrid3X3GapFill className='icon' /> Home
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="">
                        <BsFillGrid3X3GapFill className='icon' /> Logout
                    </Link>
                </li>

            </ul>
        </aside>
    )
}

export default Sidebar