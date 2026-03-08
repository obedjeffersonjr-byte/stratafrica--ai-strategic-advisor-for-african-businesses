export default function InputForm({
  challenge,
  setChallenge,
  context,
  setContext,
  industry,
  setIndustry,
  stage,
  setStage,
  onSubmit,
  loading,
  error
}) {
  const industries = [
    'Technology/SaaS',
    'E-commerce',
    'Finance/Fintech',
    'Agriculture',
    'Manufacturing',
    'Healthcare',
    'Education',
    'Logistics',
    'Retail',
    'Energy',
    'Other'
  ]

  const stages = [
    { value: 'idea', label: 'Idea Stage' },
    { value: 'startup', label: 'Early Startup' },
    { value: 'growth', label: 'Growth Phase' },
    { value: 'scale', label: 'Scaling' },
    { value: 'established', label: 'Established SME' }
  ]

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">
          Describe Your Challenge
        </h2>

        {/* Main Challenge */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            What is your main business challenge? *
          </label>
          <textarea
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            placeholder="E.g., How should I enter the Nigerian e-commerce market with limited capital? Or, How do I scale my fintech product across East Africa?"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows="5"
            disabled={loading}
          />
        </div>

        {/* Industry */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Business Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          >
            <option value="">Select an industry</option>
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        {/* Stage */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Business Stage
          </label>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          >
            {stages.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {/* Additional Context */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Additional Context (Optional)
          </label>
          <textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Share any relevant details: current market size, team size, funding available, target geography, competitive landscape, etc."
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows="3"
            disabled={loading}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
            loading
              ? 'bg-slate-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
          }`}
        >
          {loading ? 'Generating Strategy...' : 'Get Strategic Analysis'}
        </button>
      </div>

      {/* Info Box */}
      <div className="bg-slate-100 rounded-lg p-4">
        <p className="text-xs text-slate-600">
          <span className="font-semibold">📌 StratAfrica</span> provides structured strategic guidance using proven business frameworks tailored to African market conditions.
        </p>
      </div>
    </form>
  )
}