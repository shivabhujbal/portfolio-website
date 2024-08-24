import React, { useState, useEffect } from 'react';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'work',  'contact'];
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const linkClass = (section) =>
    `block py-2 px-4 font-bold transition-all duration-300 ease-in-out hover:bg-amber-200 hover:shadow-lg hover:rounded-md ${
      activeSection === section ? 'bg-amber-300 shadow-lg rounded-md' : ''
    }`;

  return (
    <aside className="w-64 relative h-screen bg-amber-100 text-black flex flex-col">
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto bg-cover rounded-full mt-5" style={{ backgroundImage: `url(${profileImage})` }}></div>
        <h1 className="text-2xl font-bold mt-2"><a href="index.html" className="text-black">Shivsambh Bhujbal</a></h1>
        <span className="block text-gray-800 mt-1"><a href="#" className="hover:text-gray-800">Fullstack Developer</a> in Pune</span>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2">
          <li><span onClick={() => handleScroll('home')} className={linkClass('home')}>Home</span></li>
          <li><span onClick={() => handleScroll('about')} className={linkClass('about')}>About</span></li>
          <li><span onClick={() => handleScroll('skills')} className={linkClass('skills')}>Skills</span></li>
          <li><span onClick={() => handleScroll('education')} className={linkClass('education')}>Education</span></li>
          <li><span onClick={() => handleScroll('experience')} className={linkClass('experience')}>Experience</span></li>
          <li><span onClick={() => handleScroll('work')} className={linkClass('work')}>Projects</span></li>
          <li><span onClick={() => handleScroll('contact')} className={linkClass('contact')}>Contact</span></li>
        </ul>
      </nav>

      <footer className="text-center mt-auto">
        <p className="text-gray-400 text-sm">
          <small>&copy; {new Date().getFullYear()} All rights reserved. Made with <span className="text-red-500">&#9829;</span> by <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Shivsambh</a></small>
        </p>
        <div className="flex justify-center space-x-4 mt-2 mb-5">
          <a href="https://x.com/_shiva_1008" className="text-gray-800 text-3xl hover:text-blue"><FaTwitter /></a>
          <a href="https://www.instagram.com/shiva.bhujbal/" className="text-gray-800 hover:text-blue text-3xl"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/shivsambh-bhujbal-75987a1b8/" className="text-gray-800 hover:text-blue text-3xl"><FaLinkedinIn /></a>
          <a href="https://github.com/shivabhujbal" className="text-gray-800 hover:text-blue text-3xl"><FaGithub /></a>
        </div>
      </footer>
    </aside>
  );
};

export default Sidebar;
