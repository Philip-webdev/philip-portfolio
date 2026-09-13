const experiences = [
  {
    role: 'Founder & Lead Engineer',
    company: 'Trilliongrace',
    period: '2023 — Present',
    desc: 'Building IoT and embedded systems solutions. Developing hardware prototypes, firmware, and cloud-connected platforms.',
    tags: ['IoT', 'Embedded Systems', 'Hardware', 'Cloud'],
  },
  {
    role: 'Full-Stack Software Engineer',
    company: 'Freelance / Contract',
    period: '2020 — Present',
    desc: 'Delivered production web applications across EdTech, FinTech, and FoodTech — RAG platforms, fintech wallets, food-credit systems.',
    tags: ['React', 'Node.js', 'MongoDB', 'RAG', 'Payments'],
  },

]

export default function Experience() {
  return (
    <section className="exp" id="experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="exp__heading">Where I've worked.</h2>

        <div className="exp__timeline">
          {experiences.map((e, i) => (
            <div className="exp__item" key={i}>
              <div className="exp__dot" />
              <div className="exp__card">
                <div className="exp__card-header">
                  <div>
                    <h3 className="exp__role">{e.role}</h3>
                    <p className="exp__company">{e.company}</p>
                  </div>
                  <span className="exp__period">{e.period}</span>
                </div>
                <p className="exp__desc">{e.desc}</p>
                <div className="exp__tags">
                  {e.tags.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp {
          padding: 100px 0;
          background: var(--bg);
        }
        .exp__heading {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 48px;
        }
        .exp__timeline {
          position: relative;
          padding-left: 24px;
        }
        .exp__timeline::before {
          content: '';
          position: absolute;
          left: 5px;
          top: 10px;
          bottom: 10px;
          width: 1.5px;
          background: var(--border);
        }
        .exp__item {
          position: relative;
          padding-bottom: 32px;
        }
        .exp__item:last-child { padding-bottom: 0; }
        .exp__dot {
          position: absolute;
          left: -24px;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--accent);
          border: 3px solid var(--bg);
        }
        .exp__card {
          background: var(--bg-card);
          border-radius: var(--radius);
          padding: 28px;
          border: 1px solid var(--border-light);
          transition: var(--transition);
        }
        .exp__card:hover {
          box-shadow: var(--shadow);
        }
        .exp__card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
          gap: 12px;
        }
        .exp__role {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 2px;
        }
        .exp__company {
          font-size: 0.88rem;
          color: var(--accent);
          font-weight: 500;
        }
        .exp__period {
          font-size: 0.75rem;
          color: var(--text-muted);
          white-space: nowrap;
          background: var(--bg);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid var(--border-light);
        }
        .exp__desc {
          font-family: var(--font-reading);
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 14px;
        }
        .exp__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .exp__tags span {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--accent-hover);
          background: var(--peach-light);
          border-radius: 4px;
          padding: 4px 10px;
        }
        @media (max-width: 768px) {
          .exp { padding: 60px 0; }
          .exp__card-header {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  )
}
