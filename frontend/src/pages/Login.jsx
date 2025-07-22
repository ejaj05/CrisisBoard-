import React from 'react'
import { SlLocationPin } from "react-icons/sl";

const Login = () => {
  return (
    <div className="bg-blue-100 h-screen md:pt-32 p-5 pt-20 mt-20 overflow-auto">
        <div className='text-[#1E88E5] flex flex-col justify-center items-center text-xl mb-4'>
            <SlLocationPin className='text-3xl'/>
            <h2 className='font-bold'><span className='text-orange-500'>Crisis</span>Board</h2>
        </div>
      <div className="bg-white p-8 mx-auto rounded shadow-md md:w-90">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input className="w-full p-2 mb-6 border-none shadow rounded" placeholder="Email" />
        <input className="w-full p-2 mb-10 border-none shadow rounded" placeholder="Password" type="password" />
        <button className="w-full bg-[#1E88E5] hover:bg-[] text-white p-2 rounded">Login</button>
        <p className='text-end my-2 cursor-pointer text-[#1E88E5]'>Forget password</p>
      </div>
    </div>
  )
}

export default Login