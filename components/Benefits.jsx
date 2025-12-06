'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
      title: 'No Complexity',
      description: 'Simple, straightforward solutions that just work',
    },
    {
      title: 'Clear Communication',
      description: 'Always in the loop, no surprises',
    },
    {
      title: 'Everything Handled',
      description: 'From start to finish, we take care of it all',
    },
    {
      title: 'Partner, Not Agency',
      description: 'We grow with you, not just deliver and disappear',
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
          viewport={{ once: typeof window !== 'undefined' && window.innerWidth < 768, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
<h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
  Why Choose
</h2>
<h3 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.35)]">
  VITESPACE
</h3>

        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
  key={index}
  className="
    bg-black/70 
    border border-white/15 
    backdrop-blur-lg 
    rounded-2xl 
    p-12 
    hover:bg-black/85 
    hover:border-white/40
    hover:shadow-[0_0_35px_rgba(255,255,255,0.45)]
    transition-all duration-300
  "
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: typeof window !== 'undefined' && window.innerWidth < 768, amount: 0.4 }}
  transition={{ duration: 0.8, delay: 0.1 * index, ease: 'easeOut' }}
>
  <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] mb-4">
    {benefit.title}
  </h3>
  <p className="text-white/70 text-lg leading-relaxed tracking-tight">
    {benefit.description}
  </p>
</motion.div>

          ))}
        </div>
      </motion.div>
    </section>
  );
}
