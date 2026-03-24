import logoFull from '../assets/kronaris-full.png'

const points = [
  { title: 'Authority', desc: 'Every system meets the same standards as billion-dollar infrastructure.' },
  { title: 'Speed', desc: 'Full audit in 48 hours. Deployed in weeks, not months.' },
  { title: 'Control', desc: 'No committees. One team, one outcome, total accountability.' },
  { title: 'Results', desc: 'Measured by what it earns — conversion, revenue, growth.' },
]

export default function WhyKronaris() {
  return (
    <section className="py-24 md:py-32 bg-bg-alt" id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — quote */}
          <div className="reveal">
            <p className="text-[9px] uppercase tracking-[0.4em] text-text-muted/50 mb-8">Our position</p>
            <blockquote className="text-[22px] md:text-[26px] font-extralight text-text-primary leading-[1.5] tracking-[-0.01em]">
              "Small businesses are the backbone of our economy — they deserve the same digital infrastructure as billion-dollar companies."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div
                className="logo-mask h-6 w-24"
                style={{ WebkitMaskImage: `url(${logoFull})`, maskImage: `url(${logoFull})`, background: 'rgba(255,255,255,0.3)' }}
              />
            </div>
          </div>

          {/* Right — reasons */}
          <div>
            <p className="reveal text-[9px] uppercase tracking-[0.4em] text-text-muted/50 mb-8">Why us</p>
            {points.map((p, i) => (
              <div key={p.title} className="reveal group py-6 border-b border-border/40 last:border-b-0" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="flex items-baseline gap-5">
                  <span className="text-gold/30 text-[11px] tracking-wider font-light">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[17px] font-light text-text-primary tracking-tight mb-2 group-hover:text-white transition-colors duration-300">{p.title}</h3>
                    <p className="text-text-muted text-[14px] leading-[1.7] group-hover:text-text-secondary transition-colors duration-300">{p.desc}</p>
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
