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
    <section id="education" className="py-10 bg-white rounded-md">
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
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded('collapseOne') ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
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
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded('collapseTwo') ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
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
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded('collapseThree') ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
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


          {/* {Certifications} */}
          <div className="collapse-item mb-3">
            <div
              onClick={() => toggleSection('collapseFour')}
              className="flex items-center justify-between py-3 px-4 bg-gray-200 rounded cursor-pointer"
            >
              <span className='text-black'><b>Certifications / Courses</b></span>
              <div className="flex items-center">
                {isExpanded('collapseFour') ? (
                  <FaMinus className="w-4 h-6 text-black transition-transform duration-300" />
                ) : (
                  <FaPlus className="w-4 h-6 text-black transition-transform duration-300" />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded('collapseFour') ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="text-black collapse-content py-4 bg-white">
                <div className="flex flex-col space-y-2">
<div className="p-4 bg-gray-100 rounded-lg shadow-md">
  <h3 className="text-xl font-bold text-red-700 mb-2">Java Fullstack Development</h3>
  <div className="text-gray-700">
    <p><span className="font-semibold">Institution:</span> ExcelR Solutions</p>
    <p><span className="font-semibold">Duration:</span> June 2023 - Oct 2023</p>
    <p className="mt-2 text-sm italic text-gray-600">
      Developed comprehensive skills in Java Fullstack Development, equipping me with the knowledge and expertise to handle end-to-end software development tasks.
    </p>
    <p className="mt-4">
      <span className="font-semibold">Certification: </span> 
      <a href="https://drive.google.com/file/d/1KlUdXSqCLPdCi9DXdH-gpclT_x3Xeu-N/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        View Certification
      </a>
    </p>

  </div>
</div>
<div className="p-4 bg-gray-100 rounded-lg shadow-md">
  <h3 className="text-xl font-bold text-red-700 mb-2">Python for Data Science and ML Bootcamp</h3>
  <div className="text-gray-700">
    <p><span className="font-semibold">Platform: </span> Udemy</p>
    <p><span className="font-semibold">Duration:</span> Jun 2022 - Aug 2022</p>
    <p className="mt-2 text-sm italic text-gray-600">
    Acquired advanced skills in Python programming, data analysis, and machine learning techniques, preparing me to tackle real-world data science challenges and implement machine learning models effectively.
    </p>
    <p className="mt-4">
      <span className="font-semibold">Certification: </span> 
      <a href="https://www.udemy.com/certificate/UC-e20c5de5-92a5-4872-9264-e33353ab70b6/" className="text-blue-500 hover:underline">
        View Certification
      </a>
    </p>

  </div>
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
