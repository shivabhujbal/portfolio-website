import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from 'react-router-dom';
import './Sidebar.css';
import P1I1 from '../assets/P1I1.jpeg';
import P1I2 from '../assets/P1I2.jpeg';
import P1I3 from '../assets/P1I3.jpeg';
import P1I4 from '../assets/P1I4.jpeg';
import P1I5 from '../assets/P1I5.jpeg';
import P2I1 from '../assets/P2I1.png';
import P2I2 from '../assets/P2I2.png';
import P2I3 from '../assets/P2I3.png';
import P2I4 from '../assets/P2I4.png';
import P2I5 from '../assets/P2I5.png';
import P2I6 from '../assets/P2I6.png';
import P2I7 from '../assets/P2I7.png';
import P3I1 from '../assets/P3I1.png';
import P3I2 from '../assets/P3I2.png';
import P3I3 from '../assets/P3I3.png';
import P3I4 from '../assets/P3I4.png';
import { FaHome } from 'react-icons/fa';

const CustomPrevArrow = ({ onClick }) => (
    <button className="slick-prev" onClick={onClick}>
        <span className="text-black text-2xl">&lt;</span>
    </button>
);

const CustomNextArrow = ({ onClick }) => (
    <button className="slick-next" onClick={onClick}>
        <span className="text-black text-2xl">&gt;</span>
    </button>
);

// data source
const projectsData = {
    '1': {
        title: 'Chat Application',
        date: 'DEC 2023',
        technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'JDBC'],
        features: [
            'Executed role-based access control, allowing admins and users to manage, create, and update groups with 99% efficiency.',
            'Ensured application reliability and quality through rigorous unit testing with JUnit and API testing with Postman, reducing bugs and enhancing overall stability by 40%.',
            'Utilized Java frameworks such as Spring Boot, Spring Data JPA, Hibernate, and JDBC for streamlined backend development, resulting in a 30% reduction in development time.',
            'Administered database indexing and query optimization, resulting in a 50% improvement in data retrieval speeds.',
        ],
        sourceCodeLink: 'https://github.com/shivabhujbal/Company-Social-Group.git',
        images: [P1I1, P1I2, P1I3, P1I4, P1I5],
    },
    '2': {
        title: 'Role Based Authorization using JWT',
        date: 'JULY 2024',
        technologies: ['Java 17', 'Spring Boot', 'JWT (JSON Web Tokens)', 'Spring Security','React'],
        tags: ["Frontend Development", "Backend Development", "Password Encoding", "User Authentication", "Dashboard Design", "Role Management", "Error Handling and Debugging", "Data Security"],
        features: [
            "Researched and implemented Spring Security and JWT tokens with Spring Boot and Java 17 to enhance application security, focusing on authorization and role management.",
            "Addressed and resolved various development errors to ensure robust functionality.",
            "Implemented password encoding to protect sensitive data and improve overall security.",
            "Developed the frontend using React and integrated it with a backend system built with Spring Boot.",
            "Created user authentication features, including login and registration, along with separate dashboards for users and administrators.",
            "Enabled administrators to view all users and their roles.",
            "Currently enhancing the application to track and store user login and logout times for better monitoring and analysis."
        ],
        sourceCodeLink: 'https://github.com/shivabhujbal/user-authorization-backend.git',
        images: [
            P2I5,P2I6,P2I7,P2I1,P2I2,P2I3,P2I4,
        ],
    },
    '3': {
    title: 'Email ID Verification using EmailJS and React',
    date: 'AUGUST 2024',
    technologies: ['React', 'EmailJS', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    tags: ["Frontend Development", "Email Verification", "Form Validation", "API Integration", "User Notifications", "Error Handling", "Dynamic Components"],
    features: [
        "Integrated EmailJS with React to send email verification links without a backend server.",
        "Designed and implemented a user-friendly email verification form with real-time validation.",
        "Used environment variables to securely store EmailJS credentials for improved security.",
        "Developed error handling mechanisms to manage API call failures effectively.",
        "Built a responsive interface using Bootstrap, ensuring seamless usability across devices.",
        "Sent dynamic email templates containing verification links to ensure secure email verification.",
        "Implemented visual feedback for users, such as success or failure notifications, to enhance user experience."
    ],
    sourceCodeLink: 'https://github.com/shivabhujbal/email-otp-verification-react',
    images: [
        P3I1,P3I2,P3I3,P3I4
    ],
},

};

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const projectDetails = projectsData[id];
        setProject(projectDetails);
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    // Slider settings
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

  

    return (
        <div className="relative">
    <button 
        onClick={() => navigate('/')} 
        className="fixed top-4 left-4 px-3 py-3 bg-black text-white "
    >
            <FaHome></FaHome>

    </button>
    <div className="container mx-auto p-8 bg-gray-50 rounded-xl shadow-lg">
    <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{project.title}</h1>
        <p className="text-lg text-gray-600">{project.date}</p>
    </header>

    <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Technologies Used</h2>
        <div className="flex flex-wrap gap-4 justify-center">
            {project.technologies && project.technologies.length > 0 ? (
                project.technologies.map((tech, index) => (
                    <span key={index} className="bg-indigo-500 text-white font-medium rounded-full px-4 py-2 text-sm">
                        {tech}
                    </span>
                ))
            ) : (
                <p className="text-gray-600">No technologies listed.</p>
            )}
        </div>
    </section>

    <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-10">
        <h2 className="text-sm font-semibold text-gray-800 mb-6">Tags</h2>
        <div>
            {project.tags && project.tags.length > 0 ? (
                project.tags.map((tag, index) => (
                    <span key={index} className="inline-block px-3 py-1 my-1 m-1 bg-gray-200 rounded-md text-sm text-gray-800 border border-gray-300 hover:bg-gray-300 transition-colors duration-300">
                        {tag}
                    </span>
                ))
            ) : (
                <p className="text-gray-600">No tags available.</p>
            )}
        </div>
    </section>

    <section className="bg-white p-8 rounded-lg shadow-lg border border-gray-300 mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-2">
            Steps & Features
        </h2>
        {project.features && project.features.length > 0 ? (
            <ul className="list-disc text-gray-800 space-y-4 pl-6">
                {project.features.map((feature, index) => (
                    <li key={index} className="text-lg flex items-start">
                        <span className="mr-2 text-indigo-600">•</span>
                        {feature}
                    </li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-600">No features available.</p>
        )}
    </section>

    <section className="bg-white p-8 rounded-xl shadow-md border border-gray-200 mb-10">
        <span className="text-lg font-semibold text-gray-900">Source Code (Github) :</span>
        <a
            href={project.sourceCodeLink}
            className="text-indigo-600 underline ml-2"
            target="_blank"
            rel="noopener noreferrer"
        >
            Click here
        </a>
    </section>

    <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Project Images</h2>
        {project.images && project.images.length > 0 ? (
            <Slider {...settings} className="rounded-xl m-5">
                {project.images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center h-full">
                        <img
                            src={image}
                            alt={`Project screenshot ${index + 1}`}
                            className="w-full m-5 h-full object-cover rounded-l transition-transform duration-300 transform"
                        />
                    </div>
                ))}
            </Slider>
        ) : (
            <p className="text-gray-600">No images available.</p>
        )}
    </section>
</div>

      </div>
    );
};

export default ProjectDetails;
