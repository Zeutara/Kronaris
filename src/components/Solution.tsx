import { Link } from 'react-router-dom'

export default function Solution() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-cyan/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
        <div className="reveal">
          <p className="text-[13px] uppercase tracking-[0.25em] text-cyan/70 mb-3 font-medium">The Solution</p>
          <h2 className="text-[clamp(28px,4vw,46px)] font-bold text-t1 tracking-[-0.02em] mb-6">
            We rebuild your website into a<br />
            <span className="gradient-text">system that generates business.</span>
          </h2>
          <p className="text-t2 text-[17px] leading-[1.7] max-w-[560px] mx-auto mb-10">
            Not a facelift. Not a template. A complete reconstruction of your online presence — designed to attract, convert, and retain customers on autopilot.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 text-left mb-10">
            {[
              { label: 'Modern Design', desc: 'Clean, fast, mobile-first interfaces that build instant credibility.' },
              { label: 'Conversion Engine', desc: 'Strategic CTAs, lead capture, and funnels that turn visitors into customers.' },
              { label: 'Backend Systems', desc: 'CRM integration, automations, and pipelines that work while you sleep.' },
            ].map((item, i) => (
              <div key={i} className="reveal card p-6" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="w-2 h-2 rounded-full bg-cyan mb-4" />
                <h3 className="text-[15px] font-semibold text-t1 mb-2">{item.label}</h3>
                <p className="text-t3 text-[14px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/services" className="text-[14px] text-cyan hover:text-cyan-h transition-colors border-b border-cyan/30 pb-0.5">
            See all services &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
