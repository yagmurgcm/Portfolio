import { ExperienceTimeline } from '@/components/experience-timeline';
import { SectionTitle } from '@/components/section-title';

export default function ExperiencePage() {
  return (
    <section className="section-shell space-y-10">
      <SectionTitle
        eyebrow="Experience"
        title="A timeline of strategy, policy, and technology sprints."
        description="From Istanbul Policy Center to McKinsey fellowships and Beko IT rotations, I thrive in multidisciplinary scenes."
      />
      <div className="wave-panel px-8 py-10">
        <ExperienceTimeline />
      </div>
    </section>
  );
}
