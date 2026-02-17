import { ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts'

const daySchedule = [
  {
    day: 'Day 1',
    sessions: [
      { time: '09:00–10:00', session: '1.1a: Fundamentals', activity: 'Icebreaker & Evolution: Pre-concept poll, lecture on Excel macros to agentic systems', bloom: 'Remember' },
      { time: '10:00–11:00', session: '1.1b: Value & Risk', activity: 'GenAI, LLMs, hallucinations. Netflix/Amazon case vignettes', bloom: 'Understand' },
      { time: '11:00–12:00', session: '1.2a: Use Case Taxonomy', activity: 'Mapping high-value vs low-value interventions', bloom: 'Analyze' },
      { time: '12:00–13:00', session: 'Lunch', activity: 'Networking and informal discussion', bloom: '-' },
      { time: '13:00–14:00', session: '1.2b: Prioritization', activity: 'Impact vs Effort matrix – Quick Wins', bloom: 'Evaluate' },
      { time: '14:00–15:00', session: '2.1a: AI for FP&A', activity: 'Traditional vs AI-augmented forecasting', bloom: 'Understand' },
      { time: '15:00–16:30', session: '2.1b: Forecasting Lab', activity: 'Hands-on: 12-month baseline forecast from sample data', bloom: 'Apply' },
      { time: '16:30–17:00', session: 'Wrap-up', activity: 'Exit ticket: Critique of AI assumptions', bloom: 'Analyze' },
    ],
  },
  {
    day: 'Day 2',
    sessions: [
      { time: '09:00–10:30', session: '2.2a: Management Reporting', activity: 'AI to draft variance commentary', bloom: 'Create' },
      { time: '10:30–12:00', session: '2.2b: Board Pack Lab', activity: '3-slide board pack (KPIs, narrative, outlook)', bloom: 'Create' },
      { time: '12:00–13:00', session: 'Lunch', activity: 'Demo: AI-generated P&L commentary', bloom: '-' },
      { time: '13:00–14:30', session: '2.3a: Risk & Controls', activity: 'AI in fraud detection, covenant monitoring', bloom: 'Analyze' },
      { time: '14:30–16:00', session: '2.3b: Anomaly Lab', activity: 'Flag unusual patterns in transaction logs', bloom: 'Apply' },
      { time: '16:00–17:00', session: 'Mini-Project: Risk Workflow', activity: 'Covenant breach management commentary', bloom: 'Create' },
    ],
  },
  {
    day: 'Day 3',
    sessions: [
      { time: '09:00–10:30', session: '2.4a: Prompt Engineering', activity: 'R-C-T-C-F framework', bloom: 'Apply' },
      { time: '10:30–12:00', session: '2.4b: Engineering Lab', activity: 'Testing prompts, diagnosing failures', bloom: 'Analyze' },
      { time: '12:00–13:00', session: 'Lunch', activity: 'Peer review of prompt libraries', bloom: '-' },
      { time: '13:00–15:00', session: '2.4c: Workflow Design', activity: 'Map manual process, insert AI touchpoints', bloom: 'Create' },
      { time: '15:00–17:00', session: 'Module 1–2 Integration', activity: 'Formal quiz: Mixed-format assessment', bloom: 'Analyze' },
    ],
  },
  {
    day: 'Day 4',
    sessions: [
      { time: '09:00–11:00', session: '2.5a: Tool Evaluation', activity: 'Live comparison of finance copilots', bloom: 'Evaluate' },
      { time: '11:00–12:00', session: '2.5b: Build vs Buy', activity: 'Custom vs vendor solutions debate', bloom: 'Analyze' },
      { time: '12:00–13:00', session: 'Lunch', activity: 'RFP templates for AI tools', bloom: '-' },
      { time: '13:00–14:30', session: 'Governance Lab', activity: 'Risk matrix and approval workflow', bloom: 'Evaluate' },
      { time: '14:30–17:00', session: 'Capstone Development', activity: 'Team build: AI Operating System blueprint', bloom: 'Create' },
    ],
  },
  {
    day: 'Day 5',
    sessions: [
      { time: '09:00–11:00', session: 'Final Refinement', activity: 'Improve workflows based on feedback', bloom: 'Evaluate' },
      { time: '11:00–12:00', session: 'Strategy Reflection', activity: 'Connecting AI to finance transformation', bloom: 'Understand' },
      { time: '12:00–13:00', session: 'Lunch', activity: 'Capstone preparation', bloom: '-' },
      { time: '13:00–16:00', session: 'Capstone Presentations', activity: 'Executive defense to the "Board"', bloom: 'Create' },
      { time: '16:00–17:00', session: 'Post-Test & Graduation', activity: 'Summative assessment and evaluations', bloom: 'Evaluate' },
    ],
  },
]

const hoursPerDay = [
  { day: 'Day 1', hours: 7, instruction: 6 },
  { day: 'Day 2', hours: 7, instruction: 6 },
  { day: 'Day 3', hours: 7, instruction: 6 },
  { day: 'Day 4', hours: 7, instruction: 6 },
  { day: 'Day 5', hours: 7, instruction: 6 },
]

export default function Schedule() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">5-Day Course Schedule</h1>
          
          <div className="card overview-card" style={{ marginBottom: 32 }}>
            <h3>Daily Schedule Overview</h3>
            <div className="chart-container" style={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={hoursPerDay} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="day" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                  <Bar dataKey="hours" fill="#38bdf8" name="Total Hours" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="instruction" stroke="#34d399" name="Instruction" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {daySchedule.map(({ day, sessions }) => (
            <div key={day} className="card schedule-day">
              <h2>{day}</h2>
              <div className="schedule-table">
                <div className="schedule-header">
                  <span>Time</span>
                  <span>Session</span>
                  <span>Activity</span>
                  <span>Bloom Level</span>
                </div>
                {sessions.map((s, i) => (
                  <div key={i} className={`schedule-row ${s.session === 'Lunch' ? 'lunch' : ''}`}>
                    <span className="time">{s.time}</span>
                    <span className="session">{s.session}</span>
                    <span className="activity">{s.activity}</span>
                    <span className="bloom">{s.bloom}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
