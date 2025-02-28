// app/page.tsx

export default function Home() {
  return (
    <section className="text-center mt-16">
      <h2 className="text-4xl font-extrabold">Hi, I'm Shirin</h2>
      <p className="mt-4 text-lg text-gray-300">
        A passionate software developer specializing in React Native & AI-powered applications.
      </p>
      <div className="mt-6 flex justify-center space-x-4">
        <a href="/projects" className="px-6 py-3 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
          View Projects
        </a>
        <a href="/contact" className="px-6 py-3 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

-----------------

// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Syarif Ihya",
  description: "Created by Syarif Ihya",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <header className="w-full max-w-4xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shirin's Portfolio</h1>
          <nav className="space-x-6">
            <a href="/projects" className="hover:text-gray-400">Projects</a>
            <a href="/contact" className="hover:text-gray-400">Contact</a>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

-----------------

/* app/globals.css */

@import "tailwindcss";

@theme {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: Arial, Helvetica, sans-serif;
}

-----------------------

// app/projects/page.tsx

export default function Projects() {
    return (
        <section>
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="mt-4 text-gray-300">Here are some projects I've worked on.</p>
        {/* Tambahkan daftar proyek di sini */}
        </section>
    );
}
  
-------------------

// app/contact/page.tsx

export default function Contact() {
    return (
        <section className="text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="mt-4 text-gray-300">Feel free to reach out via email or social media.</p>
        <div className="mt-6">
            <a href="mailto:shirin@example.com" className="text-blue-400 hover:underline">shirin@example.com</a>
        </div>
        </section>
    );
}
