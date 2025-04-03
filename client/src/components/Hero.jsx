// Hero.jsx
import React from "react";

const Hero = () => {
  return (
      <>
        <section className="flex md:flex-row flex-col items-center justify-between px-1 py-10 md:py-40 max-w-[72rem] w-full mx-auto">
        <div className="max-w-3xl md:text-start text-center mt-10">
          <h1 className="text-6xl font-bold text-zinc-200 leading-tight">
            Task Manager
          </h1>
          <p className="text-md md:text-lg text-zinc-300 mt-4 max-w-lg">
            Stay organized and boost your productivity with our smart task
            manager. Manage your tasks efficiently, set deadlines, and track your
            progress effortlessly.
          </p>
          <button className="mt-6 px-6 py-3 text-lg md:text-2xl rounded-xl bg-gradient-to-b from-[#659593] to-[#1a5f5c] text-white font-bold shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
        {/* Right - Image */}
        <div className="mt-10 lg:mt-0 w-full max-w-sm flex justify-center">
          <img
            src="right.png"
            alt="Task Manager Preview"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
        
      </section>
      <div className="border-2 border-zinc-800 max-w-[72rem] w-full mx-auto">

      </div>
      </>
  );
};

export default Hero;
