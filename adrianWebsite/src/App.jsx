import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className='bg-[#3B4141] min-h-screen flex flex-col'> {/*#DBD5B5 */}
      <Navbar />
      <div className='flex-1'>
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </div>
      <Footer />


    </div>
  )
}

export default App