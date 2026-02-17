import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/overview', label: 'Overview' },
  { path: '/modules', label: 'Modules' },
  { path: '/schedule', label: 'Schedule' },
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
        <div className="container">
          <p>AI for CFOs: Strategic and Operational Mastery &copy; 2026 | Instructor: Vikram Singh Sankhala</p>
        </div>
      </footer>
    </div>
  )
}
