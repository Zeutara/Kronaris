export default function Hero() {
  return (
    <header className="pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden" id="hero">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gold/[0.025] rounded-full blur-[180px]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Centered hero — no split layout */}
        <div className="max-w-[720px] mx-auto text-center opacity-0 animate-[fadeIn_0.6s_0.05s_forwards]">
          <p className="text-[13px] uppercase tracking-[0.25em] text-gold/70 mb-5">Website rebuilds for growing businesses</p>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-medium text-t1 leading-[1.15] tracking-[-0.02em] mb-5">
            We rebuild websites that don't just look good — they bring you customers.
          </h1>
          <p className="text-[17px] text-t2 leading-[1.65] max-w-[520px] mx-auto mb-8">
            If your website isn't actively driving revenue, it's costing you money. We fix that — fast.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            <a href="#contact" className="text-[14px] font-medium bg-gold text-black px-7 py-3.5 rounded-lg hover:bg-gold-h transition-colors">
              Request a Rebuild
            </a>
            <a href="#process" className="text-[14px] text-t3 px-7 py-3.5 rounded-lg border border-rule hover:border-rule-2 hover:text-t2 transition-all">
              See How It Works
            </a>
          </div>
        </div>

        {/* Stats bar — horizontal, below headline */}
        <div className="opacity-0 animate-[fadeIn_0.6s_0.25s_forwards]">
          <div className="relative">
            <div className="absolute -inset-3 bg-gold/[0.03] rounded-3xl blur-[30px]" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-rule-2 bg-rule/50">
              {[
                { value: '3.2×', label: 'More leads generated' },
                { value: '< 2s', label: 'Page load speed' },
                { value: '340%', label: 'Avg. revenue increase' },
                { value: '4 wks', label: 'From start to launch' },
              ].map((s, i) => (
                <div key={i} className="bg-gradient-to-b from-bg-3 to-bg-2 p-5 md:p-6 text-center">
                  <div className="text-t1 text-[26px] md:text-[30px] font-medium tracking-tight mb-1">{s.value}</div>
                  <div className="text-[12px] text-t3">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
