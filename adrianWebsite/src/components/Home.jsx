import React from 'react';
import Adrian from '../assets/synergyPicture2.jpg'
import { TypeAnimation } from 'react-type-animation';


function Home() {
  return (
    <div className='bg-[#3B4141] min-h-screen p-4'>
      {/*bg-[#A0A09B] */}{/*bg-[#A0A09B] */}
      <TypeAnimation className='flex justify-center text-3xl sm:text-4xl text-white font-semibold'
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
          <p className='text-white text-lg sm:text-xl md:text-2xl font-semibold max-w-full md:max-w-[600px]'>Hi! My name is Adrian Menacho. I recently graduated from Virginia Tech! My interests lie in Big Data, Machine Learning and Web development.</p>
          <p className='text-white text-lg sm:text-xl md:text-2xl font-semibold max-w-full md:max-w-[600px]'>Outside of analyzing data and developing, I love listening to music, stargazing and finding new restaruants!</p>
          <p className='text-white text-lg sm:text-xl md:text-2xl font-semibold max-w-full md:max-w-[600px]'>Feel free to explore my website!</p>
        </div>
      </div>



    </div>
  )
}

export default Home