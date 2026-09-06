export type ThemeMode = 'dark' | 'light';

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'Chess & Real-Time Engine' | 'Full-Stack & AI' | 'Cybersecurity & SOC' | 'Motion & Frontend' | 'Security Architecture' | 'Web Engineering & API';
  year: string;
  duration: string;
  role: string;
  organization: string;
  liveUrl?: string;
  githubUrl?: string;
  technologies: string[];
  summary: string;
  problem: string;
  approach: string;
  engineering: {
    architecture: string;
    keyFeatures: string[];
    securityHighlights?: string[];
    performanceScore?: string;
  };
  interactions: string;
  results: string[];
  lessons: string;
  accentColor: string;
  previewLayout: 'full-width' | 'split-reversed' | 'asymmetric' | 'horizontal-card' | 'showcase-card';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  badge: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
    description: string;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress' | 'Active';
  credentialId?: string;
  summary: string;
}

export interface PhilosophyItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface PersonalityInterest {
  category: string;
  items: string[];
  iconName: string;
}
