export default function Vision() {
  return (
    <section className="vision">
      <div className="container">
        <p className="label">Vision</p>
        <h2 className="vision__title">
          The next 12 months.
        </h2>
        <div className="vision__grid">
          <div className="vision__item">
            <span className="vision__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </span>
            <h3>Scale kwestpay</h3>
            <p>Expand campus payment infrastructure to 5+ universities. Target 5,000 active users and process $100K+ in campus transactions.</p>
          </div>
          <div className="vision__item">
            <span className="vision__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/></svg>
            </span>
            <h3>Grow RiikkoAI</h3>
            <p>Launch enterprise tier for universities. Target 1,000+ active users with RAG-powered tutoring and research assistance.</p>
          </div>
          <div className="vision__item">
            <span className="vision__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <h3>Expand nekstpei</h3>
            <p>Roll out food credit system to 3 cities. Partner with 50+ food vendors for blockchain-backed transparent pricing.</p>
          </div>
          <div className="vision__item">
            <span className="vision__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </span>
            <h3>Raise pre-seed</h3>
            <p>Seek pre-seed funding to accelerate product development, expand the team, and scale across West African campuses.</p>
          </div>
        </div>
      </div>

      <style>{`
        .vision {
          padding: 100px 0;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .vision__title {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 48px;
        }
        .vision__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .vision__item {
          padding: 28px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
        }
        .vision__item:hover {
          border-color: var(--accent);
          box-shadow: var(--shadow);
        }
        .vision__icon {
          width: 40px;
          height: 40px;
          background: var(--accent-light);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          margin-bottom: 16px;
        }
        .vision__item h3 {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .vision__item p {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        @media (max-width: 768px) {
          .vision { padding: 60px 0; }
          .vision__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
