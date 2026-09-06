import React, { useEffect, useState } from 'react';
import { ProjectCaseStudy } from '../types';
import {
  X,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Terminal,
  ArrowRight,
  Zap,
  CheckCircle,
  Layers,
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectProject: (p: ProjectCaseStudy) => void;
  allProjects: ProjectCaseStudy[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [activeLayer, setActiveLayer] = useState<'all' | 'idea' | 'problem' | 'process' | 'engineering' | 'results'>('all');

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Reset to 'all' on project change
  useEffect(() => {
    setActiveLayer('all');
  }, [project?.id]);

  if (!project) return null;

  // Find next project index
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[var(--bg-main)] border border-[var(--border-medium)] shadow-2xl overflow-hidden text-[var(--text-primary)] font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Header Bar */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 bg-[var(--bg-main)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[var(--accent)] px-2.5 py-0.5 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)]">
              DOSSIER {project.number}
            </span>
            <span className="hidden sm:inline font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
              // {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-mono text-[var(--bg-main)] font-bold bg-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white transition-colors"
                data-cursor="pointer"
              >
                <span>RUN PRODUCTION</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-1)] border border-[var(--border-subtle)] transition-colors"
                data-cursor="pointer"
              >
                <span>REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm hover:bg-[var(--surface-2)] text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-transparent hover:border-[var(--border-subtle)] transition-colors focus:outline-none"
              aria-label="Close dossier"
              data-cursor="pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progressive Disclosure Layer Filter Rail */}
        <div className="px-6 sm:px-8 py-2.5 bg-[var(--surface-1)]/40 border-b border-[var(--border-subtle)] flex items-center gap-2 overflow-x-auto font-mono text-[11px] shrink-0">
          <span className="text-[var(--text-muted)] mr-1 flex items-center gap-1 shrink-0">
            <Layers className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="uppercase font-semibold">VIEW LAYER:</span>
          </span>
          {[
            { id: 'all', label: 'FULL SPECIFICATION' },
            { id: 'idea', label: '01 GENESIS' },
            { id: 'problem', label: '02 THREAT SURFACE' },
            { id: 'process', label: '03 ARCHITECTURE' },
            { id: 'engineering', label: '04 RUNTIME TS' },
            { id: 'results', label: '05 OUTCOMES' },
          ].map((tab) => {
            const isActive = activeLayer === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLayer(tab.id as any)}
                className={`px-2.5 py-1 rounded-sm whitespace-nowrap transition-colors uppercase font-medium ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-main)] font-bold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-1)] border border-[var(--border-subtle)]'
                }`}
                data-cursor="pointer"
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10 text-left">
          {/* Section 01: Hero Intro */}
          {(activeLayer === 'all' || activeLayer === 'idea') && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span>01 // THE ARCHITECTURAL GENESIS</span>
              </div>
              <h2 id="case-study-title" className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)]">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] font-body leading-relaxed max-w-3xl">
                {project.subtitle}
              </p>

              {/* Metadata Key-Value Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)] font-mono text-xs mt-6">
                <div className="p-3 bg-[var(--bg-main)]">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">TIMELINE</span>
                  <span className="font-semibold text-[var(--text-primary)] mt-1 block">{project.year}</span>
                </div>
                <div className="p-3 bg-[var(--bg-main)]">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">ROLE</span>
                  <span className="font-semibold text-[var(--text-primary)] mt-1 block">{project.role}</span>
                </div>
                <div className="p-3 bg-[var(--bg-main)]">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">ORGANIZATION</span>
                  <span className="font-semibold text-[var(--text-primary)] mt-1 block">{project.organization}</span>
                </div>
                <div className="p-3 bg-[var(--bg-main)]">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase">CATEGORY</span>
                  <span className="font-semibold text-[var(--accent)] mt-1 block">{project.category}</span>
                </div>
              </div>

              {/* Tech stack badge list */}
              <div className="pt-2 flex flex-wrap gap-1.5 font-mono">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section 02: Problem & Threat Surface */}
          {(activeLayer === 'all' || activeLayer === 'problem') && (
            <div className="space-y-3 pt-6 border-t border-[var(--border-subtle)] animate-in fade-in duration-200">
              <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest flex items-center gap-2 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                <span>02 // THE CHALLENGE & THREAT BOUNDARY</span>
              </div>
              <div className="p-5 border border-[var(--border-subtle)] bg-[var(--surface-1)]/40 text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
                {project.problem}
              </div>
            </div>
          )}

          {/* Section 03: The Architectural Approach */}
          {(activeLayer === 'all' || activeLayer === 'process') && (
            <div className="space-y-3 pt-6 border-t border-[var(--border-subtle)] animate-in fade-in duration-200">
              <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest flex items-center gap-2 font-semibold">
                <Cpu className="w-4 h-4 text-[var(--accent)]" />
                <span>03 // ARCHITECTURAL STRATEGY & ERGONOMICS</span>
              </div>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
                {project.approach}
              </p>

              <div className="pt-3">
                <span className="font-mono text-[10px] text-[var(--text-muted)] block mb-1 uppercase tracking-wider font-semibold">
                  INTERACTION & ERGONOMIC DETAILS:
                </span>
                <p className="text-sm text-[var(--text-secondary)] font-body leading-relaxed p-4 border border-[var(--border-subtle)] bg-[var(--surface-1)]/30">
                  {project.interactions}
                </p>
              </div>
            </div>
          )}

          {/* Section 04: Engineering Deep-Dive */}
          {(activeLayer === 'all' || activeLayer === 'engineering') && (
            <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)] animate-in fade-in duration-200">
              <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest flex items-center gap-2 font-semibold">
                <Terminal className="w-4 h-4 text-[var(--accent)]" />
                <span>04 // SYSTEM TOPOLOGY & EXECUTION LOGIC</span>
              </div>
              <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-1)]/40 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                <span className="text-[var(--accent)] block mb-1 font-semibold">// Micro-Architecture:</span>
                {project.engineering.architecture}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-1)]/20 space-y-2">
                  <span className="font-mono text-xs font-bold text-[var(--text-primary)] block uppercase tracking-wider">
                    Core Engineering Features
                  </span>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-body">
                    {project.engineering.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] shrink-0 font-bold">▸</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.engineering.securityHighlights && (
                  <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-1)]/20 space-y-2">
                    <span className="font-mono text-xs font-bold text-[var(--accent)] block uppercase tracking-wider">
                      Security & Hardening Highlights
                    </span>
                    <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-body">
                      {project.engineering.securityHighlights.map((sec, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] shrink-0 font-bold">✔</span>
                          <span>{sec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {project.engineering.performanceScore && (
                <div className="flex items-center gap-2.5 p-3 rounded-sm bg-[var(--surface-1)] border border-[var(--border-medium)] text-xs font-mono text-[var(--accent)] font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>BENCHMARK AUDIT: {project.engineering.performanceScore}</span>
                </div>
              )}
            </div>
          )}

          {/* Section 05: Measurable Results & Reflection */}
          {(activeLayer === 'all' || activeLayer === 'results') && (
            <div className="space-y-4 pt-6 border-t border-[var(--border-subtle)] animate-in fade-in duration-200">
              <div className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest font-semibold">
                05 // MEASURABLE OUTCOMES & REFLECTION
              </div>
              <div className="space-y-2">
                {project.results.map((res, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 border border-[var(--border-subtle)] bg-[var(--surface-1)]/30 text-xs sm:text-sm text-[var(--text-secondary)] font-body">
                    <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              <blockquote className="p-4 border-l-2 border-[var(--accent)] bg-[var(--surface-1)]/40 text-sm text-[var(--text-secondary)] italic font-body">
                “{project.lessons}”
              </blockquote>
            </div>
          )}

          {/* Section 06: Next Project Link Transition */}
          <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <div>
              <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block">
                NEXT CASE STUDY
              </span>
              <span className="font-display text-lg font-bold text-[var(--text-primary)]">
                {nextProject.number} — {nextProject.title}
              </span>
            </div>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[var(--text-primary)] text-[var(--bg-main)] font-mono text-xs font-bold hover:bg-[var(--accent)] hover:text-white transition-all"
            >
              <span>VIEW NEXT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
