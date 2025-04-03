import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <motion.div className="min-h-screen w-full bg-[#0A0B10] py-10 sm:px-8 md:px-20">
      <Navbar />
      <Hero />
    </motion.div>
  );
};

export default App;
