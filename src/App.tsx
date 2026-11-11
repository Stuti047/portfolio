import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Education } from './components/Education/Education';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { CreativeExperiments } from './components/CreativeExperiments/CreativeExperiments';
import { Hobbies } from './components/Hobbies/Hobbies';
import { Leadership } from './components/Leadership/Leadership';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { CustomCursor } from './components/UI/CustomCursor';
import { MusicPlayer } from './components/Audio/MusicPlayer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#FFFFFF] overflow-x-hidden">
      {/* Minimal Monochrome Cursor */}
      <CustomCursor />

      {/* Optional Background Ambient Music Player */}
      <MusicPlayer />

      {/* Editorial Navigation Bar */}
      <Navbar />

      {/* Main Sections in Structured Order */}
      <main>
        {/* 1. HOME — Animated introduction and mascot */}
        <Hero />

        {/* 2. ABOUT — Personal introduction */}
        <About />

        {/* 3. EDUCATION — Three authentic institutional photographs */}
        <Education />

        {/* 4. EXPERIENCE / RESEARCH — Research internship introduction */}
        <Experience />

        {/* 5. PROJECTS — GMS, Saamya, and anomaly detection */}
        <Projects />

        {/* 6. SKILLS — Programming, web development, ML, and creative tools */}
        <Skills />

        {/* 7. CREATIVE EXPERIMENTS — TouchDesigner and software exploration */}
        <CreativeExperiments />

        {/* 8. HOBBIES & INTERESTS — Personal interests and activities */}
        <Hobbies />

        {/* Co-curricular & Leadership */}
        <Leadership />

        {/* 9. CONTACT — Email, LinkedIn, and GitHub */}
        <Contact />
      </main>

      {/* 10. FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
