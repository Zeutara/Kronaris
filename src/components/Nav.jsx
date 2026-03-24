import { useState, useEffect } from 'react'
import logoFull from '../assets/kronaris-full.png'
import logoK from '../assets/kronaris-k.png'

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

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    setMenuOpen((v) => !v)
    document.body.style.overflow = menuOpen ? '' : 'hidden'
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-xl border-b border-border shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[80px]">
          <a href="#" className="flex items-center gap-1" aria-label="Kronaris Home">
            <img
              src={logoFull}
              alt="Kronaris"
              className="logo-blend h-14 md:h-16 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-11">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.22em] text-text-secondary hover:text-text-primary transition-colors duration-300 relative group py-2"
              >
                {l.label}
                <span className="absolute -bottom-0 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <a
              href="#contact"
              className="text-[10px] uppercase tracking-[0.22em] text-bg font-medium bg-gold px-7 py-3 hover:bg-gold/85 transition-all duration-300 ml-2"
            >
              Request a Rebuild
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-[6px] p-2 z-[60]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-bg/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-9 transition-opacity duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <img src={logoK} alt="" className="logo-blend h-16 w-auto mb-4 opacity-40" aria-hidden="true" />
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className="text-text-primary text-2xl uppercase tracking-[0.3em] font-extralight transition-all duration-400 hover:text-gold"
            style={{
              transitionDelay: menuOpen ? `${i * 0.07}s` : '0s',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="text-bg text-sm uppercase tracking-[0.22em] font-medium bg-gold px-10 py-3.5 mt-4 hover:bg-gold/85 transition-all duration-300"
          style={{
            transitionDelay: menuOpen ? '0.35s' : '0s',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(14px)',
          }}
        >
          Request a Rebuild
        </a>
      </div>
    </>
  )
}
