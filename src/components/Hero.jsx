export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1 className="hero__title">
            Building the digital infrastructure for{' '}
            <span className="hero__accent">Africa's next economy.</span>
          </h1>

          <p className="hero__sub">
            Developer & founder shipping EdTech, FinTech, and FoodTech
            solutions across the continent. Recognized by the African
            Stable-coin Network for leadership on Africa's digital economy.
          </p>

          <div className="hero__actions">
            <a href="#portfolio" className="hero__btn hero__btn--primary">
              View portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#founder" className="hero__btn hero__btn--ghost">About the founder</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img src="/philip.jpeg" alt="Philip Bankole" />
          </div>
          <div className="hero__metrics-card">
            <div className="hero__metric">
              <span className="hero__metric-num">$16.6K</span>
              <span className="hero__metric-label">Revenue (Y1)</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric">
              <span className="hero__metric-num">5,000+</span>
              <span className="hero__metric-label">Users</span>
            </div>
            <div className="hero__metric-divider" />
            <div className="hero__metric">
              <span className="hero__metric-num">6,422+</span>
              <span className="hero__metric-label">Transactions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hero__bottom">
          <span className="hero__bottom-label">Built & shipping</span>
          <div className="hero__logos">
            <a href="https://kwestpay.com" target="_blank" rel="noopener noreferrer" className="hero__logo-link">
              <img src="/thumbnails/kwestpay-logo.png" alt="kwestpay" className="hero__logo-img" />
            </a>
            <a href="https://www.riikko.name.ng" target="_blank" rel="noopener noreferrer" className="hero__logo-link">
              <img src="/thumbnails/riikko-logo.ico" alt="RiikkoAI" className="hero__logo-img" />
            </a>
            <a href="https://nekstpei.com" target="_blank" rel="noopener noreferrer" className="hero__logo-link">
              <img src="/thumbnails/nekstpei-logo.png" alt="nekstpei" className="hero__logo-img" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 150px 0 60px;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .hero__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }
        .hero__title {
          font-size: 3.2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text);
          margin-bottom: 24px;
        }
        .hero__accent { color: var(--accent); }
        .hero__sub {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 36px;
        }
        .hero__actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .hero__btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
          transition: var(--transition);
        }
        .hero__btn--primary {
          background: var(--text);
          color: white;
        }
        .hero__btn--primary:hover {
          background: #333;
          transform: translateY(-1px);
        }
        .hero__btn--ghost {
          color: var(--text-secondary);
          border: 1px solid var(--border);
        }
        .hero__btn--ghost:hover {
          border-color: var(--text);
          color: var(--text);
        }
        .hero__visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .hero__photo {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--accent);
        }
        .hero__photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero__metrics-card {
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 20px 32px;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          width: 100%;
          max-width: 400px;
        }
        .hero__metric { text-align: center; flex: 1; }
        .hero__metric-num {
          display: block;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text);
          letter-spacing: -0.02em;
        }
        .hero__metric-label {
          font-size: 0.68rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          font-weight: 600;
        }
        .hero__metric-divider {
          width: 1px;
          height: 32px;
          background: var(--border);
        }
        .hero__bottom {
          display: flex;
          align-items: center;
          gap: 40px;
          padding: 28px 0;
          margin-top: 48px;
          border-top: 1px solid var(--border);
        }
        .hero__bottom-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          flex-shrink: 0;
        }
        .hero__logos {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .hero__logo-link {
          display: flex;
          align-items: center;
          opacity: 0.4;
          transition: opacity 0.2s;
        }
        .hero__logo-link:hover { opacity: 0.8; }
        .hero__logo-img {
          height: 28px;
          width: auto;
          object-fit: contain;
        }
        @media (max-width: 900px) {
          .hero { padding: 130px 0 40px; }
          .hero__grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero__title { font-size: 2.2rem; }
          .hero__sub { margin: 0 auto 36px; }
          .hero__actions { justify-content: center; }
          .hero__photo { width: 200px; height: 200px; }
          .hero__metrics-card { max-width: 100%; }
          .hero__bottom { flex-direction: column; gap: 12px; }
          .hero__logos { gap: 24px; }
        }
      `}</style>
    </section>
  )
}
