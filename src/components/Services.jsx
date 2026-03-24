const services = [
  {
    title: 'Website Rebuilds',
    desc: 'Ground-up reconstruction into conversion-driven systems. Not a redesign — an engineered revenue platform.',
    tags: ['UX Architecture', 'Conversion Design', 'Performance', 'Responsive'],
  },
  {
    title: 'Conversion Optimization',
    desc: 'Systematic elimination of friction across every touchpoint. Data-driven restructuring that turns traffic into revenue.',
    tags: ['Funnel Analysis', 'A/B Testing', 'CTA Strategy', 'Analytics'],
  },
  {
    title: 'System Infrastructure',
    desc: 'The invisible architecture that determines whether your business scales or stalls. Backend rebuilt for growth.',
    tags: ['Automation', 'CRM Integration', 'Database', 'APIs'],
  },
  {
    title: 'Performance Management',
    desc: 'Continuous monitoring, optimization, and evolution. We don\'t build and disappear — we build and compound.',
    tags: ['Monitoring', 'Iteration', 'Security', 'Growth'],
  },
]

export default function Services() {
  return (
    <section className="py-24 md:py-32" id="services">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-extralight text-text-primary tracking-[-0.02em] leading-[1.15]">
            What we do
          </h2>
          <p className="text-text-muted text-[13px] md:text-sm max-w-[320px]">
            Four disciplines. One integrated framework. Every engagement is built around measurable outcomes.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group border-b border-border py-10 md:py-12 cursor-default"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16">
                <div className="md:w-[45%] flex items-baseline gap-6">
                  <span className="text-text-muted/30 text-sm tabular-nums font-light">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[22px] md:text-[28px] font-extralight text-text-primary tracking-[-0.02em] group-hover:text-white transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
                <div className="md:w-[55%] md:pt-1">
                  <p className="text-text-secondary text-[14px] leading-[1.75] mb-5">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-[0.2em] text-text-muted/60 border border-border px-3 py-1 group-hover:text-text-muted group-hover:border-border-hover transition-all duration-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
