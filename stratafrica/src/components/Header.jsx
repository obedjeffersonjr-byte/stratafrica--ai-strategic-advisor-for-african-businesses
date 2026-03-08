export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">SA</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">StratAfrica</h1>
        </div>
        <p className="text-slate-600">AI Strategic Advisor for African Businesses</p>
      </div>
    </header>
  )
}