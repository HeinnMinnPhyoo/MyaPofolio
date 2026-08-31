import { About } from './components/About'
import { Contact } from './components/Contact'
import { Credentials } from './components/Credentials'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Values } from './components/Values'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div className="page">
        <Header />
        <main id="main">
          <Hero />
          <About />
          <Values />
          <Experience />
          <Education />
          <Skills />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
