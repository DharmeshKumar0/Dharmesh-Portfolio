import React from 'react';
import { ProjectCaseStudy } from '../types';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowUpRight,
  Shield,
  Cpu,
  Lock,
  Sparkles,
  Github,
  Radio,
  Code2,
  ExternalLink,
  Bot,
  Zap,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  Sliders,
  Database,
  Search,
  Check
} from 'lucide-react';

interface ProjectGalleryProps {
  projects: ProjectCaseStudy[];
  onOpenCaseStudy: (project: ProjectCaseStudy) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects, onOpenCaseStudy }) => {
  const chessProject = projects.find((p) => p.id === 'chessbuddybuzz');
  const careerProject = projects.find((p) => p.id === 'ai-career-coach');
  const codeReviewerProject = projects.find((p) => p.id === 'code-reviewer');
  const socProject = projects.find((p) => p.id === 'network-security-lab');
  const authProject = projects.find((p) => p.id === 'secure-auth-sentinel');
  const showcaseProjects = projects.filter((p) =>
    ['gemini-app', 'amazon-clone', 'github-finder', 'gsap-animated-interface'].includes(p.id)
  );

  return (
    <section id="work" className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* =========================================================================
            EDITORIAL ARCHITECTURAL SECTION HEADER — Wide Viewport Spread
           ========================================================================= */}
        <div className="border-b border-[var(--border-subtle)] pb-12 sm:pb-16 text-left">
          {/* Top Architectural Drafting Coordinates */}
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)] pb-6 mb-8 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent)] font-bold">SPEC // PROD_INDEX_2025</span>
              <span>•</span>
              <span>COORD // 28.3670° N, 75.6025° E</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">RAJGARH / PILANI</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--text-secondary)] font-semibold">ZERO-TRUST + HIGH PERFORMANCE</span>
              <span>•</span>
              <span className="text-[var(--accent)] font-bold">5 FLAGSHIPS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-[var(--accent)] font-bold">[ 03 ]</span>
                <span className="text-[var(--border-medium)]">/</span>
                <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
                  SELECTED WORK & ARTIFACTS
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-[-0.035em] leading-[0.96] text-[var(--text-primary)]">
                ENGINEERED{' '}
                <span className="font-editorial italic font-normal text-[var(--accent)]">
                  productions.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[var(--text-muted)] lg:text-right text-left">
              <p className="leading-relaxed">
                Real-time chess engines, generative AI reasoning systems, defensive security laboratories, and verified open-source repositories.
              </p>
              <a
                href="https://github.com/DharmeshKumar0?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline font-semibold"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/DharmeshKumar0</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DYNAMIC PROJECT SHOWCASE: NON-REPETITIVE, ART-DIRECTED RHYTHMS
           ========================================================================= */}
        <div>
          
          {/* =========================================================================
              PROJECT 01: CHESSBUDDYBUZZ (ASYMMETRIC 5:7 SPREAD WITH GRID-TOUCHING WASM CONSOLE)
             ========================================================================= */}
          {chessProject && (
            <div
              className="py-16 sm:py-24 border-b border-[var(--border-subtle)] relative"
              data-cursor="project"
              data-cursor-text="CHESS"
            >
              {/* Drafting Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] pb-4 mb-8 border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                  <span>+</span>
                  <span className="tracking-wider uppercase">PROJECT ARCHITECTURE [01] // CHESS INTELLIGENCE MATRIX</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>WASM STOCKFISH 18</span>
                  <span>•</span>
                  <span>SUB-25MS UCI PROTOCOL</span>
                  <span>•</span>
                  <span className="text-[var(--accent)] font-semibold">60 FPS VERIFIED</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-y border-[var(--border-subtle)]">
                {/* Left Side (Columns 1–5): Typography & Architectural Overview */}
                <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 lg:border-r border-b lg:border-b-0 border-[var(--border-subtle)] space-y-7 text-left flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                      <span className="font-display text-5xl sm:text-6xl font-black text-[var(--accent)] block leading-none select-none">
                        01
                      </span>
                      <span className="px-2.5 py-1 rounded-sm bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 flex items-center gap-1.5 font-bold tracking-wider uppercase text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                        FLAGSHIP PRODUCTION
                      </span>
                      <span className="text-[var(--text-muted)]">{chessProject.year}</span>
                      <span className="text-[var(--border-subtle)]">•</span>
                      <span className="text-[var(--text-secondary)] font-semibold">{chessProject.category}</span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] leading-[1.04]">
                        {chessProject.title}
                      </h3>
                      <p className="text-base sm:text-lg text-[var(--accent)] font-editorial italic leading-snug">
                        {chessProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-body">
                      {chessProject.summary}
                    </p>

                    {/* Applied Engineering Ledger */}
                    <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2.5 font-mono text-xs">
                      <div className="flex justify-between items-center pb-1.5 border-b border-[var(--border-subtle)]">
                        <span className="text-[var(--text-muted)]">ENGINE ENGINE:</span>
                        <span className="text-[var(--text-primary)] font-semibold">Stockfish 18 WASM</span>
                      </div>
                      <div className="flex justify-between items-center pb-1.5 border-b border-[var(--border-subtle)]">
                        <span className="text-[var(--text-muted)]">THREADING MODEL:</span>
                        <span className="text-[var(--accent)] font-semibold">Dedicated Web Worker</span>
                      </div>
                      <div className="flex justify-between items-center pb-1.5 border-b border-[var(--border-subtle)]">
                        <span className="text-[var(--text-muted)]">MULTIPLAYER:</span>
                        <span className="text-[var(--text-primary)] font-semibold">WebSockets / Socket.io</span>
                      </div>
                      <div className="flex justify-between items-center pb-1.5 border-b border-[var(--border-subtle)]">
                        <span className="text-[var(--text-muted)]">STATE MACHINE:</span>
                        <span className="text-[var(--text-primary)] font-semibold">Zustand Reactive Store</span>
                      </div>
                    </div>

                    {/* Tech Stack Strip */}
                    <div className="flex flex-wrap gap-1.5 pt-1 font-mono">
                      {chessProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-sm text-[11px] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--text-primary)] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Live Demo + GitHub Code + Architecture Case Study */}
                  <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-3">
                    <a
                      href={chessProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] font-mono text-xs font-bold tracking-wider uppercase hover:bg-[var(--accent)] hover:text-white transition-all shadow-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>LAUNCH APPLICATION</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={chessProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3.5 rounded-sm bg-[var(--surface-1)] text-[var(--text-primary)] font-mono text-xs font-semibold uppercase tracking-wider hover:text-[var(--accent)] border border-[var(--border-subtle)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>SOURCE</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => onOpenCaseStudy(chessProject)}
                      className="inline-flex items-center gap-1.5 px-3 py-3.5 font-mono text-xs text-[var(--accent)] hover:underline uppercase tracking-wider font-semibold"
                    >
                      <span>CASE STUDY [01]</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Right Side (Columns 6–12): Large Grid-Touching WASM Stockfish Interface */}
                <div className="lg:col-span-7 bg-[var(--surface-1)]/40 flex flex-col justify-between">
                  {/* Top Bar Flush with Grid */}
                  <div className="flex items-center justify-between p-4 sm:px-6 border-b border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-ping" />
                      <span className="text-[var(--text-primary)] font-bold">STOCKFISH 18 · WASM THREAD</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--accent)] font-semibold">UCI WORKER: ACTIVE</span>
                      <span>•</span>
                      <span className="text-[var(--text-muted)]">chessbuddybuzz.pages.dev</span>
                    </div>
                  </div>

                  {/* Main Visual Board & Move Stream Flush against dividers */}
                  <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                    {/* Centipawn Position Evaluation Ribbon */}
                    <div className="space-y-2 font-mono text-xs text-left">
                      <div className="flex justify-between items-center text-[11px]">
                        <span className="text-[var(--text-muted)] uppercase tracking-wider">POSITION EVALUATION BAR:</span>
                        <span className="text-[var(--accent)] font-bold">+1.84 (WHITE ADVANTAGE)</span>
                      </div>
                      <div className="h-3 w-full bg-[var(--surface-2)] rounded-full overflow-hidden flex border border-[var(--border-subtle)]">
                        <div className="h-full bg-[var(--accent)] transition-all duration-500" style={{ width: '64%' }} />
                        <div className="h-full bg-[var(--surface-3)] transition-all duration-500" style={{ width: '36%' }} />
                      </div>
                      <div className="flex justify-between text-[10px] text-[var(--text-muted)] font-mono pt-0.5">
                        <span>SEARCH DEPTH: 22 / 99</span>
                        <span>NODES ANALYZED: 2,840,119</span>
                        <span>EVAL SPEED: 1.42 MNPS</span>
                      </div>
                    </div>

                    {/* Integrated 8x8 Board & UCI Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                      {/* 8x8 Chessboard Simulation with coordinate markers */}
                      <div className="sm:col-span-5 flex flex-col items-center">
                        <div className="relative p-2 bg-[var(--surface-2)] border border-[var(--border-medium)] rounded-sm shadow-sm">
                          <div className="grid grid-cols-8 gap-0.5 w-44 h-44 sm:w-48 sm:h-48">
                            {Array.from({ length: 64 }).map((_, i) => {
                              const row = Math.floor(i / 8);
                              const col = i % 8;
                              const isLight = (row + col) % 2 === 0;
                              const isHighlightFrom = i === 28; // d5
                              const isHighlightTo = i === 45; // f3
                              const isKing = i === 4;
                              const isQueen = i === 21;

                              return (
                                <div
                                  key={i}
                                  className={`relative flex items-center justify-center font-display text-xs ${
                                    isHighlightFrom || isHighlightTo
                                      ? 'bg-[var(--accent)] text-black font-black'
                                      : isLight
                                      ? 'bg-[var(--surface-3)] text-[var(--text-primary)]'
                                      : 'bg-[var(--surface-1)] text-[var(--text-secondary)]'
                                  }`}
                                >
                                  {isHighlightFrom && '♞'}
                                  {isHighlightTo && '★'}
                                  {isQueen && '♛'}
                                  {isKing && '♚'}
                                </div>
                              );
                            })}
                          </div>
                          {/* File coordinate labels A-H */}
                          <div className="flex justify-between px-1 pt-1 text-[8px] font-mono text-[var(--text-muted)]">
                            <span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span><span>H</span>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-[var(--text-muted)] mt-2">
                          BOARD FEN: r1bqkb1r/pppp1ppp/2n5/4p3/2B1n3/5N2/PPPP1PPP/RNBQK2R
                        </span>
                      </div>

                      {/* Best Move & Live UCI Message Stream */}
                      <div className="sm:col-span-7 space-y-3 font-mono text-xs text-left">
                        <div className="p-3.5 rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] space-y-1.5">
                          <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                            <span className="uppercase tracking-wider">STOCKFISH BEST CONTINUATION:</span>
                            <span className="text-[var(--accent)] font-bold">MATE IN 2 DETECTED</span>
                          </div>
                          <p className="font-mono text-sm font-bold text-[var(--accent)]">
                            18... Nf6+ 19. Kh1 Qh3#
                          </p>
                          <p className="text-[11px] text-[var(--text-muted)] leading-relaxed font-body">
                            Engine verified win via Web Worker UCI protocol with non-blocking 60 FPS animation dispatch.
                          </p>
                        </div>

                        {/* UCI Stream Output Terminal */}
                        <div className="p-3 bg-[var(--bg-main)] border border-[var(--border-subtle)] rounded-sm font-mono text-[10px] space-y-1 text-[var(--text-muted)] overflow-x-auto">
                          <div className="text-[var(--accent)] font-semibold">&gt; uciok</div>
                          <div>&gt; isready -&gt; readyok</div>
                          <div className="text-[var(--text-primary)]">
                            &gt; info depth 22 score cp 184 nodes 2840119 nps 1420059 pv f6h5 g4h5 d8h4
                          </div>
                          <div className="text-[var(--accent)]">
                            &gt; bestmove f6h5 ponder g4h5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Multi-room Telemetry Bar Touching the Grid */}
                  <div className="p-4 sm:px-6 border-t border-[var(--border-subtle)] font-mono text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse" />
                      <span>SOCKET.IO CLUSTER // ROOM #4829 ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] text-[var(--text-muted)]">
                      <span>SYNC PING: 22ms</span>
                      <span>•</span>
                      <span>REACT 19 + VITE 8 + ZUSTAND</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              PROJECT 02: AI CAREER COACH (INVERTED 2-TIER PANORAMIC COMPOSITION TOUCHING GRID)
             ========================================================================= */}
          {careerProject && (
            <div
              className="py-16 sm:py-24 border-b border-[var(--border-subtle)] relative"
              data-cursor="project"
              data-cursor-text="EXPLORE"
            >
              {/* Drafting Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] pb-4 mb-8 border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                  <span>+</span>
                  <span className="tracking-wider uppercase">PROJECT ARCHITECTURE [02] // GENERATIVE ADVISORY PIPELINE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>NEXT.JS APP ROUTER</span>
                  <span>•</span>
                  <span>DUAL LLM STREAMING (CLAUDE + GEMINI)</span>
                  <span>•</span>
                  <span className="text-[var(--accent)] font-semibold">90+ LIGHTHOUSE</span>
                </div>
              </div>

              {/* Tier 1: Editorial Dossier & Specifications Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 text-left items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="font-display text-5xl sm:text-6xl font-black text-[var(--accent)] block leading-none select-none">
                      02
                    </span>
                    <span className="text-[var(--text-muted)]">{careerProject.year}</span>
                    <span className="text-[var(--border-subtle)]">•</span>
                    <span className="text-[var(--accent)] font-semibold uppercase">{careerProject.category}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] leading-[1.04]">
                      {careerProject.title}
                    </h3>
                    <p className="text-base sm:text-lg text-[var(--accent)] font-editorial italic leading-snug">
                      {careerProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-body max-w-2xl">
                    {careerProject.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 font-mono">
                    {careerProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-sm text-[11px] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--text-primary)] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0">
                  {/* Ledger Matrix */}
                  <div className="pt-2 border-t lg:border-t-0 border-[var(--border-subtle)] space-y-3 font-mono text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-[var(--border-subtle)]">
                      <span className="text-[var(--text-muted)]">SSR PERFORMANCE:</span>
                      <span className="text-[var(--accent)] font-bold">90+ Lighthouse Score</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[var(--border-subtle)]">
                      <span className="text-[var(--text-muted)]">CREDENTIAL HYGIENE:</span>
                      <span className="text-[var(--text-primary)] font-semibold">Zero Leaked API Keys</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[var(--border-subtle)]">
                      <span className="text-[var(--text-muted)]">IDENTITY PROTOCOL:</span>
                      <span className="text-[var(--text-primary)] font-semibold">Firebase OAuth 2.0 RBAC</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-[var(--border-subtle)]">
                      <span className="text-[var(--text-muted)]">INFERENCE STREAM:</span>
                      <span className="text-[var(--text-primary)] font-semibold">Claude 3.5 + Gemini Dual</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(careerProject)}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] hover:bg-[var(--accent)] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>EXPLORE ARCHITECTURE DOSSIER</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Tier 2: Panoramic Edge-to-Edge AI Diagnostics Console Touching the Grid */}
              <div className="border-t border-[var(--border-subtle)] pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-y border-[var(--border-subtle)] text-left font-mono">
                  
                  {/* Pane A: Dual-Model Stream Telemetry */}
                  <div className="p-6 sm:p-8 space-y-4 bg-[var(--surface-1)]/30">
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pb-3 border-b border-[var(--border-subtle)]">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span className="font-bold text-[var(--text-primary)]">STREAM TELEMETRY</span>
                      </div>
                      <span className="text-[10px] text-[var(--accent)]">24ms TTFB</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                        <span>PROMPT TOKENS: 820</span>
                        <span>COMPLETION: 412</span>
                      </div>
                      <p className="p-3 rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-body text-xs leading-relaxed">
                        "Optimized resume vector for Software Development & Cloud Security. Recommendation: Highlight OWASP Top 10 mitigation and GCP IAM access models."
                      </p>
                      <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pt-1">
                        <span>TEMPERATURE: 0.2</span>
                        <span>TOP_P: 0.95</span>
                      </div>
                    </div>
                  </div>

                  {/* Pane B: ATS Semantic Vector Match Matrix */}
                  <div className="p-6 sm:p-8 space-y-4 bg-[var(--surface-1)]/30">
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pb-3 border-b border-[var(--border-subtle)]">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span className="font-bold text-[var(--text-primary)]">ATS VECTOR MATCH</span>
                      </div>
                      <span className="text-[10px] text-[var(--accent)] font-bold">94.2% FIT</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="space-y-1">
                        <div className="flex justify-between text-[11px] text-[var(--text-muted)]">
                          <span>TARGET: CLOUD + FULL-STACK</span>
                          <span className="text-[var(--text-primary)] font-semibold">94.2%</span>
                        </div>
                        <div className="h-2 w-full bg-[var(--surface-2)] rounded-full overflow-hidden flex border border-[var(--border-subtle)]">
                          <div className="h-full bg-[var(--accent)]" style={{ width: '94%' }} />
                        </div>
                      </div>

                      <div className="p-3 rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] space-y-1.5 text-[11px]">
                        <div className="text-[var(--text-muted)]">// Matched Competency Tokens:</div>
                        <div className="flex flex-wrap gap-1 text-[10px]">
                          <span className="text-[var(--accent)] font-semibold">+OWASP Top 10</span>
                          <span className="text-[var(--accent)] font-semibold">+OAuth 2.0</span>
                          <span className="text-[var(--accent)] font-semibold">+Prisma ORM</span>
                          <span className="text-[var(--accent)] font-semibold">+WebSockets</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pane C: Zero-Trust RBAC & Session Gate */}
                  <div className="p-6 sm:p-8 space-y-4 bg-[var(--surface-1)]/30">
                    <div className="flex items-center justify-between text-xs text-[var(--text-muted)] pb-3 border-b border-[var(--border-subtle)]">
                      <div className="flex items-center gap-2">
                        <Lock className="w-3.5 h-3.5 text-[var(--accent)]" />
                        <span className="font-bold text-[var(--text-primary)]">RBAC SESSION GATE</span>
                      </div>
                      <span className="text-[10px] text-[var(--accent)] font-bold">STRICT 200 OK</span>
                    </div>

                    <div className="space-y-2.5 text-xs">
                      <div className="p-3 rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] space-y-1 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">SUB_CLAIM:</span>
                          <span className="text-[var(--text-primary)] font-semibold">usr_dk_2025</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">ROLE:</span>
                          <span className="text-[var(--accent)] font-semibold">COACH_USER_AUTH</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[var(--text-muted)]">COOKIE:</span>
                          <span className="text-[var(--text-secondary)]">httpOnly; SameSite=Strict</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)] pt-1">
                        <span>RATE LIMIT: 20 REQ/MIN</span>
                        <span className="text-[var(--accent)] font-semibold">CSRF VERIFIED</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              PROJECT 03: AI CODE REVIEWER (3-COLUMN ARCHITECTURAL INSPECTION SPREAD)
             ========================================================================= */}
          {codeReviewerProject && (
            <div
              className="py-16 sm:py-24 border-b border-[var(--border-subtle)] relative"
              data-cursor="project"
              data-cursor-text="REVIEW"
            >
              {/* Drafting Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] pb-4 mb-8 border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
                <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                  <span>+</span>
                  <span className="tracking-wider uppercase">PROJECT ARCHITECTURE [03] // SYNTAX & SECURITY AUDIT SUITE</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>MERN FULL-STACK</span>
                  <span>•</span>
                  <span>AST SYNTAX PARSER</span>
                  <span>•</span>
                  <span className="text-[var(--accent)] font-semibold">SUB-1.2S AUDIT LATENCY</span>
                </div>
              </div>

              {/* 3-Column Architectural Inspection Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x border-y border-[var(--border-subtle)] text-left">
                
                {/* Column 1 (Cols 1-3): Metadata & Specifications */}
                <div className="lg:col-span-3 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="font-display text-5xl font-black text-[var(--accent)] block leading-none select-none">
                        03
                      </span>
                      <div>
                        <span className="text-[var(--text-muted)] block">{codeReviewerProject.year}</span>
                        <span className="text-[var(--accent)] font-semibold uppercase">{codeReviewerProject.category}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2 font-mono text-xs">
                      <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider">SYSTEM METRICS:</div>
                      <div className="flex justify-between text-[var(--text-secondary)]">
                        <span>LATENCY:</span>
                        <span className="text-[var(--text-primary)] font-semibold">Sub-1.2s Review</span>
                      </div>
                      <div className="flex justify-between text-[var(--text-secondary)]">
                        <span>RULESET:</span>
                        <span className="text-[var(--accent)] font-semibold">OWASP Top 10</span>
                      </div>
                      <div className="flex justify-between text-[var(--text-secondary)]">
                        <span>PARSER:</span>
                        <span className="text-[var(--text-primary)] font-semibold">Babel / AST</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[var(--border-subtle)] space-y-2">
                      <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">TECHNOLOGIES:</div>
                      <div className="flex flex-wrap gap-1 font-mono">
                        {codeReviewerProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-sm text-[10px] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[var(--border-subtle)] space-y-2">
                    <a
                      href={codeReviewerProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] hover:bg-[var(--accent)] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GITHUB REPO</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <button
                      onClick={() => onOpenCaseStudy(codeReviewerProject)}
                      className="w-full text-center py-2 font-mono text-xs text-[var(--accent)] hover:underline uppercase tracking-wider font-semibold block"
                    >
                      VIEW CASE STUDY →
                    </button>
                  </div>
                </div>

                {/* Column 2 (Cols 4-7): The Narrative & Engineering Proof */}
                <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] leading-tight">
                        {codeReviewerProject.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[var(--accent)] font-editorial italic">
                        {codeReviewerProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                      {codeReviewerProject.summary}
                    </p>

                    <div className="p-4 rounded-sm bg-[var(--surface-1)]/40 border border-[var(--border-subtle)] space-y-2 font-mono text-xs">
                      <span className="text-[var(--accent)] font-bold block uppercase tracking-wider text-[11px]">
                        CORE ARCHITECTURAL VERIFICATIONS:
                      </span>
                      <div className="space-y-1.5 text-[11px] text-[var(--text-secondary)]">
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-[var(--accent)] shrink-0" />
                          <span>OWASP Top 10 injection detection across Node/Express APIs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-[var(--accent)] shrink-0" />
                          <span>Algorithmic complexity reduction: O(n²) to O(n log n)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-[var(--accent)] shrink-0" />
                          <span>Automatic identification of uncleaned React listeners</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] font-mono text-xs text-[var(--text-muted)] flex items-center justify-between">
                    <span>STATUS: PRODUCTION AUDIT SUITE</span>
                    <span className="text-[var(--accent)] font-bold">READY</span>
                  </div>
                </div>

                {/* Column 3 (Cols 8-12): Live Code Audit Terminal (Touching Grid Directly) */}
                <div className="lg:col-span-5 bg-[var(--surface-1)]/50 p-6 sm:p-8 font-mono text-xs flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)]">
                      <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>SYNTAX_DIFF_INSPECTOR</span>
                      </div>
                      <span className="text-[10px] text-[var(--accent)] font-bold">AUDIT PASSED</span>
                    </div>

                    {/* Realistic Code Diff */}
                    <div className="p-4 rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] font-mono text-[11px] space-y-1.5 overflow-x-auto leading-relaxed">
                      <div className="text-[var(--text-muted)]">// 1. Algorithmic Complexity Refactoring:</div>
                      <div className="text-red-400 bg-red-950/20 px-1 py-0.5 rounded-sm">
                        - const matched = items.filter(i =&gt; queryList.includes(i.id)); // O(n²)
                      </div>
                      <div className="text-emerald-400 bg-emerald-950/20 px-1 py-0.5 rounded-sm">
                        + const querySet = new Set(queryList); // O(n)
                      </div>
                      <div className="text-emerald-400 bg-emerald-950/20 px-1 py-0.5 rounded-sm">
                        + const matched = items.filter(i =&gt; querySet.has(i.id));
                      </div>

                      <div className="text-[var(--text-muted)] pt-2">// 2. Security Sanitization Check:</div>
                      <div className="flex justify-between text-[var(--text-primary)]">
                        <span>✔ SQL / NoSQL Injection:</span>
                        <span className="text-[var(--accent)] font-bold">0 DETECTED</span>
                      </div>
                      <div className="flex justify-between text-[var(--text-primary)]">
                        <span>✔ Event Listener Cleanup:</span>
                        <span className="text-emerald-400 font-semibold">VERIFIED</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                    <span>EXPRESS 4.x + REACT 19</span>
                    <span className="text-[var(--accent)] font-semibold">AUDITED IN 1.18s</span>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* =========================================================================
              PROJECTS 04 & 05: DEFENSIVE SECURITY & IDENTITY PROTOCOL (OPEN ASYMMETRIC SPLIT)
             ========================================================================= */}
          <div className="py-16 sm:py-24 border-b border-[var(--border-subtle)] relative">
            {/* Drafting Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] pb-4 mb-8 border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
              <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                <span>+</span>
                <span className="tracking-wider uppercase">DEFENSIVE SECURITY LABORATORIES & PROTOCOLS [04 / 05]</span>
              </div>
              <div className="flex items-center gap-3">
                <span>SOC L1 ANALYSIS</span>
                <span>•</span>
                <span>WIRESHARK & PCAP</span>
                <span>•</span>
                <span className="text-[var(--accent)] font-semibold">ZERO-TRUST RSA-256</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x border-y border-[var(--border-subtle)] text-left">
              {/* Project 04: SOC Lab */}
              {socProject && (
                <div
                  className="group p-6 sm:p-10 lg:p-12 space-y-7 cursor-pointer hover:bg-[var(--surface-1)]/20 transition-colors flex flex-col justify-between"
                  onClick={() => onOpenCaseStudy(socProject)}
                  data-cursor="project"
                  data-cursor-text="INSPECT"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[var(--border-subtle)]">
                      <span className="text-[var(--accent)] font-display text-4xl font-black">04</span>
                      <span className="text-[var(--text-muted)] uppercase tracking-wider">{socProject.category}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {socProject.title}
                      </h4>
                      <p className="text-sm text-[var(--accent)] font-editorial italic">
                        {socProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
                      {socProject.summary}
                    </p>

                    {/* Visual Packet Matrix Touching Grid */}
                    <div className="p-4 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] font-mono text-[11px] space-y-2 text-[var(--text-muted)]">
                      <div className="flex justify-between text-[var(--text-primary)]">
                        <span>[TCP SYN] 192.168.1.104:443</span>
                        <span>FLAGS: [S] SEQ=0 WIN=64240</span>
                      </div>
                      <div className="flex justify-between text-[var(--accent)] font-bold">
                        <span>[ALERT] OWASP-A03: SQLi Probe</span>
                        <span>INTERCEPTED &amp; DROPPED</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-[var(--text-muted)]">
                        <span>SNORT RULE: SID#20014</span>
                        <span>WIRESHARK FILTER: ip.addr==192.168.1.104</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                    <span className="text-[var(--accent)] font-semibold">TRYHACKME / WIRESHARK / SOC L1</span>
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all">
                      READ CASE STUDY →
                    </span>
                  </div>
                </div>
              )}

              {/* Project 05: Auth Sentinel */}
              {authProject && (
                <div
                  className="group p-6 sm:p-10 lg:p-12 space-y-7 cursor-pointer hover:bg-[var(--surface-1)]/20 transition-colors flex flex-col justify-between"
                  onClick={() => onOpenCaseStudy(authProject)}
                  data-cursor="project"
                  data-cursor-text="AUDIT"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-[var(--border-subtle)]">
                      <span className="text-[var(--accent)] font-display text-4xl font-black">05</span>
                      <span className="text-[var(--text-muted)] uppercase tracking-wider">{authProject.category}</span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {authProject.title}
                      </h4>
                      <p className="text-sm text-[var(--accent)] font-editorial italic">
                        {authProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed">
                      {authProject.summary}
                    </p>

                    {/* Visual Cryptographic Token Inspector Touching Grid */}
                    <div className="p-4 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] font-mono text-[11px] space-y-2 text-[var(--text-muted)]">
                      <div className="flex justify-between text-[var(--text-primary)]">
                        <span>ALGORITHM: RS256 ASYMMETRIC</span>
                        <span>KEY_SIZE: 2048 BIT</span>
                      </div>
                      <div className="flex justify-between text-[var(--accent)] font-semibold">
                        <span>ROTATING REFRESH TOKEN</span>
                        <span>HTTP-ONLY STRICT COOKIE</span>
                      </div>
                      <div className="flex justify-between text-[10px] text-[var(--text-muted)]">
                        <span>PAYLOAD: sub: 'usr_dk_2025'</span>
                        <span>EXPIRY: 15m (Auto-rotates)</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                    <span className="text-[var(--accent)] font-semibold">ZERO-TRUST SECURITY ARCHITECTURE</span>
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all">
                      READ CASE STUDY →
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPOTLIGHT CLIENTS & LAB DEPLOYMENTS (OPEN ARCHITECTURAL LEDGER TABLE)
           ========================================================================= */}
        <div className="mt-20 sm:mt-28 pt-12 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--border-subtle)]">
            <div>
              <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block mb-1">
                SPOTLIGHT APPLICATIONS & DEPLOYMENTS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                PRODUCTION CLIENTS & LAB EXPERIMENTS
              </h3>
            </div>
            <p className="font-mono text-xs text-[var(--text-muted)] sm:text-right">
              Live interactive deployments · click to launch or inspect
            </p>
          </div>

          <div className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]">
            {showcaseProjects.map((proj) => (
              <div
                key={proj.id}
                className="group py-8 hover:bg-[var(--surface-1)]/30 px-3 -mx-3 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-[var(--accent)] font-bold">[{proj.number}]</span>
                    <span className="text-[var(--text-muted)]">{proj.category}</span>
                    {proj.liveUrl && (
                      <span className="px-2 py-0.5 rounded-sm bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] flex items-center gap-1 border border-[var(--accent)]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        LIVE
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {proj.title}
                  </h4>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-body">
                    {proj.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1 font-mono">
                    {proj.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-sm text-[10px] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-colors"
                    >
                      <span>LAUNCH</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-sm bg-[var(--surface-1)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>CODE</span>
                    </a>
                  )}
                  <button
                    onClick={() => onOpenCaseStudy(proj)}
                    className="font-mono text-xs text-[var(--accent)] hover:underline transition-colors uppercase pl-2 font-semibold"
                  >
                    DETAILS →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            EDITORIAL DIRECTORY INDEX: GITHUB OPEN SOURCE ECOSYSTEM
           ========================================================================= */}
        <div className="mt-24 sm:mt-32 pt-16 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Github className="w-4 h-4 text-[var(--accent)]" />
                <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase">
                  OPEN SOURCE DIRECTORY
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                GITHUB REPOSITORIES (@DharmeshKumar0)
              </h3>
            </div>
            <a
              href="https://github.com/DharmeshKumar0?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <span>VIEW ALL REPOSITORIES</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Typographic Directory Table Ledger */}
          <div className="border-y border-[var(--border-subtle)] divide-y divide-[var(--border-subtle)]">
            {portfolioData.githubRepositories.map((repo, idx) => (
              <div
                key={repo.name}
                className="group py-6 sm:py-7 hover:bg-[var(--surface-1)]/40 px-3 -mx-3 transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                {/* Col 1-5: Repo Name & Description */}
                <div className="md:col-span-5 space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[var(--text-muted)]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                    >
                      <span>{repo.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    {repo.isFlagship && (
                      <span className="px-2 py-0.5 rounded-sm bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-[9px] font-bold border border-[var(--accent)]/20 uppercase">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] font-body line-clamp-2 pl-7">
                    {repo.description}
                  </p>
                </div>

                {/* Col 6-8: Language & Tags */}
                <div className="md:col-span-4 flex flex-wrap items-center gap-2 pl-7 md:pl-0">
                  <div className="flex items-center gap-2 mr-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="font-mono text-xs text-[var(--text-muted)]">{repo.language}</span>
                  </div>
                  {repo.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-sm text-[10px] font-mono text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Col 9-12: Direct Actions */}
                <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3 pl-7 md:pl-0 font-mono text-xs">
                  {repo.liveUrl && (
                    <a
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] font-bold hover:bg-[var(--accent)] hover:text-white transition-colors uppercase text-[11px]"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  <a
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[var(--surface-1)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors uppercase text-[11px]"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>CODE</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
