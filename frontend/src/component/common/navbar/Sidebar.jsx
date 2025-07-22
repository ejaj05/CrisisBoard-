import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setOpen } from '../../../slices/sidebarSlice';

const Sidebar = () => {
    const { open } = useSelector((state) => state.sidebar);
    const [active, setActive] = useState("Home")

    const dispatch = useDispatch()

    const navList = [
        { name: 'Home', path: '/' },
        { name: 'Incidents ', path: '/' },
        { name: 'Report ', path: '/' },
        { name: 'Responders ', path: '/' },
        { name: 'Map ', path: '/' },
    ]

    return (

        <div className={`absolute z-10 top-0 right-0 bg-[#1F2937] p-6 h-screen  ${open ? "translate-x-0" : "translate-x-[250px]" } transition duration-500`}>
            <div>
                <RxCross2 onClick={() => dispatch(setOpen(!open))} className='text-white text-4xl' />
                <ul className='text-[#FFFFFF]'>
                    {navList.map((li, idx) => {
                        return <li key={idx} onClick={() => { setActive(li.name); dispatch(setOpen(!open)) }} className={`hover:bg-[#374151] hover:rounded-md p-2 border-b-2 mt-1 ${active == li.name ? "border-[#D1D5DB] text-[#FFFFFF]" : "border-transparent text-[#D1D5DB]"} `}>
                            <Link to={`${li.path}`}>{li.name}</Link>
                        </li>
                    })}
                </ul>

                <div className='mt-6'>
                    <Link onClick={() => dispatch(setOpen(!open))} to={"/login"} className='cursor-pointer px-4 py-2 border border-white text-white rounded-md hover:bg-white hover:text-[#0D47A1] transition duration-200 mr-6'>Login</Link>
                    <Link onClick={() => dispatch(setOpen(!open))} to={"signup"} className='cursor-pointer px-4 py-2 bg-[#00B8D4] text-white rounded-md hover:bg-[#3e6267] transition duration-200'>Sign Up</Link>
                </div>
            </div>
        </div>

    )
}

export default Sidebar