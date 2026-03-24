export default function WhyKronaris() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal md:flex md:gap-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-[28px] md:text-[36px] font-light text-white tracking-[-0.02em] leading-tight mb-6">
              We don't consult.<br />We take over and build.
            </h2>
            <p className="text-gray-2 text-[15px] leading-[1.7] mb-6">
              Most firms give you a strategy deck and wish you luck. We assume full control, rebuild your infrastructure from the ground up, and stay accountable to the outcome — not the deliverable.
            </p>
            <p className="text-gray-2 text-[15px] leading-[1.7] border-l-2 border-gold/30 pl-5 italic">
              Small businesses are the backbone of our economy. They deserve the same level of digital infrastructure as billion-dollar companies.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-px bg-rule">
            {[
              ['Authority', 'Every system we ship meets enterprise-grade standards. No exceptions.'],
              ['Speed', '48-hour audit. Deployed in weeks. Delay is a tax we don\'t pay.'],
              ['Control', 'One team. Full ownership. No committees, no hand-offs.'],
              ['Outcomes', 'We measure in revenue impact — not deliverables shipped.'],
            ].map(([t, d], i) => (
              <div key={t} className="reveal bg-surface p-6 group" style={{ transitionDelay: `${i * 0.04}s` }}>
                <h3 className="text-white text-[16px] font-normal mb-2 group-hover:text-gold transition-colors duration-300">{t}</h3>
                <p className="text-gray-3 text-[13px] leading-[1.65] group-hover:text-gray-2 transition-colors duration-300">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
