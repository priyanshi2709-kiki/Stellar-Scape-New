import { useState } from 'react'
import './UDasboard.css'

import Sidebar from './USidebar'
import { Outlet } from 'react-router-dom'

function UMain() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className=''>
       <Outlet />
        
      </div>
      
    </div>
  )
}

export default UMain
