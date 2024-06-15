import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Signup from './components/Signup'
import { SnackbarProvider } from 'notistack'
import Contact from './components/Contact'
import ProjectListing from './components/ProjectListing'
import Login from './components/Login'
import { AppProvider } from './AppContext'
import Home_sidebar from './components/Home_sidebar'
{/*import Navbar from './components/Navbar'*/}
import ForgetPassword from './components/ForgetPassword'
import AdminLogin from './components/AdminLogin'
import View from './components/View'
import UpdateProject from './components/UpdateProject'
import UpdateTask from './components/UpdateTask'
import AddTask from './components/AddTask'
import Header from './components/Admin/Header'
import Main from './components/Admin/Main'
import Sidebar from './components/Admin/Sidebar'
// import AdminDashboard from './components/Admin/AdminDashboard'
import ManageProject from './components/ManageProject'
import UMain from './components/User/UMain'
import UHeader from './components/User/UHeader'
import USidebar from './components/User/USidebar'
import UserDashboard from './components/User/UserDashboard'
import AdminDashboard from './components/Admin/AdminDashboard'
import AdminProfile from './components/AdminProfile'
import ManageUser from './components/ManageUser'
import AddProjects from './components/AddProjects'
import AdminAuth from './AdminAuth'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <AppProvider>
            {/* <Home_sidebar /> */}
            {/* <Navbar /> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path="/authenticated/:githubusername" element={<Home />} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
             { /*<Route path='/Navbar' element={<Navbar/>} />*/}
              <Route path='/Contact' element={<Contact />} />
             
              <Route path='/ProjectListing' element={<ProjectListing />} />
              <Route path='/UpdateProject' element={<UpdateProject />} />
              
              <Route path='/AddTask' element={<AddTask />} />
              <Route path='/ForgetPassword' element={<ForgetPassword />} />
              <Route path='/AdminLogin' element={<AdminLogin />} />
              <Route path='/UpdateProject/:id' element={<UpdateProject />} />
              <Route path='/UpdateTask/:id' element={<UpdateTask />} />
              <Route path='/View/:id' element={<View />} />

              <Route path='/Admin' element={<AdminAuth><Main/></AdminAuth>}>
              <Route path='Header' element={<Header />} />
              <Route path='Sidebar' element={<Sidebar />} />
              <Route path='ManageProject' element={<ManageProject />} />
              <Route path='ManageUser' element={<ManageUser />} />
              <Route path='AdminDashboard' element={<AdminDashboard />} />
              <Route path='AdminProfile' element={<AdminProfile />} />
              <Route path='AddProjects' element={<AddProjects />} />
              </Route>
              <Route path='/User' element={<UMain />} >
                <Route path='UHeader' element={<UHeader />} />
                <Route path='USidebar' element={<USidebar />} />
                <Route path='UserDashboard' element={<UserDashboard />} />
                {/* <Route path='UserProfile' element={<UserProfile />} /> */}
              </Route>
            

            </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}
export default App