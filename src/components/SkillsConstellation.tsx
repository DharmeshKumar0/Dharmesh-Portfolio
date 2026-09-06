import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Check, Sparkles, Layers, ShieldCheck, Cpu, Code2, Terminal } from 'lucide-react';

interface TypographicDiscipline {
  id: string;
  number: string;
  name: string;
  italicWord: string;
  summary: string;
  relatedProjectIds: string[];
  primarySkills: string[];
}

const DISCIPLINES: TypographicDiscipline[] = [
  {
    id: 'design',
    number: '01',
    name: 'DESIGN &',
    italicWord: 'art direction',
    summary: 'Mathematical editorial grids, optical typography hierarchy, tactile materiality, and high-contrast digital architecture that rejects generic templates.',
    relatedProjectIds: ['chessbuddybuzz', 'portfolio-atelier'],
    primarySkills: ['Tailwind CSS', 'Figma', 'Typography Systems', 'Responsive Architecture', 'Motion Layouts'],
  },
  {
    id: 'engineering',
    number: '02',
    name: 'FULL-STACK',
    italicWord: 'engineering',
    summary: 'Desktop-grade browser responsiveness, multithreaded Web Workers for WASM Stockfish 18 execution, and AST syntax parsing with zero runtime leaks.',
    relatedProjectIds: ['chessbuddybuzz', 'ai-code-reviewer'],
    primarySkills: ['React 19', 'TypeScript', 'WebAssembly / WASM', 'Next.js', 'Node.js / Express', 'Zustand'],
  },
  {
    id: 'ai',
    number: '03',
    name: 'GENERATIVE',
    italicWord: 'intelligence',
    summary: 'Dual-model streaming orchestration (Gemini + Llama), sub-30ms time-to-first-byte token streaming, and semantic vector match calculations for ATS scoring.',
    relatedProjectIds: ['ai-career-coach', 'ai-code-reviewer'],
    primarySkills: ['Gemini API', 'LLM Streaming Telemetry', 'Prompt Engineering', 'Vector Similarity', 'AST Analysis'],
  },
  {
    id: 'security',
    number: '04',
    name: 'DEFENSIVE',
    italicWord: 'security & soc',
    summary: 'SOC L1 packet inspection, Wireshark PCAP triage, Snort intrusion detection, OWASP Top 10 injection defense, and RS256 asymmetric token authentication.',
    relatedProjectIds: ['network-security-lab', 'secure-auth-sentinel'],
    primarySkills: ['TryHackMe', 'Wireshark', 'Snort IDS', 'OWASP Top 10', 'JWT RS256', 'Zero-Trust Architecture'],
  },
  {
    id: 'interaction',
    number: '05',
    name: 'KINETIC',
    italicWord: 'interaction',
    summary: 'Spring-damped vector physics, cursor-reactive sinusoidal wave shaders, smooth lerp custom cursors, and tactile micro-interactions that feel alive.',
    relatedProjectIds: ['kinetic-physics-lab', 'chessbuddybuzz'],
    primarySkills: ['Canvas 2D API', 'Motion / Framer Motion', 'Vector Math', 'Interactive Shaders', 'Spring Dynamics'],
  },
  {
    id: 'systems',
    number: '06',
    name: 'PRODUCT',
    italicWord: 'architecture',
    summary: 'Translating complex requirements into end-to-end resilient products with strict state determinism, clean component isolation, and zero-leak APIs.',
    relatedProjectIds: ['chessbuddybuzz', 'ai-career-coach'],
    primarySkills: ['System Design', 'State Machines', 'REST & WebSockets', 'CI/CD Pipelines', 'Cloudflare Pages'],
  },
];

