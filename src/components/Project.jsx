import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import P1I1 from '../assets/P1I1.jpeg';
import P1I2 from '../assets/P1I2.jpeg';
import P1I3 from '../assets/P1I3.jpeg';
import P2I1 from '../assets/P2I1.png';
import P2I4 from '../assets/P2I4.png';
import P2I5 from '../assets/P2I5.png';
import P2I6 from '../assets/P2I6.png';
import P3I1 from '../assets/P3I1.png';
import P3I2 from '../assets/P3I2.png';
import P3I3 from '../assets/P3I3.png';
import P3I4 from '../assets/P3I4.png';



const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Chat Application",
      category: "Website",
      images: [P1I1, P1I2, P1I3],
      time: "June 2023",
    },
    {
      id: 2,
      title: "Role Based Authorization using JWT",
      category: "Authentication",
      images: [P2I1, P2I4, P2I5, P2I6],
      time: "July 2023",
    },
    {
      id: 3,
      title: "Email ID Verification",
      category: "Authentication",
      images: [P3I1, P3I2, P3I3,P3I4],
      time: "July 2023",
    },
    
  ];

  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleLoadMore = () => {
    setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 4);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true,
  };

  return (
    <section className="py-10 bg-white rounded-md" id="work" data-section="work">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gray-500">My Work</span>
          <h2 className="text-3xl text-black font-bold mt-2">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, visibleProjects).map(project => (
            <div key={project.id} className="relative bg-white p-4 rounded-lg shadow-lg">
              <Slider {...sliderSettings}>
                {project.images.map((image, index) => (
                  <div key={index} className="h-64">
                    <img src={image} alt={`${project.title} ${index + 1}`} className="h-full w-full object-cover rounded-lg" />
                  </div>
                ))}
              </Slider>
              <div>
                <h3 className="text-xl text-black font-semibold mt-4">{project.title}</h3>
                <span className="block text-gray-500">{project.category}</span>
                <span className="block text-gray-400 text-sm mt-1">{project.time}</span>
                <div className="mt-4">
                  <Link to={`/project/${project.id}`} className="text-blue-500 hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="btn btn-primary text-white bg-blue-500 py-2 px-4 rounded-lg"
            >
              Load more <i className="icon-reload"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
