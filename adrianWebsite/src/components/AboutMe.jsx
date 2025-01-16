import React from 'react';
import Adrian from '../assets/adrianProfessionalPic.jpg'
import {HiBadgeCheck} from 'react-icons/hi';
import {IoSchoolSharp} from 'react-icons/io5';
import { useRef } from 'react';
import {useInView} from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


function Section({children}){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </div>
      </section>
    );
  }


function AboutMe() {
    return (
        <div className='p-4 bg-[#A0A09B] min-h-screen flex flex-col items-center justify-center'>
            <TypeAnimation className='flex justify-center text-3xl sm:text-4xl text-black font-semibold' 
            sequence={['Data Analyst', 1500,
                 'Front End Developer', 1500,
                  'Bolivian', 1500,
                   'Data Scientist', 1500,
                    'Web Developer', 1500]} 
            speed={50} repeat={Infinity}/>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 pt-10 px-4 xl:gap-72'>
                <img className='w-full max-w-xs sm:max-w-sm md:max-w-[300px] h-auto rounded-3xl shadow-lg' src={Adrian}/>
                <p className='text-lg sm:text-xl md:text-2xl font-semibold text-center max-w-full md:max-w-[600px]'>Hi! My name is Adrian Menacho. I'm interested in Analysis, Machine Learning, and Web Development. </p>
            </div>

            <div className='w-full flex flex-col gap-5 md:flex-row md:justify-center items-center'>
                <div className='max-w-[430px] w-full border-2 rounded-3xl flex flex-col items-center gap-2 py-6'>
                    <Section><IoSchoolSharp size={40} /></Section>
                    <Section><h2 className='text-2xl font-semibold'>Education</h2></Section>
                    <Section><p className='text-sm opacity-60'>Virginia Tech</p></Section>
                    <Section><p className='text-sm opacity-60'>B.S in Computational Modeling and Data Analytics</p></Section>
                </div>
            </div>


            
            
        </div>
    )
}

export default AboutMe