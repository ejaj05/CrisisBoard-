import React from 'react'
import Navbar from './component/common/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify';
import VerifyOtp from './pages/VerifyOtp'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verify-Email' element={<VerifyOtp/>}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App