import { useLang } from '../context/LanguageContext'
import { SectionHeader } from './SectionHeader'

export function Skills() {
  const { t } = useLang()
  const { skills } = t

  return (
    <section className="section" id="skills">
      <SectionHeader eyebrow={skills.eyebrow} title={skills.title} index="05" />
      <div className="skill-groups">
        {skills.groups.map((group) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
