'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import FinalCTA from '@/components/FinalCTA';

const PLACEHOLDER_HERO = '/portfolio/placeholder-hero.svg';

const projects = [
  {
    id: 1,
    name: 'Celeste Abode',
    niche: 'Real estate consultant website',
    url: 'https://www.celesteabode.com',
    displayUrl: 'celesteabode.com',
    inProgress: false,
    heroImage: '/portfolio/celeste.png',
  },
  {
    id: 2,
    name: 'The Aam Altair',
    niche: 'Short-stay website',
    url: 'https://theaamaltair.com',
    displayUrl: 'theaamaltair.com',
    inProgress: false,
    heroImage: '/portfolio/aamaltair.png',
  },
  {
    id: 3,
    name: 'The Conscious Kilo',
    niche: 'Ecommerce website',
    url: 'https://consciouskilo.com',
    displayUrl: 'consciouskilo.com',
    inProgress: false,
    heroImage: '/portfolio/consciousk.png',
  },
  {
    id: 4,
    name: 'VITESPACE',
    niche: 'Our own website',
    url: 'https://vitespace.com',
    displayUrl: 'vitespace.com',
    inProgress: false,
    heroImage: '/portfolio/vitespace.png',
  },
  {
    id: 5,
    name: 'Bobby Pall Photography',
    niche: 'Portfolio website',
    url: 'https://bobbypall-prototype.vercel.app/',
    displayUrl: 'bobbypall-prototype.vercel.app',
    inProgress: true,
    heroImage: '/portfolio/bobbypall.png',
  },
  {
    id: 6,
    name: 'Visit My Ayodhya',
    niche: 'Travel planner website',
    url: 'https://visit-my-ayodhya.vercel.app/',
    displayUrl: 'visit-my-ayodhya.vercel.app',
    inProgress: true,
    heroImage: '/portfolio/visitmyayodhya.png',
  },
];

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Same as homepage: Navigation + MenuOverlay (and Contact Now inside Nav) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="relative z-10 text-white noise-bg">
        <section className="pt-40 sm:pt-44 md:pt-36 pb-12 sm:pb-16 md:pb-20">
          <div className="container-content max-w-5xl mx-auto">
            {/* Intro - centered */}
            <div className="text-center mb-12 md:mb-16">
              <motion.span
                className="text-eyebrow text-white/60 block mb-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                CLIENT WORK
              </motion.span>

              <motion.h1
                className="font-semibold text-white uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                Portfolio
              </motion.h1>

              <motion.p
                className="text-white/70 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Selected projects we've designed and shipped for brands and businesses.
              </motion.p>
            </div>

            {/* Project Cards - left-aligned */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {projects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.08 * index }}
                  className="group block rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-cyan-400/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  {/* Hero image */}
                  <div className="relative aspect-video w-full bg-white/5 overflow-hidden">
                    <img
                      src={project.heroImage}
                      alt={`${project.name} hero`}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = PLACEHOLDER_HERO;
                      }}
                    />
                  </div>
                  {/* Card content */}
                  <div className="p-4 md:p-5">
                    <p className="text-eyebrow text-white/50 mb-1.5">{project.niche}</p>
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-semibold text-white text-lg md:text-xl group-hover:text-cyan-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                      {project.inProgress && (
                        <span className="shrink-0 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-cyan-400 border border-cyan-400/50 rounded-full px-2 py-0.5">
                          In progress
                        </span>
                      )}
                    </div>
                    <p className="text-white/50 text-sm truncate" title={project.displayUrl}>
                      {project.displayUrl}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-3 text-cyan-400/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Visit site
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA - same as homepage: Book Your Consultation Call */}
        <div id="contact">
          <FinalCTA />
        </div>
      </div>
    </main>
  );
}
