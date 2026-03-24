export default function Hero() {
  return (
    <header className="pt-32 pb-20 md:pt-40 md:pb-28" id="hero">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-[13px] tracking-[0.2em] uppercase text-gray-3 mb-6 opacity-0 animate-[fadeIn_0.6s_0.05s_forwards]">
          Kronaris
        </p>
        <h1 className="text-[clamp(32px,5.5vw,64px)] font-light text-white leading-[1.1] tracking-[-0.03em] max-w-[700px] opacity-0 animate-[fadeIn_0.6s_0.12s_forwards]">
          Your infrastructure should already be better than this.
        </h1>
        <p className="text-gray-2 text-[17px] leading-[1.7] max-w-[480px] mt-6 opacity-0 animate-[fadeIn_0.6s_0.22s_forwards]">
          We step in, take control, and rebuild your digital systems into what they should have been from the start.
        </p>
        <div className="flex items-center gap-4 mt-8 opacity-0 animate-[fadeIn_0.6s_0.32s_forwards]">
          <a href="#contact" className="text-[13px] font-medium bg-gold text-black px-6 py-2.5 hover:bg-gold/85 transition-colors">
            Request a Rebuild
          </a>
          <a href="#process" className="text-[13px] text-gray-2 hover:text-white transition-colors">
            How it works &darr;
          </a>
        </div>
      </div>
    </header>
  )
}
