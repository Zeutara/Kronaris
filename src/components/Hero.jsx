import logoK from '../assets/kronaris-k.png'

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric arcs */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-[0.04]" viewBox="0 0 1000 1000" fill="none" aria-hidden="true">
          <circle cx="500" cy="500" r="350" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="260" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" />
          <circle cx="500" cy="500" r="440" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
          <path d="M 500 150 A 350 350 0 0 1 850 500" stroke="#C9A063" strokeWidth="0.8" opacity="0.25" />
          <path d="M 150 500 A 350 350 0 0 1 500 850" stroke="#C9A063" strokeWidth="0.5" opacity="0.12" />
        </svg>
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 w-[700px] h-[700px] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(circle, rgba(201,160,99,0.06) 0%, transparent 70%)', animation: 'glowPulse 12s ease-in-out infinite' }}
        />
        {/* Subtle gradient at top */}
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-[#0a0a10] to-transparent opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full pt-36 pb-28">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10 opacity-0 animate-[fadeUp_0.9s_ease_0.1s_forwards]">
          <div className="w-8 h-px bg-gold/50" />
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold/70">
            Digital Infrastructure & Reconstruction
          </span>
        </div>

        <h1 className="text-[clamp(38px,7vw,88px)] font-extralight leading-[1.05] tracking-[-0.03em] max-w-[950px]">
          <span className="block text-text-primary opacity-0 animate-[fadeUp_0.9s_ease_0.2s_forwards]">
            We don't redesign.
          </span>
          <span className="block bg-gradient-to-r from-text-primary/60 via-text-primary/40 to-text-primary/20 bg-clip-text text-transparent opacity-0 animate-[fadeUp_0.9s_ease_0.35s_forwards]">
            We reconstruct.
          </span>
        </h1>

        <p className="text-text-secondary text-[17px] md:text-[19px] leading-[1.75] max-w-[540px] mt-10 opacity-0 animate-[fadeUp_0.9s_ease_0.5s_forwards]">
          Kronaris rebuilds digital infrastructure for businesses that have
          outgrown their current capabilities. We step in, take control,
          and build what should already exist.
        </p>

        <div className="flex flex-wrap gap-4 mt-14 opacity-0 animate-[fadeUp_0.9s_ease_0.65s_forwards]">
          <a
            href="#contact"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] font-medium bg-gold text-bg px-9 py-4 hover:bg-[#d4ab6e] hover:shadow-[0_0_30px_rgba(201,160,99,0.2)] transition-all duration-300"
            aria-label="Request a Rebuild"
          >
            Request a Rebuild
            <svg className="ml-3 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#process"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-text-secondary border border-border px-9 py-4 hover:border-text-muted hover:text-text-primary hover:bg-white/[0.02] transition-all duration-300"
            aria-label="See Our Process"
          >
            See Our Process
          </a>
        </div>

        {/* Metrics strip */}
        <div className="flex gap-14 md:gap-20 mt-24 pt-10 border-t border-border opacity-0 animate-[fadeUp_0.9s_ease_0.85s_forwards]">
          {[
            { value: '100+', label: 'Systems Rebuilt' },
            { value: '<48h', label: 'Audit Turnaround' },
            { value: '3.2×', label: 'Avg. Conversion Lift' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-extralight text-text-primary tracking-tight">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-text-muted mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-[fadeUp_0.9s_ease_1.1s_forwards]">
        <span className="text-[9px] uppercase tracking-[0.4em] text-text-muted/50">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-text-muted/40 to-transparent animate-pulse" />
      </div>
    </header>
  )
}
