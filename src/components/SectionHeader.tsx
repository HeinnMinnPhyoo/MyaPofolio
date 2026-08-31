type SectionHeaderProps = {
  eyebrow: string
  title: string
  index: string
}

export function SectionHeader({ eyebrow, title, index }: SectionHeaderProps) {
  return (
    <header className="section-head">
      <div className="section-head__meta">
        <p className="eyebrow">{eyebrow}</p>
        <span className="section-head__index" aria-hidden="true">
          {index}
        </span>
      </div>
      <h2>{title}</h2>
    </header>
  )
}
