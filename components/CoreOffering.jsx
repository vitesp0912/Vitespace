'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SpeedIcon, DesignIcon, MobileIcon, SEOIcon, ChartBarIcon, ClipboardCheckIcon } from './Icons';

export default function CoreOffering() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features = [
    { icon: SpeedIcon, title: 'Speed', description: 'Lightning-fast load times' },
    { icon: DesignIcon, title: 'Design', description: 'Beautiful, modern interfaces' },
    { icon: MobileIcon, title: 'Mobile-First', description: 'Perfect on every device' },
    { icon: SEOIcon, title: 'SEO-Ready', description: 'Built to be found' },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20">
      <motion.div 
        className="w-full max-w-7xl mx-auto text-center"
        style={{ y, opacity }}
      >
        {/* Main Title (non-card text animations, re-trigger on view) */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Modern Websites for
        </motion.h2>

        <motion.h3
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white/80 uppercase tracking-tight mb-20"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
        >
          Modern Businesses
        </motion.h3>


        {/* Features Grid (no card animations) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {features.map((feature, index) => (
    <div
      key={index}
      className="
        bg-black/60 
        border border-white/30 
        backdrop-blur-lg 
        rounded-2xl 
        p-8
      "
    >
      <div className="mb-4 flex justify-center text-white">
        <feature.icon className="w-16 h-16 text-white" />
      </div>
      <h4 className="text-2xl font-bold text-white tracking-wide uppercase mb-2">
        {feature.title}
      </h4>
      <p className="text-white/70 text-sm tracking-tight">
        {feature.description}
      </p>
    </div>
  ))}
</div>

      </motion.div>
    </section>
  );
}
