import React, { useState } from 'react';
import { soundFx } from '../../utils/sound';

// 1. Cute White Ghost Mascot (Monochrome Ink)
export const GhostMascot: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  const [isHappy, setIsHappy] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playSparkle();
    setIsHappy(true);
    setTimeout(() => setIsHappy(false), 800);
  };

  return (
    <div 
      onClick={handleClick} 
      className={`inline-block animate-float-slow cursor-pointer select-none transition-transform duration-200 hover:scale-110 ${className}`}
      title="Click me!"
    >
      <svg width={size} height={size * 1.1} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ghost Body (Clean White with Black Ink Outline) */}
        <path
          d="M 20 50 C 20 20 80 20 80 50 C 80 80 85 95 72 95 C 64 95 60 88 50 88 C 40 88 36 95 28 95 C 15 95 20 80 20 50 Z"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2.5"
        />
        {/* Subtle Manga Cheek Hatching */}
        <line x1="30" y1="56" x2="35" y2="52" stroke="#888888" strokeWidth="1.2" />
        <line x1="33" y1="59" x2="38" y2="55" stroke="#888888" strokeWidth="1.2" />
        <line x1="62" y1="52" x2="67" y2="56" stroke="#888888" strokeWidth="1.2" />
        <line x1="65" y1="55" x2="70" y2="59" stroke="#888888" strokeWidth="1.2" />

        {/* Eyes */}
        {isHappy ? (
          <g stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none">
            <path d="M 33 46 Q 38 41 43 46" />
            <path d="M 57 46 Q 62 41 67 46" />
          </g>
        ) : (
          <g fill="#111111">
            <circle cx="38" cy="45" r="3.5" />
            <circle cx="62" cy="45" r="3.5" />
            <circle cx="39.5" cy="43.5" r="1.2" fill="#FFFFFF" />
            <circle cx="63.5" cy="43.5" r="1.2" fill="#FFFFFF" />
          </g>
        )}
        {/* Mouth */}
        <path d="M 47 54 Q 50 58 53 54" stroke="#111111" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Hand-drawn ink sparkle */}
        <text x="78" y="28" fontSize="12" fill="#111111">✦</text>
      </svg>
    </div>
  );
};

// 2. Tiny Bunny Mascot (Monochrome Ink)
export const BunnyMascot: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = '' }) => {
  const [bounced, setBounced] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playPop();
    setBounced(true);
    setTimeout(() => setBounced(false), 600);
  };

  return (
    <div 
      onClick={handleClick} 
      className={`inline-block animate-bounce-subtle cursor-pointer select-none transition-transform duration-200 hover:scale-110 ${bounced ? '-translate-y-3 scale-110' : ''} ${className}`}
      title="Hop hop!"
    >
      <svg width={size} height={size * 1.2} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ears */}
        <ellipse cx="36" cy="30" rx="8" ry="22" fill="#FFFFFF" stroke="#111111" strokeWidth="2.2" />
        <line x1="36" y1="18" x2="36" y2="40" stroke="#888888" strokeWidth="1.2" strokeDasharray="3 2" />

        <ellipse cx="64" cy="30" rx="8" ry="22" fill="#FFFFFF" stroke="#111111" strokeWidth="2.2" />
        <line x1="64" y1="18" x2="64" y2="40" stroke="#888888" strokeWidth="1.2" strokeDasharray="3 2" />

        {/* Head and Body */}
        <ellipse cx="50" cy="75" rx="34" ry="30" fill="#FFFFFF" stroke="#111111" strokeWidth="2.2" />

        {/* Eyes */}
        <circle cx="38" cy="72" r="3.8" fill="#111111" />
        <circle cx="62" cy="72" r="3.8" fill="#111111" />
        <circle cx="39.5" cy="70.5" r="1.2" fill="#FFFFFF" />
        <circle cx="63.5" cy="70.5" r="1.2" fill="#FFFFFF" />

        {/* Cheek Hatching */}
        <line x1="28" y1="78" x2="33" y2="76" stroke="#888888" strokeWidth="1" />
        <line x1="67" y1="76" x2="72" y2="78" stroke="#888888" strokeWidth="1" />

        {/* Nose & Mouth */}
        <polygon points="50,77 47,81 53,81" fill="#111111" />
        <path d="M 46 83 Q 50 86 54 83" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Paws */}
        <ellipse cx="40" cy="100" rx="6" ry="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />
        <ellipse cx="60" cy="100" rx="6" ry="4" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />
      </svg>
    </div>
  );
};

// 3. Floating Star Character (Monochrome Ink)
export const StarCreature: React.FC<{ size?: number; className?: string }> = ({ size = 56, className = '' }) => {
  const [spinning, setSpinning] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playSparkle();
    setSpinning(true);
    setTimeout(() => setSpinning(false), 700);
  };

  return (
    <div 
      onClick={handleClick} 
      className={`inline-block animate-float-reverse cursor-pointer select-none transition-transform duration-300 hover:scale-125 ${spinning ? 'rotate-180 scale-125' : ''} ${className}`}
      title="Star sparkle!"
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="50,5 64,36 98,38 72,60 80,94 50,75 20,94 28,60 2,38 36,36"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2.5"
        />
        {/* Face */}
        <circle cx="42" cy="50" r="3" fill="#111111" />
        <circle cx="58" cy="50" r="3" fill="#111111" />
        <circle cx="43" cy="48.5" r="1" fill="#FFFFFF" />
        <circle cx="59" cy="48.5" r="1" fill="#FFFFFF" />
        <path d="M 47 56 Q 50 60 53 56" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
};

// 4. Little Robot Mascot (Monochrome Ink)
export const MiniRobotMascot: React.FC<{ size?: number; className?: string }> = ({ size = 60, className = '' }) => {
  const [scanning, setScanning] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    soundFx.playPop();
    setScanning(true);
    setTimeout(() => setScanning(false), 900);
  };

  return (
    <div 
      onClick={handleClick} 
      className={`inline-block animate-float-slow cursor-pointer select-none transition-transform duration-200 hover:scale-110 ${className}`}
      title="Research bot active!"
    >
      <svg width={size} height={size * 1.15} viewBox="0 0 100 115" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Antenna */}
        <line x1="50" y1="20" x2="50" y2="35" stroke="#111111" strokeWidth="2.2" />
        <circle cx="50" cy="18" r="5" fill="#111111" className={scanning ? 'animate-ping' : ''} />

        {/* Head */}
        <rect x="25" y="35" width="50" height="38" rx="6" fill="#FFFFFF" stroke="#111111" strokeWidth="2.2" />
        {/* Screen visor */}
        <rect x="31" y="42" width="38" height="18" rx="3" fill="#F7F7F7" stroke="#111111" strokeWidth="1.5" />

        {/* Robot Eyes */}
        <circle cx="42" cy="51" r="3" fill="#111111" />
        <circle cx="58" cy="51" r="3" fill="#111111" />
        <circle cx="43" cy="50" r="1" fill="#FFFFFF" />
        <circle cx="59" cy="50" r="1" fill="#FFFFFF" />

        {/* Body */}
        <rect x="30" y="77" width="40" height="26" rx="5" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
        <line x1="38" y1="88" x2="62" y2="88" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="50" cy="95" r="2.5" fill="#111111" />

        {/* Floater jets in outline */}
        <polygon points="42,103 47,112 45,103" fill="#111111" />
        <polygon points="53,103 58,112 55,103" fill="#111111" />
      </svg>
    </div>
  );
};
