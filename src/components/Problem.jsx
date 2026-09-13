export default function Problem() {
  return (
    <section className="problem">
      <div className="container">
        <div className="problem__grid">
          <div className="problem__left">
            <p className="label">Thesis</p>
            <h2 className="problem__title">
              Africa's campus economy is<br />
              <span>$40B+ and 90% runs on cash.</span>
            </h2>
          </div>
          <div className="problem__right">
            <div className="problem__item">
              <span className="problem__num">01</span>
              <div>
                <h3>The Problem</h3>
                <p>70% of Africa's population is under 30. Campus economies — the largest concentration of young consumers — lack digital payment infrastructure, food credit systems, and AI-powered learning tools.</p>
              </div>
            </div>
            <div className="problem__item">
              <span className="problem__num">02</span>
              <div>
                <h3>The Opportunity</h3>
                <p>Mobile money adoption is at 55% and growing. Students are digital natives forced into analog systems. The gap between demand and infrastructure is a generational opportunity.</p>
              </div>
            </div>
            <div className="problem__item">
              <span className="problem__num">03</span>
              <div>
                <h3>My Approach</h3>
                <p>Build vertical SaaS and fintech products tailored to campus ecosystems — payments, food credits, and AI tutoring. Win the campus, win the generation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .problem {
          padding: 100px 0;
          background: var(--bg-dark);
          color: var(--text-inverse);
        }
        .problem__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .problem__title {
          font-size: 2.4rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .problem__title span { color: var(--accent); }
        .problem__item {
          display: flex;
          gap: 20px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border-dark);
        }
        .problem__item:first-child { border-top: 1px solid var(--border-dark); }
        .problem__num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent);
          padding-top: 4px;
          flex-shrink: 0;
        }
        .problem__item h3 {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .problem__item p {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
        }
        @media (max-width: 768px) {
          .problem { padding: 60px 0; }
          .problem__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .problem__title { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  )
}
