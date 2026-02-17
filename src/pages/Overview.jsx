import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const useCases = [
  { name: 'Scenario generation', impact: 4, effort: 2, quadrant: 'Quick Win' },
  { name: 'Variance commentary', impact: 4, effort: 1, quadrant: 'Quick Win' },
  { name: 'Board pack drafting', impact: 5, effort: 3, quadrant: 'Strategic Bet' },
  { name: 'Anomaly detection', impact: 4, effort: 3, quadrant: 'Strategic Bet' },
  { name: 'Covenant monitoring', impact: 5, effort: 4, quadrant: 'Strategic Bet' },
  { name: 'KPI tracking', impact: 3, effort: 2, quadrant: 'Quick Win' },
  { name: 'Driver-based models', impact: 4, effort: 4, quadrant: 'Strategic Bet' },
  { name: 'Audit trail analysis', impact: 3, effort: 3, quadrant: 'Fill-in' },
]

const bloomData = [
  { level: 'Remember', count: 15, color: '#38bdf8' },
  { level: 'Understand', count: 20, color: '#0ea5e9' },
  { level: 'Apply', count: 25, color: '#818cf8' },
  { level: 'Analyze', count: 20, color: '#6366f1' },
  { level: 'Evaluate', count: 15, color: '#4f46e5' },
  { level: 'Create', count: 5, color: '#34d399' },
]

export default function Overview() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Course Overview</h1>
          
          <div className="card overview-card">
            <h2>Bootcamp Framing</h2>
            <p><strong>Format:</strong> 5–6 day intensive (6–7 hours/day), mixed concepts + hands-on application</p>
            <p><strong>Target Audience:</strong> CFOs and senior finance leaders with strong financial acumen but no prior AI/ML required. Focus on strategic implementation and operational deployment over technical coding.</p>
            <h3>Emphasis</h3>
            <ul>
              <li>Fast ramp-up on AI vocabulary, capabilities, and realistic finance use cases</li>
              <li>Practical ability to design AI-enabled workflows, evaluate tools, and brief boards using AI-driven insights</li>
              <li>Building an "AI Operating System" for finance functions—not just tool demonstrations</li>
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Key Details</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Duration</span>
                <span className="detail-value">40 contact hours</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Format</span>
                <span className="detail-value">5-day bootcamp</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Instruction</span>
                <span className="detail-value">30 hours + 10 hours tutorials</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Instructor</span>
                <span className="detail-value">Vikram Singh Sankhala</span>
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Bloom's Taxonomy Distribution</h2>
            <p className="muted">Assessment items are aligned across all six levels of Bloom's Taxonomy for comprehensive learning.</p>
            <div className="chart-container" style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bloomData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="level" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                    {bloomData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card overview-card">
            <h2>AI Use Case Prioritization: Impact vs Effort</h2>
            <p className="muted">Map potential AI use cases to identify Quick Wins and Strategic Bets.</p>
            <div className="impact-effort-matrix">
              <div className="matrix-grid">
                <div className="quadrant quick-win"><span>Quick Wins</span><small>Low Effort, High Impact</small></div>
                <div className="quadrant strategic"><span>Strategic Bets</span><small>High Effort, High Impact</small></div>
                <div className="quadrant fill-in"><span>Fill-in</span><small>Low Effort, Low Impact</small></div>
                <div className="quadrant avoid"><span>Avoid</span><small>High Effort, Low Impact</small></div>
              </div>
              <div className="use-case-list">
                {useCases.map((uc, i) => (
                  <div key={i} className={`use-case-tag ${uc.quadrant.replace(' ', '-').toLowerCase()}`}>
                    {uc.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Success Metrics</h2>
            <ul>
              <li>80%+ of students achieve Proficient or Exemplary on capstone rubric</li>
              <li>Average post-test score ≥75%</li>
              <li>85%+ of students report "confident" or "very confident" in leading AI initiatives in finance</li>
              <li>90%+ course satisfaction (end-of-course evaluation)</li>
              <li>Evidence of AI workflow deployment in participants' organizations (3-month follow-up)</li>
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Governance & Risk</h2>
            <p>Explore the Finance AI Risk Matrix, governance checklist, and Three Lines of Defense framework.</p>
            <Link to="/governance" className="btn btn-secondary">View Governance Framework</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
