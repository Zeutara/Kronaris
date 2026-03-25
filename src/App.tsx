import { Routes, Route } from 'react-router-dom'
import { useReveal } from './hooks/useReveal'
import Nav from './components/Nav'
import Footer from './components/Footer'
import StickyCtaButton from './components/StickyCtaButton'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <StickyCtaButton />
    </>
  )
}
