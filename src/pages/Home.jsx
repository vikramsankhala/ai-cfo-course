import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER, WHATSAPP_PLAYBOOK_MSG } from '../config/leads'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const moduleData = [
  { name: 'Module 1: AI Fundamentals', hours: 4, fill: '#38bdf8' },
  { name: 'Module 2: FP&A & Forecasting', hours: 2, fill: '#0ea5e9' },
  { name: 'Module 2: Management Reporting', hours: 2, fill: '#0284c7' },
  { name: 'Module 2: Risk & Compliance', hours: 2, fill: '#818cf8' },
  { name: 'Module 2: Workflow Design', hours: 2, fill: '#6366f1' },
  { name: 'Module 2: Tool Evaluation', hours: 2, fill: '#4f46e5' },
]

const assessmentData = [
  { name: 'Daily Quizzes', value: 15, color: '#38bdf8' },
  { name: 'Lab Exercises', value: 25, color: '#0ea5e9' },
  { name: 'Mini-Projects', value: 20, color: '#818cf8' },
  { name: 'Tool Evaluation', value: 15, color: '#6366f1' },
  { name: 'Capstone Project', value: 25, color: '#34d399' },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">AI for CFOs</h1>
          <p className="hero-subtitle">Strategic and Operational Mastery</p>
          <p className="hero-desc">
            A comprehensive 5-day intensive bootcamp designed for CFOs, Finance Directors, Controllers, 
            and FP&A Leaders. Build your AI Operating System for finance—from fundamentals to deployment.
          </p>
          <div className="hero-meta">
            <span>40 contact hours</span>
            <span>•</span>
            <span>5-day bootcamp</span>
            <span>•</span>
            <span>Instructor: Vikram Singh Sankhala</span>
          </div>
          <div className="hero-cta">
            <Link to="/get-playbook" className="btn btn-primary">Get CFO AI Playbook</Link>
            <Link to="/info-session" className="btn btn-secondary">Join Info Session (Free)</Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PLAYBOOK_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section highlights">
        <div className="container">
          <h2 className="section-title">What You'll Master</h2>
          <div className="highlight-grid">
            <div className="highlight-card">
              <div className="highlight-icon">📊</div>
              <h3>AI Fundamentals</h3>
              <p>Define AI, ML, GenAI, and LLMs in plain business language. Understand value creation vs. risk in finance.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📈</div>
              <h3>FP&A & Forecasting</h3>
              <p>Apply structured prompts for baseline forecasts, scenario narratives, and three-scenario packs.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📋</div>
              <h3>Board Reporting</h3>
              <p>Design management commentary and board slides using AI narrative generation.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🛡️</div>
              <h3>Risk & Compliance</h3>
              <p>Apply AI-based anomaly detection and covenant monitoring with governance frameworks.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">⚙️</div>
              <h3>Workflow Design</h3>
              <p>Master R-C-T-C-F prompt engineering and design AI-augmented finance workflows.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔧</div>
              <h3>Tool Evaluation</h3>
              <p>Evaluate AI vendors using finance-specific criteria. Build vs. buy vs. partner decisions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section viz-section">
        <div className="container">
          <h2 className="section-title">Course Structure</h2>
          <div className="viz-grid">
            <div className="viz-card">
              <h3>Module Hours Distribution</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={moduleData} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis type="number" stroke="#94a3b8" />
                    <YAxis dataKey="name" type="category" width={140} stroke="#94a3b8" tick={{ fontSize: 12 }} />
                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                    <Bar dataKey="hours" fill="#38bdf8" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="viz-card">
              <h3>Assessment Breakdown</h3>
              <div className="chart-container pie-chart">
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie
                      data={assessmentData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {assessmentData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2 className="section-title">Ready to Transform Your Finance Function?</h2>
          <p className="cta-text">
            No prior AI/ML experience required. Focus on strategic implementation and operational deployment.
          </p>
          <div className="cta-buttons">
            <Link to="/get-playbook" className="btn btn-primary">Get Detailed Curriculum & Fees</Link>
            <Link to="/info-session" className="btn btn-secondary">Join Next Batch Info Session</Link>
            <Link to="/transforming-finance" className="btn btn-secondary">Transforming Finance (21-Hour Programme)</Link>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PLAYBOOK_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
