const rows = [
  { before: 'Outdated site built for half your current size', after: 'Institutional-grade presence that converts on contact' },
  { before: 'Scattered tools, fragmented workflows', after: 'Unified architecture that compounds every action' },
  { before: 'Visitors leave in seconds — zero trust', after: 'Credibility established before the first scroll' },
  { before: 'Manual processes bleeding time and margin', after: 'Automated infrastructure that scales without headcount' },
]

export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="reveal mb-10">
          <h2 className="text-3xl md:text-5xl font-extralight text-white tracking-[-0.02em]">The shift</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Before column */}
          <div className="bg-bg-card border border-border p-8 md:p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-text-muted/60 mb-6">Before</div>
            <div className="space-y-5">
              {rows.map((r, i) => (
                <div key={i} className="reveal flex items-start gap-3" style={{ transitionDelay: `${i * 0.04}s` }}>
                  <span className="text-red-400/40 mt-1 shrink-0 text-lg leading-none">&times;</span>
                  <p className="text-text-muted text-[16px] leading-relaxed">{r.before}</p>
                </div>
              ))}
            </div>
          </div>

          {/* After column */}
          <div className="bg-bg-card border border-gold/10 p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent" />
            <div className="text-xs uppercase tracking-[0.3em] text-gold/40 mb-6">After Kronaris</div>
            <div className="space-y-5">
              {rows.map((r, i) => (
                <div key={i} className="reveal flex items-start gap-3" style={{ transitionDelay: `${i * 0.04 + 0.1}s` }}>
                  <span className="text-gold/60 mt-0.5 shrink-0 text-base leading-none">&#10003;</span>
                  <p className="text-text-secondary text-[16px] leading-relaxed">{r.after}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
