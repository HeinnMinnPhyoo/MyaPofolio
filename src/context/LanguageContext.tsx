import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { copy, type Copy, type Lang } from '../content/copy'

const STORAGE_KEY = 'portfolio:lang:v1'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Copy
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'my') return stored
  } catch {
    /* private mode or disabled storage */
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore quota / private mode */
    }
    document.documentElement.lang = lang === 'my' ? 'my' : 'en'
    document.documentElement.dataset.lang = lang
    document.title = copy[lang].metaTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', copy[lang].metaDescription)
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
  }, [])

  const value: LanguageContextValue = { lang, setLang, t: copy[lang] }

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLang must be used within LanguageProvider')
  }
  return ctx
}
