const rows = [
  ['A website built for a company half your size', 'A system engineered for where you\'re going'],
  ['Disconnected tools your team fights daily', 'Unified infrastructure that runs itself'],
  ['Visitors who leave before they trust you', 'Credibility built in the first three seconds'],
  ['Revenue lost to friction you can\'t see', 'Every dollar path optimized and measured'],
]

export default function BeforeAfter() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12">
          <h2 className="text-[28px] md:text-[36px] font-light text-white tracking-[-0.02em] leading-tight">The gap is costing you.</h2>
          <p className="text-gray-2 text-[15px] mt-3 max-w-[420px]">Every month between where you are and where you should be is compounding lost revenue.</p>
        </div>
        <div className="border-t border-rule">
          {rows.map(([b, a], i) => (
            <div key={i} className="reveal grid md:grid-cols-2 border-b border-rule" style={{ transitionDelay: `${i * 0.04}s` }}>
              <div className="py-5 md:py-6 md:pr-10 flex gap-3 items-start">
                <span className="text-gray-3/30 text-sm mt-px shrink-0">&times;</span>
                <span className="text-gray-3 text-[15px]">{b}</span>
              </div>
              <div className="py-5 md:py-6 md:pl-10 md:border-l md:border-rule flex gap-3 items-start">
                <span className="text-gold/50 text-sm mt-px shrink-0">&rarr;</span>
                <span className="text-gray-1 text-[15px]">{a}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
