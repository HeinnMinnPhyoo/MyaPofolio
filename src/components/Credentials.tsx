import { useLang } from '../context/LanguageContext'
import { SectionHeader } from './SectionHeader'

export function Credentials() {
  const { t } = useLang()
  const { credentials } = t

  return (
    <section className="section" id="credentials">
      <SectionHeader
        eyebrow={credentials.eyebrow}
        title={credentials.title}
        index="06"
      />
      <ul className="cred-list">
        {credentials.items.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </li>
        ))}
      </ul>
      <p className="muted-note">{credentials.note}</p>
    </section>
  )
}
