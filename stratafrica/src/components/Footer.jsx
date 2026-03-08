export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-white mb-3">StratAfrica</h3>
            <p className="text-sm">AI-powered strategic guidance for African entrepreneurs and businesses.</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Our Expertise</h3>
            <ul className="text-sm space-y-2">
              <li>Business Strategy</li>
              <li>Financial Planning</li>
              <li>Market Analysis</li>
              <li>Investment Readiness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Focus Areas</h3>
            <ul className="text-sm space-y-2">
              <li>African Startups</li>
              <li>SME Growth</li>
              <li>Youth Entrepreneurship</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 text-center text-sm">
          <p>&copy; 2024 StratAfrica. Empowering African Business Leadership.</p>
        </div>
      </div>
    </footer>
  )
}