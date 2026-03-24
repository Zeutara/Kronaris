const phases = [
  { n: '01', title: 'Audit', dur: '48h', desc: 'Full infrastructure teardown. Every system, page, and workflow benchmarked.' },
  { n: '02', title: 'Takeover', dur: 'Day 3', desc: 'Operational control transferred. No committees. No approval chains.' },
  { n: '03', title: 'Rebuild', dur: 'Wk 1–4', desc: 'Ground-up reconstruction. Performance-tested. Conversion-optimized.' },
  { n: '04', title: 'Deploy', dur: 'Wk 5', desc: 'Full migration, QA, and launch. Zero downtime. Managed end to end.' },
  { n: '05', title: 'Compound', dur: 'Ongoing', desc: 'Continuous monitoring and optimization. Infrastructure improves monthly.' },
]

export default function Process() {
  return (
    <section className="py-16 md:py-20 bg-s1 border-y border-rule" id="process">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="reveal flex items-end justify-between mb-10">
          <div>
            <span className="label-gold block mb-2">Execution Framework</span>
            <h2 className="text-[24px] md:text-[30px] font-light text-w tracking-[-0.02em]">Five phases. One outcome.</h2>
          </div>
          <span className="label hidden md:block">Lifecycle</span>
        </div>

        {/* Timeline */}
        <div className="reveal relative" style={{ transitionDelay: '0.08s' }}>
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-[18px] left-0 right-0 h-px bg-rule" />

          <div className="grid md:grid-cols-5 gap-px">
            {phases.map((p, i) => (
              <div key={p.n} className="relative group">
                {/* Node */}
                <div className="hidden md:flex items-center justify-center w-9 h-9 border border-rule bg-s1 rounded-full mx-auto mb-5 relative z-10 group-hover:border-gold/30 transition-colors">
                  <span className="mono text-[10px] text-g3 group-hover:text-gold transition-colors">{p.n}</span>
                </div>

                {/* Content */}
                <div className="border border-rule bg-s2/30 p-4 md:p-5 group-hover:bg-s2/60 group-hover:border-rule-light transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-w text-[14px] font-normal group-hover:text-gold transition-colors">{p.title}</h3>
                    <span className="mono text-[10px] text-g4">{p.dur}</span>
                  </div>
                  <p className="text-g3 text-[12px] leading-[1.6] group-hover:text-g2 transition-colors">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
