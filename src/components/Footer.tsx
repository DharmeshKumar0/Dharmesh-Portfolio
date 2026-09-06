import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { generatePdfSummary } from '../utils/generatePdfSummary';
import { ArrowUp, ShieldCheck, FileDown, Check, Loader2, Sparkles, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPdf = () => {
    setIsGeneratingPdf(true);
    setPdfDownloaded(false);

    try {
      setTimeout(() => {
        generatePdfSummary();
        setIsGeneratingPdf(false);
        setPdfDownloaded(true);
        setTimeout(() => setPdfDownloaded(false), 4000);
      }, 350);
    } catch (err) {
      console.error('Failed to generate PDF summary:', err);
      setIsGeneratingPdf(false);
    }
  };

  return (
    <footer className="py-20 sm:py-28 bg-[var(--surface-1)] text-[var(--text-secondary)] border-t border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-16">
        
        {/* Top Footer Studio Masthead */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-[var(--border-subtle)] text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-[var(--surface-2)] border border-[var(--border-medium)] flex items-center justify-center font-display text-sm font-black text-[var(--accent)]">
                {portfolioData.monogram}
              </div>
              <div>
                <span className="font-display text-xl font-bold text-[var(--text-primary)] block">
                  {portfolioData.name}
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  Full-Stack Systems Engineer & Defensive Security Analyst
                </span>
              </div>
            </div>
            <p className="font-mono text-xs text-[var(--text-muted)] max-w-lg pt-1">
              B.Tech in Computer Science (2021–2025) · BKBIET / Bikaner Technical University, Pilani, Rajasthan
            </p>
          </div>

          {/* Live Telemetry Clock & Quick Actions */}
          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            <div className="px-4 py-2 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--text-muted)]">PILANI, IN:</span>
              <span className="font-bold text-[var(--text-primary)]">{istTime || '14:30:00'} IST</span>
            </div>

            {/* Dynamic PDF Download CTA */}
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className={`px-4 py-2.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                pdfDownloaded
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                  : 'bg-[var(--text-primary)] text-[var(--bg-main)] hover:bg-[var(--accent)] hover:text-white border-[var(--text-primary)]'
              }`}
              title="Download dynamically generated 2-page credentials PDF"
              aria-label="Download Portfolio Credentials Summary PDF"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>GENERATING PDF...</span>
                </>
              ) : pdfDownloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PDF SAVED!</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5" />
                  <span>DOWNLOAD CREDENTIALS (PDF)</span>
                </>
              )}
            </button>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-sm bg-[var(--surface-2)] hover:bg-[var(--text-primary)] text-[var(--text-primary)] hover:text-[var(--bg-main)] border border-[var(--border-subtle)] transition-all"
              aria-label="Scroll to top"
              data-cursor="pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic PDF Summary Banner Open Register (No Card Enclosure) */}
        <div className="py-8 border-y border-[var(--border-subtle)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--accent)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-bold tracking-wider uppercase">CLIENT-SIDE DOSSIER COMPILER</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Official Executive Portfolio & Credentials Summary (A4)
            </h4>
            <p className="text-xs text-[var(--text-secondary)] font-body leading-relaxed">
              Dynamically generates a 2-page print-ready curriculum vitae compiling verified academic credentials (B.Tech CS 2021–2025), flagship productions (ChessBuddyBuzz, AI Career Coach, Code-Reviewer), SOC Level 1 defensive procedures, skills taxonomy, and certifications directly in-browser.
            </p>
          </div>

          <button
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className={`px-6 py-3.5 rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2.5 shrink-0 ${
              pdfDownloaded
                ? 'bg-emerald-500 text-white'
                : 'bg-[var(--text-primary)] text-[var(--bg-main)] hover:bg-[var(--accent)] hover:text-white'
            }`}
            data-cursor="pointer"
          >
            {isGeneratingPdf ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>COMPILING DOSSIER...</span>
              </>
            ) : pdfDownloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>PDF READY & DOWNLOADED</span>
              </>
            ) : (
              <>
                <FileDown className="w-4 h-4" />
                <span>EXPORT PORTFOLIO PDF (A4)</span>
              </>
            )}
          </button>
        </div>

        {/* Navigation & Directory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-xs text-left">
          <div className="space-y-3">
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
              INDEX
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[var(--accent)] transition-colors">
                  01 / About Manifesto
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[var(--accent)] transition-colors">
                  02 / Selected Works
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-[var(--accent)] transition-colors">
                  03 / Idea Pipeline
                </a>
              </li>
              <li>
                <a href="#lab" className="hover:text-[var(--accent)] transition-colors">
                  04 / Atelier & Lab
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
              EXPERTISE
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#experience" className="hover:text-[var(--accent)] transition-colors">
                  05 / Chronology
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[var(--accent)] transition-colors">
                  06 / Capabilities
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[var(--accent)] transition-colors">
                  07 / Certifications
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[var(--accent)] transition-colors">
                  08 / First Principles
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
              CHANNELS
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                >
                  <span>GitHub @DharmeshKumar0</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn @dharmesh-kumar</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={`mailto:${portfolioData.email}`} className="hover:text-[var(--accent)] transition-colors">
                  Direct Email
                </a>
              </li>
              <li>
                <button
                  onClick={handleDownloadPdf}
                  className="text-left text-[var(--accent)] hover:underline flex items-center gap-1.5 pt-1 uppercase font-semibold"
                >
                  <FileDown className="w-3 h-3" />
                  <span>Export PDF Dossier</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
              STANDARDS
            </span>
            <div className="space-y-2 text-[11px] text-[var(--text-muted)]">
              <p className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                OWASP TOP 10 HARDENED
              </p>
              <p>WCAG AA ACCESSIBLE</p>
              <p>PREFERS-REDUCED-MOTION READY</p>
            </div>
          </div>
        </div>

        {/* Final Sign-off Statement */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
          <div>
            <span>© {new Date().getFullYear()} {portfolioData.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="tracking-widest uppercase text-[10px] text-[var(--text-secondary)]">
            BUILT WITH CURIOSITY · DESIGNED WITH INTENTION · HARDENED WITH ZERO TRUST.
          </div>
        </div>
      </div>
    </footer>
  );
};
