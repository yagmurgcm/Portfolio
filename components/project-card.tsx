'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  link?: string;
}

export function ProjectCard({ title, description, year, link }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="glass-card flex flex-col gap-5 rounded-3xl p-8"
    >
      <div className="flex items-center gap-4 text-[var(--text-secondary)]">
        <span className="text-xs uppercase tracking-[0.4em]">{year}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-linear1/40 to-linear3/40" />
      </div>
      <h3 className="font-serif text-3xl font-semibold leading-snug tracking-[0.05em] text-[var(--text-primary)]">
        {title}
      </h3>
      <p className="text-base text-[var(--text-secondary)]">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="text-[var(--color-2)] font-semibold">
          GitHub ↗
        </a>
      )}
    </motion.article>
  );
}
