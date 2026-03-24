import { useState } from 'react'

const REVENUE = ['Under $500K', '$500K – $2M', '$2M – $10M', '$10M+']

export default function CTA() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [f, setF] = useState({ name: '', company: '', website: '', revenue: '', issue: '' })
  const set = k => e => setF(p => ({ ...p, [k]: e.target.value }))
  const submit = e => { e.preventDefault(); console.log('Lead:', f); setDone(true) }
  const inputCls = 'w-full bg-transparent border border-rule text-w text-[13px] px-3.5 py-2 placeholder:text-g4 focus:border-gold/30 focus:outline-none transition-colors'

  return (
    <>
      <section className="py-16 md:py-20 bg-grid" id="contact">
        <div className="max-w-[1400px] mx-auto px-5">
          <div className="reveal border border-rule bg-s1 p-6 md:p-8 md:flex md:items-center md:justify-between">
            <div className="mb-5 md:mb-0">
              <span className="label-gold block mb-2">Initiate</span>
              <h2 className="text-[22px] md:text-[28px] font-light text-w tracking-[-0.02em] mb-2">Stop losing ground.</h2>
              <p className="text-g2 text-[13px] max-w-[360px]">Limited engagements. Serious operators only. Start with an infrastructure assessment.</p>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => setOpen(true)} className="text-[11px] font-medium uppercase tracking-[0.08em] bg-gold text-black px-6 py-2.5 hover:bg-gold/85 transition-colors cursor-pointer">
                Request Rebuild
              </button>
              <span className="text-[10px] text-g4 text-center mono">hello@kronaris.com</span>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => { setOpen(false); setDone(false) }}>
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
          <div className="relative border border-rule bg-s2 w-full max-w-[440px] p-6 md:p-8" onClick={e => e.stopPropagation()}>
            <button onClick={() => { setOpen(false); setDone(false) }} className="absolute top-3 right-3 text-g3 hover:text-w text-sm cursor-pointer">&times;</button>
            {done ? (
              <div className="text-center py-6">
                <span className="label-gold block mb-3">Received</span>
                <h3 className="text-w text-lg font-light mb-2">We'll be in touch within 24 hours.</h3>
                <p className="text-g3 text-[13px]">Our team will review your submission and assess fit.</p>
              </div>
            ) : (
              <>
                <span className="label-gold block mb-1">Intake Form</span>
                <h3 className="text-w text-lg font-light mb-1">Request a Rebuild</h3>
                <p className="text-g4 text-[12px] mb-5">We'll assess fit and respond within 24 hours.</p>
                <form onSubmit={submit} className="space-y-3">
                  <input required placeholder="Name" value={f.name} onChange={set('name')} className={inputCls} />
                  <input required placeholder="Company" value={f.company} onChange={set('company')} className={inputCls} />
                  <input placeholder="Website URL" value={f.website} onChange={set('website')} className={inputCls} />
                  <select required value={f.revenue} onChange={set('revenue')} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="" disabled className="bg-s2 text-g4">Revenue range</option>
                    {REVENUE.map(o => <option key={o} value={o} className="bg-s2">{o}</option>)}
                  </select>
                  <textarea required placeholder="What's broken?" rows={3} value={f.issue} onChange={set('issue')} className={`${inputCls} resize-none`} />
                  <button type="submit" className="w-full text-[11px] font-medium uppercase tracking-[0.08em] bg-gold text-black py-2.5 hover:bg-gold/85 transition-colors cursor-pointer">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
