// src/components/sections/Experience.jsx
import { experiences } from '../../data/experience'
import ExperienceCard from '../ui/ExperienceCard'

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Section header */}
        <h2
          className="text-3xl font-bold text-gray-900 tracking-wide"
          style={{ fontVariant: 'small-caps' }}
        >
          Experience
        </h2>

        {/* Cards — side by side on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-6">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              company={exp.company}
              role={exp.role}
              dates={exp.dates}
              description={exp.description}
              link={exp.link}
            />
          ))}
        </div>

      </div>
    </section>
  )
}