export const SkillsConstellation: React.FC = () => {
  const [activeDisciplineIndex, setActiveDisciplineIndex] = useState<number>(0);
  const [showFullMatrix, setShowFullMatrix] = useState(false);

  const activeDiscipline = DISCIPLINES[activeDisciplineIndex];

  // Match related project details from portfolioData
  const matchedProjects = portfolioData.projects.filter((p) =>
    activeDiscipline.relatedProjectIds.includes(p.id)
  );

  return (
    <section
      id="skills"
      className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 sm:mb-16 border-b border-[var(--border-subtle)] font-mono text-xs text-left">
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent)] font-bold">[ 07 ]</span>
            <span className="text-[var(--border-medium)]">/</span>
            <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
              CAPABILITIES & DISCIPLINE MATRIX
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[var(--text-muted)] text-[11px]">
            <span>TYPOGRAPHIC CAPABILITY SYSTEM</span>
            <span className="text-[var(--border-subtle)]">•</span>
            <span>HOVER TO INSPECT PRODUCTION PROOF</span>
            <span className="text-[var(--border-subtle)]">•</span>
            <span className="text-[var(--accent)] font-semibold">45+ VERIFIED SKILLS</span>
          </div>
        </div>

        {/* Section Title Intro */}
        <div className="pb-12 sm:pb-16 border-b border-[var(--border-subtle)] text-left space-y-4">
          <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest block font-semibold">
            APPLIED CAPABILITIES // NOT ABSTRACT KEYWORDS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] text-[var(--text-primary)] leading-[0.98]">
            Connected capabilities that yield{' '}
            <span className="font-editorial italic font-normal text-[var(--accent)]">
              tangible software.
            </span>
          </h2>
          <p className="font-body text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Hover over any discipline to examine the live engineering case studies, architectural proofs, and production tooling that substantiate it.
          </p>
        </div>

        {/* =========================================================================
            TYPOGRAPHIC CAPABILITY SYSTEM (Left: Massive Words | Right: Live Proof)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 pt-12 sm:pt-16 items-start text-left">
          
          {/* Left Column (Cols 1-7): Monumental Typographic List */}
          <div className="lg:col-span-7 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
            {DISCIPLINES.map((discipline, idx) => {
              const isActive = activeDisciplineIndex === idx;
              return (
                <div
                  key={discipline.id}
                  onMouseEnter={() => setActiveDisciplineIndex(idx)}
                  onClick={() => setActiveDisciplineIndex(idx)}
                  className={`group py-6 sm:py-8 px-4 -mx-4 transition-all duration-200 cursor-pointer select-none flex items-baseline justify-between gap-4 ${
                    isActive
                      ? 'bg-[var(--surface-1)]/60 text-[var(--text-primary)]'
                      : 'hover:bg-[var(--surface-1)]/20 text-[var(--text-secondary)]'
                  }`}
                  data-cursor="explore"
                  data-cursor-text="INSPECT"
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`font-mono text-xs sm:text-sm font-semibold transition-colors ${
                        isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                      }`}
                    >
                      {discipline.number}
                    </span>

                    <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-transform duration-200 group-hover:translate-x-2">
                      <span className={isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}>
                        {discipline.name}{' '}
                      </span>
                      <span className="font-editorial italic font-normal text-[var(--accent)]">
                        {discipline.italicWord}
                      </span>
                    </h3>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)] shrink-0">
                    <span className={isActive ? 'text-[var(--accent)] font-bold' : ''}>
                      {isActive ? '● ACTIVE' : '○ HOVER'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (Cols 8-12): Dynamic Project & Verification Proof Panel (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 pt-4 lg:pt-0">
            {/* Header of Active Proof */}
            <div className="p-6 sm:p-8 rounded-sm bg-[var(--surface-1)]/70 border border-[var(--border-subtle)] space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
                <div className="flex items-center gap-2 text-[var(--accent)] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="uppercase tracking-wider">
                    PROVEN BY DISCIPLINE [{activeDiscipline.number}]
                  </span>
                </div>
                <span className="text-[10px] text-[var(--text-muted)] uppercase">VERIFIED IN PRODUCTION</span>
              </div>

              {/* Narrative Definition */}
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
                {activeDiscipline.summary}
              </p>

              {/* Core Skill Chips */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                  VERIFIED SPECIALIZED TOOLING:
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono">
                  {activeDiscipline.primarySkills.map((sk) => (
                    <span
                      key={sk}
                      className="px-2.5 py-1 rounded-sm text-[11px] text-[var(--text-primary)] bg-[var(--bg-main)] border border-[var(--border-subtle)]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Linked Projects (Live Proof) */}
              <div className="space-y-3 pt-2 border-t border-[var(--border-subtle)]">
                <span className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-wider block font-semibold">
                  PRIMARY CODE ARTIFACTS & CASE STUDIES:
                </span>

                <div className="space-y-2.5">
                  {matchedProjects.map((proj) => (
                    <a
                      key={proj.id}
                      href={proj.liveUrl || proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/proj p-3.5 rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] hover:border-[var(--accent)] flex items-center justify-between transition-colors block"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-[var(--accent)] font-bold">
                            [{proj.number}]
                          </span>
                          <h4 className="font-display text-sm font-bold text-[var(--text-primary)] group-hover/proj:text-[var(--accent)] transition-colors">
                            {proj.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-[var(--text-muted)] font-body line-clamp-1">
                          {proj.subtitle}
                        </p>
                      </div>

                      <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover/proj:text-[var(--accent)] group-hover/proj:translate-x-0.5 group-hover/proj:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Toggle for Complete 45+ Skills Ledger */}
            <button
              onClick={() => setShowFullMatrix(!showFullMatrix)}
              className="w-full py-3 px-4 rounded-sm border border-[var(--border-medium)] hover:border-[var(--text-primary)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] flex items-center justify-between transition-colors"
            >
              <span>{showFullMatrix ? 'HIDE EXTENDED TAXONOMY' : 'VIEW ALL 45+ VERIFIED SKILLS & PROTOCOLS'}</span>
              <span className="text-[var(--accent)]">{showFullMatrix ? '▲' : '▼'}</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            EXTENDED 45+ SKILLS TAXONOMY LEDGER (EXPANDABLE ARCHITECTURAL TABLE)
           ========================================================================= */}
        {showFullMatrix && (
          <div className="mt-14 pt-10 border-t border-[var(--border-subtle)] space-y-10 text-left animate-in fade-in duration-300">
            <div className="flex flex-wrap items-end justify-between gap-4 pb-4 border-b border-[var(--border-subtle)]">
              <div>
                <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-wider block mb-1">
                  FULL ARCHITECTURAL COMPILATION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  COMPREHENSIVE COMPETENCY ARCHIVE
                </h3>
              </div>
              <p className="font-mono text-xs text-[var(--text-muted)]">
                Class of 2025 · Verified via production projects and TryHackMe labs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.skills.map((category) => (
                <div
                  key={category.title}
                  className="space-y-4 p-5 rounded-sm bg-[var(--surface-1)]/40 border border-[var(--border-subtle)]"
                >
                  <div className="pb-3 border-b border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[var(--text-primary)] uppercase tracking-wider">
                      {category.title}
                    </span>
                    <span className="text-[var(--accent)] font-semibold">[{category.skills.length}]</span>
                  </div>

                  <div className="space-y-2.5 font-mono text-xs">
                    {category.skills.map((s) => (
                      <div
                        key={s.name}
                        className="flex items-start justify-between gap-2 py-1 border-b border-[var(--border-subtle)]/40 last:border-b-0"
                      >
                        <div className="space-y-0.5">
                          <span className="text-[var(--text-primary)] font-medium block">
                            {s.name}
                          </span>
                          <span className="text-[10px] text-[var(--text-muted)] font-body block">
                            {s.description}
                          </span>
                        </div>
                        <span className="text-[10px] text-[var(--accent)] font-semibold shrink-0 uppercase">
                          {s.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
