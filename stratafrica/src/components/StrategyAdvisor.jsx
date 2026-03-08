import { useState, useRef, useEffect } from 'react'
import { generateStrategy } from '../services/strategyService'
import InputForm from './InputForm'
import StrategyOutput from './StrategyOutput'
import LoadingSpinner from './LoadingSpinner'

export default function StrategyAdvisor() {
  const [challenge, setChallenge] = useState('')
  const [context, setContext] = useState('')
  const [industry, setIndustry] = useState('')
  const [stage, setStage] = useState('startup')
  const [strategy, setStrategy] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const outputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!challenge.trim()) {
      setError('Please describe your business challenge')
      return
    }

    setError('')
    setLoading(true)
    setStrategy(null)

    try {
      const result = await generateStrategy({
        challenge,
        context,
        industry,
        stage
      })
      setStrategy(result)
      
      // Scroll to results
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } catch (err) {
      setError(err.message || 'Failed to generate strategy. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Input Section */}
        <div>
          <InputForm
            challenge={challenge}
            setChallenge={setChallenge}
            context={context}
            setContext={setContext}
            industry={industry}
            setIndustry={setIndustry}
            stage={stage}
            setStage={setStage}
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
        </div>

        {/* Output Section */}
        <div ref={outputRef}>
          {loading && <LoadingSpinner />}
          {strategy && !loading && <StrategyOutput strategy={strategy} />}
          {!loading && !strategy && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Get Strategic Guidance
              </h3>
              <p className="text-slate-600">
                Describe your business challenge on the left and receive structured strategic analysis tailored to African market conditions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}