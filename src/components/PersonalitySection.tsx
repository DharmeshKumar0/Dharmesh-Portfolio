import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Compass, Sparkles } from 'lucide-react';

export const PersonalitySection: React.FC = () => {
  const iconMap: Record<string, any> = {
    Terminal,
    Compass,
    Sparkles,
  };

  return (
    <section id="interests" className="py-24 sm:py-32 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex items-center gap-3 mb-12 font-mono text-xs text-left">
          <span className="text-[var(--accent)] font-bold">[ 10 ]</span>
          <span className="text-[var(--border-medium)]">/</span>
          <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
            INTELLECTUAL PURSUITS & CURIOSITIES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left pt-6 border-t border-[var(--border-subtle)]">
          {portfolioData.interests.map((interest, idx) => {
            const Icon = iconMap[interest.iconName] || Sparkles;
            return (
              <div
                key={idx}
                className="space-y-6 md:border-r last:border-r-0 border-[var(--border-subtle)] md:pr-10"
              >
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[var(--accent)]" />
                    <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                      DISCIPLINE 0{idx + 1}
                    </span>
                  </div>
                  <span className="font-display text-2xl font-black text-[var(--border-medium)] select-none">
                    0{idx + 1}
                  </span>
                </div>

                <h4 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {interest.category}
                </h4>

                <div className="flex flex-wrap gap-2 pt-1 font-mono">
                  {interest.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-3 py-1.5 rounded-sm text-xs text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[var(--text-primary)] transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
