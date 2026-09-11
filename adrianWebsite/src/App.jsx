import React from 'react';
import AboutMe from './components/AboutMe.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div className='bg-[#3B4141] flex flex-col'> {/*#DBD5B5 */}
      <Navbar />
      <div id="home" className='scroll-mt-20'>
        <Home />
      </div>
      <div id="about" className='scroll-mt-20'>
        <AboutMe />
      </div>
      <div id="projects" className='scroll-mt-20'>
        <Projects />
      </div>
      <div id="contact" className='scroll-mt-20'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App