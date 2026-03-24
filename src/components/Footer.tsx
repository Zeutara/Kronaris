export default function Footer() {
  return (
    <footer className="border-t border-rule py-10 bg-bg-2/30">
      <div className="max-w-[1200px] mx-auto px-6 md:flex md:items-center md:justify-between">
        <div className="flex items-center gap-6 mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
              <line x1="25" y1="15" x2="25" y2="85" stroke="white" strokeWidth="7" />
              <line x1="25" y1="50" x2="72" y2="18" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="25" y1="50" x2="72" y2="82" stroke="white" strokeWidth="5.5" strokeLinecap="round" />
              <path d="M 72 18 A 40 40 0 0 1 72 82" fill="none" stroke="#C7A76C" strokeWidth="2" />
            </svg>
            <span className="text-[13px] uppercase tracking-[0.18em] text-t2 font-medium">Kronaris</span>
          </div>
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
