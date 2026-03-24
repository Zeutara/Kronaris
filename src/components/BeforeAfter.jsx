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
    <section className="py-32 md:py-40">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="reveal">
          <div className="text-[10px] uppercase tracking-[0.5em] text-text-muted mb-6">Transformation</div>
          <h2 className="text-[clamp(28px,4vw,44px)] font-light text-text-primary tracking-[-0.01em] leading-[1.15] max-w-[600px]">
            From stagnant<br />to institutional.
          </h2>
        </div>

        <div className="mt-20 space-y-px">
          {comparisons.map((c, i) => (
            <div
              key={i}
              className="reveal grid md:grid-cols-2 gap-px bg-border"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="bg-bg p-8 md:p-12 flex items-start gap-5">
                <div className="flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M4 4L12 12M12 4L4 12" stroke="#454549" strokeWidth="1.2" />
                  </svg>
                </div>
                <p className="text-text-muted text-[15px] leading-relaxed">{c.before}</p>
              </div>
              <div className="bg-bg-card p-8 md:p-12 flex items-start gap-5">
                <div className="flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 8.5L6 12.5L14 4.5" stroke="#C4975A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-text-secondary text-[15px] leading-relaxed">{c.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
