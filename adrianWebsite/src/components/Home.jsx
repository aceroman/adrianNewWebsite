import React from "react";
import Adrian from "../assets/headshot-adrian.jpg";

function Home() {
  return (
    <section className="bg-[#3B4141] min-h-screen flex items-center px-6 py-16">
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
        
        <div className="flex-1 text-left max-w-2xl">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2">
            Hi, I'm
          </p>

          <h1 className="text-[#F72C1D] text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight mb-6">
            <span className="text-[#396294]">Adrian </span> 
            <span className="text-white">Menacho</span>
          </h1>

          <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed mb-5">
            I'm someone who loves solving problems, learning new things, and
            turning ideas into something meaningful and interesting.
          </p>

          <p className="text-white/90 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Handling data happens to be one of my favorite ways to do that.
          </p>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={Adrian}
            alt="Adrian Menacho"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-lg object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Home;