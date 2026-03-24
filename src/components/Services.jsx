const capabilities = [
  {
    code: 'WEB-R',
    title: 'Website Reconstruction',
    status: 'Core',
    items: ['Conversion architecture', 'Performance engineering', 'UX systems', 'Mobile infrastructure'],
  },
  {
    code: 'SYS-A',
    title: 'Systems & Automation',
    status: 'Core',
    items: ['Workflow automation', 'CRM integration', 'Backend architecture', 'API infrastructure'],
  },
  {
    code: 'CNV-O',
    title: 'Conversion Optimization',
    status: 'Core',
    items: ['Funnel reconstruction', 'A/B framework', 'Analytics systems', 'Revenue tracking'],
  },
  {
    code: 'PFM-M',
    title: 'Performance Management',
    status: 'Ongoing',
    items: ['Continuous monitoring', 'Iterative optimization', 'Security management', 'Growth engineering'],
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-20 bg-grid" id="services">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="reveal flex items-end justify-between mb-8">
          <div>
            <span className="label-gold block mb-2">Capabilities</span>
            <h2 className="text-[24px] md:text-[30px] font-light text-w tracking-[-0.02em]">What we build</h2>
          </div>
          <span className="label hidden md:block">4 Divisions</span>
        </div>

        {/* Table header */}
        <div className="hidden md:grid grid-cols-[100px_1fr_80px_1fr] gap-4 py-2.5 border-y border-rule-light text-[10px] tracking-[0.12em] uppercase text-g4">
          <span>Code</span>
          <span>Division</span>
          <span>Status</span>
          <span>Capabilities</span>
        </div>

        {/* Table rows */}
        {capabilities.map((c, i) => (
          <div key={c.code} className="reveal group border-b border-rule py-4 md:py-5 md:grid md:grid-cols-[100px_1fr_80px_1fr] md:gap-4 md:items-start hover:bg-s1/50 transition-colors px-1 -mx-1" style={{ transitionDelay: `${i * 0.04}s` }}>
            <span className="mono text-[12px] text-g3 hidden md:block">{c.code}</span>
            <h3 className="text-w text-[15px] font-normal group-hover:text-gold transition-colors duration-300 mb-2 md:mb-0">
              <span className="mono text-g3 text-[11px] mr-2 md:hidden">{c.code}</span>
              {c.title}
            </h3>
            <span className={`hidden md:inline-block text-[10px] tracking-wider uppercase ${c.status === 'Core' ? 'text-g3' : 'text-gold/50'}`}>{c.status}</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {c.items.map(item => (
                <span key={item} className="text-[12px] text-g2 flex items-center gap-1.5">
                  <span className="w-0.5 h-0.5 bg-g4 rounded-full" />{item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
