import { Link } from 'react-router-dom'

const steps = [
  { n: '01', title: 'Audit', desc: 'We analyze your current site, traffic, and systems to find exactly where you\'re losing business.', duration: '48 hours' },
  { n: '02', title: 'Rebuild', desc: 'We design and develop your new system from the ground up — pages, funnels, integrations, everything.', duration: '2–4 weeks' },
  { n: '03', title: 'Launch + Scale', desc: 'Your new system goes live, optimized for speed and conversions. Then we keep improving it.', duration: 'Ongoing' },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32 relative" id="process">
      <div className="absolute inset-0 bg-bg-2/40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-16">
          <p className="text-[13px] uppercase tracking-[0.25em] text-cyan/70 mb-3 font-medium">Process</p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-t1 tracking-[-0.02em]">Three steps. Zero guesswork.</h2>
          <p className="text-t2 text-[16px] mt-3 max-w-[460px] mx-auto">Systematic. Engineered. Predictable. You'll know exactly what's happening at every stage.</p>
        </div>

        <div className="reveal relative" style={{ transitionDelay: '0.06s' }}>
          {/* Connector line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] h-px">
            <div className="w-full h-full bg-linear-to-r from-cyan/20 via-cyan/10 to-cyan/20" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <div key={s.n} className="reveal relative text-center" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="relative z-10 mx-auto mb-6">
                  <div className="w-12 h-12 rounded-full bg-bg border-2 border-rule flex items-center justify-center mx-auto relative">
                    <div className="absolute inset-0 rounded-full bg-cyan/[0.08]" />
                    <span className="text-[14px] text-cyan font-semibold relative">{s.n}</span>
                  </div>
                  {i === 0 && <div className="absolute inset-0 rounded-full border border-cyan/20 animate-ping mx-auto w-12 h-12" />}
                </div>
                <h3 className="text-[22px] font-semibold text-t1 mb-2">{s.title}</h3>
                <p className="text-t2 text-[14px] leading-[1.65] mb-3 max-w-[260px] mx-auto">{s.desc}</p>
                <span className="inline-block text-[11px] text-cyan/60 bg-cyan/[0.06] border border-cyan/10 px-3 py-1 rounded-full">{s.duration}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal text-center mt-12">
          <Link to="/process" className="text-[14px] text-cyan hover:text-cyan-h transition-colors border-b border-cyan/30 pb-0.5">
            See our full process &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
