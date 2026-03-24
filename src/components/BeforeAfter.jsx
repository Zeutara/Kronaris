const rows = [
  { before: 'Outdated site built for half your current size', after: 'Institutional-grade presence that converts on contact' },
  { before: 'Scattered tools, fragmented workflows', after: 'Unified system architecture that compounds every action' },
  { before: 'Visitors leave in seconds — zero trust', after: 'Credibility established before the first scroll' },
  { before: 'Manual processes bleeding time and margin', after: 'Automated infrastructure that scales without headcount' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="reveal mb-14">
          <h2 className="text-[clamp(26px,3.5vw,42px)] font-extralight text-text-primary tracking-[-0.02em] leading-[1.15]">
            The shift
          </h2>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-20 mb-6 px-1">
          <span className="text-[9px] uppercase tracking-[0.35em] text-text-muted/40">Before</span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-gold/30">After Kronaris</span>
        </div>

        <div className="border-t border-border">
          {rows.map((r, i) => (
            <div key={i} className="reveal grid md:grid-cols-2 gap-6 md:gap-20 py-7 md:py-8 border-b border-border/50" style={{ transitionDelay: `${i * 0.06}s` }}>
              <p className="text-text-muted text-[14px] leading-relaxed flex items-start gap-4">
                <span className="text-text-muted/30 mt-0.5 shrink-0">&times;</span>
                {r.before}
              </p>
              <p className="text-text-secondary text-[14px] leading-relaxed flex items-start gap-4">
                <span className="text-gold/50 mt-0.5 shrink-0">&rarr;</span>
                {r.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
