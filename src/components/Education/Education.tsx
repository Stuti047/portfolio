import React from 'react';
import { educationData } from '../../data/education';
import { BunnyMascot } from '../Mascots/DoodleCreatures';
import { Calendar, Award, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#F7F7F7] border-t border-[#E5E5E5] overflow-hidden">
      {/* Background minimal grid */}
      <div className="absolute inset-0 bg-minimal-grid opacity-60 pointer-events-none" />

      {/* Floating doodle mascot */}
      <div className="absolute top-16 right-8 hidden md:block opacity-80">
        <BunnyMascot size={64} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>AUTHENTIC INSTITUTIONAL GALLERY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            EDUCATION <span className="doodle-underline-ink">GALLERY.</span>
          </h2>
          <p className="font-handwritten text-lg sm:text-xl text-[#555555] mt-3">
            ~ Academic foundation, milestones & institutional memories ~
          </p>
        </div>

        {/* 3 Visually Consistent Cards */}
        <div className="space-y-10">
          {educationData.map((item, index) => {
            const hasImage = Boolean(item.image);

            return (
              <div
                key={item.institution}
                className="manga-card rounded-2xl p-4 sm:p-8 bg-[#FFFFFF] transition-all duration-200"
              >
                {hasImage ? (
                  /* Photograph + Details Layout (Desktop: Beside details; Mobile: Stacked above) */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Photograph Container */}
                    <div className="md:col-span-5 w-full">
                      <div className="relative rounded-xl border border-[#111111] overflow-hidden bg-[#FAFAFA] shadow-[3px_3px_0px_0px_#111111] group">
                        {/* Photo Header Bar */}
                        <div className="px-3.5 py-1.5 bg-[#FFFFFF] border-b border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                          <span className="font-bold text-[#111111]">
                            FIG. 0{index + 1}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-[#888888]">
                            Authentic Record
                          </span>
                        </div>

                        {/* Image with preserved aspect ratio, rectangular thin border, grayscale hover */}
                        <div className="w-full overflow-hidden bg-[#F2F2F2]">
                          <img
                            src={item.image}
                            alt={item.imageAlt || item.institution}
                            className="w-full h-auto max-h-72 object-cover grayscale hover:grayscale-0 transition-all duration-300"
                            loading="lazy"
                          />
                        </div>

                        {/* Photo Caption */}
                        {item.caption && (
                          <div className="px-3.5 py-2 bg-[#FFFFFF] border-t border-[#E5E5E5] flex items-center justify-between">
                            <span className="font-handwritten text-xs text-[#111111]">
                              "{item.caption}"
                            </span>
                            <span className="font-mono text-[10px] text-[#888888] uppercase">
                              {item.institution.split(',')[0]}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Educational Details Column */}
                    <div className="md:col-span-7 flex flex-col justify-center">
                      {/* Top Card Title / Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-black tracking-widest text-[#111111] bg-[#F7F7F7] border border-[#111111] px-2.5 py-0.5 rounded">
                          {item.cardTitle}
                        </span>
                        <span className="font-mono text-xs text-[#777777] flex items-center gap-1">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                      </div>

                      {/* Institution Name */}
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111] mb-1">
                        {item.institution}
                      </h3>

                      {/* Degree / Certificate */}
                      <div className="font-mono text-xs sm:text-sm text-[#555555] font-semibold mb-3">
                        {item.degree}
                      </div>

                      {/* Score / Grade if present */}
                      {item.score && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F7F7] border border-[#111111] rounded-lg font-mono text-xs text-[#111111] font-bold mb-4 w-fit shadow-sm">
                          <Award size={13} />
                          <span>Score: {item.score}</span>
                        </div>
                      )}

                      {/* Educational Highlights */}
                      <ul className="space-y-2 mt-1">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="text-xs sm:text-sm text-[#444444] flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-[#111111] mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* Clean Text-Only Editorial Card for Class XII (No image & No placeholder) */
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Institutional Column */}
                    <div className="md:col-span-5 flex flex-col justify-start">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-black tracking-widest text-[#111111] bg-[#F7F7F7] border border-[#111111] px-2.5 py-0.5 rounded">
                          {item.cardTitle}
                        </span>
                        <span className="font-mono text-xs text-[#777777] flex items-center gap-1">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111111] mb-1">
                        {item.institution}
                      </h3>

                      <div className="font-mono text-xs sm:text-sm text-[#555555] font-semibold mb-3">
                        {item.degree}
                      </div>

                      {item.score && (
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F7F7] border border-[#111111] rounded-lg font-mono text-xs text-[#111111] font-bold mb-3 w-fit shadow-sm">
                          <Award size={13} />
                          <span>Score: {item.score}</span>
                        </div>
                      )}

                      <div className="mt-2 p-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg">
                        <p className="font-handwritten text-xs text-[#555555]">
                          ~ State Higher Secondary Board (MPBSE) ~ Focus in Physics, Chemistry & Mathematics
                        </p>
                      </div>
                    </div>

                    {/* Highlights Column */}
                    <div className="md:col-span-7 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#E5E5E5] pt-4 md:pt-0 md:pl-8">
                      <div className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span>Curriculum & Academic Focus</span>
                      </div>
                      <ul className="space-y-3">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="text-xs sm:text-sm text-[#444444] flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="text-[#111111] mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
