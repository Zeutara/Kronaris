import { useState, useEffect } from 'react'
import logo from '../assets/kronaris-logo.png'

const links = ['Services', 'Process', 'About', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => { setOpen(false); document.body.style.overflow = '' }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black border-b border-rule' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-24">
          <a href="#">
            <img src={logo} alt="Kronaris" className="h-20 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[14px] text-t3 hover:text-t1 transition-colors">{l}</a>
            ))}
            <a href="#contact" className="text-[14px] font-medium bg-gold text-black px-5 py-2.5 rounded-lg hover:bg-gold-h transition-colors">
              Request a Rebuild
            </a>
          </div>
          <button className="md:hidden p-2 z-[60]" onClick={() => { setOpen(v => !v); document.body.style.overflow = open ? '' : 'hidden' }}>
            <div className="space-y-1.5">
              <span className={`block w-5 h-px bg-white transition-all ${open ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6">
          <img src={logo} alt="Kronaris" className="h-16 mb-4" />
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={close} className="text-t1 text-xl hover:text-gold transition-colors">{l}</a>)}
          <a href="#contact" onClick={close} className="font-medium bg-gold text-black px-6 py-3 rounded-lg mt-3">Request a Rebuild</a>
        </div>
      )}
    </>
  )
}
