import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Phone, MapPin, Linkedin, Github, Terminal, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-40 border-b border-[var(--border-subtle)] relative overflow-hidden"
      data-cursor="contact"
      data-cursor-text="CONTACT"
    >
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-8 mb-12 sm:mb-16 border-b border-[var(--border-subtle)] font-mono text-xs text-left">
          <div className="flex items-center gap-3">
            <span className="text-[var(--accent)] font-bold">[ 11 ]</span>
            <span className="text-[var(--border-medium)]">/</span>
            <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
              INQUIRIES & DISPATCH
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[var(--accent)] font-mono text-[11px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>TRANSMISSION PORT OPEN // SUB-24H DISPATCH</span>
          </div>
        </div>

        {/* Editorial Finale Headline */}
        <div className="pb-16 sm:pb-24 border-b border-[var(--border-subtle)] space-y-6 text-left">
          <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase flex items-center gap-2 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>CLASS OF 2025 GRADUATE · IMMEDIATE FULL-TIME AVAILABILITY</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] font-extrabold tracking-[-0.04em] leading-[0.9] text-[var(--text-primary)]">
            INITIATE THE
            <span className="block mt-2 font-editorial italic font-normal text-[var(--accent)]">
              runtime dialogue.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-[var(--text-secondary)] font-body max-w-3xl leading-relaxed">
            Actively seeking an engineering role across Software Engineering, Full-Stack Architecture, and Defensive Cyber Systems (SOC L1). Dedicated to building digital experiences where deep craft meets zero-trust reliability.
          </p>
        </div>

        {/* Action & Dispatch Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start text-left">
          {/* Left Column (Cols 1-7): Big Interactive Contact Buttons */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-5">
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                DIRECT DISPATCH CHANNELS
              </span>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={`mailto:${portfolioData.email}?subject=Opportunity%20Inquiry%20-%20Dharmesh%20Kumar`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-all shadow-sm"
                  data-cursor="pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>START A CONVERSATION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4.5 rounded-sm bg-[var(--surface-1)] hover:bg-[var(--surface-2)] border border-[var(--border-subtle)] hover:border-[var(--border-medium)] text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[var(--text-primary)] transition-all"
                  data-cursor="pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[var(--accent)]" /> : <Copy className="w-4 h-4 text-[var(--text-muted)]" />}
                  <span>{copied ? 'EMAIL COPIED' : 'COPY EMAIL'}</span>
                </button>
              </div>
            </div>

            {/* Editorial Profile Links */}
            <div className="pt-6 border-t border-[var(--border-subtle)] space-y-3">
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                NETWORK & CODE REPOSITORIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-b border-[var(--border-subtle)] hover:border-[var(--accent)] flex items-center justify-between transition-colors group"
                  data-cursor="pointer"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase">PROFESSIONAL NETWORK</span>
                    <div className="font-display font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[var(--accent)]" />
                      <span>LinkedIn Profile</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                </a>

                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 border-b border-[var(--border-subtle)] hover:border-[var(--accent)] flex items-center justify-between transition-colors group"
                  data-cursor="pointer"
                >
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase">OPEN-SOURCE CODE</span>
                    <div className="font-display font-bold text-base text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                      <Github className="w-4 h-4 text-[var(--accent)]" />
                      <span>GitHub @DharmeshKumar0</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 8-12): Dispatch Ledger */}
          <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[var(--border-subtle)] lg:pl-10">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] font-mono text-xs text-[var(--accent)]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span className="font-bold">TELEMETRY_DISPATCH</span>
              </div>
              <span className="text-[10px] text-[var(--accent)] uppercase font-bold">READY TO DEPLOY</span>
            </div>

            <div className="space-y-5 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">DIRECT EMAIL</span>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-base font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block break-all"
                >
                  {portfolioData.email}
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">TELEPHONE</span>
                <a
                  href={`tel:${portfolioData.phone}`}
                  className="text-base font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span>{portfolioData.phone}</span>
                </a>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">ACADEMIC BASE</span>
                <div className="text-sm font-medium text-[var(--text-secondary)] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span>BKBIET / BTU Pilani, Rajasthan, India</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
              <span>RESPONSE TIME: &lt; 24 HOURS</span>
              <span className="text-[var(--accent)] font-bold">CLASS OF 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
