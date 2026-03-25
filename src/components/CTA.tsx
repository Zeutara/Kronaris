import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-75 bg-cyan/4 rounded-full blur-[120px]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="reveal text-center max-w-[600px] mx-auto">
          <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-t1 tracking-[-0.02em] mb-5">
            Stop losing business to a<br /><span className="gradient-text">bad website.</span>
          </h2>
          <p className="text-t2 text-[17px] mb-8 leading-[1.7]">
            Every day your website underperforms is another day of lost revenue. Let's fix that — permanently.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="text-[15px] font-semibold bg-cyan text-bg px-8 py-4 rounded-lg hover:bg-cyan-h transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
            >
              Request a Rebuild
            </Link>
            <Link
              to="/process"
              className="text-[15px] text-t3 px-8 py-4 rounded-lg border border-rule hover:border-cyan/30 hover:text-t1 transition-all"
            >
              See How It Works
            </Link>
          </div>
          <p className="text-[13px] text-t3 mt-5">We take on a limited number of clients each month.</p>
        </div>
      </div>
    </section>
  )
}
