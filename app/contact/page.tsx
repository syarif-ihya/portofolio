// app/contact/page.tsx

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out through any of the following channels.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaEnvelope className="w-5 h-5 text-blue-400 mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a href="mailto:youremail@example.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  youremail@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1 mr-4" />
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-gray-300">
                  Indonesia
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-3">Social Networks</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="https://instagram.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <section className="mb-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Find Me</h2>
          <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
            {/* Replace with actual map component or embed */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <p>Map embed would go here - use Google Maps, MapBox, or other map service</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-12">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-blue-400 mb-2">What services do you offer?</h3>
              <p className="text-gray-300">I specialize in web development, UI/UX design, and creating responsive web applications using React, Next.js, and other modern technologies.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-400 mb-2">What is your typical project timeline?</h3>
              <p className="text-gray-300">Project timelines vary depending on complexity and scope. A simple website might take 2-3 weeks, while more complex applications could take 1-3 months. I'll provide a detailed timeline during our initial consultation.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-400 mb-2">Do you offer maintenance after project completion?</h3>
              <p className="text-gray-300">Yes, I offer ongoing maintenance packages to ensure your website or application stays up-to-date and performs optimally. We can discuss maintenance options based on your specific needs.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-blue-400 mb-2">How do we get started on a project together?</h3>
              <p className="text-gray-300">Simply reach out through the contact form or via email. We'll schedule an initial consultation to discuss your project requirements, timeline, and budget. Once we're aligned, I'll provide a proposal and we can move forward from there.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Ready to start your next project?</h2>
        <p className="text-white max-w-2xl mx-auto mb-6">
          Let's collaborate to bring your ideas to life. I'm excited to hear about your vision and help you achieve your goals.
        </p>
        <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
          Get Started Today
        </button>
      </section>
    </div>
  );
}