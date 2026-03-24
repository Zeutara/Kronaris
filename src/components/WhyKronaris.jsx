import logoK from '../assets/kronaris-k.png'

const reasons = [
  {
    title: 'Authority',
    desc: 'We operate at a level above. Every system we build meets the same standards as billion-dollar digital infrastructure.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><path d="M10 2l2 4 4.5 0.7-3.2 3.2 0.8 4.5L10 12.2 5.9 14.4l0.8-4.5L3.5 6.7 8 6z"/></svg>
    ),
  },
  {
    title: 'Speed',
    desc: 'Full audit in 48 hours. Rebuild deployed in weeks, not months. Delay compounds into lost revenue — we move accordingly.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><path d="M13 2L7 10h6l-2 8 8-10h-6l2-6z"/></svg>
    ),
  },
  {
    title: 'Control',
    desc: 'We take full ownership. No design-by-committee. No scope creep. One team, one outcome, total accountability.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><circle cx="10" cy="10" r="8"/><path d="M10 6v4l2.5 2.5"/></svg>
    ),
  },
  {
    title: 'Results',
    desc: 'We don\'t measure success by how it looks. We measure it by what it earns. Conversion, revenue, growth — the metrics that matter.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><path d="M2 16l4-4 4 4 4-8 4 4"/></svg>
    ),
  },
]

export default function WhyKronaris() {
  return (
    <section className="py-36 md:py-44 bg-bg-alt relative overflow-hidden" id="about">
      {/* Background watermark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.025]">
        <img src={logoK} alt="" className="logo-blend w-[600px] h-auto" aria-hidden="true" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold/70">Why Kronaris</span>
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extralight text-text-primary tracking-[-0.02em] leading-[1.12]">
            Execution over<br />everything.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 mt-24">
          {/* Reasons - 3 cols */}
          <div className="lg:col-span-3 space-y-0">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal group py-10 border-b border-border/40 first:pt-0 last:border-b-0"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 mt-1 text-gold/30 group-hover:text-gold/60 transition-colors duration-400">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-light text-text-primary tracking-[-0.01em] mb-3 group-hover:text-white transition-colors duration-300">
                      {r.title}
                    </h3>
                    <p className="text-text-secondary text-[15px] leading-[1.75]">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quote card - 2 cols */}
          <div className="lg:col-span-2 reveal flex items-center" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-bg-card/80 border border-border/60 p-10 md:p-12 relative">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-px bg-gold/30" />
              <div className="absolute top-0 left-0 w-px h-12 bg-gold/30" />

              <div className="text-gold/30 text-[48px] leading-none font-serif mb-4">"</div>
              <blockquote className="text-[19px] md:text-[21px] font-extralight text-text-primary leading-[1.65] tracking-[-0.01em]">
                We believe small businesses are the backbone of our economy, and they deserve the same level of digital infrastructure as billion-dollar companies.
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-6 h-px bg-gold/30" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-text-muted">
                  The Kronaris Position
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
