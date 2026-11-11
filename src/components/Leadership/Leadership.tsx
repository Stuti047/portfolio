import React from 'react';
import { leadershipData } from '../../data/leadership';
import { GhostMascot, StarCreature, MiniRobotMascot, BunnyMascot } from '../Mascots/DoodleCreatures';
import { Users, Award, HeartHandshake, Shield, Palette, CheckCircle2 } from 'lucide-react';

export const Leadership: React.FC = () => {
  const getRoleIcon = (index: number) => {
    switch (index) {
      case 0: return { icon: Users, mascot: <MiniRobotMascot size={42} /> };
      case 1: return { icon: HeartHandshake, mascot: <BunnyMascot size={42} /> };
      case 2: return { icon: Shield, mascot: <StarCreature size={38} /> };
      case 3: return { icon: Palette, mascot: <GhostMascot size={40} /> };
      default: return { icon: Award, mascot: <StarCreature size={38} /> };
    }
  };

  return (
    <section id="leadership" className="py-24 relative bg-[#F7F7F7] border-t border-[#E5E5E5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>COMMUNITY // CO-CURRICULAR</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            MORE THAN <span className="doodle-underline-ink">JUST CODE.</span>
          </h2>
          <p className="font-handwritten text-lg sm:text-xl text-[#555555] mt-3">
            ~ Technical mentorship, social welfare, military discipline & creative communication ~
          </p>
        </div>

        {/* 4 Minimalist Illustrated Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipData.map((item, index) => {
            const { icon: Icon, mascot } = getRoleIcon(index);

            return (
              <div
                key={item.organization}
                className="manga-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative group bg-[#FFFFFF]"
              >
                <div>
                  {/* Top Header Row with Icon & Mascot */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F7F7] border border-[#111111] flex items-center justify-center text-[#111111]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#777777] block">
                          {item.period}
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#111111]">
                          {item.role}
                        </h3>
                      </div>
                    </div>

                    {/* Monochrome Doodle Mascot */}
                    <div className="shrink-0">{mascot}</div>
                  </div>

                  {/* Organization Title */}
                  <div className="font-mono text-xs sm:text-sm text-[#111111] font-semibold mb-3">
                    @ {item.organization}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Impact Points */}
                  <ul className="space-y-1.5 mb-6">
                    {item.impactPoints.map((point, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#333333] flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#111111] mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags Pill Row */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E5E5]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#F7F7F7] text-[11px] font-mono text-[#555555] border border-[#E5E5E5]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
