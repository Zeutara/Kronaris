import logoK from '../assets/kronaris-k.png'

const reasons = [
  {
    title: 'Authority',
    desc: 'We operate at a level above. Every system we build meets the same standards as billion-dollar digital infrastructure.',
  },
  {
    title: 'Speed',
    desc: 'Full audit in 48 hours. Rebuild deployed in weeks, not months. Delay compounds into lost revenue — we move accordingly.',
  },
  {
    title: 'Control',
    desc: 'We take full ownership. No design-by-committee. No scope creep. One team, one outcome, total accountability.',
  },
  {
    title: 'Results',
    desc: 'We don\'t measure success by how it looks. We measure it by what it earns. Conversion, revenue, growth — the metrics that matter.',
  },
]

export default function WhyKronaris() {
  return (
    <section className="py-32 md:py-40 bg-bg-alt relative overflow-hidden" id="about">
      {/* Subtle background mark */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.02]">
        <img src={logoK} alt="" className="w-[500px] h-auto" aria-hidden="true" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-10 relative z-10">
        <div className="reveal">
          <div className="text-[10px] uppercase tracking-[0.5em] text-text-muted mb-6">Why Kronaris</div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light text-text-primary tracking-[-0.01em] leading-[1.15] max-w-[600px]">
            Execution over<br />everything.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-20 mt-20">
          <div className="space-y-14">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="reveal pl-6 border-l border-text-muted/20 hover:border-gold/40 transition-colors duration-500"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <h3 className="text-lg font-light text-text-primary tracking-tight mb-3">
                  {r.title}
                </h3>
                <p className="text-text-secondary text-[15px] leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal flex items-center" style={{ transitionDelay: '0.2s' }}>
            <div className="bg-bg-card border border-border p-10 md:p-14">
              <div className="w-12 h-px bg-gold/40 mb-8" />
              <blockquote className="text-[20px] md:text-[22px] font-light text-text-primary leading-[1.6] tracking-[-0.01em]">
                "We believe small businesses are the backbone of our economy, and they deserve the same level of digital infrastructure as billion-dollar companies."
              </blockquote>
              <div className="mt-8 text-[10px] uppercase tracking-[0.4em] text-text-muted">
                — The Kronaris Position
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
