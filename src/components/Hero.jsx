export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.03]" viewBox="0 0 900 900" fill="none" aria-hidden="true">
          <circle cx="450" cy="450" r="320" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
          <circle cx="450" cy="450" r="240" stroke="rgba(255,255,255,0.1)" strokeWidth="0.3" />
          <circle cx="450" cy="450" r="400" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
          <path d="M 450 130 A 320 320 0 0 1 770 450" stroke="#C4975A" strokeWidth="0.8" opacity="0.3" />
          <path d="M 130 450 A 320 320 0 0 1 450 770" stroke="#C4975A" strokeWidth="0.4" opacity="0.15" />
        </svg>
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-10 w-full pt-32 pb-24">
        {/* Eyebrow */}
        <div
          className="text-[10px] uppercase tracking-[0.5em] text-text-muted mb-8 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]"
        >
          Digital Infrastructure & Reconstruction
        </div>

        <h1 className="text-[clamp(36px,6.5vw,82px)] font-light leading-[1.08] tracking-[-0.02em] max-w-[900px]">
          <span className="block text-text-primary opacity-0 animate-[fadeUp_0.8s_ease_0.2s_forwards]">
            We don't redesign.
          </span>
          <span className="block text-text-primary/50 opacity-0 animate-[fadeUp_0.8s_ease_0.35s_forwards]">
            We reconstruct.
          </span>
        </h1>

        <p className="text-text-secondary text-[17px] md:text-lg leading-relaxed max-w-[520px] mt-8 opacity-0 animate-[fadeUp_0.8s_ease_0.5s_forwards]">
          Kronaris rebuilds digital infrastructure for businesses that have
          outgrown their current capabilities. We step in, take control,
          and build what should already exist.
        </p>

        <div className="flex flex-wrap gap-4 mt-12 opacity-0 animate-[fadeUp_0.8s_ease_0.65s_forwards]">
          <a
            href="#contact"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] bg-gold text-bg px-8 py-4 hover:bg-gold/90 transition-all duration-300"
            aria-label="Request a Rebuild"
          >
            Request a Rebuild
          </a>
          <a
            href="#process"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-text-secondary border border-border px-8 py-4 hover:border-border-hover hover:text-text-primary transition-all duration-300"
            aria-label="See Our Process"
          >
            See Our Process
          </a>
        </div>

        {/* Metrics strip */}
        <div className="flex gap-12 md:gap-16 mt-20 opacity-0 animate-[fadeUp_0.8s_ease_0.8s_forwards]">
          {[
            { value: '100+', label: 'Systems Rebuilt' },
            { value: '<48h', label: 'Audit Turnaround' },
            { value: '3.2×', label: 'Avg. Conversion Lift' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-light text-text-primary tracking-tight">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_0.8s_ease_1s_forwards]">
        <div className="w-px h-10 bg-gradient-to-b from-text-muted/50 to-transparent animate-pulse" />
      </div>
    </header>
  )
}
