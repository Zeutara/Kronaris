export default function CTA() {
  return (
    <section className="py-28 md:py-40" id="contact">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-[600px] reveal">
          <h2 className="text-[clamp(30px,5vw,54px)] font-extralight text-text-primary tracking-[-0.03em] leading-[1.08] mb-6">
            Ready to rebuild?
          </h2>
          <p className="text-text-secondary text-[15px] leading-[1.75] mb-10 max-w-[440px]">
            We work with a limited number of companies at a time.
            If your infrastructure has fallen behind your ambition, start here.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="mailto:hello@kronaris.com" className="text-[10px] uppercase tracking-[0.18em] font-medium bg-gold text-bg px-8 py-3.5 hover:bg-[#d4ab6e] transition-all duration-300">
              Request a Rebuild
            </a>
            <span className="text-text-muted text-[13px]">hello@kronaris.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
