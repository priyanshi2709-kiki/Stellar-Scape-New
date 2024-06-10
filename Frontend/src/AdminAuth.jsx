import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

const AdminAuth = ({children}) => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('admin'))
  );

  if(currentUser!==null){
    return children;
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text : 'You are not logged in!'
    })
    return <Navigate to="/Login" />
  }
}

export default AdminAuth;