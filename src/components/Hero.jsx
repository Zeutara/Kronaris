export default function Hero() {
  return (
    <header className="pt-28 pb-20 md:pt-36 md:pb-[120px]" id="hero">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="opacity-0 animate-[fadeIn_0.5s_0.05s_forwards]">
            <p className="text-[13px] uppercase tracking-[0.15em] text-t3 mb-5">Kronaris</p>
            <h1 className="text-[clamp(40px,5.5vw,56px)] font-medium text-t1 leading-[1.1] tracking-[-0.02em] mb-6">
              Your website shouldn't be holding your business back.
            </h1>
            <p className="text-[18px] text-t2 leading-[1.6] max-w-[460px] mb-8">
              We take control of your digital infrastructure and rebuild it into a system that actually drives revenue.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a href="#contact" className="text-[14px] font-medium bg-gold text-black px-[22px] py-[14px] hover:bg-gold-h transition-colors">
                Request a Rebuild
              </a>
              <a href="#process" className="text-[14px] text-t3 px-[22px] py-[14px] border border-rule hover:border-rule-2 hover:text-t2 transition-all">
                See How It Works
              </a>
            </div>
            <p className="text-[13px] text-t3">Built for businesses that have outgrown their current systems.</p>
          </div>

          {/* Right — Abstract visual */}
          <div className="opacity-0 animate-[fadeIn_0.6s_0.2s_forwards] hidden lg:flex justify-center">
            <div className="relative w-[400px] h-[400px]">
              {/* Soft gradient shapes */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/[0.06] via-transparent to-t1/[0.02] blur-[60px]" />
              <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 rounded-full bg-gradient-to-tl from-gold/[0.04] to-transparent blur-[80px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-rule" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-rule/50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
