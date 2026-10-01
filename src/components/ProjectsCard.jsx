import React from 'react';

export default function ProjectCard({ year, title, description, techStack = [], link }) {
  return (
    <div className="group border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-all bg-white/50 flex flex-col justify-between">
      <div>
        <div className="text-xs text-slate-400 font-mono mb-2">{year}</div>
        <h3 className="text-lg font-medium text-slate-900 group-hover:text-slate-600 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">{description}</p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded font-medium border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <a
          href={link}
            target="_blank" 
            rel="noopener noreferrer"
          className="text-xs font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-600 inline-block"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}