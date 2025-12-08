'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ConsultationIcon, BuildIcon, RocketIcon } from './Icons';

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      icon: ConsultationIcon,
      items: [
        '45-60 minute discovery call',
        'Needs analysis and goal setting',
        'Preliminary strategy and timeline',
      ],
    },
    {
      number: '02',
      title: 'Build',
      icon: BuildIcon,
      items: [
        'Regular progress updates (weekly/bi-weekly)',
        'Feedback loops and revisions',
        'Testing and optimization phase',
      ],
    },
    {
      number: '03',
      title: 'Launch',
      icon: RocketIcon,
      items: [
        'Final review and training',
        'Go-live support',
        'Post-launch optimization and analytics setup',
      ],
    },
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
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          How We Work
        </motion.h2>

        {/* Steps (no card animations) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 relative hover:bg-white/15 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="text-6xl font-extrabold text-white opacity-20 mb-4">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="mb-6 flex justify-start text-white opacity-60">
                <step.icon className="w-16 h-16" />
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-6">
                {step.title}
              </h3>
              
              {/* Items List */}
              <ul className="space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-3 text-white opacity-80 text-base leading-relaxed"
                  >
                    <span className="text-white opacity-40 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Connector Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-white opacity-30 text-4xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
