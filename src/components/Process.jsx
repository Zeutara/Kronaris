const steps = [
  { title: 'Audit', desc: 'Infrastructure analyzed against conversion benchmarks.' },
  { title: 'Takeover', desc: 'We assume full operational control.' },
  { title: 'Rebuild', desc: 'Ground-up reconstruction to institutional standards.' },
  { title: 'Deploy', desc: 'End-to-end launch. Zero downtime.' },
  { title: 'Scale', desc: 'Ongoing optimization that compounds.' },
]

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-bg-alt" id="process">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal mb-14">
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-extralight text-text-primary tracking-[-0.02em] leading-[1.15]">
            How it works
          </h2>
        </div>

        {/* Desktop flowchart */}
        <div className="reveal hidden md:block" style={{ transitionDelay: '0.1s' }}>
          {/* Step labels row */}
          <div className="grid grid-cols-5 gap-0">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center px-3">
                <span className="text-gold/40 text-[10px] tracking-[0.3em]">{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>

          {/* Flow nodes + connectors */}
          <div className="relative grid grid-cols-5 gap-0 mt-4">
            {/* Connector line spanning all nodes */}
            <div className="absolute top-[19px] left-[10%] right-[10%] h-px bg-gradient-to-r from-border via-gold/15 to-border z-0" />

            {steps.map((step, i) => (
              <div key={step.title} className="relative z-10 flex flex-col items-center group">
                {/* Node dot */}
                <div className="w-[38px] h-[38px] rounded-full border border-border bg-bg-alt flex items-center justify-center group-hover:border-gold/30 group-hover:bg-bg-card transition-all duration-400">
                  <div className="w-2 h-2 rounded-full bg-text-muted/30 group-hover:bg-gold/60 transition-all duration-400" />
                </div>
                {/* Title */}
                <h3 className="text-[15px] font-light text-text-primary mt-5 mb-2 group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-text-muted text-[12px] leading-[1.6] text-center max-w-[160px] group-hover:text-text-secondary transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical flow */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-border via-gold/10 to-border" />

          {steps.map((step, i) => (
            <div key={step.title} className="reveal relative flex items-start gap-6 py-5" style={{ transitionDelay: `${i * 0.05}s` }}>
              {/* Node dot */}
              <div className="absolute left-[-19px] top-[26px] w-[22px] h-[22px] rounded-full border border-border bg-bg-alt flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted/30" />
              </div>
              <div>
                <span className="text-gold/30 text-[10px] tracking-[0.3em]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[17px] font-light text-text-primary mt-1 mb-1">{step.title}</h3>
                <p className="text-text-muted text-[13px] leading-[1.6]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
