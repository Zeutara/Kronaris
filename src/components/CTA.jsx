import { useState } from 'react'

const REVENUE = ['Under $500K', '$500K – $2M', '$2M – $10M', '$10M+']

export default function CTA() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [f, setF] = useState({ name: '', company: '', website: '', revenue: '', issue: '' })
  const set = k => e => setF(p => ({ ...p, [k]: e.target.value }))
  const submit = e => { e.preventDefault(); console.log('Lead:', f); setDone(true) }
  const inputCls = 'w-full bg-transparent border border-rule text-t1 text-[14px] px-4 py-3 placeholder:text-t3 focus:border-gold/40 focus:outline-none transition-colors'

  return (
    <>
      <section className="py-20 md:py-[120px] bg-bg-2" id="contact">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="reveal max-w-[560px] mx-auto">
            <h2 className="text-[clamp(28px,3.5vw,36px)] font-medium text-t1 tracking-[-0.02em] mb-4">
              Stop losing revenue to a system that doesn't work.
            </h2>
            <p className="text-t3 text-[14px] mb-8">We take on a limited number of clients.</p>
            <button
              onClick={() => setOpen(true)}
              className="text-[14px] font-medium bg-gold text-black px-[22px] py-[14px] hover:bg-gold-h transition-colors cursor-pointer"
            >
              Request a Rebuild
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => { setOpen(false); setDone(false) }}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative bg-bg-3 border border-rule w-full max-w-[460px] p-8" onClick={e => e.stopPropagation()}>
            <button onClick={() => { setOpen(false); setDone(false) }} className="absolute top-4 right-4 text-t3 hover:text-t1 cursor-pointer">&times;</button>
            {done ? (
              <div className="text-center py-8">
                <p className="text-gold text-2xl mb-3">&#10003;</p>
                <h3 className="text-t1 text-xl font-medium mb-2">Received.</h3>
                <p className="text-t2 text-[14px]">We'll review your submission and respond within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-t1 text-xl font-medium mb-1">Request a Rebuild</h3>
                <p className="text-t3 text-[14px] mb-6">Tell us about your business. We'll respond within 24 hours.</p>
                <form onSubmit={submit} className="space-y-3">
                  <input required placeholder="Your name" value={f.name} onChange={set('name')} className={inputCls} />
                  <input required placeholder="Company" value={f.company} onChange={set('company')} className={inputCls} />
                  <input placeholder="Website URL" value={f.website} onChange={set('website')} className={inputCls} />
                  <select required value={f.revenue} onChange={set('revenue')} className={`${inputCls} appearance-none cursor-pointer`}>
                    <option value="" disabled className="bg-bg-3 text-t3">Revenue range</option>
                    {REVENUE.map(o => <option key={o} value={o} className="bg-bg-3">{o}</option>)}
                  </select>
                  <textarea required placeholder="What's the biggest problem with your current setup?" rows={3} value={f.issue} onChange={set('issue')} className={`${inputCls} resize-none`} />
                  <button type="submit" className="w-full text-[14px] font-medium bg-gold text-black py-3 hover:bg-gold-h transition-colors cursor-pointer">Submit</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
