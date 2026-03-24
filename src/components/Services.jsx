const services = [
  {
    num: '01',
    title: 'Full Website Rebuilds',
    desc: 'Complete reconstruction of your digital presence into a conversion-driven system. Not a redesign — a ground-up rebuild engineered for revenue.',
    details: ['Architecture & UX strategy', 'Conversion-optimized design', 'Performance engineering', 'Mobile-first responsive systems'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><circle cx="6.5" cy="6" r="0.5" fill="currentColor"/><circle cx="9" cy="6" r="0.5" fill="currentColor"/></svg>
    ),
  },
  {
    num: '02',
    title: 'Conversion Optimization',
    desc: 'Systematic elimination of friction across every customer touchpoint. Data-driven restructuring that turns visitors into revenue.',
    details: ['Funnel analysis & reconstruction', 'A/B testing frameworks', 'CTA & messaging optimization', 'Analytics infrastructure'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><path d="M4 20l4-4 4 4 4-8 4 4"/><path d="M20 8v4h-4"/></svg>
    ),
  },
  {
    num: '03',
    title: 'Backend & System Infrastructure',
    desc: 'The invisible architecture that determines whether your business scales or stalls. We rebuild the systems your team depends on.',
    details: ['Workflow automation', 'CRM & tool integration', 'Database architecture', 'API development'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    ),
  },
  {
    num: '04',
    title: 'Ongoing Performance Management',
    desc: 'Continuous monitoring, optimization, and evolution of your digital infrastructure. We don\'t build and disappear.',
    details: ['Performance monitoring', 'Iterative improvement cycles', 'Security & uptime management', 'Growth-driven updates'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
  },
]

export default function Services() {
  return (
    <section className="py-36 md:py-44" id="services">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold/70">What We Do</span>
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extralight text-text-primary tracking-[-0.02em] leading-[1.12]">
            Four pillars of<br />digital reconstruction.
          </h2>
          <p className="text-text-secondary text-[15px] leading-relaxed mt-6 max-w-[440px]">
            Every engagement is structured around the same four disciplines — because institutional outcomes require institutional process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[1px] mt-20 bg-border/50 rounded-sm overflow-hidden">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="reveal bg-bg p-10 md:p-14 group hover:bg-bg-card transition-all duration-500 relative"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Gold accent line on hover */}
              <div className="absolute top-0 left-0 w-full h-px bg-gold/0 group-hover:bg-gold/20 transition-all duration-500" />

              <div className="flex items-center justify-between mb-8">
                <div className="text-gold/40 group-hover:text-gold/70 transition-colors duration-300">
                  {s.icon}
                </div>
                <div className="text-[11px] tracking-[0.4em] text-text-muted/40 group-hover:text-gold/50 transition-colors duration-300 font-light">
                  {s.num}
                </div>
              </div>

              <h3 className="text-[22px] md:text-2xl font-light text-text-primary tracking-[-0.01em] mb-4 group-hover:text-white transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-text-secondary text-[14px] leading-[1.75] mb-8">
                {s.desc}
              </p>
              <ul className="space-y-3">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-[13px] text-text-muted group-hover:text-text-secondary transition-colors duration-300">
                    <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold/60 flex-shrink-0 transition-colors duration-300" />
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
