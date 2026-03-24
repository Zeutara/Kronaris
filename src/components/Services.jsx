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
    <section className="py-16 md:py-24" id="services">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-[-0.02em]">
            What we do
          </h2>
          <p className="text-text-muted text-sm max-w-[320px]">
            Four disciplines. One framework. Measurable outcomes.
          </p>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <div key={s.title} className="reveal group border-b border-border py-7 md:py-9" style={{ transitionDelay: `${i * 0.04}s` }}>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-14">
                <div className="md:w-[42%] flex items-baseline gap-5">
                  <span className="text-text-muted/30 text-sm tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-xl md:text-2xl font-light text-white tracking-[-0.01em] group-hover:text-gold transition-colors duration-300">
                    {s.title}
                  </h3>
                </div>
                <div className="md:w-[58%]">
                  <p className="text-text-secondary text-[15px] leading-[1.7] mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-[0.18em] text-text-muted/50 border border-border px-3 py-1 group-hover:text-text-muted group-hover:border-border-hover transition-all duration-300">
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
