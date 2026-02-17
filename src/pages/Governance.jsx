import { Link } from 'react-router-dom'

const riskMatrix = [
  { risk: 'Hallucination', impact: 'Incorrect financial figures in board packs or public filings', mitigation: 'Mandatory Human-in-the-loop (HITL) reconciliation against ERP source data' },
  { risk: 'Data Privacy', impact: 'PII or trade secrets leaked into public training models', mitigation: 'Private instances (Azure OpenAI, AWS Bedrock) with zero-retention policies' },
  { risk: 'Model Bias', impact: 'Discriminatory credit scoring or biased vendor selection', mitigation: 'Regular bias audits and testing against historical manual decisions' },
  { risk: 'Logic Opacity', impact: 'Inability to explain reasoning to auditors or regulators', mitigation: 'Prioritize Explainable AI (XAI) with Chain-of-Thought and source citations' },
  { risk: 'Data Drift', impact: 'Forecast accuracy degrades as market conditions change', mitigation: 'Quarterly model recalibration and performance monitoring vs actuals' },
]

export default function Governance() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Governance & Risk Frameworks</h1>

          <div className="card overview-card">
            <h2>Finance AI Risk Matrix</h2>
            <div className="risk-table">
              <table>
                <thead>
                  <tr>
                    <th>Risk Category</th>
                    <th>Potential Impact</th>
                    <th>Mitigation Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {riskMatrix.map((r, i) => (
                    <tr key={i}>
                      <td><strong>{r.risk}</strong></td>
                      <td>{r.impact}</td>
                      <td>{r.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card overview-card">
            <h2>AI Governance Checklist for Finance Teams</h2>
            <p className="muted">Before any AI-generated output is used for decision-making:</p>
            <div className="governance-phases">
              <div className="phase-block">
                <h4>Phase 1: Input & Data Integrity</h4>
                <ul className="checklist">
                  <li>Data Sanitization: Has all PII been masked or removed?</li>
                  <li>Source Verification: Is data from Single Source of Truth (e.g., GL)?</li>
                  <li>Permissioning: Does AI tool access match user's financial authorization?</li>
                </ul>
              </div>
              <div className="phase-block">
                <h4>Phase 2: Processing & Prompting</h4>
                <ul className="checklist">
                  <li>Logic Check: Does prompt include accounting constraints (e.g., GAAP)?</li>
                  <li>Version Control: Is prompt version documented for audit?</li>
                </ul>
              </div>
              <div className="phase-block">
                <h4>Phase 3: Output & Review</h4>
                <ul className="checklist">
                  <li>Cross-Footing: Have AI calculations been verified (3+ random samples)?</li>
                  <li>Tone Check: Does narrative reflect company executive voice?</li>
                  <li>Attribution: Is report marked "AI-Assisted" with date and model version?</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Three Lines of Defense for AI Finance</h2>
            <div className="defense-grid">
              <div className="defense-item">
                <span className="defense-num">1</span>
                <h4>First Line (Operations)</h4>
                <p>Finance Analysts and Managers using AI tools—primary verification and adherence to Prompt Library standards.</p>
              </div>
              <div className="defense-item">
                <span className="defense-num">2</span>
                <h4>Second Line (Risk & Compliance)</h4>
                <p>Designated "Finance AI Officer" or Controller—monitors model drift, bias, and AI Usage Policy adherence.</p>
              </div>
              <div className="defense-item">
                <span className="defense-num">3</span>
                <h4>Third Line (Internal Audit)</h4>
                <p>Periodic independent reviews of AI Operating System—ensures automated controls function and audit trail is intact.</p>
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Sample AI Usage Policy Statement</h2>
            <blockquote className="policy-quote">
              "The Finance Department utilizes Artificial Intelligence to enhance analytical speed and insight. However, AI is a tool of augmentation, not a replacement for professional judgment. No financial statement, budget, or public disclosure shall be released based solely on AI output without a documented review by a qualified human finance professional. All AI interactions involving company data must occur within approved, secure enterprise environments."
            </blockquote>
          </div>

          <p style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
          </p>
        </div>
      </section>
    </div>
  )
}
