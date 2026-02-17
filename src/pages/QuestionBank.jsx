import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const bloomLevels = [
  { name: 'Remember', count: 10, color: '#38bdf8' },
  { name: 'Understand', count: 10, color: '#0ea5e9' },
  { name: 'Apply', count: 10, color: '#818cf8' },
  { name: 'Analyze', count: 10, color: '#6366f1' },
  { name: 'Evaluate', count: 6, color: '#4f46e5' },
  { name: 'Create', count: 6, color: '#34d399' },
]

const questionsByLevel = {
  Remember: [
    'What does "LLM" stand for in AI terminology?',
    'Define "generative AI" in one sentence.',
    'In finance, which AI application is most commonly used for anomaly detection?',
    'Which of the following is a key risk when using AI for financial forecasting?',
    'Identify the four components of the R-C-T-C-F prompting framework.',
    'List three high-impact use cases for AI in the modern finance function.',
  ],
  Understand: [
    'Explain why CFOs should maintain human oversight of AI-generated financial reports.',
    'Explain the difference between supervised learning and generative AI in finance.',
    'Describe how AI can accelerate the FP&A forecasting process without replacing CFO judgment.',
    'Why is "prompt engineering" important when using AI assistants for finance tasks?',
  ],
  Apply: [
    'Write a prompt to generate a three-scenario cash forecast (base, upside, downside) for the next 6 months.',
    'Which tasks are well-suited for AI assistance in month-end close? (Select all that apply)',
    'Using the provided sample P&L data, generate an AI-assisted variance analysis for operating expenses.',
    'Apply the R-C-T-C-F framework to create a prompt for a "Daily Cash Position" report.',
  ],
  Analyze: [
    'An AI tool flags 15 expense transactions as "anomalous." Describe a systematic approach to validate which are true risks vs false positives.',
    'Your AI-generated forecast predicts flat revenue despite a major product launch. Which is the most likely cause?',
    'Compare the AI forecast output to your team\'s baseline forecast. List three key differences.',
    'Compare the ROI of "Building a Custom Finance GPT" vs "Buying an Enterprise Copilot."',
  ],
  Evaluate: [
    'Your company needs an AI solution for automated variance analysis. Would you recommend building, buying, or using a general-purpose LLM? Justify in 150–200 words.',
    'Which AI-generated board commentary is more effective for executive audiences? Explain why.',
    'A colleague proposes using AI to automate the full financial close without human review. Evaluate and recommend a better approach.',
    'Given limited budget, would you prioritize AI for FP&A forecasting or management reporting? Justify.',
  ],
  Create: [
    'Design a redesigned finance workflow diagram showing AI touchpoints. What is the main efficiency gain?',
    'Design a data story in 4–5 bullet points for your board using AI-assisted forecast insights.',
    'Propose one new AI-enabled metric or KPI that would improve CFO decision-making.',
    'Design a 3-tier "AI Governance Framework" for a global finance department.',
  ],
}

export default function QuestionBank() {
  const [selectedLevel, setSelectedLevel] = useState('Remember')

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Question Bank</h1>
          <p className="hero-desc" style={{ marginBottom: 48 }}>
            50+ assessment items categorized by Bloom's Taxonomy levels to ensure balance between foundational knowledge and high-level strategic application.
          </p>

          <div className="card overview-card">
            <h2>Distribution by Bloom Level</h2>
            <div className="question-viz">
              <div className="chart-container" style={{ height: 280, flex: 1, minWidth: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={bloomLevels}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="count"
                      nameKey="name"
                      label={({ name, count }) => `${name}: ${count}`}
                    >
                      {bloomLevels.map((entry, i) => (
                        <Cell
                          key={i}
                          fill={entry.color}
                          stroke={selectedLevel === entry.name ? '#fff' : 'transparent'}
                          strokeWidth={selectedLevel === entry.name ? 3 : 0}
                          onClick={() => setSelectedLevel(entry.name)}
                          style={{ cursor: 'pointer' }}
                        />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="level-buttons">
                {bloomLevels.map(({ name }) => (
                  <button
                    key={name}
                    className={`level-btn ${selectedLevel === name ? 'active' : ''}`}
                    onClick={() => setSelectedLevel(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Sample Questions: {selectedLevel}</h2>
            <ul className="question-list">
              {questionsByLevel[selectedLevel]?.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Question Types by Level</h2>
            <div className="type-table">
              <table>
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Focus</th>
                    <th>Format</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Remember</td><td>Recalling facts, terms, basic concepts</td><td>MCQ, short answer</td></tr>
                  <tr><td>Understand</td><td>Explaining ideas or concepts</td><td>Short answer, paragraph</td></tr>
                  <tr><td>Apply</td><td>Using information in new situations</td><td>Scenario-based MCQ, checkboxes, tasks</td></tr>
                  <tr><td>Analyze</td><td>Drawing connections among ideas</td><td>Case-based paragraphs, diagnostic questions</td></tr>
                  <tr><td>Evaluate</td><td>Justifying a stand or decision</td><td>Paragraph, MCQ + justification</td></tr>
                  <tr><td>Create</td><td>Producing new or original work</td><td>File upload + structured prompts</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
