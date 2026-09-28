'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import EmailPopup from '@/components/EmailPopup';
import AboutHero from '@/components/about/AboutHero';
import {
  AboutProblem,
  AboutIdentity,
  AboutConnect,
  AboutInlineCTA,
  AboutNextStep,
  AboutProcess,
  AboutBusiness,
  AboutClients,
  AboutTeam,
  AboutClose,
  AboutCTA,
} from '@/components/about/AboutSections';

export default function AboutView() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBuildOpen, setIsBuildOpen] = useState(false);

  return (
    <main className="about-page min-h-screen overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10">
        <AboutHero onStart={() => setIsBuildOpen(true)} />
        <AboutProblem />
        <AboutIdentity />
        <AboutConnect />
        <AboutInlineCTA
          onStart={() => setIsBuildOpen(true)}
          title="Want these pieces working together?"
          note="Tell us what needs to be built, marketed or automated."
        />
        <AboutNextStep />
        <AboutProcess />
        <AboutInlineCTA
          onStart={() => setIsBuildOpen(true)}
          title="Ready to start?"
          note="We'll figure out the next step with you."
        />
        <AboutBusiness />
        <AboutClients />
        <AboutTeam />
        <AboutClose />
        <AboutCTA onStart={() => setIsBuildOpen(true)} />
      </div>

      <EmailPopup isOpen={isBuildOpen} onClose={() => setIsBuildOpen(false)} />
    </main>
  );
}
