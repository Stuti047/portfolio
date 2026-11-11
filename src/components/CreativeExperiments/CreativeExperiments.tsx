import React, { useState } from 'react';
import { StarCreature, GhostMascot } from '../Mascots/DoodleCreatures';
import { soundFx } from '../../utils/sound';
import { Sparkles, Activity } from 'lucide-react';

export const CreativeExperiments: React.FC = () => {
  const [waveFrequency, setWaveFrequency] = useState(3);
  const [activeNode, setActiveNode] = useState('TOP_Noise');

  const nodes = [
    { id: 'TOP_Noise', type: 'Texture Operator', function: 'Perlin 2D procedural noise generator' },
    { id: 'CHOP_Audio', type: 'Channel Operator', function: 'Audio spectrum frequency analyzer' },
    { id: 'SOP_Grid', type: 'Surface Operator', function: 'Geometric lattice displacement' },
    { id: 'COMP_Render', type: 'Composite Operator', function: 'Real-time monochrome visual synthesizer' },
  ];

  return (
    <section id="creative-experiments" className="py-24 relative bg-[#F7F7F7] border-t border-[#E5E5E5] overflow-hidden">
      <div className="absolute inset-0 bg-minimal-grid opacity-50 pointer-events-none" />
      <div className="absolute top-12 right-12 hidden md:block opacity-75">
        <StarCreature size={44} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <Sparkles size={13} />
            <span>CREATIVE SOFTWARE & GENERATIVE VISUALS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            CREATIVE <span className="doodle-underline-ink">EXPERIMENTS.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#555555] max-w-2xl mx-auto mt-4 leading-relaxed">
            "A little space for experimenting with creative software, exploring visuals, and discovering new ways technology can become art."
          </p>
        </div>

        {/* Experiments Grid: Interactive TouchDesigner Visualizer + Exploration Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive TouchDesigner Node Sandbox (Monochrome) */}
          <div className="lg:col-span-7">
            <div className="manga-card rounded-2xl p-6 sm:p-7 bg-[#FFFFFF] relative overflow-hidden">
              {/* Studio Window Bar */}
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-3 mb-5">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#111111]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                  <span>TouchDesigner_Sandbox.toe [Generative Visuals]</span>
                </div>
                <span className="font-mono text-[11px] text-[#777777]">FPS: 60 // REAL-TIME</span>
              </div>

              {/* Generative Interactive Wave Canvas (SVG Procedural Visualizer) */}
              <div className="w-full bg-[#0D0D0D] rounded-xl p-4 border border-[#111111] text-[#FFFFFF] relative overflow-hidden mb-5">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] mb-2">
                  <span>OUTPUT: CHOP_DISPLACEMENT</span>
                  <span className="text-[#FFFFFF] flex items-center gap-1 font-bold">
                    <Activity size={12} /> INTERACTIVE WAVEFORM
                  </span>
                </div>

                <svg width="100%" height="130" viewBox="0 0 400 130" fill="none" className="overflow-visible">
                  {/* Subtle Grid Lines */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="#222222" strokeDasharray="3 3" />
                  <line x1="0" y1="65" x2="400" y2="65" stroke="#333333" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#222222" strokeDasharray="3 3" />

                  {/* Primary Sine Wave with Harmonic Resonance */}
                  <path
                    d={`M 0 65 
                        Q 50 ${65 - waveFrequency * 12}, 100 65 
                        T 200 65 
                        T 300 65 
                        T 400 65`}
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Echo Secondary Wave */}
                  <path
                    d={`M 0 65 
                        Q 50 ${65 + waveFrequency * 10}, 100 65 
                        T 200 65 
                        T 300 65 
                        T 400 65`}
                    stroke="#777777"
                    strokeWidth="1.2"
                    strokeDasharray="4 2"
                    fill="none"
                  />

                  {/* Node Connection Points */}
                  <circle cx="100" cy="65" r="4" fill="#FFFFFF" />
                  <circle cx="200" cy="65" r="4" fill="#FFFFFF" />
                  <circle cx="300" cy="65" r="4" fill="#FFFFFF" />
                </svg>

                {/* Interactive Frequency Slider */}
                <div className="mt-3 pt-3 border-t border-[#222222] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 sm:gap-4 font-mono text-xs">
                  <span className="text-[#888888] text-[11px] sm:text-xs">Harmonic Frequency:</span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.5"
                    value={waveFrequency}
                    onChange={(e) => {
                      soundFx.playClick();
                      setWaveFrequency(parseFloat(e.target.value));
                    }}
                    className="accent-[#FFFFFF] w-28 sm:w-40 cursor-pointer"
                  />
                  <span className="text-[#FFFFFF] font-bold text-xs">{waveFrequency}x</span>
                </div>
              </div>

              {/* Node-based Network Inspector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {nodes.map((node) => {
                  const isSelected = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => {
                        soundFx.playClick();
                        setActiveNode(node.id);
                      }}
                      className={`p-2.5 rounded-lg text-left transition-all font-mono text-xs ${
                        isSelected
                          ? 'bg-[#111111] text-[#FFFFFF] shadow-sm'
                          : 'bg-[#F7F7F7] text-[#555555] hover:text-[#111111] border border-[#E5E5E5]'
                      }`}
                    >
                      <div className="font-bold truncate">{node.id}</div>
                      <div className="text-[10px] opacity-75 truncate">{node.type}</div>
                    </button>
                  );
                })}
              </div>

              {/* Active Node Detail Note */}
              <div className="mt-3 p-3 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] font-mono text-xs text-[#555555]">
                <strong className="text-[#111111]">Operator Action:</strong>{' '}
                {nodes.find(n => n.id === activeNode)?.function}
              </div>
            </div>
          </div>

          {/* Right Column: Creative Exploration Narrative & Reflections */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-manga-sm">
              <span className="font-mono text-xs font-bold text-[#111111] block mb-2">
                EXPERIMENTATION NOTE // 01
              </span>
              <h3 className="font-heading text-xl font-bold text-[#111111] mb-2">
                Node-Based Visual Synthesis
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                Exploring TouchDesigner has introduced me to non-linear creative pipelines: treating real-time inputs as continuous signals that reshape geometry, lighting, and generative motion.
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#111111]">
                <span className="px-2 py-0.5 rounded bg-[#F7F7F7] border border-[#E5E5E5]">#TouchDesigner</span>
                <span className="px-2 py-0.5 rounded bg-[#F7F7F7] border border-[#E5E5E5]">#GenerativeArt</span>
                <span className="px-2 py-0.5 rounded bg-[#F7F7F7] border border-[#E5E5E5]">#CreativeCode</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E5] hover:border-[#111111] transition-colors">
              <span className="font-mono text-xs font-bold text-[#111111] block mb-2">
                EXPERIMENTATION NOTE // 02
              </span>
              <h3 className="font-heading text-xl font-bold text-[#111111] mb-2">
                The Intersection of Logic & Art
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Applying trigonometric functions, noise matrices, and mathematical vectors to render reactive visuals bridges the gap between pure mathematics and visual communication.
              </p>
            </div>

            {/* Handwritten Doodle Note */}
            <div className="p-4 rounded-xl bg-[#F7F7F7] border border-dashed border-[#111111] font-handwritten text-sm text-[#111111] flex items-center justify-between">
              <span>"Constantly experimenting with unfamiliar tools."</span>
              <GhostMascot size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
