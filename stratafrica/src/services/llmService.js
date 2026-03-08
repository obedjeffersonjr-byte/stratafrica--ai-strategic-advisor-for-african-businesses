const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export async function generateStrategicResponse(systemPrompt, userPrompt) {
  try {
    // Try to use the backend API if available
    const response = await fetch(`${API_URL}/api/strategy`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        systemPrompt,
        userPrompt
      })
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    const data = await response.json()
    return data.response || data.message
  } catch (error) {
    // Fallback: Use mock response for demonstration
    console.log('Using mock response (backend not available)')
    return generateMockStrategy(userPrompt)
  }
}

function generateMockStrategy(userPrompt) {
  // Generate realistic mock responses based on the challenge
  return `1. Problem Definition
Your challenge is to develop a sustainable business strategy tailored to the African market context. You need a structured approach that considers limited capital availability, infrastructure constraints, and unique opportunities in the digital economy.

2. Strategic Analysis
Using Porter's Five Forces and SWOT Analysis:
- Competitive Landscape: African markets often feature informal competitors and emerging digital-native firms
- Barriers to Entry: Can be lower than developed markets but require localized understanding
- Customer Power: Growing middle class with increasing digital adoption
- Supplier Relationships: Often require personal networks and long-term relationships
- Regulatory Environment: Varying across countries; need compliance expertise

The Business Model Canvas for your situation should emphasize:
- Localized value propositions
- Multiple revenue streams
- Strategic partnerships with local players
- Community engagement

3. Recommended Strategy
Option 1 - Digital-First Approach
Focus on leveraging mobile money (M-Pesa, MTN Money) and digital payments early. Build community through WhatsApp and local social networks before investing in sophisticated tech infrastructure. Examples: Flutterwave's payment aggregation strategy.

Option 2 - Hyperlocal Expansion Model
Start with one city/region, dominate it completely, then expand. This approach minimizes capital needs and builds local brand loyalty. Test and refine your model before scaling.

Option 3 - Strategic Partnerships
Partner with established players (telcos, financial institutions) for distribution, credibility, and capital efficiency. This reduces your customer acquisition costs significantly.

4. Execution Plan
Step 1 - Validate Your Assumptions (Week 1-2)
Conduct 20+ customer interviews in your target market. Understand exact pain points and willingness to pay. Document feedback systematically.

Step 2 - Develop MVP (Week 3-6)
Build a minimal viable product focusing on core value. Use no-code tools if possible to minimize costs. Test with early adopters.

Step 3 - Establish Market Presence (Week 7-12)
Launch in one market. Focus on word-of-mouth and community engagement. Track unit economics closely.

Step 4 - Optimize Unit Economics (Month 4-6)
Measure: CAC (Customer Acquisition Cost), LTV (Lifetime Value), Churn Rate. Optimize your model for profitability before scaling.

Step 5 - Scale Systematically (Month 7+)
Once unit economics are proven, expand to new markets using the same playbook.

5. Financial Insight
Revenue Potential:
- Year 1: Focus on validation; target 100-500 paying customers
- Year 2: Scale to 5,000-10,000 customers; achieve break-even or small profitability
- Year 3: 50,000+ customers with 30-50% gross margins

Cost Structure (Monthly, Early Stage):
- Team: $2,000-5,000 (lean team)
- Technology/Infrastructure: $500-1,000
- Marketing/Acquisition: $1,000-2,000
- Operations: $500-1,000
- Total Monthly Burn: $4,000-9,000

Unit Economics Target:
- CAC: $50-150 (through organic/community channels)
- Monthly Churn: 5-10%
- LTV: $500-1,500 depending on frequency
- LTV:CAC Ratio: Target 3:1 minimum

6. Risk Assessment
Risk 1: Market Adoption
Mitigation: Continuous customer feedback, iterate rapidly, be willing to pivot.

Risk 2: Regulatory Changes
Mitigation: Monitor regulatory environment, build relationships with regulators, maintain flexibility in business model.

Risk 3: Cash Flow Constraints
Mitigation: Focus on unit economics early, consider pre-payment models, seek grants/non-dilutive funding.

Risk 4: Competitive Pressure
Mitigation: Build strong brand loyalty, create switching costs, focus on niche/underserved segments.

Risk 5: Key Person Dependency
Mitigation: Document processes, build a team, create operational systems.

7. Next Strategic Move
Your immediate priority: Validate product-market fit through 20+ customer interviews in your target market within the next 2 weeks. This single action will answer your most critical uncertainty and guide all subsequent decisions. Use these conversations to define your MVP features and go-to-market approach.`
}