const rows = [
  { feature: 'What you get', others: 'A template with your logo on it', kronaris: 'A custom system built for your business' },
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

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-12">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">The Difference</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">Not another agency.</h2>
        </div>

        {/* Single premium card */}
        <div className="reveal relative">
          <div className="absolute -inset-3 bg-gold/[0.03] rounded-3xl blur-[30px]" />

          <div className="relative rounded-2xl border border-rule-2 overflow-hidden bg-gradient-to-b from-bg-3 to-bg-2">
            {/* Table header */}
            <div className="grid grid-cols-[1.3fr_1fr_1fr] border-b border-rule">
              <div className="py-4 px-6" />
              <div className="py-4 px-4 text-center border-l border-rule">
                <span className="text-[12px] uppercase tracking-wider text-t3/60">Others</span>
              </div>
              <div className="py-4 px-4 text-center border-l border-rule bg-gold/[0.04]">
                <span className="text-[12px] uppercase tracking-wider text-gold">Kronaris</span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((r, i) => (
              <div key={i} className={`grid grid-cols-[1.3fr_1fr_1fr] ${i < rows.length - 1 ? 'border-b border-rule/50' : ''} group hover:bg-white/[0.01] transition-colors`}>
                <div className="py-4 md:py-5 px-6 flex items-center">
                  <span className="text-[13px] text-t2 font-medium">{r.feature}</span>
                </div>
                <div className="py-4 md:py-5 px-4 flex items-center justify-center border-l border-rule/50 text-center">
                  <span className="text-[13px] text-t3">{r.others}</span>
                </div>
                <div className="py-4 md:py-5 px-4 flex items-center justify-center border-l border-rule/50 text-center bg-gold/[0.02]">
                  <span className="text-[13px] text-t1 font-medium">{r.kronaris}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
