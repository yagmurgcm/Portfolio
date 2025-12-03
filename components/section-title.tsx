'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

const alignStyles: Record<'left' | 'center', string> = {
  left: 'items-start text-left',
  center: 'items-center text-center'
};

export function SectionTitle({ eyebrow, title, description, align = 'left', children }: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-4 ${alignStyles[align]} max-w-3xl`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-[0.5em] text-[var(--text-secondary)]">{eyebrow}</span>
      )}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
          <span className="bg-gradient-to-r from-linear1 via-linear2 to-linear3 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        {description && <p className="text-lg text-[var(--text-secondary)]">{description}</p>}
        <span className="h-[3px] w-24 rounded-full bg-gradient-to-r from-linear1 via-linear2 to-linear3" />
      </motion.div>
      {children}
    </div>
  );
}
