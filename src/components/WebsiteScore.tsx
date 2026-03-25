import { useState } from 'react'

export default function WebsiteScore() {
  const [url, setUrl] = useState('')
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<null | { score: number; issues: string[] }>(null)

  const scan = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return
    setScanning(true)
    setResult(null)

    // Mock scan — simulates analysis
    setTimeout(() => {
      setScanning(false)
      setResult({
        score: Math.floor(Math.random() * 35) + 20,
        issues: [
          'Slow page load speed (> 4s)',
          'Not mobile-optimized',
          'No clear call-to-action above the fold',
          'Missing meta descriptions on key pages',
          'No lead capture or contact forms',
        ],
      })
    }, 2200)
  }

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-[700px] mx-auto px-6">
        <div className="reveal card p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan/40 to-transparent" />

          <p className="text-[13px] uppercase tracking-[0.25em] text-cyan/70 mb-3 font-medium">Free Tool</p>
          <h3 className="text-[clamp(22px,3vw,30px)] font-bold text-t1 mb-3">How does your website score?</h3>
          <p className="text-t3 text-[14px] mb-6">Enter your URL and we'll show you what's holding your site back.</p>

          <form onSubmit={scan} className="flex gap-3 max-w-md mx-auto">
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="flex-1 bg-bg/60 border border-rule text-t1 text-[14px] px-4 py-3 rounded-lg placeholder:text-t3 focus:border-cyan/30 focus:outline-none transition-colors"
              required
            />
            <button
              type="submit"
              disabled={scanning}
              className="bg-cyan text-bg font-semibold px-6 py-3 rounded-lg hover:bg-cyan-h transition-all text-[14px] disabled:opacity-50 whitespace-nowrap"
            >
              {scanning ? 'Scanning...' : 'Scan Now'}
            </button>
          </form>

          {scanning && (
            <div className="mt-6">
              <div className="w-48 h-1 bg-bg-3 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-cyan rounded-full animate-[pulse-glow_1.5s_ease-in-out_infinite] w-full" />
              </div>
              <p className="text-t3 text-[13px] mt-3">Analyzing your website...</p>
            </div>
          )}

          {result && (
            <div className="mt-8 text-left">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-rule">
                <span className="text-t2 text-[14px]">Website Score</span>
                <span className={`text-[28px] font-bold ${result.score < 50 ? 'text-red-400' : 'text-cyan'}`}>
                  {result.score}/100
                </span>
              </div>
              <p className="text-t1 font-medium text-[14px] mb-3">Issues found:</p>
              <ul className="space-y-2">
                {result.issues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-2 text-[14px] text-t2">
                    <span className="text-red-400 mt-0.5">&#10005;</span>
                    {issue}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block mt-6 bg-cyan text-bg font-semibold px-6 py-3 rounded-lg hover:bg-cyan-h transition-all text-[14px]"
              >
                Get Your Free Audit
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
