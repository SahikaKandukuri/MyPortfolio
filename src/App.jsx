import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import DSAJourney from './components/DSAJourney'
import Timeline from './components/Timeline'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-base min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <DSAJourney />
        <Timeline />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
