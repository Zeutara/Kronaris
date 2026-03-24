const results = [
  'Higher conversion',
  'Stronger credibility',
  'More consistent revenue',
  'Less operational friction',
]

export default function Results() {
  return (
    <section className="py-20 md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal mb-12 md:mb-16">
          <h2 className="text-[clamp(28px,3.5vw,36px)] font-medium text-t1 tracking-[-0.02em]">What this leads to</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <div key={r} className="reveal border-t border-rule pt-6" style={{ transitionDelay: `${i * 0.04}s` }}>
              <span className="text-[18px] text-t1 font-medium">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
