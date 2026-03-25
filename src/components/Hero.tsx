import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header className="pt-20 relative overflow-hidden" id="hero">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Cyan ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan/[0.04] rounded-full blur-[150px]" />

      {/* Rail track accent lines */}
      <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-cyan/10 to-transparent" />
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-cyan/10 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 py-20 md:py-32">
        <div className="max-w-[780px] mx-auto text-center opacity-0 animate-[fadeIn_0.6s_0.05s_forwards]">
          <p className="text-[13px] uppercase tracking-[0.3em] text-cyan/70 mb-5 font-medium">
            Website rebuilds for businesses that are done settling
          </p>
          <h1 className="text-[clamp(34px,5vw,60px)] font-bold text-t1 leading-[1.1] tracking-[-0.03em] mb-6">
            Your website is losing you<br />
            <span className="gradient-text">customers every day.</span>
          </h1>
          <p className="text-[18px] text-t2 leading-[1.7] max-w-[540px] mx-auto mb-10">
            We rebuild outdated websites into modern, high-converting systems that actually generate revenue. Not just a redesign. A complete rebuild.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <Link to="/contact" className="text-[15px] font-semibold bg-cyan text-bg px-8 py-4 rounded-lg hover:bg-cyan-h transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]">
              Get Your Website Rebuilt
            </Link>
            <Link to="/process" className="text-[15px] text-t3 px-8 py-4 rounded-lg border border-rule hover:border-cyan/30 hover:text-t1 transition-all">
              See How It Works
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="opacity-0 animate-[fadeIn_0.6s_0.3s_forwards]">
          <div className="relative">
            <div className="absolute -inset-3 bg-cyan/[0.03] rounded-3xl blur-[40px]" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-rule-2 bg-rule/50">
              {[
                { value: '3.2x', label: 'More leads generated' },
                { value: '< 2s', label: 'Page load speed' },
                { value: '340%', label: 'Avg. revenue lift' },
                { value: '4 wks', label: 'From start to launch' },
              ].map((s, i) => (
                <div key={i} className="bg-gradient-to-b from-bg-3 to-bg-2 p-5 md:p-7 text-center">
                  <div className="text-t1 text-[28px] md:text-[34px] font-bold tracking-tight mb-1 text-glow">{s.value}</div>
                  <div className="text-[12px] text-t3 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
