import React, { useState } from 'react';
import { MiniRobotMascot, StarCreature } from '../Mascots/DoodleCreatures';
import { Calendar, Building2, BookOpen, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  // Mobile tap-to-color interaction state
  const [isColorActive, setIsColorActive] = useState<boolean>(false);

  return (
    <section id="research" className="py-24 relative bg-[#FFFFFF] border-t border-[#E5E5E5] overflow-hidden">
      {/* Anchor alias for #experience */}
      <span id="experience" className="absolute -top-24" />
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-minimal-grid opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>SUMMER INTERNSHIP</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            <span className="doodle-underline-ink">RESEARCH</span>
          </h2>
          <p className="font-handwritten text-lg sm:text-xl text-[#555555] mt-3">
            ~ Academic inquiry & practical applications in Cyber-Physical Systems ~
          </p>
        </div>

        {/* Minimal Editorial Research Card with Interactive Grayscale-to-Color Photograph */}
        <div className="manga-card rounded-2xl p-6 sm:p-9 bg-[#FFFFFF] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Photograph Column (Desktop: Beside text; Mobile: Above text) */}
            <div className="lg:col-span-5 w-full">
              <div 
                className="relative rounded-xl border border-[#111111] overflow-hidden bg-[#FAFAFA] shadow-[3px_3px_0px_0px_#111111] group cursor-pointer"
                onClick={() => setIsColorActive(!isColorActive)}
                title="Hover or Tap to view original full color"
              >
                {/* Photo Header Bar */}
                <div className="px-3.5 py-1.5 bg-[#FFFFFF] border-b border-[#E5E5E5] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                  <span className="font-bold text-[#111111] flex items-center gap-1.5">
                    <span>CAMPUS ARCHIVE</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] uppercase text-[#888888] hidden sm:inline">ABV-IIITM GWALIOR</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsColorActive(!isColorActive);
                      }}
                      className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-[#111111] bg-[#F7F7F7] text-[#111111] font-bold hover:bg-[#111111] hover:text-[#FFFFFF] transition-colors"
                    >
                      {isColorActive ? 'COLOR: ON' : 'TAP FOR COLOR'}
                    </button>
                  </div>
                </div>

                {/* Interactive Grayscale to Full Natural Color with 500ms smooth transition */}
                <div className="overflow-hidden bg-[#F2F2F2] relative">
                  <img
                    src={`${import.meta.env.BASE_URL}images/iiitm-research.jpg`}
                    alt="Stuti Jain at ABV-IIITM Gwalior"
                    className={`w-full h-auto object-cover transition-all duration-500 ease-in-out ${
                      isColorActive
                        ? 'grayscale-0 contrast-100 scale-[1.02]'
                        : 'grayscale contrast-105 md:group-hover:grayscale-0 md:group-hover:contrast-100 md:group-hover:scale-[1.02]'
                    }`}
                    loading="lazy"
                  />

                  {/* Subtle visual badge cue */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-[#FFFFFF]/90 border border-[#111111] text-[9px] font-mono text-[#111111] backdrop-blur-sm pointer-events-none flex items-center gap-1">
                    <Sparkles size={9} />
                    <span>{isColorActive ? 'Natural Color' : 'Hover/Tap for Color'}</span>
                  </div>
                </div>

                {/* Photo Caption */}
                <div className="px-3.5 py-2 bg-[#FFFFFF] border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="font-handwritten text-xs text-[#111111]">
                    "Summer Research Experience"
                  </span>
                  <span className="font-mono text-[10px] text-[#888888] uppercase">
                    ABV-IIITM Campus
                  </span>
                </div>
              </div>
            </div>

            {/* Research Details Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Top Status & Date */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E5E5] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F7F7] border border-[#111111] flex items-center justify-center text-[#111111]">
                    <Building2 size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[11px] text-[#777777] uppercase tracking-wider block">
                      INSTITUTE OF RESEARCH
                    </span>
                    <span className="font-mono text-sm font-bold text-[#111111]">
                      ABV-IIITM, Gwalior
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#111111] font-mono text-xs text-[#111111] font-bold">
                    <Calendar size={12} />
                    <span>May 2026 – July 2026</span>
                  </span>
                  <div className="hidden sm:block">
                    <MiniRobotMascot size={36} />
                  </div>
                </div>
              </div>

              {/* Research Title */}
              <div className="mb-4">
                <div className="font-mono text-xs text-[#777777] uppercase tracking-wider mb-1">
                  ROLE & TOPIC
                </div>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111]">
                  Research Intern — ABV-IIITM, Gwalior
                </h3>
              </div>

              {/* Narrative Content */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#333333] leading-relaxed">
                <p className="p-4 rounded-xl bg-[#F7F7F7] border-l-4 border-[#111111] font-medium text-[#111111]">
                  "During my summer research internship at ABV-IIITM, Gwalior, I explored machine learning applications in Cyber-Physical Systems, focusing on anomaly detection and efficient data analysis."
                </p>

                <p className="text-[#555555]">
                  "The experience helped me develop research skills, strengthen my understanding of machine learning, and explore practical applications of computing in real-world systems."
                </p>
              </div>

              {/* Card Footer Notes */}
              <div className="mt-6 pt-4 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[#777777]">
                <span className="flex items-center gap-1.5">
                  <BookOpen size={13} className="text-[#111111]" />
                  <span>Cyber-Physical Systems & Anomaly Detection</span>
                </span>
                <div className="flex items-center gap-1 font-handwritten text-xs text-[#111111]">
                  <span>"Strengthening research methodology"</span>
                  <StarCreature size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
