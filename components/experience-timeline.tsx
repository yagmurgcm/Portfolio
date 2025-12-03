'use client';

import { experiences } from '@/lib/data';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  return (
    <div className="relative pl-8">
      <span className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-linear1 via-linear2 to-linear3" />
      <div className="flex flex-col gap-10">
        {experiences.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="wave-panel relative pl-8 pr-6 pt-6 pb-6"
          >
            <span className="absolute left-1.5 top-10 h-3 w-3 rounded-full border-2 border-white bg-gradient-to-r from-linear1 to-linear3" />
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--text-secondary)]">{item.period}</p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">{item.role}</h3>
                <p className="text-[var(--text-secondary)]">{item.company}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-[var(--text-secondary)]">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
