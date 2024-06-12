import React from 'react'
import { ReactTyped } from "react-typed";
 
const AdminDashboard = () => {
  return (
    <div className='text-center' style={{marginTop:'100px'}}>
      <h1 className='' style={{fontSize:'50px'}}>Welcome to the</h1>
      <h2 className='' style={{fontSize:'50px'}}>Admin Panel Of</h2>
      <p className=''>
        <ReactTyped
          style={{fontSize: '80px', color: '#ff6219', fontWeight: 'bold'}}
          strings={["DIY INNOVATES"]}
          typeSpeed={120}
          backSpeed={50}
          loop={true}
        /></p>


    

    </div>
  )
}

export default AdminDashboard