// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center mt-8 md:mt-16">
        <div className="relative mx-auto h-32 w-32 md:h-40 md:w-40 mb-6 overflow-hidden rounded-full border-4 border-blue-500">
          <div className="bg-blue-500 h-full w-full flex items-center justify-center">
            <span className="text-4xl font-bold text-white">SI</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Syarif Ihya
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Passionate developer crafting engaging mobile experiences with React Native 
          and building innovative web applications with Next.js
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            View Projects
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-colors">
            Get in Touch
          </Link>
        </div>
        
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-gray-300 leading-relaxed">
            Hi there! I'm a developer with a passion for creating engaging mobile and web experiences 
            that combine functionality with intuitive design. My journey in technology started with
            a curiosity about how digital experiences can enhance our daily lives.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            I specialize in React Native for mobile development and Next.js for web applications,
            focusing on creating applications that are not only functional but also enjoyable to use.
            I'm particularly interested in gamification elements and AI-powered features that can make
            digital experiences more personalized and engaging.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mobile Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Mobile Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>React Native / Expo</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Mobile UI/UX Design</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Native Device Features</span>
              </li>
            </ul>
          </div>
          
          {/* Web Development */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Web Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Next.js</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>React</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Responsive Web Design</span>
              </li>
            </ul>
          </div>
          
          {/* UI/UX */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">UI/UX</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>User-Centered Design</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Interactive Prototyping</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Gamification Elements</span>
              </li>
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Other Technologies</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>JavaScript / TypeScript</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>HTML / CSS</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                <span>Version Control (Git)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Leveling App</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Leveling App</h3>
              <p className="text-gray-300 mb-4">Gamification app for personal development with quests and rewards</p>
              <div className="flex justify-between">
                <span className="text-blue-400 text-sm">React Native</span>
                <Link href="/projects#leveling-app" className="text-blue-400 hover:underline text-sm">View Details</Link>
              </div>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">LoreWeave</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">LoreWeave</h3>
              <p className="text-gray-300 mb-4">AI-powered interactive storytelling platform with branching narratives</p>
              <div className="flex justify-between">
                <span className="text-blue-400 text-sm">Next.js</span>
                <Link href="/projects#loreweave" className="text-blue-400 hover:underline text-sm">View Details</Link>
              </div>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div className="h-48 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">EchoVerse</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">EchoVerse</h3>
              <p className="text-gray-300 mb-4">Voice-based digital journal with AI sentiment analysis</p>
              <div className="flex justify-between">
                <span className="text-blue-400 text-sm">React Native</span>
                <Link href="/projects#echoverse" className="text-blue-400 hover:underline text-sm">View Details</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="px-6 py-3 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
            View All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}