import logoFull from '../assets/kronaris-full.png'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <img src={logoFull} alt="Kronaris" className="h-9 w-auto mb-4" />
            <div className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
              Digital Infrastructure · Strategic Execution
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3 md:text-center">
            {['Services', 'Process', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[11px] uppercase tracking-[0.25em] text-text-secondary hover:text-gold transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2 md:text-right">
            <a
              href="mailto:hello@kronaris.com"
              className="text-[13px] text-text-secondary hover:text-gold transition-colors duration-300"
            >
              hello@kronaris.com
            </a>
            <span className="text-[13px] text-text-muted">kronaris.com</span>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex justify-between flex-wrap gap-4">
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
            &copy; 2025 Kronaris. All rights reserved.
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Confidential
          </span>
        </div>
      </div>
    </footer>
  )
}
