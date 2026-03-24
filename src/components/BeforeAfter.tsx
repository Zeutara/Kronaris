const rows = [
  { feature: 'What you get', others: 'A template with your logo on it', kronaris: 'A custom system built around your business' },
  { feature: 'Who does the work', others: 'You manage freelancers and agencies', kronaris: 'We take full ownership — start to finish' },
  { feature: 'Timeline', others: '3–6 months of back and forth', kronaris: 'Live in weeks, not months' },
  { feature: 'After launch', others: 'They hand it off and disappear', kronaris: 'We optimize and improve every month' },
  { feature: 'Measured by', others: 'How it looks', kronaris: 'How much revenue it generates' },
  { feature: 'Communication', others: 'Endless emails and meetings', kronaris: 'One team, direct access, fast decisions' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-2/50 to-bg pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">The Difference</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">Not another agency.</h2>
        </div>

        {/* Comparison rows */}
        <div className="space-y-4">
          {rows.map((r, i) => (
            <div key={i} className="reveal grid md:grid-cols-[1fr_1fr] gap-3 md:gap-4" style={{ transitionDelay: `${i * 0.04}s` }}>
              {/* Others side */}
              <div className="rounded-xl bg-bg-2 border border-rule p-5 md:p-6 flex items-start gap-4">
                <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <span className="text-red-400/60 text-[10px]">&times;</span>
                </div>
                <div>
                  <span className="text-[11px] text-t3/60 uppercase tracking-wider block mb-1">{r.feature} — Other firms</span>
                  <span className="text-[15px] text-t2 leading-snug">{r.others}</span>
                </div>
              </div>

              {/* Kronaris side */}
              <div className="rounded-xl bg-gradient-to-r from-bg-3 to-bg-3/80 border border-gold/15 p-5 md:p-6 flex items-start gap-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold/30 rounded-r" />
                <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center">
                  <span className="text-gold text-[10px]">&#10003;</span>
                </div>
                <div>
                  <span className="text-[11px] text-gold/40 uppercase tracking-wider block mb-1">{r.feature} — Kronaris</span>
                  <span className="text-[15px] text-t1 leading-snug font-medium">{r.kronaris}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
