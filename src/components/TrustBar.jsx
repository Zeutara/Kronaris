const phrases = [
  'Execution over theory',
  'Infrastructure that scales',
  'Conversion-driven systems',
  'Partner, not vendor',
  'Revenue-engineered',
  'Precision at every layer',
  'We rebuild what\'s broken',
  'Institutional-grade',
]

export default function TrustBar() {
  const items = [...phrases, ...phrases]
  return (
    <div className="border-y border-border/50 py-3.5 overflow-hidden">
      <div className="flex w-max hover:[animation-play-state:paused]" style={{ animation: 'marquee 55s linear infinite' }}>
        {items.map((p, i) => (
          <span key={i} className="flex items-center gap-8 px-8">
            <span className="text-[9px] uppercase tracking-[0.3em] text-text-muted/50 whitespace-nowrap">{p}</span>
            <span className="text-gold/15 text-[6px]">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  )
}
