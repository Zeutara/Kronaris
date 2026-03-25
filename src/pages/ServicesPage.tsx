import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Website Rebuilds',
    tagline: 'Your site, rebuilt from the ground up.',
    what: 'We don\'t patch old sites. We tear them down and build new ones — designed for speed, clarity, and conversions. Every page is engineered with one goal: turn visitors into customers.',
    why: 'Your website is your most visible salesperson. If it\'s outdated, slow, or confusing, you\'re losing money every single day. A modern rebuild changes that overnight.',
    get: [
      'Custom-designed, mobile-first website',
      'Conversion-optimized page layouts',
      'Fast load times (under 2 seconds)',
      'SEO-friendly structure from day one',
      'Content strategy and copywriting',
    ],
  },
  {
    title: 'Conversion Optimization',
    tagline: 'More visitors become customers.',
    what: 'We analyze your user journey and restructure every touchpoint — from landing pages to CTAs to forms — so more people take action. Data-driven, not guesswork.',
    why: 'Traffic without conversions is wasted money. Most business websites convert at under 2%. We push that to 5-8% or higher with strategic changes.',
    get: [
      'Full conversion audit of existing site',
      'A/B tested page variations',
      'Optimized CTAs, forms, and funnels',
      'Heatmap and analytics setup',
      'Monthly optimization reports',
    ],
  },
  {
    title: 'CRM + Lead Systems',
    tagline: 'No lead left behind.',
    what: 'We connect your website to a CRM and build automated lead pipelines — so every inquiry is captured, tracked, and followed up on without you lifting a finger.',
    why: 'Most businesses lose 40-60% of leads because they have no system. We eliminate that gap. Every lead gets captured, categorized, and routed automatically.',
    get: [
      'CRM setup and integration',
      'Automated lead capture forms',
      'Email follow-up sequences',
      'Pipeline and deal tracking',
      'Notification and alert systems',
    ],
  },
  {
    title: 'SEO Foundations',
    tagline: 'Get found. Stay found.',
    what: 'We build your website on a rock-solid technical SEO foundation — site structure, speed, metadata, schema markup, and content hierarchy — so search engines can find and rank you.',
    why: 'If you\'re not on page one, you don\'t exist. SEO isn\'t optional anymore. We bake it into the architecture so you don\'t have to bolt it on later.',
    get: [
      'Technical SEO audit and fixes',
      'Keyword research and mapping',
      'Meta tags, schema, and sitemaps',
      'Page speed optimization',
      'Local SEO setup (Google Business)',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-cyan/3 rounded-full blur-[150px]" />

        <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
          <p className="text-[13px] uppercase tracking-[0.3em] text-cyan/70 mb-4 font-medium">Services</p>
          <h1 className="text-[clamp(32px,4.5vw,52px)] font-bold text-t1 leading-[1.1] tracking-[-0.03em] mb-5">
            Everything you need to turn your<br />website into a <span className="gradient-text">growth engine.</span>
          </h1>
          <p className="text-t2 text-[17px] leading-[1.7] max-w-[540px] mx-auto">
            We don't just build websites. We build the systems behind them — so your business grows on autopilot.
          </p>
        </div>
      </section>

      {/* Service blocks */}
      {services.map((s, i) => (
        <section key={i} className={`py-16 md:py-24 ${i % 2 === 1 ? 'bg-bg-2/40' : ''}`}>
          <div className="max-w-[1000px] mx-auto px-6">
            <div className="reveal grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-cyan" />
                  <span className="text-[12px] uppercase tracking-[0.2em] text-cyan/60 font-medium">0{i + 1}</span>
                </div>
                <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold text-t1 tracking-[-0.02em] mb-3">{s.title}</h2>
                <p className="text-cyan/80 text-[16px] font-medium mb-4">{s.tagline}</p>
                <p className="text-t2 text-[15px] leading-[1.7]">{s.what}</p>
              </div>

              {/* Right */}
              <div>
                <div className="card p-7 mb-5">
                  <h3 className="text-t1 text-[15px] font-semibold mb-2">Why it matters</h3>
                  <p className="text-t2 text-[14px] leading-[1.65]">{s.why}</p>
                </div>
                <div className="card p-7">
                  <h3 className="text-t1 text-[15px] font-semibold mb-4">What you get</h3>
                  <ul className="space-y-3">
                    {s.get.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-[14px] text-t2">
                        <span className="text-cyan mt-0.5">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-[600px] mx-auto px-6 reveal">
          <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold text-t1 tracking-[-0.02em] mb-5">
            Ready to rebuild?
          </h2>
          <p className="text-t2 text-[16px] mb-8">
            Tell us about your business and we'll show you exactly what we'd do differently.
          </p>
          <Link to="/contact" className="text-[15px] font-semibold bg-cyan text-bg px-8 py-4 rounded-lg hover:bg-cyan-h transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]">
            Request a Rebuild
          </Link>
        </div>
      </section>
    </main>
  )
}
