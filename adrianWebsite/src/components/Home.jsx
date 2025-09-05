import React from 'react';
import Adrian from '../assets/synergyPicture2.jpg'
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <div className='bg-[#3B4141] min-h-screen p-4 flex flex-col justify-center items-center'>
      {/*bg-[#A0A09B] */}{/*bg-[#A0A09B] */}
      <h1 className='text-center text-6xl font-semibold pt-16 pb-10 text-[#F72C1D]'>Adrian Menacho</h1>
      <TypeAnimation className='text-3xl sm:text-4xl text-white font-semibold text-center'
        sequence={['Data Analyst', 1500,
          'Front End Developer', 1500,
          'Bolivian', 1500,
          'Data Scientist', 1500,
          'Web Developer', 1500]}
        speed={50} repeat={Infinity} />
      <div className='flex flex-col md:flex-row justify-center items-center gap-10 pt-10 px-4 xl:gap-72'>
        <div className='flex flex-col items-center'>
          <img className='w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg h-full rounded-3xl shadow-lg' src={Adrian} />
        </div>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-white text-lg sm:text-xl md:text-2xl font-semibold max-w-full md:max-w-[600px]'>Welcome! I'm Adrian Menacho, a Virginia Tech alum, data analyst, and web developer with a keen interest in Big Data and Machine Learning.</p>
          <p className='text-white text-lg sm:text-xl md:text-2xl font-semibold max-w-full md:max-w-[600px]'>I enjoy turning complex data into actionable insights and creating user-friendly website. Outside of tech, I love music, stargazing, and exploring new restaurants.</p>
          <p className='text-white text-center text-lg sm:text-xl md:text-2xl font-semibold max-w-full md:max-w-[600px]'>Take a look around to learn more about my experiences!</p>
        </div>
      </div>



    </div>
  )
}

export default Home