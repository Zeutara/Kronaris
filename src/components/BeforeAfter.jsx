const rows = [
  { before: 'Outdated site built for half your current size', after: 'Institutional-grade presence that converts on contact' },
  { before: 'Scattered tools, fragmented workflows', after: 'Unified system architecture that compounds every action' },
  { before: 'Visitors leave in seconds — zero trust', after: 'Credibility established before the first scroll' },
  { before: 'Manual processes bleeding time and margin', after: 'Automated infrastructure that scales without headcount' },
]

export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="reveal mb-8">
          <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-[-0.02em]">The shift</h2>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-16 mb-4 px-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted/40">Before</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold/30">After Kronaris</span>
        </div>

        <div className="border-t border-border">
          {rows.map((r, i) => (
            <div key={i} className="reveal grid md:grid-cols-2 gap-4 md:gap-16 py-5 md:py-6 border-b border-border/50" style={{ transitionDelay: `${i * 0.04}s` }}>
              <p className="text-text-muted text-[15px] leading-relaxed flex items-start gap-3">
                <span className="text-text-muted/30 mt-0.5 shrink-0">&times;</span>{r.before}
              </p>
              <p className="text-text-secondary text-[15px] leading-relaxed flex items-start gap-3">
                <span className="text-gold/50 mt-0.5 shrink-0">&rarr;</span>{r.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
