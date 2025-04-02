import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <>
      <motion.div className="px-12 h-screen w-screen bg-zinc-100 ">
        <nav className='py-6.5 bg-opacity-30 backdrop-blur-lg border-b border-gray-200 w-full flex justify-between items-center px-5 text-black rounded-3xl shadow-2xl relative top-10'>
          <h1 className="font-bold text-2xl">Task Manager</h1>
        </nav>
      </motion.div>
    </>
  )
}

export default App