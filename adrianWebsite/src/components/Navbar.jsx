import React from 'react';
import { NavLink } from 'react-router-dom'; 
import HomeIcon from '../assets/homeIcon.png';
import AboutIcon from '../assets/aboutIcon.png';
import ProjectIcon from '../assets/projectsIcon.png';
import ContactIcon from '../assets/contactIcon.png';

const NavLinks = () => {
  return (
    <>
      <NavLink to="/home" className="relative group w-10 h-10 text-white text-2xl font-bold">
        <img src={HomeIcon} alt='Home' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
        <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Home</span>
      </NavLink>

      <NavLink to="/about" className="relative group w-10 h-10 text-white text-2xl font-bold">
        <img src={AboutIcon} alt='About' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
        <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>About</span>
      </NavLink>

      <NavLink to="/projects" className="relative group w-10 h-10 text-white text-2xl font-bold">
        <img src={ProjectIcon} alt='Experiences' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
        <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Experiences</span>
      </NavLink>

      <NavLink to="/contact" className="relative group w-10 h-10 text-white text-2xl font-bold">
        <img src={ContactIcon} alt='Contact' className='w-10 h-10 transition-opacity duration-300 group-hover:opacity-0'/>
        <span className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>Contact</span>
      </NavLink>
    </>
  );
};


function NavBar() {
  return (
    <div className='w-full flex justify-center bg-[#F72C1D] px-4 sm:px-8 py-3 rounded-full'>
      <div className='flex space-x-12 sm:space-x-36'>
        <NavLinks />
      </div>
    </div>
  );
}

export default NavBar;
