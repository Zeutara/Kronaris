const phrases = [
  'We rebuild what should already be working',
  'Execution over theory',
  'Infrastructure that scales',
  'Conversion-driven systems',
  'Institutional-grade digital presence',
  'Partner, not vendor',
  'Revenue-engineered architecture',
  'Precision at every layer',
]

export default function TrustBar() {
  const items = [...phrases, ...phrases]

  return (
    <section className="border-y border-border bg-bg-card/50 py-5 overflow-hidden" aria-label="Trust bar">
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: 'marquee 60s linear infinite' }}
      >
        {items.map((phrase, i) => (
          <span key={i} className="flex items-center gap-8 px-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted/80 whitespace-nowrap">
              {phrase}
            </span>
            <span className="text-gold/25 text-[8px]">&#9670;</span>
          </span>
        ))}
      </div>
    </section>
  )
}
