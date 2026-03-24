const services = [
  { n: '01', title: 'Website Rebuilds', desc: 'We rebuild your site into something designed to convert — not just look good.' },
  { n: '02', title: 'Systems & Automation', desc: 'We connect and streamline your backend so it runs without friction.' },
  { n: '03', title: 'Conversion Optimization', desc: 'We turn traffic into customers with structure and clarity.' },
  { n: '04', title: 'Ongoing Growth', desc: 'We continuously improve your system so results keep compounding.' },
]

export default function Services() {
  return (
    <section className="py-20 md:py-[120px]" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12 md:mb-16">
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-medium text-t1 tracking-[-0.02em]">What we do</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={s.n} className="reveal group border border-rule p-8 hover:border-rule-2 transition-colors" style={{ transitionDelay: `${i * 0.04}s` }}>
              <span className="text-[13px] text-t3 block mb-3">{s.n}</span>
              <h3 className="text-[22px] font-medium text-t1 mb-3">{s.title}</h3>
              <p className="text-t2 text-[16px] leading-[1.6]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
