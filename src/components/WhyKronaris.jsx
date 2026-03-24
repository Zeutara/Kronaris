const metrics = [
  { label: 'Avg. Build Time', value: '4 weeks', sub: 'End to end' },
  { label: 'Client Retention', value: '94%', sub: 'Post-rebuild' },
  { label: 'Revenue Impact', value: '+$2.1M', sub: 'Cumulative' },
  { label: 'System Uptime', value: '99.98%', sub: 'Trailing 12mo' },
]

export default function WhyKronaris() {
  return (
    <section className="py-16 md:py-20 bg-s1 border-y border-rule" id="about">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="reveal mb-10">
          <span className="label-gold block mb-2">Why Kronaris</span>
          <h2 className="text-[24px] md:text-[30px] font-light text-w tracking-[-0.02em]">We don't consult. We take over and build.</h2>
        </div>

        <div className="reveal grid lg:grid-cols-3 gap-px bg-rule" style={{ transitionDelay: '0.06s' }}>
          {/* Belief panel */}
          <div className="lg:col-span-2 bg-s1 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
              {[
                ['Authority', 'Every system we ship meets enterprise-grade standards. We don\'t cut corners and we don\'t ship drafts.'],
                ['Speed', '48-hour audit. Full rebuild deployed in weeks. Delay is a tax on revenue — we don\'t pay it.'],
                ['Control', 'One team. Full ownership. No committees, no hand-offs, no waiting on approvals.'],
                ['Outcomes', 'We measure success by revenue impact — not pages shipped or features launched.'],
              ].map(([t, d]) => (
                <div key={t} className="group">
                  <h3 className="text-w text-[14px] font-normal mb-1.5 group-hover:text-gold transition-colors">{t}</h3>
                  <p className="text-g3 text-[13px] leading-[1.65]">{d}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-rule pt-5">
              <p className="text-g2 text-[14px] leading-[1.7] border-l border-gold/30 pl-4 italic max-w-[500px]">
                Small businesses are the backbone of our economy. They deserve the same level of digital infrastructure as billion-dollar companies.
              </p>
            </div>
          </div>

          {/* Metrics panel */}
          <div className="bg-s1 p-6 md:p-8 flex flex-col">
            <span className="label mb-4">Performance</span>
            <div className="flex-1 grid grid-cols-2 gap-px bg-rule">
              {metrics.map(m => (
                <div key={m.label} className="bg-s1 p-4 flex flex-col">
                  <span className="label mb-2">{m.label}</span>
                  <span className="text-w text-[20px] font-light mono">{m.value}</span>
                  <span className="text-[10px] text-g4 mono mt-0.5">{m.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
