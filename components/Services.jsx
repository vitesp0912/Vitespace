'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GlobeIcon, SearchPlusIcon, BotIcon, DatabaseIcon, MegaphoneIcon, CodeIcon, BuildIcon } from './Icons';

const iconMap = {
  websites: CodeIcon,
  seo: SearchPlusIcon,
  marketing: MegaphoneIcon,
  crmAutomation: DatabaseIcon,
  chatbots: BotIcon,
  customSoftware: BuildIcon,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 'websites',
      icon: 'websites',
      title: 'Websites',
      description: 'Custom-built websites with CMS, e-commerce capabilities, and conversion-focused design',
      bestFor: 'Businesses needing a professional online presence',
      outcomes: [
        'Fast-loading, mobile-responsive sites',
        'SEO-optimized from day one',
        'Easy content management',
        'E-commerce ready',
      ],
      subServices: [
        'Static Websites',
        'Dynamic Websites (CMS-based, admin panels, dashboards)',
        'Business Websites',
        'Portfolio Websites',
        'E-commerce Websites',
        'Booking & Appointment Websites',
        'Custom Web Applications',
        'Website Redesign & Modernization',
      ],
    },
    {
      id: 'seo',
      icon: 'seo',
      title: 'SEO',
      description: 'Technical audits, keyword strategy, and ongoing optimization to rank higher',
      bestFor: 'Businesses wanting to be found online',
      outcomes: [
        'Higher search rankings',
        'More organic traffic',
        'Better local visibility',
        'Long-term growth',
      ],
      subServices: [
        'On-Page SEO',
        'Technical SEO',
        'Off-Page SEO & Backlinking',
        'Local SEO',
        'Keyword Research & SEO Strategy',
        'Site Speed Optimization',
        'SEO Audit & Reporting',
        'Content Optimization',
      ],
    },
    {
      id: 'marketing',
      icon: 'marketing',
      title: 'Performance Marketing',
      description: 'Google Ads, Facebook/Instagram campaigns, and conversion tracking',
      bestFor: 'Businesses ready to scale with paid ads',
      outcomes: [
        'Targeted ad campaigns',
        'Clear ROI tracking',
        'Lower cost per acquisition',
        'Scalable growth',
      ],
      subServices: ['Google Ads', 'Meta Ads', 'Conversion Tracking', 'Campaign Management'],
    },
    {
      id: 'crmAutomation',
      icon: 'crmAutomation',
      title: 'CRM & Automation',
      description: 'Sales pipeline setup, customer database systems, workflow automation, and performance dashboards',
      bestFor: 'Businesses wanting to streamline operations and manage customer relationships',
      outcomes: [
        'Centralized customer data',
        'Automated sales pipeline and workflows',
        'Hours saved weekly through automation',
        'Real-time insights and dashboards',
        'Fewer errors and consistent processes',
        'Better team coordination',
      ],
      subServices: [
        'Custom CRM Systems',
        'Lead Management Systems',
        'Sales Pipeline Dashboards',
        'Booking Management CRM',
        'Inventory Tracking Tools',
        'Invoice & Payment Tracking Systems',
        'Business Workflow Apps',
        'Web + Mobile Admin Dashboards',
        'WhatsApp/Email Integrated CRM',
      ],
    },
    {
      id: 'chatbots',
      icon: 'chatbots',
      title: 'AI & Rule-Based Chatbots',
      description: 'Automated customer support and lead qualification through intelligent chatbots',
      bestFor: 'Businesses needing 24/7 customer support',
      outcomes: [
        'Instant customer responses',
        'Lead qualification',
        'Reduced support load',
        'Better customer experience',
      ],
      subServices: [
        'Rule-Based Chatbots',
        'Generative AI Chatbots',
        'WhatsApp Chatbots',
        'Website Chatbots',
        'Lead Qualification Bots',
        'Support Automation Bots',
        'Booking & Query Handling Bots',
        'Custom Bot Integrations (API / CRM / WhatsApp)',
      ],
    },
    {
      id: 'customSoftware',
      icon: 'customSoftware',
      title: 'Customised Software Solutions',
      description: 'Tailored software applications built specifically for your business processes and requirements',
      bestFor: 'Businesses with unique workflows needing specialized solutions',
      outcomes: [
        'Software tailored to your exact needs',
        'Seamless integration with existing systems',
        'Scalable architecture for future growth',
        'Complete ownership and control',
        'Ongoing support and maintenance',
        'Competitive advantage through customization',
      ],
      subServices: ['Custom Web Applications', 'Desktop Software', 'Mobile Applications', 'API Development', 'System Integration', 'Legacy System Modernization'],
    },
  ];

  const selected = services[selectedService];
  const IconComponent = iconMap[selected.icon];

  return (
    <section className="section-padding">
      <div className="container-content">
        {/* Section Header */}
        <motion.div
          className="mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-3 sm:mb-4">
            <span className="text-eyebrow text-white/60">SERVICES</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-2 sm:mb-4 uppercase px-2 sm:px-4">
            Everything you need to go digital - under one roof.
          </h2>
          <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-2xl px-2 sm:px-4">
            From websites to automation, we handle it all so you can focus on your business.
          </p>
        </motion.div>

        {/* Two-Column Layout - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-[35%_65%] gap-8 lg:gap-12">
          {/* Left Column - Service Categories */}
          <div className="space-y-3">
            {services.map((service, index) => {
              const ServiceIcon = iconMap[service.icon];
              const isActive = index === selectedService;
              
              return (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 ease-premium ${
                    isActive
                      ? 'bg-white/10 border-white/30 shadow-lg'
                      : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-3">
                    {ServiceIcon && (
                      <div className={`mt-0.5 ${isActive ? 'text-white' : 'text-white/60'}`}>
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold text-sm uppercase ${isActive ? 'text-white' : 'text-white/80'}`}>
                          {service.title}
                        </h3>
                        {service.comingSoon && (
                          <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-white/60">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className={`text-xs leading-relaxed ${isActive ? 'text-white/80' : 'text-white/60'}`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column - Service Detail Panel - Desktop */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10"
            >
              {/* Title Row */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {IconComponent && (
                      <div className="text-white">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    )}
                    <h3 className="text-2xl md:text-3xl font-semibold text-white uppercase">
                      {selected.title}
                    </h3>
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/80">
                    Best for: {selected.bestFor}
                  </span>
                </div>
              </div>

              {/* Two-Column Inner Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Left: Outcomes */}
                <div>
                  <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                    What You Get
                  </h4>
                  <ul className="space-y-3">
                    {selected.outcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        <span className="text-white/90 text-sm leading-relaxed">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Visual Representation */}
                <div className="bg-white/5 rounded-xl p-6 flex items-center justify-center border border-white/10">
                  {IconComponent && (
                    <IconComponent className="w-20 h-20 text-cyan-400" />
                  )}
                </div>
            </div>

              {/* Sub-Services Tags */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                  Included Services
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.subServices.map((sub, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="group relative px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-premium w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Talk to us about this</span>
                  <svg 
                    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {services.map((service, index) => {
            const ServiceIcon = iconMap[service.icon];
            const isExpanded = expandedService === index;
            
            return (
              <div
                key={service.id}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setExpandedService(isExpanded ? null : index)}
                  className="w-full text-left p-4 flex items-center justify-between"
                >
                  <div className="flex items-start gap-3 flex-1">
                    {ServiceIcon && (
                      <div className="mt-0.5 text-white/60">
                        <ServiceIcon className="w-5 h-5" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm uppercase text-white">
                          {service.title}
                        </h3>
                        {service.comingSoon && (
                          <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full text-white/60">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs leading-relaxed text-white/60">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  {/* Expand/Collapse Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 text-white/60"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-0 border-t border-white/10">
                        {/* Best For */}
                        <div className="mb-6 pt-4">
                          <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/80">
                            Best for: {service.bestFor}
                          </span>
                        </div>

                        {/* Outcomes */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                            What You Get
                          </h4>
                          <ul className="space-y-3">
                            {service.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                                <span className="text-white/90 text-sm leading-relaxed">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Sub-Services Tags */}
                        <div className="pt-6 border-t border-white/10">
                          <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                            Included Services
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.subServices.map((sub, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80"
                              >
                                {sub}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-6">
                          <button
                            onClick={() => {
                              const element = document.querySelector('#contact');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }
                            }}
                            className="group relative px-6 py-3 bg-white text-black font-semibold text-sm rounded-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-premium w-full flex items-center justify-center gap-2"
                          >
                            <span className="relative z-10">Talk to us about this</span>
                            <svg 
                              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={false}
                            />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
