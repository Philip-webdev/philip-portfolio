export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__left">
          <p className="section-label">About Me</p>
          <h2 className="about__title">
            Building products that<br />solve real problems.
          </h2>
          <div className="about__text">
            <p>
              Bánkọ́lé (Builder) was recognized in July 2025 by the African
              Stable-coin Network for thoughtful leadership on the digital
              economy of Africa. He is a developer &amp; engineer focused on
              building and shipping both software and hardware solutions.
            </p>
            <p>
              He has co-facilitated a program that helped equip young Africans
              with technology skills across both software and hardware
              engineering. He also ships around SDG-focused startups spanning
              ed-tech, fintech, and AI.
            </p>
            <p>
              He is an activist, writer and speaker on next-gen software
              solutions as well as the role of AI in engineering. He is the
              founder of Trilliongrace, developing IoT and embedded systems
              solutions.
            </p>
          </div>
        </div>
        <div className="about__right">
          <div className="about__stat-card">
            <span className="about__stat-num">6+</span>
            <span className="about__stat-label">Years building<br/>production apps</span>
          </div>
          <div className="about__stat-card">
            <span className="about__stat-num">10+</span>
            <span className="about__stat-label">Projects<br/>delivered</span>
          </div>
          <div className="about__stat-card">
            <span className="about__stat-num">3+</span>
            <span className="about__stat-label">Industries<br/>served</span>
          </div>
        </div>
      </div>

      <style>{`
        .about {
          padding: 100px 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .section-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .about__grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 80px;
          align-items: start;
        }
        .about__title {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 400;
          line-height: 1.15;
          color: var(--text);
          margin-bottom: 28px;
        }
        .about__text p {
          font-family: var(--font-reading);
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.85;
          margin-bottom: 14px;
        }
        .about__right {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .about__stat-card {
          background: var(--bg);
          border-radius: var(--radius);
          padding: 28px 24px;
          border: 1px solid var(--border-light);
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: var(--transition);
        }
        .about__stat-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
        }
        .about__stat-card:last-child {
          grid-column: 1 / -1;
        }
        .about__stat-num {
          font-family: var(--font-serif);
          font-size: 2.6rem;
          color: var(--accent);
          line-height: 1;
        }
        .about__stat-label {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .about { padding: 60px 0; }
          .about__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about__right {
            grid-template-columns: repeat(3, 1fr);
          }
          .about__stat-card:last-child {
            grid-column: auto;
          }
        }
        @media (max-width: 500px) {
          .about__right {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
