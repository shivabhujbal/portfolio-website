import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';
import './style.css';

const experiences = [
  {
    title: 'Software Developer Trainee',
    date: 'JUL 2024 - NOV 2024',
    company: 'Numetry Technologies',
    location: 'WFH',
    responsibilities: [
      'Completing challenging tasks as a Software Developer Trainee, consistently delivering high-quality solutions within tight deadlines.',
      'Currently working on a Resume Builder website project, where my primary role is to connect the frontend with backend APIs, ensuring seamless data flow and user interactions.',
      'Developing and integrating frontend components using React.js, focusing on creating dynamic and user-friendly interfaces.',
      'Collaborating with backend teams to ensure efficient API integration, enhancing the overall functionality of the project.',
    ],
  },
  {
    title: 'Software Developer Intern',
    date: 'OCT 2023 - DEC 2023',
    company: 'AI Variant',
    location: 'Remote',
    responsibilities: [
      'Developed a RESTful API using Spring Boot and Java 17, enhancing backend functionality, streamlining data processing, and improving response time.',
      'Led a team of 6 interns, overseeing task coordination and ensuring timely completion of project milestones, while fostering a collaborative and productive work environment.',
      'Designed and optimized MySQL databases, reducing query execution time by 20%, resulting in improved overall application performance.',
      'Implemented 5 new API endpoints, significantly expanding functionality and providing enhanced capabilities for client applications.',
    ],
  },
  // Add more experiences here
];

const ExperienceSection = () => {
  const { ref: experienceRef, inView } = useInView({
    threshold: 0.2, // Adjust the threshold as needed
  });

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-100" data-section="experience" ref={experienceRef}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeIn' : ''}`}>
          <span className="text-sm font-semibold text-gray-500">Experience</span>
          <h2 className="text-3xl font-bold mt-2 text-black">Work Experience</h2>
        </div>
        <div className="relative">
          <div className={`border-l-2 border-gray-800 ${inView ? 'animate-fadeIn' : ''}`}>
            {experiences.map((exp, index) => (
              <article key={index} className={`mb-8 flex items-start ${inView ? 'animate-slideInLeft' : ''}`}>
                <div className="w-8 h-8 rounded-full text-black flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                  <FaBriefcase className="w-5 h-5" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-semibold text-black">
                    <span className="hover:text-blue-500 transition-colors duration-300">{exp.title}</span>
                    <span className="text-gray-500 ml-5">{exp.date}</span>
                  </h3>
                  <div className="mt-2">
                    <span className="font-bold text-black">Company:</span>
                    <span className="text-black"> {exp.company}, </span>
                    <span className="font-bold text-black">Location:</span>
                    <span className="text-black"> {exp.location}</span>
                  </div>
                  <div className="mt-2">
                    <p className="font-bold text-xl text-gray-800 mb-3">Responsibilities:</p>
                    <ul className="list-disc ml-1 text-black">
                      {exp.responsibilities.slice(0, 2).map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                      {expandedIndex === index &&
                        exp.responsibilities.slice(2).map((responsibility, idx) => (
                          <li key={idx + 2}>{responsibility}</li>
                        ))
                      }
                    </ul>
                    {exp.responsibilities.length > 2 && (
                      <button
                        className="text-blue-500 mt-2 "
                        onClick={() => handleToggle(index)}
                      >
                        {expandedIndex === index ? 'Show less' : 'Load more'}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
