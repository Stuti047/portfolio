import React, { useState } from 'react';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { soundFx } from '../../utils/sound';
import { BunnyMascot } from '../Mascots/DoodleCreatures';
import { Layers, ArrowUpRight, Check, X, ShieldAlert, Cpu } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    soundFx.playPop();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    soundFx.playClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#F7F7F7] border-t border-[#E5E5E5] overflow-hidden">
      <div className="absolute inset-0 bg-minimal-grid opacity-50 pointer-events-none" />
      <div className="absolute bottom-10 right-10 hidden md:block opacity-80">
        <BunnyMascot size={64} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>CATALOG // WORKS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            THINGS I'VE <span className="doodle-underline-ink">BUILT.</span>
          </h2>
          <p className="font-handwritten text-lg sm:text-xl text-[#555555] mt-3">
            ~ Systems architecture, applied machine learning & research prototypes ~
          </p>
        </div>

        {/* 2x2 Minimal Manga Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => {
            return (
              <div
                key={project.id}
                className="manga-card rounded-2xl p-5 sm:p-8 flex flex-col justify-between group relative overflow-hidden bg-[#FFFFFF]"
              >
                {/* Background Number Watermark */}
                <div className="absolute top-2 right-4 font-mono font-black text-6xl text-[#111111]/[0.04] select-none pointer-events-none">
                  0{index + 1}
                </div>

                <div>
                  {/* Category & Episode Header */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#111111] text-[#FFFFFF] font-bold uppercase tracking-wider">
                      {project.episode}
                    </span>

                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#F7F7F7] text-[#555555] border border-[#E5E5E5]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111] mb-1 group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-[#555555] mb-4">
                    {project.subtitle}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlight Stats if present */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {project.stats.map((s, idx) => (
                        <div key={idx} className="bg-[#FAFAFA] p-2 rounded-lg border border-[#E5E5E5] text-center">
                          <div className="font-mono text-xs font-bold text-[#111111]">{s.value}</div>
                          <div className="text-[10px] text-[#777777] truncate">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#F7F7F7] text-[11px] font-mono text-[#333333] border border-[#E5E5E5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#111111] hover:underline"
                  >
                    <span>VIEW PROJECT CASE STUDY</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-colors"
                        title="View on GitHub"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Project Dossier Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="editorial-window rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 relative bg-[#FFFFFF]">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#111111] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-all"
              aria-label="Close modal"
            >
              <X size={15} />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-[#111111] text-[#FFFFFF] font-bold inline-block mb-2">
                {selectedProject.episode} // PROJECT DOSSIER
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#111111]">
                {selectedProject.title}
              </h3>
              <p className="font-mono text-xs text-[#555555] mt-1">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Problem & Solution Storyboard */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5]">
                <h4 className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5 mb-2">
                  <ShieldAlert size={14} />
                  <span>PROBLEM CONTEXT</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#111111]">
                <h4 className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5 mb-2">
                  <Cpu size={14} />
                  <span>ENGINEERED ARCHITECTURE & WORKFLOW</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#333333] leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Technical Architecture */}
            <div className="mb-6">
              <h4 className="font-mono text-xs font-bold text-[#111111] flex items-center gap-1.5 mb-3">
                <Layers size={14} />
                <span>SYSTEM SPECIFICATIONS</span>
              </h4>
              <ul className="space-y-2">
                {selectedProject.architecture.map((arch, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#555555] flex items-start gap-2 bg-[#F7F7F7] p-2.5 rounded-lg border border-[#E5E5E5]">
                    <Check size={13} className="text-[#111111] mt-0.5 shrink-0" />
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="font-mono text-xs font-bold text-[#111111] mb-3">
                <span>KEY CAPABILITIES</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.keyFeatures.map((feat, i) => (
                  <li key={i} className="text-xs text-[#333333] bg-[#FAFAFA] p-2.5 rounded-lg border border-[#E5E5E5] flex items-start gap-2">
                    <span className="font-bold text-[#111111]">✦</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E5E5E5] items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded bg-[#F7F7F7] font-mono text-xs text-[#111111] border border-[#E5E5E5]">
                    {tech}
                  </span>
                ))}
              </div>

              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111111] text-[#FFFFFF] font-mono text-xs font-semibold hover:bg-[#333333] transition-colors"
                >
                  <span>Open GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
