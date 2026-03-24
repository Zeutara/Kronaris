import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Process from './components/Process'
import BeforeAfter from './components/BeforeAfter'
import WhyKronaris from './components/WhyKronaris'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <BeforeAfter />
        <WhyKronaris />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
