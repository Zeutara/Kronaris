import { useState } from 'react'

export default function ContactPage() {
  const [done, setDone] = useState(false)
  const [f, setF] = useState({ name: '', business: '', website: '', issue: '' })
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF(p => ({ ...p, [k]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead:', f)
    setDone(true)
  }

  const inputCls = 'w-full bg-bg/60 border border-rule text-t1 text-[14px] px-4 py-3.5 rounded-lg placeholder:text-t3 focus:border-cyan/30 focus:outline-none transition-colors'

  return (
    <main className="pt-20">
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-cyan/3 rounded-full blur-[150px]" />

        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-[13px] uppercase tracking-[0.3em] text-cyan/70 mb-4 font-medium">Contact</p>
              <h1 className="text-[clamp(32px,4vw,46px)] font-bold text-t1 leading-[1.1] tracking-[-0.03em] mb-5">
                Let's rebuild<br /><span className="gradient-text">your system.</span>
              </h1>
              <p className="text-t2 text-[17px] leading-[1.7] mb-10">
                Tell us about your business. We'll review your current setup and get back to you within 24 hours with a clear plan.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Free audit included', desc: 'Every engagement starts with a full audit of your current website and systems.' },
                  { title: 'No obligation', desc: 'We\'ll tell you exactly what we\'d do. No pressure, no sales tactics.' },
                  { title: 'Fast turnaround', desc: 'Most projects go from first call to live site in under 4 weeks.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan mt-2 shrink-0" />
                    <div>
                      <p className="text-t1 font-medium text-[15px]">{item.title}</p>
                      <p className="text-t3 text-[14px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-rule">
                <p className="text-t3 text-[13px] mb-1">Email us directly</p>
                <a href="mailto:hello@railworkscreative.com" className="text-cyan text-[15px] hover:text-cyan-h transition-colors">
                  hello@railworkscreative.com
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan/40 to-transparent" />

              {done ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-cyan/10 border border-cyan/20 flex items-center justify-center mx-auto mb-5">
                    <span className="text-cyan text-2xl">&#10003;</span>
                  </div>
                  <h3 className="text-t1 text-xl font-bold mb-2">Request received.</h3>
                  <p className="text-t2 text-[15px]">We'll review your information and get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-t1 text-xl font-bold mb-1">Request a Rebuild</h3>
                  <p className="text-t3 text-[14px] mb-6">Takes 60 seconds. We'll handle the rest.</p>
                  <form onSubmit={submit} className="space-y-4">
                    <div>
                      <label className="text-t3 text-[12px] uppercase tracking-wider mb-1.5 block">Your Name</label>
                      <input required value={f.name} onChange={set('name')} placeholder="John Smith" className={inputCls} />
                    </div>
                    <div>
                      <label className="text-t3 text-[12px] uppercase tracking-wider mb-1.5 block">Business Name</label>
                      <input required value={f.business} onChange={set('business')} placeholder="Acme Plumbing" className={inputCls} />
                    </div>
                    <div>
                      <label className="text-t3 text-[12px] uppercase tracking-wider mb-1.5 block">Current Website URL</label>
                      <input value={f.website} onChange={set('website')} placeholder="https://yoursite.com" className={inputCls} />
                    </div>
                    <div>
                      <label className="text-t3 text-[12px] uppercase tracking-wider mb-1.5 block">What's Not Working?</label>
                      <textarea
                        required
                        value={f.issue}
                        onChange={set('issue')}
                        placeholder="Tell us what's frustrating you about your current website or systems..."
                        rows={4}
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-[15px] font-semibold bg-cyan text-bg py-3.5 rounded-lg hover:bg-cyan-h transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] cursor-pointer"
                    >
                      Submit Request
                    </button>
                    <p className="text-t3 text-[12px] text-center">We take on a limited number of clients each month.</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
