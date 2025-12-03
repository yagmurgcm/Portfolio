import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const avegas = localFont({
  src: [{ path: './fonts/AvegasRoyale.woff2', weight: '400', style: 'normal' }],
  variable: '--font-avegas',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Yağmur Geçim — Portfolio',
  description: 'Premium Linear-inspired portfolio built with Next.js 14, TailwindCSS, and Framer Motion.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${avegas.variable} bg-transparent text-[var(--text-primary)]`}>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 pb-12 pt-8 md:px-0">
          <Navigation />
          <main className="flex-1 space-y-16">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
