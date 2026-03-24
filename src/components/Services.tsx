const services = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 10h18"/></svg>,
    title: 'Website Rebuilds',
    desc: 'We rebuild your website into something designed to convert visitors into customers — not just look good.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 3L3 8l9 5 9-5-9-5z"/><path d="M3 12l9 5 9-5"/><path d="M3 17l9 5 9-5"/></svg>,
    title: 'Systems & Automation',
    desc: 'We connect and streamline everything behind the scenes so your business runs without manual headaches.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 20l4-6 4 4 4-8 4 6"/><path d="M20 10v2h-2"/></svg>,
    title: 'Conversion Optimization',
    desc: 'We restructure your customer journey so more visitors actually become paying customers.',
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
    title: 'Ongoing Growth',
    desc: 'We continuously improve your system every month so your results keep getting better over time.',
  },
]

export default function Services() {
  return (
    <section className="py-24 md:py-32" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">Services</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">What we do</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="reveal card p-7 md:p-8" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="text-gold/60 mb-4">{s.icon}</div>
              <h3 className="text-[20px] font-medium text-t1 mb-2">{s.title}</h3>
              <p className="text-t2 text-[15px] leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
