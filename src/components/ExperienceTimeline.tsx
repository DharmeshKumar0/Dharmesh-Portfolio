import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ChevronDown, ChevronUp, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  // Extract year for dramatic large typographic archive mark
  const getArchiveYear = (period: string, idx: number) => {
    if (period.includes('2024')) return '2024';
    if (period.includes('2023')) return idx === 2 ? '2023+' : '2023';
    return '2025';
  };

  return (
    <section
      id="experience"
      className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden"
    >
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 sm:mb-16 border-b border-[var(--border-subtle)] font-mono text-xs text-left">
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent)] font-bold">[ 06 ]</span>
            <span className="text-[var(--border-medium)]">/</span>
            <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
              APPLIED CHRONOLOGY & CHRONICLE
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[var(--text-muted)] text-[11px]">
            <span>CHRONOLOGICAL ARCHIVE</span>
            <span className="text-[var(--border-subtle)]">•</span>
            <span>BKBIET PILANI / CLASS OF 2025</span>
            <span className="text-[var(--border-subtle)]">•</span>
            <span className="text-[var(--accent)] font-semibold">PRODUCTION VERIFIED</span>
          </div>
        </div>

        {/* Editorial Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[var(--border-subtle)] items-end text-left">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest block font-semibold">
              EXPERIENCE ARCHIVE // 2021 – PRESENT
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-[-0.035em] text-[var(--text-primary)] leading-[0.98]">
              Applied track record &{' '}
              <span className="font-editorial italic font-normal text-[var(--accent)]">
                production roles.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-2 font-mono text-xs text-[var(--text-muted)] lg:text-right text-left">
            <p className="leading-relaxed">
              Software engineering internships, cloud architecture training, and peer technical leadership.
            </p>
            <div className="flex items-center lg:justify-end gap-2 text-[var(--accent)] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>IMMEDIATE FULL-TIME AVAILABILITY</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            EDITORIAL ARCHIVE (Massive Years, Subtle Hairlines, Interactive Expansion)
           ========================================================================= */}
        <div className="divide-y divide-[var(--border-subtle)] border-b border-[var(--border-subtle)] text-left">
          {portfolioData.experience.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const yearMark = getArchiveYear(item.period, idx);

            return (
              <article
                key={idx}
                className="py-12 sm:py-16 transition-colors group cursor-pointer"
                onClick={() => toggleExpand(idx)}
                data-cursor="explore"
                data-cursor-text={isExpanded ? 'COLLAPSE' : 'EXPAND'}
              >
                {/* 12-Column Architectural Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                  
                  {/* Column 1–3: Monumental Year Display */}
                  <div className="lg:col-span-3 flex items-baseline gap-4">
                    <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black text-[var(--border-medium)] group-hover:text-[var(--accent)] transition-colors leading-none select-none">
                      {yearMark}
                    </span>
                    <div className="font-mono text-xs space-y-1">
                      <span className="text-[var(--accent)] font-semibold block uppercase tracking-wider">
                        {item.type}
                      </span>
                      <span className="text-[var(--text-muted)] block text-[11px]">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Column 4–8: Role, Organization & Core Narrative */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                        <span className="text-[var(--text-primary)] font-semibold">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--text-muted)]" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {item.role}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed max-w-2xl">
                      {item.description}
                    </p>

                    {/* Clean Inline Tech Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono">
                      {item.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-sm text-[10px] text-[var(--text-muted)] border border-[var(--border-subtle)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 9–12: Interactive Control & Status Trigger */}
                  <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4 font-mono text-xs">
                    <span className="text-[11px] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors uppercase tracking-wider">
                      {isExpanded ? 'COLLAPSE SPECS [-]' : 'INSPECT DELIVERABLES [+]'}
                    </span>
                    <div className="p-2 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] group-hover:border-[var(--accent)] transition-colors text-[var(--text-primary)]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Interactive Expanded Architectural Ledger (Subtle lines, zero cards) */}
                {isExpanded && (
                  <div
                    className="mt-8 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Empty left gutter on desktop to preserve alignment */}
                    <div className="hidden lg:block lg:col-span-3 font-mono text-xs text-[var(--text-muted)]">
                      <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] block font-semibold mb-2">
                        DELIVERABLE SPECIFICATIONS:
                      </span>
                      <span>Verified via production pull requests and engineering retrospectives.</span>
                    </div>

                    {/* Detailed Accomplishments */}
                    <div className="lg:col-span-9 space-y-4">
                      <div className="space-y-3 font-body text-sm sm:text-base text-[var(--text-secondary)]">
                        {item.bulletPoints.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-3">
                            <span className="font-mono text-xs text-[var(--accent)] font-bold mt-1 shrink-0">
                              [{String(bIdx + 1).padStart(2, '0')}]
                            </span>
                            <p className="leading-relaxed">{bullet}</p>
                          </div>
                        ))}
                      </div>

                      {/* Extended Technologies List */}
                      <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
                          VERIFIED STACK & PROTOCOLS USED:
                        </span>
                        <div className="flex flex-wrap gap-1.5 font-mono">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-sm text-[11px] text-[var(--text-primary)] bg-[var(--surface-1)] border border-[var(--border-subtle)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Archive Summary Ledger */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)] text-left">
          <div>
            <span>ACADEMIC FOUNDATION: </span>
            <span className="text-[var(--text-primary)] font-semibold">BKBIET / B.Tech Computer Science (2021 – 2025)</span>
          </div>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--accent)] hover:underline font-bold uppercase tracking-wider"
          >
            <span>OFFICIAL CURRICULUM VITAE (LINKEDIN)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
