import { useState, useEffect } from 'react'
import logoFull from '../assets/kronaris-full.png'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => { setMenuOpen(false); document.body.style.overflow = '' }
  const toggleMenu = () => { setMenuOpen(v => !v); document.body.style.overflow = menuOpen ? '' : 'hidden' }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between h-24 md:h-28">
          <a href="#" aria-label="Kronaris Home">
            <img src={logoFull} alt="Kronaris" className="h-28 md:h-36 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-[13px] uppercase tracking-[0.15em] text-text-secondary hover:text-white transition-colors duration-300 relative group py-2">
                {l.label}
                <span className="absolute bottom-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <a href="#contact" className="text-xs uppercase tracking-[0.15em] text-black font-semibold bg-gold px-6 py-2.5 hover:bg-[#d4ab6e] transition-all duration-300">
              Get Started
            </a>
          </div>

          <button className="lg:hidden flex flex-col gap-[5px] p-2 z-[60]" onClick={toggleMenu} aria-label="Menu">
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-7 transition-opacity duration-400 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {links.map((l, i) => (
          <a key={l.href} href={l.href} onClick={closeMenu}
            className="text-white text-2xl uppercase tracking-[0.25em] font-extralight hover:text-gold transition-all duration-300"
            style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s', opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(10px)' }}>
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu} className="text-black text-sm uppercase tracking-[0.18em] font-semibold bg-gold px-8 py-3 mt-3 hover:bg-[#d4ab6e] transition-all duration-300"
          style={{ transitionDelay: menuOpen ? '0.28s' : '0s', opacity: menuOpen ? 1 : 0, transform: menuOpen ? 'translateY(0)' : 'translateY(10px)' }}>
          Get Started
        </a>
      </div>
    </>
  )
}
