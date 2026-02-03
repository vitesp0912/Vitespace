'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const CURSOR_Z_INDEX = 2147483647; // Max z-index so cursor is always on top of popups/menu

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    // Check if device is desktop (non-touch)
    const checkIsDesktop = () => {
      return window.matchMedia('(min-width: 1024px)').matches && 
             !('ontouchstart' in window);
    };

    setIsDesktop(checkIsDesktop());

    const handleResize = () => {
      setIsDesktop(checkIsDesktop());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick || 
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop]);

  // Don't render on mobile/tablet or touch devices
  if (!isDesktop || !mounted) return null;

  const cursorEl = (
    <div
      className={`custom-cursor ${isPointer ? 'custom-cursor-pointer' : ''}`}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isPointer ? '40px' : '20px',
        height: isPointer ? '40px' : '20px',
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        border: 'none',
        pointerEvents: 'none',
        zIndex: CURSOR_Z_INDEX,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.15s ease-out, width 0.2s ease, height 0.2s ease',
        mixBlendMode: 'difference',
      }}
    />
  );

  // Portal to body so cursor is last in DOM and always on top of popups/menu
  return createPortal(cursorEl, document.body);
}
