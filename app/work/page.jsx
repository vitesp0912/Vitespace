'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import MenuOverlay from '@/components/MenuOverlay';
import ParticlesComponent from '@/assets/Particles';

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      year: '2024',
      description: 'Modern online shopping experience with seamless checkout',
    },
    {
      id: 2,
      title: 'Brand Identity System',
      category: 'Design',
      year: '2024',
      description: 'Complete visual identity for tech startup',
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'UI/UX',
      year: '2023',
      description: 'Fitness tracking app with intuitive interface',
    },
    {
      id: 4,
      title: 'Automation Dashboard',
      category: 'Systems',
      year: '2023',
      description: 'Business process automation and analytics',
    },
  ];

  return (
    <main className="min-h-screen bg-black noise-bg overflow-hidden relative">
      {/* Custom Cursor is mounted globally in layout */}
      
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesComponent id="tsparticles-work" />
      </div>
      
      <div className="relative z-10">
        <Navigation onMenuClick={() => setIsMenuOpen(true)} />
        <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        
        <div className="px-6 md:px-12 pt-32 pb-20">
          <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <motion.h1
          className="font-extrabold text-white uppercase text-7xl md:text-9xl mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WORK
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-16 max-w-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Selected projects showcasing our expertise in digital solutions
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-video mb-4 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                    {project.id}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-white font-bold text-2xl group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <span className="text-gray-500 text-sm">{project.year}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-2">{project.description}</p>
              
              <span className="text-gray-500 text-xs uppercase tracking-wider">
                {project.category}
              </span>
            </motion.div>
          ))}
        </div>
          </div>
        </div>
      </div>
    </main>
  );
}
