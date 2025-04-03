// Navbar.jsx
import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from 'framer-motion';

const Navbar = () => {
  const [isOpen,setisOpen] = useState(false);
  return (
    <>
      <nav className="hidden fixed top-4 md:top-12 left-1/2 transform -translate-x-1/2 backdrop-blur-lg text-white font-sans rounded-2xl max-w-[72rem] w-full mx-auto shadow-lg md:px-6 items-center px-5 py-3 md:flex md:justify-between border-2 border-zinc-800 z-50">
        <h1 className="font-bold text-4xl md:text-2xl text-zinc-300">Task Manager</h1>
        <div className="flex gap-3">
          <button className="px-4 md:px-5 py-2 md:py-3 text-md md:text-lg rounded-2xl bg-gradient-to-t from-[#659593] to-[#1a5f5c] text-white shadow-md font-bold hover:scale-105 transition duration-150">
            Signup
          </button>
          <button className="bg-white px-4 md:px-5 py-2 md:py-3 text-md md:text-lg rounded-2xl text-zinc-800 shadow-md font-bold hover:scale-105 transition duration-150">
            Login
          </button>
        </div>
      </nav>
      {isOpen && <div className='h-screen w-screen bg-black text-white opacity-40 fixed top-0 left-0 md:hidden' onClick={()=>setisOpen(prev => !prev)}></div>}
      <button className='text-2xl text-zinc-200 font-bold fixed md:hidden right-0 z-55 px-5 cursor-pointer' onClick={() => setisOpen(prev => !prev)}      >
        {isOpen ? <IoCloseSharp size={36} />:<CiMenuFries size={36} />}
      </button>
      {isOpen && 
      <motion.div 
        initial={{opacity:0,x:"100%"}}
        animate={{opacity:1,x:"0"}}
        transition={{duration:0.3}}
      className='fixed md:hidden bg-[#0A0B10]/30 right-0 top-0 z-50 h-full w-xs px-2 backdrop-blur-lg rounded-lg border-2 border-zinc-800 border-r-0 py-12 overflow-hidden '>
          <div className='flex flex-col justify-between h-full w-full'>
            <h1 className='text-4xl font-sans font-bold text-zinc-300'>Task Manager</h1>
            <div className="flex flex-col gap-3">
              <button className="px-4 md:px-5 py-2 md:py-3 text-md md:text-lg rounded-2xl bg-gradient-to-t from-[#659593] to-[#1a5f5c] text-white shadow-md font-bold hover:scale-105 transition duration-150">
                Signup
              </button>
              <button className="bg-white px-4 md:px-5 py-2 md:py-3 text-md md:text-lg rounded-2xl text-zinc-800 shadow-md font-bold hover:scale-105 transition duration-150">
                Login
              </button>
            </div>
          </div>
        </motion.div>}
    </>
  );
};

export default Navbar;
