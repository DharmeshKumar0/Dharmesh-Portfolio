import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ThemeMode } from '../types';
import { Sun, Moon, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenWorkbench?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenWorkbench }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [monogramClicks, setMonogramClicks] = useState(0);

  const handleMonogramClick = (e: React.MouseEvent) => {
    setMonogramClicks((prev) => {
      const next = prev + 1;
      if (next >= 2 && onOpenWorkbench) {
        onOpenWorkbench();
        return 0;
      }
      return next;
    });
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'Work', href: '#work' },
    { num: '02', label: 'About', href: '#about' },
    { num: '03', label: 'Lab', href: '#lab' },
    { num: '04', label: 'Exp', href: '#experience' },
    { num: '05', label: 'Skills', href: '#skills' },
    { num: '06', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[color-mix(in_srgb,var(--bg-main)_85%,transparent)] backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between">
          {/* Brand Identity / Monogram (Left Edge) */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={handleMonogramClick}
              className="group flex items-center gap-3 focus:outline-none text-left"
              data-cursor="pointer"
              title="Click twice or press Shift+D / Ctrl+K for Atelier Workbench"
            >
              {/* Signature Design Element: Architectural Monogram Box */}
              <div className="h-8 px-2 rounded-sm bg-[var(--surface-1)] border border-[var(--border-medium)] group-hover:border-[var(--accent)] flex items-center justify-center font-mono text-[11px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-all">
                <span>DK</span>
                <span className="text-[var(--text-muted)] mx-0.5">/</span>
                <span className="text-[var(--accent)]">25</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-display text-xs font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-none">
                  {portfolioData.name.toUpperCase()}
                </span>
                <span className="font-mono text-[9px] text-[var(--text-muted)] tracking-widest mt-1">
                  DESIGN & CREATIVE ENGINEERING
                </span>
              </div>
            </button>

            {/* Atelier trigger mark */}
            {onOpenWorkbench && (
              <button
                onClick={onOpenWorkbench}
                className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono text-[var(--text-muted)] hover:text-[var(--accent)] bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] transition-colors"
                title="Open Atelier Workbench Console (Shift+D or Ctrl+K)"
              >
                <span>ATELIER</span>
                <span className="text-[var(--accent)]">~</span>
              </button>
            )}
          </div>

          {/* Editorial Numbered Navigation (Desktop) - Spread across center */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-baseline gap-1.5 font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-1"
                data-cursor="pointer"
              >
                <span className="text-[10px] text-[var(--accent)] group-hover:text-[var(--accent)] transition-colors font-semibold">
                  {link.num}
                </span>
                <span className="tracking-wider uppercase group-hover:underline underline-offset-4 decoration-[var(--accent)]/40">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Right Edge Controls Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Live Availability Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-secondary)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[var(--text-muted)]">AVAILABLE // 2025</span>
            </div>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-md bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              data-cursor="pointer"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-mono font-bold tracking-wider uppercase bg-[var(--text-primary)] text-[var(--bg-main)] hover:bg-[var(--accent)] hover:text-white transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              data-cursor="pointer"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm bg-[var(--surface-1)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[var(--bg-main)]/98 backdrop-blur-xl lg:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[var(--border-subtle)] text-xs font-mono text-[var(--accent)]">
              <ShieldCheck className="w-4 h-4" />
              <span>DHARMESH KUMAR — 2025 PORTFOLIO</span>
            </div>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-baseline gap-3 text-2xl sm:text-3xl font-display font-extrabold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors py-2 border-b border-[var(--border-subtle)]/50"
                >
                  <span className="font-mono text-xs text-[var(--accent)]">{link.num}</span>
                  <span className="uppercase">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border-subtle)] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span>Available for Software Engineering & Creative Roles</span>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
