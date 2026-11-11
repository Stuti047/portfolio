import React, { useState } from 'react';
import { AnimeGirlMascot } from '../Mascots/AnimeGirlMascot';
import { GhostMascot, BunnyMascot, StarCreature } from '../Mascots/DoodleCreatures';
import { Cyber3DScene } from '../ThreeD/Cyber3DScene';
import { FloatingWindow } from '../DesktopWindows/FloatingWindow';
import { MascotPose } from '../../types';
import { soundFx } from '../../utils/sound';
import { ArrowRight, Sparkles, FolderGit2, BookOpen, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mascotPose, setMascotPose] = useState<MascotPose>('welcome');
  const [activeWindow, setActiveWindow] = useState<string | null>('about_me.exe');

  const desktopIcons = [
    { id: 'about_me.exe', label: 'about_me.exe', icon: '✦' },
    { id: 'projects.web', label: 'projects.web', icon: '📂' },
    { id: 'skills.json', label: 'skills.json', icon: '⚡' },
    { id: 'research.pdf', label: 'research.pdf', icon: '📄' },
  ];

  const handleOpenWindow = (id: string) => {
    soundFx.playPop();
    setActiveWindow(id);
    if (id === 'projects.web') setMascotPose('coding');
    else if (id === 'research.pdf') setMascotPose('researching');
    else if (id === 'skills.json') setMascotPose('thinking');
    else setMascotPose('welcome');
  };

  // Reusable responsive terminal window content
  const renderTerminalWindow = (wrapperClassName: string = '') => {
    if (!activeWindow) return null;

    return (
      <div className={`w-full max-w-xl ${wrapperClassName}`}>
        <FloatingWindow
          id={activeWindow}
          title={activeWindow}
          icon={desktopIcons.find(d => d.id === activeWindow)?.icon || '✦'}
          isOpen={!!activeWindow}
          onClose={() => setActiveWindow(null)}
        >
          {activeWindow === 'about_me.exe' && (
            <div className="space-y-2.5 font-mono text-xs">
              <div className="text-[#111111] font-bold flex items-center gap-2">
                <span>$ cat stuti_profile.txt</span>
              </div>
              <p className="text-[#111111] leading-relaxed">
                Stuti Jain — B.Tech Mathematics & Computing @ MITS Gwalior (2025–2029).
              </p>
              <p className="text-[#555555] leading-relaxed">
                Research focus: Lightweight machine learning algorithms, industrial control system anomaly detection, and creative computing.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-[11px]">
                <span className="px-2 py-0.5 bg-[#EFEFEF] text-[#111111] rounded border border-[#E5E5E5]">#MathAndComputing</span>
                <span className="px-2 py-0.5 bg-[#EFEFEF] text-[#111111] rounded border border-[#E5E5E5]">#CyberPhysicalSystems</span>
                <span className="px-2 py-0.5 bg-[#EFEFEF] text-[#111111] rounded border border-[#E5E5E5]">#MinimalAnime</span>
              </div>
            </div>
          )}

          {activeWindow === 'projects.web' && (
            <div className="space-y-2 font-mono text-xs">
              <div className="text-[#111111] font-bold flex items-center gap-1.5">
                <FolderGit2 size={14} />
                <span>Featured Projects Registry</span>
              </div>
              <ul className="space-y-1 text-[#111111]">
                <li>✦ Grievance Management System (GMS)</li>
                <li>✦ Saamya (AI-Powered Mental Wellness Platform)</li>
                <li>✦ Lightweight ML for Anomaly Detection (HAI 21.03)</li>
              </ul>
              <a href="#projects" className="text-[#111111] font-bold underline text-[11px] block pt-1">
                &gt; Jump to project dossiers...
              </a>
            </div>
          )}

          {activeWindow === 'skills.json' && (
            <div className="space-y-1.5 font-mono text-xs">
              <div className="text-[#111111] font-bold flex items-center gap-1.5">
                <Cpu size={14} />
                <span>skills_manifest.json</span>
              </div>
              <p className="text-[#555555] break-words whitespace-pre-wrap leading-relaxed">
                &#123; "languages": ["C++", "C", "Python"], "ml": ["Anomaly Detection", "LTTB", "Isolation Forest", "Autoencoders", "One-Class SVM"], "tools": ["Git", "GitHub", "VS Code"], "graphics": ["Canva", "Figma"] &#125;
              </p>
              <a href="#skills" className="text-[#111111] font-bold underline text-[11px] block pt-1">
                &gt; View interactive skill tree...
              </a>
            </div>
          )}

          {activeWindow === 'research.pdf' && (
            <div className="space-y-2 font-mono text-xs">
              <div className="text-[#111111] font-bold flex items-center gap-1.5">
                <BookOpen size={14} />
                <span>ABV-IIITM Research Internship (May–July 2026)</span>
              </div>
              <p className="text-[#111111] leading-relaxed">
                "Lightweight Machine Learning Approaches for Anomaly Detection in Cyber-Physical Systems."
              </p>
              <p className="text-[#555555] leading-relaxed">
                Compressed HAI 21.03 time-series to 3.2% volume with 100% attack preservation on CPU hardware.
              </p>
              <a href="#research" className="text-[#111111] font-bold underline text-[11px] block pt-1">
                &gt; Explore research dashboard...
              </a>
            </div>
          )}
        </FloatingWindow>
      </div>
    );
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 sm:pt-28 pb-16 flex items-center justify-center overflow-hidden bg-[#FFFFFF] bg-minimal-grid">
      {/* Decorative Floating Doodle Creatures */}
      <div className="absolute top-28 left-6 md:left-14 z-10 hidden lg:block opacity-85 pointer-events-none">
        <GhostMascot size={56} />
      </div>
      <div className="absolute bottom-20 left-12 z-10 hidden lg:block opacity-85 pointer-events-none">
        <BunnyMascot size={60} />
      </div>
      <div className="absolute top-36 right-8 md:right-16 z-10 hidden lg:block opacity-85 pointer-events-none">
        <StarCreature size={48} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        {/* Top Editorial Sketchbook Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2.5 font-mono text-xs text-[#555555] bg-[#FAFAFA] border border-[#E5E5E5] px-3.5 sm:px-4 py-2 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#111111]" />
            <span className="text-[#111111] font-semibold text-[11px] sm:text-xs">SKETCHBOOK // VOLUME 01</span>
            <span className="text-[#888888] hidden md:inline">| MATHEMATICS & COMPUTING LAB</span>
          </div>

          {/* Floating Window Quick Switchers */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 max-w-full">
            {desktopIcons.map((icon) => (
              <button
                key={icon.id}
                onClick={() => handleOpenWindow(icon.id)}
                className={`flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono transition-all shrink-0 ${
                  activeWindow === icon.id
                    ? 'bg-[#111111] text-[#FFFFFF] font-bold shadow-sm'
                    : 'bg-[#FFFFFF] border border-[#E5E5E5] text-[#555555] hover:text-[#111111] hover:border-[#111111]'
                }`}
              >
                <span>{icon.icon}</span>
                <span className="hidden sm:inline">{icon.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Layout Grid: Desktop 2-column | Mobile Vertically Flowing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column (Desktop) / Introductory Content (Mobile) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Minimal Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#111111] text-xs font-mono text-[#111111] mb-3 sm:mb-4 w-fit">
              <span>✦ ACT 01 • PORTFOLIO CATALOG</span>
              <span className="text-[#888888] font-normal">GWALIOR, IN</span>
            </div>

            {/* Main Heading: STUTI JAIN */}
            <h1 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-none mb-3">
              STUTI JAIN
            </h1>

            {/* Tagline */}
            <div className="mb-3 sm:mb-4">
              <span className="font-handwritten text-lg sm:text-2xl text-[#111111] tracking-wide inline-block transform -rotate-1 leading-snug">
                "Exploring the interesting, learning the unexpected, and creating along the way."
              </span>
            </div>

            {/* Handwritten Exploring Annotation */}
            <div className="mb-4 inline-flex items-center gap-1.5 font-handwritten text-xs sm:text-sm text-[#555555] bg-[#F7F7F7] border border-dashed border-[#111111] px-3 py-1 rounded-full w-fit animate-bounce-subtle">
              <span className="text-[#111111]">✦</span>
              <span>"Currently exploring something new..."</span>
            </div>

            {/* Introduction Badge */}
            <p className="font-mono text-xs sm:text-sm text-[#111111] tracking-wide mb-4 sm:mb-5 bg-[#F7F7F7] border-l-2 border-[#111111] pl-3 py-1.5 rounded-r leading-relaxed">
              Mathematics & Computing Student | Developer | Research Enthusiast | Creative Explorer
            </p>

            {/* Short Profile Description */}
            <p className="font-sans text-xs sm:text-base text-[#555555] max-w-xl leading-relaxed mb-6 sm:mb-8">
              Undergraduate at Madhav Institute of Technology and Science, Gwalior. Fusing rigorous mathematical foundations, lightweight cyber-physical machine learning, and clean Japanese editorial design into thoughtful digital experiences.
            </p>

            {/* Action Buttons: Responsive row/stack */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="#projects"
                onClick={() => soundFx.playPop()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#111111] text-[#FFFFFF] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#2A2A2A] transition-all duration-200 shadow-manga-sm hover:translate-x-0.5 hover:translate-y-0.5"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FFFFFF] border-[1.5px] border-[#111111] text-[#111111] font-mono text-xs sm:text-sm font-semibold tracking-wider hover:bg-[#F7F7F7] transition-all duration-200"
              >
                <span>GET IN TOUCH</span>
                <Sparkles size={14} />
              </a>
            </div>

            {/* Desktop Terminal Window (hidden on mobile, placed below mascot on mobile) */}
            {renderTerminalWindow('hidden lg:block')}
          </div>

          {/* Right Column: 3D Scene + Animated Mascot + Pose Controls */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-2 lg:mt-0 w-full">
            {/* 3D Scene Layer with Interactive Mascot */}
            <div className="w-full h-72 sm:h-88 lg:h-96 relative flex items-center justify-center">
              <Cyber3DScene className="absolute inset-0 z-0 opacity-80" />

              {/* Main Monochrome Anime Girl Mascot with Viewport-Constrained Speech Bubble */}
              <div className="relative z-10 flex flex-col items-center max-w-full">
                <AnimeGirlMascot
                  pose={mascotPose}
                  size={260}
                  speechBubble="Welcome to my digital sketchbook."
                  onPoseChange={(p) => setMascotPose(p)}
                />
              </div>
            </div>

            {/* Mascot Pose Switcher Dock */}
            <div className="mt-3 sm:mt-4 flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 bg-[#FFFFFF] border border-[#111111] p-1.5 rounded-xl shadow-manga-sm z-20 max-w-full">
              <span className="font-mono text-[10px] text-[#555555] px-1.5 sm:px-2 font-semibold">
                POSE:
              </span>
              {[
                { p: 'welcome' as MascotPose, label: 'Welcome' },
                { p: 'coding' as MascotPose, label: 'Coding' },
                { p: 'thinking' as MascotPose, label: 'Thinking' },
                { p: 'researching' as MascotPose, label: 'Research' },
                { p: 'observing' as MascotPose, label: 'Observe' },
                { p: 'celebrating' as MascotPose, label: 'Cheer' },
              ].map((item) => (
                <button
                  key={item.p}
                  onClick={() => {
                    soundFx.playPop();
                    setMascotPose(item.p);
                  }}
                  className={`px-2 py-0.5 rounded font-mono text-[10px] sm:text-[11px] transition-all ${
                    mascotPose === item.p
                      ? 'bg-[#111111] text-[#FFFFFF] font-bold'
                      : 'bg-[#F7F7F7] text-[#555555] hover:text-[#111111] hover:bg-[#EFEFEF]'
                  }`}
                  title={`Switch pose to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Terminal Window: Naturally stacks below 3D Planet & Mascot */}
            {renderTerminalWindow('block lg:hidden mt-8')}
          </div>
        </div>
      </div>
    </section>
  );
};
