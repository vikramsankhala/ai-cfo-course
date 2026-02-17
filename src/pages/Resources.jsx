export default function Resources() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Resources & Pre-Work</h1>

          <div className="card overview-card">
            <h2>Required Software and Access</h2>
            <ul>
              <li>Modern web browser (Chrome, Edge, Firefox)</li>
              <li>Access to at least one AI assistant (ChatGPT, Claude, or enterprise LLM)</li>
              <li>Microsoft Excel or Google Sheets for data exercises</li>
              <li>Optional: Power BI, Tableau, or similar BI tool for visualization labs</li>
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Pre-Work (Before Day 1)</h2>
            <ul>
              <li><strong>Watch:</strong> "AI for CFOs: Where to Begin" (YouTube, 15 min)</li>
              <li><strong>Read:</strong> "A CFO's Guide to Using AI" (CFO.University article, 10 min)</li>
              <li><strong>Explore:</strong> AI Finance Club case studies (browse 2–3 examples)</li>
              <li><strong>Prepare:</strong> Bring 1–2 anonymized examples of recurring finance tasks from your organization (e.g., variance reports, board slides, covenant trackers)</li>
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Recommended Datasets and Templates</h2>
            <ul>
              <li>Sample consolidated P&L (5-year monthly)</li>
              <li>Cash flow forecast template with scenario structure</li>
              <li>Board pack template (executive summary, KPIs, variance, outlook)</li>
              <li>Risk register with incident history</li>
              <li>Covenant compliance tracker</li>
              <li>CFO Copilot prompt library (provided by instructor)</li>
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Additional Resources</h2>
            <div className="resource-grid">
              <a href="https://aiforcfo.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                <strong>AIforCFO.com</strong> – Practical AI training, templates, and case studies
              </a>
              <a href="https://cfo.university" target="_blank" rel="noopener noreferrer" className="resource-link">
                <strong>CFO.University</strong> – AI for Finance Leaders guides and webinars
              </a>
              <a href="https://ai-finance.club" target="_blank" rel="noopener noreferrer" className="resource-link">
                <strong>AI Finance Club</strong> – Community, events, and best practices
              </a>
              <a href="https://emeritus.org" target="_blank" rel="noopener noreferrer" className="resource-link">
                <strong>Columbia CFO Program</strong> – AI and Analytics for Finance Leadership
              </a>
            </div>
          </div>

          <div className="card overview-card">
            <h2>CFO Copilot Prompt Library (Highlights)</h2>
            <p className="muted">Structured templates using R-C-T-C-F (Role, Context, Task, Constraints, Format) framework.</p>
            <div className="prompt-list">
              <div className="prompt-item">
                <h4>F1.1: Multi-Scenario Revenue Forecasting</h4>
                <p>Role: Senior FP&A Director. Generate base, upside, downside forecasts with 3-bullet executive summary.</p>
              </div>
              <div className="prompt-item">
                <h4>F2.1: Monthly Variance Analysis ("So What?" Generator)</h4>
                <p>Role: CFO preparing for board. Narrative beyond numbers to business cause and mitigation plan.</p>
              </div>
              <div className="prompt-item">
                <h4>F2.2: Executive Summary for Board Packs</h4>
                <p>Role: CFO. Synthesize P&L, Balance Sheet, Cash Flow into 500-word Quick-Read summary.</p>
              </div>
              <div className="prompt-item">
                <h4>F3.1: Internal Control Gap Analysis</h4>
                <p>Role: Forensic Auditor. Identify AP workflow weak points and suggest AI-driven controls.</p>
              </div>
              <div className="prompt-item">
                <h4>F3.2: Debt Covenant Monitoring & Early Warning</h4>
                <p>Role: Corporate Treasurer. Calculate headroom, draft executive alert for covenant sensitivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
