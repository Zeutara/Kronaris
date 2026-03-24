import logo from '../assets/kronaris-full.png'

export default function Footer() {
  return (
    <footer className="border-t border-rule py-6 bg-s1">
      <div className="max-w-[1400px] mx-auto px-5 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-6 mb-3 md:mb-0">
          <img src={logo} alt="Kronaris" className="h-6" />
          <div className="flex gap-5">
            {['Services', 'Process', 'About', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.1em] text-g4 hover:text-g2 transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-g4">
          <span className="mono">KRN-2025</span>
          <span>&copy; Kronaris. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
