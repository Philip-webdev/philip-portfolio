export default function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="container">
        <div className="founder__grid">
          <div className="founder__left">
            <p className="label">Founder</p>
            <div className="founder__name-row">
              <div className="founder__photo">
                <img src="/philip.jpeg" alt="Philip Bankole" />
              </div>
              <div>
                <h2 className="founder__title">Philip Bankole</h2>
                <p className="founder__role">Developer, Engineer & Builder</p>
              </div>
            </div>
            <div className="founder__bio">
              <p>
                Bánkọ́lé (Builder) was recognized in July 2025 by the African
                Stable-coin Network for thoughtful leadership on the digital
                economy of Africa. He is a developer & engineer focused on
                building and shipping both software and hardware solutions.
              </p>
              <p>
                He has co-facilitated a program that helped equip young Africans
                with technology skills across both software and hardware
                engineering. He also ships SDG-focused startups spanning EdTech,
                FinTech, and AI.
              </p>
              <p>
                He is an activist, writer and speaker on next-gen software
                solutions as well as the role of AI in engineering.
              </p>
            </div>
          </div>

          <div className="founder__right">
            <div className="founder__rec">
              <div className="founder__rec-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>
              </div>
              <div>
                <p className="founder__rec-title">African Stable-coin Network</p>
                <p className="founder__rec-desc">Recognized for thoughtful leadership on the digital economy of Africa</p>
                <p className="founder__rec-date">July 2025</p>
              </div>
            </div>

            <div className="founder__stats">
              <div className="founder__stat">
                <span className="founder__stat-num">$16.6K</span>
                <span className="founder__stat-label">Revenue Y1<br/>kwestpay (bootstrapped)</span>
              </div>
              <div className="founder__stat">
                <span className="founder__stat-num">5,000+</span>
                <span className="founder__stat-label">Users across<br/>all products</span>
              </div>
              <div className="founder__stat">
                <span className="founder__stat-num">6,422+</span>
                <span className="founder__stat-label">Transactions<br/>processed</span>
              </div>
            </div>

            <div className="founder__stack">
              <p className="founder__stack-label">Stack</p>
              <div className="founder__stack-items">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'Python', 'FastAPI', 'RAG', 'Vector Search', 'Blockchain'].map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .founder {
          padding: 100px 0;
          background: var(--bg-card);
          border-bottom: 1px solid var(--border);
        }
        .founder__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .founder__title {
          font-size: 2.6rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }
        .founder__name-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }
        .founder__photo {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--accent);
          flex-shrink: 0;
        }
        .founder__photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .founder__role {
          font-size: 1rem;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 28px;
        }
        .founder__bio p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 14px;
        }
        .founder__rec {
          display: flex;
          gap: 16px;
          padding: 24px;
          background: var(--accent-light);
          border: 1px solid rgba(232,115,74,0.2);
          border-radius: var(--radius);
          margin-bottom: 32px;
        }
        .founder__rec-icon {
          width: 44px;
          height: 44px;
          background: var(--accent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        .founder__rec-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .founder__rec-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .founder__rec-date {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 6px;
        }
        .founder__stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .founder__stat {
          padding: 20px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
        }
        .founder__stat-num {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text);
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }
        .founder__stat-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .founder__stack-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .founder__stack-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .founder__stack-items span {
          padding: 6px 14px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        @media (max-width: 768px) {
          .founder { padding: 60px 0; }
          .founder__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .founder__stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
