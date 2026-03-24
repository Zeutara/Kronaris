const phrases = [
  'We rebuild what should already be working',
  'Execution over theory',
  'Infrastructure that scales',
  'Conversion-driven systems',
  'Institutional-grade digital presence',
  'Partner, not vendor',
]

export default function TrustBar() {
  const items = [...phrases, ...phrases]

  return (
    <section className="border-y border-border bg-bg-card py-4 overflow-hidden" aria-label="Trust bar">
      <div
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: 'marquee 50s linear infinite' }}
      >
        {items.map((phrase, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-text-muted whitespace-nowrap">
              {phrase}
            </span>
            <span className="text-gold/30 text-xs">◆</span>
          </span>
        ))}
      </div>
    </section>
  )
}
