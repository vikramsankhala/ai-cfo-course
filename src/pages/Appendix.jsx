import { useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import {
  appendixMeta,
  dailySchedules,
  homeworkPrep,
  flexibilityNotes,
  resourcesByDay,
  getActivityType,
} from '../data/dailyScheduleAppendix'

const ACTIVITY_COLORS = {
  lecture: '#38bdf8',
  lab: '#34d399',
  discussion: '#818cf8',
  break: '#94a3b8',
  lunch: '#64748b',
  demo: '#f59e0b',
  assessment: '#ec4899',
  setup: '#6366f1',
  activity: '#0ea5e9',
}

function computeActivityStats() {
  const counts = {}
  dailySchedules.forEach((day) => {
    day.blocks.forEach((block) => {
      const type = getActivityType(block.title, block.details)
      counts[type] = (counts[type] || 0) + 1
    })
  })
  return Object.entries(counts).map(([name, count]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value: count,
    color: ACTIVITY_COLORS[name] || ACTIVITY_COLORS.activity,
  }))
}

function computeBlocksPerDay() {
  return dailySchedules.map((d) => ({
    day: `Day ${d.day}`,
    blocks: d.blocks.length,
    instruction: d.blocks.filter((b) => {
      const t = getActivityType(b.title, b.details)
      return !['break', 'lunch'].includes(t)
    }).length,
  }))
}

export default function Appendix() {
  const [expandedDay, setExpandedDay] = useState(1)
  const [expandedBlock, setExpandedBlock] = useState(null)

  const activityData = computeActivityStats()
  const blocksPerDay = computeBlocksPerDay()

  return (
    <div className="page appendix-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{appendixMeta.title}</h1>

          <div className="card overview-card appendix-meta">
            <h2>{appendixMeta.course}</h2>
            <div className="appendix-meta-grid">
              <div className="meta-item">
                <span className="meta-label">Instructor</span>
                <span className="meta-value">{appendixMeta.instructor}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Format</span>
                <span className="meta-value">{appendixMeta.format}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{appendixMeta.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Date Prepared</span>
                <span className="meta-value">{appendixMeta.datePrepared}</span>
              </div>
            </div>
          </div>

          <div className="viz-grid appendix-viz">
            <div className="card viz-card">
              <h3>Activity Type Distribution</h3>
              <p className="muted">Breakdown of 10-minute blocks across all 5 days</p>
              <div className="chart-container" style={{ height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={activityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {activityData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ background: '#1e293b', border: '1px solid #334155' }}
                      formatter={(value) => [`${value} blocks`, 'Count']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="card viz-card">
              <h3>10-Minute Blocks per Day</h3>
              <p className="muted">Total blocks vs. instruction blocks (excl. breaks & lunch)</p>
              <div className="chart-container" style={{ height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={blocksPerDay} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                    <Legend />
                    <Bar dataKey="blocks" fill="#38bdf8" name="Total Blocks" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="instruction" fill="#34d399" name="Instruction" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Daily Schedules (10-Minute Blocks)</h2>
            <p className="muted">
              Expand each day to view the detailed 10-minute-by-10-minute schedule. Click a block to see full details.
            </p>

            {dailySchedules.map((dayData) => (
              <div key={dayData.day} className="appendix-day-card">
                <button
                  className="appendix-day-header"
                  onClick={() => setExpandedDay(expandedDay === dayData.day ? null : dayData.day)}
                  aria-expanded={expandedDay === dayData.day}
                >
                  <span className="day-badge">Day {dayData.day}</span>
                  <h3>{dayData.title}</h3>
                  <span className="expand-icon">{expandedDay === dayData.day ? '▼' : '▶'}</span>
                </button>

                {expandedDay === dayData.day && (
                  <div className="appendix-day-content">
                    <div className="session-labels">
                      <span className="session-tag morning">{dayData.morningSession}</span>
                      <span className="session-tag afternoon">{dayData.afternoonSession}</span>
                    </div>

                    <div className="timeline-blocks">
                      {dayData.blocks.map((block, idx) => {
                        const type = getActivityType(block.title, block.details)
                        const isLunch = type === 'lunch'
                        const isBreak = type === 'break'
                        const isExpanded = expandedBlock === `${dayData.day}-${idx}`

                        return (
                          <div
                            key={idx}
                            className={`timeline-block ${type} ${isLunch ? 'lunch' : ''} ${isBreak ? 'break' : ''}`}
                          >
                            <button
                              className="timeline-block-header"
                              onClick={() =>
                                setExpandedBlock(isExpanded ? null : `${dayData.day}-${idx}`)
                              }
                            >
                              <span className="block-time">{block.time}</span>
                              <span className="block-title">{block.title}</span>
                              {block.details.length > 0 && (
                                <span className="block-toggle">{isExpanded ? '−' : '+'}</span>
                              )}
                            </button>
                            {isExpanded && block.details.length > 0 && (
                              <ul className="block-details">
                                {block.details.map((d, i) => (
                                  <li key={i}>{d}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="viz-grid appendix-viz">
            <div className="card overview-card">
              <h2>Homework & Pre-Session Preparation</h2>
              <div className="homework-list">
                {homeworkPrep.map((hp, i) => (
                  <div key={i} className="homework-item">
                    <span className="homework-when">{hp.when}</span>
                    <ul>
                      {hp.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="card overview-card">
              <h2>Schedule Flexibility Notes</h2>
              <div className="flexibility-grid">
                <div className="flex-section">
                  <h4>Timing Adjustments</h4>
                  <ul>
                    {flexibilityNotes.timing.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-section">
                  <h4>Engagement Strategies</h4>
                  <ul>
                    {flexibilityNotes.engagement.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-section">
                  <h4>Technical Considerations</h4>
                  <ul>
                    {flexibilityNotes.technical.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-section">
                  <h4>Assessment Integration</h4>
                  <ul>
                    {flexibilityNotes.assessment.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Resources by Day</h2>
            <p className="muted">Materials and templates referenced in the schedule</p>
            <div className="resources-by-day">
              {Object.entries(resourcesByDay).map(([day, items]) => (
                <div key={day} className="resource-day">
                  <h4>Day {day}</h4>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card overview-card appendix-footer">
            <p className="muted">
              Document Prepared By: {appendixMeta.instructor} | Date: {appendixMeta.datePrepared} |
              Version: 1.0 (Appendix A - Daily Schedules)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
