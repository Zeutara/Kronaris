export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-[120px] bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="reveal border border-rule p-8 md:p-10">
            <h2 className="text-[22px] font-medium text-t3 mb-6">What you have now</h2>
            <ul className="space-y-4">
              {[
                'A site that doesn\'t convert',
                'Disconnected tools',
                'Lost leads',
                'No clear system',
              ].map(t => (
                <li key={t} className="flex items-start gap-3 text-t3 text-[16px]">
                  <span className="text-t3/40 mt-1 shrink-0">&times;</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="reveal border border-gold/20 p-8 md:p-10" style={{ transitionDelay: '0.06s' }}>
            <h2 className="text-[22px] font-medium text-t1 mb-6">What you get</h2>
            <ul className="space-y-4">
              {[
                'A system built for revenue',
                'Clean, automated infrastructure',
                'Clear customer flow',
                'Scalable growth',
              ].map(t => (
                <li key={t} className="flex items-start gap-3 text-t1 text-[16px]">
                  <span className="text-gold/60 mt-0.5 shrink-0">&#10003;</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
