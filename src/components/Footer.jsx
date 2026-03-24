import logoFull from '../assets/kronaris-full.png'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-14">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-8">
            <div
              className="logo-mask h-8 w-32"
              style={{ WebkitMaskImage: `url(${logoFull})`, maskImage: `url(${logoFull})`, background: 'rgba(255,255,255,0.4)' }}
            />
            <div className="hidden md:flex gap-6">
              {['Services', 'Process', 'About', 'Contact'].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.2em] text-text-muted/50 hover:text-text-secondary transition-colors duration-300">{l}</a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] text-text-muted/30">
            <span>&copy; 2025 Kronaris</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
