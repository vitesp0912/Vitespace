'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];
const PLACEHOLDER = '/portfolio/placeholder-hero.svg';

const featured = {
  name: 'Celeste Abode',
  niche: 'Real estate',
  url: 'https://www.celesteabode.com',
  image: '/portfolio/celeste.png',
};

const rest = [
  {
    name: 'The Aam Altair',
    niche: 'Hospitality',
    url: 'https://theaamaltair.com',
    image: '/portfolio/aamaltair.png',
  },
  {
    name: 'Petrofi',
    niche: 'Business software',
    url: 'https://petrofi.in',
    image: '/portfolio/PETROFI.png',
  },
  {
    name: 'The Conscious Kilo',
    niche: 'Ecommerce',
    url: 'https://consciouskilo.com',
    image: '/portfolio/consciousk.png',
  },
  {
    name: 'Bobby Pall',
    niche: 'Photography',
    url: 'https://bobbypall-prototype.vercel.app/',
    image: '/portfolio/bobbypall.png',
  },
];

function Shot({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover object-top transition-transform duration-700 ease-premium group-hover:scale-[1.03] ${className}`}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = PLACEHOLDER;
      }}
    />
  );
}

export default function PortfolioShowcase() {
  return (
    <section id="work" className="home-section scroll-mt-24">
      <div className="home-shell">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <div>
            <p className="text-eyebrow text-white/45 mb-4">Selected work</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.05]">
              Built. Shipped. Live.
            </h2>
          </div>
          <Link
            href="/our-work"
            className="text-sm text-white/60 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
          >
            See all projects
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <motion.a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-4 sm:mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] aspect-[16/9] sm:aspect-[21/9]">
            <Shot src={featured.image} alt={`${featured.name} website`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-eyebrow text-white/55 mb-1">{featured.niche}</p>
                <h3 className="text-xl sm:text-3xl font-semibold text-white">{featured.name}</h3>
              </div>
              <span className="hidden sm:inline-flex text-sm text-white/70 group-hover:text-cyan-300 transition-colors">
                Visit site →
              </span>
            </div>
          </div>
        </motion.a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {rest.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06, ease }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] aspect-[16/10]">
                <Shot src={project.image} alt={`${project.name} project`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-eyebrow text-white/55 mb-1">{project.niche}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
