// components/Main2.js
import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Sidebar from './Sidebar';
import ExperienceSection from './Experience';
import Project from './Project';
import Contact from './Contact';
import Education from './Education';

const Main2 = () => {
  return (
    <div className="flex mt-0">
      {/* Sidebar */}
      <div className='w-64 h-screen sticky top-0 bg-gray-200 text-white'>
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="project">
          <Project />
        </section>
      
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Main2;
