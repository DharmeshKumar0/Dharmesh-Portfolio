import { jsPDF } from 'jspdf';
import { portfolioData } from '../data/portfolioData';

/**
 * Dynamically generates a lightweight, executive-ready PDF portfolio & credentials summary
 * using jsPDF in pure client-side code without external API dependencies.
 */
export const generatePdfSummary = (): void => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper for drawing subtle horizontal dividers
  const drawDivider = (currentY: number) => {
    doc.setDrawColor(220, 225, 230);
    doc.setLineWidth(0.3);
    doc.line(margin, currentY, margin + contentWidth, currentY);
  };

  // Helper for section headings
  const addSectionHeader = (title: string, badge?: string) => {
    // Check if we need a new page
    if (y > pageHeight - 35) {
      doc.addPage();
      y = margin + 5;
    }

    doc.setFillColor(0, 242, 170); // Emerald accent #00f2aa
    doc.rect(margin, y, 3, 5, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42); // Slate-900
    doc.text(title.toUpperCase(), margin + 6, y + 4);

    if (badge) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(100, 116, 139);
      doc.text(badge, margin + contentWidth, y + 4, { align: 'right' });
    }

    y += 8;
    drawDivider(y);
    y += 5;
  };

  // ==========================================
  // PAGE 1: HEADER & PROFILE
  // ==========================================

  // Header background banner
  doc.setFillColor(10, 12, 16); // #0a0c10 dark luxury banner
  doc.rect(0, 0, pageWidth, 38, 'F');

  // Monogram block
  doc.setFillColor(0, 242, 170);
  doc.roundedRect(margin, 8, 12, 12, 2, 2, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(10, 12, 16);
  doc.text('DK', margin + 6, 16, { align: 'center' });

  // Name & Title in Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text(portfolioData.name.toUpperCase(), margin + 16, 15);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(0, 242, 170);
  doc.text('Full-Stack Engineer · AI Systems Integration · Cybersecurity Specialist', margin + 16, 21);

  // Contact metadata line in header
  doc.setFontSize(8);
  doc.setTextColor(180, 190, 205);
  const contactText = `${portfolioData.email}  |  ${portfolioData.github}  |  ${portfolioData.linkedin}`;
  doc.text(contactText, margin + 16, 28);

  y = 44;

  // Document Timestamp & Verification
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7.5);
  doc.setTextColor(120, 130, 140);
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  doc.text(`Official Credentials Summary  ·  Generated dynamically on ${dateStr}  ·  Verified Portfolio`, margin, y);
  y += 7;

  // 1. EXECUTIVE SUMMARY
  addSectionHeader('Executive Profile & Engineering Focus');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85); // Slate-700
  const summaryParagraph =
    'Full-Stack Developer and Cybersecurity Engineer completing B.Tech in Computer Science & Engineering (2021–2025). Specializes in building high-performance web applications with React 19, Next.js, and TypeScript, combined with low-latency algorithmic engines (Stockfish 18 Web Workers, WebSockets) and Google Gemini AI API integration. Rigorously trained in SOC Level 1 threat triage, OWASP Top 10 web defenses, zero-trust authentication (OAuth 2.0 / JWT), and network traffic analysis.';
  const splitSummary = doc.splitTextToSize(summaryParagraph, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 4.2 + 4;

  // Quick stats row
  doc.setFillColor(248, 250, 252);
  doc.roundedRect(margin, y, contentWidth, 12, 1.5, 1.5, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(margin, y, contentWidth, 12, 1.5, 1.5, 'S');

  const statCols = [
    { label: 'DEGREE', val: 'B.Tech CSE (2021-2025)' },
    { label: 'ENGINEERING', val: 'Full-Stack + AI + Sockets' },
    { label: 'SECURITY LAB', val: 'SOC L1 & OWASP Defense' },
    { label: 'LOCATION', val: 'Pilani, Rajasthan, India' },
  ];

  statCols.forEach((col, idx) => {
    const colWidth = contentWidth / 4;
    const colX = margin + idx * colWidth + 4;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text(col.label, colX, y + 4.5);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(15, 23, 42);
    doc.text(col.val, colX, y + 9);
  });
  y += 17;

  // 2. FLAGSHIP PROJECTS & PRODUCTIONS
  addSectionHeader('Selected Production Projects & Live Systems', 'Real-World Architectures');

  const featuredProjects = portfolioData.projects.slice(0, 4);

  featuredProjects.forEach((proj) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${proj.number}. ${proj.title}`, margin, y);

    // Live link or category badge
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    if (proj.liveUrl) {
      doc.setTextColor(0, 160, 100);
      doc.text(`[LIVE DEMO: ${proj.liveUrl}]`, margin + contentWidth, y, { align: 'right' });
    } else if (proj.githubUrl) {
      doc.setTextColor(70, 90, 120);
      doc.text(`[GITHUB: ${proj.githubUrl}]`, margin + contentWidth, y, { align: 'right' });
    }
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.text(proj.subtitle, margin, y);
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(51, 65, 85);
    const splitProjSummary = doc.splitTextToSize(proj.summary, contentWidth);
    doc.text(splitProjSummary, margin, y);
    y += splitProjSummary.length * 3.6 + 1.5;

    // Tech stack pill text
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(`Stack: ${proj.technologies.slice(0, 7).join('  ·  ')}`, margin, y);
    y += 6;
  });

  // ==========================================
  // PAGE 2: SKILLS, CERTS, REPOSITORIES
  // ==========================================
  doc.addPage();
  y = margin + 4;

  // Header banner on page 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text(`${portfolioData.name.toUpperCase()} — TECHNICAL CREDENTIALS`, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Page 2 of 2  ·  Credentials & Repository Inventory`, margin + contentWidth, y, { align: 'right' });
  y += 3;
  drawDivider(y);
  y += 6;

  // 3. SKILLS TAXONOMY
  addSectionHeader('Categorized Skills Taxonomy & Security Tooling');

  const skillGroups = [
    {
      category: 'Frontend & Reactive UI',
      items: 'React 19, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS v4, Zustand, HTML5, CSS3, GSAP',
    },
    {
      category: 'Backend, Engines & APIs',
      items: 'Node.js, Express.js, WebSockets (Socket.io), Stockfish 18 UCI (Web Workers), REST APIs, Prisma ORM, CORS',
    },
    {
      category: 'AI & Generative Systems',
      items: 'Google Gemini API, Claude Sonnet 3.5, LLM Prompt Engineering, Streaming Responses, Automated Code Auditing',
    },
    {
      category: 'Cybersecurity & SOC Triage',
      items: 'Wireshark, Packet Inspection, TCP/IP & DNS Analysis, OWASP Top 10 Defense, Threat Triage, CIA Triad, Firewall Rules',
    },
    {
      category: 'Authentication & Cloud',
      items: 'OAuth 2.0, JWT (RS256), Firebase Auth, Role-Based Access Control (RBAC), Cloudflare Pages, Vercel, Git/GitHub',
    },
  ];

  skillGroups.forEach((group) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(15, 23, 42);
    doc.text(`• ${group.category}:`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const categoryPrefixWidth = doc.getTextWidth(`• ${group.category}: `);
    const splitItems = doc.splitTextToSize(group.items, contentWidth - categoryPrefixWidth);
    doc.text(splitItems, margin + categoryPrefixWidth, y);
    y += splitItems.length * 3.8 + 2;
  });

  y += 4;

  // 4. VERIFIED CERTIFICATIONS
  addSectionHeader('Verified Certifications & Accreditations');

  portfolioData.certifications.forEach((cert) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(cert.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`${cert.issuer} (${cert.date})`, margin + contentWidth, y, { align: 'right' });
    y += 3.8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    doc.text(cert.summary, margin, y);
    y += 5.5;
  });

  y += 2;

  // 5. GITHUB REPOSITORY DIRECTORY SUMMARY
  addSectionHeader('GitHub Open Source Repository Inventory (@DharmeshKumar0)');

  const repos = portfolioData.githubRepositories.slice(0, 6);
  const repoColWidth = (contentWidth - 6) / 2;

  for (let i = 0; i < repos.length; i += 2) {
    const r1 = repos[i];
    const r2 = repos[i + 1];

    [r1, r2].forEach((repo, idx) => {
      if (!repo) return;
      const rx = margin + idx * (repoColWidth + 6);

      doc.setFillColor(248, 250, 252);
      doc.roundedRect(rx, y, repoColWidth, 14, 1.5, 1.5, 'F');
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(rx, y, repoColWidth, 14, 1.5, 1.5, 'S');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(15, 23, 42);
      doc.text(repo.name, rx + 3, y + 4.5);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(0, 160, 100);
      doc.text(repo.language, rx + repoColWidth - 3, y + 4.5, { align: 'right' });

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.8);
      doc.setTextColor(100, 116, 139);
      const splitDesc = doc.splitTextToSize(repo.description, repoColWidth - 6);
      doc.text(splitDesc[0] || '', rx + 3, y + 9);
      if (splitDesc[1]) {
        doc.text(splitDesc[1], rx + 3, y + 12);
      }
    });

    y += 16.5;
  }

  // 6. EDUCATION & CLOSING SIGN-OFF
  y += 2;
  addSectionHeader('Education & Institutional Credentials');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor of Technology in Computer Science & Engineering (B.Tech CSE)', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text('2021 – 2025', margin + contentWidth, y, { align: 'right' });
  y += 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(71, 85, 105);
  doc.text('Bikaner Technical University (BTU) · BKBIET, Pilani, Rajasthan, India', margin, y);
  y += 4;
  doc.text('Core coursework: Data Structures, Algorithms, Cryptography & Network Security, OS, DBMS.', margin, y);

  // Footer on page 2
  const footerY = pageHeight - 12;
  drawDivider(footerY - 2);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(140, 150, 160);
  doc.text(`Official Portfolio Summary: https://github.com/DharmeshKumar0  ·  ${portfolioData.email}`, margin, footerY + 2);
  doc.text('Dharmesh Kumar © All Rights Reserved', margin + contentWidth, footerY + 2, { align: 'right' });

  // Save the document to download directly in browser
  const filename = `Dharmesh_Kumar_Portfolio_Summary_${new Date().getFullYear()}.pdf`;
  doc.save(filename);
};
