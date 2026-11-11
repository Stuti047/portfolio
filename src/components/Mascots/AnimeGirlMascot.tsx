import React, { useState } from 'react';
import { MascotPose } from '../../types';
import { soundFx } from '../../utils/sound';

interface AnimeGirlMascotProps {
  pose?: MascotPose;
  className?: string;
  size?: number;
  interactive?: boolean;
  speechBubble?: string;
  onPoseChange?: (pose: MascotPose) => void;
}

export const AnimeGirlMascot: React.FC<AnimeGirlMascotProps> = ({
  pose = 'welcome',
  className = '',
  size = 320,
  interactive = true,
  speechBubble,
  onPoseChange
}) => {
  const [currentPose, setCurrentPose] = useState<MascotPose>(pose);
  const [isBlinking, setIsBlinking] = useState(false);
  const [showSparkle, setShowSparkle] = useState(false);

  // Sync external pose prop
  React.useEffect(() => {
    setCurrentPose(pose);
  }, [pose]);

  // Periodic subtle blinking
  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 160);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = () => {
    if (!interactive) return;
    soundFx.playPop();
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 800);

    const poses: MascotPose[] = [
      'welcome', 
      'waving', 
      'laptop', 
      'coding', 
      'thinking', 
      'researching', 
      'observing', 
      'celebrating'
    ];
    const nextIndex = (poses.indexOf(currentPose) + 1) % poses.length;
    const newPose = poses[nextIndex];
    setCurrentPose(newPose);
    if (onPoseChange) onPoseChange(newPose);
  };

  // Eyes in Japanese Monochrome Manga Ink Art
  const getEyeExpression = () => {
    if (isBlinking || currentPose === 'sleeping') {
      return (
        <g stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none">
          {/* Closed peaceful or sleeping curve */}
          <path d="M 125 155 Q 140 164 155 155" />
          <path d="M 185 155 Q 200 164 215 155" />
          {/* Eyelash flicks */}
          <path d="M 152 153 L 159 148" />
          <path d="M 212 153 L 219 148" />
        </g>
      );
    }

    if (currentPose === 'celebrating') {
      return (
        <g stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none">
          {/* Happy squinting manga eyes ^ ^ */}
          <path d="M 124 156 Q 140 142 156 156" />
          <path d="M 184 156 Q 200 142 216 156" />
          <path d="M 152 146 L 158 141" strokeWidth="2.5" />
          <path d="M 212 146 L 218 141" strokeWidth="2.5" />
        </g>
      );
    }

    if (currentPose === 'observing') {
      // Glancing slightly upward/sideways toward technical elements
      return (
        <g>
          {/* Left Eye */}
          <ellipse cx="142" cy="153" rx="14" ry="18" fill="#111111" />
          <ellipse cx="143" cy="150" rx="10" ry="13" fill="#2A2A2A" />
          <circle cx="140" cy="146" r="4.5" fill="#FFFFFF" />
          <circle cx="145" cy="156" r="2" fill="#E5E5E5" />
          <path d="M 124 142 Q 141 133 158 143" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 155 140 L 161 135" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />

          {/* Right Eye */}
          <ellipse cx="198" cy="153" rx="14" ry="18" fill="#111111" />
          <ellipse cx="199" cy="150" rx="10" ry="13" fill="#2A2A2A" />
          <circle cx="196" cy="146" r="4.5" fill="#FFFFFF" />
          <circle cx="201" cy="156" r="2" fill="#E5E5E5" />
          <path d="M 182 143 Q 199 133 216 142" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 213 140 L 219 135" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" />
        </g>
      );
    }

    // Default expressive monochrome manga eyes with white catchlight
    return (
      <g>
        {/* Left Eye */}
        <ellipse cx="140" cy="154" rx="14" ry="18" fill="#111111" />
        <ellipse cx="140" cy="156" rx="10" ry="14" fill="#2D2D2D" />
        <circle cx="136" cy="148" r="5" fill="#FFFFFF" />
        <circle cx="143" cy="161" r="2.2" fill="#EAEAEA" />
        <path d="M 123 143 Q 140 134 157 144" stroke="#111111" strokeWidth="3.8" strokeLinecap="round" fill="none" />
        <path d="M 154 141 L 161 136" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />

        {/* Right Eye */}
        <ellipse cx="200" cy="154" rx="14" ry="18" fill="#111111" />
        <ellipse cx="200" cy="156" rx="10" ry="14" fill="#2D2D2D" />
        <circle cx="196" cy="148" r="5" fill="#FFFFFF" />
        <circle cx="203" cy="161" r="2.2" fill="#EAEAEA" />
        <path d="M 183 144 Q 200 134 217 143" stroke="#111111" strokeWidth="3.8" strokeLinecap="round" fill="none" />
        <path d="M 214 141 L 221 136" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    );
  };

  const getMouthExpression = () => {
    switch (currentPose) {
      case 'celebrating':
        return (
          <path d="M 164 180 Q 170 194 176 180 Z" fill="#111111" stroke="#111111" strokeWidth="1" />
        );
      case 'thinking':
        return (
          <path d="M 165 182 Q 170 180 175 183" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        );
      case 'coding':
      case 'researching':
      case 'observing':
        return (
          <path d="M 165 182 Q 170 185 175 182" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        );
      case 'sleeping':
        return (
          <circle cx="170" cy="182" r="2" fill="#555555" />
        );
      default:
        // Soft confident manga smile
        return (
          <path d="M 164 180 Q 170 188 176 180" stroke="#111111" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        );
    }
  };

  const getArmsAndProps = () => {
    switch (currentPose) {
      case 'waving':
        return (
          <g>
            {/* Left Arm at rest */}
            <path d="M 125 240 Q 110 270 115 300" stroke="#111111" strokeWidth="10" strokeLinecap="round" fill="none" />
            <circle cx="115" cy="300" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />

            {/* Right Arm Waving */}
            <g className="animate-bounce-subtle origin-bottom-left">
              <path d="M 215 240 Q 245 215 258 175" stroke="#111111" strokeWidth="10" strokeLinecap="round" fill="none" />
              <circle cx="258" cy="173" r="7" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
              {/* Hand-drawn ink motion lines */}
              <path d="M 270 162 Q 275 172 272 182" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path d="M 276 166 Q 280 173 277 180" stroke="#555555" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </g>
          </g>
        );

      case 'laptop':
      case 'coding':
        return (
          <g>
            {/* Arms resting on desk / keyboard */}
            <path d="M 125 245 Q 145 285 155 295" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M 215 245 Q 195 285 185 295" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="155" cy="295" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            <circle cx="185" cy="295" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />

            {/* Minimalist Laptop in Manga Outline */}
            <g transform="translate(130, 275)">
              {/* Screen */}
              <polygon points="8,0 72,0 76,28 4,28" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
              {/* Screen inner hatch lines (representing terminal code) */}
              <rect x="10" y="3" width="60" height="22" fill="#F7F7F7" />
              <path d="M 15 9 L 32 9 M 15 14 L 50 14 M 15 19 L 28 19" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" />
              {/* Keyboard base */}
              <polygon points="0,30 80,30 86,42 -6,42" fill="#EFEFEF" stroke="#111111" strokeWidth="1.8" />
              <line x1="16" y1="36" x2="64" y2="36" stroke="#888888" strokeWidth="1.5" strokeDasharray="3 2" />
            </g>
          </g>
        );

      case 'thinking':
        return (
          <g>
            {/* Right hand touching chin */}
            <path d="M 215 245 Q 230 215 185 195" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="185" cy="195" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            {/* Left Arm across waist */}
            <path d="M 125 245 Q 160 270 200 255" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="200" cy="255" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            {/* Hand-drawn thought doodle */}
            <g transform="translate(245, 115)" className="animate-bounce-subtle">
              <circle cx="10" cy="15" r="10" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
              <text x="7" y="19" fontSize="13" fontFamily="monospace" fontWeight="bold" fill="#111111">?</text>
              <circle cx="0" cy="28" r="2.5" fill="#111111" />
              <circle cx="-6" cy="36" r="1.5" fill="#555555" />
            </g>
          </g>
        );

      case 'observing':
        return (
          <g>
            {/* Pointing or gesturing slightly toward technical elements */}
            <path d="M 125 240 Q 110 265 120 285" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="120" cy="285" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            {/* Right hand pointing upward */}
            <path d="M 215 240 Q 235 230 250 205" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="250" cy="203" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            {/* Floating geometric diamond */}
            <polygon points="262,192 268,183 274,192 268,201" fill="none" stroke="#111111" strokeWidth="1.5" />
          </g>
        );

      case 'celebrating':
        return (
          <g>
            {/* Both arms raised up high! */}
            <path d="M 125 240 Q 95 190 90 145" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="90" cy="145" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            <path d="M 215 240 Q 245 190 250 145" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="250" cy="145" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            {/* Hand-drawn ink confetti & sparkles */}
            <text x="75" y="130" fontSize="16" fill="#111111">✦</text>
            <text x="255" y="130" fontSize="16" fill="#111111">✦</text>
            <text x="168" y="90" fontSize="16" fill="#111111">★</text>
          </g>
        );

      case 'researching':
        return (
          <g>
            {/* Holding research document/tablet */}
            <path d="M 125 245 Q 140 270 155 285" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M 215 245 Q 200 270 185 285" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="155" cy="285" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            <circle cx="185" cy="285" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            {/* Research clipboard/paper */}
            <g transform="translate(142, 260)">
              <rect x="0" y="0" width="56" height="42" rx="3" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />
              {/* Paper header clip */}
              <rect x="18" y="-3" width="20" height="5" rx="1.5" fill="#111111" />
              {/* Graph curves in black ink */}
              <path d="M 8 30 L 18 18 L 28 24 L 38 12 L 48 16" stroke="#111111" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <circle cx="38" cy="12" r="2" fill="#111111" />
            </g>
          </g>
        );

      case 'sleeping':
        return (
          <g>
            {/* Hands folded together */}
            <path d="M 125 245 Q 160 280 170 280" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M 215 245 Q 180 280 170 280" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="170" cy="280" r="7" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            {/* Zzz doodles */}
            <g transform="translate(230, 120)">
              <text x="0" y="0" fontSize="14" fill="#888888" fontFamily="monospace">z</text>
              <text x="10" y="-10" fontSize="18" fill="#555555" fontFamily="monospace">Z</text>
              <text x="22" y="-24" fontSize="22" fill="#111111" fontFamily="monospace" fontWeight="bold">Z</text>
            </g>
          </g>
        );

      case 'welcome':
      default:
        return (
          <g>
            {/* Friendly open stance */}
            <path d="M 125 240 Q 110 270 120 290" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="120" cy="290" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
            <path d="M 215 240 Q 235 255 240 270" stroke="#111111" strokeWidth="9" strokeLinecap="round" fill="none" />
            <circle cx="240" cy="270" r="6" fill="#F4F4F4" stroke="#111111" strokeWidth="2" />
          </g>
        );
    }
  };

  return (
    <div 
      className={`relative inline-block select-none group cursor-pointer transition-transform duration-200 hover:scale-[1.02] ${className}`}
      onClick={handleClick}
      title={interactive ? 'Click to change pose & cheer!' : 'Stuti\'s Illustrated Mascot'}
    >
      {/* Speech Bubble in Minimal Manga Style */}
      {speechBubble && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#FFFFFF] border-[1.5px] border-[#111111] text-[#111111] text-xs font-mono py-1 px-3 rounded-lg shadow-manga-sm z-20 animate-bounce-subtle">
          <span className="mr-1">✦</span> {speechBubble}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-[#111111]" />
        </div>
      )}

      {/* Sparkle pop effect on click */}
      {showSparkle && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 pointer-events-none z-30 font-handwritten text-2xl font-bold text-[#111111] animate-ping">
          ✦
        </div>
      )}

      {/* Vector Manga Character (Monochrome Ink) */}
      <svg
        width={size}
        height={size * 1.15}
        viewBox="0 0 340 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
      >
        <defs>
          {/* Halftone Pattern for Manga Shading */}
          <pattern id="mangaHatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="6" stroke="#E5E5E5" strokeWidth="1.2" />
          </pattern>
          <pattern id="hairHatch" width="4" height="4" patternTransform="rotate(35 0 0)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="4" stroke="#222222" strokeWidth="1.4" />
          </pattern>
        </defs>

        {/* Minimal Thin Halo / Geometric Ring behind head */}
        <circle 
          cx="170" 
          cy="95" 
          r="65" 
          stroke="#111111" 
          strokeWidth="1.2" 
          strokeDasharray="4 4" 
          fill="none" 
        />

        {/* Back Hair Volume (Black ink with white highlights) */}
        <path
          d="M 105 130 C 80 180 60 250 85 290 C 95 305 110 295 108 275 C 102 240 115 190 125 160 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="2"
        />
        <path
          d="M 235 130 C 260 180 280 250 255 290 C 245 305 230 295 232 275 C 238 240 225 190 215 160 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="2"
        />

        {/* Minimal Outfit / Jacket */}
        <path
          d="M 130 220 Q 110 240 100 290 L 120 360 L 220 360 L 240 290 Q 230 240 210 220 Z"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2.5"
        />
        {/* Subtle hatch shading on jacket */}
        <path
          d="M 130 220 Q 110 240 100 290 L 120 360 L 140 360 L 132 280 Q 130 240 135 220 Z"
          fill="url(#mangaHatch)"
        />

        {/* Crisp Collar */}
        <path d="M 145 218 L 170 248 L 195 218" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 170 248 L 170 358" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Developer ID Badge */}
        <rect x="180" y="260" width="16" height="22" rx="2" fill="#FFFFFF" stroke="#111111" strokeWidth="1.5" />
        <line x1="183" y1="266" x2="193" y2="266" stroke="#111111" strokeWidth="1.5" />
        <line x1="183" y1="272" x2="190" y2="272" stroke="#666666" strokeWidth="1.2" />

        {/* Neck */}
        <path d="M 158 195 L 158 225 Q 170 230 182 225 L 182 195 Z" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />

        {/* Face Contour */}
        <path
          d="M 120 135 C 120 185 140 212 170 212 C 200 212 220 185 220 135 C 220 95 120 95 120 135 Z"
          fill="#FFFFFF"
          stroke="#111111"
          strokeWidth="2.2"
        />

        {/* Manga Cheek Hatch Marks */}
        <g stroke="#888888" strokeWidth="1" strokeLinecap="round">
          <line x1="128" y1="172" x2="134" y2="168" />
          <line x1="131" y1="175" x2="137" y2="171" />
          <line x1="203" y1="168" x2="209" y2="172" />
          <line x1="206" y1="171" x2="212" y2="175" />
        </g>

        {/* Eyebrows */}
        <path d="M 128 136 Q 142 128 154 134" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 186 134 Q 198 128 212 136" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Eyes (Dynamic by pose) */}
        {getEyeExpression()}

        {/* Cute Manga Nose */}
        <circle cx="170" cy="168" r="1.5" fill="#111111" />

        {/* Mouth (Dynamic by pose) */}
        {getMouthExpression()}

        {/* Minimalist Headset / Hairband */}
        <path d="M 112 125 C 112 70 228 70 228 125" stroke="#111111" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Left Ear-piece */}
        <rect x="104" y="125" width="10" height="22" rx="3" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />
        {/* Right Ear-piece */}
        <rect x="226" y="125" width="10" height="22" rx="3" fill="#FFFFFF" stroke="#111111" strokeWidth="1.8" />

        {/* Front Hair Bangs (Solid Black Ink with White Negative Space Strands) */}
        <path
          d="M 115 125 C 115 110 130 80 170 80 C 210 80 225 110 225 125 C 220 138 205 130 190 142 C 178 125 162 125 150 142 C 135 130 120 138 115 125 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="2"
        />
        {/* Fine Manga Highlights */}
        <path
          d="M 132 104 Q 138 125 146 138"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 208 104 Q 202 125 194 138"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Side Hair Strands Framing Face */}
        <path
          d="M 115 125 Q 112 170 120 195 Q 128 175 124 135 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="1.5"
        />
        <path
          d="M 225 125 Q 228 170 220 195 Q 212 175 216 135 Z"
          fill="#111111"
          stroke="#111111"
          strokeWidth="1.5"
        />

        {/* Arms and Dynamic Props based on current pose */}
        {getArmsAndProps()}

        {/* Hand-drawn ink sparkle accent */}
        <text x="272" y="105" fontSize="14" fill="#111111">✦</text>
        <text x="68" y="155" fontSize="12" fill="#555555">★</text>
      </svg>
    </div>
  );
};
