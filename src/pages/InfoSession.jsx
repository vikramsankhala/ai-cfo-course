import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER, WHATSAPP_INFO_SESSION_MSG } from '../config/leads'

export default function InfoSession() {
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
              <h1 className="section-title">You're Registered!</h1>
              <p className="lead-success-text">
                We'll send you the Zoom link and details for the next info session.
              </p>
              <div className="lead-success-actions">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_INFO_SESSION_MSG)}`}
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
          <h1 className="section-title">Join Next Batch Info Session</h1>
          <p className="muted" style={{ marginBottom: 32, maxWidth: 560 }}>
            Free webinar or group Zoom. No commitment—learn about the programme, ask questions, and meet the instructor.
          </p>

          <div className="lead-capture-grid" style={{ maxWidth: 520 }}>
            <div className="card lead-form-card">
              <form
                name="info-session-lead"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="lead-form"
              >
                <input type="hidden" name="form-name" value="info-session-lead" />
                <input type="hidden" name="programme" value="AI for CFOs" />
                <input type="hidden" name="source" value="info_session" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div className="form-row">
                  <input type="text" name="name" placeholder="Full Name" required />
                  <input type="email" name="email" placeholder="Work Email" required />
                </div>
                <div className="form-row">
                  <input type="tel" name="phone" placeholder="WhatsApp Number" required />
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                  {submitting ? 'Registering...' : 'Register for Info Session'}
                </button>
              </form>
            </div>

            <p className="muted" style={{ marginTop: 16 }}>
              Or <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_INFO_SESSION_MSG)}`} target="_blank" rel="noopener noreferrer">chat on WhatsApp</a> to register.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
