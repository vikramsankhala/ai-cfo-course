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
  programmeMeta,
  activityLegend,
  daysOverview,
  detailedSchedule,
  readingList,
  technologyTools,
  facilitatorNotes,
} from '../data/transformingFinanceSchedule'

function getActivityType(typeStr) {
  const t = (typeStr || '').toUpperCase()
  if (t.includes('LUNCH') || t.includes('BREAK')) return 'Break'
  if (t.includes('LECTURE') || t.includes('RESEARCH')) return 'Lecture / Research'
  if (t.includes('PROJECT') || t.includes('BRIEFING')) return 'Project Work'
  if (t.includes('EXERCISE') || t.includes('WORKSHOP')) return 'Exercise / Workshop'
  if (t.includes('ROLE PLAY') || t.includes('SIMULATION')) return 'Role Play / Simulation'
  if (t.includes('DISCUSSION') || t.includes('Q&A') || t.includes('REFLECTION') || t.includes('FACILITATED')) return 'Discussion / Q&A'
  if (t.includes('CASE STUDY')) return 'Case Study'
  return 'Lecture / Research'
}

function computeActivityStats() {
  const counts = {}
  detailedSchedule.forEach((day) => {
    day.blocks.forEach((block) => {
      const type = getActivityType(block.type || block.topic)
      counts[type] = (counts[type] || 0) + 1
    })
  })
  const colors = {
    'Lecture / Research': '#38bdf8',
    'Project Work': '#34d399',
    'Exercise / Workshop': '#818cf8',
    'Role Play / Simulation': '#f59e0b',
    'Discussion / Q&A': '#ec4899',
    'Case Study': '#0ea5e9',
    'Break': '#94a3b8',
  }
  return Object.entries(counts).map(([name, value]) => ({
    name,
    value,
    color: colors[name] || '#64748b',
  }))
}

export default function TransformingFinance() {
  const [expandedDay, setExpandedDay] = useState(null)
  const activityData = computeActivityStats()

  const modulesPerDay = daysOverview.map((d) => ({
    day: `Day ${d.day}`,
    modules: d.modules.length,
    hours: d.hours,
  }))

  return (
    <div className="page transforming-finance-page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">{programmeMeta.title}</h1>
          <p className="programme-subtitle">{programmeMeta.subtitle}</p>
          <div className="topic-pills">
            {programmeMeta.topics.map((t, i) => (
              <span key={i} className="topic-pill">{t}</span>
            ))}
          </div>

          <div className="card overview-card tf-hero">
            <div className="tf-hero-grid">
              <div>
                <h2>Programme at a Glance</h2>
                <p><strong>{programmeMeta.duration}</strong> over {programmeMeta.format}</p>
                <p className="muted">08:00 – 16:30 each day</p>
              </div>
              <div className="activity-legend">
                <h4>Activity Types</h4>
                {activityLegend.map((a, i) => (
                  <span key={i} className="legend-item" style={{ color: a.color }}>
                    {a.icon} {a.type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="viz-grid">
            <div className="card viz-card">
              <h3>Activity Type Distribution</h3>
              <div className="chart-container" style={{ height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={activityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={95}
                      paddingAngle={2}
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                    >
                      {activityData.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="card viz-card">
              <h3>Modules & Hours per Day</h3>
              <div className="chart-container" style={{ height: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={modulesPerDay} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="day" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #334155' }} />
                    <Bar dataKey="modules" fill="#38bdf8" name="Modules" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="hours" fill="#34d399" name="Hours" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {daysOverview.map((day) => (
            <div key={day.day} className="card tf-day-card">
              <button
                className="tf-day-header"
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                aria-expanded={expandedDay === day.day}
              >
                <span className="day-badge">Day {day.day}</span>
                <h2>{day.title}</h2>
                <span className="day-meta">{day.hours} hours · {day.modules.length} modules</span>
                <span className="expand-icon">{expandedDay === day.day ? '▼' : '▶'}</span>
              </button>

              {expandedDay === day.day && (
                <div className="tf-day-content">
                  <div className="tf-modules">
                    <h4>Modules</h4>
                    <ul>
                      {day.modules.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tf-deliverable">
                    <h4>Day {day.day} Deliverable</h4>
                    <p><strong>{day.deliverable}</strong></p>
                    <p className="muted">{day.deliverableDetail}</p>
                  </div>

                  <h4>15-Minute Schedule</h4>
                  <div className="tf-schedule-table">
                    <div className="tf-schedule-header">
                      <span>Time</span>
                      <span>Duration</span>
                      <span>Topic / Activity</span>
                      <span>Type</span>
                    </div>
                    {detailedSchedule
                      .find((d) => d.day === day.day)
                      ?.blocks.map((block, i) => (
                        <div
                          key={i}
                          className={`tf-schedule-row ${block.type === 'Break' ? 'break' : ''}`}
                        >
                          <span className="time">{block.time}</span>
                          <span className="duration">{block.duration}</span>
                          <span className="topic">{block.topic}</span>
                          <span className="type">{block.type}</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="viz-grid">
            <div className="card overview-card">
              <h2>Technology Tools Referenced</h2>
              <div className="tools-grid">
                {Object.entries(technologyTools).map(([category, tools]) => (
                  <div key={category} className="tools-category">
                    <h4>{category}</h4>
                    <div className="tools-list">
                      {tools.map((t, i) => (
                        <span key={i} className="tool-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card overview-card">
              <h2>Key Research & Reading List</h2>
              <ul className="reading-list">
                {readingList.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card overview-card">
            <h2>Facilitator Guidance Notes</h2>
            <div className="facilitator-grid">
              <div className="facilitator-item">
                <span className="label">Prerequisites</span>
                <span>{facilitatorNotes.prerequisites}</span>
              </div>
              <div className="facilitator-item">
                <span className="label">Group Size</span>
                <span>{facilitatorNotes.groupSize}</span>
              </div>
              <div className="facilitator-item">
                <span className="label">Technology</span>
                <span>{facilitatorNotes.technology}</span>
              </div>
              <div className="facilitator-item">
                <span className="label">Pre-Work</span>
                <span>{facilitatorNotes.preWork}</span>
              </div>
              <div className="facilitator-item">
                <span className="label">Assessment</span>
                <span>{facilitatorNotes.assessment}</span>
              </div>
              <div className="facilitator-item">
                <span className="label">Post-Programme</span>
                <span>{facilitatorNotes.postProgramme}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
