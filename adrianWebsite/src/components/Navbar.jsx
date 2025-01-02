import React from 'react';
import { NavLink } from 'react-router-dom'; 
import HomeIcon from '../assets/homeIcon.png';
import AboutIcon from '../assets/aboutIcon.png';
import ProjectIcon from '../assets/projectsIcon.png';
import ContactIcon from '../assets/contactIcon.png';



const NavLinks = () => {
  return (
    <div className='flex space-x-32'>
      <NavLink to="/home" className="relative group w-10 h-10 text-white text-2xl font-bold">
      <img src={HomeIcon} alt='Home' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
      <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Home</span>
      </NavLink>

      <NavLink to="/about" className="relative group w-10 h-10 text-white text-2xl font-bold">
      <img src={AboutIcon} alt='Home' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
      <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>About</span>
      </NavLink>

      <NavLink to="/projects" className="relative group w-10 h-10 text-white text-2xl font-bold">
      <img src={ProjectIcon} alt='Home' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
      <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Experiences</span>
      </NavLink>

      <NavLink to="/contact" className="relative group w-10 h-10 text-white text-2xl font-bold">
      <img src={ContactIcon} alt='Home' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
      <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Contact</span>
      </NavLink>
    </div>
  );
};


function NavBar(){
  return (
    <div className='flex justify-center bg-[#911825] w-fit mx-auto px-8 py-3 rounded-full'>
      <NavLinks/>
    </div>
  )
}

export default NavBar;
