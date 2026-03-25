const rows = [
  { feature: 'What you get', others: 'A template with your logo on it', rwc: 'A custom system built for your business' },
  { feature: 'Who does the work', others: 'You manage freelancers', rwc: 'We own it — start to finish' },
  { feature: 'Timeline', others: '3–6 months of back and forth', rwc: 'Live in weeks, not months' },
  { feature: 'After launch', others: 'They disappear', rwc: 'We optimize every month' },
  { feature: 'Measured by', others: 'How it looks', rwc: 'How much revenue it drives' },
  { feature: 'Communication', others: 'Endless email chains', rwc: 'One team, fast decisions' },
]

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-linear-to-b from-bg via-bg-2/50 to-bg pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-12">
          <p className="text-[13px] uppercase tracking-[0.25em] text-cyan/70 mb-3 font-medium">The Difference</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-t1 tracking-[-0.02em]">Not another agency.</h2>
          <p className="text-t2 text-[16px] mt-3 max-w-[440px] mx-auto">Most firms give you a website. We give you a system that grows your business.</p>
        </div>

        <div className="reveal relative">
          <div className="absolute -inset-3 bg-cyan/3 rounded-3xl blur-2xl" />

          <div className="relative rounded-2xl border border-rule-2 overflow-hidden bg-linear-to-b from-bg-3 to-bg-2">
            {/* Header */}
            <div className="grid grid-cols-[1.4fr_1fr_1fr] border-b border-rule">
              <div className="py-4 px-6" />
              <div className="py-4 px-5 text-center border-l border-rule">
                <span className="text-[13px] uppercase tracking-wider text-t3/60">Others</span>
              </div>
              <div className="py-4 px-5 text-center border-l border-rule bg-cyan/5">
                <span className="text-[13px] uppercase tracking-wider text-cyan font-medium">Railworks</span>
              </div>
            </div>

            {rows.map((r, i) => (
              <div key={i} className={`grid grid-cols-[1.4fr_1fr_1fr] ${i < rows.length - 1 ? 'border-b border-rule/40' : ''} group hover:bg-white/[0.015] transition-colors`}>
                <div className="py-5 px-6 flex items-center">
                  <span className="text-[14px] text-t1 font-medium">{r.feature}</span>
                </div>
                <div className="py-5 px-5 flex items-center justify-center border-l border-rule/30 text-center">
                  <span className="text-[14px] text-t3">{r.others}</span>
                </div>
                <div className="py-5 px-5 flex items-center justify-center border-l border-rule/30 text-center bg-cyan/[0.025]">
                  <span className="text-[14px] text-t1 font-medium">{r.rwc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
