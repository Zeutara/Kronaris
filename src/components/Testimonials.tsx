const testimonials = [
  {
    quote: "Our old site was embarrassing. Railworks rebuilt it in 3 weeks and our leads tripled in the first month.",
    name: "Marcus Chen",
    role: "Owner, Pacific Plumbing Co.",
  },
  {
    quote: "We didn't just get a new website. We got a system that actually brings in business while we sleep.",
    name: "Sarah Mitchell",
    role: "CEO, Mitchell & Associates",
  },
  {
    quote: "The ROI was immediate. Within 60 days we had paid for the entire rebuild and then some.",
    name: "David Park",
    role: "Founder, Apex Contracting",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-bg-2/40 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.25em] text-cyan/70 mb-3 font-medium">Results</p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-t1 tracking-[-0.02em]">What our clients say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="reveal card p-7" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="text-cyan/30 text-[32px] leading-none mb-3">"</div>
              <p className="text-t2 text-[15px] leading-[1.7] mb-6">{t.quote}</p>
              <div className="border-t border-rule pt-4">
                <p className="text-t1 text-[14px] font-medium">{t.name}</p>
                <p className="text-t3 text-[13px]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {[
            { value: '47+', label: 'Sites rebuilt' },
            { value: '3.2x', label: 'Avg. lead increase' },
            { value: '< 2s', label: 'Avg. load time' },
            { value: '96%', label: 'Client retention' },
          ].map((m, i) => (
            <div key={i} className="text-center p-5 border border-rule rounded-xl bg-bg-2/50">
              <div className="text-cyan text-[28px] font-bold mb-1">{m.value}</div>
              <div className="text-t3 text-[12px] uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
