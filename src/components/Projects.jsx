import React from 'react';
import ProjectCard from './ProjectsCard';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200/80 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-600 mb-12">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}