import { useState } from 'react'
import './Dasboard.css'
import Header from './Header'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Main() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className=''>
        <Header OpenSidebar={OpenSidebar} > <Outlet /> </Header>
        
      </div>
      
    </div>
  )
}

export default Main
