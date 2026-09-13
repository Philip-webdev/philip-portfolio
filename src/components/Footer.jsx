export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__logo">PB.</span>
          <p className="footer__copy">&copy; {new Date().getFullYear()} Philip Bankole</p>
        </div>
        <div className="footer__right">
          <a href="https://linkedin.com/in/philip-bankole" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/PhilipOfAfrica" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://github.com/philipbankole" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/blog">Blog</a>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 32px 0;
          background: var(--bg-dark);
          border-top: 1px solid var(--border-dark);
        }
        .footer__inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer__left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .footer__logo {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
        }
        .footer__copy {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
        }
        .footer__right {
          display: flex;
          gap: 24px;
        }
        .footer__right a {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
        }
        .footer__right a:hover { color: white; }
        @media (max-width: 768px) {
          .footer__inner {
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>
    </footer>
  )
}
