'use client';

import { motion } from 'framer-motion';
import { ConsultationIcon, BuildIcon, RocketIcon } from './Icons';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover & Plan',
      icon: ConsultationIcon,
      items: [
        '45-60 minute discovery call',
        'Needs analysis and goal setting',
        'Preliminary strategy and timeline',
      ],
    },
    {
      number: '02',
      title: 'Build & Connect',
      icon: BuildIcon,
      items: [
        'Regular progress updates (weekly/bi-weekly)',
        'Feedback loops and revisions',
        'Testing and optimization phase',
      ],
    },
    {
      number: '03',
      title: 'Launch & Support',
      icon: RocketIcon,
      items: [
        'Final review and training',
        'Go-live support',
        'Post-launch optimization and analytics setup',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="section-padding">
      <div className="container-content">
        {/* Section Title */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-3 sm:mb-4 uppercase px-4">
            How we work with you
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto px-4">
            A simple, transparent process from discovery to launch
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 lg:p-8 hover:bg-white/8 hover:border-white/20 hover:scale-[1.02] transition-all duration-300 ease-premium"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white/10 group-hover:text-white/15 transition-colors">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="mb-4 sm:mb-6 text-white/60 group-hover:text-white/80 transition-colors">
                <step.icon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 uppercase pr-12 sm:pr-16">
                {step.title}
              </h3>
              
              {/* Items List */}
              <ul className="space-y-2 sm:space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start gap-2 sm:gap-3 text-white/80 text-xs sm:text-sm leading-relaxed"
                  >
                    <div className="mt-1.5 w-1.5 h-1.5 bg-white/60 rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Connector Arrow (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 text-white/30 text-2xl lg:text-3xl">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        </div>
    </section>
  );
}
