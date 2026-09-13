const projects = [
  {
    title: 'RikkoAI',
    tagline: 'RAG-Powered EdTech Tutoring',
    desc: 'An AI-powered educational platform using retrieval-augmented generation to deliver personalized tutoring with semantic search.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Pinecone', 'React'],
    color: '#E8734A',
    image: '/thumbnails/riikko.png',
    url: 'https://www.riikko.name.ng',
  },
  {
    title: 'kwestpay',
    tagline: 'Campus Payment Infra',
    desc: 'A fintech solution for campus wallets and payments — enabling students to make payments and manage finances.',
    tech: ['React', 'Node.js', 'MongoDB', 'Flutterwave'],
    color: '#0A1F44',
    image: '/thumbnails/kwestpay.png',
    url: 'https://kwestpay.com',
  },
  {
    title: 'nekstpei',
    tagline: 'Smarter Groceries. Fairer Prices.',
    desc: 'A food-credit management system connecting vendors with consumers through blockchain-backed transparent pricing.',
    tech: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
    color: '#16A34A',
    image: '/thumbnails/nekstpei.png',
    url: 'https://nekstpei.com',
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <p className="section-label">Selected Work</p>
            <h2 className="projects__title">
              Designing digital experiences<br />that make an impact.
            </h2>
          </div>
          <a href="#" className="projects__view-all">
            View all projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        <div className="projects__grid">
          {projects.map(p => (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-card" key={p.title}>
              <div className="project-card__img">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-card__body">
                <div className="project-card__top">
                  <div>
                    <h3 className="project-card__title">{p.title}</h3>
                    <p className="project-card__tagline">{p.tagline}</p>
                  </div>
                  <span className="project-card__arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </span>
                </div>
                <p className="project-card__desc">{p.desc}</p>
                <div className="project-card__tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .projects {
          padding: 100px 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .projects__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
        }
        .projects__title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 400;
          line-height: 1.2;
          color: var(--text);
        }
        .projects__view-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent);
          transition: var(--transition);
        }
        .projects__view-all:hover { gap: 10px; }
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .project-card {
          display: block;
          background: var(--bg);
          border-radius: var(--radius);
          border: 1px solid var(--border-light);
          overflow: hidden;
          transition: var(--transition);
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .project-card__img {
          height: 200px;
          overflow: hidden;
          background: #f0f0f0;
          border-bottom: 1px solid var(--border-light);
        }
        .project-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-card__img img {
          transform: scale(1.03);
        }
        .project-card__body {
          padding: 24px;
        }
        .project-card__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }
        .project-card__title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 2px;
        }
        .project-card__tagline {
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .project-card__arrow {
          color: var(--text-muted);
          transition: var(--transition);
          flex-shrink: 0;
        }
        .project-card:hover .project-card__arrow {
          color: var(--accent);
          transform: translate(2px, -2px);
        }
        .project-card__desc {
          font-family: var(--font-reading);
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .project-card__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .project-card__tech span {
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          padding: 3px 9px;
        }
        @media (max-width: 768px) {
          .projects { padding: 60px 0; }
          .projects__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .projects__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
