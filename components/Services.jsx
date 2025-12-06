'use client';

import { motion } from 'framer-motion';
import ServiceColumn from '@/components/ServiceColumn';

export default function Services() {
  const services = [
    {
      icon: 'globe',
      title: 'Presence',
      subtitle: 'Website Engineering',
      description: 'We build more than just websites — we create digital foundations. Starting with understanding your brand and audience, we engineer sites that convert visitors into customers while establishing your authority online.',
      items: [
        { label: 'Websites', detail: 'Custom WordPress, Webflow, or coded solutions' },
        { label: 'SEO', detail: 'Technical SEO, on-page optimization, local SEO' },
        { label: 'Modernization', detail: 'Update old sites with modern tech and design' },
        { label: 'Brand-ready', detail: 'Consistent visual identity across all pages' }
      ],
    },
    {
      icon: 'settings',
      title: 'Systems',
      subtitle: 'Digital Systems',
      description: 'Streamline your operations with tailored digital systems that eliminate manual work and centralize your business data.',
      items: [
        { label: 'CRM', detail: 'HubSpot, Salesforce, or custom solutions' },
        { label: 'Operational tools', detail: 'Inventory, scheduling, project management' },
        { label: 'Booking engines', detail: 'Integrated appointment systems' },
        { label: 'Dashboards', detail: 'Real-time KPI tracking and reporting' }
      ],
    },
    {
      icon: 'zap',
      title: 'Automation',
      subtitle: 'Business Automation',
      description: 'Turn repetitive tasks into automated workflows that save hours each week and ensure nothing falls through the cracks.',
      items: [
        { label: 'WhatsApp flows', detail: 'Automated customer support and follow-ups' },
        { label: 'Email sequences', detail: 'Drip campaigns for lead nurturing' },
        { label: 'Lead nurturing', detail: 'Automated scoring and follow-up systems' },
        { label: 'Internal automation', detail: 'Report generation, notification systems' }
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-16">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white uppercase tracking-tight mb-4">
            One-Stop
          </h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight opacity-60">
            Digital Solution
          </h3>
        </motion.div>

        {/* Three-Column Service Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
            >
              <ServiceColumn
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                items={service.items}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
