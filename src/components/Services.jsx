const services = [
  {
    title: 'Website Rebuilds',
    desc: 'Ground-up reconstruction into conversion-driven systems.',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1"><rect x="4" y="6" width="24" height="18" rx="2"/><path d="M4 12h24"/></svg>,
  },
  {
    title: 'Conversion Optimization',
    desc: 'Data-driven restructuring that turns traffic into revenue.',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 26l6-8 5 4 9-14"/><path d="M22 8h4v4"/></svg>,
  },
  {
    title: 'System Infrastructure',
    desc: 'Backend architecture rebuilt for scale and performance.',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1"><path d="M16 4L4 10l12 6 12-6L16 4z"/><path d="M4 16l12 6 12-6"/><path d="M4 22l12 6 12-6"/></svg>,
  },
  {
    title: 'Performance Management',
    desc: 'Continuous optimization that compounds with your growth.',
    icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="16" cy="16" r="12"/><path d="M16 10v6l4 3"/></svg>,
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24" id="services">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="reveal mb-12">
          <h2 className="text-3xl md:text-5xl font-extralight text-white tracking-[-0.02em]">What we do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div key={s.title} className="reveal group bg-bg-card border border-border hover:border-gold/20 p-8 md:p-9 transition-all duration-400 hover:-translate-y-1" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="text-gold/40 group-hover:text-gold/80 transition-colors duration-400 mb-6">
                {s.icon}
              </div>
              <h3 className="text-lg md:text-xl font-normal text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-text-secondary text-[15px] leading-[1.65]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
