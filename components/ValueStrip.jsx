'use client';

import { motion } from 'framer-motion';

export default function ValueStrip() {
  const values = [
    { icon: '🌐', label: 'Website' },
    { icon: '📈', label: 'Marketing' },
    { icon: '⚙️', label: 'Automation' },
    { icon: '🤖', label: 'Chatbots' },
  ];

  return (
    <section className="py-16 bg-black/60 border-y border-white/10">
      <div className="container-content">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-white/60 text-sm md:text-base">All stitched into</div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ amount: 0.5 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group px-4 py-2 bg-white/5 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 ease-premium cursor-pointer"
              >
                <span className="mr-2">{value.icon}</span>
                <span className="text-sm font-medium text-white">{value.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-white/60 text-sm md:text-base">one system.</div>
        </motion.div>
      </div>
    </section>
  );
}

