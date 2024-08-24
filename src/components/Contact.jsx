import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email:'shivsambhbhujbal.skncoe.mech@gmail.com',
      email: formData.email,
      name:formData.name ,
      subject:formData.subject ,
      message:formData.message ,
    };

    // emailjs.send('service_wz8haih', 'template_hwv4pfg', templateParams, '2fGAvA76dPLqt88tt')
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((response) => {
        console.log('Success:', response);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Error:', error);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section className="bg-white py-16" data-section="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-gray-600">Get in Touch</span>
          <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        </div>
        <div className="flex flex-wrap">
          {/* Contact Details */}
          <div className="w-full md:w-5/12 lg:w-5/12 mb-8 md:mb-0">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <i className="icon-user text-2xl text-gray-600 mr-4"></i>
                <p className="text-black">Name: Shivsambh Muktaram Bhujbal</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <i className="icon-globe-outline text-2xl text-gray-600 mr-4"></i>
                <p>
                  <a href="mailto:shivsambhbhujbal.skncoe.mech@gmail.com" className="text-black">
                    shivsambhbhujbal.skncoe.mech@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <i className="icon-phone text-2xl text-gray-600 mr-4"></i>
                <p>
                  <a href="tel:+919960416848" className="text-black">
                    +91 9960416848
                  </a>
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <i className="icon-map text-2xl text-gray-600 mr-4"></i>
                <p className="text-black">Current Address: Nhare, Pune 411041</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <i className="icon-map text-2xl text-gray-600 mr-4"></i>
                <p className="text-black">Permanent Address: Harangul Kh., Latur, 413531</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-7/12 lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg text-black focus:border-blue-500 focus:outline-none bg-white" 
                  placeholder="Name" 
                  aria-label="Name" 
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg text-black focus:border-blue-500 focus:outline-none bg-white" 
                  placeholder="Email" 
                  aria-label="Email" 
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg text-black focus:border-blue-500 focus:outline-none bg-white" 
                  placeholder="Subject" 
                  aria-label="Subject" 
                  required
                />
              </div>
              <div className="mb-4">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg text-black focus:border-blue-500 focus:outline-none bg-white" 
                  rows="7" 
                  placeholder="Message" 
                  aria-label="Message" 
                  required
                ></textarea>
              </div>
              <div>
                <input 
                  type="submit" 
                  className="bg-yellow-400 border border-gray-300 text-black py-2 px-6 rounded-lg hover:bg-blue-400 transition duration-300 cursor-pointer focus:ring-4 focus:ring-blue-300" 
                  value="Send Message" 
                  aria-label="Send Message"
                />
              </div>
              {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
