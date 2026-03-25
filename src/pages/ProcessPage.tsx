import { Link } from 'react-router-dom'

const phases = [
  {
    n: '01',
    title: 'Audit',
    duration: '48 hours',
    desc: 'We tear apart your current setup and find every leak in the system.',
    details: [
      { label: 'Website Performance', text: 'Page speed, mobile responsiveness, Core Web Vitals, and technical health.' },
      { label: 'Conversion Analysis', text: 'Where visitors drop off, which pages underperform, and why people leave without converting.' },
      { label: 'Competitor Benchmark', text: 'How your site stacks up against your top competitors in design, speed, and user experience.' },
      { label: 'SEO Health Check', text: 'Indexing issues, keyword gaps, meta data quality, and local SEO presence.' },
      { label: 'Systems Review', text: 'CRM, forms, automations, lead tracking — what exists, what\'s broken, what\'s missing.' },
    ],
  },
  {
    n: '02',
    title: 'Build',
    duration: '2–4 weeks',
    desc: 'We design and develop your entire new system from scratch.',
    details: [
      { label: 'Strategy + Architecture', text: 'We map your sitemap, user flows, conversion funnels, and content strategy before touching a single pixel.' },
      { label: 'UI/UX Design', text: 'Custom, mobile-first designs built for clarity, speed, and conversions — not templates.' },
      { label: 'Development', text: 'Clean, fast, modern code. Every page optimized for performance and search engines.' },
      { label: 'CRM + Integrations', text: 'We connect your forms, CRM, email sequences, and lead pipelines so nothing falls through the cracks.' },
      { label: 'Content + Copy', text: 'We write every headline, CTA, and page section to drive action — not just fill space.' },
    ],
  },
  {
    n: '03',
    title: 'Deploy + Scale',
    duration: 'Launch + Ongoing',
    desc: 'Your new system goes live — and keeps getting better every month.',
    details: [
      { label: 'Launch', text: 'Seamless migration to your new site with zero downtime. DNS, SSL, redirects — all handled.' },
      { label: 'QA + Testing', text: 'Cross-browser, cross-device testing. Load testing. Form testing. Everything checked twice.' },
      { label: 'Analytics Setup', text: 'Google Analytics, conversion tracking, heatmaps, and custom dashboards so you can see what\'s working.' },
      { label: 'Monthly Optimization', text: 'We monitor performance, test variations, and push updates every month to keep improving results.' },
      { label: 'Ongoing Support', text: 'Direct access to our team. No tickets, no waiting. If something needs attention, we handle it.' },
    ],
  },
]

export default function ProcessPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-cyan/3 rounded-full blur-[150px]" />

        <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
          <p className="text-[13px] uppercase tracking-[0.3em] text-cyan/70 mb-4 font-medium">Process</p>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-bold text-t1 leading-[1.1] tracking-[-0.03em] mb-5">
            Systematic. Engineered.<br /><span className="gradient-text">Predictable.</span>
          </h1>
          <p className="text-t2 text-[17px] leading-[1.7] max-w-[540px] mx-auto">
            No surprises. No scope creep. Three phases, clear deliverables, measurable results at every stage.
          </p>
        </div>
      </section>

      {/* Phases */}
      {phases.map((phase, i) => (
        <section key={i} className={`py-16 md:py-24 ${i % 2 === 1 ? 'bg-bg-2/40' : ''}`}>
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="reveal">
              {/* Phase header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-bg border-2 border-cyan/20 flex items-center justify-center">
                  <span className="text-cyan font-bold text-[16px]">{phase.n}</span>
                </div>
                <div>
                  <h2 className="text-[clamp(26px,3vw,36px)] font-bold text-t1 tracking-tight">{phase.title}</h2>
                  <span className="text-[12px] text-cyan/60 bg-cyan/6 border border-cyan/10 px-3 py-0.5 rounded-full">{phase.duration}</span>
                </div>
              </div>
              <p className="text-t2 text-[17px] leading-[1.7] mb-10 max-w-[600px]">{phase.desc}</p>

              {/* Detail cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {phase.details.map((d, j) => (
                  <div key={j} className="reveal card p-6" style={{ transitionDelay: `${j * 0.06}s` }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan mb-4" />
                    <h3 className="text-t1 text-[15px] font-semibold mb-2">{d.label}</h3>
                    <p className="text-t3 text-[14px] leading-[1.6]">{d.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-[600px] mx-auto px-6 reveal">
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold text-t1 tracking-[-0.02em] mb-5">
            Ready to start?
          </h2>
          <p className="text-t2 text-[16px] mb-8">
            The first step is a free audit. We'll show you exactly what's broken and how we'll fix it.
          </p>
          <Link to="/contact" className="text-[15px] font-semibold bg-cyan text-bg px-8 py-4 rounded-lg hover:bg-cyan-h transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]">
            Request Your Free Audit
          </Link>
        </div>
      </section>
    </main>
  )
}
