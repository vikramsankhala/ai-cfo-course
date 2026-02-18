import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER, WHATSAPP_PLAYBOOK_MSG } from '../config/leads'

export default function LeadCapture() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.target
    const formData = new FormData(form)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })
      if (response.ok) {
        setSubmitted(true)
      } else {
        throw new Error('Submission failed')
      }
    } catch (err) {
      setSubmitted(false)
      alert('Something went wrong. Please try again or contact us on WhatsApp.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="page">
        <section className="section">
          <div className="container">
            <div className="card lead-success-card">
              <h1 className="section-title">Thank You!</h1>
              <p className="lead-success-text">
                Your request has been received. We'll send the <strong>CFO AI Playbook</strong> and detailed curriculum to your email shortly.
              </p>
              <p className="muted">A programme advisor will reach out within 24 hours.</p>
              <div className="lead-success-actions">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PLAYBOOK_MSG)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Chat on WhatsApp
                </a>
                <Link to="/" className="btn btn-secondary">Back to Home</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Get the CFO AI Playbook</h1>
          <p className="muted" style={{ marginBottom: 32, maxWidth: 560 }}>
            Download our detailed curriculum, fees, and 5-day schedule. No spam—we'll send the playbook and follow up once.
          </p>

          <div className="lead-capture-grid">
            <div className="card lead-form-card">
              <form
                name="cfo-ai-lead"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="lead-form"
              >
                <input type="hidden" name="form-name" value="cfo-ai-lead" />
                <input type="hidden" name="programme" value="AI for CFOs" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div className="form-row">
                  <input type="text" name="name" placeholder="Full Name" required />
                  <input type="email" name="email" placeholder="Work Email" required />
                </div>
                <div className="form-row">
                  <input type="tel" name="phone" placeholder="WhatsApp Number" required />
                  <input type="text" name="city" placeholder="City" />
                </div>
                <div className="form-row">
                  <select name="role" required>
                    <option value="">Current Role</option>
                    <option value="CFO">CFO</option>
                    <option value="Head of Finance / VP Finance">Head of Finance / VP Finance</option>
                    <option value="Controller / Finance Manager">Controller / Finance Manager</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Other">Other</option>
                  </select>
                  <select name="company_size">
                    <option value="">Company Size</option>
                    <option value="0-50">0-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
                <div className="form-row">
                  <select name="goal">
                    <option value="">Main goal with AI</option>
                    <option value="Reduce manual work">Reduce manual work</option>
                    <option value="Better forecasting">Better forecasting</option>
                    <option value="Board-level insights">Board-level insights</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Get CFO AI Playbook'}
                </button>
              </form>
            </div>

            <div className="card lead-sidebar">
              <h3>Other Ways to Connect</h3>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PLAYBOOK_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                Chat on WhatsApp
              </a>
              <p className="muted small">Speak with a programme advisor</p>

              <hr className="lead-divider" />

              <h3>Join Info Session (Free)</h3>
              <Link to="/info-session" className="btn btn-secondary btn-block">
                Next Batch Info Session
              </Link>
              <p className="muted small">Webinar or group Zoom—no commitment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
