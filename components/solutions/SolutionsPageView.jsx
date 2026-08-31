'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import SolutionsView from '@/components/solutions/SolutionsView';

export default function SolutionsPageView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10 text-white">
        <SolutionsView />
      </div>
    </main>
  );
}
