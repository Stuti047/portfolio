import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Mail } from 'lucide-react';
import { soundFx } from '../../utils/sound';

export const Navbar: React.FC = () => {
  const [soundOn, setSoundOn] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const linkedinUrl = 'https://www.linkedin.com/in/stuti-jain-a98663366/';
  const githubUrl = 'https://github.com/Stuti047';
  const emailUrl = 'mailto:jainstuti2007@gmail.com';

  useEffect(() => {
    // Handle initial hash on page load/refresh
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(targetId);
        }, 100);
      }
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy across all primary and secondary sections
      const sections = ['home', 'about', 'education', 'research', 'projects', 'skills', 'creative-experiments', 'hobbies', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = soundFx.toggleSound();
    setSoundOn(newState);
    if (newState) soundFx.playPop();
  };

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'RESEARCH', href: '#research', id: 'research' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    soundFx.playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#FFFFFF] border-b border-[#E5E5E5] ${
        scrolled ? 'py-3.5 shadow-sm' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo: STUTI JAIN. */}
        <a 
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home', 'home')}
          className="group flex items-center gap-1.5 font-heading text-lg sm:text-xl font-bold tracking-tight text-[#111111]"
        >
          <span>STUTI JAIN</span>
          <span className="text-[#111111] group-hover:translate-x-0.5 transition-transform">.</span>
        </a>

        {/* Desktop Navigation Links: HOME | ABOUT | PROJECTS | SKILLS | RESEARCH | CONTACT */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <React.Fragment key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href, item.id)}
                  className={`font-mono text-xs tracking-wider transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#111111] font-bold border-b-2 border-[#111111]'
                      : 'text-[#555555] hover:text-[#111111]'
                  }`}
                >
                  {item.label}
                </a>
                {index < navLinks.length - 1 && (
                  <span className="text-[#D0D0D0] text-xs font-mono select-none">|</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Right side controls: Email, LinkedIn, GitHub, Sound Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Email Mailto Link */}
          <a
            href={emailUrl}
            onClick={() => soundFx.playClick()}
            className="w-8 h-8 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-all"
            title="Email Stuti (jainstuti2007@gmail.com)"
            aria-label="Send email"
          >
            <Mail size={14} />
          </a>

          {/* LinkedIn Icon & Link */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="w-8 h-8 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-all"
            title="LinkedIn profile"
            aria-label="LinkedIn"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub Icon & Link */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick()}
            className="w-8 h-8 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-all"
            title="GitHub profile"
            aria-label="GitHub"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* Sound Toggle Button */}
          <button
            onClick={handleSoundToggle}
            className={`w-8 h-8 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors ${
              soundOn ? 'bg-[#F7F7F7]' : 'bg-transparent opacity-60'
            }`}
            title={soundOn ? 'SFX On' : 'SFX Off'}
            aria-label="Toggle sound"
          >
            {soundOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden w-8 h-8 rounded-lg border border-[#E5E5E5] flex items-center justify-center text-[#111111]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E5E5E5] px-6 py-6 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href, item.id)}
                className="font-mono text-xs py-2 px-3 rounded text-[#111111] hover:bg-[#F7F7F7] flex items-center justify-between border-l-2 border-transparent hover:border-[#111111]"
              >
                <span>{item.label}</span>
                <span className="text-[#888888]">→</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#E5E5E5] flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#777777]">B.Tech Math & Computing</span>
              <div className="flex items-center gap-3">
                <a
                  href={emailUrl}
                  className="font-mono text-xs text-[#111111] underline"
                >
                  Email
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#111111] underline"
                >
                  LinkedIn
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#111111] underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
