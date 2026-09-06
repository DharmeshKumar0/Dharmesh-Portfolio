import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Sparkles, Compass, Layers, Code2, ShieldCheck, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [visualMode, setVisualMode] = useState<'harmonics' | 'matrix'>('harmonics');
  const [fps, setFps] = useState(60);
  const [pointerCoords, setPointerCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 440);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    let mouseX = width * 0.5;
    let mouseY = height * 0.5;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let time = 0;
    let lastTime = performance.now();
    let frameCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = Math.max(0, Math.min(width, e.clientX - rect.left));
      targetMouseY = Math.max(0, Math.min(height, e.clientY - rect.top));
      setPointerCoords({
        x: Math.round(targetMouseX),
        y: Math.round(targetMouseY),
      });
    };

    const canvasParent = canvas.parentElement;
    if (canvasParent) {
      canvasParent.addEventListener('mousemove', handleMouseMove);
    }

    const render = () => {
      const now = performance.now();
      frameCount++;
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      time += 0.018;

      // Smooth mouse interpolation (inertia)
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Background subtle grid lines
      ctx.strokeStyle = 'rgba(128, 140, 160, 0.06)';
      ctx.lineWidth = 1;
      const step = 32;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      if (visualMode === 'harmonics') {
        // Multi-Ribbon Harmonic Sinusoidal Wave Sculpture
        const ribbons = 7;
        const segments = 60;
        const normalizedMouseX = mouseX / width;
        const normalizedMouseY = mouseY / height;

        for (let r = 0; r < ribbons; r++) {
          const ribbonOffset = (r / ribbons) * Math.PI;
          const alpha = 0.15 + (r / ribbons) * 0.7;

          ctx.beginPath();
          for (let i = 0; i <= segments; i++) {
            const progress = i / segments;
            const x = progress * width;
            
            // Complex wave combination driven by time & mouse influence
            const freq1 = 2.4 + normalizedMouseX * 1.5;
            const freq2 = 1.2;
            const wave1 = Math.sin(progress * Math.PI * freq1 + time + ribbonOffset);
            const wave2 = Math.cos(progress * Math.PI * freq2 - time * 0.8 + r * 0.4);
            
            // Mouse gravity attraction
            const distToMouse = Math.abs(x - mouseX);
            const mouseInfluence = Math.max(0, 1 - distToMouse / (width * 0.45));
            const mouseOffset = (mouseY - height * 0.5) * mouseInfluence * 0.6;

            const y =
              height * 0.5 +
              (wave1 * 40 + wave2 * 25) * (0.8 + normalizedMouseY * 0.5) +
              mouseOffset +
              (r - ribbons / 2) * 12;

            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }

          // Dynamic gradient for the primary ribbon
          if (r === ribbons - 1) {
            ctx.strokeStyle = 'rgba(56, 96, 255, 0.9)';
            ctx.lineWidth = 2.2;
          } else if (r === ribbons - 2) {
            ctx.strokeStyle = 'rgba(56, 96, 255, 0.5)';
            ctx.lineWidth = 1.5;
          } else {
            ctx.strokeStyle = `rgba(140, 160, 200, ${alpha * 0.4})`;
            ctx.lineWidth = 1;
          }
          ctx.stroke();
        }

        // Kinetic focal point indicator
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#3860ff';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 18, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 96, 255, 0.3)';
        ctx.setLineDash([2, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      } else {
        // Perspective Geometric Topology Matrix
        const rows = 12;
        const cols = 16;
        const points: { x: number; y: number }[][] = [];

        for (let row = 0; row < rows; row++) {
          points[row] = [];
          for (let col = 0; col < cols; col++) {
            const px = (col / (cols - 1)) * (width - 60) + 30;
            const basePy = (row / (rows - 1)) * (height - 80) + 40;
            
            const dx = px - mouseX;
            const dy = basePy - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const elevation = Math.sin(dist * 0.04 - time * 2) * 14 * Math.max(0, 1 - dist / 220);

            points[row][col] = {
              x: px,
              y: basePy + elevation,
            };
          }
        }

        // Draw grid lines
        for (let r = 0; r < rows; r++) {
          ctx.beginPath();
          for (let c = 0; c < cols; c++) {
            const p = points[r][c];
            if (c === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.strokeStyle = r % 3 === 0 ? 'rgba(56, 96, 255, 0.4)' : 'rgba(140, 160, 200, 0.15)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          for (let r = 0; r < rows; r++) {
            const p = points[r][c];
            if (r === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.strokeStyle = 'rgba(140, 160, 200, 0.12)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvasParent) {
        canvasParent.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [visualMode]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[var(--border-subtle)] flex flex-col justify-between overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* =========================================================================
            TOP EDITORIAL METADATA BAR (Full Viewport Spread)
           ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[var(--border-subtle)] text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[var(--accent)]">[ 01 ]</span>
            <span className="text-[var(--border-medium)]">/</span>
            <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
              ATELIER // PORTFOLIO 2025
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-[var(--text-muted)] text-[11px]">
            <span>RAJASTHAN, INDIA [ 28.36° N, 75.60° E ]</span>
            <span className="text-[var(--border-subtle)]">•</span>
            <span>BTU PILANI GRADUATE</span>
            <span className="text-[var(--border-subtle)]">•</span>
            <span className="text-[var(--text-secondary)] font-medium">AVAILABLE FOR FULL-TIME HIRE</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="tracking-wider uppercase">DESIGN & CODE IN UNISON</span>
          </div>
        </div>

        {/* =========================================================================
            12-COLUMN ART-DIRECTED EDITORIAL GRID
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 pt-10 sm:pt-14 items-start">
          
          {/* COLUMN 1–3: Left-Aligned Identity & Manifesto Anchor */}
          <div className="lg:col-span-3 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
                <span className="w-4 h-px bg-[var(--accent)]" />
                <span>CREATIVE DEVELOPER</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]">
                {portfolioData.name.toUpperCase()}
              </h2>
              <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed">
                Computer Science graduate (2025) operating at the intersection of high-performance frontend craftsmanship, generative intelligence, and zero-trust engineering.
              </p>
            </div>

            {/* Quick Index Anchors */}
            <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono">
              <div className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">PORTFOLIO INDEX</div>
              <a href="#work" className="flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] group transition-colors">
                <span>02 // SELECTED PRODUCTIONS</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a href="#about" className="flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] group transition-colors">
                <span>03 // MINDSET & MANIFESTO</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a href="#lab" className="flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] group transition-colors">
                <span>04 // KINETIC & CODE LAB</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
              <a href="#experience" className="flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] group transition-colors">
                <span>05 // APPLIED CHRONOLOGY</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Status Indicator Badge */}
            <div className="p-3.5 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                <span>ACTIVE CANDIDATE // IMMEDIATE</span>
              </div>
              <div className="text-[var(--text-muted)] text-[10px] leading-tight">
                Software Engineering · Frontend Architecture · Security Analysis
              </div>
            </div>
          </div>

          {/* COLUMN 4–8: Center Typographic Statement & Core Message */}
          <div className="lg:col-span-5 space-y-7 text-left">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[var(--text-muted)] uppercase block">
                CREATIVE TECHNOLOGY & ARCHITECTURE
              </span>
              
              {/* Controlled, Highly Readable Display Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-[-0.035em] leading-[1.02] text-[var(--text-primary)]">
                Crafting digital experiences where{' '}
                <span className="font-editorial italic font-normal text-[var(--accent)]">
                  aesthetic precision
                </span>{' '}
                & resilient engineering converge.
              </h1>
            </div>

            {/* Supporting Prose */}
            <p className="font-body text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              I build web software with desktop-grade responsiveness and zero-trust defensive boundaries—specializing in browser-side WASM computation (<span className="text-[var(--text-primary)] font-semibold">Stockfish 18</span>), low-latency WebSockets, React 19/Next.js architectures, and SOC incident triage.
            </p>

            {/* Action Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[var(--accent)] hover:text-white transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                data-cursor="project"
                data-cursor-text="VIEW WORK"
              >
                <span>EXPLORE WORK</span>
                <span className="opacity-70 text-[10px]">[02]</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-sm bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-medium)] hover:border-[var(--text-primary)] text-[var(--text-primary)] font-mono text-xs font-semibold tracking-wider uppercase transition-colors"
                data-cursor="explore"
                data-cursor-text="MANIFESTO"
              >
                <span>THE MANIFESTO</span>
                <span className="text-[10px] text-[var(--text-muted)]">[03]</span>
              </a>
            </div>

            {/* Technical Proof Points (Quiet Typographic Ledger) */}
            <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                <Cpu className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>60FPS WASM WORKERS</span>
              </span>
              <span className="text-[var(--border-subtle)]">•</span>
              <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>OWASP TOP 10 HARDENING</span>
              </span>
              <span className="text-[var(--border-subtle)]">•</span>
              <span className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                <Code2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>SUB-50MS WEBSOCKETS</span>
              </span>
            </div>
          </div>

          {/* COLUMN 9–12: Art-Directed Interactive Creative Technology Canvas */}
          <div className="lg:col-span-4 w-full">
            <div className="relative rounded-sm bg-[var(--surface-1)]/40 border border-[var(--border-medium)] overflow-hidden transition-colors">
              {/* Studio Canvas Control Header */}
              <div className="px-4 py-3 bg-[var(--surface-2)]/60 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span className="font-semibold text-[11px]">GENERATIVE KINETICS</span>
                </div>
                
                {/* Visual Mode Selector */}
                <div className="flex items-center gap-1 bg-[var(--surface-1)] p-0.5 rounded border border-[var(--border-subtle)] text-[10px]">
                  <button
                    onClick={() => setVisualMode('harmonics')}
                    className={`px-2 py-0.5 rounded-sm transition-colors ${
                      visualMode === 'harmonics'
                        ? 'bg-[var(--accent)] text-white font-bold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    HARMONICS
                  </button>
                  <button
                    onClick={() => setVisualMode('matrix')}
                    className={`px-2 py-0.5 rounded-sm transition-colors ${
                      visualMode === 'matrix'
                        ? 'bg-[var(--accent)] text-white font-bold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    MATRIX
                  </button>
                </div>
              </div>

              {/* Interactive Visual Canvas Area */}
              <div
                className="relative h-72 sm:h-80 w-full bg-[var(--bg-main)]/60 cursor-crosshair overflow-hidden"
                data-cursor="lab"
                data-cursor-text="INTERACT"
              >
                <canvas ref={canvasRef} className="w-full h-full block" />

                {/* Micro Metadata Overlay */}
                <div className="absolute top-3 left-3 pointer-events-none font-mono text-[9px] text-[var(--text-muted)] space-y-0.5 bg-[var(--surface-1)]/80 backdrop-blur-sm px-2 py-1.5 rounded border border-[var(--border-subtle)]">
                  <div className="text-[var(--accent)] font-semibold">INTERACTIVE ENGINE</div>
                  <div>VELOCITY: REACTIVE // {fps} FPS</div>
                </div>

                <div className="absolute bottom-3 right-3 pointer-events-none font-mono text-[9px] text-[var(--text-muted)] bg-[var(--surface-1)]/80 backdrop-blur-sm px-2 py-1.5 rounded border border-[var(--border-subtle)] text-right">
                  <div>X: {pointerCoords.x} · Y: {pointerCoords.y}</div>
                  <div className="text-[var(--text-secondary)] font-medium">MOVE CURSOR TO RESHAPE</div>
                </div>
              </div>

              {/* Canvas Editorial Footer Details */}
              <div className="p-4 space-y-2.5 font-mono text-xs border-t border-[var(--border-subtle)] bg-[var(--surface-1)]">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[var(--text-muted)]">CURRENT FLAGSHIP</span>
                  <a
                    href="https://chessbuddybuzz.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>ChessBuddyBuzz (WASM)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[var(--text-muted)]">FOUNDATION</span>
                  <span className="text-[var(--text-primary)]">Zero-Trust & Reactive UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM METADATA FOOTER (Available for Selected Projects & Scroll Cue)
           ========================================================================= */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-[var(--text-muted)]">
            <div className="border-l border-[var(--border-subtle)] pl-3">
              <span className="text-[10px] text-[var(--text-muted)] uppercase block tracking-wider">01 // DISCIPLINES</span>
              <span className="text-[var(--text-secondary)] font-medium">Design · Full-Stack · Security</span>
            </div>
            <div className="border-l border-[var(--border-subtle)] pl-3">
              <span className="text-[10px] text-[var(--text-muted)] uppercase block tracking-wider">02 // PRIMARY STACK</span>
              <span className="text-[var(--text-secondary)] font-medium">React 19 · Next.js · TypeScript</span>
            </div>
            <div className="border-l border-[var(--border-subtle)] pl-3">
              <span className="text-[10px] text-[var(--text-muted)] uppercase block tracking-wider">03 // METHODOLOGY</span>
              <span className="text-[var(--text-secondary)] font-medium">Design First · Systems Second</span>
            </div>
            <div className="border-l border-[var(--border-subtle)] pl-3 flex items-center justify-between md:justify-end">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <span className="tracking-widest uppercase text-[11px] font-semibold">SCROLL TO EXPLORE</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[var(--accent)]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
