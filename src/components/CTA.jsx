import { useState } from 'react'

const REVENUE_OPTIONS = ['Under $500K', '$500K – $2M', '$2M – $10M', '$10M+']

export default function CTA() {
  const [formOpen, setFormOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', website: '', revenue: '', issue: '' })

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    // In production: send to API/email service
    console.log('Lead submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <section className="py-20 md:py-28" id="contact">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="reveal border-t border-rule pt-16 md:flex md:items-end md:justify-between">
            <div className="mb-8 md:mb-0">
              <h2 className="text-[28px] md:text-[36px] font-light text-white tracking-[-0.02em] leading-tight mb-3">
                Stop losing ground.
              </h2>
              <p className="text-gray-2 text-[15px] max-w-[380px]">
                We take on a limited number of engagements. If you're ready, start here.
              </p>
            </div>
            <button
              onClick={() => setFormOpen(true)}
              className="text-[13px] font-medium bg-gold text-black px-6 py-2.5 hover:bg-gold/85 transition-colors cursor-pointer"
            >
              Request a Rebuild
            </button>
          </div>
        </div>
      </section>

      {/* Intake Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => { setFormOpen(false); setSubmitted(false) }}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-surface-2 border border-rule w-full max-w-[480px] p-8 md:p-10" onClick={e => e.stopPropagation()}>
            <button onClick={() => { setFormOpen(false); setSubmitted(false) }} className="absolute top-4 right-4 text-gray-3 hover:text-white text-lg cursor-pointer">&times;</button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-gold text-2xl mb-3">&#10003;</div>
                <h3 className="text-white text-xl font-light mb-2">Received.</h3>
                <p className="text-gray-2 text-[14px]">We'll review your submission and respond within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-white text-xl font-light mb-1">Request a Rebuild</h3>
                <p className="text-gray-3 text-[13px] mb-6">Tell us about your business. We'll assess fit and respond within 24 hours.</p>
                <form onSubmit={submit} className="space-y-4">
                  <input required placeholder="Your name" value={form.name} onChange={set('name')}
                    className="w-full bg-transparent border border-rule text-white text-[14px] px-4 py-2.5 placeholder:text-gray-3 focus:border-gold/40 focus:outline-none transition-colors" />
                  <input required placeholder="Company" value={form.company} onChange={set('company')}
                    className="w-full bg-transparent border border-rule text-white text-[14px] px-4 py-2.5 placeholder:text-gray-3 focus:border-gold/40 focus:outline-none transition-colors" />
                  <input placeholder="Website URL" value={form.website} onChange={set('website')}
                    className="w-full bg-transparent border border-rule text-white text-[14px] px-4 py-2.5 placeholder:text-gray-3 focus:border-gold/40 focus:outline-none transition-colors" />
                  <select required value={form.revenue} onChange={set('revenue')}
                    className="w-full bg-transparent border border-rule text-white text-[14px] px-4 py-2.5 focus:border-gold/40 focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option value="" disabled className="bg-surface-2 text-gray-3">Revenue range</option>
                    {REVENUE_OPTIONS.map(o => <option key={o} value={o} className="bg-surface-2">{o}</option>)}
                  </select>
                  <textarea required placeholder="What's the biggest problem with your current infrastructure?" rows={3} value={form.issue} onChange={set('issue')}
                    className="w-full bg-transparent border border-rule text-white text-[14px] px-4 py-2.5 placeholder:text-gray-3 focus:border-gold/40 focus:outline-none transition-colors resize-none" />
                  <button type="submit" className="w-full text-[13px] font-medium bg-gold text-black py-2.5 hover:bg-gold/85 transition-colors cursor-pointer">
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
