const items = [
  'We rebuild, not refresh',
  'Engineered to convert',
  'Built to scale',
  'Systems, not templates',
]

export default function TrustBar() {
  return (
    <div className="py-6 bg-bg-2/60 border-y border-rule">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-3 text-[14px] text-t3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan/40" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
