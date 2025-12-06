'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { SpeedIcon, DesignIcon, MobileIcon, SEOIcon } from './Icons';

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
        {/* Main Title */}
        <motion.h2
  className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-6 drop-shadow-[0_0_20px_white]"
>
  Modern Websites for
</motion.h2>

<motion.h3
  className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white/80 uppercase tracking-tight mb-20"
>
  Modern Businesses
</motion.h3>


        {/* Features Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
  {features.map((feature, index) => (
    <motion.div
      key={index}
      className="
        bg-black/60 
        border border-white/30 
        backdrop-blur-lg 
        rounded-2xl 
        p-8 
        hover:bg-black/80 
        hover:border-white 
        hover:shadow-[0_0_25px_rgba(255,255,255,0.45)]
        transition-all duration-300
      "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: typeof window !== 'undefined' && window.innerWidth < 768, amount: 0.4 }}
      transition={{ duration: 0.8, delay: 0.1 * index, ease: "easeOut" }}
    >
      <div className="mb-4 flex justify-center text-white">
        <feature.icon className="w-16 h-16 text-white brightness-200 drop-shadow-[0_0_10px_white]" />
      </div>
      <h4 className="text-2xl font-bold text-white tracking-wide uppercase mb-2">
        {feature.title}
      </h4>
      <p className="text-white/70 text-sm tracking-tight">
        {feature.description}
      </p>
    </motion.div>
  ))}
</div>

      </motion.div>
    </section>
  );
}
