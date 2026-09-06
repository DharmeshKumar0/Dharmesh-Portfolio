import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  ShieldAlert,
  Sparkles,
  Play,
  Pause,
  Cpu,
  Type
} from 'lucide-react';

interface SimulatedPacket {
  id: string;
  timestamp: string;
  sourceIp: string;
  destIp: string;
  protocol: 'TCP' | 'UDP' | 'DNS' | 'HTTP' | 'SSH';
  port: number;
  threatLevel: 'BENIGN' | 'SUSPICIOUS' | 'CRITICAL';
  signature: string;
  status: 'PENDING' | 'BLOCKED' | 'TRIAGED';
  payloadSummary: string;
}

export const LabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'soc-triage' | 'crypto-hash' | 'kinetic-physics' | 'kinetic-typography'>('soc-triage');

  // ==========================================
  // TAB 1: SOC Packet & Alert Triage Simulator
  // ==========================================
  const [packets, setPackets] = useState<SimulatedPacket[]>([
    {
      id: 'PKT-9042',
      timestamp: '08:41:22.104',
      sourceIp: '192.168.1.105',
      destIp: '10.0.0.1',
      protocol: 'TCP',
      port: 443,
      threatLevel: 'BENIGN',
      signature: 'TLS 1.3 Key Exchange (Session Keepalive)',
      status: 'PENDING',
      payloadSummary: 'Client Hello, cipher: TLS_AES_256_GCM_SHA384, SNI: api.internal.corp'
    },
    {
      id: 'PKT-9043',
      timestamp: '08:41:45.312',
      sourceIp: '45.154.255.89',
      destIp: '10.0.0.5',
      protocol: 'HTTP',
      port: 80,
      threatLevel: 'CRITICAL',
      signature: 'OWASP-A03 SQLi: "UNION SELECT NULL, username, password--"',
      status: 'PENDING',
      payloadSummary: 'GET /api/v1/users?id=1%27%20UNION%20SELECT%20NULL%2Cpassword%20FROM%20users-- HTTP/1.1'
    },
    {
      id: 'PKT-9044',
      timestamp: '08:42:01.008',
      sourceIp: '192.168.1.144',
      destIp: '8.8.8.8',
      protocol: 'DNS',
      port: 53,
      threatLevel: 'BENIGN',
      signature: 'Standard Query A chessbuddybuzz.pages.dev',
      status: 'PENDING',
      payloadSummary: 'Query ID 0x3f41, Flags: 0x0100 (Standard query)'
    },
    {
      id: 'PKT-9045',
      timestamp: '08:42:15.540',
      sourceIp: '172.16.0.15',
      destIp: '10.0.0.2',
      protocol: 'SSH',
      port: 22,
      threatLevel: 'SUSPICIOUS',
      signature: 'Failed Authentication Spike (Brute Force Pattern)',
      status: 'PENDING',
      payloadSummary: '35 failed password attempts in 2.4 seconds from unauthorized subnet.'
    }
  ]);

  const [selectedPacket, setSelectedPacket] = useState<SimulatedPacket>(packets[1]);
  const [filterThreat, setFilterThreat] = useState<'ALL' | 'CRITICAL' | 'SUSPICIOUS'>('ALL');

  const handleTriage = (id: string, action: 'BLOCKED' | 'TRIAGED') => {
    setPackets((prev) =>
      prev.map((pkt) => (pkt.id === id ? { ...pkt, status: action } : pkt))
    );
    if (selectedPacket && selectedPacket.id === id) {
      setSelectedPacket((prev) => ({ ...prev, status: action }));
    }
  };

  const filteredPackets = packets.filter((p) => {
    if (filterThreat === 'ALL') return true;
    return p.threatLevel === filterThreat;
  });

  // ==========================================
  // TAB 2: Cryptographic Hash & Entropy Sandbox
  // ==========================================
  const [inputText, setInputText] = useState('Dharmesh Kumar // Zero-Trust 2025');
  const [salt, setSalt] = useState('salt_secret_key');
  const [generatedHash, setGeneratedHash] = useState('');
  const [entropyScore, setEntropyScore] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const computeHash = async () => {
      const encoder = new TextEncoder();
      const data = encoder.encode(inputText + (salt ? `:${salt}` : ''));
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

      // Shannon entropy approximation on hex
      const freq: Record<string, number> = {};
      for (const char of hashHex) {
        freq[char] = (freq[char] || 0) + 1;
      }
      let entropy = 0;
      const len = hashHex.length;
      for (const char in freq) {
        const p = freq[char] / len;
        entropy -= p * Math.log2(p);
      }

      if (isMounted) {
        setGeneratedHash(hashHex);
        setEntropyScore(Number(entropy.toFixed(3)));
      }
    };

    computeHash();
    return () => {
      isMounted = false;
    };
  }, [inputText, salt]);

  // ==========================================
  // TAB 3: Kinetic Particle / Physics Sandbox
  // ==========================================
  const kineticCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isSimRunning, setIsSimRunning] = useState(true);

  useEffect(() => {
    if (activeTab !== 'kinetic-physics') return;
    const canvas = kineticCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener('resize', handleResize);

    // Create particle grid with spring dynamics
    interface SpringParticle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      color: string;
    }

    const particles: SpringParticle[] = [];
    const cols = 28;
    const rows = 12;
    const spacingX = width / cols;
    const spacingY = height / rows;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacingX + spacingX / 2;
        const y = j * spacingY + spacingY / 2;
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          color: (i + j) % 2 === 0 ? '#3860ff' : '#94a3b8'
        });
      }
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      ctx.strokeStyle = 'rgba(56, 96, 255, 0.08)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isSimRunning) {
          // Mouse deflection
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 90;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            const angle = Math.atan2(dy, dx);
            p.vx -= Math.cos(angle) * force * 4.5;
            p.vy -= Math.sin(angle) * force * 4.5;
          }

          // Spring return to origin
          const homeDx = p.originX - p.x;
          const homeDy = p.originY - p.y;
          p.vx += homeDx * 0.08;
          p.vy += homeDy * 0.08;

          // Damping
          p.vx *= 0.88;
          p.vy *= 0.88;

          p.x += p.vx;
          p.y += p.vy;
        }

        // Draw particle dot
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeTab, isSimRunning]);

  // ==========================================
  // TAB 4: Kinetic Variable Typography & Matrix Playground
  // ==========================================
  const [typoText, setTypoText] = useState('DESIGN // ENGINEERING // ZERO TRUST');
  const [typoWeight, setTypoWeight] = useState(800);
  const [typoTracking, setTypoTracking] = useState(4);
  const [typoSlant, setTypoSlant] = useState(0);
  const [isHollow, setIsHollow] = useState(false);
  const [isScrambled, setIsScrambled] = useState(false);
  const [scrambleDisplay, setScrambleDisplay] = useState(typoText);

  useEffect(() => {
    if (!isScrambled) {
      setScrambleDisplay(typoText);
      return;
    }

    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambleDisplay(
        typoText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return typoText[index];
            }
            if (letter === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= typoText.length) {
        clearInterval(interval);
        setIsScrambled(false);
      }
      iteration += 1 / 2;
    }, 30);

    return () => clearInterval(interval);
  }, [isScrambled, typoText]);

  return (
    <section id="lab" className="py-24 sm:py-36 border-b border-[var(--border-subtle)] relative overflow-hidden">
      <div className="w-full max-w-[1780px] mx-auto px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 sm:pb-16 border-b border-[var(--border-subtle)] items-end">
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[var(--accent)] font-bold">[ 05 ]</span>
              <span className="text-[var(--border-medium)]">/</span>
              <span className="tracking-widest uppercase text-[var(--text-primary)] font-semibold">
                DIGITAL ATELIER & EXPERIMENTAL BENCH
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-[-0.035em] leading-[0.96] text-[var(--text-primary)]">
              CREATIVE{' '}
              <span className="font-editorial italic font-normal text-[var(--accent)]">
                workbench.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[var(--text-muted)] lg:text-right text-left">
            <p className="leading-relaxed">
              Interactive browser experiments: SOC threat triage, cryptographic SHA-256 entropy, spring physics, and variable kinetic typography.
            </p>
            <div className="flex items-center lg:justify-end gap-2 text-[var(--accent)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>LIVE BROWSER EXPERIMENTS</span>
            </div>
          </div>
        </div>

        {/* Experiment Selector Bar */}
        <div className="pt-10 mb-8 flex flex-wrap gap-2.5 font-mono text-xs">
          {[
            { id: 'soc-triage', label: '01. SOC THREAT TRIAGE', icon: Terminal },
            { id: 'crypto-hash', label: '02. SHA-256 INTEGRITY', icon: ShieldAlert },
            { id: 'kinetic-physics', label: '03. KINETIC VECTOR PHYSICS', icon: Sparkles },
            { id: 'kinetic-typography', label: '04. VARIABLE KINETIC TYPE', icon: Type }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm border transition-all uppercase tracking-wider font-semibold ${
                  isActive
                    ? 'bg-[var(--text-primary)] text-[var(--bg-main)] border-[var(--text-primary)] shadow-sm'
                    : 'bg-[var(--surface-1)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--border-medium)]'
                }`}
                data-cursor="lab"
                data-cursor-text="PLAY"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ==================================================== */}
        {/* WORKBENCH 1: SOC Packet & Alert Triage Simulator */}
        {/* ==================================================== */}
        {activeTab === 'soc-triage' && (
          <div className="border-y border-[var(--border-subtle)] bg-[var(--surface-1)]/25 p-6 sm:p-10 lg:p-12 space-y-8 text-left">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                <span className="font-bold text-[var(--text-primary)]">
                  NETWORK TELEMETRY STREAM // L1 SOC DEFENSE WORKBENCH
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--text-muted)]">FILTER:</span>
                {(['ALL', 'CRITICAL', 'SUSPICIOUS'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setFilterThreat(lvl)}
                    className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase transition-colors ${
                      filterThreat === lvl
                        ? 'bg-[var(--accent)] text-white'
                        : 'bg-[var(--surface-2)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Packet List Queue */}
              <div className="lg:col-span-6 space-y-3">
                <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                  NETWORK STREAM ({filteredPackets.length} EVENTS)
                </span>
                <div className="space-y-2">
                  {filteredPackets.map((pkt) => {
                    const isSelected = selectedPacket.id === pkt.id;
                    return (
                      <div
                        key={pkt.id}
                        onClick={() => setSelectedPacket(pkt)}
                        className={`p-3.5 rounded-sm border cursor-pointer font-mono text-xs transition-all ${
                          isSelected
                            ? 'bg-[var(--surface-2)] border-[var(--accent)] shadow-sm'
                            : 'bg-[var(--bg-main)] border-[var(--border-subtle)] hover:border-[var(--border-medium)]'
                        }`}
                        data-cursor="pointer"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-bold text-[var(--text-primary)]">{pkt.id}</span>
                          <span
                            className={`px-2 py-0.5 rounded-sm text-[10px] font-bold ${
                              pkt.threatLevel === 'CRITICAL'
                                ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                : pkt.threatLevel === 'SUSPICIOUS'
                                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                : 'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20'
                            }`}
                          >
                            {pkt.threatLevel}
                          </span>
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] truncate">
                          {pkt.signature}
                        </div>
                        <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[var(--border-subtle)] text-[10px] text-[var(--text-muted)]">
                          <span>{pkt.protocol}:{pkt.port}</span>
                          <span className={pkt.status === 'BLOCKED' ? 'text-rose-400 font-bold' : pkt.status === 'TRIAGED' ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-muted)]'}>
                            [{pkt.status}]
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Packet Deep Inspector */}
              <div className="lg:col-span-6 space-y-4">
                <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block">
                  PACKET INSPECTION & ACTION CONSOLE
                </span>
                <div className="p-5 rounded-sm bg-[var(--bg-main)] border border-[var(--border-medium)] space-y-4 font-mono text-xs">
                  <div className="space-y-1">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase">RAW SIGNATURE</span>
                    <div className="text-[var(--text-primary)] font-bold text-sm">{selectedPacket.signature}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-2 border-y border-[var(--border-subtle)] text-[11px]">
                    <div>
                      <span className="text-[var(--text-muted)] block text-[10px]">SOURCE IP</span>
                      <span className="text-[var(--text-primary)]">{selectedPacket.sourceIp}</span>
                    </div>
                    <div>
                      <span className="text-[var(--text-muted)] block text-[10px]">DESTINATION IP</span>
                      <span className="text-[var(--text-primary)]">{selectedPacket.destIp}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-[var(--text-muted)] uppercase">PAYLOAD DECODE</span>
                    <pre className="p-3 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[11px] text-[var(--accent)] overflow-x-auto whitespace-pre-wrap break-all">
                      {selectedPacket.payloadSummary}
                    </pre>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => handleTriage(selectedPacket.id, 'BLOCKED')}
                      className="px-4 py-2 rounded-sm bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase transition-colors"
                    >
                      BLOCK IP (FIREWALL)
                    </button>
                    <button
                      onClick={() => handleTriage(selectedPacket.id, 'TRIAGED')}
                      className="px-4 py-2 rounded-sm bg-[var(--text-primary)] hover:bg-[var(--accent)] text-[var(--bg-main)] hover:text-white font-bold text-xs uppercase transition-colors"
                    >
                      MARK BENIGN & CLEAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* WORKBENCH 2: Cryptographic Integrity & Hash Sandbox */}
        {/* ==================================================== */}
        {activeTab === 'crypto-hash' && (
          <div className="border-y border-[var(--border-subtle)] bg-[var(--surface-1)]/25 p-6 sm:p-10 lg:p-12 space-y-8 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
              <span className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[var(--accent)]" />
                SHA-256 AVALANCHE EFFECT & DATA INTEGRITY VERIFIER
              </span>
              <span className="text-[var(--accent)] font-semibold">CIA TRIAD: INTEGRITY</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-[var(--text-muted)] text-[11px] mb-2 uppercase tracking-wider font-semibold">
                    TEST INPUT PAYLOAD (TYPE TO WATCH REAL-TIME AVALANCHE)
                  </label>
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm bg-[var(--bg-main)] border border-[var(--border-medium)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder="Type anything..."
                  />
                </div>

                <div>
                  <label className="block text-[var(--text-muted)] text-[11px] mb-2 uppercase tracking-wider font-semibold">
                    SALT / HMAC SECRET KEY (ENTROPY ENHANCER)
                  </label>
                  <input
                    type="text"
                    value={salt}
                    onChange={(e) => setSalt(e.target.value)}
                    className="w-full px-4 py-3 rounded-sm bg-[var(--bg-main)] border border-[var(--border-medium)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder="Secret salt..."
                  />
                </div>

                <div className="p-4 rounded-sm bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[11px] text-[var(--text-secondary)] space-y-1">
                  <span className="font-bold text-[var(--text-primary)] block">What is the Avalanche Effect?</span>
                  <p>
                    A single bit modification in the input text flips roughly 50% of the output hash bits irreversibly, ensuring that any tampering with payload data in transit is instantly detected.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4 font-mono text-xs">
                <div className="p-5 rounded-sm bg-[var(--bg-main)] border border-[var(--border-medium)] space-y-3">
                  <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                    <span>DIGEST: SHA-256 (256-BIT)</span>
                    <span className="text-[var(--accent)] font-bold">ENTROPY: {entropyScore} BITS/SYMBOL</span>
                  </div>

                  <div className="p-3.5 rounded-sm bg-[var(--surface-1)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--accent)] break-all leading-relaxed select-all font-semibold">
                    {generatedHash}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)]">
                    <span>HEX LENGTH: 64 CHARS</span>
                    <span>IRREVERSIBLE ONE-WAY DIGEST</span>
                  </div>
                </div>

                <div className="p-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--surface-2)] text-xs text-[var(--text-secondary)]">
                  <span className="font-bold text-[var(--accent)] block mb-1">Production Applications:</span>
                  Session token signature validation, password hashing with bcrypt/salt, and verifying tamper-free database document states.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* WORKBENCH 3: Kinetic Physics & Vector Mesh Sandbox */}
        {/* ==================================================== */}
        {activeTab === 'kinetic-physics' && (
          <div className="border-y border-[var(--border-subtle)] bg-[var(--surface-1)]/25 p-6 sm:p-10 lg:p-12 space-y-8 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
              <span className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[var(--accent)]" />
                SPRING VECTOR FIELD SIMULATION (HOVER OVER CANVAS)
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSimRunning(!isSimRunning)}
                  className="px-3.5 py-1.5 rounded-sm bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[10px] text-[var(--text-primary)] flex items-center gap-1.5 uppercase font-bold border border-[var(--border-subtle)]"
                >
                  {isSimRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isSimRunning ? 'PAUSE SIM' : 'RESUME SIM'}</span>
                </button>
              </div>
            </div>

            <div className="relative rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] overflow-hidden">
              <canvas
                ref={kineticCanvasRef}
                className="w-full h-[360px] cursor-crosshair block"
              />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] text-[var(--text-muted)] pointer-events-none uppercase tracking-wider">
                HOVER & DEFLECT PARTICLES · SPRING ELASTICITY = 0.08
              </div>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* WORKBENCH 4: Kinetic Variable Typography & Matrix Sandbox */}
        {/* ==================================================== */}
        {activeTab === 'kinetic-typography' && (
          <div className="border-y border-[var(--border-subtle)] bg-[var(--surface-1)]/25 p-6 sm:p-10 lg:p-12 space-y-8 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)] font-mono text-xs">
              <span className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Type className="w-4 h-4 text-[var(--accent)]" />
                VARIABLE TYPOGRAPHY & GLYPH MORPHER
              </span>
              <button
                onClick={() => setIsScrambled(true)}
                className="px-3.5 py-1.5 rounded-sm bg-[var(--text-primary)] hover:bg-[var(--accent)] text-[var(--bg-main)] hover:text-white font-bold text-[10px] uppercase transition-colors"
              >
                SCRAMBLE GLYPHS
              </button>
            </div>

            {/* Live Typographic Canvas */}
            <div className="p-8 sm:p-12 rounded-sm bg-[var(--bg-main)] border border-[var(--border-subtle)] min-h-[220px] flex items-center justify-center text-center overflow-hidden transition-all">
              <div
                className={`transition-all duration-200 select-none ${
                  isHollow
                    ? 'text-transparent [-webkit-text-stroke:1.5px_var(--accent)]'
                    : 'text-[var(--text-primary)]'
                }`}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: typoWeight,
                  letterSpacing: `${typoTracking}px`,
                  transform: `skewX(${typoSlant}deg)`,
                  fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
                  lineHeight: '1.1'
                }}
              >
                {scrambleDisplay}
              </div>
            </div>

            {/* Control Sliders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 font-mono text-xs border-t border-[var(--border-subtle)]">
              <div className="space-y-2">
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>FONT WEIGHT</span>
                  <span className="text-[var(--accent)] font-bold">{typoWeight}</span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={900}
                  step={50}
                  value={typoWeight}
                  onChange={(e) => setTypoWeight(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>TRACKING</span>
                  <span className="text-[var(--accent)] font-bold">{typoTracking}px</span>
                </div>
                <input
                  type="range"
                  min={-2}
                  max={24}
                  step={1}
                  value={typoTracking}
                  onChange={(e) => setTypoTracking(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[var(--text-muted)]">
                  <span>SLANT ANGLE</span>
                  <span className="text-[var(--accent)] font-bold">{typoSlant}°</span>
                </div>
                <input
                  type="range"
                  min={-15}
                  max={15}
                  step={1}
                  value={typoSlant}
                  onChange={(e) => setTypoSlant(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                />
              </div>
            </div>

            {/* Secondary Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-mono text-xs">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={typoText}
                  onChange={(e) => setTypoText(e.target.value)}
                  className="px-4 py-2 rounded-sm bg-[var(--bg-main)] border border-[var(--border-medium)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none w-64 sm:w-80"
                  placeholder="Custom text..."
                />
                <button
                  onClick={() => setIsHollow(!isHollow)}
                  className={`px-3 py-2 rounded-sm border text-[10px] font-bold uppercase transition-colors ${
                    isHollow ? 'bg-[var(--accent)] text-white border-[var(--accent)]' : 'bg-[var(--surface-2)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                  }`}
                >
                  {isHollow ? 'OUTLINE: ON' : 'SOLID: ON'}
                </button>
              </div>

              <span className="text-[10px] text-[var(--text-muted)]">
                VARIABLE FONT SPEC // SYNE DISPLAY
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
