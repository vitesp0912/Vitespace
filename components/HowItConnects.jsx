'use client';

import { motion } from 'framer-motion';
import { ConsultationIcon, BuildIcon, RocketIcon, DatabaseIcon, ChartBarIcon } from './Icons';

export default function HowItConnects() {
  const steps = [
    {
      icon: ConsultationIcon,
      title: 'Discovery',
      label: 'Understanding your needs',
    },
    {
      icon: BuildIcon,
      title: 'Website & Setup',
      label: 'Building your foundation',
    },
    {
      icon: DatabaseIcon,
      title: 'Traffic & Leads',
      label: 'Driving visitors',
    },
    {
      icon: ChartBarIcon,
      title: 'CRM & Automation',
      label: 'Managing relationships',
    },
    {
      icon: RocketIcon,
      title: 'Insights & Growth',
      label: 'Scaling your business',
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
    <section className="section-padding bg-black/60 border-y border-white/10">
      <div className="container-content">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight text-center uppercase px-4">
            How It All Connects
          </h2>
          <p className="text-white/70 text-sm sm:text-base text-center mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            A complete system that grows with your business
          </p>
        </motion.div>

        {/* Flow Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:flex items-center justify-between relative">
            {/* Connecting Line - starts from right edge of first circle, ends at left edge of last circle */}
            {/* Each circle is 96px (w-24), so radius is 48px. With 5 items flex-1, each takes ~20% space */}
            <motion.div
              className="absolute top-12 h-0.5 bg-white/20"
              style={{
                left: 'calc(10% + 3rem)', // First circle center (10% of container) + half circle (48px = 3rem) = right edge
                width: 'calc(80% - 6rem)', // Distance between first and last circle centers (80%) minus both circle radii (6rem total)
                transformOrigin: 'left',
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            />

            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center relative z-10 flex-1"
                >
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/15 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-white" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-1 text-center uppercase">
                    {step.title}
                  </h3>

                  {/* Label */}
                  <p className="text-xs text-white/60 text-center">
                    {step.label}
                  </p>

                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-12 right-0 translate-x-1/2 text-white/30 text-xl">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                    {IconComponent && (
                      <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-white mb-1 uppercase">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {step.label}
                    </p>
                  </div>

                  {/* Connector Line (except last) */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-6 bg-white/20"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

