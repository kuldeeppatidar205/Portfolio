import React, { useState } from 'react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode((prev) => !prev);
    // Dark mode toggle implementation hook
  };

  return (
    <nav className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center text-sm font-medium text-slate-500">
      <a 
        href="#" 
        className="text-slate-900 text-3xl font-semibold tracking-tight hover:opacity-75 transition-opacity"
      >
        Kuldeep Patidar
      </a>
      <div className="space-x-6 flex items-center">
        <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
        <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
      </div>
    </nav>
  );
}