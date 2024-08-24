import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref: skillsRef, inView } = useInView({
    // triggerOnce: true, // Only trigger animation once
    threshold: 0.3, // Trigger when 10% of the section is visible
  });

  return (
    <section id="skills" className="py-16" ref={skillsRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gray-600">My Specialty</span>
          <h2 className="text-3xl text-gray-600 font-bold mt-4">My Skills</h2>
        </div>
        <p className="text-center text-gray-600 mb-8">
          "Throughout my journey, I've developed a strong skill set through practice, academic work, projects, internships, and self-learning. These experiences have built my foundation in full-stack development, enabling me to solve complex challenges and deliver quality solutions."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={`animate-fadeIn ${inView ? 'animate-fillUp' : ''}`}>
              <h3 className="text-xl text-black font-semibold mb-2">{skill.name}</h3>
              <div className="relative">
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full ${skill.color} ${inView ? 'animate-fillUp' : ''}`}
                    style={{ width: skill.percentage }}
                  ></div>
                </div>
                <span className="absolute right-0 text-sm font-medium text-gray-700">{skill.percentage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const skills = [
  { name: 'Java 17+', percentage: '80%', color: 'bg-blue-500' },
  { name: 'Spring Boot 3+', percentage: '80%', color: 'bg-green-500' },
  { name: 'HTML5 & CSS3', percentage: '90%', color: 'bg-red-500' },
  { name: 'Javascript', percentage: '85%', color: 'bg-yellow-500' },
  { name: 'React', percentage: '85%', color: 'bg-purple-500' },
  { name: 'MySql', percentage: '90%', color: 'bg-orange-500' },
];

export default Skills;
