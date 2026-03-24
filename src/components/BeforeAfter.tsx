const rows = [
  { feature: 'What you get', others: 'A template with your logo on it', kronaris: 'A custom system built around your business' },
  { feature: 'Who does the work', others: 'You manage freelancers', kronaris: 'We own it — start to finish' },
  { feature: 'Timeline', others: '3–6 months of back and forth', kronaris: 'Live in weeks, not months' },
  { feature: 'After launch', others: 'They disappear', kronaris: 'We optimize every month' },
  { feature: 'Measured by', others: 'How it looks', kronaris: 'How much revenue it drives' },
  { feature: 'Communication', others: 'Endless email chains', kronaris: 'One team, fast decisions' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-2/50 to-bg pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-12">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">The Difference</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">Not another agency.</h2>
        </div>

        {/* Column headers */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-0 mb-2">
          <div className="text-center pb-3">
            <span className="text-[12px] uppercase tracking-wider text-t3">Other firms</span>
          </div>
          <div className="w-12" />
          <div className="text-center pb-3">
            <span className="text-[12px] uppercase tracking-wider text-gold">Kronaris</span>
          </div>
        </div>

        {/* Comparison rows */}
        <div className="space-y-3">
          {rows.map((r, i) => (
            <div key={i} className="reveal grid grid-cols-[1fr_auto_1fr] gap-0 items-center" style={{ transitionDelay: `${i * 0.04}s` }}>
              {/* Others */}
              <div className="text-center rounded-l-xl bg-bg-2/60 border border-rule border-r-0 py-5 px-5">
                <span className="text-[14px] text-t3 leading-snug">{r.others}</span>
              </div>

              {/* Center label */}
              <div className="relative z-10 w-12 flex flex-col items-center justify-center bg-bg-3 border-y border-rule py-3">
                <span className="text-[9px] uppercase tracking-widest text-t3/50 leading-tight text-center">{r.feature.split(' ').map((w, j) => <span key={j} className="block">{w}</span>)}</span>
              </div>

              {/* Kronaris */}
              <div className="text-center rounded-r-xl bg-gradient-to-r from-bg-3 to-bg-3/70 border border-gold/15 border-l-0 py-5 px-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/[0.04] rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2" />
                <span className="text-[14px] text-t1 font-medium leading-snug relative">{r.kronaris}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
