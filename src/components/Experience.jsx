import React from 'react';
import ExperienceCard from './ExperienceCard';
import { EXPERIENCES } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200/80 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-12">
          Experience
        </h2>
        <div className="space-y-12 max-w-3xl">
          {EXPERIENCES.map((item) => (
            <ExperienceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}