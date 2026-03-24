const items = ['Full operational control', 'Revenue-engineered systems', 'Institutional-grade build', '48h audit turnaround', 'Deployed in weeks']
export default function TrustBar() {
  const all = [...items, ...items]
  return (
    <div className="border-b border-rule py-2.5 overflow-hidden bg-s1">
      <div className="flex w-max" style={{ animation: 'marquee 35s linear infinite' }}>
        {all.map((t, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="w-1 h-1 rounded-full bg-g4" />
            <span className="text-[10px] tracking-[0.12em] uppercase text-g3 whitespace-nowrap">{t}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
