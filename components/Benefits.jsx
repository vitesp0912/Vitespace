'use client';

import { motion } from 'framer-motion';
import { CheckShieldIcon, ConsultationIcon, PackageIcon, HeartHandshakeIcon } from '@/components/Icons';

const iconMap = {
  speed: CheckShieldIcon,
  communication: ConsultationIcon,
  everything: PackageIcon,
  partner: HeartHandshakeIcon,
};

export default function Benefits() {
  const benefits = [
    {
      icon: 'speed',
      title: 'No Complexity',
      description: 'Simple, straightforward solutions that just work',
      how: 'We explain everything in plain language, provide single-point contact, and handle all technical details so you can focus on your business',
    },
    {
      icon: 'communication',
      title: 'Clear Communication',
      description: 'Always in the loop, no surprises',
      how: 'Weekly updates, transparent pricing, and accessible support via your preferred channel (Slack, email, or calls)',
    },
    {
      icon: 'everything',
      title: 'Everything Handled',
      description: 'From start to finish, we take care of it all',
      how: 'End-to-end project management including hosting setup, domain configuration, security, and maintenance',
    },
    {
      icon: 'partner',
      title: 'Partner, Not Agency',
      description: 'We grow with you, not just deliver and disappear',
      how: 'Ongoing support packages, regular check-ins, and strategic advice as your business evolves',
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
    <section className="section-padding">
      <div className="container-content">
        {/* Centered Heading Section */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-3 sm:mb-4 uppercase px-4">
            Our Core Values
</h2>
          <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto px-4">
  VITESPACE was founded on a simple principle: technology should empower businesses, not complicate them. We're a team of developers, designers, and strategists who bridge the gap between complex digital solutions and business owners who just want things to work.
</p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 ease-premium"
              >
                {/* Icon */}
                {Icon && (
                  <div className="text-white/60 mb-3 sm:mb-4">
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1.5 sm:mb-2 uppercase">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {benefit.description}
                </p>
                
                {/* How Section */}
                <div className="pt-3 sm:pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {benefit.how}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        </div>
    </section>
  );
}
