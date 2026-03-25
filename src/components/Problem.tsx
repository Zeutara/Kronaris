export default function Problem() {
  const problems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><circle cx="12" cy="16" r="0.5" fill="currentColor" />
        </svg>
      ),
      title: 'Outdated design',
      desc: 'Your site looks like it was built in 2015. Visitors bounce before they read a word.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Painfully slow',
      desc: 'Every second of load time costs you 7% of conversions. Most business sites fail this test.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M4 20l4-6 4 4 4-8 4 6" /><path d="M20 20H4" />
        </svg>
      ),
      title: 'Zero conversions',
      desc: 'Traffic without conversion is wasted money. No CTAs, no funnels, no follow-up.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 10h0" /><path d="M12 10h0" /><path d="M17 10h0" />
        </svg>
      ),
      title: 'No systems behind it',
      desc: 'No CRM. No automations. No pipeline. Just a brochure site collecting dust.',
    },
  ]

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg-2/50 to-bg pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.25em] text-red-400/80 mb-3 font-medium">The Problem</p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-t1 tracking-[-0.02em]">
            Most business websites are <span className="text-red-400">broken.</span>
          </h2>
          <p className="text-t2 text-[16px] mt-4 max-w-[500px] mx-auto">
            They look bad. They load slow. They don't convert. And they have nothing working behind the scenes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <div key={i} className="reveal card p-7 text-center" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="text-red-400/60 mb-4 flex justify-center">{p.icon}</div>
              <h3 className="text-[17px] font-semibold text-t1 mb-2">{p.title}</h3>
              <p className="text-t2 text-[14px] leading-[1.65]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
