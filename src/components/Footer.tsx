import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-rule py-12 bg-bg-2/30">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-8 mb-4 md:mb-0">
            <Link to="/" className="flex items-center gap-2">
              <img src="/rwc-logo.png" alt="Railworks Creative" className="h-8 w-auto" />
              <span className="text-t1 font-semibold text-[15px]">Railworks <span className="text-cyan">Creative</span></span>
            </Link>
            <div className="flex gap-5">
              {[
                { label: 'Services', path: '/services' },
                { label: 'Process', path: '/process' },
                { label: 'Contact', path: '/contact' },
              ].map(l => (
                <Link key={l.path} to={l.path} className="text-[13px] text-t3 hover:text-t2 transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <span className="text-[13px] text-t3">&copy; {new Date().getFullYear()} Railworks Creative</span>
        </div>
        <div className="mt-6 pt-6 border-t border-rule/50">
          <a href="mailto:hello@railworkscreative.com" className="text-[13px] text-t3 hover:text-cyan transition-colors">hello@railworkscreative.com</a>
        </div>
      </div>
    </footer>
  )
}
