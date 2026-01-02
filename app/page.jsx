'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import Hero from '@/components/Hero';
import TheProblem from '@/components/TheProblem';
import Services from '@/components/Services';
import HowItConnects from '@/components/HowItConnects';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import FinalCTA from '@/components/FinalCTA';
import ParticlesComponent from '@/assets/Particles';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enableParallax, setEnableParallax] = useState(true);
  
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
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
            alt="VITESPACE - Digital solutions background showcasing modern technology and business growth" 
            className="w-full h-full object-cover brightness-[0.75] contrast-[1.35]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
        {/* Particles Layer */}
        <motion.div 
          className="absolute inset-0 z-10"
          style={{ y: heroY }}
        >
          <ParticlesComponent id="tsparticles-hero" />
        </motion.div>
        {/* Dark Overlay - Bottom Half */}
        <div className="absolute inset-0 z-[15] pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-black/95 via-black/70 via-black/50 to-transparent"></div>
        </div>
        {/* Content */}
        <div className="relative z-20">
          <Hero />
        </div>
      </div>
      
      {/* 2. The Problem Section - Solid Background */}
      <div 
        id="problem" 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black z-20"
      >
        <TheProblem />
      </div>

      {/* 3. Services Section - Solid Background */}
      <div 
        ref={servicesRef}
        id="services" 
        className="relative bg-gradient-to-b from-black via-gray-900 to-black z-20"
      >
        <Services />
      </div>

      {/* 4. How It All Connects */}
      <HowItConnects />

      {/* 5. Benefits - Solid Black Background */}
      <div ref={benefitsRef} id="about" className="relative bg-black z-20">
          <Benefits />
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
