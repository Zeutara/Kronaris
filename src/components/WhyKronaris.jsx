const points = [
  { title: 'Authority', desc: 'Every system meets billion-dollar standards.' },
  { title: 'Speed', desc: 'Full audit in 48 hours. Deployed in weeks.' },
  { title: 'Control', desc: 'No committees. Total accountability.' },
  { title: 'Results', desc: 'Measured by what it earns — not how it looks.' },
]

export default function WhyKronaris() {
  return (
    <section className="py-16 md:py-24 bg-bg-alt" id="about">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-extralight text-white tracking-[-0.02em] mb-8">Why Kronaris</h2>
            <blockquote className="text-xl md:text-2xl font-extralight text-text-secondary leading-[1.55]">
              "Small businesses are the backbone of our economy — they deserve the same digital infrastructure as billion-dollar companies."
            </blockquote>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {points.map((p, i) => (
              <div key={p.title} className="reveal group bg-bg-card border border-border hover:border-gold/20 p-7 transition-all duration-400" style={{ transitionDelay: `${i * 0.05}s` }}>
                <span className="text-gold/30 text-xs tracking-wider">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-normal text-white mt-3 mb-2 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
