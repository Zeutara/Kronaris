const rows = [
  { feature: 'What you get', others: 'A template with your logo', kronaris: 'A custom system for your business' },
  { feature: 'Who builds it', others: 'You manage freelancers', kronaris: 'We own it start to finish' },
  { feature: 'Timeline', others: '3–6 months', kronaris: 'Weeks, not months' },
  { feature: 'After launch', others: 'They disappear', kronaris: 'We optimize monthly' },
  { feature: 'Success metric', others: 'How it looks', kronaris: 'Revenue it generates' },
]

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-2/50 to-bg pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal mb-10">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">The Difference</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">Not another agency.</h2>
        </div>

        <div className="reveal grid lg:grid-cols-[1fr_1fr] gap-5" style={{ transitionDelay: '0.06s' }}>
          {/* Others */}
          <div className="rounded-2xl border border-rule bg-bg-2/50 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-t3/30" />
              <span className="text-[13px] text-t3 font-medium uppercase tracking-wider">Other firms</span>
            </div>
            <div className="space-y-5">
              {rows.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-t3/40 mt-0.5 shrink-0 text-[14px]">✕</span>
                  <div>
                    <span className="text-[12px] text-t3/40 block mb-0.5">{r.feature}</span>
                    <span className="text-[15px] text-t2">{r.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kronaris */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gold/[0.03] rounded-3xl blur-[25px]" />
            <div className="relative rounded-2xl border border-gold/15 bg-gradient-to-br from-bg-3 to-bg-2 p-6 md:p-8 h-full">
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold/60" />
                <span className="text-[13px] text-gold font-medium uppercase tracking-wider">Kronaris</span>
              </div>
              <div className="space-y-5">
                {rows.map((r, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold/60 mt-0.5 shrink-0 text-[14px]">✓</span>
                    <div>
                      <span className="text-[12px] text-gold/30 block mb-0.5">{r.feature}</span>
                      <span className="text-[15px] text-t1 font-medium">{r.kronaris}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
