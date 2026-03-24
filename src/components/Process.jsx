const steps = [
  { title: 'Audit', desc: 'Infrastructure analyzed. Delivered in 48 hours.' },
  { title: 'Takeover', desc: 'Full operational control. One team.' },
  { title: 'Rebuild', desc: 'Ground-up reconstruction.' },
  { title: 'Deploy', desc: 'End-to-end launch. Zero downtime.' },
  { title: 'Scale', desc: 'Ongoing optimization that compounds.' },
]

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-bg-alt" id="process">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="reveal mb-12">
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-[-0.02em]">How it works</h2>
        </div>

        {/* Desktop flowchart */}
        <div className="reveal hidden md:block" style={{ transitionDelay: '0.08s' }}>
          <div className="relative grid grid-cols-5">
            {/* Connector line */}
            <div className="absolute top-5 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent z-0" />

            {steps.map((step, i) => (
              <div key={step.title} className="relative z-10 flex flex-col items-center group px-2">
                <div className="w-10 h-10 rounded-full border border-border bg-bg-alt flex items-center justify-center group-hover:border-gold/40 transition-all duration-400">
                  <div className="w-2 h-2 rounded-full bg-text-muted/30 group-hover:bg-gold transition-all duration-400" />
                </div>
                <h3 className="text-base md:text-lg font-light text-white mt-4 mb-1.5 group-hover:text-gold transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-text-muted text-xs text-center max-w-[150px] leading-relaxed group-hover:text-text-secondary transition-colors duration-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
          {steps.map((step, i) => (
            <div key={step.title} className="reveal relative flex items-start gap-5 py-4" style={{ transitionDelay: `${i * 0.04}s` }}>
              <div className="absolute left-[-19px] top-5 w-5 h-5 rounded-full border border-border bg-bg-alt flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-text-muted/30" />
              </div>
              <div>
                <h3 className="text-lg font-light text-white mb-0.5">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
