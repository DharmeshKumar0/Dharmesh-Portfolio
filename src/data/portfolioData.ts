import { ProjectCaseStudy, ExperienceItem, SkillCategory, CertificationItem, PhilosophyItem, PersonalityInterest } from '../types';

export const portfolioData = {
  name: 'Dharmesh Kumar',
  monogram: 'DK',
  role: 'Creative Full-Stack Developer & Security Engineer',
  eyebrow: 'B.TECH COMPUTER SCIENCE · PILANI / RAJASTHAN, INDIA',
  headline: 'BUILDING DIGITAL EXPERIENCES WHERE SECURITY & CRAFT CONVERGE.',
  headlineSub: 'Engineered with strict zero-trust rigor, animated with fluid tactile precision.',
  location: 'Rajgarh, Rajasthan, India',
  email: 'dharmeshkumar08.in@gmail.com',
  phone: '+91-9509656755',
  github: 'https://github.com/DharmeshKumar0',
  linkedin: 'https://linkedin.com/in/dharmesh-kumar',
  availability: 'Available for Software Development & Security Roles',
  
  bio: {
    lead: 'I am a Computer Science graduate (2025) who operates at the intersection of high-performance frontend craftsmanship and defensive cybersecurity.',
    body: 'Too often, developers treat security as a compliance afterthought, and security engineers treat user experience as a secondary compromise. My work bridges both disciplines: building modern web applications featuring server-side rendering, fluid kinetic motion, and generative AI reasoning, all anchored by OWASP Top 10 mitigation, OAuth 2.0 zero-trust token flows, and disciplined cloud IAM.',
    academic: 'B.Tech in Computer Science from Bikaner Technical University, Pilani, Rajasthan (2021–2025) with specialized coursework in Computer Networks, Operating Systems, Database Management, and Cybersecurity Fundamentals.'
  },

  stats: [
    { label: 'Academic Standing', value: 'B.Tech CS 2025' },
    { label: 'Security & Web Focus', value: 'Full-Stack + SOC L1' },
    { label: 'Lighthouse Target', value: '90+ Score' },
    { label: 'Debug Optimization', value: '~40% Speedup' }
  ],

  projects: [
    {
      id: 'chessbuddybuzz',
      number: '01',
      title: 'ChessBuddyBuzz',
      subtitle: 'Real-Time Chess Intelligence Platform with Stockfish 18 Engine Analysis & WebSocket Multiplayer',
      category: 'Chess & Real-Time Engine',
      year: '2025',
      duration: '2025 – Present',
      role: 'Full-Stack Architect & Engine Integrator',
      organization: 'Independent / Open Source',
      liveUrl: 'https://chessbuddybuzz.pages.dev/',
      githubUrl: 'https://github.com/DharmeshKumar0/ChessBuddyBuzz',
      technologies: ['React 19', 'TypeScript', 'Stockfish 18', 'WebSockets / Socket.io', 'Zustand', 'Tailwind CSS v4', 'Vite 8', 'Cloudflare Pages'],
      summary: 'A full-scale real-time chess platform featuring browser-side Stockfish 18 Web Worker analysis, centipawn evaluation bar, PGN/FEN board state parsing, live move annotation, and low-latency multiplayer match rooms.',
      problem: 'Running deep chess engine calculations (depth 20+) in browser UI threads causes severe frame drops, sluggish piece movement, and browser freezing. Concurrently, multiplayer match rooms require sub-50ms synchronization across socket connections without race conditions or board state desynchronization.',
      approach: 'Offloaded the Stockfish 18 UCI engine to a dedicated non-blocking Web Worker thread via asynchronous message passing, ensuring fluid 60 FPS piece animation. Orchestrated multiplayer room state with WebSocket events and Zustand state machines.',
      engineering: {
        architecture: 'Client-side React 19 + TypeScript frontend with Web Worker UCI message protocol communicating with Stockfish 18 WASM binary, paired with WebSocket room servers and Zustand local stores.',
        keyFeatures: [
          'Stockfish 18 deep engine evaluation with real-time centipawn score and best move arrows',
          'Fluid evaluation bar displaying advantage margins with smooth cubic-bezier transitions',
          'Interactive PGN and FEN import/export with move-by-move history navigation and annotations',
          'Live multiplayer game rooms powered by WebSockets with room codes and real-time clock countdowns',
          'Responsive board layout with drag-and-drop piece movement and zero layout shifts'
        ],
        securityHighlights: [
          'Strict FEN and PGN string sanitization preventing parser injection and regex DOS',
          'WebSocket connection rate-limiting and heartbeat pinging to prevent connection exhaustion',
          'Client-side move legality validation preventing spoofed illegal moves over sockets'
        ],
        performanceScore: '60fps uninterrupted engine analysis, sub-25ms Stockfish eval updates'
      },
      interactions: 'Live evaluation bar animations, interactive chessboard with move highlights, Stockfish arrow overlays, and real-time WebSocket room creation.',
      results: [
        'Deployed to production on Cloudflare Pages (https://chessbuddybuzz.pages.dev/)',
        'Delivered instant browser-based engine analysis without needing high-cost server compute',
        'Achieved seamless real-time WebSocket multiplayer play with sub-50ms latency'
      ],
      lessons: 'Heavy algorithmic computations belong off the main thread. Web Workers combined with reactive state managers like Zustand keep complex desktop-class web applications smooth.',
      accentColor: '#00f2aa',
      previewLayout: 'full-width'
    },
    {
      id: 'ai-career-coach',
      number: '02',
      title: 'AI Career Coach',
      subtitle: 'Next-Generation Intelligent Career Advisor with Server-Side Rendering & Role-Based Access',
      category: 'Full-Stack & AI',
      year: '2024',
      duration: 'Jan 2024 – Present',
      role: 'Full-Stack Lead & Security Architect',
      organization: 'CodeSoft & Independent Project',
      githubUrl: 'https://github.com/DharmeshKumar0',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Prisma ORM', 'Claude Sonnet 3.5', 'Gemini AI', 'Firebase OAuth 2.0', 'Firestore'],
      summary: 'A full-stack web application delivering personalized career roadmaps and resume coaching using Gemini AI & Claude Sonnet 3.5, with server-side rendered routes, role-based access control (RBAC), and 90+ Lighthouse performance.',
      problem: 'Most AI-assisted coaching tools suffer from excessive client-side payload latency, unauthenticated exposure of backend LLM API keys, and uncontrolled access to sensitive user resume dossiers.',
      approach: 'Architected a strict separation between client presentation and server execution using Next.js App Router. Integrated Firebase OAuth 2.0 for authenticated session minting, proxying all Gemini and Claude AI prompts through server endpoints guarded by environment variable secrets and token verification.',
      engineering: {
        architecture: 'Hybrid SSR & Edge-ready API layer with Prisma ORM querying PostgreSQL/Firestore, wrapped in middleware authentication verification before invoking AI inference streams.',
        keyFeatures: [
          'Server-side rendered dynamic career roadmap generators for instantaneous initial paints',
          'Fine-grained Role-Based Access Control (RBAC) ensuring unprivileged users cannot invoke admin or cost-intensive endpoints',
          'Responsive editorial UI styled with Tailwind CSS and Shadcn UI primitives',
          'Environment-variable secrets management preventing client-side API key leakage'
        ],
        securityHighlights: [
          'OWASP Top 10 mitigation against Broken Authentication and Sensitive Data Exposure',
          'Strict sanitization of user input before dispatching to LLM prompts to prevent prompt injection',
          'Session timeout controls with Firebase OAuth 2.0 refresh token rotation'
        ],
        performanceScore: '90+ Lighthouse Performance & SEO Score'
      },
      interactions: 'Subtle typewriter AI stream response reveals, tactile button states, card hover lift micro-interactions, and instant feedback indicators.',
      results: [
        'Targeted 90+ Lighthouse performance through aggressive route code-splitting and asset lazy loading',
        'Zero leaked API credentials across production deployments via server-side encapsulation',
        'Delivered seamless automated career guidance for multi-tier user roles'
      ],
      lessons: 'Direct client-to-AI calls are an unacceptable security risk in production web applications. Server-side token validation and rate-limiting are non-negotiable prerequisites.',
      accentColor: '#38bdf8',
      previewLayout: 'split-reversed'
    },
    {
      id: 'code-reviewer',
      number: '03',
      title: 'AI Code Reviewer',
      subtitle: 'Full-Stack MERN Automated Code Review, Syntax Analysis & Security Audit Suite',
      category: 'Full-Stack & AI',
      year: '2024',
      duration: '2024',
      role: 'Full-Stack Developer & Security Lead',
      organization: 'Open Source / Independent',
      githubUrl: 'https://github.com/DharmeshKumar0/Code-Reviewer',
      technologies: ['React', 'Node.js', 'Express', 'Gemini AI API', 'Prism.js', 'Axios', 'Tailwind CSS'],
      summary: 'An intelligent automated developer companion that ingests code snippets across multiple languages, detecting logic defects, algorithmic bottlenecks, and OWASP security vulnerabilities with refactored code output.',
      problem: 'Manual peer code reviews are time-consuming and often miss subtle security bugs like unescaped queries, memory leaks, or unhandled promise rejections before code lands in production.',
      approach: 'Engineered an Express.js backend integrating the Google Gemini API with system prompts tailored to software engineering standards and OWASP Top 10 vulnerabilities, paired with a syntax-highlighted React interface.',
      engineering: {
        architecture: 'Express API backend processing POST /ai/get-review requests, wrapping Gemini model generation with structured output schemas and CORS security, consumed by a React client.',
        keyFeatures: [
          'Multi-language code parsing with instant security and optimization auditing',
          'Detailed bug classification with actionable line-by-line refactoring recommendations',
          'Clean code editor interface with syntax highlighting and markdown report rendering',
          'CORS-protected backend routing preventing unauthorized cross-origin abuse'
        ],
        securityHighlights: [
          'Backend proxy shielding Gemini API keys from client exposure',
          'Input sanitization to prevent prompt injection and payload truncation',
          'Rate-limited endpoints to prevent denial-of-service abuse'
        ],
        performanceScore: 'Sub-1.2s complete code review generation for complex snippets'
      },
      interactions: 'Side-by-side diff preview, markdown code blocks with copy utilities, and animated review status spinners.',
      results: [
        'Built full-stack repository with separated Backend and Frontend architectures',
        'Detected common vulnerabilities including SQL injection and hardcoded secrets in test suites',
        'Streamlined code assessment workflow for peer developer projects'
      ],
      lessons: 'AI reviewers must provide reproducible code corrections, not just vague textual descriptions. Explicit system constraints make LLM evaluations actionable.',
      accentColor: '#38bdf8',
      previewLayout: 'asymmetric'
    },
    {
      id: 'network-security-lab',
      number: '04',
      title: 'SOC & Network Threat Defense Lab',
      subtitle: 'Hands-On Incident Triage, Log Anomaly Detection, and OWASP Defense Sandbox',
      category: 'Cybersecurity & SOC',
      year: '2024',
      duration: '2024 – Present',
      role: 'Security Analyst & Lab Engineer',
      organization: 'TryHackMe & Personal Practice Lab',
      githubUrl: 'https://github.com/DharmeshKumar0',
      technologies: ['Wireshark', 'TryHackMe', 'TCP/IP', 'HTTP/HTTPS', 'DNS', 'OWASP Top 10', 'CIA Triad', 'Firewall Rules', 'Log Analysis'],
      summary: 'Practical cybersecurity research and hands-on laboratory environment focused on SOC Level 1 incident detection, network packet inspection, log analysis, and threat containment.',
      problem: 'Modern cyber threats exploit subtle misconfigurations in DNS resolution, uninspected packet headers, and unmonitored log streams that easily bypass superficial perimeter defenses.',
      approach: 'Built a systematic analytical routine dissecting network traffic using Wireshark and simulated SIEM logs across the OSI model layers. Triaged simulated intrusion alerts to distinguish false positives from critical vulnerabilities.',
      engineering: {
        architecture: 'Simulated multi-tier network topology with packet capture nodes, firewall rulesets, and centralized log triage queues for alert analysis.',
        keyFeatures: [
          'Deep packet inspection across TCP 3-way handshakes, TLS handshakes, and DNS queries',
          'Hands-on vulnerability testing for OWASP Top 10 (SQL Injection, XSS, CSRF, IDOR)',
          'Alert-triage workflows matching real-world SOC L1 response playbooks',
          'Incident documentation templates for rapid post-mortem reporting'
        ],
        securityHighlights: [
          'Defense-in-Depth implementation across network, host, and application tiers',
          'Verification of cryptographic protections for data in transit (TLS 1.3, HTTPS) vs at rest (AES-256)',
          'Least Privilege access model applied to cloud IAM and host user groups'
        ]
      },
      interactions: 'Interactive terminal log parser, packet filtering simulator, and anomaly severity triage radar.',
      results: [
        'Successfully completed hands-on lab challenges on TryHackMe covering network exploitation and defensive triage',
        'Built rapid log-parsing workflows to isolate anomalous IP traffic patterns within minutes',
        'Established reusable technical incident report templates for team post-mortems'
      ],
      lessons: 'Speed in SOC operations depends on deep familiarity with raw protocol headers (TCP flags, TTL, DNS record types) rather than relying blindly on automated alarms.',
      accentColor: '#38bdf8',
      previewLayout: 'split-reversed'
    },
    {
      id: 'secure-auth-sentinel',
      number: '05',
      title: 'Zero-Trust Authentication Sentinel',
      subtitle: 'Independent Security Review & Architectural Hardening for Multi-Factor OAuth 2.0',
      category: 'Security Architecture',
      year: '2024',
      duration: 'Jan 2024',
      role: 'Security Researcher & Systems Architect',
      organization: 'Independent Project',
      githubUrl: 'https://github.com/DharmeshKumar0',
      technologies: ['OAuth 2.0', 'JWT', 'RBAC', 'Firebase Auth', 'API Security', 'Node.js', 'Postman'],
      summary: 'A formal threat-modeled authentication architecture demonstrating defense-in-depth against broken object-level authorization (BOLA), session fixation, and token interception.',
      problem: 'Token-based authentication systems are frequently breached through improper token storage (exposing JWTs in localStorage to XSS), unvalidated redirect URIs, and lack of role checks on API endpoints.',
      approach: 'Designed an end-to-end authentication matrix featuring HTTP-only secure cookie transport, short-lived JWT access tokens with rotating refresh tokens, and strict endpoint-level authorization middleware.',
      engineering: {
        architecture: 'Zero-trust gateway pattern where every incoming API request is decoded, verified for cryptographic signature validity, and audited against granular RBAC permissions before dispatching.',
        keyFeatures: [
          'Threat-modeled attack surface analysis documenting vectors for BOLA and privilege escalation',
          'Rigorous Postman test collection validating positive and negative authorization flows',
          'Tamper-evident audit log creation for failed authentication attempts',
          'Detailed vulnerability remediation matrix aligned with NIST CSF and ISO 27001 guidance'
        ],
        securityHighlights: [
          'Cryptographic token signing with asymmetric key pairs (RS256)',
          'Strict CORS origin whitelisting and CSP (Content Security Policy) headers',
          'Rate-limiting thresholds on sensitive authentication routes'
        ]
      },
      interactions: 'Interactive authorization state diagram and token payload inspector in the portfolio lab.',
      results: [
        'Documented comprehensive mitigation strategies against 8 out of 10 OWASP web application threats',
        'Validated 100% test coverage for authentication edge cases using Postman test suites',
        'Established an architecture blueprint applicable to enterprise full-stack projects'
      ],
      lessons: 'Authentication only confirms identity; authorization determines safety. Never trust client-side claims without re-verifying roles on the database layer.',
      accentColor: '#f59e0b',
      previewLayout: 'horizontal-card'
    },
    {
      id: 'gemini-app',
      number: '06',
      title: 'Gemini AI Conversational Suite',
      subtitle: 'Conversational Intelligence Client Powered by Google Gemini with Real-Time Generation & Theming',
      category: 'Full-Stack & AI',
      year: '2024',
      duration: '2024',
      role: 'Frontend Engineer',
      organization: 'Independent / Open Source',
      liveUrl: 'https://gemini-app-frontend-two.vercel.app',
      githubUrl: 'https://github.com/DharmeshKumar0/GeminiApp-Frontend',
      technologies: ['React', 'JavaScript (ES6+)', 'Google Gemini API', 'Tailwind CSS', 'Vercel'],
      summary: 'An intuitive, responsive conversational interface leveraging Google Gemini models to deliver fast, structured multi-turn dialogue, prompt suggestions, and code generation.',
      problem: 'Conversational AI interfaces often struggle on mobile viewports with jarring keyboard resizing and cluttered formatting of complex code blocks.',
      approach: 'Designed a sleek mobile-first chat layout with auto-scroll management, responsive prompt chips, and custom markdown rendering for code snippets.',
      engineering: {
        architecture: 'React SPA utilizing state hooks for conversation trees and prompt histories, deployed globally on Vercel CDN.',
        keyFeatures: [
          'Real-time streaming-feel conversation display with smooth scroll anchoring',
          'Suggested quick-prompt cards for coding, writing, and research',
          'Dark and light mode responsive styling with Tailwind CSS',
          'Production deployment on Vercel with instant edge routing'
        ],
        securityHighlights: [
          'Sanitized HTML in markdown code responses preventing XSS attacks',
          'Safe handling of client-side local session caches'
        ],
        performanceScore: '95+ Mobile Usability & Lighthouse score'
      },
      interactions: 'Quick-prompt chip clicks, animated thinking indicators, and responsive input expansion.',
      results: [
        'Live at https://gemini-app-frontend-two.vercel.app',
        'Fluid conversation flow across desktop and mobile browsers',
        'Over 500+ simulated prompt interactions during testing'
      ],
      lessons: 'Prompt engineering and UX affordances like suggestion chips dramatically reduce initial user friction in AI conversational interfaces.',
      accentColor: '#ec4899',
      previewLayout: 'showcase-card'
    },
    {
      id: 'amazon-clone',
      number: '07',
      title: 'Amazon E-Commerce Architecture',
      subtitle: 'Feature-Rich E-Commerce Client with Live API Products, Dynamic Cart & Jest Testing',
      category: 'Web Engineering & API',
      year: '2023',
      duration: '2023',
      role: 'Frontend Developer',
      organization: 'Open Source / Independent',
      liveUrl: 'https://amazon-clone-gamma-kohl.vercel.app',
      githubUrl: 'https://github.com/DharmeshKumar0/Amazon_Clone',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'REST API', 'Axios', 'Jest', 'Vercel'],
      summary: 'A high-fidelity e-commerce application featuring real-time product search, category filtration, local cart state synchronization, price math calculation, and Jest unit tests.',
      problem: 'Managing shopping cart state with quantity updates, tax calculations, and promo discounts without race conditions or stale local storage state.',
      approach: 'Implemented clean state encapsulation with pure JavaScript helper functions and unit tests in Jest to guarantee cart math accuracy.',
      engineering: {
        architecture: 'Modular vanilla JavaScript & REST API consumption via Axios with Jest unit test suites verifying cart calculation rules.',
        keyFeatures: [
          'Live product catalog ingestion via REST API with category filters',
          'Cart persistence with quantity increment/decrement and price computations',
          'Responsive multi-breakpoint layout matching Amazon design tokens',
          'Jest test suite validating cart arithmetic and edge cases'
        ],
        securityHighlights: [
          'Client-side input sanitization on search queries',
          'Safe storage serialization of cart items'
        ],
        performanceScore: '92+ Desktop Performance Score on Vercel'
      },
      interactions: 'Cart drawer slide, dynamic badge quantity counters, and product hover zoom.',
      results: [
        'Live at https://amazon-clone-gamma-kohl.vercel.app',
        'Zero arithmetic drift across multi-item checkout test simulations',
        'High cross-browser rendering parity'
      ],
      lessons: 'Writing automated tests for business logic (like cart calculations and totals) catches bugs before users ever experience billing discrepancies.',
      accentColor: '#f97316',
      previewLayout: 'showcase-card'
    },
    {
      id: 'github-finder',
      number: '08',
      title: 'GitHub Developer Intelligence',
      subtitle: 'Live GitHub REST API Profile Search & Repository Analytics Dashboard',
      category: 'Web Engineering & API',
      year: '2023',
      duration: '2023',
      role: 'Frontend Developer',
      organization: 'Open Source',
      liveUrl: 'https://github-finder-rho-lovat.vercel.app',
      githubUrl: 'https://github.com/DharmeshKumar0/github-finder',
      technologies: ['JavaScript', 'GitHub REST API', 'CSS3', 'Async Fetch', 'Vercel'],
      summary: 'An asynchronous developer analytics tool that interfaces with the GitHub REST API to instantly inspect user statistics, repository star counts, follower growth, and language distributions.',
      problem: 'GitHub API rate-limiting and asynchronous loading states require graceful error handling when users search for non-existent handles or exceed request thresholds.',
      approach: 'Engineered an asynchronous fetch wrapper with debouncing, status-code interception (404/403 rate limits), and dynamic badge rendering.',
      engineering: {
        architecture: 'Client-side asynchronous API consumer with debounced search input, error boundaries, and dynamic DOM rendering.',
        keyFeatures: [
          'Instant user profile search querying GitHub REST v3 API',
          'Repository telemetry showcasing stars, forks, watchers, and open issues',
          'Comprehensive error handling for 404 user-not-found and 403 rate-limit states',
          'Clean card-based presentation with direct repository links'
        ],
        securityHighlights: [
          'Defensive decoding of user-generated markdown and profile URLs',
          'Handling rate-limiting with exponential backoff timers'
        ],
        performanceScore: 'Instantaneous search query latency with debounced input'
      },
      interactions: 'Real-time search debouncing, card slide transitions, and repository deep-link navigation.',
      results: [
        'Live at https://github-finder-rho-lovat.vercel.app',
        'Over 100+ public developer profiles queried during user testing',
        'Resilient error handling preventing UI crashes on invalid searches'
      ],
      lessons: 'Always design user feedback for API failures and rate limits upfront. A friendly error state is better than a broken spinner.',
      accentColor: '#818cf8',
      previewLayout: 'showcase-card'
    },
    {
      id: 'gsap-animated-interface',
      number: '09',
      title: 'Kinetic Web Application Experience',
      subtitle: 'Sub-Frame Smooth Animated Interface Built with React, Tailwind CSS & GSAP Timelines',
      category: 'Motion & Frontend',
      year: '2023',
      duration: 'May 2023 – Jun 2023',
      role: 'Creative Frontend Engineer',
      organization: 'BPTRC, BKBIET',
      githubUrl: 'https://github.com/DharmeshKumar0/Animate',
      liveUrl: 'https://animate-orcin.vercel.app',
      technologies: ['React', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vite', 'HTML5 Canvas'],
      summary: 'A high-performance web experience focused on complex mathematical animation timelines, GPU-accelerated transforms, and strict rendering consistency across devices.',
      problem: 'Excessive DOM animations frequently trigger layout reflows, choppy scroll frame-drops, and mobile battery drain when built with naive CSS transitions or unoptimized state updates.',
      approach: 'Utilized GreenSock (GSAP) timelines coordinated via ScrollTrigger, strictly animating only `transform` and `opacity` properties to keep computations entirely on the GPU composite layer. Applied `prefers-reduced-motion` fallbacks.',
      engineering: {
        architecture: 'Modular React component architecture with declarative animation refs, timeline lifecycle synchronization, and debounced ResizeObserver listeners.',
        keyFeatures: [
          'Staggered typography reveals and scrub-linked motion pathways',
          'Custom easing curves crafted for weighty, luxurious mechanical feel',
          'Zero cumulative layout shifts (CLS = 0) during complex scroll sequences',
          'Automated HTML/CSS/JS test-reporting workflow to verify cross-browser render parity'
        ],
        performanceScore: '60fps locked refresh rate across desktop and mobile displays'
      },
      interactions: 'Magnetic cursor tracking, scrubbed canvas particle dispersion, and parallax typography layers.',
      results: [
        'Maintained fluid 60 FPS performance without garbage collection micro-stutters',
        'Streamlined team communication by establishing automated test-reporting routines',
        'Adopted by engineering peers as a benchmark for UI rendering optimization'
      ],
      lessons: 'The most impressive animation is one that feels invisible and natural. Mechanical friction, spring physics, and restrained duration make interfaces feel expensive.',
      accentColor: '#a78bfa',
      previewLayout: 'asymmetric'
    }
  ] as ProjectCaseStudy[],

  githubRepositories: [
    {
      name: 'ChessBuddyBuzz',
      fullName: 'DharmeshKumar0/ChessBuddyBuzz',
      description: 'Real-time chess intelligence platform with Stockfish 18 engine evaluation, centipawn eval bar, and WebSocket multiplayer match rooms.',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 1,
      liveUrl: 'https://chessbuddybuzz.pages.dev/',
      repoUrl: 'https://github.com/DharmeshKumar0/ChessBuddyBuzz',
      isFlagship: true,
      tags: ['Stockfish 18', 'WebSockets', 'React 19', 'Zustand', 'Tailwind v4']
    },
    {
      name: 'Code-Reviewer',
      fullName: 'DharmeshKumar0/Code-Reviewer',
      description: 'Full-Stack MERN automated code review platform integrating AI for logic bug detection, complexity analysis, and security hardening.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 1,
      repoUrl: 'https://github.com/DharmeshKumar0/Code-Reviewer',
      isFlagship: true,
      tags: ['Express', 'React', 'Gemini AI', 'Node.js', 'CORS']
    },
    {
      name: 'GeminiApp-Frontend',
      fullName: 'DharmeshKumar0/GeminiApp-Frontend',
      description: 'Conversational generative AI client built on Google Gemini API with real-time prompt generation, suggested templates, and dark UI.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      liveUrl: 'https://gemini-app-frontend-two.vercel.app',
      repoUrl: 'https://github.com/DharmeshKumar0/GeminiApp-Frontend',
      isFlagship: true,
      tags: ['React', 'Gemini API', 'Tailwind CSS', 'Vercel']
    },
    {
      name: 'Amazon_Clone',
      fullName: 'DharmeshKumar0/Amazon_Clone',
      description: 'Sleek e-commerce replica built with HTML, CSS, and JS. Integrates third-party product REST APIs, dynamic cart, search, and Jest testing.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      liveUrl: 'https://amazon-clone-gamma-kohl.vercel.app',
      repoUrl: 'https://github.com/DharmeshKumar0/Amazon_Clone',
      isFlagship: true,
      tags: ['E-Commerce', 'REST API', 'Axios', 'Jest Tests', 'Cart State']
    },
    {
      name: 'github-finder',
      fullName: 'DharmeshKumar0/github-finder',
      description: 'Developer search engine interfacing with GitHub REST API to render user profiles, star counts, repo telemetry, and follower insights.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      liveUrl: 'https://github-finder-rho-lovat.vercel.app',
      repoUrl: 'https://github.com/DharmeshKumar0/github-finder',
      isFlagship: false,
      tags: ['GitHub API', 'Async Fetch', 'Telemetry', 'Vercel']
    },
    {
      name: 'Animate',
      fullName: 'DharmeshKumar0/Animate',
      description: 'Kinetic visual design laboratory testing CSS3 keyframes, GPU-accelerated transforms, spring easing, and responsive web physics.',
      language: 'CSS / HTML',
      languageColor: '#563d7c',
      stars: 0,
      liveUrl: 'https://animate-orcin.vercel.app',
      repoUrl: 'https://github.com/DharmeshKumar0/Animate',
      isFlagship: false,
      tags: ['CSS3 Keyframes', 'Kinetic UI', 'GPU Transitions']
    },
    {
      name: 'Portfolio-vid-gym',
      fullName: 'DharmeshKumar0/Portfolio-vid-gym',
      description: 'Interactive athletics and fitness web portal featuring high-resolution responsive background video streams and schedule tables.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      liveUrl: 'https://portfolio-dharmesh.vercel.app',
      repoUrl: 'https://github.com/DharmeshKumar0/Portfolio-vid-gym',
      isFlagship: false,
      tags: ['HTML5 Video', 'Responsive', 'High Contrast']
    },
    {
      name: 'X_CLone_Tailwind',
      fullName: 'DharmeshKumar0/X_CLone_Tailwind',
      description: 'Modern Twitter/X responsive client interface crafted strictly with Tailwind CSS utility classes and semantic markup.',
      language: 'HTML / Tailwind',
      languageColor: '#38bdf8',
      stars: 0,
      repoUrl: 'https://github.com/DharmeshKumar0/X_CLone_Tailwind',
      isFlagship: false,
      tags: ['Tailwind CSS', 'Responsive Grid', 'Social UI']
    },
    {
      name: 'Netflix_Clone_html_css',
      fullName: 'DharmeshKumar0/Netflix_Clone_html_css',
      description: 'Pixel-accurate Netflix homepage replica with responsive hero carousel, accordion FAQ section, and media queries.',
      language: 'HTML / CSS',
      languageColor: '#e34c26',
      stars: 0,
      repoUrl: 'https://github.com/DharmeshKumar0/Netflix_Clone_html_css',
      isFlagship: false,
      tags: ['Netflix UI', 'Accordion', 'Media Queries']
    }
  ],

  experience: [
    {
      period: 'Jul 2024 – Sep 2024',
      role: 'Front-End Developer Intern',
      company: 'CodeSoft',
      location: 'Remote',
      type: 'Internship',
      description: 'Engineered a production-grade AI Career Coach web app using Next.js and Claude Sonnet 3.5, implementing server-side rendering for optimized, fast page delivery.',
      bulletPoints: [
        'Engineered a production AI Career Coach web app using Next.js and Claude Sonnet 3.5, implementing server-side rendering for optimized, fast page delivery.',
        'Secured user authentication using Google Firebase OAuth 2.0 and managed real-time Firestore sessions, ensuring data integrity and preventing unauthorized access.',
        'Applied secure coding practices including environment-variable API key management, client/server input validation, and OWASP-aligned guidelines to prevent common vulnerabilities.',
        'Collaborated within a remote Agile team using Git/GitHub for version control, branching strategies, pull-request reviews, and task tracking across the full SDLC.'
      ],
      technologies: ['Next.js', 'React', 'Claude Sonnet 3.5', 'Firebase OAuth 2.0', 'Firestore', 'Tailwind CSS', 'Git', 'Agile/Scrum']
    },
    {
      period: 'May 2023 – Jun 2023',
      role: 'Web Development & Cloud Workshop Trainee',
      company: 'BPTRC, BKBIET',
      location: 'Pilani, Rajasthan, India',
      type: 'Technical Training',
      description: 'Completed hands-on training in GCP fundamentals — cloud storage buckets, IAM access control, data integrity policies, and cloud security configurations.',
      bulletPoints: [
        'Completed hands-on training in GCP fundamentals — cloud storage buckets, IAM access control, data integrity policies, and cloud security configurations.',
        'Built a GSAP-animated React web app with performance-optimized rendering; developed automated HTML/CSS/JS test-reporting workflows to streamline team communication.',
        'Diagnosed and resolved development environment configuration issues, documenting each step — an approach directly applicable to IT support and SOC ticket workflows.',
        'Practiced structured troubleshooting methodology to identify and correct cloud access misconfigurations, reinforcing habits used in first-line security response.'
      ],
      technologies: ['Google Cloud Platform (GCP)', 'IAM & Access Control', 'React', 'GSAP', 'Linux', 'Troubleshooting']
    },
    {
      period: '2023 – Present',
      role: 'Technical Member & Academic Mentor',
      company: 'BKBIET Technical Club',
      location: 'Pilani, Rajasthan, India',
      type: 'Leadership & Mentorship',
      description: 'Recognized as a top academic performer; mentored juniors in programming fundamentals, security concepts, and modern toolchain optimization.',
      bulletPoints: [
        'Recognized as a top academic performer; mentored juniors in programming fundamentals and contributed to community-service and academic initiatives.',
        'Configured and optimized TRAE IDE workflows within VS Code, reducing debugging cycle time by ~40% across team projects, and documented the process for onboarding new members.',
        'Maintained structured technical documentation for team projects — a skill directly applicable to SOC reporting, incident logs, and IT ticketing systems.'
      ],
      technologies: ['Technical Documentation', 'TRAE IDE', 'VS Code', 'Mentorship', 'Incident Reporting', 'Workflow Optimization']
    }
  ] as ExperienceItem[],

  skills: [
    {
      title: 'Languages & Scripting',
      badge: '01',
      skills: [
        { name: 'Python', level: 'Advanced', highlight: true, description: 'Scripting, security automation, log parsing, data processing' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: true, description: 'Modern asynchronous patterns, closures, web APIs, functional design' },
        { name: 'TypeScript', level: 'Advanced', highlight: true, description: 'Strict typing, generic interfaces, enterprise-grade architecture' },
        { name: 'Java', level: 'Intermediate', description: 'Object-oriented systems, data structures, algorithms' },
        { name: 'C', level: 'Intermediate', description: 'Low-level memory management, pointers, systems fundamentals' },
        { name: 'SQL', level: 'Proficient', description: 'Relational schema design, query optimization, joins, transactions' },
        { name: 'Bash', level: 'Working', description: 'Shell automation, environment config, command-line triage' }
      ]
    },
    {
      title: 'Frontend Engineering',
      badge: '02',
      skills: [
        { name: 'React', level: 'Advanced', highlight: true, description: 'Modern hooks, state architecture, component modularity, React 19' },
        { name: 'Next.js', level: 'Advanced', highlight: true, description: 'App Router, Server Components, SSR/SSG, edge API routes' },
        { name: 'Tailwind CSS', level: 'Advanced', highlight: true, description: 'Utility-first styling, design systems, responsive precision' },
        { name: 'GSAP', level: 'Proficient', highlight: true, description: 'Kinetic timelines, ScrollTrigger, sub-frame animation performance' },
        { name: 'Redux / Toolkit', level: 'Proficient', description: 'Predictable centralized state, actions, reducers, async thunks' },
        { name: 'Shadcn UI', level: 'Advanced', description: 'Accessible headless primitives, Radix UI foundations' },
        { name: 'Vite', level: 'Advanced', description: 'Modern bundle tooling, fast dev-loops, build pipeline optimization' }
      ]
    },
    {
      title: 'Backend & Databases',
      badge: '03',
      skills: [
        { name: 'Node.js & Express', level: 'Advanced', highlight: true, description: 'RESTful API architecture, middleware pipelines, streaming' },
        { name: 'Prisma ORM', level: 'Proficient', highlight: true, description: 'Type-safe database queries, schema migrations, relations' },
        { name: 'MongoDB', level: 'Proficient', description: 'Document schema design, aggregation pipelines, indexing' },
        { name: 'Google Firebase / Firestore', level: 'Advanced', highlight: true, description: 'Real-time synchronization, security rules, OAuth 2.0 auth' },
        { name: 'REST API Design', level: 'Advanced', description: 'Idempotency, resource nesting, standardized HTTP status codes' }
      ]
    },
    {
      title: 'Cybersecurity & SOC Operations',
      badge: '04',
      skills: [
        { name: 'OWASP Top 10', level: 'Advanced', highlight: true, description: 'Defenses against SQLi, XSS, CSRF, BOLA, Broken Auth' },
        { name: 'CIA Triad & Defense-in-Depth', level: 'Advanced', highlight: true, description: 'Core confidentiality, integrity, availability architectural paradigms' },
        { name: 'Log Analysis & Alert Triage', level: 'Proficient', highlight: true, description: 'SOC Level 1 anomaly detection, event triage, IOC correlation' },
        { name: 'OAuth 2.0 & JWT', level: 'Advanced', highlight: true, description: 'Zero-trust token issuance, claims validation, refresh rotation' },
        { name: 'TCP/IP & OSI Model', level: 'Advanced', description: 'Packet header dissection, 3-way handshakes, routing fundamentals' },
        { name: 'DNS & HTTP/HTTPS', level: 'Advanced', description: 'Resolution hierarchies, TLS encryption in transit, certificate validation' },
        { name: 'Firewalls & Network Scanning', level: 'Proficient', description: 'Access control lists, port scanning, stateful packet filtering' },
        { name: 'Wireshark', level: 'Proficient', description: 'Packet sniffing, protocol stream analysis, anomaly isolation' }
      ]
    },
    {
      title: 'Cloud, DevOps & Tooling',
      badge: '05',
      skills: [
        { name: 'Google Cloud Platform (GCP)', level: 'Proficient', highlight: true, description: 'Storage buckets, IAM access policies, Cloud Console operations' },
        { name: 'IAM & Access Control', level: 'Advanced', description: 'Least Privilege enforcement, service account keys, role bindings' },
        { name: 'Git & GitHub', level: 'Advanced', description: 'Feature branching, pull-request auditing, version control hygiene' },
        { name: 'CI/CD Fundamentals', level: 'Proficient', description: 'Automated test runners, build gates, deployment pipelines' },
        { name: 'Postman', level: 'Advanced', description: 'API contract testing, environment token automation, regression runs' },
        { name: 'TRAE IDE & VS Code', level: 'Advanced', description: 'AI-assisted debugging, workspace productivity optimization' }
      ]
    }
  ] as SkillCategory[],

  certifications: [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'Valid through Jul 2026',
      status: 'Active',
      credentialId: 'CISCO-SEC-2026',
      summary: 'Comprehensive verification covering modern cyber defense architectures, threat landscapes, defense-in-depth, and incident response fundamentals.'
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Coursera / Google',
      date: 'In Progress (Active Track)',
      status: 'In Progress',
      credentialId: 'GOOG-CYBER-PROF',
      summary: 'Rigorous professional training in Python security automation, Linux command-line analysis, SIEM tools (Chronicle), and SOC Level 1 incident handling.'
    },
    {
      title: 'Web Development Internship Certificate',
      issuer: 'CodeSoft',
      date: 'Jul 2024 – Sep 2024',
      status: 'Completed',
      credentialId: 'CS-INT-2024-09',
      summary: 'Awarded for engineering a production AI Career Coach web app using Next.js, Claude Sonnet 3.5, and Firebase OAuth 2.0 with OWASP-aligned security.'
    },
    {
      title: 'Cloud Computing & Security Workshop',
      issuer: 'BPTRC, BKBIET',
      date: 'May 2023 – Jun 2023',
      status: 'Completed',
      credentialId: 'BPTRC-CLOUD-2023',
      summary: 'Practical hands-on training in Google Cloud Platform fundamentals, IAM policies, cloud security hardening, and performance-optimized React development.'
    }
  ] as CertificationItem[],

  philosophies: [
    {
      number: '01',
      title: 'CLARITY BEFORE COMPLEXITY',
      tagline: 'Simple architectures fail less, scale cleaner, and debug faster.',
      description: 'Unnecessary abstractions and premature microservices introduce hidden failure modes. I strive to design systems where every component has a crisp, singular responsibility and every code line answers a concrete requirement.'
    },
    {
      number: '02',
      title: 'SECURITY IS NOT AN AFTERTHOUGHT',
      tagline: 'Defense-in-depth must be woven into the very first architectural diagram.',
      description: 'You cannot patch security into an inherently fragile system at the end of a sprint. Token lifetimes, input sanitization, least-privilege IAM, and auditability are foundational requirements, not optional backlog items.'
    },
    {
      number: '03',
      title: 'DESIGN & ENGINEERING ARE ONE SYSTEM',
      tagline: 'Visual craft without performance is hollow; engineering without craft is forgettable.',
      description: 'A great application marries mathematical timing, precise typography, and fluid kinetic response with rock-solid server-side performance. When both disciplines align, the technology effortlessly disappears into the user experience.'
    },
    {
      number: '04',
      title: 'PERFORMANCE IS PART OF ACCESSIBILITY',
      tagline: 'Every unoptimized kilobyte and janky frame is an artificial barrier to users.',
      description: 'A 90+ Lighthouse score is not merely a badge—it ensures that users on unstable 4G connections and low-spec mobile hardware experience the exact same crisp, instantaneous interactions as developers on flagship workstations.'
    },
    {
      number: '05',
      title: 'DETAILS CREATE THE DIFFERENCE',
      tagline: 'The difference between good software and memorable software lives in the final 5%.',
      description: 'The subtle magnetic pull on a CTA button, the cryptographic integrity of a session cookie, the zero cumulative layout shift during an asset load—these deliberate micro-decisions accumulate into undeniable digital trust.'
    }
  ] as PhilosophyItem[],

  interests: [
    { category: 'Technical Systems', items: ['Network Packet Sniffing', 'Zero-Trust Architectures', 'LLM Prompt Defense', 'Compiler Internals'], iconName: 'Terminal' },
    { category: 'Visual & Craft', items: ['Kinetic Typography', 'Sub-Frame Micro-Interactions', 'Brutalist & Editorial Layouts', 'Dark Mode Ergonomics'], iconName: 'Compass' },
    { category: 'Personal Pursuits', items: ['Chess Tactical Studies', 'Rajasthan Desert Sunrises', 'Open Source Tooling', 'Deep Focus Sessions'], iconName: 'Sparkles' }
  ] as PersonalityInterest[]
};
