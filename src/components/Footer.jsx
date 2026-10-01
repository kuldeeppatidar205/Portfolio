import React, { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emailAddress = "patidarkuldeep1984@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <footer id="contact" className="border-t border-slate-200/80 py-20 bg-slate-100/50">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="text-xl font-medium text-slate-900 mb-2">Let's connect</h2>
          <p className="text-sm text-slate-600">Open for opportunities, collaborations, or a casual chat.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-slate-600 items-center">
          <button 
            type="button"
            onClick={handleEmailClick}
            className="hover:text-slate-900 transition-colors cursor-pointer text-left focus:outline-none">
            Email
          </button>
          <a 
            href="https://github.com/kuldeeppatidar205" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/kuldeep-patidar-4ab9a2367" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-6 mt-16 text-xs text-slate-600">
        © {currentYear} Kuldeep Patidar. All rights reserved.
      </div>
    </footer>
  );
}