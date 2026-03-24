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

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {/* Others card — dim, receding */}
          <div className="reveal rounded-2xl border border-rule bg-bg-2/40 p-7 md:p-9 relative opacity-80">
            <div className="flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-t3/20" />
              <h3 className="text-[15px] font-medium text-t3 uppercase tracking-wider">Other Firms</h3>
            </div>
            <div className="space-y-6">
              {rows.map((r, i) => (
                <div key={i}>
                  <span className="text-[11px] text-t3/50 uppercase tracking-wider block mb-1">{r.feature}</span>
                  <div className="flex items-start gap-2.5">
                    <span className="text-t3/30 mt-0.5 shrink-0">&times;</span>
                    <span className="text-[15px] text-t3 leading-snug">{r.others}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kronaris card — elevated, premium */}
          <div className="reveal relative" style={{ transitionDelay: '0.08s' }}>
            {/* Glow */}
            <div className="absolute -inset-3 bg-gold/[0.04] rounded-3xl blur-[30px]" />

            <div className="relative rounded-2xl border border-gold/20 bg-gradient-to-br from-bg-3 to-bg-2 p-7 md:p-9 h-full">
              {/* Gold top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-gold/70" />
                <h3 className="text-[15px] font-medium text-gold uppercase tracking-wider">Kronaris</h3>
              </div>
              <div className="space-y-6">
                {rows.map((r, i) => (
                  <div key={i}>
                    <span className="text-[11px] text-t3/50 uppercase tracking-wider block mb-1">{r.feature}</span>
                    <div className="flex items-start gap-2.5">
                      <span className="text-gold/60 mt-0.5 shrink-0">&#10003;</span>
                      <span className="text-[15px] text-t1 leading-snug">{r.kronaris}</span>
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
