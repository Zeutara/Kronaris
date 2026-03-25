import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Services from '../components/Services'
import BeforeAfter from '../components/BeforeAfter'
import Process from '../components/Process'
import WebsiteScore from '../components/WebsiteScore'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Services />
      <BeforeAfter />
      <Process />
      <WebsiteScore />
      <Testimonials />
      <CTA />
    </>
  )
}
