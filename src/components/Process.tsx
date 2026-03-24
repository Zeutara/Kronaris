const steps = [
  { n: '01', title: 'Audit', desc: 'We find out what\'s broken and where you\'re losing money.' },
  { n: '02', title: 'Rebuild', desc: 'We reconstruct your systems from the ground up.' },
  { n: '03', title: 'Launch', desc: 'Your new system goes live — ready to perform.' },
  { n: '04', title: 'Optimize', desc: 'We refine and improve, month after month.' },
]

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-bg-2/40" id="process">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">Process</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">How it works</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.n} className="reveal card p-7 text-center" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5">
                <span className="text-[13px] text-gold font-medium">{s.n}</span>
              </div>
              <h3 className="text-[18px] font-medium text-t1 mb-2">{s.title}</h3>
              <p className="text-t2 text-[14px] leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
