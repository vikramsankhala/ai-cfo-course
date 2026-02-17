import { useState } from 'react'

const modules = [
  {
    id: 1,
    title: 'Module 1: AI Fundamentals',
    hours: 4,
    sessions: [
      {
        id: '1.1',
        title: 'AI Fundamentals for Finance Leaders (2h)',
        outcomes: [
          'Define AI, machine learning, generative AI, LLMs, and AI copilots in plain business language. (Remember)',
          'Explain how AI creates value in finance functions (forecasting, reporting, risk) vs where it introduces risk. (Understand)',
          'Interpret simple AI-generated financial outputs (scenario narratives, anomaly flags) in decision contexts. (Apply)',
        ],
        outline: [
          '0–15 min: Icebreaker and pre-concept poll',
          '15–45 min: Mini-lecture on evolution of AI in finance, key concepts (supervised learning, GenAI, hallucinations, guardrails), Netflix/Amazon case vignettes',
          '45–75 min: Hands-on interpretation of AI-generated P&L commentary, cash forecast, risk flags',
          '75–120 min: Group exercise – "Finance AI Landscape Map"',
        ],
      },
      {
        id: '1.2',
        title: 'AI Landscape & Finance Use Cases (2h)',
        outcomes: [
          'Distinguish high-value from low-value AI use cases in finance operations. (Analyze)',
          'Evaluate competing AI tools and vendors for finance-specific needs. (Evaluate)',
          'Prioritize AI opportunities based on impact, feasibility, and risk. (Evaluate)',
        ],
        outline: [
          '0–20 min: AI use-case taxonomy (FP&A, reporting, risk & compliance)',
          '20–45 min: Live demo using AI finance assistant',
          '45–75 min: Prioritization framework – impact vs effort matrix',
          '75–120 min: Case mini-debate (manufacturing, tech startup, public sector)',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Module 2: Hands-On Applications',
    hours: 10,
    sessions: [
      {
        id: '2.1',
        title: 'AI for FP&A and Forecasting (2h)',
        outcomes: ['Apply prompts for baseline forecasts and scenario narratives', 'Analyze AI-generated scenarios vs business judgment', 'Create three-scenario forecast pack (base, upside, downside)'],
        outline: ['Concept overview: traditional vs AI-augmented forecasting', 'Hands-on: AI-assisted 12-month baseline forecast', 'Scenario design: base, stress (15% decline), upside (product launch)', 'Peer review: board-ready assessment'],
      },
      {
        id: '2.2',
        title: 'AI for Management Reporting and Board Packs (2h)',
        outcomes: ['Design board commentary using AI narrative generation', 'Evaluate AI-generated text for clarity and decision-usefulness', 'Integrate AI outputs into reporting workflows'],
        outline: ['Mini-lecture: From data to story', 'Hands-on: AI-generated variance commentary', 'Board slide exercise: 3-slide pack (KPIs, narrative, outlook)', 'Gallery walk and peer critique'],
      },
      {
        id: '2.3',
        title: 'AI for Risk, Controls, and Compliance (2h)',
        outcomes: ['Identify AI risk monitoring opportunities', 'Apply anomaly detection to transaction/covenant data', 'Evaluate reliability and auditability of AI risk alerts'],
        outline: ['Concept: AI in three lines of defense', 'Hands-on: Anomaly detection on transaction log', 'Covenant compliance case study', 'Governance discussion'],
      },
      {
        id: '2.4',
        title: 'AI Workflow Design and Prompt Engineering (2h)',
        outcomes: ['Design AI-augmented finance workflows', 'Write effective prompts (R-C-T-C-F framework)', 'Diagnose prompt failures and iterate'],
        outline: ['Workflow mapping and redesign', 'Prompt engineering lab with sample tasks', 'Workflow redesign exercise', 'Peer feedback'],
      },
      {
        id: '2.5',
        title: 'AI Tool Evaluation and Vendor Selection (2h)',
        outcomes: ['Evaluate AI tools using finance-specific criteria', 'Compare build vs buy vs partner', 'Make vendor selection recommendations'],
        outline: ['Tool landscape overview', 'Live tool comparison demo', 'Build vs buy case study', 'Vendor recommendation memo exercise'],
      },
    ],
  },
  {
    id: 3,
    title: 'Optional Extensions (Modules 3–5)',
    hours: 14,
    sessions: [
      { id: '3', title: 'Module 3: AI for Treasury and Cash Management (4–6h)', outcomes: ['Cash forecasting with AI scenario modeling', 'Working capital optimization', 'FX risk and hedging with AI simulations'] },
      { id: '4', title: 'Module 4: AI Governance, Ethics, and Risk (4–6h)', outcomes: ['AI governance frameworks', 'Ethical considerations: bias, transparency', 'Regulatory compliance and audit trails'] },
      { id: '5', title: 'Module 5: Advanced AI Topics (4–6h)', outcomes: ['Agentic AI systems', 'ERP/EPM integration', 'AI-driven decision support'] },
    ],
  },
]

export default function Modules() {
  const [expanded, setExpanded] = useState(null)

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Course Modules</h1>
          
          <div className="card overview-card" style={{ marginBottom: 32 }}>
            <h3>Recommended Practice Datasets (Module 2)</h3>
            <ul>
              <li>Sample consolidated P&L (5-year monthly history with actuals and budget)</li>
              <li>Cash flow statements with working capital detail</li>
              <li>Sample board pack with variance commentary and KPI dashboards</li>
              <li>Risk register with historical incident data</li>
              <li>Anonymized covenant compliance tracker</li>
            </ul>
          </div>

          {modules.map((mod) => (
            <div key={mod.id} className="module-block card">
              <div className="module-header" onClick={() => setExpanded(expanded === mod.id ? null : mod.id)}>
                <h2>{mod.title}</h2>
                <span className="module-hours">{mod.hours}h</span>
                <span className="expand-icon">{expanded === mod.id ? '−' : '+'}</span>
              </div>
              {expanded === mod.id && (
                <div className="module-content">
                  {mod.sessions.map((session) => (
                    <div key={session.id} className="session-block">
                      <h4>{session.title}</h4>
                      {session.outcomes && (
                        <>
                          <p className="label">Learning Outcomes:</p>
                          <ul>
                            {session.outcomes.map((o, i) => (
                              <li key={i}>{o}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {session.outline && (
                        <>
                          <p className="label">Outline:</p>
                          <ul className="outline-list">
                            {session.outline.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
