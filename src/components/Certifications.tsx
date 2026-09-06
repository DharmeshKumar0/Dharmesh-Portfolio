import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[var(--border-subtle)] items-end">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[var(--accent)] font-bold">[ 08 ]</span>
              <span className="text-[var(--border-medium)]">/</span>
              <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
                CREDENTIALS & COMPLIANCE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-[-0.035em] leading-[0.96] text-[var(--text-primary)]">
              ACCREDITED{' '}
              <span className="font-editorial italic font-normal text-[var(--accent)]">
                certifications.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[var(--text-muted)] lg:text-right text-left">
            <p className="leading-relaxed">
              Cisco Networking Academy, Google Cloud, CodeSoft, and BPTRC research institute credentials.
            </p>
            <div className="flex items-center lg:justify-end gap-2 text-[var(--accent)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>ALL CREDENTIALS VERIFIED</span>
            </div>
          </div>
        </div>

        {/* 12-Column Asymmetric Credentials Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-16 items-start">
          {/* Left Column (Cols 1-3): Verification Summary */}
          <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-28 text-left">
            <div className="space-y-3">
              <span className="font-display text-7xl 2xl:text-8xl font-black text-[var(--border-medium)]/30 block leading-none select-none">
                08
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                SECURITY & AUDITS
              </h3>
              <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed">
                Formal credentialing in threat detection, defensive SOC procedures, network routing, and distributed cloud computing.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] space-y-2 font-mono text-xs">
              <span className="text-[var(--accent)] font-bold block uppercase tracking-wider">
                COMPLIANCE RIGOR
              </span>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed">
                Certificates backed by hands-on lab completions, live packet capture audits, and multi-cloud architectural challenges.
              </p>
            </div>
          </div>

          {/* Right Column (Cols 4-12): Open Typographic Credentials Register */}
          <div className="lg:col-span-9 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)] text-left">
            {portfolioData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="py-8 sm:py-10 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-6"
              >
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                    <span className="text-[var(--accent)] font-bold">[{String(idx + 1).padStart(2, '0')}]</span>
                    <span className="text-[var(--text-muted)]">{cert.issuer}</span>
                    <span className="text-[var(--border-subtle)]">•</span>
                    <span className="text-[var(--text-muted)]">{cert.date}</span>
                    <span
                      className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm flex items-center gap-1 uppercase tracking-wider ${
                        cert.status === 'Active'
                          ? 'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20'
                          : cert.status === 'In Progress'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'text-[var(--text-muted)] border border-[var(--border-subtle)]'
                      }`}
                    >
                      {cert.status === 'In Progress' ? (
                        <Clock className="w-3 h-3" />
                      ) : (
                        <CheckCircle2 className="w-3 h-3" />
                      )}
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    {cert.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
                    {cert.summary}
                  </p>
                </div>

                {cert.credentialId && (
                  <div className="shrink-0 pt-2 font-mono text-xs flex md:flex-col items-start md:items-end gap-1.5 text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                      <ShieldCheck className="w-4 h-4" />
                      VERIFIED AUDIT
                    </span>
                    <span className="text-[11px] text-[var(--text-muted)]">ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
