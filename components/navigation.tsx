'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' }
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50 flex items-center justify-between rounded-full border border-white/60 bg-white/80 px-6 py-3 text-sm shadow-lg backdrop-blur-xl">
      <span className="text-sm font-semibold tracking-[0.3em] text-[var(--text-secondary)]">YAĞMUR GEÇİM</span>
      <div className="flex items-center gap-4 text-[var(--text-secondary)]">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1 transition ${
                active
                  ? 'bg-gradient-to-r from-linear1 to-linear3 text-white shadow-md'
                  : 'hover:text-[var(--text-primary)]'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
