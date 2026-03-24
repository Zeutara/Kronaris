const services = [
  {
    num: '01',
    title: 'Full Website Rebuilds',
    desc: 'Complete reconstruction of your digital presence into a conversion-driven system. Not a redesign — a ground-up rebuild engineered for revenue.',
    details: ['Architecture & UX strategy', 'Conversion-optimized design', 'Performance engineering', 'Mobile-first responsive systems'],
  },
  {
    num: '02',
    title: 'Conversion Optimization',
    desc: 'Systematic elimination of friction across every customer touchpoint. Data-driven restructuring that turns visitors into revenue.',
    details: ['Funnel analysis & reconstruction', 'A/B testing frameworks', 'CTA & messaging optimization', 'Analytics infrastructure'],
  },
  {
    num: '03',
    title: 'Backend & System Infrastructure',
    desc: 'The invisible architecture that determines whether your business scales or stalls. We rebuild the systems your team depends on.',
    details: ['Workflow automation', 'CRM & tool integration', 'Database architecture', 'API development'],
  },
  {
    num: '04',
    title: 'Ongoing Performance Management',
    desc: 'Continuous monitoring, optimization, and evolution of your digital infrastructure. We don\'t build and disappear.',
    details: ['Performance monitoring', 'Iterative improvement cycles', 'Security & uptime management', 'Growth-driven updates'],
  },
]

export default function Services() {
  return (
    <section className="py-32 md:py-40" id="services">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="reveal">
          <div className="text-[10px] uppercase tracking-[0.5em] text-text-muted mb-6">What We Do</div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light text-text-primary tracking-[-0.01em] leading-[1.15] max-w-[600px]">
            Four pillars of<br />digital reconstruction.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px mt-20 bg-border">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="reveal bg-bg p-10 md:p-14 group hover:bg-bg-card transition-colors duration-500"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="text-gold/50 text-[11px] uppercase tracking-[0.4em] mb-6 group-hover:text-gold transition-colors duration-300">
                {s.num}
              </div>
              <h3 className="text-xl md:text-2xl font-light text-text-primary tracking-tight mb-4">
                {s.title}
              </h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
                {s.desc}
              </p>
              <ul className="space-y-2.5">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-[13px] text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                    <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
