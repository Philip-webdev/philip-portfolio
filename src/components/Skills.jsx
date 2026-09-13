export default function Skills() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Python', 'Flask'],
    },
    {
      title: 'Database & Search',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Vector Search', 'Pinecone', 'RAG Pipelines'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Linux', 'CI/CD'],
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <p className="section-label">Skills</p>
        <div className="skills-header">
          <h2 className="section-title">
            My tech stack.
          </h2>
          <p className="section-subtitle">
            Technologies I use to build production-grade applications, from
            frontend interfaces to backend infrastructure.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-focus">
          <h3 className="focus-title">Specializations</h3>
          <div className="focus-grid">
            <div className="focus-card">
              <div className="focus-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
                </svg>
              </div>
              <h4>RAG & LLM Integration</h4>
              <p>Building retrieval-augmented generation systems with vector search for intelligent tutoring and document Q&A.</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h4>Real-time Web Apps</h4>
              <p>WebSocket-based collaborative tools, live dashboards, and event-driven architectures.</p>
            </div>
            <div className="focus-card">
              <div className="focus-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h4>Payment Integrations</h4>
              <p>Flutterwave, Paystack, virtual accounts, and campus fintech payment flows.</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .skills {
          background: var(--bg-primary);
        }
        .skills-header {
          margin-bottom: 48px;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 60px;
        }
        .skill-group {
          background: var(--bg-secondary);
          border-radius: var(--radius);
          padding: 28px;
          border: 1px solid var(--border);
        }
        .skill-group-title {
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          background: var(--bg-primary);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .skill-tag:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .skills-focus {
          padding-top: 20px;
        }
        .focus-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 24px;
          color: var(--text-primary);
        }
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .focus-card {
          background: var(--bg-secondary);
          border-radius: var(--radius);
          padding: 28px;
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .focus-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
        }
        .focus-icon {
          width: 44px;
          height: 44px;
          background: var(--accent-light);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: var(--accent);
        }
        .focus-card h4 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text-primary);
        }
        .focus-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .focus-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
