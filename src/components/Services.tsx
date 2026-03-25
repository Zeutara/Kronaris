import { Link } from 'react-router-dom'

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 10h18" />
      </svg>
    ),
    title: 'Website Rebuilds',
    desc: 'We tear down your old site and rebuild it from scratch — fast, modern, and engineered to convert.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 20l4-6 4 4 4-8 4 6" /><path d="M20 10v2h-2" />
      </svg>
    ),
    title: 'Conversion Optimization',
    desc: 'We restructure your pages so more visitors take action — calls, forms, purchases.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 3L3 8l9 5 9-5-9-5z" /><path d="M3 12l9 5 9-5" /><path d="M3 17l9 5 9-5" />
      </svg>
    ),
    title: 'CRM + Lead Systems',
    desc: 'We integrate CRM, automations, and lead pipelines so nothing slips through the cracks.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6" /><path d="M8 11h6" />
      </svg>
    ),
    title: 'SEO Foundations',
    desc: 'We build your site on a rock-solid SEO foundation so you get found organically.',
  },
]

export default function Services() {
  return (
    <section className="py-24 md:py-32" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.25em] text-cyan/70 mb-3 font-medium">Services</p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-t1 tracking-[-0.02em]">What we build</h2>
          <p className="text-t2 text-[16px] mt-3 max-w-[460px] mx-auto">
            Everything your business needs to turn its website into a growth engine.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <div key={s.title} className="reveal card p-7 md:p-8" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="text-cyan/60 mb-4">{s.icon}</div>
              <h3 className="text-[20px] font-semibold text-t1 mb-2">{s.title}</h3>
              <p className="text-t2 text-[15px] leading-[1.65]">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="reveal text-center mt-10">
          <Link to="/services" className="text-[14px] text-cyan hover:text-cyan-h transition-colors border-b border-cyan/30 pb-0.5">
            Full service breakdown &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
