import logo from '../assets/kronaris-full.png'

export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <img src={logo} alt="Kronaris" className="h-7" />
          <div className="flex gap-5">
            {['Services', 'Process', 'About', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[13px] text-t3 hover:text-t2 transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <span className="text-[13px] text-t3">&copy; 2025 Kronaris</span>
      </div>
    </footer>
  )
}
