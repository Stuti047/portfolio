import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fallback synthesizer via Web Audio API if audio file fails
  const synthContextRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  const startSynthFallback = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      synthContextRef.current = ctx;

      const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 392.00]  // G6
      ];
      let chordIndex = 0;

      const playChord = () => {
        if (!synthContextRef.current || synthContextRef.current.state === 'closed') return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.05);

          gain.gain.setValueAtTime(0.0001, ctx.currentTime + i * 0.05);
          gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + i * 0.05 + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + i * 0.05 + 3.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(ctx.currentTime + i * 0.05);
          osc.stop(ctx.currentTime + i * 0.05 + 4.0);
        });
      };

      playChord();
      synthIntervalRef.current = window.setInterval(playChord, 3800);
    } catch {
      // Audio context not allowed or failed
    }
  };

  const stopSynthFallback = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (synthContextRef.current) {
      synthContextRef.current.close().catch(() => {});
      synthContextRef.current = null;
    }
  };

  const togglePlay = () => {
    setHasInteracted(true);
    const audio = audioRef.current;

    if (!isPlaying) {
      if (audio) {
        audio.volume = isMuted ? 0 : 0.35;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // File playback failed, start synth fallback
              startSynthFallback();
              setIsPlaying(true);
            });
        }
      } else {
        startSynthFallback();
        setIsPlaying(true);
      }
    } else {
      if (audio) {
        audio.pause();
      }
      stopSynthFallback();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.volume = newMuted ? 0 : 0.35;
    }
  };

  useEffect(() => {
    return () => {
      stopSynthFallback();
    };
  }, []);

  return (
    <>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/audio/ambient-lofi.m4a" type="audio/mp4" />
        <source src="/audio/ambient-lofi.wav" type="audio/wav" />
      </audio>

      {/* Floating Music Control Pill */}
      <div className="fixed bottom-5 left-5 z-40 select-none">
        <div
          onClick={togglePlay}
          className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#FFFFFF] border-[1.5px] border-[#111111] shadow-[3px_3px_0px_0px_#111111] cursor-pointer transition-all duration-200 hover:translate-y-[-2px] ${
            isPlaying ? 'ring-2 ring-[#111111]/10' : 'opacity-85 hover:opacity-100'
          }`}
          title={isPlaying ? 'Pause Background Music' : 'Play Background Music (Lo-Fi Ambient)'}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              togglePlay();
            }
          }}
        >
          {/* Play/Pause Button Icon */}
          <div className="w-6 h-6 rounded-full bg-[#F7F7F7] border border-[#111111] flex items-center justify-center text-[#111111] shrink-0">
            {isPlaying ? <Pause size={11} /> : <Play size={11} className="ml-0.5" />}
          </div>

          {/* Sound Visualizer Bars */}
          <div className="flex items-end gap-0.5 h-3.5 px-0.5">
            <span
              className={`w-1 bg-[#111111] rounded-full transition-all duration-300 ${
                isPlaying ? 'h-3 animate-pulse' : 'h-1.5'
              }`}
            />
            <span
              className={`w-1 bg-[#111111] rounded-full transition-all duration-300 delay-75 ${
                isPlaying ? 'h-4 animate-pulse' : 'h-2'
              }`}
            />
            <span
              className={`w-1 bg-[#111111] rounded-full transition-all duration-300 delay-150 ${
                isPlaying ? 'h-2.5 animate-pulse' : 'h-1'
              }`}
            />
          </div>

          {/* Label */}
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-mono text-[10px] font-bold text-[#111111] leading-tight">
              {isPlaying ? 'LO-FI AMBIENCE' : 'BGM'}
            </span>
            <span className="font-mono text-[8px] text-[#777777] leading-none uppercase">
              {isPlaying ? 'Playing • Instrumental' : 'Optional Music'}
            </span>
          </div>

          {/* Mute/Unmute quick toggle when playing */}
          {isPlaying && (
            <button
              onClick={toggleMute}
              className="p-1 rounded-full text-[#777777] hover:text-[#111111] hover:bg-[#F0F0F0] transition-colors ml-0.5"
              title={isMuted ? 'Unmute' : 'Mute'}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
          )}

          {/* First-time friendly badge hint */}
          {!hasInteracted && !isPlaying && (
            <span className="font-handwritten text-[11px] text-[#555555] hidden md:inline ml-1 border-l border-[#E5E5E5] pl-2">
              ~ play music ~
            </span>
          )}
        </div>
      </div>
    </>
  );
};

