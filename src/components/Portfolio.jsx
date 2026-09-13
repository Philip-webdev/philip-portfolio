const projects = [
  {
    title: 'kwestpay',
    tagline: 'Campus Payment Infrastructure',
    desc: 'Co-founded. Campus wallet and payment platform enabling students to make payments, track spending, and manage finances. Built with React, Node.js, MongoDB, and Flutterwave.',
    tech: ['React', 'Node.js', 'MongoDB', 'Flutterwave'],
    url: 'https://kwestpay.com',
    image: '/thumbnails/kwestpay.png',
    metrics: 'Live · Campus payments',
    color: '#0A1F44',
  },
  {
    title: 'RiikkoAI',
    tagline: 'AI-Powered Learning Platform',
    desc: 'Founded. RAG-powered educational platform for students, professors, and researchers. Semantic search, AI tutoring, and document Q&A. 100+ signups within weeks of launch.',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Pinecone', 'RAG'],
    url: 'https://www.riikko.name.ng',
    image: '/thumbnails/riikko.png',
    metrics: '100+ signups · AI & EdTech',
    color: '#111111',
  },
  {
    title: 'nekstpei',
    tagline: 'FoodTech Credit System',
    desc: 'Founded. Budget-friendly groceries powered by blockchain-backed transparent pricing. Connecting food vendors with consumers through credit-based systems for food security.',
    tech: ['React', 'Node.js', 'Blockchain', 'MongoDB'],
    url: 'https://nekstpei.com',
    image: '/thumbnails/nekstpei.png',
    metrics: 'Live · FoodTech & blockchain',
    color: '#16A34A',
  },
]

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <p className="label">Portfolio</p>
        <h2 className="portfolio__heading">Products built & shipping.</h2>

        <div className="portfolio__grid">
          {projects.map(p => (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="portfolio__card" key={p.title}>
              <div className="portfolio__card-img">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="portfolio__card-body">
                <div className="portfolio__card-top">
                  <div>
                    <h3 className="portfolio__card-title">{p.title}</h3>
                    <p className="portfolio__card-tagline">{p.tagline}</p>
                  </div>
                  <span className="portfolio__card-arrow">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </span>
                </div>
                <p className="portfolio__card-desc">{p.desc}</p>
                <div className="portfolio__card-metrics">{p.metrics}</div>
                <div className="portfolio__card-tech">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio {
          padding: 100px 0;
          background: var(--bg);
          border-bottom: 1px solid var(--border);
        }
        .label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .portfolio__heading {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 48px;
        }
        .portfolio__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .portfolio__card {
          display: block;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
          transition: var(--transition);
        }
        .portfolio__card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .portfolio__card-img {
          height: 200px;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .portfolio__card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.4s ease;
        }
        .portfolio__card:hover .portfolio__card-img img {
          transform: scale(1.03);
        }
        .portfolio__card-body { padding: 24px; }
        .portfolio__card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        .portfolio__card-title {
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .portfolio__card-tagline {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .portfolio__card-arrow {
          color: var(--text-muted);
          transition: var(--transition);
          flex-shrink: 0;
        }
        .portfolio__card:hover .portfolio__card-arrow {
          color: var(--accent);
          transform: translate(2px, -2px);
        }
        .portfolio__card-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 14px;
        }
        .portfolio__card-metrics {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent);
          margin-bottom: 14px;
          letter-spacing: 0.5px;
        }
        .portfolio__card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .portfolio__card-tech span {
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 3px 8px;
        }
        @media (max-width: 768px) {
          .portfolio { padding: 60px 0; }
          .portfolio__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
