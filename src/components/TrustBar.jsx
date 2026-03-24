const items = ['Execution, not advice', 'Deployed in weeks', 'Revenue-engineered systems', 'Institutional-grade infrastructure', 'Full operational control']
export default function TrustBar() {
  const all = [...items, ...items]
  return (
    <div className="border-y border-rule py-3 overflow-hidden">
      <div className="flex w-max" style={{ animation: 'marquee 40s linear infinite' }}>
        {all.map((t, i) => (
          <span key={i} className="text-[11px] tracking-[0.15em] uppercase text-gray-3 whitespace-nowrap px-8">{t}</span>
        ))}
      </div>
    </div>
  )
}
