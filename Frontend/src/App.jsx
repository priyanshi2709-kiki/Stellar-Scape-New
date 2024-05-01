import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { SnackbarProvider } from 'notistack'
import Contact from './components/Contact'
import EventHandling from './components/EventHandling'
import ManageUser from './components/ManageUser'
import ProductListing from './components/ProductListing'

const App = () => {
  return (
    <div>
      <SnackbarProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Navbar' element={<Navbar />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/EventHandling' element={<EventHandling />} />
            <Route path='/ManageUser' element={<ManageUser />} />
            <Route path='/ProductListing' element={<ProductListing />} />

          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  )
}

export default App