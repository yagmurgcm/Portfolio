import { Hero } from '@/components/hero';
import { SectionTitle } from '@/components/section-title';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-24">
      <Hero />
      <section className="section-shell">
        <div className="wave-panel space-y-10 px-8 py-10">
          <SectionTitle eyebrow="Signature Work" title="Featured projects." />
          <div className="grid gap-8 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <Link href="/projects" className="text-[var(--color-2)] font-semibold">
            View the full project archive →
          </Link>
        </div>
      </section>
    </div>
  );
}
