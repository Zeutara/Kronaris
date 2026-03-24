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
    <section className="py-36 md:py-44 bg-bg-alt relative" id="process">
      {/* Subtle side glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[400px] h-[600px] bg-gold/[0.015] rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold/70">Our Process</span>
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extralight text-text-primary tracking-[-0.02em] leading-[1.12] mb-6">
            Controlled. Precise.<br />Inevitable.
          </h2>
          <p className="text-text-secondary text-[15px] leading-[1.75] max-w-[480px]">
            Five phases. One outcome. Every engagement follows the same
            disciplined framework — because precision scales, improvisation doesn't.
          </p>
        </div>

        <div className="mt-24 relative">
          {/* Vertical connector */}
          <div className="hidden md:block absolute left-[40px] top-10 bottom-10 w-px bg-gradient-to-b from-border via-gold/10 to-border" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal group"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="flex gap-10 md:gap-16 py-12 md:py-16 border-b border-border/50 last:border-b-0">
                {/* Number */}
                <div className="relative flex-shrink-0">
                  <div className="w-[80px] text-[36px] md:text-[44px] font-extralight text-text-muted/20 group-hover:text-gold/30 transition-colors duration-500 tabular-nums tracking-tight">
                    {step.num}
                  </div>
                  {/* Dot on connector */}
                  <div className="hidden md:block absolute left-[40px] top-[22px] w-1.5 h-1.5 rounded-full bg-text-muted/20 group-hover:bg-gold/50 transition-colors duration-500 -translate-x-1/2" />
                </div>

                {/* Content */}
                <div className="flex-1 max-w-[640px]">
                  <h3 className="text-[28px] md:text-[34px] font-extralight text-text-primary tracking-[-0.02em] mb-5 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-[15px] leading-[1.75] mb-5">
                    {step.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-px bg-gold/40" />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold/50 group-hover:text-gold/80 transition-colors duration-300">
                      {step.accent}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
