export default function StrategySection({
  title,
  content,
  icon,
  color = 'blue',
  isList = false,
  highlight = false
}) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    purple: 'bg-purple-50 border-purple-200',
    green: 'bg-green-50 border-green-200',
    orange: 'bg-orange-50 border-orange-200',
    emerald: 'bg-emerald-50 border-emerald-200',
    red: 'bg-red-50 border-red-200',
    indigo: 'bg-indigo-50 border-indigo-200'
  }

  const iconClasses = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    red: 'bg-red-100 text-red-600',
    indigo: 'bg-indigo-100 text-indigo-600'
  }

  const parseContent = (text) => {
    if (typeof text !== 'string') return text

    // Split by numbered items for options/strategies
    if (isList && text.includes('Option') || text.includes('Strategy')) {
      const parts = text.split(/(?=\d\.\s)/g).filter(p => p.trim())
      return parts
    }

    return text
  }

  const contentParts = parseContent(content)

  return (
    <div
      className={`rounded-lg border-2 ${colorClasses[color]} p-6 ${
        highlight ? 'ring-2 ring-offset-2 ring-indigo-400' : ''
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${iconClasses[color]}`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      </div>

      <div className="text-slate-700 space-y-4">
        {Array.isArray(contentParts) ? (
          <ul className="space-y-3">
            {contentParts.map((part, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="flex-shrink-0 font-semibold text-slate-600 min-w-fit">
                  {idx + 1}.
                </span>
                <span className="text-sm leading-relaxed whitespace-pre-wrap">
                  {part.replace(/^\d\.\s/, '').trim()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{contentParts}</p>
        )}
      </div>
    </div>
  )
}