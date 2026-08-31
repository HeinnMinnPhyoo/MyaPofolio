import { useLang } from '../context/LanguageContext'
import { SectionHeader } from './SectionHeader'

export function Values() {
  const { t } = useLang()
  const { values } = t

  return (
    <section className="section section--tight">
      <SectionHeader eyebrow={values.eyebrow} title={values.title} index="02" />
      <ul className="value-grid">
        {values.items.map((item) => (
          <li key={item.title} className="value-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
