import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WHATSAPP_NUMBER } from '../config/leads'

const FLYER_PDF = '/transforming-finance-flyer.pdf'
const WHATSAPP_FLYER_MSG = "Hi, I've downloaded the Transforming Finance with AI flyer and would like to learn more."

export default function FlyerDownload() {
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
                Your information has been received. Download the <strong>Transforming Finance with AI</strong> flyer now.
              </p>
              <a
                href={FLYER_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                download="Transforming-Finance-with-AI-Flyer.pdf"
              >
                Download Flyer (PDF)
              </a>
              <p className="muted" style={{ marginTop: 16 }}>
                A programme advisor will reach out within 24 hours.
              </p>
              <div className="lead-success-actions">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_FLYER_MSG)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  Chat on WhatsApp
                </a>
                <Link to="/transforming-finance" className="btn btn-secondary">View Programme</Link>
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
          <h1 className="section-title">Get the Transforming Finance with AI Flyer</h1>
          <p className="muted" style={{ marginBottom: 32, maxWidth: 560 }}>
            Enter your details to download the flyer. We'll send you the PDF and follow up with programme information.
          </p>

          <div className="lead-capture-grid lead-form-wide">
            <div className="card lead-form-card">
              <form
                name="flyer-lead"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="lead-form"
              >
                <input type="hidden" name="form-name" value="flyer-lead" />
                <input type="hidden" name="source" value="flyer_download" />
                <input type="hidden" name="resource" value="Transforming Finance with AI Flyer" />
                <p className="hidden">
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div className="form-row">
                  <input type="text" name="name" placeholder="Full Name" required />
                  <input type="email" name="email" placeholder="Work Email" required />
                </div>
                <div className="form-row">
                  <input type="tel" name="phone" placeholder="WhatsApp Number" required />
                  <input type="text" name="company" placeholder="Company (optional)" />
                </div>
                <div className="form-row">
                  <select name="role">
                    <option value="">Current Role (optional)</option>
                    <option value="CFO">CFO</option>
                    <option value="Head of Finance / VP Finance">Head of Finance / VP Finance</option>
                    <option value="Controller / Finance Manager">Controller / Finance Manager</option>
                    <option value="Treasury">Treasury</option>
                    <option value="Analyst">Analyst</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Get Flyer'}
                </button>
              </form>
            </div>

            <div className="card lead-sidebar">
              <h3>What You'll Get</h3>
              <p className="muted small">The Transforming Finance with AI flyer includes:</p>
              <ul className="muted small">
                <li>21-hour programme overview</li>
                <li>Cash forecasting, FX risk, governance</li>
                <li>Agentic AI & ERP/EPM integration</li>
              </ul>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_FLYER_MSG)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ marginTop: 16 }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
