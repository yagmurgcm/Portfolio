'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroIllustration } from './hero-illustration';

const cards = [
  {
    label: 'Focus',
    items: ['Software Engineering', 'SQL', 'Computer Networks']
  },
  {
    label: 'Currently exploring',
    items: ['Next.js', 'Nest.js', 'SQL Optimization', 'Systems Design']
  },
  {
    label: 'Based in',
    items: ['Istanbul, Türkiye']
  }
];

export function Hero() {
  return (
    <section className="section-shell space-y-12">
      <div className="hero-bg soft-shadow p-10">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              <p className="font-serif text-sm uppercase tracking-[0.6em] text-[var(--text-secondary)]">
                Hello, I&apos;m Yağmur
              </p>
              <p className="font-serif text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
                As a future-focused Computer Scientist, I thrive on continuous learning and transforming complex ideas into practical, high-impact
                solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/projects" className="gradient-btn inline-flex items-center rounded-full px-8 py-3 text-base font-semibold">
                Explore My Work
              </Link>
              <a href="mailto:yagmur.gcm@gmail.com" className="text-[var(--color-2)] font-semibold">
                Email Me →
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="info-card"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-secondary)]">{card.label}</p>
            <ul className="mt-4 space-y-1 text-base text-[var(--text-primary)]">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
