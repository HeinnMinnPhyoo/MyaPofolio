import { useLang } from '../context/LanguageContext'
import { SectionHeader } from './SectionHeader'

export function Education() {
  const { t } = useLang()
  const { education } = t

  return (
    <section className="section" id="education">
      <SectionHeader
        eyebrow={education.eyebrow}
        title={education.title}
        index="04"
      />
      <ol className="edu-list">
        {education.items.map((item) => (
          <li key={item.title} className="edu-item">
            <p className="edu-item__year">{item.year}</p>
            <div>
              <h3>{item.title}</h3>
              <p className="edu-item__place">{item.place}</p>
              <p>{item.note}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
