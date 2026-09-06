import React, { useState, useEffect } from 'react';

interface IndexItem {
  id: string;
  num: string;
  label: string;
}

const INDEX_ITEMS: IndexItem[] = [
  { id: 'hero', num: '01', label: 'PROLOGUE' },
  { id: 'about', num: '02', label: 'MANIFESTO' },
  { id: 'work', num: '03', label: 'WORKS' },
  { id: 'pipeline', num: '04', label: 'PROCESS' },
  { id: 'lab', num: '05', label: 'LAB' },
  { id: 'experience', num: '06', label: 'ARCHIVE' },
  { id: 'skills', num: '07', label: 'MATRIX' },
  { id: 'certifications', num: '08', label: 'AUDITS' },
  { id: 'philosophy', num: '09', label: 'THINKING' },
  { id: 'contact', num: '11', label: 'DISPATCH' },
];

export const VisualIndex: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }

      // Check intersecting sections
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = INDEX_ITEMS.length - 1; i >= 0; i--) {
        const item = INDEX_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      aria-label="Editorial Section Index"
      className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 font-mono text-[10px] select-none pointer-events-auto"
    >
      {/* Precision vertical progress track */}
      <div className="flex items-center gap-3 pr-1 pb-2 mb-1 border-b border-[var(--border-subtle)] text-[var(--text-muted)]">
        <span className="tracking-widest uppercase">INDEX</span>
        <span className="text-[var(--accent)] font-semibold">{Math.round(scrollProgress)}%</span>
      </div>

      <nav className="flex flex-col items-end gap-2">
        {INDEX_ITEMS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group flex items-center gap-2.5 py-1 focus:outline-none transition-all"
              data-cursor="pointer"
              title={`Jump to ${item.label}`}
            >
              {/* Text label: reveals on hover or when active */}
              <span
                className={`transition-all duration-300 uppercase tracking-wider ${
                  isActive
                    ? 'text-[var(--accent)] font-bold translate-x-0 opacity-100'
                    : 'text-[var(--text-muted)] group-hover:text-[var(--text-primary)] opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {item.num} // {item.label}
              </span>

              {/* Indicator tick mark */}
              <span
                className={`h-[1px] transition-all duration-300 ${
                  isActive
                    ? 'w-6 bg-[var(--accent)]'
                    : 'w-2 bg-[var(--border-medium)] group-hover:w-4 group-hover:bg-[var(--text-primary)]'
                }`}
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
