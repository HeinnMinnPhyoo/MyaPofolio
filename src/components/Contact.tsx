import { useLang } from '../context/LanguageContext'
import { SectionHeader } from './SectionHeader'

export function Contact() {
  const { t } = useLang()
  const { contact } = t

  return (
    <section className="section section--contact" id="contact">
      <SectionHeader eyebrow={contact.eyebrow} title={contact.title} index="07" />
      <p className="contact__body">{contact.body}</p>
      <dl className="contact-dl">
        <div>
          <dt>{contact.locationLabel}</dt>
          <dd>{contact.location}</dd>
        </div>
        <div>
          <dt>{contact.workplaceLabel}</dt>
          <dd>{contact.workplace}</dd>
        </div>
      </dl>
      <p className="muted-note no-print-chrome">{contact.printHint}</p>
    </section>
  )
}
