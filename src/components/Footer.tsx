import { useLang } from '../context/LanguageContext'

export function Footer() {
  const { t } = useLang()

  return (
    <footer className="site-footer">
      <p className="site-footer__name">{t.footer.line}</p>
      <p className="muted-note">{t.footer.rights}</p>
    </footer>
  )
}
