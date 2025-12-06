'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CoreOffering from '@/components/CoreOffering';
import WhatWeHelp from '@/components/WhatWeHelp';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import FinalCTA from '@/components/FinalCTA';
import ParticlesComponent from '@/assets/Particles';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enableParallax, setEnableParallax] = useState(true);
  
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const coreRef = useRef(null);
  const whatWeHelpRef = useRef(null);
  const benefitsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const ctaRef = useRef(null);

  // Disable parallax on mobile for performance
  useEffect(() => {
    const checkDevice = () => {
      setEnableParallax(window.matchMedia('(min-width: 1024px)').matches);
    };

    checkDevice();
    
    let resizeTimeout;
    const handleResize = () => {
      // Debounce resize events to prevent stuttering
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDevice, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Parallax scroll transforms (only on desktop)
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(heroScroll, [0, 1], enableParallax ? ["0%", "50%"] : ["0%", "0%"]);
  const heroOpacity = useTransform(heroScroll, [0, 0.5, 1], enableParallax ? [1, 0.8, 0.3] : [1, 1, 1]);

  const { scrollYProgress: coreScroll } = useScroll({
    target: coreRef,
    offset: ["start end", "end start"]
  });
  const coreY = useTransform(coreScroll, [0, 1], enableParallax ? ["15%", "-15%"] : ["0%", "0%"]);
  const coreBgY = useTransform(coreScroll, [0, 1], enableParallax ? ["0%", "30%"] : ["0%", "0%"]);
  const coreOpacity = useTransform(coreScroll, [0, 0.5, 1], enableParallax ? [0.3, 1, 0.3] : [1, 1, 1]);

  const { scrollYProgress: whatWeHelpScroll } = useScroll({
    target: whatWeHelpRef,
    offset: ["start end", "end start"]
  });
  const whatWeHelpY = useTransform(whatWeHelpScroll, [0, 1], enableParallax ? ["20%", "-20%"] : ["0%", "0%"]);

  const { scrollYProgress: benefitsScroll } = useScroll({
    target: benefitsRef,
    offset: ["start end", "end start"]
  });
  const benefitsY = useTransform(benefitsScroll, [0, 1], enableParallax ? ["15%", "-15%"] : ["0%", "0%"]);
  const benefitsBgY = useTransform(benefitsScroll, [0, 1], enableParallax ? ["0%", "30%"] : ["0%", "0%"]);
  const benefitsOpacity = useTransform(benefitsScroll, [0, 0.5, 1], enableParallax ? [0.3, 1, 0.3] : [1, 1, 1]);

  const { scrollYProgress: howItWorksScroll } = useScroll({
    target: howItWorksRef,
    offset: ["start end", "end start"]
  });
  const howItWorksY = useTransform(howItWorksScroll, [0, 1], enableParallax ? ["20%", "-20%"] : ["0%", "0%"]);

  const { scrollYProgress: ctaScroll } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  const ctaY = useTransform(ctaScroll, [0, 1], enableParallax ? ["15%", "-15%"] : ["0%", "0%"]);

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Custom Cursor is mounted globally in layout */}
      
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
      </div>
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* 1. Hero Section with Particles */}
      <div ref={heroRef} id="home" className="relative min-h-screen noise-bg overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0" 
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <img 
            src="/synth.png" 
            alt="Hero background" 
            className="w-full h-full object-cover brightness-[0.75] contrast-[1.35]"
          />
        </motion.div>
        {/* Particles Layer */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ y: heroY }}
        >
          <ParticlesComponent id="tsparticles-hero" />
        </motion.div>
        {/* Content */}
        <div className="relative z-20">
          <Hero />
        </div>
      </div>
      
      {/* 2. Services Section - Solid Background */}
      <div 
        ref={servicesRef}
        id="solutions" 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black z-20"
      >
        <Services />
      </div>

      {/* 3. Core Offering - Particles Background */}
      <div ref={coreRef} className="relative min-h-screen noise-bg overflow-hidden z-10">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: coreBgY, opacity: coreOpacity }}
        >
          <img 
            src="/syn.png" 
            alt="Core offering background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Particles Layer */}
        <motion.div 
          className="absolute inset-0 z-5"
          style={{ y: coreY }}
        >
          <ParticlesComponent id="tsparticles-core" />
        </motion.div>
        {/* Content */}
        <motion.div 
          className="relative z-10"
          style={{ y: coreY }}
        >
          <CoreOffering />
        </motion.div>
      </div>

      {/* 4. What We Help - Solid Background */}
      <motion.div 
        ref={whatWeHelpRef}
        id="services" 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black z-20"
        style={{ y: whatWeHelpY }}
      >
        <WhatWeHelp />
      </motion.div>

      {/* 5. Benefits - Particles Background */}
      <div ref={benefitsRef} id="about" className="relative min-h-screen noise-bg overflow-hidden z-10">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: benefitsBgY, opacity: benefitsOpacity }}
        >
          <img 
            src="/synsun.png" 
            alt="Benefits background" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Particles Layer */}
        <motion.div 
          className="absolute inset-0 z-5"
          style={{ y: benefitsY }}
        >
          <ParticlesComponent id="tsparticles-benefits" />
        </motion.div>
        {/* Content */}
        <motion.div 
          className="relative z-10"
          style={{ y: benefitsY }}
        >
          <Benefits />
        </motion.div>
      </div>

      {/* 6. How It Works - Solid Background */}
      <motion.div 
        ref={howItWorksRef}
        id="process" 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black z-20"
        style={{ y: howItWorksY }}
      >
        <HowItWorks />
      </motion.div>

      {/* 7. Final CTA - Particles Background */}
      <div ref={ctaRef} id="contact" className="relative min-h-screen noise-bg overflow-hidden z-10">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: ctaY }}
        >
          <ParticlesComponent id="tsparticles-cta" />
        </motion.div>
        <motion.div 
          className="relative z-10"
          style={{ y: ctaY }}
        >
          <FinalCTA />
        </motion.div>
      </div>
    </main>
  );
}
