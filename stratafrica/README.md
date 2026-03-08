# StratAfrica - AI Strategic Advisor for African Businesses

An intelligent AI-powered strategic advisor tool designed to help African entrepreneurs, startups, SMEs, and investors make data-driven business decisions.

## Features

- **Structured Strategic Analysis** - Get actionable guidance using proven business frameworks
- **7-Section Framework** - Problem Definition, Strategic Analysis, Recommended Strategies, Execution Plan, Financial Insights, Risk Assessment, and Next Steps
- **Africa-Focused** - Tailored recommendations for African market conditions, limited capital, and local consumer behavior
- **Real-World Examples** - References to successful African companies like Flutterwave, Paystack, MTN, and Dangote
- **Professional Design** - Clean, modern interface with Tailwind CSS
- **Export Capability** - Download your strategic analysis as a text file

## Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS (CDN)
- **State Management**: React Hooks
- **Backend Integration**: Ready for LLM API integration

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://0.0.0.0:8080`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx           # App header and branding
│   ├── Footer.jsx           # Footer with company info
│   ├── StrategyAdvisor.jsx   # Main strategy advisor container
│   ├── InputForm.jsx         # Business challenge input form
│   ├── StrategyOutput.jsx    # Strategy results display
│   ├── StrategySection.jsx   # Individual strategy section
│   └── LoadingSpinner.jsx    # Loading animation
├── services/
│   ├── strategyService.js    # Strategy generation logic
│   └── llmService.js         # LLM API integration
└── App.jsx                   # Main app component
```

## Usage

1. **Describe Your Challenge**: Input your business challenge, additional context, and business details
2. **Select Industry & Stage**: Choose your industry and current business stage
3. **Get Analysis**: Click "Get Strategic Analysis" to receive structured guidance
4. **Review & Export**: Review all 7 sections and export your strategy as a text file

## API Integration

The application supports integration with an LLM API backend. Configure via environment variables:

```
VITE_API_URL=http://localhost:3000  # Your API endpoint
```

The backend should accept POST requests to `/api/strategy` with:

```json
{
  "systemPrompt": "string",
  "userPrompt": "string"
}
```

And respond with:

```json
{
  "response": "string"
}
```

## Strategic Framework

StratAfrica uses industry-proven frameworks:

- **SWOT Analysis** - Strengths, Weaknesses, Opportunities, Threats
- **Porter's Five Forces** - Competitive analysis
- **Business Model Canvas** - Value proposition and business structure
- **Unit Economics** - CAC, LTV, churn analysis
- **Financial Forecasting** - Revenue and cost projections

## Features for African Entrepreneurs

- Considerations for limited capital availability
- Strategies for informal market penetration
- Infrastructure constraint solutions
- Digital growth opportunity identification
- Youth entrepreneurship guidance
- Local consumer behavior insights

## Example Use Cases

- "How should I enter the Nigerian e-commerce market with $10K?"
- "How do I scale my fintech product across East Africa?"
- "What's the best go-to-market strategy for my SaaS product in Kenya?"
- "How do I raise investment for my agricultural tech startup?"
- "What's the validation process for my food delivery service?"

## License

MIT

## Support

For issues and feedback, visit [GitHub Issues](https://github.com/anomalyco/opencode)