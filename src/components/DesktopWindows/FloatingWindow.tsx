import React, { useState } from 'react';
import { Minus, Square, X } from 'lucide-react';
import { soundFx } from '../../utils/sound';

export interface FloatingWindowProps {
  id: string;
  title: string;
  icon?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

export const FloatingWindow: React.FC<FloatingWindowProps> = ({
  title,
  icon = '✦',
  isOpen,
  onClose,
  className = '',
  children
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className={`editorial-window rounded-xl overflow-hidden transition-all duration-200 z-30 ${
        isMaximized 
          ? 'fixed inset-3 sm:inset-6 z-50' 
          : isMinimized 
            ? 'h-10 w-64 sm:w-72' 
            : 'w-full'
      } ${className}`}
    >
      {/* Title Bar (Minimal Editorial Monochrome) */}
      <div 
        className="flex items-center justify-between px-3 sm:px-3.5 py-2.5 bg-[#FFFFFF] border-b border-[#111111] select-none"
      >
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          <span className="text-xs text-[#111111] font-mono shrink-0">{icon}</span>
          <span className="font-mono text-xs font-bold text-[#111111] tracking-wider uppercase truncate">
            {title}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#EFEFEF] text-[#555555] border border-[#E5E5E5] hidden sm:inline-block shrink-0">
            ACTIVE
          </span>
        </div>

        {/* Minimal Window Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 ml-2">
          <button
            onClick={() => {
              soundFx.playClick();
              setIsMinimized(!isMinimized);
            }}
            className="w-5 h-5 rounded flex items-center justify-center text-[#555555] hover:text-[#111111] hover:bg-[#EFEFEF] transition-colors"
            title="Minimize"
          >
            <Minus size={11} />
          </button>

          <button
            onClick={() => {
              soundFx.playClick();
              setIsMaximized(!isMaximized);
            }}
            className="w-5 h-5 rounded flex items-center justify-center text-[#555555] hover:text-[#111111] hover:bg-[#EFEFEF] transition-colors"
            title="Maximize"
          >
            <Square size={9} />
          </button>

          <button
            onClick={() => {
              soundFx.playPop();
              onClose();
            }}
            className="w-5 h-5 rounded flex items-center justify-center text-[#555555] hover:text-[#FFFFFF] hover:bg-[#111111] transition-colors"
            title="Close"
          >
            <X size={11} />
          </button>
        </div>
      </div>

      {/* Window Body */}
      {!isMinimized && (
        <div className="p-4 sm:p-5 overflow-y-auto max-h-[460px] text-sm text-[#111111] font-sans bg-[#FFFFFF]">
          {children}
        </div>
      )}

      {/* Window Footer Status */}
      {!isMinimized && (
        <div className="px-3.5 py-1.5 bg-[#F7F7F7] border-t border-[#E5E5E5] flex items-center justify-between text-[10px] font-mono text-[#777777]">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            STUTI_OS_v3.0 // MONOCHROME
          </span>
          <span>MEM: OK</span>
        </div>
      )}
    </div>
  );
};
