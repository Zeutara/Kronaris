export default function Hero() {
  return (
    <header className="relative min-h-[92svh] flex items-end pb-16 md:pb-20 overflow-hidden" id="hero">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]" viewBox="0 0 800 800" fill="none" aria-hidden="true">
          <circle cx="400" cy="400" r="300" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          <path d="M 400 100 A 300 300 0 0 1 700 400" stroke="#C9A063" strokeWidth="0.6" opacity="0.18" />
        </svg>
        <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.02] blur-[120px]" style={{ animation: 'glowPulse 10s ease-in-out infinite' }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 w-full">
        <p className="text-sm uppercase tracking-[0.3em] text-text-muted mb-5 opacity-0 animate-[fadeUp_0.7s_ease_0.1s_forwards]">
          Digital infrastructure, rebuilt.
        </p>

        <h1 className="text-[clamp(48px,9vw,110px)] font-extralight leading-[1.0] tracking-[-0.04em] max-w-[950px]">
          <span className="block text-white opacity-0 animate-[fadeUp_0.7s_ease_0.15s_forwards]">We don't redesign.</span>
          <span className="block text-text-muted opacity-0 animate-[fadeUp_0.7s_ease_0.28s_forwards]">We reconstruct.</span>
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <p className="text-text-secondary text-lg md:text-xl leading-[1.65] max-w-[420px] opacity-0 animate-[fadeUp_0.7s_ease_0.4s_forwards]">
            Kronaris rebuilds digital infrastructure for businesses that have outgrown their current capabilities.
          </p>
          <div className="flex gap-3 opacity-0 animate-[fadeUp_0.7s_ease_0.5s_forwards]">
            <a href="#contact" className="text-xs uppercase tracking-[0.14em] font-semibold bg-gold text-black px-7 py-3 hover:bg-[#d4ab6e] transition-all duration-300">
              Request a Rebuild
            </a>
            <a href="#process" className="text-xs uppercase tracking-[0.14em] text-text-secondary border border-border px-7 py-3 hover:text-white hover:border-border-hover transition-all duration-300">
              Our Process
            </a>
          </div>
        </div>

        <div className="flex gap-14 md:gap-20 mt-14 pt-7 border-t border-border opacity-0 animate-[fadeUp_0.7s_ease_0.6s_forwards]">
          {[
            { v: '100+', l: 'Rebuilt' },
            { v: '<48h', l: 'Turnaround' },
            { v: '3.2×', l: 'Conversion' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-3xl md:text-5xl font-extralight text-white tracking-tight">{s.v}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-text-muted mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
