import React, { useState } from 'react';
import { AnimeGirlMascot } from '../Mascots/AnimeGirlMascot';
import { GhostMascot, StarCreature } from '../Mascots/DoodleCreatures';
import { soundFx } from '../../utils/sound';
import { Mail, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'jainstuti2007@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/stuti-jain-a98663366/';
  const githubUrl = 'https://github.com/Stuti047';

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    soundFx.playPop();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundFx.playLevelUp();

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#FFFFFF] border-t border-[#E5E5E5] overflow-hidden">
      <div className="absolute top-12 left-10 hidden md:block opacity-75">
        <GhostMascot size={52} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F7] border border-[#111111] text-xs font-mono text-[#111111] mb-3">
            <span>GET IN TOUCH // TRANSMISSION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] uppercase">
            LET'S CREATE <span className="doodle-underline-ink">SOMETHING MEANINGFUL.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#555555] max-w-xl mx-auto mt-4 leading-relaxed">
            Have an interesting idea, research opportunity, or project in mind? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Direct Links & Waving Mascot */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Waving Mascot Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-manga flex flex-col items-center w-full max-w-sm mb-6">
              <AnimeGirlMascot
                pose="waving"
                size={220}
                interactive={true}
                speechBubble="Looking forward to connecting!"
              />
              <div className="font-handwritten text-sm text-[#111111] mt-2 flex items-center gap-1.5">
                <span>"Drop a note anytime."</span>
                <StarCreature size={24} />
              </div>
            </div>

            {/* Quick Contact & Verified Social Links */}
            <div className="w-full max-w-sm space-y-3">
              {/* Verified Email Card with Working Mailto Link & Copy */}
              <div className="p-3.5 bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] flex items-center justify-between">
                <a
                  href={`mailto:${contactEmail}`}
                  className="flex items-center gap-2.5 overflow-hidden hover:underline group"
                  title="Open mail application"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F7F7F7] border border-[#E5E5E5] flex items-center justify-center text-[#111111] shrink-0 group-hover:bg-[#111111] group-hover:text-white transition-colors">
                    <Mail size={15} />
                  </div>
                  <div className="truncate font-mono text-xs text-[#111111] font-medium">
                    {contactEmail}
                  </div>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-[#F7F7F7] text-[11px] font-mono text-[#111111] hover:bg-[#111111] hover:text-[#FFFFFF] transition-colors shrink-0 flex items-center gap-1 border border-[#E5E5E5]"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={11} className="text-white" /> : <Copy size={11} />}
                  <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Verified Social Channels */}
              <div className="grid grid-cols-2 gap-3">
                {/* GitHub Link */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] hover:border-[#111111] flex items-center justify-between font-mono text-xs text-[#111111] transition-all group shadow-sm"
                  title="Visit Stuti's GitHub"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight size={13} className="text-[#888888] group-hover:text-[#111111]" />
                </a>

                {/* LinkedIn Link */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-3 bg-[#FFFFFF] rounded-xl border border-[#E5E5E5] hover:border-[#111111] flex items-center justify-between font-mono text-xs text-[#111111] transition-all group shadow-sm"
                  title="Visit Stuti's LinkedIn"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={13} className="text-[#888888] group-hover:text-[#111111]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Contact Form */}
          <div className="lg:col-span-7">
            <div className="editorial-window rounded-2xl p-5 sm:p-8 bg-[#FFFFFF]">
              <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
                  <span className="font-mono text-xs font-bold text-[#111111]">
                    contact_dispatch.sh
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#888888]">DIRECT DISPATCH</span>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full border border-[#111111] mx-auto flex items-center justify-center text-[#111111]">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#111111]">
                    MESSAGE RECEIVED.
                  </h3>
                  <p className="font-mono text-xs text-[#555555] max-w-sm mx-auto">
                    Thank you for reaching out. Stuti will review your message and reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-mono text-xs text-[#111111] font-semibold mb-1.5">
                      NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] text-sm text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#111111] font-sans transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#111111] font-semibold mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] text-sm text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#111111] font-sans transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#111111] font-semibold mb-1.5">
                      MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss a research opportunity, technical project, or say hello..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] text-sm text-[#111111] placeholder-[#999999] focus:outline-none focus:border-[#111111] font-sans transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg bg-[#111111] text-[#FFFFFF] font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 hover:bg-[#333333] transition-all duration-200 disabled:opacity-50 shadow-manga-sm"
                  >
                    {isSubmitting ? (
                      <span>SENDING TRANSMISSION...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
