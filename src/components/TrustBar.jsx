const items = ['We don\'t redesign. We rebuild.', 'Execution over theory.', 'Built to convert.', 'Designed to scale.']

export default function TrustBar() {
  return (
    <div className="border-y border-rule py-5 bg-bg-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {items.map((t, i) => (
            <span key={i} className="text-[14px] text-t3 flex items-center gap-3">
              {i > 0 && <span className="text-rule-2 hidden md:inline">·</span>}
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
