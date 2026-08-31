import { useLang } from '../context/LanguageContext'
import { SectionHeader } from './SectionHeader'

export function About() {
  const { t } = useLang()
  const { about } = t

  return (
    <section className="section" id="about">
      <SectionHeader eyebrow={about.eyebrow} title={about.title} index="01" />
      <div className="prose">
        <p>{about.p1}</p>
        <p>{about.p2}</p>
        <p>{about.p3}</p>
      </div>
    </section>
  )
}
