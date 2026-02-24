import { Link, useLocation } from 'react-router-dom'
import { WHATSAPP_NUMBER, WHATSAPP_PLAYBOOK_MSG } from '../config/leads'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/overview', label: 'Overview' },
  { path: '/modules', label: 'Modules' },
  { path: '/schedule', label: 'Schedule' },
  { path: '/transforming-finance', label: 'Transforming Finance' },
  { path: '/appendix', label: 'Appendix' },
  { path: '/capstone', label: 'Capstone' },
  { path: '/resources', label: 'Resources' },
  { path: '/governance', label: 'Governance' },
  { path: '/question-bank', label: 'Question Bank' },
  { path: '/instructor', label: 'Instructor' },
]

export default function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-icon">AI</span>
            <span className="logo-text">AI for CFOs</span>
          </Link>
          <nav className="nav">
            <Link to="/get-playbook" className="nav-link nav-cta">
              Get Playbook
            </Link>
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <button className="mobile-menu-btn" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="container footer-inner">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PLAYBOOK_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp footer-whatsapp"
          >
            Chat on WhatsApp with Programme Advisor
          </a>
          <p>AI for CFOs: Strategic and Operational Mastery &copy; 2026 | Instructor: Vikram Singh Sankhala</p>
        </div>
      </footer>
    </div>
  )
}
