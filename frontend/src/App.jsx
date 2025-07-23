import React from 'react'
import Navbar from './component/common/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify';
import VerifyOtp from './pages/VerifyOtp'
import Home from './pages/Home'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './component/common/navbar/Sidebar'
import { setOpen } from './slices/sidebarSlice'
import Dashboard from './pages/Dashboard'

const App = () => {
  const { open } = useSelector((state) => state.sidebar)
  const dispatch = useDispatch();
  return (
    <div className={`relative h-screen overflow-hidden`}>
    <Navbar />
    {open && <div onClick={() => dispatch(setOpen(!open))} className='w-full h-full z-10 overflow-hidden absolute bg-black/50 top-0'></div>}
    <Sidebar/>

    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/verify-Email' element={<VerifyOtp />} />
    </Routes>
    <ToastContainer />
</div>

  )
}

export default App