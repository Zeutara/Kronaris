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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-[-0.02em] mb-8">Why Kronaris</h2>
            <blockquote className="text-xl md:text-2xl font-extralight text-text-secondary leading-[1.55] tracking-[-0.01em]">
              "Small businesses are the backbone of our economy — they deserve the same digital infrastructure as billion-dollar companies."
            </blockquote>
          </div>

          <div>
            {points.map((p, i) => (
              <div key={p.title} className="reveal group py-5 border-b border-border/40 last:border-b-0" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="flex items-baseline gap-4">
                  <span className="text-gold/30 text-xs tracking-wider">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-lg font-light text-white mb-1 group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    <p className="text-text-muted text-[15px] leading-relaxed group-hover:text-text-secondary transition-colors duration-300">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
