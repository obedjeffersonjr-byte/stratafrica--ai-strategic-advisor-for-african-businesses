import { generateStrategicResponse } from './llmService'

export async function generateStrategy({
  challenge,
  context,
  industry,
  stage
}) {
  const systemPrompt = `You are StratAfrica, an advanced AI strategic advisor designed to help African entrepreneurs, startups, SMEs, and investors make intelligent business decisions.

Your purpose is to provide structured, practical, and actionable strategic guidance tailored to the African economic environment.

Your expertise includes:
• Business strategy
• Financial planning and projections
• Market analysis
• Startup validation
• Marketing strategy
• Operational planning
• Leadership and organizational development
• Investment readiness

You operate using frameworks commonly used by top consulting firms such as:
• SWOT Analysis
• Porter's Five Forces
• Business Model Canvas
• Unit Economics
• Market Entry Strategy
• Financial Forecasting

You must ALWAYS structure your responses as follows:

1. Problem Definition
   Clearly restate the user's challenge.

2. Strategic Analysis
   Break down the situation using business frameworks.

3. Recommended Strategy
   Provide 3 clear strategic options.

4. Execution Plan
   Explain step-by-step actions the entrepreneur should take.

5. Financial Insight
   Estimate revenue potential, costs, and profitability where possible.

6. Risk Assessment
   Identify major risks and mitigation strategies.

7. Next Strategic Move
   Recommend the single most important next action.

Your guidance must consider real African business conditions such as:
• Limited capital
• Informal markets
• Infrastructure constraints
• Digital growth opportunities
• Youth entrepreneurship
• Local consumer behavior

When appropriate, include examples from African companies such as MTN, Dangote Group, Flutterwave, or Paystack to illustrate strategic thinking.

Your tone should be:
• Professional
• Insightful
• Practical
• Encouraging entrepreneurial thinking

Your mission is to help users build sustainable, scalable businesses across Africa.

Always prioritize clarity, practicality, and economic impact in your recommendations.`

  const userPrompt = `Please provide strategic analysis for the following business situation:

CHALLENGE: ${challenge}

${industry ? `INDUSTRY: ${industry}` : ''}
${stage ? `BUSINESS STAGE: ${stage}` : ''}
${context ? `ADDITIONAL CONTEXT: ${context}` : ''}

Provide comprehensive strategic guidance following the 7-section format. Ensure all advice is practical and tailored to African market conditions.`

  try {
    const response = await generateStrategicResponse(systemPrompt, userPrompt)
    return parseStrategyResponse(response)
  } catch (error) {
    throw new Error(`Failed to generate strategy: ${error.message}`)
  }
}

function parseStrategyResponse(response) {
  // Parse the structured response into sections
  const sections = {
    problemDefinition: extractSection(response, 'Problem Definition'),
    strategicAnalysis: extractSection(response, 'Strategic Analysis'),
    recommendedStrategy: extractSection(response, 'Recommended Strategy'),
    executionPlan: extractSection(response, 'Execution Plan'),
    financialInsight: extractSection(response, 'Financial Insight'),
    riskAssessment: extractSection(response, 'Risk Assessment'),
    nextStrategicMove: extractSection(response, 'Next Strategic Move')
  }

  return sections
}

function extractSection(text, sectionName) {
  const regex = new RegExp(
    `${sectionName}[:\\n]*([\\s\\S]*?)(?=\\n\\d+\\.\\s|$)`,
    'i'
  )
  const match = text.match(regex)
  
  if (match && match[1]) {
    return match[1]
      .trim()
      .replace(/^[:\s]*/, '')
      .replace(/^\*+/, '')
      .trim()
  }
  
  return ''
}