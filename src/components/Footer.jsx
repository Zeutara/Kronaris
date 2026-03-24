import logoFull from '../assets/kronaris-full.png'

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-14 items-start">
          {/* Brand */}
          <div>
            <img src={logoFull} alt="Kronaris" className="logo-blend h-12 w-auto mb-5" />
            <div className="text-[10px] uppercase tracking-[0.25em] text-text-muted/60 leading-relaxed">
              Digital Infrastructure<br />Strategic Execution
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-4 md:text-center">
            {['Services', 'Process', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.22em] text-text-secondary/70 hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 md:text-right">
            <a
              href="mailto:hello@kronaris.com"
              className="text-[14px] text-text-secondary hover:text-gold transition-colors duration-300"
            >
              hello@kronaris.com
            </a>
            <span className="text-[13px] text-text-muted/50">kronaris.com</span>
          </div>
        </div>

        <div className="border-t border-border/40 mt-16 pt-7 flex justify-between flex-wrap gap-4">
          <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted/40">
            &copy; 2025 Kronaris. All rights reserved.
          </span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-text-muted/40">
            Confidential
          </span>
        </div>
      </div>
    </footer>
  )
}
