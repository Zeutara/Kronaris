export default function Hero() {
  return (
    <header className="pt-28 pb-20 md:pt-40 md:pb-32 relative overflow-hidden" id="hero">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Copy */}
          <div className="opacity-0 animate-[fadeIn_0.6s_0.05s_forwards]">
            <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-5">Kronaris</p>
            <h1 className="text-[clamp(36px,5.5vw,60px)] font-medium text-t1 leading-[1.1] tracking-[-0.02em] mb-6">
              Your website should help you grow, not hold you back.
            </h1>
            <p className="text-[18px] text-t2 leading-[1.65] max-w-[440px] mb-8">
              We rebuild outdated websites and messy systems into something that actually brings you customers.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="text-[14px] font-medium bg-gold text-black px-6 py-3.5 rounded-lg hover:bg-gold-h transition-colors">
                Request a Rebuild
              </a>
              <a href="#process" className="text-[14px] text-t3 px-6 py-3.5 rounded-lg border border-rule hover:border-rule-2 hover:text-t2 transition-all">
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — Premium visual panel */}
          <div className="opacity-0 animate-[fadeIn_0.7s_0.2s_forwards]">
            <div className="relative">
              {/* Glow behind panel */}
              <div className="absolute -inset-4 bg-gold/[0.04] rounded-3xl blur-[40px]" />

              {/* Main panel */}
              <div className="relative bg-gradient-to-br from-bg-3/90 to-bg-2/90 border border-rule-2 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                {/* Panel header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gold/60" />
                    <span className="text-[12px] text-t3 uppercase tracking-wider">Performance Overview</span>
                  </div>
                  <span className="text-[11px] text-t3 bg-bg-2 px-2.5 py-1 rounded-md border border-rule">Live</span>
                </div>

                {/* Stat bars */}
                <div className="space-y-5 mb-6">
                  {[
                    { label: 'Conversion Rate', before: 1.2, after: 4.8, unit: '%' },
                    { label: 'Page Speed', before: 4.2, after: 0.8, unit: 's', invert: true },
                    { label: 'Lead Capture', before: 12, after: 89, unit: '%' },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[13px] text-t2">{s.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[12px] text-t3 line-through">{s.before}{s.unit}</span>
                          <span className="text-[13px] text-gold font-medium">{s.after}{s.unit}</span>
                        </div>
                      </div>
                      <div className="h-1.5 bg-bg rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-gold/40 to-gold/80" style={{ width: `${s.invert ? (1 - s.after / s.before) * 100 + 15 : (s.after / 100) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue', value: '+340%' },
                    { label: 'Bounce', value: '-62%' },
                    { label: 'Growth', value: '+4.2×' },
                  ].map(s => (
                    <div key={s.label} className="bg-bg/50 border border-rule rounded-xl p-3.5 text-center">
                      <div className="text-[18px] font-medium text-t1">{s.value}</div>
                      <div className="text-[11px] text-t3 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
