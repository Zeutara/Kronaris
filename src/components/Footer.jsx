import logo from '../assets/kronaris-full.png'

export default function Footer() {
  return (
    <footer className="border-t border-rule py-8">
      <div className="max-w-[1200px] mx-auto px-6 md:flex md:items-center md:justify-between">
        <img src={logo} alt="Kronaris" className="h-8 mb-4 md:mb-0" />
        <div className="flex items-center gap-6 text-[12px] text-gray-3">
          {['Services', 'Process', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-gray-2 transition-colors">{l}</a>
          ))}
        </div>
        <span className="text-[11px] text-gray-3/40 mt-4 md:mt-0 block">&copy; 2025 Kronaris</span>
      </div>
    </footer>
  )
}
