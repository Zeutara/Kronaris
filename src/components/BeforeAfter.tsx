export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg-2/50 to-bg pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-14">
          <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-3">The Shift</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-t1 tracking-[-0.02em]">See the difference</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Before */}
          <div className="reveal card p-8 md:p-10">
            <h3 className="text-[18px] font-medium text-t3 mb-6">What you have now</h3>
            <ul className="space-y-4">
              {['A website that doesn\'t bring you customers', 'Tools that don\'t talk to each other', 'Leads slipping through the cracks', 'No clear system for growth'].map(t => (
                <li key={t} className="flex items-start gap-3 text-t3 text-[15px]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-t3/30 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="reveal card p-8 md:p-10 relative overflow-hidden" style={{ transitionDelay: '0.08s' }}>
            {/* Gold accent glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/[0.06] rounded-full blur-[60px]" />
            <div className="relative">
              <h3 className="text-[18px] font-medium text-t1 mb-6">What you get with Kronaris</h3>
              <ul className="space-y-4">
                {['A system built to bring you revenue', 'Clean, connected infrastructure', 'A clear path from visitor to customer', 'Scalable growth that compounds'].map(t => (
                  <li key={t} className="flex items-start gap-3 text-t1 text-[15px]">
                    <span className="mt-1 text-gold/70 shrink-0">&#10003;</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
