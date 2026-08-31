import { useLang } from '../context/LanguageContext'

export function Hero() {
  const { t } = useLang()
  const { hero, stats } = t

  return (
    <section className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">{hero.kicker}</p>
          <h1>{hero.name}</h1>
          <p className="hero__role">
            {hero.role}
            <span aria-hidden="true"> · </span>
            {hero.workplace}
          </p>
          <p className="hero__lead">{hero.lead}</p>
          <div className="hero__actions no-print-chrome">
            <a className="btn btn--gold" href="#contact">
              {t.nav.contact}
            </a>
            <button
              type="button"
              className="btn btn--on-navy"
              onClick={() => window.print()}
            >
              {t.printCv}
            </button>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="portrait-ring">
            <img
              src="/portrait.jpg"
              alt={hero.photoAlt}
              width={480}
              height={600}
            />
          </div>
        </div>
      </div>

      <ul className="stats" aria-label={t.experience.eyebrow}>
        {stats.map((stat) => (
          <li key={stat.label}>
            <span className="stats__value">{stat.value}</span>
            <span className="stats__label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
