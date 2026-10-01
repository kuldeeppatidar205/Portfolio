import React from 'react';

export default function ExperienceCard({ period, role, company, description, techStack }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-6">
      <div className="text-sm text-slate-600 font-mono">{period}</div>
      <div className="md:col-span-3 space-y-2">
        <h3 className="text-base font-semibold text-slate-900">
          {role} · <span className="font-normal text-slate-600">{company}</span>
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs px-2.5 py-1 bg-slate-200/60 text-slate-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}