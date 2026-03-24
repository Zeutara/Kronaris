const services = [
  { title: 'Website Reconstruction', desc: 'Your site isn\'t underperforming — it was never built to perform. We rebuild it as a system engineered for conversion.' },
  { title: 'Systems & Automation', desc: 'Fragmented tools drain margin. We replace them with integrated infrastructure that runs without you.' },
  { title: 'Conversion Architecture', desc: 'Traffic means nothing without a system to capture it. We build the architecture that turns attention into revenue.' },
  { title: 'Ongoing Optimization', desc: 'We don\'t hand off and disappear. Every system we build is monitored, measured, and improved continuously.' },
]

export default function Services() {
  return (
    <section className="py-20 md:py-28" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal md:flex md:items-start md:justify-between md:gap-16 mb-14">
          <h2 className="text-[28px] md:text-[36px] font-light text-white tracking-[-0.02em] leading-tight shrink-0">
            What we build
          </h2>
          <p className="text-gray-2 text-[15px] max-w-[340px] mt-3 md:mt-1 md:text-right">
            Not features. Not pages. Revenue infrastructure.
          </p>
        </div>

        <div className="space-y-0 border-t border-rule">
          {services.map((s, i) => (
            <div key={s.title} className="reveal group border-b border-rule py-8 md:py-10 md:flex md:gap-16 md:items-start" style={{ transitionDelay: `${i * 0.04}s` }}>
              <div className="md:w-[280px] shrink-0 flex items-baseline gap-4 mb-3 md:mb-0">
                <span className="text-gray-3/40 text-[13px] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[18px] font-normal text-white group-hover:text-gold transition-colors duration-300">{s.title}</h3>
              </div>
              <p className="text-gray-2 text-[15px] leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
