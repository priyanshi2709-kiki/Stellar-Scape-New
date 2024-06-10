import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';

const UserAuth = ({children}) => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
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

export default UserAuth;