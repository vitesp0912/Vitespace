'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function WhatWeHelp() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    { title: 'Websites', description: 'Custom-built digital presence' },
    { title: 'SEO', description: 'Get found by your customers' },
    { title: 'Automation', description: 'Save time, scale faster' },
    { title: 'CRM / Dashboards', description: 'Track what matters' },
    { title: 'Ads & Marketing', description: 'Reach the right audience' },
    { title: 'Ads & Marketing', description: 'Reach the right audience' },
  ];

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20">
      <motion.div 
        className="w-full max-w-7xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          What We Help You With
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:hover:bg-white/15 transition-all duration-300 group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.08 * index, ease: 'easeOut' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4 md:group-hover:scale-105 transition-transform">
                {service.title}
              </h3>
              <p className="text-white opacity-80 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
