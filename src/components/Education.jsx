import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Education = () => {
  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (section) => {
    if (expandedSections.includes(section)) {
      setExpandedSections(expandedSections.filter((s) => s !== section));
    } else {
      setExpandedSections([...expandedSections, section]);
    }
  };

  const isExpanded = (section) => expandedSections.includes(section);

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gray-600">Education</span>
          <h2 className="text-3xl text-black font-bold mt-4">Education</h2>
        </div>
        <div className="accordion">
          
          {/* SPPU - Bachelor of Engineering */}
          <div className="collapse-item mb-3">
            <div
              onClick={() => toggleSection('collapseOne')}
              className="flex items-center text-black justify-between py-3 px-4 bg-gray-200 rounded cursor-pointer"
            >
              <span><b>Bachelor of Engineering (B.E)</b></span>
              <div className="flex items-center">
                {isExpanded('collapseOne') ? (
                  <FaMinus className="w-4 h-6 text-black transition-transform duration-500" />
                ) : (
                  <FaPlus className="w-4 h-6 text-black transition-transform duration-300" />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded('collapseOne') ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
  <div className="text-black collapse-content py-4 bg-white">
  <div className="flex flex-col space-y-2">
    <div className="flex">
      <p className="font-bold w-32">University:</p>
      <p>Savitribai Phule Pune University</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">College:</p>
      <p>Smt. Kashibai Navale College of Engineering , Ambegaon Bk ,Pune</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Branch:</p>
      <p>Mechanical</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">CGPA:</p>
      <p>8.02</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Duration:</p>
      <p>Jun 2019 - Jun 2023</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Description:</p>
      <p>Engineering with Distinction. Strong academic record, technical projects, and leadership experience.</p>
    </div>
  </div>
</div>

            </div>
          </div>

          {/* Dayanand Science College - HSC */}
          <div className="collapse-item mb-3">
            <div
              onClick={() => toggleSection('collapseTwo')}
              className="flex items-center justify-between py-3 px-4 bg-gray-200 rounded cursor-pointer"
            >
              <span className='text-black'><b>Higher Secondary Certificate (HSC) </b></span>
              <div className="flex items-center">
                {isExpanded('collapseTwo') ? (
                  <FaMinus className="w-4 h-6 text-black transition-transform duration-300" />
                ) : (
                  <FaPlus className="w-4 h-6 text-black transition-transform duration-300" />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded('collapseTwo') ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
             <div className="text-black collapse-content py-4 bg-white">
  <div className="flex flex-col space-y-2">
    <div className="flex">
      <p className="font-bold w-32">Board:</p>
      <p>Maharashtra State Board</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">College:</p>
      <p>Dayanand Science College, Latur, 413512</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Subject:</p>
      <p>PCM</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Percentage:</p>
      <p>68.15%</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Duration:</p>
      <p>Jun 2018 - Jun 2019</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Description:</p>
      <p>Achieved a strong foundation in Physics, Chemistry, and Mathematics (PCM) during HSC, demonstrating analytical skills and academic excellence</p>
    </div>
  </div>
</div>
            </div>
          </div>

          {/* Janklayan Niwasi Vidhyalaya - SSC */}
          <div className="collapse-item mb-3">
            <div
              onClick={() => toggleSection('collapseThree')}
              className="flex items-center justify-between py-3 px-4 bg-gray-200 rounded cursor-pointer"
            >
              <span className='text-black'><b>Secondary School Certificate (SSC)</b></span>
              <div className="flex items-center">
                {isExpanded('collapseThree') ? (
                  <FaMinus className="w-4 h-6 text-black transition-transform duration-300" />
                ) : (
                  <FaPlus className="w-4 h-6 text-black transition-transform duration-300" />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded('collapseThree') ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
                <div className="text-black collapse-content py-4 bg-white">
  <div className="flex flex-col space-y-2">
    <div className="flex">
      <p className="font-bold w-32">Board:</p>
      <p>Maharashtra State Board</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">School:</p>
      <p>Janklayan Niwasi Vidhyalaya, Latur, 413512</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Percentage:</p>
      <p>92.40%</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Duration:</p>
      <p>Jun 2016 - Jun 2017</p>
    </div>
    <div className="flex">
      <p className="font-bold w-32">Description:</p>
      <p></p>Excelled in foundational academics during SSC with a focus on core subjects, achieving a remarkable score of 92.40%, reflecting strong academic performance and dedication
    </div>
  </div>
</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
