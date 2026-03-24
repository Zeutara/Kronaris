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
            ? 'bg-bg/95 backdrop-blur-md border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <a href="#" className="flex items-center" aria-label="Kronaris Home">
            <img
              src={logoFull}
              alt="Kronaris"
              className="h-10 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] uppercase tracking-[0.25em] text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <a
              href="#contact"
              className="text-[10px] uppercase tracking-[0.25em] text-gold border border-gold/40 px-6 py-2.5 hover:bg-gold hover:text-bg transition-all duration-300"
            >
              Request a Rebuild
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col gap-[5px] p-1 z-[60]"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-text-primary transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-bg flex flex-col items-center justify-center gap-8 transition-opacity duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={closeMenu}
            className="text-text-primary text-xl uppercase tracking-[0.3em] font-light transition-all duration-400"
            style={{
              transitionDelay: menuOpen ? `${i * 0.07}s` : '0s',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="text-gold text-sm uppercase tracking-[0.25em] border border-gold/40 px-8 py-3 mt-4 hover:bg-gold hover:text-bg transition-all duration-300"
          style={{
            transitionDelay: menuOpen ? '0.35s' : '0s',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateY(0)' : 'translateY(12px)',
          }}
        >
          Request a Rebuild
        </a>
      </div>
    </>
  )
}
