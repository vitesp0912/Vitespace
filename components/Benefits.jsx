'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckShieldIcon, ConsultationIcon, PackageIcon, HeartHandshakeIcon } from '@/components/Icons';

const iconMap = {
  speed: CheckShieldIcon,
  communication: ConsultationIcon,
  everything: PackageIcon,
  partner: HeartHandshakeIcon,
};

export default function Benefits() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20">
      <motion.div 
        className="w-full max-w-7xl mx-auto"
        style={{ y, opacity }}
      >
        {/* Section Title */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
<h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
  Why Choose
</h2>
<h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]">
  VITESPACE
</h3>
<p className="text-white/80 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
  VITESPACE was founded on a simple principle: technology should empower businesses, not complicate them. We're a team of developers, designers, and strategists who bridge the gap between complex digital solutions and business owners who just want things to work.
</p>
        </motion.div>

        {/* Benefits Grid (no card animations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className="
                  bg-black/70 
                  border border-white/15 
                  backdrop-blur-lg 
                  rounded-2xl 
                  p-12
                  hover:bg-black/80
                  hover:border-white/25
                  transition-all duration-300
                "
              >
                {/* Icon */}
                {Icon && (
                  <div className="text-white opacity-60 mb-6">
                    <Icon className="w-14 h-14" />
                  </div>
                )}
                
                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] mb-4">
                  {benefit.title}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-lg leading-relaxed tracking-tight mb-6">
                  {benefit.description}
                </p>
                
                {/* How Section */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-3">
                    How we do this:
                  </h4>
                  <p className="text-white/60 text-base leading-relaxed">
                    {benefit.how}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
