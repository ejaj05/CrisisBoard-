import React from 'react'
import Logo from "../../../assets/Logo.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../../slices/sidebarSlice';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [active, setActive] = useState("Home")
    const {open} = useSelector((state) => state.sidebar)

    const dispatch = useDispatch();
    const navList = [
        { name: 'Home', path: '/' },
        { name: 'Incidents ', path: '/' },
        { name: 'Report ', path: '/' },
        { name: 'Responders ', path: '/' },
        { name: 'Map ', path: '/' },
    ]
    return (
        <div className='bg-[#1E88E5] h-20 w-[100%] flex items-center justify-between md:pl-[70px] md:pr-[90px] pr-4'>
            <Link to={'/'} className='h-[75%]'>
                <img className='h-full' src={Logo} alt="" />
            </Link>

            <ul className='md:flex w-[35%] hidden justify-between text-[#FFFFFF]'>
                {navList.map((li, idx) => {
                    return <li key={idx} onClick={() => setActive(li.name)} className={`hover:bg-[#1565C0] hover:rounded-md p-2 border-b-2 ${active == li.name ? "border-[#FB8C00]" : "border-transparent"} `}>
                        <Link to={`${li.path}`}>{li.name}</Link>
                    </li>
                })}
            </ul>

            <div className='md:flex hidden items-center justify-between '>
                <Link to={"/login"} className='cursor-pointer px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-[#0D47A1] transition duration-200 mr-6'>Login</Link>
                <Link to={"signup"} className='cursor-pointer px-4 py-2 bg-[#00B8D4] text-white rounded-md hover:bg-[#3e6267] transition duration-200'>Sign Up</Link>
            </div>

            <RxHamburgerMenu onClick={() => dispatch(setOpen(!open))} className='text-4xl md:hidden text-white' />
            
        </div>
    )
}

export default Navbar