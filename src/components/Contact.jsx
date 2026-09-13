export default function Contact() {
  return (
    <section className="cta" id="contact">
      <div className="container cta__inner">
        <div className="cta__left">
          <p className="label">Let's connect</p>
          <h2 className="cta__title">
            Building something for<br />
            Africa's next economy?
          </h2>
          <p className="cta__desc">
            Open to pre-seed conversations, partnerships, and collaboration.
            If you're building for Africa's digital future, let's talk.
          </p>
          <div className="cta__links">
            <a href="mailto:philipbankole2100@gmail.com" className="cta__link">
              <span className="cta__link-label">Email</span>
              <span className="cta__link-value">philipbankole2100@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/philip-bankole" target="_blank" rel="noopener noreferrer" className="cta__link">
              <span className="cta__link-label">LinkedIn</span>
              <span className="cta__link-value">linkedin.com/in/philip-bankole</span>
            </a>
            <a href="https://x.com/PhilipOfAfrica" target="_blank" rel="noopener noreferrer" className="cta__link">
              <span className="cta__link-label">X / Twitter</span>
              <span className="cta__link-value">@PhilipOfAfrica</span>
            </a>
          </div>
        </div>
        <div className="cta__right">
          <div className="cta__card">
            <p className="cta__card-label">Quick summary</p>
            <div className="cta__card-items">
              <div className="cta__card-item">
                <span className="cta__card-key">Founder</span>
                <span className="cta__card-val">RiikkoAI, nekstpei</span>
              </div>
              <div className="cta__card-item">
                <span className="cta__card-key">Co-founder</span>
                <span className="cta__card-val">kwestpay</span>
              </div>
              <div className="cta__card-item">
                <span className="cta__card-key">Stack</span>
                <span className="cta__card-val">React, Node, Python, AI/RAG</span>
              </div>
              <div className="cta__card-item">
                <span className="cta__card-key">Focus</span>
                <span className="cta__card-val">EdTech, FinTech, FoodTech</span>
              </div>
              <div className="cta__card-item">
                <span className="cta__card-key">Recognition</span>
                <span className="cta__card-val">African Stable-coin Network, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta {
          padding: 100px 0;
          background: var(--bg-dark);
          color: var(--text-inverse);
        }
        .cta__inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .cta .label { color: var(--accent); }
        .cta__title {
          font-size: 2.6rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .cta__desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 440px;
        }
        .cta__links {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .cta__link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid var(--border-dark);
          transition: var(--transition);
        }
        .cta__link:first-child { border-top: 1px solid var(--border-dark); }
        .cta__link:hover { padding-left: 8px; }
        .cta__link-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .cta__link-value {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.8);
        }
        .cta__link:hover .cta__link-value { color: var(--accent); }
        .cta__card {
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-dark);
          border-radius: var(--radius);
          padding: 28px;
        }
        .cta__card-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 20px;
        }
        .cta__card-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .cta__card-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-dark);
        }
        .cta__card-item:last-child { border-bottom: none; }
        .cta__card-key {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.4);
        }
        .cta__card-val {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.8);
          font-weight: 500;
          text-align: right;
        }
        @media (max-width: 768px) {
          .cta { padding: 60px 0; }
          .cta__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cta__title { font-size: 2rem; }
          .cta__link { flex-direction: column; align-items: flex-start; gap: 4px; }
        }
      `}</style>
    </section>
  )
}
