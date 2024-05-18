import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Signup from './components/Signup'
import { SnackbarProvider } from 'notistack'
import Contact from './components/Contact'
import ManageUser from './components/ManageUser'
import ManageProject from './components/ManageProject'
import UpdateProject from './components/UpdateProject'
import ProjectListing from './components/ProjectListing'
import AddProject from './components/AddProject'
import Login from './components/Login'
import { AppProvider } from './AppContext'
import Home_sidebar from './components/Home_sidebar'
import Navbar from './components/Navbar'
import AddTask from './components/AddTask'
import ForgetPassword from './components/ForgetPassword'
import AdminLogin from './components/AdminLogin'
import View from './components/View'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <AppProvider>
            <Home_sidebar />
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path="/authenticated/:githubusername" element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/Navbar' element={<Navbar/>} /> 
              <Route path='/Contact' element={<Contact />} />
              <Route path='/ManageUser' element={<ManageUser />} />
              <Route path='/ManageProject' element={<ManageProject />} />
              <Route path='/ProjectListing' element={<ProjectListing />} />
              <Route path='/UpdateProject' element={<UpdateProject />} />
              <Route path='/AddProject' element={<AddProject />} />
              <Route path='/AddTask' element={<AddTask />} />
              <Route path='/ForgetPassword' element={<ForgetPassword />} />
              <Route path='/AdminLogin' element={<AdminLogin />} />
              <Route path='/View/:id' element={<View />} />

            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}
export default App