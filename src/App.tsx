import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import BeforeAfter from './components/BeforeAfter'
import Process from './components/Process'
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
        <BeforeAfter />
        <Process />
        <WhyKronaris />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
