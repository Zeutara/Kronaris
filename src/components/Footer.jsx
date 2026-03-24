import logoFull from '../assets/kronaris-full.png'

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-8">
          <img src={logoFull} alt="Kronaris" className="logo-img h-10 w-auto" />
          <div className="hidden md:flex gap-6">
            {['Services', 'Process', 'About', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.18em] text-text-muted/50 hover:text-text-secondary transition-colors duration-300">{l}</a>
            ))}
          </div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.12em] text-text-muted/30">&copy; 2025 Kronaris. All rights reserved.</span>
      </div>
    </footer>
  )
}
