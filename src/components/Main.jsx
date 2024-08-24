import React from 'react';
import { FaDownload, FaCode, FaBullhorn, FaGlobe, FaDatabase, FaPhone, FaPlus, FaMinus, FaBriefcase } from 'react-icons/fa';
import { LiaDocker } from "react-icons/lia";
import Sidebar from './Sidebar';
import sidebarImage from '../assets/sidebarimage.jpg';
import './style.css';
const Main = () => {
  return (
    <div className="flex mt-0">
      {/* Sidebar */}
      <div className='w-64 h-screen sticky top-0 bg-gray-200 text-white'>
      <Sidebar />
      </div>
      

      {/* Main Content */}
      <div className="flex-1 ">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
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

        {/* About Section */}
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
  <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
    <FaCode className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-black ">Software</h3>
  </div>
  <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
    <FaGlobe className="text-3xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-black">Web Design</h3>
  </div>
  <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
    <FaDatabase className="text-3xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-black">Database</h3>
  </div>
  <div className="text-center bg-red-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
    <LiaDocker className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold text-black">Deployment</h3>
  </div>
</div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-gray-600">My Specialty</span>
              <h2 className="text-3xl text-gray-600 font-bold mt-4">My Skills</h2>
            </div>
            <p className="text-center text-gray-600 mb-8 ">
            "Throughout my journey, I've developed a strong skill set through practice, academic work, projects, internships, and self-learning. These experiences have built my foundation in full-stack development, enabling me to solve complex challenges and deliver quality solutions."</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-fadeInLeft">
                <h3 className="text-xl text-black font-semibold mb-2">Java 17+</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-500 h-2.5 rounded-full animate-fillUp" style={{ width: '80%' }}></div>
                  </div>
                  <span className="absolute right-0 text-sm font-medium text-gray-700">80%</span>
                </div>
              </div>
              <div className="animate-fadeInRight">
                <h3 className="text-xl text-black font-semibold mb-2">Spring Boot 3+</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-green-500 h-2.5 rounded-full animate-fillUp" style={{ width: '80%' }}></div>
                  </div>
                  <span className="absolute right-0 text-sm font-medium text-gray-700">80%</span>
                </div>
              </div>
              <div className="animate-fadeInLeft">
                <h3 className="text-xl text-black font-semibold mb-2">HTML5 & CSS3</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-red-500 h-2.5 rounded-full animate-fillUp" style={{ width: '90%' }}></div>
                  </div>
                  <span className="absolute right-0 text-sm font-medium text-gray-700">90%</span>
                </div>
              </div>
              <div className="animate-fadeInRight">
                <h3 className="text-xl text-black font-semibold mb-2">Javascript</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-yellow-500 h-2.5 rounded-full animate-fillUp" style={{ width: '85%' }}></div>
                  </div>
                  <span className="absolute right-0 text-sm font-medium text-gray-700">85%</span>
                </div>
              </div>
              <div className="animate-fadeInLeft">
                <h3 className="text-xl text-black font-semibold mb-2">React</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-purple-500 h-2.5 rounded-full animate-fillUp" style={{ width: '85%' }}></div>
                  </div>
                  <span className="absolute right-0 text-sm font-medium text-gray-700">85%</span>
                </div>
              </div>
              <div className="animate-fadeInRight">
                <h3 className="text-xl text-black font-semibold mb-2">MySql</h3>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-orange-500 h-2.5 rounded-full animate-fillUp" style={{ width: '90%' }}></div>
                  </div>
                  <span className="absolute right-0 text-sm font-medium text-gray-700">90%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

   {/* Education Section */}
<section id="education" className="py-16">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-gray-600">Education</span>
      <h2 className="text-3xl text-black font-bold mt-4">Education</h2>
    </div>
    <div className="accordion">
      <div className="collapse-group">
        {/* First Item */}
        <div className="collapse-item mb-3">
          <input type="checkbox" id="collapseOne" className="hidden peer" />
          <label htmlFor="collapseOne" className="flex items-center text-black justify-between py-3 px-4 bg-gray-200 rounded cursor-pointer">
            <span>Master Degree Graphic Design</span>
            <div className="flex items-center">
              <FaPlus className="w-4 h-6 text-black  peer-checked:transition-transform duration-300" />
            </div>
          </label>
          <div className="text-black collapse-content px-4 py-2 bg-white hidden peer-checked:block">
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>

        {/* Repeat the structure for each additional item */}
        <div className="collapse-item mb-3">
          <input type="checkbox" id="collapseTwo" className="hidden peer" />
          <label htmlFor="collapseTwo" className="flex text-black items-center justify-between py-3 px-4 bg-gray-200 rounded cursor-pointer">
            <span>Bachelor Degree of Computer Science</span>
            <div className="flex items-center">
              <FaPlus className="w-4 h-6 text-black  peer-checked:transition-transform duration-300" />
            </div>
          </label>
          <div className="collapse-content text-black px-4 py-2 bg-white hidden peer-checked:block">
            <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <ul className="list-disc pl-5">
              <li>Separated they live in Bookmarksgrove right</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ul>
          </div>
        </div>


        <div className="collapse-item mb-3">
          <input type="checkbox" id="collapseThree" className="hidden peer" />
          <label htmlFor="collapseThree" className="flex text-black items-center justify-between py-3 px-4 bg-gray-200 rounded cursor-pointer">
            <span>Bachelor Degree of Computer Science</span>
            <div className="flex items-center">
              <FaPlus className="w-4 h-6 text-black  peer-checked:transition-transform duration-300" />
            </div>
          </label>
          <div className="collapse-content text-black px-4 py-2 bg-white hidden peer-checked:block">
            <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <ul className="list-disc pl-5">
              <li>Separated they live in Bookmarksgrove right</li>
              <li>Separated they live in Bookmarksgrove right</li>
            </ul>
          </div>
        </div>
        

        {/* Add more items as needed */}
      </div>
    </div>
  </div>
</section>





{/* Experience */}
<section className="py-16 bg-gray-100" data-section="experience">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-sm font-semibold text-gray-500">Experience</span>
      <h2 className="text-3xl font-bold mt-2 text-black">Work Experience</h2>
    </div>
    <div className="relative">
      <div className="border-l-2 border-gray-800">
        <article className="mb-8 flex items-start">
        <div className="w-8 h-8  rounded-full text-black flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
  <FaBriefcase className="w-5 h-5" />
       </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-semibold text-black">
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Full Stack Developer</a> 
              <span className="text-gray-500">2017-2018</span>
            </h3>
            <p className="mt-2 text-black transition-opacity duration-300 hover:opacity-80">
              Tolerablycc earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial Three promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.
            </p>
          </div>
        </article>
        <article className="mb-8 flex items-start">
        <div className="w-8 h-8  rounded-full text-black flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
  <FaBriefcase className="w-5 h-5" />
       </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-semibold text-black">
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Full Stack Developer</a> 
              <span className="text-gray-500">2017-2018</span>
            </h3>
            <p className="mt-2 text-black transition-opacity duration-300 hover:opacity-80">
              Tolerablycc earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial Three promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.
            </p>
          </div>
        </article>
        <article className="mb-8 flex items-start">
        <div className="w-8 h-8  rounded-full text-black flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
  <FaBriefcase className="w-5 h-5" />
       </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-semibold text-black">
              <a href="#" className="hover:text-blue-500 transition-colors duration-300">Full Stack Developer</a> 
              <span className="text-gray-500">2017-2018</span>
            </h3>
            <p className="mt-2 text-black transition-opacity duration-300 hover:opacity-80">
              Tolerablycc earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial Three promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.
            </p>
          </div>
        </article>


        {/* <!-- Repeat for other timeline entries --> */}
      </div>
    </div>
  </div>
</section>



{/* Projects */}
<section className="py-16" data-section="work">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-sm font-semibold text-gray-500">My Work</span>
      <h2 className="text-3xl font-bold mt-2">Recent Work</h2>
    </div>
    <div className="flex justify-center mb-8">
      <p className="space-x-4">
        <span><a href="#" className="text-blue-500">Graphic Design</a></span>
        <span><a href="#" className="text-gray-600">Web Design</a></span>
        <span><a href="#" className="text-gray-600">Software</a></span>
        <span><a href="#" className="text-gray-600">Apps</a></span>
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('images/img-1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-6 text-white">
          <h3 className="text-xl font-semibold"><a href="work.html">Work 01</a></h3>
          <span>Website</span>
          <p className="flex space-x-4 mt-2">
            <a href="#" className="text-white"><i className="icon-share3"></i></a>
            <a href="#" className="text-white"><i className="icon-eye"></i> 100</a>
            <a href="#" className="text-white"><i className="icon-heart"></i> 49</a>
          </p>
        </div>
      </div>
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('images/img-1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-6 text-white">
          <h3 className="text-xl font-semibold"><a href="work.html">Work 01</a></h3>
          <span>Website</span>
          <p className="flex space-x-4 mt-2">
            <a href="#" className="text-white"><i className="icon-share3"></i></a>
            <a href="#" className="text-white"><i className="icon-eye"></i> 100</a>
            <a href="#" className="text-white"><i className="icon-heart"></i> 49</a>
          </p>
        </div>
      </div>
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('images/img-1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-6 text-white">
          <h3 className="text-xl font-semibold"><a href="work.html">Work 01</a></h3>
          <span>Website</span>
          <p className="flex space-x-4 mt-2">
            <a href="#" className="text-white"><i className="icon-share3"></i></a>
            <a href="#" className="text-white"><i className="icon-eye"></i> 100</a>
            <a href="#" className="text-white"><i className="icon-heart"></i> 49</a>
          </p>
        </div>
      </div>
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('images/img-1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative p-6 text-white">
          <h3 className="text-xl font-semibold"><a href="work.html">Work 01</a></h3>
          <span>Website</span>
          <p className="flex space-x-4 mt-2">
            <a href="#" className="text-white"><i className="icon-share3"></i></a>
            <a href="#" className="text-white"><i className="icon-eye"></i> 100</a>
            <a href="#" className="text-white"><i className="icon-heart"></i> 49</a>
          </p>
        </div>
      </div>
      {/* <!-- Repeat for other projects --> */}
    </div>
    <div className="text-center mt-8">
      <a href="#" className="btn btn-primary text-white bg-blue-500 py-2 px-4 rounded-lg">Load more <i className="icon-reload"></i></a>
    </div>
  </div>
</section>


{/* Blog */}
<section className="bg-gray-100 py-16" data-section="blog">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-sm font-semibold text-gray-600">Read</span>
      <h2 className="text-3xl font-bold text-gray-800">Recent Blog</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="animate__animated animate__fadeInLeft">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <a href="blog.html" className="block">
            <img src="images/blog-1.jpg" className="w-full h-48 object-cover" alt="Renovating National Gallery"/>
          </a>
          <div className="p-4">
            <span className="block text-sm text-gray-500 mb-2">
              <small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3"></i> 4</small>
            </span>
            <h3 className="text-lg font-semibold text-gray-800">
              <a href="blog.html">Renovating National Gallery</a>
            </h3>
            <p className="text-gray-600 mt-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <a href="blog.html" className="block">
            <img src="images/blog-2.jpg" className="w-full h-48 object-cover" alt="Wordpress for a Beginner"/>
          </a>
          <div className="p-4">
            <span className="block text-sm text-gray-500 mb-2">
              <small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i className="icon-bubble3"></i> 4</small>
            </span>
            <h3 className="text-lg font-semibold text-gray-800">
              <a href="blog.html">Wordpress for a Beginner</a>
            </h3>
            <p className="text-gray-600 mt-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInLeft">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <a href="blog.html" className="block">
            <img src="images/blog-3.jpg" className="w-full h-48 object-cover" alt="Make website from scratch"/>
          </a>
          <div className="p-4">
            <span className="block text-sm text-gray-500 mb-2">
              <small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i className="icon-bubble3"></i> 4</small>
            </span>
            <h3 className="text-lg font-semibold text-gray-800">
              <a href="blog.html">Make website from scratch</a>
            </h3>
            <p className="text-gray-600 mt-2">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
        Load more <i className="icon-reload"></i>
      </a>
    </div>
  </div>
</section>
{/* Contact */}
<section className="bg-white py-16" data-section="contact">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="text-sm font-semibold text-gray-600">Get in Touch</span>
      <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-5/12 lg:w-5/12 mb-8 md:mb-0">
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <i className="icon-globe-outline text-2xl text-gray-600 mr-4"></i>
            <p><a href="mailto:info@domain.com" className="text-blue-500">info@domain.com</a></p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <i className="icon-map text-2xl text-gray-600 mr-4"></i>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <i className="icon-phone text-2xl text-gray-600 mr-4"></i>
            <p><a href="tel:+1234567890" className="text-blue-500">+123 456 7890</a></p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-7/12 lg:w-7/12">
        <form>
          <div className="mb-4">
            <input type="text" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Name"/>
          </div>
          <div className="mb-4">
            <input type="text" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Email"/>
          </div>
          <div className="mb-4">
            <input type="text" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Subject"/>
          </div>
          <div className="mb-4">
            <textarea className="w-full border border-gray-300 p-3 rounded-lg" rows="7" placeholder="Message"></textarea>
          </div>
          <div>
            <input type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer" value="Send Message"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>






        




        




      </div>
    </div>
  );
};

export default Main;
