export default function CTA() {
  return (
    <section className="py-32 md:py-44 relative" id="contact">
      <div className="max-w-[1320px] mx-auto px-6 md:px-10">
        <div className="max-w-[700px] mx-auto text-center reveal">
          <div className="w-10 h-px bg-gold/40 mx-auto mb-14" />

          <h2 className="text-[clamp(28px,5vw,52px)] font-light text-text-primary tracking-[-0.02em] leading-[1.1] mb-8">
            The reconstruction<br />begins now.
          </h2>

          <p className="text-text-secondary text-[16px] leading-relaxed mb-4 max-w-[480px] mx-auto">
            We work with a limited number of companies at any given time.
            If your infrastructure has fallen behind your ambition, start here.
          </p>

          <p className="text-text-muted text-[13px] leading-relaxed mb-12 max-w-[420px] mx-auto italic">
            Kronaris derives from Kronos — the Greek Titan of time.
            Because time is the one resource no business can recover.
          </p>

          <a
            href="mailto:hello@kronaris.com"
            className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] bg-gold text-bg px-10 py-4 hover:bg-gold/90 transition-all duration-300"
            aria-label="Request a Rebuild"
          >
            Request a Rebuild
          </a>

          <div className="w-10 h-px bg-gold/40 mx-auto mt-14" />
        </div>
      </div>
    </section>
  )
}
