import React from 'react';

export default function Hero() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 pt-16 pb-24">
      <div className="max-w-2xl space-y-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-600">
          Portfolio
        </span>
        <h1 className="text-4xl sm:text-5xl font-light text-slate-900 tracking-tight leading-tight">
           Software Developer
        </h1>
        <p className="text-lg text-slate-600 font-light leading-relaxed">
          I design and build clean, functional digital experiences. Currently focusing on scalable system design, web performance, or user research.
        </p>
        <div className="pt-4 flex items-center space-x-4">
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-slate-900 text-slate-50 text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
          >
            Get in touch
          </a>
          <a 
            href="src\data\Kuldeep patidar resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-100 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}