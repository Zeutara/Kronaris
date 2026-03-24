const steps = [
  { n: '01', title: 'Audit', desc: 'We find what\'s broken and where you\'re losing money.', duration: '48 hours' },
  { n: '02', title: 'Rebuild', desc: 'We reconstruct your systems from the ground up.', duration: '2–4 weeks' },
  { n: '03', title: 'Launch', desc: 'Your new system goes live — ready to perform.', duration: 'Day one' },
  { n: '04', title: 'Optimize', desc: 'We refine and improve, month after month.', duration: 'Ongoing' },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32 relative" id="process">
      <div className="absolute inset-0 bg-bg-2/40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">Process</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">How it works</h2>
          <p className="text-t2 text-[16px] mt-3 max-w-[420px] mx-auto">Four steps. No surprises. You'll know exactly what's happening at every stage.</p>
        </div>

        {/* Timeline */}
        <div className="reveal relative" style={{ transitionDelay: '0.06s' }}>
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-5">
            {steps.map((s, i) => (
              <div key={s.n} className="reveal relative text-center" style={{ transitionDelay: `${i * 0.08}s` }}>
                {/* Number node */}
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-[44px] h-[44px] rounded-full bg-bg border-2 border-rule flex items-center justify-center mx-auto relative">
                    <div className="absolute inset-0 rounded-full bg-gold/[0.06]" />
                    <span className="text-[14px] text-gold font-medium relative">{s.n}</span>
                  </div>
                  {/* Active pulse on first step */}
                  {i === 0 && <div className="absolute inset-0 rounded-full border border-gold/20 animate-ping mx-auto w-[44px] h-[44px]" />}
                </div>

                {/* Content */}
                <h3 className="text-[20px] font-medium text-t1 mb-2">{s.title}</h3>
                <p className="text-t2 text-[14px] leading-[1.6] mb-3 max-w-[220px] mx-auto">{s.desc}</p>
                <span className="inline-block text-[11px] text-gold/60 bg-gold/[0.06] border border-gold/10 px-3 py-1 rounded-full">{s.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
