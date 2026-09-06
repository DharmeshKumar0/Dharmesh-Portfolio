import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { ProjectCaseStudy, ThemeMode } from './types';
import { CustomCursor } from './components/CustomCursor';
import { VisualIndex } from './components/VisualIndex';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { ProjectGallery } from './components/ProjectGallery';
import { IdeaPipeline } from './components/IdeaPipeline';
import { CaseStudyModal } from './components/CaseStudyModal';
import { LabSection } from './components/LabSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsConstellation } from './components/SkillsConstellation';
import { Certifications } from './components/Certifications';
import { HowIThink } from './components/HowIThink';
import { PersonalitySection } from './components/PersonalitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WorkbenchConsole } from './components/WorkbenchConsole';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [isWorkbenchOpen, setIsWorkbenchOpen] = useState(false);

  // Initialize theme from storage or default to dark
  useEffect(() => {
    const saved = localStorage.getItem('dk_portfolio_theme') as ThemeMode | null;
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Global Easter Egg Keyboard Listener (Ctrl+K, Shift+D, or ~)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName);
      if (isInput) return;

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsWorkbenchOpen((prev) => !prev);
      } else if (e.shiftKey && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        setIsWorkbenchOpen((prev) => !prev);
      } else if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsWorkbenchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('dk_portfolio_theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-400 selection:bg-[#3860ff]/25 selection:text-[#3860ff]">
      {/* Desktop Custom Smooth Cursor */}
      <CustomCursor />

      {/* Persistent Subtle Section Index Track */}
      <VisualIndex />

      {/* Persistent Minimal Sticky Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenWorkbench={() => setIsWorkbenchOpen(true)}
      />

      {/* Main Structural Flow */}
      <main id="main-content">
        {/* 00 / Hero Section with Interactive Cybernetic Blueprint Canvas */}
        <Hero />

        {/* Dynamic Infinite Marquee */}
        <Marquee />

        {/* 01 / Personal Introduction & Dossier */}
        <About />

        {/* 02 / Selected Works with Editorial Layout Variations */}
        <ProjectGallery
          projects={portfolioData.projects}
          onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        />

        {/* 02.5 / Transmutation Pipeline (Built from Ideas Visual Moment) */}
        <IdeaPipeline />

        {/* 03 / Interactive Security & Kinetic Lab Playground */}
        <LabSection />

        {/* 04 / Applied Experience & Leadership Timeline */}
        <ExperienceTimeline />

        {/* 05 / Categorized Skills Taxonomy & Deep Context Inspector */}
        <SkillsConstellation />

        {/* 06 / Official Verified Certifications */}
        <Certifications />

        {/* 07 / Core Philosophy & Engineering Principles */}
        <HowIThink />

        {/* 08 / Intellectual Pursuits & Personal Touch */}
        <PersonalitySection />

        {/* 09 / Impactful Finale Contact & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Deep Dive Case Study Drawer / Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
          onSelectProject={(next) => setSelectedCaseStudy(next)}
          allProjects={portfolioData.projects}
        />
      )}

      {/* Easter Egg Atelier Workbench Console */}
      <WorkbenchConsole
        isOpen={isWorkbenchOpen}
        onClose={() => setIsWorkbenchOpen(false)}
      />
    </div>
  );
}
