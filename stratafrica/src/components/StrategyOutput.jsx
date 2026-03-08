import StrategySection from './StrategySection'

export default function StrategyOutput({ strategy }) {
  const sections = [
    {
      title: 'Problem Definition',
      content: strategy.problemDefinition,
      icon: '🎯',
      color: 'blue'
    },
    {
      title: 'Strategic Analysis',
      content: strategy.strategicAnalysis,
      icon: '📊',
      color: 'purple'
    },
    {
      title: 'Recommended Strategy',
      content: strategy.recommendedStrategy,
      icon: '🚀',
      color: 'green',
      isList: true
    },
    {
      title: 'Execution Plan',
      content: strategy.executionPlan,
      icon: '📋',
      color: 'orange'
    },
    {
      title: 'Financial Insight',
      content: strategy.financialInsight,
      icon: '💰',
      color: 'emerald'
    },
    {
      title: 'Risk Assessment',
      content: strategy.riskAssessment,
      icon: '⚠️',
      color: 'red'
    },
    {
      title: 'Next Strategic Move',
      content: strategy.nextStrategicMove,
      icon: '🎬',
      color: 'indigo',
      highlight: true
    }
  ]

  return (
    <div className="space-y-6">
      {sections.map((section, idx) => (
        <StrategySection
          key={idx}
          title={section.title}
          content={section.content}
          icon={section.icon}
          color={section.color}
          isList={section.isList}
          highlight={section.highlight}
        />
      ))}

      {/* Export Button */}
      <button
        onClick={() => {
          const text = sections
            .map(s => `${s.title}\n${s.content}\n`)
            .join('\n---\n\n')
          const element = document.createElement('a')
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text))
          element.setAttribute('download', 'stratafrica-strategy.txt')
          element.style.display = 'none'
          document.body.appendChild(element)
          element.click()
          document.body.removeChild(element)
        }}
        className="w-full py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-semibold transition-all"
      >
        📥 Export Strategy
      </button>
    </div>
  )
}