import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const rubricData = [
  { criterion: 'Strategic Alignment', weight: 25, color: '#38bdf8' },
  { criterion: 'Workflow Design', weight: 25, color: '#0ea5e9' },
  { criterion: 'Prompt Quality', weight: 20, color: '#818cf8' },
  { criterion: 'Governance & Risk', weight: 15, color: '#6366f1' },
  { criterion: 'Presentation & Defense', weight: 15, color: '#34d399' },
]

const topics = [
  { industry: 'Mid-market Manufacturing', focus: 'Rolling forecasts, supply chain cost variance, and debt covenant monitoring' },
  { industry: 'Tech Startup', focus: 'Burn-rate scenario modeling, SaaS metrics dashboards, and investor reporting automation' },
  { industry: 'Public Sector', focus: 'Budget-to-actual reporting, grant compliance tracking, and audit preparation' },
]

export default function Capstone() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Capstone Project</h1>
          <p className="hero-desc" style={{ marginBottom: 48 }}>
            Design and present an "AI Operating System" for your finance function—a blueprint that integrates AI into 3–5 core workflows with governance, tools, and prompts.
          </p>

          <div className="card overview-card">
            <h2>Project Objective</h2>
            <p>Participants must design a comprehensive blueprint that integrates AI into 3–5 core finance workflows (forecasting, close, board reporting, or risk monitoring) while addressing governance, tooling, and specific prompt engineering requirements.</p>
          </div>

          <div className="card overview-card">
            <h2>Core Deliverables</h2>
            <div className="deliverables-grid">
              <div className="deliverable-item">
                <span className="deliverable-num">+1</span>
                <h4>Process Map</h4>
                <p>Before-and-after diagrams showing transition from manual to AI-augmented processes, highlighting specific AI touchpoints.</p>
              </div>
              <div className="deliverable-item">
                <span className="deliverable-num">+2</span>
                <h4>Prompt Library</h4>
                <p>5–10 tested, reusable prompts for recurring CFO tasks (variance analysis, executive summaries, covenant checks).</p>
              </div>
              <div className="deliverable-item">
                <span className="deliverable-num">+3</span>
                <h4>Tool Recommendation</h4>
                <p>One-page justification for build vs. buy vs. partner strategy based on organizational context, cost, and IT capacity.</p>
              </div>
              <div className="deliverable-item">
                <span className="deliverable-num">+4</span>
                <h4>Governance Framework</h4>
                <p>Risk matrix and approval workflows defining human-in-the-loop requirements and audit trail standards for AI outputs.</p>
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Capstone Grading Rubric</h2>
            <p className="muted">The project accounts for 25% of the total course grade.</p>
            <div className="chart-container" style={{ height: 280 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={rubricData} layout="vertical" margin={{ left: 20, right: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" domain={[0, 30]} stroke="#94a3b8" />
                  <YAxis dataKey="criterion" type="category" width={180} stroke="#94a3b8" tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                  <Bar dataKey="weight" radius={[0, 4, 4, 0]}>
                    {rubricData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="rubric-table">
              <table>
                <thead>
                  <tr>
                    <th>Criterion</th>
                    <th>Weight</th>
                    <th>Exemplary (4)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Strategic Alignment</td>
                    <td>25%</td>
                    <td>AI initiatives clearly tied to CFO priorities (Cash, P&L, Risk) with quantified impact</td>
                  </tr>
                  <tr>
                    <td>Workflow Design</td>
                    <td>25%</td>
                    <td>Clear, implementable workflows with well-placed AI touchpoints and realistic change management</td>
                  </tr>
                  <tr>
                    <td>Prompt Quality</td>
                    <td>20%</td>
                    <td>Prompts specific, structured, tested, producing board-ready outputs</td>
                  </tr>
                  <tr>
                    <td>Governance & Risk</td>
                    <td>15%</td>
                    <td>Comprehensive framework with approval flows, audit trails, and risk mitigation</td>
                  </tr>
                  <tr>
                    <td>Presentation & Defense</td>
                    <td>15%</td>
                    <td>Confident, executive-ready communication with excellent Q&A responses</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Sample Capstone Topics</h2>
            <p className="muted">Select a topic relevant to your organization or industry for maximum applicability.</p>
            <div className="topics-grid">
              {topics.map((t, i) => (
                <div key={i} className="topic-card">
                  <h4>{t.industry}</h4>
                  <p>{t.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card overview-card">
            <h2>Submission & Presentation</h2>
            <ul>
              <li><strong>Format:</strong> Structured document or slide deck executive-ready for Board or CEO presentation</li>
              <li><strong>Presentation:</strong> 10-minute live walkthrough of the "AI Operating System" followed by 5-minute Q&A</li>
              <li><strong>Defense:</strong> Participants must defend design choices regarding risk mitigation and ROI</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
