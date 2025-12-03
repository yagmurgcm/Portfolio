import { SectionTitle } from '@/components/section-title';
import { education, skills } from '@/lib/data';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="section-shell space-y-16">
      <SectionTitle
        eyebrow="About"
        title="Yağmur Geçim — Computer Science student."
        description="I study Computer Science at Sabancı University (B.Sc. CS, graduating June 2027) and focus on building thoughtful, user-centered systems."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="wave-panel space-y-6 p-8">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Bio</h3>
          <p className="text-[var(--text-secondary)]">
            I build premium, gradient-forward experiences that make complex technical systems intuitive. My process spans research, system design, and
            full-stack development across Next.js, Nest.js, and thoughtful data pipelines.
          </p>
          <p className="text-[var(--text-secondary)]">
            Beyond the classroom, I dive into strategy fellowships, corporate case journeys, and technical internships to connect policy and
            engineering. Communication design and motion craft are key to how I narrate ideas—each interaction feels intentional, minimal, and alive.
          </p>
          <div className="rounded-2xl border border-[rgba(109,73,209,0.15)] bg-white/70 p-4 text-sm text-[var(--text-secondary)]">
            <p className="font-semibold text-[var(--text-primary)]">Sabancı University — B.Sc. Computer Science</p>
            <p>{education.graduation}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
            <span>
              Gmail: <Link href="mailto:yagmur.gcm@gmail.com" className="text-[var(--color-2)]">yagmur.gcm@gmail.com</Link>
            </span>
            <span>
              LinkedIn: <Link href="https://linkedin.com/in/yagmurgecim" className="text-[var(--color-2)]">linkedin.com/in/yagmurgecim</Link>
            </span>
            <span>
              GitHub: <Link href="https://github.com/yagmurgcm" className="text-[var(--color-2)]">github.com/yagmurgcm</Link>
            </span>
          </div>
        </div>
        <div className="wave-panel space-y-6 p-8">
          <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Skills</h3>
          <div className="grid grid-cols-2 gap-3 text-[var(--text-secondary)]">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 rounded-2xl border border-[rgba(109,73,209,0.15)] bg-white/80 px-4 py-3 text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-linear1 to-linear3" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
