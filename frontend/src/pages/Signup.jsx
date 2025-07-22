import React, { useState } from 'react'
import { SlLocationPin } from "react-icons/sl";
import { Link, useNavigate } from 'react-router-dom';
import { BsEyeSlash } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '../slices/auth';
import sentOtp from '../services/operation/auth';


const Signup = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {loading} = useSelector((state) => state.auth);

    const handleSubmit = async(e) => {
        e.preventDefault;
        dispatch(sentOtp(navigate,email));
        dispatch(setSignupData({firstName,lastName,email,password,confirmPassword,number}))
    }

    return (
        <div className="bg-blue-100 md:p-16 px-5 py-20 mt-20 h-screen overflow-auto z-0">
            <div className="bg-white p-8 mx-auto rounded shadow-md md:w-[35%] w-full">
                <div className='text-[#1E88E5] flex flex-col justify-center items-center text-2xl mb-2'>
                    <SlLocationPin className='text-3xl' />
                    <h2 className='font-bold'><span className='text-orange-500'>Crisis</span>Board</h2>
                </div>
                <div className=''>
                    <h2 className="text-2xl text-gray-600 font-semibold text-center">Create an Account</h2>
                    <p className='text-center text-sm text-zinc-600'>Already have an Account ? <Link className='font-bold underline text-zinc-800' to={'/login'}>Login</Link></p>
                </div>

                <form className='mt-10'>
                    <div className='md:flex md:gap-6 gap-2'>
                        <div className='md:w-[50%]'>
                            <label className='text-zinc-600' htmlFor="firstName">First name</label><br />
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} id='firstName' className="w-full p-2 mb-6 shadow border border-gray-300 rounded-md  outline-0" />
                        </div>
                        <div className='md:w-[50%]'>
                            <label className='text-zinc-600' htmlFor="lastName">Last name</label><br />
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} id='lastName' className="w-full p-2 mb-6 shadow border border-gray-300 rounded-md  outline-0" />
                        </div>
                    </div>
                    <div>
                        <label className='text-zinc-600' htmlFor="email">Email address</label><br />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} id='email' type='email' className="w-full p-2 mb-6 shadow border border-gray-300 rounded-md  outline-0" />
                    </div>

                    <div className='md:flex gap-6'>
                        <div className='md:w-[50%]'>
                            <label className='text-zinc-600' htmlFor="password">password</label><br />
                            <div className='relative'>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} id='password' type={`${showPassword ? "text" : "password"}`} className="w-full p-2 mb-6 shadow border border-gray-300 rounded-md  outline-0" />
                                {showPassword ? <BsEye className='absolute top-3 right-2 text-zinc-500' onClick={() => setShowPassword(!showPassword)} /> : <BsEyeSlash className='absolute top-3 right-2 text-zinc-500' onClick={() => setShowPassword(!showPassword)} />}
                            </div>

                        </div>
                        <div className='md:w-[50%]'>
                            <label className='text-zinc-600' htmlFor="cpassword">confirm password</label><br />
                            <div className='relative'>
                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id='cpassword' type={`${showConfirmPassword ? "text" : "password"}`} className="w-full p-2 mb-6 shadow border border-gray-300 rounded-md  outline-0" />
                                {showConfirmPassword ? <BsEye className='absolute top-3 right-2 text-zinc-500' onClick={() => setShowConfirmPassword(!showConfirmPassword)} /> : <BsEyeSlash className='absolute top-3 right-2 text-zinc-500' onClick={() => setShowConfirmPassword(!showConfirmPassword)} />}
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className='text-zinc-600' htmlFor="number">Contact Number</label><br />
                        <input value={number} onChange={(e) => setNumber(e.target.value)} id='number' type='number' className="w-full p-2 mb-6 shadow border border-gray-300 rounded-md  outline-0" />
                    </div>
                    <div className="w-full  bg-[#1E88E5] hover:bg-[#1e88e5da] text-white p-2 rounded-md flex justify-center">
                        <div onClick={(e)=>handleSubmit(e)} className='flex items-center gap-2 cursor-pointer'>
                            {loading?<>Creating...<div className='w-5 h-5 border-r-2 animate-spin border-2 border-gray-400 border-t-white rounded-full'></div></>  :"Create"}
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Signup