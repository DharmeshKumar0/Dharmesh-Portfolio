import React from 'react';

export const Marquee: React.FC = () => {
  const items = [
    'PRODUCT DESIGN & CRAFT',
    'CREATIVE TECHNOLOGY',
    'FULL-STACK ARCHITECTURE',
    'WASM & WEB WORKERS',
    'ZERO-TRUST SECURITY',
    'KINETIC MICRO-INTERACTIONS',
    'GENERATIVE AI SYSTEMS',
    'SOC L1 INCIDENT DEFENSE',
    'ACCESSIBILITY & TYPOGRAPHY'
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-[var(--border-subtle)] bg-[var(--surface-1)]/40 select-none">
      <div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
        {/* First set */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((text, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="font-display text-xs sm:text-sm tracking-[0.25em] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors uppercase">
                {text}
              </span>
              <span className="text-[var(--accent)]/50 text-xs">◆</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless infinite loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((text, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8">
              <span className="font-display text-xs sm:text-sm tracking-[0.25em] font-semibold text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors uppercase">
                {text}
              </span>
              <span className="text-[var(--accent)]/50 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[marquee_40s_linear_infinite] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};
