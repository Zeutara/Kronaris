export default function Hero() {
  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden" id="hero">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">

          {/* Left — Copy */}
          <div className="opacity-0 animate-[fadeIn_0.6s_0.05s_forwards]">
            <h1 className="text-[clamp(34px,5vw,56px)] font-medium text-t1 leading-[1.1] tracking-[-0.02em] mb-5">
              Your website should help you grow, not hold you back.
            </h1>
            <p className="text-[17px] text-t2 leading-[1.65] max-w-[420px] mb-7">
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

          {/* Right — Results preview panel */}
          <div className="opacity-0 animate-[fadeIn_0.7s_0.2s_forwards]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/[0.04] rounded-3xl blur-[40px]" />

              <div className="relative bg-gradient-to-br from-bg-3/90 to-bg-2/90 border border-rule-2 rounded-2xl overflow-hidden backdrop-blur-sm">
                {/* Header bar */}
                <div className="px-6 py-4 border-b border-rule flex items-center justify-between">
                  <span className="text-[13px] text-t1 font-medium">What a rebuild delivers</span>
                  <span className="text-[11px] text-gold bg-gold/10 px-2.5 py-0.5 rounded-full">Avg. results</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2">
                  {[
                    { value: '3.2×', label: 'More leads from your website', icon: '↑' },
                    { value: '< 2 sec', label: 'Page load speed', icon: '⚡' },
                    { value: '340%', label: 'Revenue increase on average', icon: '$' },
                    { value: '4 weeks', label: 'From start to launch', icon: '→' },
                  ].map((s, i) => (
                    <div key={i} className={`p-5 md:p-6 ${i < 2 ? 'border-b border-rule/50' : ''} ${i % 2 === 0 ? 'border-r border-rule/50' : ''}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-gold/50 text-[14px]">{s.icon}</span>
                        <span className="text-t1 text-[24px] md:text-[28px] font-medium tracking-tight">{s.value}</span>
                      </div>
                      <span className="text-[13px] text-t3 leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-rule bg-bg/20 flex items-center justify-between">
                  <span className="text-[12px] text-t3">Based on 100+ completed rebuilds</span>
                  <a href="#contact" className="text-[12px] text-gold font-medium hover:text-gold-h transition-colors">See if you qualify →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
