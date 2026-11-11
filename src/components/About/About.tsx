import React from 'react';
import { GhostMascot } from '../Mascots/DoodleCreatures';
import { Palette, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#FFFFFF] border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center relative">
          <div className="hidden sm:block absolute right-8 top-0 opacity-70">
            <GhostMascot size={46} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>SKETCHBOOK // CHAPTER 01</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            THE GIRL BEHIND <span className="doodle-underline-ink">THE CODE</span>
          </h2>
          <p className="font-handwritten text-lg sm:text-xl text-[#555555] mt-3">
            ~ Mathematics, creative software, curiosity & visual ideas ~
          </p>
        </div>

        {/* Content Layout: Manga Illustration + Conversational Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Authentic Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative p-4 sm:p-6 rounded-2xl bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-manga flex flex-col items-center w-full max-w-sm group">
              {/* Halftone dot pattern background */}
              <div className="absolute inset-0 bg-halftone-manga opacity-30 rounded-2xl pointer-events-none" />

              {/* Real Photograph with Elegant Subtle Animation & Natural Colours */}
              <div className="relative z-10 my-2 w-full">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-[#111111] shadow-[3px_3px_0px_0px_#111111] bg-[#FAFAFA]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/stuti-profile.jpg`}
                    alt="Stuti Jain"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Tagline */}
              <div className="relative z-10 w-full text-center mt-3 mb-1">
                <p className="font-handwritten text-sm sm:text-base text-[#222222] tracking-wide">
                  "Curious mind. Creative soul. Always becoming."
                </p>
              </div>

              {/* Status info */}
              <div className="mt-4 pt-3 border-t border-[#E5E5E5] flex items-center justify-between w-full font-mono text-[10px] sm:text-[11px] text-[#777777] relative z-10">
                <span>MITS GWALIOR</span>
                <span className="font-bold text-[#111111]">MATH & COMPUTING</span>
              </div>
            </div>
          </div>

          {/* Right Column: Conversational About Description & Currently Exploring */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Main Conversational Narrative Card */}
            <div className="manga-card rounded-2xl p-5 sm:p-8 space-y-3.5 sm:space-y-4">
              <p className="text-base sm:text-lg text-[#111111] font-semibold leading-relaxed">
                Hey! I'm <span className="underline decoration-2">Stuti Jain</span>, a Mathematics and Computing undergraduate at Madhav Institute of Technology and Science, Gwalior.
              </p>

              <p className="text-xs sm:text-base text-[#444444] leading-relaxed">
                I'm someone who loves exploring, experimenting, and learning new things. My interests extend beyond programming into mathematics, graphic design, creative software, research, and technology.
              </p>

              <p className="text-xs sm:text-base text-[#444444] leading-relaxed">
                I enjoy turning ideas into projects, experimenting with unfamiliar tools, sketching, creating graphics, redesigning layouts, and even refining documents until everything looks just right.
              </p>

              <p className="text-xs sm:text-base text-[#111111] font-medium leading-relaxed pt-1 border-t border-[#E5E5E5]">
                I'm still exploring my interests, trying new things, and discovering where my curiosity takes me.
              </p>
            </div>

            {/* "Currently Exploring" Highlight Block */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F7F7] border-[1.5px] border-[#111111] shadow-manga-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#111111]">
                  <Compass size={15} />
                  <span>CURRENTLY EXPLORING</span>
                </div>
                <span className="font-handwritten text-xs text-[#555555]">~ in progress ~</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                <div className="p-2 sm:p-2.5 bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] text-center hover:border-[#111111] transition-colors">
                  <span className="text-xs font-mono font-bold text-[#111111] block">TouchDesigner</span>
                  <span className="text-[10px] text-[#777777]">Generative Visuals</span>
                </div>

                <div className="p-2 sm:p-2.5 bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] text-center hover:border-[#111111] transition-colors">
                  <span className="text-xs font-mono font-bold text-[#111111] block">Document Design</span>
                  <span className="text-[10px] text-[#777777]">Typography & Grid</span>
                </div>

                <div className="p-2 sm:p-2.5 bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] text-center hover:border-[#111111] transition-colors">
                  <span className="text-xs font-mono font-bold text-[#111111] block">Creative Code</span>
                  <span className="text-[10px] text-[#777777]">Visual Experiments</span>
                </div>

                <div className="p-2 sm:p-2.5 bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] text-center hover:border-[#111111] transition-colors">
                  <span className="text-xs font-mono font-bold text-[#111111] block">Applied Math</span>
                  <span className="text-[10px] text-[#777777]">Problem Solving</span>
                </div>
              </div>
            </div>

            {/* Creative Software Floating Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 font-mono text-xs text-[#555555]">
              <span className="font-bold text-[#111111] flex items-center gap-1 text-[11px] sm:text-xs">
                <Palette size={13} /> Tools in rotation:
              </span>
              {['TouchDesigner', 'Figma', 'Canva', 'VS Code', 'Python', 'DaVinci Resolve', 'C++'].map((t) => (
                <span key={t} className="px-2 sm:px-2.5 py-0.5 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#111111] text-[10px] sm:text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
