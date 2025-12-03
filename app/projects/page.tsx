import { ProjectCard } from '@/components/project-card';
import { SectionTitle } from '@/components/section-title';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <section className="section-shell space-y-10">
      <SectionTitle
        eyebrow="Projects"
        title="Research, finance builds, and expressive web systems."
        description="Editorial case studies—no thumbnails, just refined typography conveying impact and craft."
      />
      <div className="wave-panel px-8 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
