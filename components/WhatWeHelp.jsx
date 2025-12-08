
'use client';

import { motion } from 'framer-motion';
import { CodeIcon, SearchPlusIcon, BotIcon, DatabaseIcon, MegaphoneIcon, PenToolIcon } from '@/components/Icons';

const iconMap = {
  websites: CodeIcon,
  seo: SearchPlusIcon,
  automation: BotIcon,
  crm: DatabaseIcon,
  ads: MegaphoneIcon,
  content: PenToolIcon,
};

export default function WhatWeHelp() {

  const services = [
    { icon: 'websites', title: 'Websites', description: 'Custom-built websites with CMS, e-commerce capabilities, and conversion-focused design' },
    { icon: 'seo', title: 'SEO', description: 'Technical audits, keyword strategy, and ongoing optimization to rank higher' },
    { icon: 'automation', title: 'Automation', description: 'Zapier/Make integrations, custom bots, and workflow automation' },
    { icon: 'crm', title: 'CRM / Dashboards', description: 'Sales pipeline setup, customer database systems, and performance dashboards' },
    { icon: 'ads', title: 'Ads & Marketing', description: 'Google Ads, Facebook/Instagram campaigns, and conversion tracking' },
    { icon: 'content', title: 'Content Strategy', description: 'Blog content, social media planning, and email marketing campaigns' },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20">
      <div 
        className="w-full max-w-7xl mx-auto"
      >
        {/* Section Title */}
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          What We Help You With
        </motion.h2>

        {/* Services Grid (no card animations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 flex flex-col gap-4 hover:bg-white/15 transition-all duration-300"
              >
                {Icon && (
                  <div className="text-white opacity-60">
                    <Icon className="w-12 h-12" />
                  </div>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">
                  {service.title}
                </h3>
                <p className="text-white opacity-80 text-lg">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
