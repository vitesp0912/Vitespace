'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import HomeHero from '@/components/home/HomeHero';
import TrustStrip from '@/components/home/TrustStrip';
import ServicePillars from '@/components/home/ServicePillars';
import ProcessEditorial from '@/components/home/ProcessEditorial';
import IndustriesGrid from '@/components/home/IndustriesGrid';
import Testimonials from '@/components/home/Testimonials';
import FAQAccordion from '@/components/home/FAQAccordion';
import HomeCTA from '@/components/home/HomeCTA';

export default function HomeView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10 text-white">
        <HomeHero />
        <TrustStrip />
        <ServicePillars />
        <IndustriesGrid />
        <ProcessEditorial />
        <Testimonials />
        <FAQAccordion />
        <HomeCTA />
      </div>
    </main>
  );
}
