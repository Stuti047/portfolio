import React from 'react';
import { GhostMascot } from '../Mascots/DoodleCreatures';
import { soundFx } from '../../utils/sound';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/stuti-jain-a98663366/';
  const githubUrl = 'https://github.com/Stuti047';

  const scrollToTop = () => {
    soundFx.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#FAFAFA] border-t border-[#E5E5E5] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Heading & Tagline */}
        <div className="text-center sm:text-left">
          <div className="font-heading text-base font-bold text-[#111111] tracking-wider">
            STUTI JAIN
          </div>
          <div className="font-handwritten text-xs text-[#555555] mt-0.5">
            "Designed with curiosity. Built with code."
          </div>
          <div className="text-[11px] font-mono text-[#888888] mt-1">
            © 2026 STUTI JAIN • ALL RIGHTS RESERVED
          </div>
        </div>

        {/* Center: Small Animated Monochrome Mascot & Social Links */}
        <div className="flex flex-col items-center gap-2">
          <GhostMascot size={34} />
          <div className="flex items-center gap-3 font-mono text-xs">
            <a
              href="mailto:jainstuti2007@gmail.com"
              className="text-[#555555] hover:text-[#111111] underline transition-colors"
              title="Send email"
            >
              Email
            </a>
            <span className="text-[#D0D0D0]">/</span>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555555] hover:text-[#111111] underline transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#D0D0D0]">/</span>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555555] hover:text-[#111111] underline transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#FFFFFF] border border-[#111111] text-xs font-mono text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-all duration-150 shadow-sm"
          title="Return to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
