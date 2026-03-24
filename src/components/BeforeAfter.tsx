const rows = [
  { feature: 'What you get', others: 'A template with your logo on it', kronaris: 'A custom system built around your business' },
  { feature: 'Who does the work', others: 'You manage freelancers and agencies', kronaris: 'We take full ownership — start to finish' },
  { feature: 'Timeline', others: '3–6 months of back and forth', kronaris: 'Live in weeks, not months' },
  { feature: 'After launch', others: 'They hand it off and disappear', kronaris: 'We optimize and improve every month' },
  { feature: 'Measured by', others: 'How it looks', kronaris: 'How much revenue it generates' },
  { feature: 'Communication', others: 'Endless email chains and meetings', kronaris: 'One team, direct access, fast decisions' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-2/50 to-bg pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">The Difference</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">Not another agency.</h2>
          <p className="text-t2 text-[16px] mt-3 max-w-[480px] mx-auto">Most firms give you a website. We give you a system that actually grows your business.</p>
        </div>

        {/* Comparison table */}
        <div className="reveal relative overflow-hidden rounded-2xl border border-rule">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-gold/[0.04] rounded-full blur-[80px]" />

          {/* Header row */}
          <div className="relative grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.2fr_1fr_1fr]">
            <div className="p-4 md:p-5 bg-bg-3/50" />
            <div className="p-4 md:p-5 bg-bg-3/50 text-center border-l border-rule">
              <span className="text-[13px] text-t3 font-medium">Other firms</span>
            </div>
            <div className="p-4 md:p-5 bg-gradient-to-r from-gold/[0.08] to-gold/[0.03] text-center border-l border-rule">
              <span className="text-[13px] text-gold font-medium">Kronaris</span>
            </div>
          </div>

          {/* Data rows */}
          {rows.map((r, i) => (
            <div key={i} className="reveal relative grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1.2fr_1fr_1fr] border-t border-rule group hover:bg-bg-3/30 transition-colors" style={{ transitionDelay: `${i * 0.04}s` }}>
              <div className="p-4 md:p-5">
                <span className="text-[14px] text-t1 font-medium">{r.feature}</span>
              </div>
              <div className="p-4 md:p-5 border-l border-rule flex items-center">
                <span className="text-[13px] text-t3 leading-snug">{r.others}</span>
              </div>
              <div className="p-4 md:p-5 border-l border-rule flex items-center bg-gold/[0.02]">
                <span className="text-[13px] text-t1 leading-snug">{r.kronaris}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
