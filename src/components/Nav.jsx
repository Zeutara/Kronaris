import { useState, useEffect } from 'react'
import logo from '../assets/kronaris-full.png'

const links = ['Services', 'Process', 'Diagnostics', 'About', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => { setOpen(false); document.body.style.overflow = '' }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-rule' : 'border-b border-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-5 flex items-center justify-between h-12">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Kronaris" className="h-7" />
          </a>
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.12em] text-g3 hover:text-g1 transition-colors">{l}</a>
            ))}
            <span className="w-px h-4 bg-rule mx-1" />
            <a href="#contact" className="text-[11px] uppercase tracking-[0.12em] text-gold hover:text-gold/80 transition-colors">Request Rebuild</a>
          </div>
          <button className="lg:hidden p-1.5 z-[60]" onClick={() => { setOpen(v => !v); document.body.style.overflow = open ? '' : 'hidden' }}>
            <div className="space-y-1">
              <span className={`block w-4 h-px bg-white transition-all ${open ? 'rotate-45 translate-y-[2.5px]' : ''}`} />
              <span className={`block w-4 h-px bg-white transition-all ${open ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-5">
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`} onClick={close} className="text-g1 text-lg tracking-wide hover:text-gold transition-colors">{l}</a>)}
          <a href="#contact" onClick={close} className="text-black text-xs font-medium bg-gold px-5 py-2 mt-3">Request Rebuild</a>
        </div>
      )}
    </>
  )
}
