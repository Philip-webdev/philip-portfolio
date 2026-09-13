export default function Newsletter() {
  return (
    <section className="newsletter" id="contact">
      <div className="container newsletter__inner">
        <div className="newsletter__left">
          <p className="section-label">Stay in touch</p>
          <h2 className="newsletter__title">
            Let's create something<br />amazing together.
          </h2>
          <p className="newsletter__desc">
            Get my latest writing on engineering, AI, and building products —
            delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="newsletter__form">
            <input type="email" placeholder="your@email.com" className="newsletter__input" />
            <button className="newsletter__btn">Subscribe</button>
          </div>
        </div>
        <div className="newsletter__right">
          <div className="newsletter__contact-card">
            <p className="newsletter__contact-label">Get in touch</p>
            <a href="mailto:philipbankole2100@gmail.com" className="newsletter__contact-link">
              philipbankole2100@gmail.com
            </a>
            <div className="newsletter__socials">
              <a href="https://www.linkedin.com/in/philip-bankole" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/philipbankole" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              </a>
              <a href="https://x.com/PhilipOfAfrica" target="_blank" rel="noopener noreferrer" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .newsletter {
          padding: 100px 0;
          background: var(--text);
          color: white;
        }
        .newsletter__inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .newsletter .section-label { color: var(--accent); }
        .newsletter__title {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          font-weight: 400;
          line-height: 1.15;
          color: white;
          margin-bottom: 16px;
        }
        .newsletter__desc {
          font-family: var(--font-reading);
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin-bottom: 28px;
          max-width: 420px;
        }
        .newsletter__form {
          display: flex;
          gap: 8px;
        }
        .newsletter__input {
          flex: 1;
          padding: 14px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          color: white;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          outline: none;
          transition: var(--transition);
        }
        .newsletter__input::placeholder { color: rgba(255,255,255,0.35); }
        .newsletter__input:focus { border-color: var(--accent); }
        .newsletter__btn {
          padding: 14px 28px;
          border-radius: 50px;
          background: var(--accent);
          color: white;
          font-size: 0.88rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .newsletter__btn:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
        }
        .newsletter__contact-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius);
          padding: 32px;
        }
        .newsletter__contact-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          margin-bottom: 16px;
        }
        .newsletter__contact-link {
          display: block;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .newsletter__contact-link:hover { color: var(--accent); }
        .newsletter__socials {
          display: flex;
          gap: 16px;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .newsletter__socials a {
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .newsletter__socials a:hover { color: var(--accent); }
        @media (max-width: 768px) {
          .newsletter { padding: 60px 0; }
          .newsletter__inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .newsletter__title { font-size: 2rem; }
          .newsletter__form {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}
