// components/Hero.js
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import sidebarImage from '../assets/sidebarimage.jpg'; // Adjust the path as needed

const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl font-bold mb-4 sliding2-animation">Hi!</h1>
          <h1 className="text-4xl font-bold mb-4 sliding-animation"> I'm Shivsambh Bhujbal</h1>
          <p>
            <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:text-dark">
              Download CV <FaDownload className="ml-2" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
