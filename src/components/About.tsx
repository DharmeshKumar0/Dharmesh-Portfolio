import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { MapPin, GraduationCap, Copy, Check, ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* =========================================================================
            SECTION INDEX HEADER (Full Viewport Spread)
           ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-14 sm:mb-20 pb-6 border-b border-[var(--border-subtle)] font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent)] font-bold">[ 02 ]</span>
            <span className="text-[var(--border-medium)]">/</span>
            <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
              ABOUT & MANIFESTO
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[var(--text-muted)] text-[11px]">
            <span>PHILOSOPHY: RIGOROUS LOGIC × TACTILE BEAUTY</span>
            <span className="text-[var(--border-subtle)]">•</span>
            <span className="text-[var(--text-secondary)]">BTU PILANI CLASS OF 2025</span>
          </div>
          <span className="text-[var(--text-muted)] uppercase tracking-wider hidden xl:inline text-[11px]">
            FORM FOLLOWS INTENT · ARCHITECTURE DICTATES SCALE
          </span>
        </div>

        {/* =========================================================================
            PART 1: WIDE EDITORIAL PROCLAMATION (LEFT / CENTER / RIGHT)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 sm:pb-24 border-b border-[var(--border-subtle)] items-start">
          {/* Left Column (Cols 1-3): Section Number & Subtitle */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-6xl sm:text-7xl xl:text-8xl font-black text-[var(--border-medium)]/30 block leading-none select-none">
                02
              </span>
              <span className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest font-semibold block">
                MANIFESTO
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] uppercase">
              THE MINDSET
            </h2>
            <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed max-w-sm">
              An engineer with an eye for proportion, and a designer with an intuition for systems. Operating where software craft meets zero-trust defensive boundaries.
            </p>
          </div>

          {/* Center Column (Cols 4-8): Large Typographic Statement */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 text-left">
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.08]">
              “I design and engineer systems where technology dissolves into emotional experience — marrying{' '}
              <span className="font-editorial italic font-normal text-[var(--accent)]">
                fluid motion
              </span>{' '}
              with zero-trust engineering discipline.”
            </h3>
          </div>

          {/* Right Column (Cols 9-12): Supporting Summary Narrative */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-5 text-left border-l border-[var(--border-subtle)] pl-6 sm:pl-8">
            <div className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest font-semibold">
              CORE PHILOSOPHY
            </div>
            <p className="text-base text-[var(--text-secondary)] font-body leading-relaxed">
              {portfolioData.bio.lead}
            </p>
            <div className="pt-2 text-xs font-mono text-[var(--text-muted)] space-y-2">
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Zero client-side API credential leaks</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>WASM isolation for heavy algorithmic computation</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>Sub-50ms reactive state synchronization</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: EDITORIAL PROFILE DOSSIER & ARCHITECTURAL METRICS (OPEN CANVAS)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-16 sm:pt-20 items-start">
          
          {/* Left Block (Cols 1-4): Editorial Identity Dossier (No Card Enclosure) */}
          <div className="lg:col-span-4 w-full space-y-6 text-left">
            {/* Identity Subhead & Verification Status */}
            <div className="pb-3 border-b border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-[11px] tracking-wider text-[var(--text-primary)]">PROFILE DOSSIER</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-[10px] text-[var(--accent)] uppercase font-semibold">VERIFIED CANDIDATE</span>
              </div>
            </div>

            {/* Monogram & Title Directly on Canvas */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] flex items-center justify-center font-display text-xl font-bold text-[var(--text-primary)] shrink-0">
                <span>DK</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                  {portfolioData.name}
                </h3>
                <p className="text-xs text-[var(--accent)] font-semibold mt-0.5">Creative Developer & Engineer</p>
                <p className="text-[11px] text-[var(--text-muted)] flex items-center gap-1 mt-1 font-mono">
                  <MapPin className="w-3 h-3 text-[var(--text-muted)]" />
                  <span>{portfolioData.location}</span>
                </p>
              </div>
            </div>

            {/* Structured Verification Key-Value List */}
            <div className="space-y-3 pt-2 text-xs font-mono border-t border-[var(--border-subtle)]">
              <div className="flex justify-between items-baseline py-1 border-b border-[var(--border-subtle)]/60">
                <span className="text-[var(--text-muted)]">DEGREE:</span>
                <span className="text-[var(--text-primary)] font-medium text-right">B.Tech Computer Science</span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-[var(--border-subtle)]/60">
                <span className="text-[var(--text-muted)]">INSTITUTION:</span>
                <span className="text-[var(--text-primary)] font-medium text-right">BKBIET / BTU Pilani, RJ</span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-[var(--border-subtle)]/60">
                <span className="text-[var(--text-muted)]">GRADUATION:</span>
                <span className="text-[var(--text-primary)] font-medium text-right">Class of 2025</span>
              </div>
              <div className="flex justify-between items-baseline py-1">
                <span className="text-[var(--text-muted)]">AVAILABILITY:</span>
                <span className="text-[var(--accent)] font-bold text-right">Immediate Full-Time</span>
              </div>
            </div>

            {/* Typographic Tag Strip */}
            <div className="pt-1 flex flex-wrap gap-1.5 font-mono">
              {['React 19', 'Next.js', 'Stockfish 18', 'TypeScript', 'WebSockets', 'OWASP Top 10', 'SOC Defense', 'Tailwind CSS'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-sm text-[10px] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--text-primary)] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={handleCopyEmail}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-sm bg-[var(--surface-2)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-main)] border border-[var(--border-subtle)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)] transition-all"
                data-cursor="pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent)]" /> : <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />}
                <span>{copied ? 'EMAIL COPIED TO CLIPBOARD' : 'COPY DIRECT EMAIL'}</span>
              </button>
            </div>
          </div>

          {/* Right Block (Cols 5-12): Deep Narrative & Architectural Metrics */}
          <div className="lg:col-span-8 space-y-10">
            {/* Split Narrative Paragraphs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base text-[var(--text-secondary)] font-body leading-relaxed text-left">
              <div className="space-y-4">
                <p>
                  Every interface I construct is treated as an intentional production system: predictable state management with Zustand, offloaded heavy computations to non-blocking Web Workers, and defensive input sanitization to block XSS and injection vectors.
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  My design sensibility does not come from superficial templates, but from an obsession with spatial balance, mathematical grid proportions, and typography that guides human cognition effortlessly.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  {portfolioData.bio.body}
                </p>
                <div className="pt-4 border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                  <span className="text-[var(--accent)] font-semibold block mb-1">ACADEMIC HONORS //</span>
                  {portfolioData.bio.academic}
                </div>
              </div>
            </div>

            {/* Architectural Metrics Strip Across 4 Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[var(--border-subtle)] text-left">
              {portfolioData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1.5 border-l border-[var(--border-subtle)] pl-4">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[11px] text-[var(--accent)] font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Action Triggers */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-left">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] hover:bg-[var(--accent)] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
                data-cursor="pointer"
              >
                <span>OPEN SOURCE REPOSITORIES</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3.5 font-mono text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors uppercase tracking-wider border-b border-transparent hover:border-[var(--text-primary)]"
              >
                <span>VIEW APPLIED CHRONOLOGY [05]</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
