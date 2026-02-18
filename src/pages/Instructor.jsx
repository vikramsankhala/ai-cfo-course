export default function Instructor() {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Instructor</h1>

          <div className="card instructor-card about-instructor">
            <h2>About the Instructor</h2>
            <div className="instructor-header">
              <div className="instructor-photo-wrap">
                <img
                  src="/instructor-photo.png"
                  alt="Vikram Singh Sankhala"
                  className="instructor-photo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling?.classList?.add('show')
                  }}
                />
                <div className="instructor-avatar fallback">VS</div>
              </div>
              <div className="instructor-info">
                <h2>Vikram Singh Sankhala</h2>
                <p className="instructor-credentials">IIT · IIM · Ex IRS · FRM · Fin.Engr</p>
                <p className="instructor-title">Course Instructor</p>
                <div className="instructor-links">
                  <a href="https://www.goodreads.com/author/list/36475998.vikram_sankhala" target="_blank" rel="noopener noreferrer" className="instructor-link">
                    Goodreads
                  </a>
                  <span className="link-sep">·</span>
                  <a href="https://www.slideshare.net/vikramsankhala" target="_blank" rel="noopener noreferrer" className="instructor-link">
                    SlideShare
                  </a>
                </div>
              </div>
            </div>
            <div className="instructor-bio">
              <p>Technical founder with expertise in AI/ML, quantum computing, software architecture, and finance technology. Author of educational works on Natural Language Processing, Big Data, Applied Analytics, and Python programming.</p>
            </div>
            <h3>Experience</h3>
            <ul>
              <li>Veteran CFO and Finance Leader in Global Organisations</li>
              <li>Founder of SOLINEXTA TECHNOLOGIES PRIVATE LIMITED</li>
              <li>Former SAP engineer (ECS-CAE-DM-AI-ORG)</li>
              <li>Deep technical expertise in Python, ML frameworks, cloud platforms</li>
              <li>Strong business acumen: fundraising, product design, startup strategy</li>
              <li>Educational content creator with focus on practical, hands-on learning</li>
            </ul>

            <h3>Published Works</h3>
            <p className="muted">Author of lecture notes and educational materials on data science, analytics, and technology. View full bibliography on <a href="https://www.goodreads.com/author/list/36475998.vikram_sankhala" target="_blank" rel="noopener noreferrer">Goodreads</a>.</p>
            <ul className="published-works">
              <li>Natural Language Processing: Lecture Notes</li>
              <li>Big Data: Lecture Notes</li>
              <li>Applied Analytics: Lecture Slides</li>
              <li>Sales Analytics & Customer Analytics: Lecture Slides</li>
              <li>Python Step by Step (Levels 1–3)</li>
              <li>Data Science Step by Step</li>
              <li>IoT for Managers: Lecture Notes</li>
            </ul>

            <h3>Presentations & Talks</h3>
            <p className="muted">65+ presentations on finance, technology, and analytics. Explore on <a href="https://www.slideshare.net/vikramsankhala" target="_blank" rel="noopener noreferrer">SlideShare</a>.</p>
            <ul>
              <li>Primer on major data mining algorithms</li>
              <li>Blockchain concept explained</li>
              <li>Transfer pricing & tax issues in M&A</li>
              <li>An Introduction to Risk</li>
              <li>Asset Liability Management</li>
              <li>GST simplified</li>
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Instructor Preparation Checklist</h2>
            <ul className="checklist">
              <li>Review all sample datasets and pre-build reference workflows</li>
              <li>Prepare "broken" scenarios for diagnostic exercises (unrealistic forecasts, poor prompts)</li>
              <li>Set up AI tool accounts and test all demonstrations</li>
              <li>Prepare assessment forms (Google Forms or equivalent) for quizzes</li>
              <li>Load all rubrics into grading system</li>
              <li>Test all resource links and ensure accessibility</li>
              <li>Conduct dry-run of Day 1 sessions with teaching assistant</li>
              <li>Prepare CFO Copilot prompt library (downloadable templates)</li>
            </ul>
          </div>

          <div className="card overview-card">
            <h2>Document Information</h2>
            <p><strong>Prepared By:</strong> Vikram Singh Sankhala</p>
            <p><strong>Date:</strong> February 17, 2026</p>
            <p><strong>Version:</strong> 1.0</p>
          </div>
        </div>
      </section>
    </div>
  )
}
