import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function StickyCtaButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
      <Link
        to="/contact"
        className="flex items-center gap-2 bg-cyan text-bg font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-cyan-h transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] text-[14px]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
        </svg>
        Get Your Rebuild
      </Link>
    </div>
  )
}
