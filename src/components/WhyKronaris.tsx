const pillars = [
  { title: 'We take ownership', desc: 'No hand-offs. No waiting around. We run the entire project from start to finish.' },
  { title: 'We move fast', desc: 'Most rebuilds are live in weeks, not months. Speed is part of the value.' },
  { title: 'We focus on results', desc: 'We don\'t measure success by how things look — we measure it by what they earn.' },
  { title: 'We keep it simple', desc: 'No jargon. No complexity. Just clear systems that work and grow with you.' },
]

export default function WhyKronaris() {
  return (
    <section className="py-24 md:py-32" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal text-center mb-6">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">Why Us</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em] mb-4">Why Kronaris</h2>
          <p className="text-t2 text-[18px] max-w-[560px] mx-auto leading-[1.6]">
            We don't consult. We take over and build. Most firms give you advice — we take responsibility for the result.
          </p>
        </div>

        {/* Belief quote */}
        <div className="reveal max-w-[600px] mx-auto text-center mb-14 mt-8">
          <div className="border-l-2 border-gold/30 pl-6 text-left">
            <p className="text-t2 text-[16px] leading-[1.7] italic">
              "Small businesses are the backbone of our economy. They deserve infrastructure that actually supports their growth — not another template."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div key={p.title} className="reveal card p-7" style={{ transitionDelay: `${i * 0.06}s` }}>
              <h3 className="text-[16px] font-medium text-t1 mb-2">{p.title}</h3>
              <p className="text-t2 text-[14px] leading-[1.6]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
