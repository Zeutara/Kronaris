export default function Hero() {
  return (
    <header className="pt-28 pb-20 md:pt-40 md:pb-32 relative overflow-hidden" id="hero">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Copy */}
          <div className="opacity-0 animate-[fadeIn_0.6s_0.05s_forwards]">
            <p className="text-[13px] uppercase tracking-[0.2em] text-gold mb-5">Kronaris</p>
            <h1 className="text-[clamp(36px,5.5vw,60px)] font-medium text-t1 leading-[1.1] tracking-[-0.02em] mb-6">
              Your website should help you grow, not hold you back.
            </h1>
            <p className="text-[18px] text-t2 leading-[1.65] max-w-[440px] mb-8">
              We rebuild outdated websites and messy systems into something that actually brings you customers.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="text-[14px] font-medium bg-gold text-black px-6 py-3.5 rounded-lg hover:bg-gold-h transition-colors">
                Request a Rebuild
              </a>
              <a href="#process" className="text-[14px] text-t3 px-6 py-3.5 rounded-lg border border-rule hover:border-rule-2 hover:text-t2 transition-all">
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — "Does this sound familiar?" panel */}
          <div className="opacity-0 animate-[fadeIn_0.7s_0.2s_forwards]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/[0.04] rounded-3xl blur-[40px]" />

              <div className="relative bg-gradient-to-br from-bg-3/90 to-bg-2/90 border border-rule-2 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-gold/60" />
                  <span className="text-[13px] text-t2">Does this sound like your business?</span>
                </div>

                {/* Pain points checklist */}
                <div className="space-y-4 mb-7">
                  {[
                    'Your website looks outdated and you know it',
                    'People visit but never reach out or buy',
                    'You\'re embarrassed to send people to your site',
                    'You\'ve outgrown your current setup',
                    'You know you\'re leaving money on the table',
                  ].map((item, i) => (
                    <label key={i} className="flex items-start gap-3 group cursor-default">
                      <span className="mt-0.5 w-4 h-4 rounded border border-rule-2 bg-bg/50 flex items-center justify-center shrink-0 group-hover:border-gold/30 transition-colors">
                        <span className="text-gold text-[10px]">&#10003;</span>
                      </span>
                      <span className="text-[14px] text-t2 leading-snug group-hover:text-t1 transition-colors">{item}</span>
                    </label>
                  ))}
                </div>

                {/* Bottom message */}
                <div className="border-t border-rule pt-5">
                  <p className="text-[14px] text-t2 mb-3">
                    If you checked even one — you're losing customers every day your site stays the way it is.
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[13px] text-gold hover:text-gold-h transition-colors font-medium">
                    Get a free assessment
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
