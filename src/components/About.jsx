// components/About.js
import React from 'react';
import { FaCode, FaGlobe, FaDatabase } from 'react-icons/fa';
import { LiaDocker } from 'react-icons/lia'; // Adjust the import as needed

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gray-600">About Us</span>
          <h2 className="text-xl font-bold text-gray-800 mt-4">Who Am I?</h2>
          <p className='text-black leading-loose '>🌟 <strong>Hello! I'm a Fullstack Developer </strong> with a strong passion for crafting innovative and efficient applications. My expertise spans Java, SpringBoot, Javascript, React.js, MySQL, Spring Data JPA, HTML, CSS, and Bootstrap.</p>
          <p className='text-black leading-loose '>🚀 <strong>I specialize in building scalable backend solutions with SpringBoot, while also creating dynamic and responsive frontends using React.js and Javascript.</strong> My goal is to develop seamless user experiences and robust applications that meet and exceed project objectives.</p>
          <p className='text-black leading-loose '>🔍 <strong>Currently, I am eager to kickstart my career as a Fullstack Developer.</strong> I'm enthusiastic about bringing my technical skills, creativity, and dedication to a forward-thinking team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-110">
            <FaCode className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-black ">Software</h3>
          </div>
          <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-110">
            <FaGlobe className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-black">Web Design</h3>
          </div>
          <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-110">
            <FaDatabase className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-black">Database</h3>
          </div>
          <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:scale-110">
            <LiaDocker className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-black">Deployment</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
