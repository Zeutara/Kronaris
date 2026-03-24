export default function Hero() {
  return (
    <header className="pt-12 border-b border-rule bg-grid relative overflow-hidden" id="hero">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* Status bar */}
        <div className="flex items-center gap-4 py-3 border-b border-rule text-[10px] tracking-[0.15em] uppercase text-g4 opacity-0 animate-[fadeIn_0.5s_0.05s_forwards]">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold/50" />System Active</span>
          <span className="text-rule">|</span>
          <span className="mono text-g4">KRN-2025</span>
          <span className="text-rule">|</span>
          <span>Digital Infrastructure Division</span>
        </div>

        {/* Main hero grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 py-14 lg:py-20">
          {/* Left — copy */}
          <div className="opacity-0 animate-[fadeIn_0.5s_0.1s_forwards]">
            <span className="label-gold mb-4 block">Kronaris</span>
            <h1 className="text-[clamp(26px,3.8vw,44px)] font-light text-w leading-[1.15] tracking-[-0.025em] mb-5">
              Your infrastructure is a liability.<br />We make it an asset.
            </h1>
            <p className="text-g2 text-[14px] leading-[1.7] max-w-[400px] mb-7">
              We take operational control of your digital systems and reconstruct them into high-performance infrastructure that compounds revenue.
            </p>
            <div className="flex items-center gap-3">
              <a href="#contact" className="text-[11px] font-medium uppercase tracking-[0.08em] bg-gold text-black px-5 py-2 hover:bg-gold/85 transition-colors">
                Request Rebuild
              </a>
              <a href="#process" className="text-[11px] uppercase tracking-[0.08em] text-g3 border border-rule px-5 py-2 hover:border-rule-light hover:text-g2 transition-all">
                View Process
              </a>
            </div>

            {/* Metrics row */}
            <div className="flex gap-8 mt-10 pt-6 border-t border-rule">
              {[
                { v: '100+', l: 'Systems rebuilt', s: '+23% QoQ' },
                { v: '<48h', l: 'Audit delivery', s: 'Avg. turnaround' },
                { v: '3.2×', l: 'Conv. increase', s: 'Median lift' },
              ].map(m => (
                <div key={m.l}>
                  <div className="text-w text-[22px] font-light tracking-tight">{m.v}</div>
                  <div className="label mt-0.5">{m.l}</div>
                  <div className="text-[10px] text-g4 mono mt-0.5">{m.s}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — system visual */}
          <div className="opacity-0 animate-[fadeIn_0.6s_0.25s_forwards] relative">
            <div className="border border-rule bg-s1 p-5 h-full min-h-[320px] relative overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-grid opacity-60" />

              {/* Header */}
              <div className="relative flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                  <span className="label">Infrastructure Analysis</span>
                </div>
                <span className="mono text-[10px] text-g4">LIVE</span>
              </div>

              {/* Abstract data visualization */}
              <div className="relative space-y-4">
                {/* Performance bars */}
                {[
                  { label: 'CONV. RATE', pct: 78, target: 94 },
                  { label: 'LOAD PERF.', pct: 45, target: 97 },
                  { label: 'SYS. INTEG.', pct: 32, target: 89 },
                  { label: 'REV. CAPT.', pct: 61, target: 92 },
                ].map((d, i) => (
                  <div key={d.label} className="relative">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="label">{d.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="mono text-[10px] text-g3">{d.pct}%</span>
                        <span className="mono text-[10px] text-gold/50">&rarr; {d.target}%</span>
                      </div>
                    </div>
                    <div className="h-px bg-rule relative">
                      <div className="absolute top-0 left-0 h-full bg-g4/40" style={{ width: `${d.pct}%` }} />
                      <div className="absolute top-0 left-0 h-full bg-gold/30" style={{ width: `${d.target}%`, opacity: 0.3 }} />
                    </div>
                  </div>
                ))}

                {/* Status indicators */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-rule">
                  {[
                    { l: 'Uptime', v: '99.98%', s: 'normal' },
                    { l: 'Latency', v: '42ms', s: 'normal' },
                    { l: 'Revenue/mo', v: '+$34K', s: 'elevated' },
                  ].map(s => (
                    <div key={s.l} className="border border-rule p-3 bg-s2/50">
                      <div className="label mb-1">{s.l}</div>
                      <div className="text-w text-[15px] font-light mono">{s.v}</div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className={`w-1 h-1 rounded-full ${s.s === 'elevated' ? 'bg-gold' : 'bg-g4'}`} />
                        <span className="text-[9px] text-g4 uppercase tracking-wider">{s.s}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scan line effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="w-full h-8 bg-gradient-to-b from-gold/[0.02] to-transparent" style={{ animation: 'scan 8s linear infinite' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
