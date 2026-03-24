const steps = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We disassemble your current digital infrastructure. Every page, system, workflow, and touchpoint is analyzed against conversion benchmarks and industry standards.',
    accent: 'Comprehensive analysis delivered within 48 hours.',
  },
  {
    num: '02',
    title: 'Takeover',
    desc: 'We assume full operational control. No back-and-forth. No design-by-committee. Our team takes ownership of the rebuild from architecture to deployment.',
    accent: 'Single point of accountability.',
  },
  {
    num: '03',
    title: 'Rebuild',
    desc: 'Ground-up reconstruction of your digital presence. Every element engineered for conversion, performance, and scale. Built to institutional standards.',
    accent: 'Revenue-engineered infrastructure.',
  },
  {
    num: '04',
    title: 'Deploy',
    desc: 'Launch with precision. Migration, QA, performance testing, and go-live managed entirely by our team. Zero downtime. Zero guesswork.',
    accent: 'Managed deployment, zero risk.',
  },
  {
    num: '05',
    title: 'Scale',
    desc: 'Ongoing optimization, monitoring, and evolution. Your infrastructure grows with your business. We don\'t build and disappear — we build and compound.',
    accent: 'Continuous compounding growth.',
  },
]

export default function Process() {
  return (
    <section className="py-32 md:py-40 bg-bg-alt" id="process">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="reveal">
          <div className="text-[10px] uppercase tracking-[0.5em] text-text-muted mb-6">Our Process</div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light text-text-primary tracking-[-0.01em] leading-[1.15] max-w-[600px] mb-6">
            Controlled. Precise.<br />Inevitable.
          </h2>
          <p className="text-text-secondary text-[15px] leading-relaxed max-w-[480px]">
            Five phases. One outcome. Every engagement follows the same
            disciplined framework — because precision scales, improvisation doesn't.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* Vertical connector line */}
          <div className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px bg-border" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal group"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="flex gap-8 md:gap-14 py-10 md:py-14 border-b border-border last:border-b-0">
                  {/* Number */}
                  <div className="relative flex-shrink-0">
                    <div className="w-[80px] text-[32px] md:text-[40px] font-extralight text-text-muted/30 group-hover:text-gold/40 transition-colors duration-500 tabular-nums">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 max-w-[640px]">
                    <h3 className="text-2xl md:text-3xl font-light text-text-primary tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-[15px] leading-relaxed mb-4">
                      {step.desc}
                    </p>
                    <span className="text-[11px] uppercase tracking-[0.3em] text-gold/60">
                      {step.accent}
                    </span>
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
