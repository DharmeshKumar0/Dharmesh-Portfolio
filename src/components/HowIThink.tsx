import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const HowIThink: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[var(--border-subtle)] items-end">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[var(--accent)] font-bold">[ 09 ]</span>
              <span className="text-[var(--border-medium)]">/</span>
              <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
                HEURISTICS & CRAFT CONVICTIONS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-[-0.035em] leading-[0.96] text-[var(--text-primary)]">
              FIRST{' '}
              <span className="font-editorial italic font-normal text-[var(--accent)]">
                principles.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[var(--text-muted)] lg:text-right text-left">
            <p className="leading-relaxed">
              The core engineering heuristics that guide architectural choices, defensive hardness, and runtime kinetic quality.
            </p>
          </div>
        </div>

        {/* Editorial Numbered Heuristics Grid */}
        <div className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)]">
          {portfolioData.philosophies.map((item) => (
            <div
              key={item.number}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start py-10 sm:py-14 hover:bg-[var(--surface-1)]/40 transition-colors text-left"
            >
              <div className="lg:col-span-2 font-display text-5xl sm:text-6xl font-black text-[var(--border-medium)]/50 group-hover:text-[var(--accent)] transition-colors leading-none select-none">
                {item.number}
              </div>

              <div className="lg:col-span-5 space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] tracking-tight">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-wider">
                  {item.tagline}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-base sm:text-lg text-[var(--text-secondary)] font-body leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
