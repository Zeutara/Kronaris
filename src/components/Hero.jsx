export default function Hero() {
  return (
    <header className="relative min-h-[100svh] flex items-end pb-20 md:pb-28 overflow-hidden" id="hero">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.035]" viewBox="0 0 900 900" fill="none" aria-hidden="true">
          <circle cx="450" cy="450" r="320" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <circle cx="450" cy="450" r="420" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
          <path d="M 450 130 A 320 320 0 0 1 770 450" stroke="#C9A063" strokeWidth="0.7" opacity="0.2" />
        </svg>
        <div className="absolute top-[40%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.025] blur-[140px]" style={{ animation: 'glowPulse 10s ease-in-out infinite' }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <p className="text-[11px] uppercase tracking-[0.4em] text-text-muted mb-6 opacity-0 animate-[fadeUp_0.8s_ease_0.1s_forwards]">
          Digital infrastructure, rebuilt.
        </p>

        <h1 className="text-[clamp(40px,7.5vw,92px)] font-extralight leading-[1.02] tracking-[-0.04em] max-w-[900px]">
          <span className="block text-text-primary opacity-0 animate-[fadeUp_0.8s_ease_0.15s_forwards]">We don't redesign.</span>
          <span className="block text-text-muted opacity-0 animate-[fadeUp_0.8s_ease_0.3s_forwards]">We reconstruct.</span>
        </h1>

        <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
          <p className="text-text-secondary text-[15px] md:text-[16px] leading-[1.8] max-w-[420px] opacity-0 animate-[fadeUp_0.8s_ease_0.45s_forwards]">
            Kronaris rebuilds digital infrastructure for businesses that have outgrown their current capabilities.
          </p>

          <div className="flex gap-3 opacity-0 animate-[fadeUp_0.8s_ease_0.55s_forwards]">
            <a href="#contact" className="text-[10px] uppercase tracking-[0.18em] font-medium bg-gold text-bg px-7 py-3 hover:bg-[#d4ab6e] transition-all duration-300">
              Request a Rebuild
            </a>
            <a href="#process" className="text-[10px] uppercase tracking-[0.18em] text-text-muted border border-border px-7 py-3 hover:text-text-secondary hover:border-border-hover transition-all duration-300">
              Our Process
            </a>
          </div>
        </div>

        <div className="flex gap-16 mt-16 pt-8 border-t border-border opacity-0 animate-[fadeUp_0.8s_ease_0.7s_forwards]">
          {[
            { value: '100+', label: 'Rebuilt' },
            { value: '<48h', label: 'Turnaround' },
            { value: '3.2×', label: 'Conversion' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-extralight text-text-primary tracking-tight">{s.value}</div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
