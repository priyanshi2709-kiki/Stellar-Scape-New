import React from 'react'
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext';
import gitLogo from "../assets/gitLogo.gif"
import LoginBg from "../assets/LoginBg.gif"

const Login = () => {
  const { setLoggedIn } = useAppContext();
  const handleLogin = () => {
    // Redirect the user to the GitHub login page
    window.location.href = 'http://localhost:3000/auth/github'; // Change the URL to your backend authentication route
  };

  const getData = async () => {
    // Fetch the data from the backend
    const res = await fetch('http://localhost:3000/user');

    console.log(res.status);

    if (res.status === 200) {
      console.log('Success');

      enqueueSnackbar('Loggedin Successfully', { variant: 'success' });

      const data = await response.json();
      console.log(data);

      // to save user data in session
      sessionStorage.setItem('user', JSON.stringify(data));
      setLoggedIn(true);
      navigate('/');

    } else if (response.status === 401) {
      enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }


}

return (
  <div style={{backgroundImage: `url(${LoginBg})`, backgroundSize:'cover', width:'100%'}}>
  <div className='container d-flex '>
    <div className="card login-card">
      <img src={gitLogo} className='git-logo' />
      <div style={{fontSize: '25px', marginTop: '10px'}}>
      <p> Login wih Github and you're all set!  </p></div>
      <button type="submit" className='login-btn' onClick={handleLogin}>
        Login with GitHub
      </button>
      {/* <button onClick={getData}>Get User Data</button> */}
    </div>
  </div>
  </div>
)
}

export default Login