import React, { useState } from 'react';
import { skillsData } from '../../data/skills';
import { SkillNode, MascotPose } from '../../types';
import { AnimeGirlMascot } from '../Mascots/AnimeGirlMascot';
import { soundFx } from '../../utils/sound';
import { Code2, Globe, Wrench, Brain, Palette, Sparkles } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillNode>(skillsData[0]);
  const [mascotReaction, setMascotReaction] = useState<MascotPose>('coding');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Sparkles },
    { id: 'programming', label: 'Programming Languages', icon: Code2 },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'tools', label: 'Development Tools', icon: Wrench },
    { id: 'ml', label: 'ML & Research', icon: Brain },
    { id: 'creative', label: 'Graphics & Creative', icon: Palette },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  const handleSkillClick = (skill: SkillNode) => {
    soundFx.playPop();
    setSelectedSkill(skill);
    setMascotReaction(skill.mascotReaction);
  };

  return (
    <section id="skills" className="py-24 relative bg-[#FFFFFF] border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>TOOLKIT // DISCIPLINE MATRIX</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            THINGS I <span className="doodle-underline-ink">WORK WITH.</span>
          </h2>
          <p className="font-handwritten text-lg sm:text-xl text-[#555555] mt-3">
            ~ Code, creative software, data models & visual design tools ~
          </p>
        </div>

        {/* Category Filters in Clean Monochrome */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => {
            const Icon = c.icon;
            const isSelected = activeCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(c.id);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono text-xs font-semibold transition-all duration-150 ${
                  isSelected
                    ? 'bg-[#111111] text-[#FFFFFF] shadow-manga-sm'
                    : 'bg-[#F7F7F7] text-[#555555] hover:text-[#111111] border border-[#E5E5E5]'
                }`}
              >
                <Icon size={13} />
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Two-Column Layout: Skill Tree Grid + Reactive Mascot & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Outlined Node Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill.id === skill.id;

                return (
                  <div
                    key={skill.id}
                    onClick={() => handleSkillClick(skill)}
                    onMouseEnter={() => setMascotReaction(skill.mascotReaction)}
                    className={`p-3 sm:p-4 rounded-xl cursor-pointer select-none transition-all duration-150 relative overflow-hidden group ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-manga-sm translate-x-0.5 translate-y-0.5'
                        : 'bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#111111] hover:bg-[#FAFAFA]'
                    }`}
                  >
                    {/* Top status indicator */}
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#111111]' : 'border border-[#111111] bg-transparent'}`} />
                      <span className="font-mono text-[10px] text-[#777777] uppercase">
                        {skill.proficiencyLevel}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <div className="font-heading text-sm sm:text-base font-bold text-[#111111] group-hover:underline">
                      {skill.name}
                    </div>

                    {/* Tags preview */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                      {skill.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#F7F7F7] text-[#555555] border border-[#E5E5E5]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Active Bottom Bar */}
                    {isSelected && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#111111]" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Reactive Anime Mascot & Active Node Inspector */}
          <div className="lg:col-span-4 flex flex-col items-center">
            {/* Mascot Container */}
            <div className="w-full p-4 sm:p-6 rounded-2xl bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-manga flex flex-col items-center mb-6">
              <span className="font-mono text-[11px] text-[#111111] font-bold mb-2 uppercase tracking-wider">
                MASCOT STATE: {mascotReaction.toUpperCase()}
              </span>

              <AnimeGirlMascot
                pose={mascotReaction}
                size={210}
                interactive={true}
                speechBubble={`Working with ${selectedSkill.name}!`}
              />

              <div className="font-handwritten text-xs text-[#555555] text-center mt-2">
                "Trying new tools & making them look right."
              </div>
            </div>

            {/* Active Skill Inspector Card */}
            <div className="w-full manga-card rounded-2xl p-5">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 mb-3">
                <span className="font-heading text-lg font-bold text-[#111111]">
                  {selectedSkill.name}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#F7F7F7] text-[#111111] border border-[#E5E5E5]">
                  {selectedSkill.proficiencyLevel}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                {selectedSkill.description}
              </p>

              <div className="space-y-1.5 font-mono text-xs">
                <div className="text-[#555555]">
                  <strong className="text-[#111111]">TAGS:</strong>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {selectedSkill.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#F7F7F7] text-[10px] text-[#111111] border border-[#E5E5E5]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
