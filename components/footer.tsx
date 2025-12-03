import Link from 'next/link';

export function Footer() {
  return (
    <footer className="section-shell text-sm text-[var(--text-secondary)]">
      <div className="wave-panel flex flex-wrap items-center justify-between gap-3 px-6 py-6">
        <p>© {new Date().getFullYear()} Yağmur Geçim · Crafted with love and Next.js 14.</p>
        <div className="flex items-center gap-4">
          <Link href="mailto:yagmur.gcm@gmail.com" className="font-semibold text-[var(--color-2)]">
            yagmur.gcm@gmail.com
          </Link>
          <Link href="https://linkedin.com/in/yagmurgecim" target="_blank" className="font-semibold text-[var(--color-2)]">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
