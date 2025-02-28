// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import "./globals.css";

const GeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const GeistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio Syarif Ihya | React Native & Next.js Developer",
  description: "Portfolio of Syarif Ihya, a developer specializing in React Native and Next.js applications",
  keywords: ["React Native", "Next.js", "Developer", "Portfolio", "Mobile Developer", "Web Developer"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-gray-900 text-white">
        <header className="w-full shadow-md bg-gray-800/50 sticky top-0 z-10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:from-blue-300 hover:to-purple-500 transition-all">
              Syarif Ihya
            </Link>
            <nav className="mt-4 md:mt-0 flex items-center space-x-6">
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link href="/projects" className="hover:text-blue-400 transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </nav>
          </div>
        </header>
        
        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
        
        <footer className="bg-gray-800 mt-16">
          <div className="max-w-6xl mx-auto p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold">Syarif Ihya</h3>
                <p className="text-gray-400 mt-2">React Native & Next.js Developer</p>
              </div>
              
              <div className="flex space-x-6">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
              © {new Date().getFullYear()} Syarif Ihya. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}