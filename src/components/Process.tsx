const steps = [
  { n: '01', title: 'Audit', desc: 'We identify what\'s broken and where you\'re losing money.' },
  { n: '02', title: 'Rebuild', desc: 'We reconstruct everything from the ground up.' },
  { n: '03', title: 'Launch', desc: 'Your new system goes live, ready to perform.' },
  { n: '04', title: 'Optimize', desc: 'We refine and improve continuously.' },
]

export default function Process() {
  return (
    <section className="py-20 md:py-[120px]" id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12 md:mb-16">
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-medium text-t1 tracking-[-0.02em]">How it works</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[13px] text-gold/60">{s.n}</span>
                <div className="flex-1 h-px bg-rule" />
              </div>
              <h3 className="text-[22px] font-medium text-t1 mb-2">{s.title}</h3>
              <p className="text-t2 text-[16px] leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
