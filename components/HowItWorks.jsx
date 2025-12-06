'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ConsultationIcon, BuildIcon, LaunchIcon } from './Icons';

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
      description: 'We listen to your needs and goals',
      icon: ConsultationIcon,
    },
    {
      number: '02',
      title: 'Build',
      description: 'We craft your solution with care',
      icon: BuildIcon,
    },
    {
      number: '03',
      title: 'Launch',
      description: 'You go live and start growing',
      icon: LaunchIcon,
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
          viewport={{ once: typeof window !== 'undefined' && window.innerWidth < 768, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          How We Work
        </motion.h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 hover:bg-white/15 transition-all duration-300 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: typeof window !== 'undefined' && window.innerWidth < 768, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.15 * index, ease: 'easeOut' }}
            >
              {/* Step Number */}
              <div className="text-6xl font-extrabold text-white opacity-20 mb-4">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="mb-6 flex justify-start text-white">
                <step.icon className="w-16 h-16" />
              </div>
              
              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-white opacity-80 text-lg leading-relaxed">
                {step.description}
              </p>

              {/* Connector Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-white opacity-30 text-4xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
