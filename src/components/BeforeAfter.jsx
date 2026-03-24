const signals = [
  { id: 'SIG-001', label: 'Site Performance', before: 'Legacy build, 4.2s load', after: 'Sub-1s, edge-cached', severity: 'critical' },
  { id: 'SIG-002', label: 'Conversion Rate', before: '1.2% avg, no tracking', after: '3.8% avg, full funnel', severity: 'critical' },
  { id: 'SIG-003', label: 'System Integration', before: '6+ disconnected tools', after: 'Unified stack, automated', severity: 'high' },
  { id: 'SIG-004', label: 'Revenue Capture', before: 'Estimated $34K/mo lost', after: 'Recovered, compounding', severity: 'critical' },
  { id: 'SIG-005', label: 'Brand Credibility', before: 'Outdated, inconsistent', after: 'Institutional-grade', severity: 'medium' },
]

export default function BeforeAfter() {
  return (
    <section className="py-16 md:py-20 bg-grid" id="diagnostics">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="reveal flex items-end justify-between mb-8">
          <div>
            <span className="label-gold block mb-2">Diagnostic Readout</span>
            <h2 className="text-[24px] md:text-[30px] font-light text-w tracking-[-0.02em]">The gap is costing you.</h2>
          </div>
          <span className="label hidden md:block">5 Signals Detected</span>
        </div>

        {/* Diagnostic table */}
        <div className="border border-rule overflow-hidden">
          {/* Header */}
          <div className="hidden md:grid grid-cols-[80px_1fr_1fr_1fr_90px] gap-4 py-2.5 px-4 bg-s2/50 border-b border-rule text-[10px] tracking-[0.12em] uppercase text-g4">
            <span>Signal</span>
            <span>System</span>
            <span>Current State</span>
            <span>Post-Rebuild</span>
            <span>Severity</span>
          </div>

          {/* Rows */}
          {signals.map((s, i) => (
            <div key={s.id} className="reveal group border-b border-rule last:border-b-0 py-3.5 md:py-4 px-4 md:grid md:grid-cols-[80px_1fr_1fr_1fr_90px] md:gap-4 md:items-center hover:bg-s1/50 transition-colors" style={{ transitionDelay: `${i * 0.04}s` }}>
              <span className="mono text-[11px] text-g4 hidden md:block">{s.id}</span>
              <span className="text-w text-[13px] font-normal mb-1 md:mb-0 block">
                <span className="mono text-g4 text-[10px] mr-2 md:hidden">{s.id}</span>
                {s.label}
              </span>
              <span className="text-g3 text-[12px] mb-1 md:mb-0 block">{s.before}</span>
              <span className="text-g1 text-[12px] mb-1 md:mb-0 block">{s.after}</span>
              <span className={`inline-block text-[9px] tracking-wider uppercase px-2 py-0.5 border ${
                s.severity === 'critical' ? 'text-red-400/70 border-red-400/20 bg-red-400/5' :
                s.severity === 'high' ? 'text-gold/70 border-gold/20 bg-gold/5' :
                'text-g3 border-rule bg-s2/30'
              }`}>{s.severity}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
