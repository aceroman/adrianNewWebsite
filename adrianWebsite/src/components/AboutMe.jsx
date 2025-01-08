import React from 'react';
import Adrian from '../assets/adrianProfessionalPic.jpg'
import { TypeAnimation } from 'react-type-animation';

function AboutMe() {
    return (
        <div className='p-4 bg-[#A0A09B] min-h-screen'>
            <TypeAnimation className='flex justify-center text-3xl text-black font-semibold' 
            sequence={['Data Analyst', 1500, 'Front End Developer', 1500, 'Bolivian', 1500, 'Data Scientist', 1500, 'Web Developer', 1500]} 
            speed={50} repeat={Infinity}/>
            <div className='flex flex-col md:flex-row justify-center items-center gap-[450px] pt-10'>
                <img className='w-full md:w-[300px] h-auto rounded-md' src={Adrian}/>
                <p className='text-lg md:text-2xl font-semibold text-center max-w-full md:max-w-[600px]'>Hi! My name is Adrian Menacho, 
                    I am very interested in Data Analysis and web development technologies.. </p>
            </div>
            
        </div>
    )
}

export default AboutMe