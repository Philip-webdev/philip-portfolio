import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API = 'http://localhost:3001/api'

export default function Blog() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(`${API}/posts`)
      .then(r => r.json())
      .then(data => setPosts(data.slice(0, 4)))
      .catch(() => {
        setPosts([
          { id: 1, title: 'Building a RAG Pipeline from Scratch with Python and Pinecone', slug: 'building-rag-pipeline', excerpt: 'A practical guide to building retrieval-augmented generation systems — from document chunking and embeddings to semantic search and LLM grounding.', category: 'AI & Engineering', created_at: '2026-08-28', read_time: '12 min read', featured: true },
          { id: 2, title: 'Why Campus Fintech is the Next Big Thing in Africa', slug: 'campus-fintech-africa', excerpt: 'The untapped potential of campus payment systems, student wallets, and micro-financial services across African universities.', category: 'FinTech', created_at: '2026-08-14', read_time: '8 min read' },
          { id: 3, title: "Lessons from Building kwestpay: A Developer's Retrospective", slug: 'building-kwestpay-retrospective', excerpt: 'What I learned building a campus fintech platform from zero — technical decisions, architecture trade-offs, and user adoption challenges.', category: 'Engineering', created_at: '2026-07-30', read_time: '10 min read' },
          { id: 4, title: 'Food Credits and the Future of FoodTech in Nigeria', slug: 'foodtech-nigeria-future', excerpt: 'How credit-based food systems can bridge the gap between food vendors and consumers in emerging markets.', category: 'FoodTech', created_at: '2026-07-15', read_time: '7 min read' },
        ])
      })
  }, [])

  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured).slice(0, 3)

  const formatDate = (d) => {
    if (!d) return ''
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <section className="blog" id="blog">
      <div className="container">
        <div className="blog__header">
          <div>
            <p className="section-label">Writing</p>
            <h2 className="blog__title">
              Thoughts on engineering,<br />products, and building.
            </h2>
          </div>
          <Link to="/blog" className="blog__view-all">
            View all posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>

        <div className="blog__grid">
          {featured && (
            <Link to={`/blog/${featured.slug}`} className="blog__card blog__card--featured">
              <div className="blog__card-img">
                {featured.cover_image ? (
                  <img src={featured.cover_image} alt="" />
                ) : (
                  <div className="blog__card-placeholder">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/></svg>
                  </div>
                )}
              </div>
              <div className="blog__card-body">
                <span className="blog__card-cat">{featured.category}</span>
                <h3 className="blog__card-title">{featured.title}</h3>
                <p className="blog__card-excerpt">{featured.excerpt}</p>
                <div className="blog__card-meta">
                  <span>{formatDate(featured.created_at)}</span>
                  <span className="blog__card-dot">·</span>
                  <span>{featured.read_time}</span>
                </div>
              </div>
            </Link>
          )}

          <div className="blog__list">
            {rest.map(post => (
              <Link to={`/blog/${post.slug}`} className="blog__card blog__card--row" key={post.id}>
                {post.cover_image && (
                  <div className="blog__card-row-img">
                    <img src={post.cover_image} alt="" />
                  </div>
                )}
                <div className="blog__card-body">
                  <span className="blog__card-cat">{post.category}</span>
                  <h3 className="blog__card-title">{post.title}</h3>
                  <p className="blog__card-excerpt">{post.excerpt}</p>
                  <div className="blog__card-meta">
                    <span>{formatDate(post.created_at)}</span>
                    <span className="blog__card-dot">·</span>
                    <span>{post.read_time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .blog {
          padding: 100px 0;
          background: var(--bg);
        }
        .blog__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 48px;
        }
        .blog__title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 400;
          line-height: 1.2;
          color: var(--text);
        }
        .blog__view-all {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--accent);
          transition: var(--transition);
        }
        .blog__view-all:hover { gap: 10px; }
        .blog__grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 24px;
        }
        .blog__card {
          display: block;
          background: var(--bg-card);
          border-radius: var(--radius);
          border: 1px solid var(--border-light);
          overflow: hidden;
          transition: var(--transition);
        }
        .blog__card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow);
        }
        .blog__card--featured .blog__card-img {
          height: 220px;
          background: linear-gradient(135deg, var(--peach-light), var(--peach));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .blog__card-placeholder {
          width: 64px;
          height: 64px;
          background: rgba(255,255,255,0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }
        .blog__card-body {
          padding: 24px;
        }
        .blog__card-cat {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .blog__card-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 400;
          line-height: 1.3;
          color: var(--text);
          margin-bottom: 10px;
        }
        .blog__card--featured .blog__card-title {
          font-size: 1.5rem;
        }
        .blog__card-excerpt {
          font-family: var(--font-reading);
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .blog__card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .blog__card-dot { opacity: 0.4; }
        .blog__list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .blog__card--row {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .blog__card-row-img {
          width: 120px;
          height: 80px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid var(--border-light);
        }
        .blog__card-row-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blog__card--row .blog__card-body {
          padding: 20px 24px;
          flex: 1;
        }
        .blog__card--row .blog__card-title {
          font-size: 1.1rem;
        }
        .blog__card--row .blog__card-excerpt {
          -webkit-line-clamp: 2;
        }
        @media (max-width: 768px) {
          .blog { padding: 60px 0; }
          .blog__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .blog__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
