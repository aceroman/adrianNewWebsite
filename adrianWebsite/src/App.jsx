import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';


function App() {
  return (
  <div className='bg-[#3B4141]'> {/*#DBD5B5 */}
    <Navbar/>
    <div className='bg-[#3B4141] flex justify-center items-center'>
      <h1 className='text-center text-6xl font-semibold pt-16 pb-10 text-[#F72C1D]'>Adrian Menacho</h1>
    </div>


    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path="/About" element={<AboutMe/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />
  
    </Routes>

  </div>
  )
}

export default App