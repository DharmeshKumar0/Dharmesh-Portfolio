import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailerPos, setTrailerPos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<
    'default' | 'pointer' | 'project' | 'lab' | 'contact' | 'explore' | 'drag' | 'inspect'
  >('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect mouse / fine pointer vs touch device
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const customText = cursorTarget.getAttribute('data-cursor-text');

        if (type === 'project') {
          setCursorState('project');
          setCursorText(customText || 'VIEW PROJECT');
        } else if (type === 'lab') {
          setCursorState('lab');
          setCursorText(customText || 'PLAY');
        } else if (type === 'contact') {
          setCursorState('contact');
          setCursorText(customText || "LET'S TALK");
        } else if (type === 'explore') {
          setCursorState('explore');
          setCursorText(customText || 'EXPLORE');
        } else if (type === 'drag') {
          setCursorState('drag');
          setCursorText(customText || 'DRAG');
        } else if (type === 'inspect') {
          setCursorState('inspect');
          setCursorText(customText || 'INSPECT');
        } else {
          setCursorState('pointer');
          setCursorText('');
        }
      } else if (target.closest('a, button, input, [role="button"], select, textarea')) {
        setCursorState('pointer');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const loop = () => {
      setTrailerPos((prev) => ({
        x: lerp(prev.x, position.x, 0.2),
        y: lerp(prev.y, position.y, 0.2),
      }));
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const isSpecial =
    cursorState === 'project' ||
    cursorState === 'lab' ||
    cursorState === 'contact' ||
    cursorState === 'explore' ||
    cursorState === 'drag' ||
    cursorState === 'inspect';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Center sharp dot */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out ${
          isSpecial
            ? 'h-0 w-0 opacity-0'
            : cursorState === 'pointer'
            ? 'h-2 w-2 bg-[var(--accent)]'
            : 'h-1.5 w-1.5 bg-[var(--accent)]'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Trailing ring with contextual state */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full font-mono text-[9px] font-bold tracking-widest transition-[width,height,background-color,border-color,opacity] duration-200 ease-out ${
          isSpecial
            ? 'h-16 w-16 bg-[var(--accent)] text-white shadow-lg border border-[var(--accent)] scale-100'
            : cursorState === 'pointer'
            ? 'h-10 w-10 border border-[var(--accent)] bg-[var(--accent)]/10'
            : 'h-7 w-7 border border-[var(--text-primary)]/20 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trailerPos.x}px, ${trailerPos.y}px, 0)`,
        }}
      >
        {isSpecial && <span className="uppercase text-center px-1 leading-none">{cursorText}</span>}
      </div>
    </div>
  );
};
