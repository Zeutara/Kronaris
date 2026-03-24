import logoK from '../assets/kronaris-k.png'

export default function CTA() {
  return (
    <section className="py-36 md:py-52 relative overflow-hidden" id="contact">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[120px]" />

      {/* Subtle watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015]">
        <img src={logoK} alt="" className="logo-blend w-[300px] h-auto" aria-hidden="true" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-[720px] mx-auto text-center reveal">
          <div className="w-12 h-px bg-gold/30 mx-auto mb-16" />

          <h2 className="text-[clamp(32px,5.5vw,58px)] font-extralight text-text-primary tracking-[-0.03em] leading-[1.08] mb-8">
            The reconstruction<br />begins now.
          </h2>

          <p className="text-text-secondary text-[16px] md:text-[17px] leading-[1.75] mb-5 max-w-[500px] mx-auto">
            We work with a limited number of companies at any given time.
            If your infrastructure has fallen behind your ambition, start here.
          </p>

          <p className="text-text-muted/60 text-[13px] leading-relaxed mb-14 max-w-[420px] mx-auto italic">
            Kronaris derives from Kronos — the Greek Titan of time.
            Because time is the one resource no business can recover.
          </p>

          <a
            href="mailto:hello@kronaris.com"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] font-medium bg-gold text-bg px-12 py-4.5 hover:bg-[#d4ab6e] hover:shadow-[0_0_40px_rgba(201,160,99,0.2)] transition-all duration-300"
            aria-label="Request a Rebuild"
          >
            Request a Rebuild
            <svg className="ml-3 w-3.5 h-3.5" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>

          <div className="w-12 h-px bg-gold/30 mx-auto mt-16" />
        </div>
      </div>
    </section>
  )
}
