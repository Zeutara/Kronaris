export default function WhyKronaris() {
  return (
    <section className="py-20 md:py-[120px] bg-bg-2" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-medium text-t1 tracking-[-0.02em] mb-6">Why Kronaris</h2>
            <div className="space-y-4 text-[18px] text-t2 leading-[1.6]">
              <p className="text-t1">We don't consult. We take over and build.</p>
              <p>Most firms give you advice. We take responsibility for the result.</p>
              <p>Small businesses are the backbone of our economy. They deserve infrastructure that actually supports their growth.</p>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-4 content-start">
            {[
              'Full ownership',
              'Fast execution',
              'Outcome-focused',
              'Built for scale',
            ].map((t, i) => (
              <div key={t} className="reveal border border-rule p-6 hover:border-rule-2 transition-colors" style={{ transitionDelay: `${i * 0.04}s` }}>
                <span className="text-[16px] font-medium text-t1">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
