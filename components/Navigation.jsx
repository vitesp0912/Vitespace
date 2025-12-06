'use client';

import { useState, useEffect } from 'react';

export default function Navigation({ onMenuClick }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="flex items-center justify-between">
        {/* Left: Timestamp */}
        <div className="mono text-xs md:text-sm text-white tracking-wider">
          LOCAL/{time}
        </div>

        {/* Center: Menu Button */}
        <button
          onClick={onMenuClick}
          className="relative p-4 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <div className="relative w-5 h-5">
            {/* Top dot */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
            {/* Left dot */}
            <span className="absolute top-1/2 left-0 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
            {/* Right dot */}
            <span className="absolute top-1/2 right-0 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
            {/* Bottom dot */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
          </div>
        </button>

        {/* Right: Contact Button */}
        <button 
          onClick={() => {
            const element = document.querySelector('#contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="glass-button px-6 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wider"
        >
          CONTACT NOW
        </button>
      </div>
    </nav>
  );
}
