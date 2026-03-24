const comparisons = [
  {
    before: 'Outdated website that looks like it was built five years ago',
    after: 'Institutional-grade digital presence that converts on contact',
  },
  {
    before: 'Scattered tools and fragmented workflows across the team',
    after: 'Unified system architecture that compounds every action',
  },
  {
    before: 'Visitors leave in seconds — no trust, no conversion',
    after: 'Credibility established in the first three seconds',
  },
  {
    before: 'Manual processes bleeding time and margin every week',
    after: 'Automated infrastructure that scales without headcount',
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-36 md:py-44">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal max-w-[640px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-px bg-gold/50" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold/70">Transformation</span>
          </div>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extralight text-text-primary tracking-[-0.02em] leading-[1.12]">
            From stagnant<br />to institutional.
          </h2>
        </div>

        {/* Column headers */}
        <div className="grid md:grid-cols-2 gap-[1px] mt-20 mb-[1px]">
          <div className="px-8 md:px-12 pb-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-text-muted/60">Before</span>
          </div>
          <div className="hidden md:block px-8 md:px-12 pb-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-gold/40">After Kronaris</span>
          </div>
        </div>

        <div className="space-y-[1px]">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="reveal grid md:grid-cols-2 gap-[1px] bg-border/40"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="bg-bg p-8 md:p-12 flex items-start gap-5 group hover:bg-bg-card/50 transition-colors duration-400">
                <div className="flex-shrink-0 mt-1 opacity-40">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 3L11 11M11 3L3 11" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>
                <p className="text-text-muted text-[15px] leading-relaxed">{c.before}</p>
              </div>
              <div className="bg-bg-card p-8 md:p-12 flex items-start gap-5 group hover:bg-bg-elevated transition-colors duration-400">
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7.5L5 10.5L12 3.5" stroke="#C9A063" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-text-secondary text-[15px] leading-relaxed group-hover:text-text-primary transition-colors duration-300">{c.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
