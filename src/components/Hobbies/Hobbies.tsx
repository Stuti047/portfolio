import React from 'react';
import { StarCreature, GhostMascot } from '../Mascots/DoodleCreatures';
import { soundFx } from '../../utils/sound';
import { 
  Pencil, 
  Palette, 
  FileText, 
  Laptop, 
  Sparkles, 
  Binary, 
  Headphones, 
  Gamepad2, 
  Compass, 
  Heart
} from 'lucide-react';

export const Hobbies: React.FC = () => {
  const hobbies = [
    {
      id: 'sketching',
      title: 'Sketching & Drawing',
      quote: "I enjoy sketching and creating visual ideas.",
      icon: Pencil,
      doodleTag: '✏️ Ink & Paper',
      annotation: 'Manga line art & visual notes'
    },
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      quote: "I like creating graphics, redesigning existing designs, correcting visual elements, refining layouts, and making things look better.",
      icon: Palette,
      doodleTag: '🎨 Visual Polish',
      annotation: 'Figma, Canva & typography'
    },
    {
      id: 'document-design',
      title: 'Document Designing',
      quote: "I genuinely enjoy organizing, redesigning, formatting, and maintaining documents.",
      icon: FileText,
      doodleTag: '📑 Layout & Grid',
      annotation: 'Formatting until it looks right'
    },
    {
      id: 'exploring-software',
      title: 'Exploring Software',
      quote: "I love trying unfamiliar software, discovering new tools, experimenting with features, and finding creative ways to use them.",
      icon: Laptop,
      doodleTag: '💻 Unfamiliar Tools',
      annotation: 'Curiosity-driven testing'
    },
    {
      id: 'creative-tech',
      title: 'Creative Technology',
      quote: "I enjoy experimenting with tools such as TouchDesigner and exploring the intersection of technology and visual creativity.",
      icon: Sparkles,
      doodleTag: '✨ Nodes & Visuals',
      annotation: 'Code meets generative art'
    },
    {
      id: 'mathematics',
      title: 'Mathematics',
      quote: "I enjoy mathematics, logical thinking, and solving interesting problems.",
      icon: Binary,
      doodleTag: '📐 Logical Thinking',
      annotation: 'Discrete structures & proofs'
    },
    {
      id: 'music',
      title: 'Music',
      quote: "I enjoy listening to music and exploring different sounds.",
      icon: Headphones,
      doodleTag: '🎵 Audio Focus',
      annotation: 'Rhythm, soundtracks & beats'
    },
    {
      id: 'games-play',
      title: 'Games & Play',
      quote: "I enjoy playing games and trying different activities.",
      icon: Gamepad2,
      doodleTag: '🎮 Playful Mindset',
      annotation: 'Gaming & casual challenges'
    },
    {
      id: 'learning-new-things',
      title: 'Learning New Things',
      quote: "One of my biggest interests is trying things I've never done before. I enjoy exploring different fields instead of limiting myself to one particular interest.",
      icon: Compass,
      doodleTag: '🧭 Endless Curiosity',
      annotation: 'Never limiting exploration'
    }
  ];

  return (
    <section id="hobbies" className="py-24 relative bg-[#FFFFFF] border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>SCRAPBOOK // PERSONAL INTERESTS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            OUTSIDE <span className="doodle-underline-ink">THE CODE.</span>
          </h2>
          <p className="font-handwritten text-lg sm:text-xl text-[#555555] max-w-2xl mx-auto mt-3 leading-relaxed">
            "Some things I enjoy, some things I'm learning, and a lot more I'm still discovering."
          </p>
        </div>

        {/* Illustrated Scrapbook Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;

            return (
              <div
                key={hobby.id}
                onClick={() => soundFx.playPop()}
                className="manga-card rounded-2xl p-6 bg-[#FFFFFF] flex flex-col justify-between group cursor-pointer transition-all duration-200"
              >
                <div>
                  {/* Top Scrapbook Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F7F7] border border-[#111111] flex items-center justify-center text-[#111111] group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="font-mono text-[11px] text-[#777777]">
                      PAGE 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#111111] mb-2 group-hover:underline">
                    {hobby.title}
                  </h3>

                  {/* Exact Quote */}
                  <p className="text-xs sm:text-sm text-[#444444] leading-relaxed mb-4">
                    "{hobby.quote}"
                  </p>
                </div>

                {/* Footer Tag & Handwritten Annotation */}
                <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#555555] bg-[#F7F7F7] px-2 py-0.5 rounded border border-[#E5E5E5]">
                    {hobby.doodleTag}
                  </span>
                  <span className="font-handwritten text-xs text-[#777777]">
                    {hobby.annotation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Exploring... Bottom Scrapbook Showcase */}
        <div className="manga-card rounded-2xl p-8 sm:p-12 bg-[#F7F7F7] text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-4 left-6 hidden sm:block opacity-60">
            <StarCreature size={36} />
          </div>
          <div className="absolute bottom-4 right-6 hidden sm:block opacity-60">
            <GhostMascot size={36} />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <Heart size={12} className="text-[#111111] fill-current" />
            <span>CONTINUOUS JOURNEY</span>
          </div>

          <h3 className="font-heading text-2xl sm:text-4xl font-bold text-[#111111] mb-3 uppercase">
            Still Exploring...
          </h3>

          <p className="font-sans text-sm sm:text-base text-[#555555] max-w-lg mx-auto leading-relaxed mb-6">
            "Always curious, always experimenting. There is so much more I want to learn and try."
          </p>

          <div className="flex items-center justify-center gap-2 font-handwritten text-base text-[#111111]">
            <span>~ Stuti Jain</span>
            <span>✦</span>
            <span>Mathematics & Computing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

