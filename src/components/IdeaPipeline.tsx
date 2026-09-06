import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  meta: string;
}

export const IdeaPipeline: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(4); // Default to live product

  const stages: Stage[] = [
    {
      id: 'idea',
      step: '01',
      title: 'RAW INTUITION',
      tagline: 'The Hypothesis & Mental Model',
      description:
        'Every project starts with an architectural question: What if Stockfish chess evaluation ran locally in WebAssembly with zero server overhead and sub-25ms response times?',
      meta: 'RAW_HYPOTHESIS // CONSTRAINTS_IDENTIFIED',
    },
    {
      id: 'sketch',
      step: '02',
      title: 'ARCHITECTURAL WIREFRAME',
      tagline: 'Topology, Schemas & Spatial Layout',
      description:
        'Translating the mental model into blueprint wireframes: defining the split-screen HUD, FEN board state scrubbers, and Web Worker thread boundaries.',
      meta: 'LOW_FI_BLUEPRINT // BOUNDING_BOXES_DEFINED',
    },
    {
      id: 'design',
      step: '03',
      title: 'DESIGN SYSTEM & TOKENS',
      tagline: 'Typography, Tokens & Micro-Interactions',
      description:
        'Establishing typographic rhythm and contrast: Pairing bold grotesque display typography with editorial italics, establishing an 8px modular spacing system, and tuning high-contrast focus rings.',
      meta: 'SYSTEM_TOKENS // TYPOGRAPHIC_RHYTHM',
    },
    {
      id: 'code',
      step: '04',
      title: 'ENGINEERING & ZERO-TRUST',
      tagline: 'Type Systems, Web Workers & Hardening',
      description:
        'Writing resilient TypeScript logic: Offloading minimax evaluations to Web Workers, enforcing strict CSP headers, and sanitizing WebSocket input streams.',
      meta: 'PRODUCTION_TS // ZERO_TRUST_CSP',
    },
    {
      id: 'product',
      step: '05',
      title: 'SHIPPED RUNTIME',
      tagline: 'Live, Accessible, High-Performance Software',
      description:
        'The synthesis of design and engineering: A living, responsive production running at 60 FPS, passing WCAG AA accessibility, and deployed worldwide on Cloudflare edge.',
      meta: 'LIVE_PRODUCTION // SUB_25MS_LATENCY',
    },
  ];

  const current = stages[activeStageIndex];

  return (
    <section id="pipeline" className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[var(--border-subtle)] items-end">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[var(--accent)] font-bold">[ 04 ]</span>
              <span className="text-[var(--border-medium)]">/</span>
              <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
                PROCESS & TRANSMUTATION
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-[-0.035em] leading-[0.96] text-[var(--text-primary)]">
              CONCEPTION TO{' '}
              <span className="font-editorial italic font-normal text-[var(--accent)]">
                runtime.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[var(--text-muted)] lg:text-right text-left">
            <p className="leading-relaxed">
              How conceptual ideas transform systematically into robust, high-craft digital products.
            </p>
            <div className="flex items-center lg:justify-end gap-2 text-[var(--accent)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>INTERACTIVE MILESTONE SCRUBBER</span>
            </div>
          </div>
        </div>

        {/* Interactive Milestone Navigation Bar */}
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
            {stages.map((st, idx) => {
              const isSelected = activeStageIndex === idx;
              const isPassed = activeStageIndex >= idx;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 rounded-sm border text-left transition-all font-mono relative overflow-hidden ${
                    isSelected
                      ? 'bg-[var(--surface-2)] border-[var(--accent)] shadow-sm'
                      : isPassed
                      ? 'bg-[var(--surface-1)] border-[var(--border-subtle)] hover:border-[var(--border-medium)]'
                      : 'bg-transparent border-[var(--border-subtle)]/60 opacity-60 hover:opacity-100'
                  }`}
                  data-cursor="pointer"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span className={`font-bold ${isSelected ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}>
                      {st.step}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] hidden sm:block" />
                    )}
                  </div>
                  <div className="mt-2 font-display text-xs sm:text-sm font-bold text-[var(--text-primary)] truncate">
                    {st.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Range Slider Scrubber */}
          <div className="pt-8 flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--text-muted)] shrink-0">STAGE SCRUBBER:</span>
            <input
              type="range"
              min={0}
              max={4}
              step={1}
              value={activeStageIndex}
              onChange={(e) => setActiveStageIndex(Number(e.target.value))}
              className="w-full accent-[var(--accent)] cursor-pointer"
              aria-label="Scrub through creation pipeline stages"
            />
            <span className="font-mono text-xs font-bold text-[var(--accent)] shrink-0">
              {current.step} / 05
            </span>
          </div>
        </div>

        {/* The Dynamic Transmutation Stage Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-8">
          {/* Left Column (Cols 1-5): Narrative & Conceptual Reasoning */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-2.5 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] inline-block font-mono text-[11px] text-[var(--accent)] font-semibold">
              {current.meta}
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                {current.title}
              </h3>
              <p className="font-mono text-xs text-[var(--accent)] font-semibold tracking-wider uppercase">
                {current.tagline}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
              {current.description}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                disabled={activeStageIndex === 0}
                onClick={() => setActiveStageIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2.5 rounded-sm border border-[var(--border-subtle)] hover:bg-[var(--surface-2)] font-mono text-xs text-[var(--text-secondary)] disabled:opacity-30 transition-colors uppercase font-medium"
              >
                PREVIOUS
              </button>

              <button
                disabled={activeStageIndex === 4}
                onClick={() => setActiveStageIndex((prev) => Math.min(4, prev + 1))}
                className="px-5 py-2.5 rounded-sm bg-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white font-mono text-xs font-bold text-[var(--bg-main)] disabled:opacity-30 transition-colors flex items-center gap-2 uppercase tracking-wider"
              >
                <span>NEXT STEP</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column (Cols 6-12): Morphing Visual Artefact */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg bg-[var(--bg-main)] border border-[var(--border-medium)] p-6 sm:p-8 min-h-[380px] flex flex-col justify-between shadow-sm font-mono text-xs overflow-hidden text-left">
              {/* Stage Visuals */}
              {activeStageIndex === 0 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                    <span>// STAGE_01: MENTAL NOTE & HYPOTHESIS</span>
                    <span>TIMESTAMP: 01:24 AM</span>
                  </div>
                  <div className="p-6 rounded-sm bg-[var(--surface-1)] border border-dashed border-[var(--border-medium)] space-y-3 font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                    <p className="text-[var(--text-secondary)] italic">
                      "Why does online chess analysis require sending every move to a central server? Stockfish compiled to WebAssembly can evaluate 1,200,000 nodes/sec directly inside Chrome or Safari without leaking user game telemetry."
                    </p>
                    <div className="text-[11px] text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
                      [TARGET]: Zero server compute overhead · Client-side privacy · Sub-25ms analysis
                    </div>
                  </div>
                </div>
              )}

              {activeStageIndex === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                    <span>// STAGE_02: BLUEPRINT WIREFRAME (ASCII SCHEMA)</span>
                    <span className="text-[var(--accent)] font-semibold">SCALE: 1:1 DRAFT</span>
                  </div>
                  <pre className="p-4 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] overflow-x-auto leading-relaxed font-mono">
{`+-------------------------------------------------------------+
|  CHESSBUDDYBUZZ // ARCHITECTURE V1.0                        |
+------------------------------+------------------------------+
| [8x8 INTERACTIVE CHESSBOARD] | [STOCKFISH 18 ENGINE HUD]    |
| - Drag & drop FEN parser     | - Centipawn eval: +0.42      |
| - Best-move arrow vector     | - Depth: 24 ply              |
| - Move history notation      | - Multi-PV candidate lines   |
|                              | - Threat alert indicator     |
+------------------------------+------------------------------+
| [TIMELINE SCRUBBER: Move 1 ..................... Move 42]   |
+-------------------------------------------------------------+`}
                  </pre>
                </div>
              )}

              {activeStageIndex === 2 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                    <span>// STAGE_03: DESIGN SPECIFICATION & TOKENS</span>
                    <span className="text-[var(--accent)] font-semibold">GRID: 8PX MODULAR</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-2">
                      <span className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider font-semibold">TYPOGRAPHIC SCALE</span>
                      <div className="space-y-1 font-mono">
                        <div className="font-display font-extrabold text-base text-[var(--text-primary)]">Syne 800 (Display)</div>
                        <div className="font-editorial italic text-base text-[var(--accent)]">Instrument Serif (Accent)</div>
                        <div className="font-mono text-xs text-[var(--text-muted)]">JetBrains Mono (Data HUD)</div>
                      </div>
                    </div>
                    <div className="p-4 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-2">
                      <span className="text-[var(--text-muted)] text-[10px] uppercase tracking-wider font-semibold">TOKEN SYSTEM</span>
                      <div className="flex gap-2 pt-1">
                        <div className="w-8 h-8 rounded-sm bg-[#3860ff] border border-black/20" title="#3860ff Electric Cobalt" />
                        <div className="w-8 h-8 rounded-sm bg-[#090b10] border border-gray-700" title="#090b10 Ink" />
                        <div className="w-8 h-8 rounded-sm bg-[#121620] border border-gray-700" title="#121620 Surface" />
                        <div className="w-8 h-8 rounded-sm bg-[#e2e8f0] border border-gray-700" title="#e2e8f0 Text" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStageIndex === 3 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                    <span>// STAGE_04: HARDENED TYPESCRIPT IMPLEMENTATION</span>
                    <span className="text-[var(--accent)] font-semibold">WASM_WORKER.TS</span>
                  </div>
                  <pre className="p-4 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] overflow-x-auto leading-relaxed font-mono">
{`export class StockfishEngineWorker {
  private worker: Worker;
  private isEvaluating = false;

  constructor() {
    this.worker = new Worker('/workers/stockfish.wasm.js');
    this.worker.postMessage('uci');
    this.worker.postMessage('setoption name Threads value 4');
  }

  public evaluateFen(fen: string, depth = 22): Promise<EngineEval> {
    return new Promise((resolve) => {
      this.worker.postMessage(\`position fen \${sanitizeFen(fen)}\`);
      this.worker.postMessage(\`go depth \${depth}\`);
      // Parse UCI stdout info score cp 42 depth 22...
    });
  }
}`}
                  </pre>
                </div>
              )}

              {activeStageIndex === 4 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5 font-bold text-[var(--text-primary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)]" />
                      STAGE_05: SHIPPED LIVE PRODUCTION (CHESSBUDDYBUZZ)
                    </span>
                    <span className="text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-sm border border-[var(--accent)]/20 font-bold">
                      SUB-25MS LATENCY
                    </span>
                  </div>

                  <div className="p-5 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[var(--text-primary)] font-bold text-sm">Real-Time Evaluation HUD</span>
                        <span className="text-[var(--text-muted)] text-[11px] block">Stockfish 18 WASM Engine Status: ACTIVE</span>
                      </div>
                      <div className="text-right font-mono">
                        <span className="text-[var(--accent)] font-extrabold text-base block">+0.48</span>
                        <span className="text-[10px] text-[var(--text-muted)]">White slight edge</span>
                      </div>
                    </div>

                    <div className="w-full bg-[var(--surface-2)] h-2 rounded-full overflow-hidden flex border border-[var(--border-subtle)]">
                      <div className="bg-[var(--accent)] h-full w-[54%]" />
                      <div className="bg-[var(--surface-3)] h-full w-[46%]" />
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-[var(--text-muted)] border-t border-[var(--border-subtle)]">
                      <span>Depth: 22 ply · Nodes: 1,420,000/s</span>
                      <a
                        href="https://chessbuddybuzz.pages.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--accent)] hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>LAUNCH APP</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Telemetry Footer */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                <span>STAGE STATUS: VERIFIED</span>
                <span className="text-[var(--accent)]">PIPELINE CONTINUITY: 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
