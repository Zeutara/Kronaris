import { useState, useEffect } from 'react'
import logo from '../assets/kronaris-full.png'

const links = ['Services', 'Process', 'About', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => { setOpen(false); document.body.style.overflow = '' }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-400 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-rule' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          <a href="#">
            <img src={logo} alt="Kronaris" className="h-10" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[13px] text-gray-2 hover:text-white transition-colors">{l}</a>
            ))}
            <a href="#contact" className="text-[13px] text-black font-medium bg-gold px-5 py-2 hover:bg-gold/85 transition-colors">
              Request a Rebuild
            </a>
          </div>
          <button className="md:hidden p-2 z-[60]" onClick={() => { setOpen(v => !v); document.body.style.overflow = open ? '' : 'hidden' }}>
            <div className="space-y-1.5">
              <span className={`block w-5 h-px bg-white transition-all ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-6 transition-opacity ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={close} className="text-white text-lg tracking-wide hover:text-gold transition-colors">{l}</a>
        ))}
        <a href="#contact" onClick={close} className="text-black text-sm font-medium bg-gold px-6 py-2.5 mt-2">Request a Rebuild</a>
      </div>
    </>
  )
}
