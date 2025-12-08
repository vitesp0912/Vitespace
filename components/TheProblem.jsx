'use client';

import { motion } from 'framer-motion';
import { SettingsIcon, ChartBarIcon, BuildIcon, BotIcon } from './Icons';

export default function TheProblem() {
  const painPoints = [
    {
      icon: BuildIcon,
      category: 'WEBSITE',
      title: 'Building a website feels confusing and never-ending.',
      description: 'Too many decisions, too much back-and-forth, and no clear direction.',
    },
    {
      icon: ChartBarIcon,
      category: 'LEADS',
      title: 'Even after the website is built, enquiries don\'t come in.',
      description: 'A site without structure, speed, or CTAs doesn\'t convert.',
    },
    {
      icon: SettingsIcon,
      category: 'MARKETING',
      title: 'Marketing fails because the website isn\'t set up for it.',
      description: 'No tracking, no landing pages, no SEO foundation — results feel random.',
    },
    {
      icon: BotIcon,
      category: 'OPERATIONS',
      title: 'Every enquiry needs manual follow-up — most get missed.',
      description: 'Without CRM or automation, leads slip away every day.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="section-padding bg-black/40">
      <div className="container-content">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4">
            <span className="text-eyebrow text-white/60">THE REALITY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-3xl uppercase">
            Going digital shouldn't feel this hard.
          </h2>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 ease-premium cursor-pointer"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-white/60 group-hover:text-white/80 transition-colors flex-shrink-0">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-white/80 mb-1.5 sm:mb-2 uppercase tracking-wider">
                      {point.category}
                    </h3>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">
                      {point.title}
                    </h4>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

