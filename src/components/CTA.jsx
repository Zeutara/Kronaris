export default function CTA() {
  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="max-w-[550px] reveal">
          <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-[-0.03em] leading-[1.08] mb-5">
            Ready to rebuild?
          </h2>
          <p className="text-text-secondary text-lg leading-[1.65] mb-8">
            We work with a limited number of companies at a time.
            If your infrastructure has fallen behind your ambition, start here.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="mailto:hello@kronaris.com" className="text-xs uppercase tracking-[0.14em] font-semibold bg-gold text-black px-8 py-3.5 hover:bg-[#d4ab6e] transition-all duration-300">
              Request a Rebuild
            </a>
            <span className="text-text-muted text-base">hello@kronaris.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
