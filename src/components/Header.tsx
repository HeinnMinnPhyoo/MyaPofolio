import { useLang } from '../context/LanguageContext'

const NAV_IDS = [
  'about',
  'experience',
  'education',
  'skills',
  'credentials',
  'contact',
] as const

export function Header() {
  const { t, lang, setLang } = useLang()

  return (
    <header className="site-header no-print-chrome">
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <div className="site-header__inner">
        <a className="brand" href="#top">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M10.5 3.5h3v6.5H20v3h-6.5V20h-3v-7H4v-3h6.5z"
              />
            </svg>
          </span>
          <span className="brand__text">
            <span className="brand__name">{t.hero.role}</span>
            <span className="brand__sub">{t.brand}</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {NAV_IDS.map((id) => (
            <a key={id} href={`#${id}`}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              {t.langEn}
            </button>
            <button
              type="button"
              className={lang === 'my' ? 'is-active' : ''}
              onClick={() => setLang('my')}
              aria-pressed={lang === 'my'}
            >
              {t.langMy}
            </button>
          </div>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => window.print()}
          >
            {t.printCv}
          </button>
        </div>
      </div>
    </header>
  )
}
