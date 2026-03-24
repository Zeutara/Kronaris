const steps = [
  { n: '01', title: 'Audit', desc: 'We tear down your current infrastructure and identify every leak, bottleneck, and missed opportunity. Delivered in 48 hours.' },
  { n: '02', title: 'Takeover', desc: 'No committees. No approvals loop. We take full operational control of the rebuild from day one.' },
  { n: '03', title: 'Rebuild', desc: 'Every element reconstructed to institutional standards. Performance-tested, conversion-optimized, built to scale.' },
  { n: '04', title: 'Deploy', desc: 'Live in weeks, not months. Full migration, QA, and launch — managed end to end.' },
  { n: '05', title: 'Compound', desc: 'Ongoing monitoring and optimization. Your infrastructure improves every month, not just at launch.' },
]

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-14">
          <h2 className="text-[28px] md:text-[36px] font-light text-white tracking-[-0.02em] leading-tight">Five phases. One outcome.</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-px">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal group p-6 md:p-5 border-l border-rule first:border-l-0 md:first:border-l-0" style={{ transitionDelay: `${i * 0.04}s` }}>
              <span className="text-gold/40 text-[12px] tracking-wider">{s.n}</span>
              <h3 className="text-white text-[17px] font-normal mt-2 mb-2 group-hover:text-gold transition-colors duration-300">{s.title}</h3>
              <p className="text-gray-3 text-[13px] leading-[1.65] group-hover:text-gray-2 transition-colors duration-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
