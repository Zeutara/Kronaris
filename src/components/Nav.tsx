import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setOpen(false)
    document.body.style.overflow = ''
    window.scrollTo(0, 0)
  }, [location])

  const close = () => { setOpen(false); document.body.style.overflow = '' }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-rule' : ''}`}>
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/rwc-logo.png" alt="Railworks Creative" className="h-10 w-auto" />
            <span className="text-t1 font-semibold text-[18px] tracking-tight hidden sm:block">Railworks <span className="text-cyan">Creative</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-[14px] transition-colors ${location.pathname === l.path ? 'text-cyan' : 'text-t3 hover:text-t1'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-[14px] font-medium bg-cyan text-bg px-5 py-2.5 rounded-lg hover:bg-cyan-h transition-colors"
            >
              Get Your Rebuild
            </Link>
          </div>
          <button
            className="md:hidden p-2 z-[60]"
            onClick={() => { setOpen(v => !v); document.body.style.overflow = open ? '' : 'hidden' }}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[2px]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-bg/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6">
          <img src="/rwc-logo.png" alt="Railworks Creative" className="h-14 mb-4" />
          {links.map(l => (
            <Link key={l.path} to={l.path} onClick={close} className="text-t1 text-xl hover:text-cyan transition-colors">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={close} className="font-medium bg-cyan text-bg px-6 py-3 rounded-lg mt-3">
            Get Your Rebuild
          </Link>
        </div>
      )}
    </>
  )
}
