import React, { useState, useEffect } from 'react';
import { Terminal, X, Zap, Volume2, VolumeX, Grid } from 'lucide-react';

interface WorkbenchConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WorkbenchConsole: React.FC<WorkbenchConsoleProps> = ({ isOpen, onClose }) => {
  const [fps, setFps] = useState(60);
  const [domCount, setDomCount] = useState(0);
  const [viewport, setViewport] = useState({ w: 0, h: 0 });
  const [isWireframe, setIsWireframe] = useState(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  // Live FPS and DOM stats
  useEffect(() => {
    if (!isOpen) return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const calculateFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
      animId = requestAnimationFrame(calculateFps);
    };

    animId = requestAnimationFrame(calculateFps);

    // Count DOM nodes
    setDomCount(document.querySelectorAll('*').length);
    setViewport({ w: window.innerWidth, h: window.innerHeight });

    const handleResize = () => {
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  // Wireframe toggle
  const toggleWireframe = () => {
    const next = !isWireframe;
    setIsWireframe(next);
    if (next) {
      document.documentElement.classList.add('wireframe-mode');
    } else {
      document.documentElement.classList.remove('wireframe-mode');
    }
  };

  // Audio synthesizer click haptics (Web Audio API)
  const toggleAudioHaptics = () => {
    if (!isAudioEnabled) {
      try {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioCtx(ctx);
        setIsAudioEnabled(true);
        playTone(ctx, 880, 0.05); // High confirmation beep
      } catch (err) {
        console.warn('Web Audio not supported:', err);
      }
    } else {
      setIsAudioEnabled(false);
      if (audioCtx) {
        audioCtx.close();
        setAudioCtx(null);
      }
    }
  };

  const playTone = (ctx: AudioContext, freq: number, duration: number) => {
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context might be suspended
    }
  };

  // Keyboard shortcut ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="workbench-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-lg bg-[var(--surface-1)] border border-[var(--border-medium)] shadow-2xl p-6 sm:p-8 space-y-6 text-[var(--text-primary)] font-mono text-xs text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span className="p-1.5 rounded-sm bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <h3 id="workbench-title" className="font-bold text-sm text-[var(--text-primary)]">
                ATELIER_TELEMETRY // WORKBENCH CONSOLE
              </h3>
              <span className="text-[10px] text-[var(--text-muted)]">
                SYSTEM TELEMETRY & DIAGNOSTIC OVERLAY
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[var(--text-muted)] hidden sm:inline">[ESC to close]</span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Close workbench"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold">REFRESH CADENCE</span>
            <div className="flex items-center gap-2 text-[var(--accent)] font-bold text-base">
              <Zap className="w-3.5 h-3.5" />
              <span>{fps} FPS</span>
            </div>
          </div>

          <div className="p-3 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold">ACTIVE DOM NODES</span>
            <div className="flex items-center gap-2 text-[var(--text-primary)] font-bold text-base">
              <Grid className="w-3.5 h-3.5" />
              <span>{domCount}</span>
            </div>
          </div>

          <div className="p-3 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold">VIEWPORT RES</span>
            <div className="text-base font-bold text-[var(--text-primary)]">
              {viewport.w} × {viewport.h}
            </div>
          </div>

          <div className="p-3 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] space-y-1">
            <span className="text-[10px] text-[var(--text-muted)] uppercase font-semibold">RUNTIME</span>
            <div className="text-xs font-bold text-[var(--accent)]">REACT 19 + VITE</div>
          </div>
        </div>

        {/* Interactive Overrides */}
        <div className="space-y-3 pt-2">
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
            INTERACTION & RENDERING OVERRIDES
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Wireframe Mode */}
            <button
              onClick={toggleWireframe}
              className={`p-3 rounded-sm border text-left flex items-center justify-between transition-colors ${
                isWireframe
                  ? 'bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--accent)]'
                  : 'bg-[var(--surface-2)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-medium)]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Grid className="w-4 h-4" />
                <div>
                  <span className="font-bold block text-xs">Architectural Blueprint Grid</span>
                  <span className="text-[10px] text-[var(--text-muted)]">
                    {isWireframe ? 'ENABLED (Dashed Outlines Active)' : 'DISABLED (Standard Layers)'}
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-bold ${isWireframe ? 'text-[var(--accent)]' : 'text-zinc-500'}`}>
                {isWireframe ? 'ON' : 'OFF'}
              </span>
            </button>

            {/* Audio Synth Haptics */}
            <button
              onClick={toggleAudioHaptics}
              className={`p-3 rounded-sm border text-left flex items-center justify-between transition-colors ${
                isAudioEnabled
                  ? 'bg-[var(--accent)]/15 border-[var(--accent)] text-[var(--accent)]'
                  : 'bg-[var(--surface-2)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-medium)]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isAudioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                <div>
                  <span className="font-bold block text-xs">Web Audio Click Tones</span>
                  <span className="text-[10px] text-[var(--text-muted)]">
                    {isAudioEnabled ? 'ENABLED (Sine Synth Active)' : 'MUTED (Silent Navigation)'}
                  </span>
                </div>
              </div>
              <span className={`text-[10px] font-bold ${isAudioEnabled ? 'text-[var(--accent)]' : 'text-zinc-500'}`}>
                {isAudioEnabled ? 'ON' : 'OFF'}
              </span>
            </button>
          </div>
        </div>

        {/* Quick Jump Portal */}
        <div className="space-y-2 pt-2">
          <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
            TELEPORT HUBS
          </span>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '01 ABOUT', href: '#about' },
              { label: '02 SELECTED WORK', href: '#work' },
              { label: '03 PIPELINE', href: '#pipeline' },
              { label: '04 LAB BENCH', href: '#lab' },
              { label: '05 CHRONOLOGY', href: '#experience' },
              { label: '06 CAPABILITIES', href: '#skills' },
              { label: '10 CONTACT', href: '#contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-3 py-1.5 rounded-sm bg-[var(--surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-secondary)] hover:text-[var(--bg-main)] border border-[var(--border-subtle)] transition-colors text-[11px] font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Secret Architect Note */}
        <div className="p-3.5 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] leading-relaxed">
          <span className="text-[var(--accent)] font-bold block mb-1">ARCHITECT NOTE // DHARMESH KUMAR:</span>
          “I build digital experiences where visual craft and system architecture are treated as two sides of the same coin. Thank you for exploring my creative workbench.”
        </div>
      </div>
    </div>
  );
};
