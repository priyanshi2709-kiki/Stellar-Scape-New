import React, { useEffect, useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const AdminAuth = ({children}) => {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('admin'))
  );

  if(currentUser!==null){
    return children;
  }else{
    enqueueSnackbar('You are not authorized to view this page', { variant: 'error' });
    return <Navigate to="/AdminLogin" />
  }
}

export default AdminAuth;