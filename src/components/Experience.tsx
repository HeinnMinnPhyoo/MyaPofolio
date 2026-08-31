import { useLang } from '../context/LanguageContext'
import { SectionHeader } from './SectionHeader'

export function Experience() {
  const { t } = useLang()
  const { experience } = t

  return (
    <section className="section" id="experience">
      <SectionHeader
        eyebrow={experience.eyebrow}
        title={experience.title}
        index="03"
      />
      <article className="job">
        <div className="job__meta">
          <p className="job__role">{experience.role}</p>
          <p className="job__period">{experience.period}</p>
        </div>
        <p className="job__place">{experience.workplace}</p>
        <p className="job__intro">{experience.intro}</p>
        <ul className="duty-list">
          {experience.duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}
