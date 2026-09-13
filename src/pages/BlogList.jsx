import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API = 'http://localhost:3001/api'

export default function BlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetch(`${API}/posts`)
      .then(r => r.json())
      .then(data => { setPosts(data); setLoading(false) })
      .catch(() => {
        setPosts([
          { id: 1, title: 'Building a RAG Pipeline from Scratch with Python and Pinecone', slug: 'building-rag-pipeline', excerpt: 'A practical guide to building retrieval-augmented generation systems — from document chunking and embeddings to semantic search and LLM grounding.', category: 'AI & Engineering', created_at: '2026-08-28', read_time: '12 min read', featured: true },
          { id: 2, title: 'Why Campus Fintech is the Next Big Thing in Africa', slug: 'campus-fintech-africa', excerpt: 'The untapped potential of campus payment systems, student wallets, and micro-financial services across African universities.', category: 'FinTech', created_at: '2026-08-14', read_time: '8 min read', featured: false },
          { id: 3, title: "Lessons from Building kwestpay: A Developer's Retrospective", slug: 'building-kwestpay-retrospective', excerpt: 'What I learned building a campus fintech platform from zero — technical decisions, architecture trade-offs, and user adoption challenges.', category: 'Engineering', created_at: '2026-07-30', read_time: '10 min read', featured: false },
          { id: 4, title: 'Food Credits and the Future of FoodTech in Nigeria', slug: 'foodtech-nigeria-future', excerpt: 'How credit-based food systems can bridge the gap between food vendors and consumers in emerging markets.', category: 'FoodTech', created_at: '2026-07-15', read_time: '7 min read', featured: false },
        ])
        setLoading(false)
      })
  }, [])

  const categories = ['all', ...new Set(posts.map(p => p.category))]
  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter)

  const formatDate = (d) => {
    if (!d) return ''
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <main className="blog-list">
      <div className="container">
        <div className="blog-list__header">
          <p className="section-label">Writing</p>
          <h1 className="blog-list__title">All Posts</h1>
          <p className="blog-list__subtitle">Thoughts on engineering, products, and building.</p>
        </div>

        <div className="blog-list__filters">
          {categories.map(c => (
            <button
              key={c}
              className={`blog-list__filter ${filter === c ? 'blog-list__filter--active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c === 'all' ? 'All' : c}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="blog-list__loading">Loading posts...</div>
        ) : (
          <div className="blog-list__grid">
            {filtered.map(post => (
              <Link to={`/blog/${post.slug}`} className="blog-card" key={post.id}>
                {post.cover_image && (
                  <div className="blog-card__img">
                    <img src={post.cover_image} alt="" />
                  </div>
                )}
                <div className="blog-card__content">
                  <span className="blog-card__cat">{post.category}</span>
                  <h2 className="blog-card__title">{post.title}</h2>
                  <p className="blog-card__excerpt">{post.excerpt}</p>
                  <div className="blog-card__meta">
                    <span>{formatDate(post.created_at)}</span>
                    <span>·</span>
                    <span>{post.read_time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .blog-list {
          padding: 140px 0 80px;
          min-height: 80vh;
        }
        .blog-list__header {
          margin-bottom: 40px;
        }
        .blog-list__title {
          font-family: var(--font-serif);
          font-size: 3rem;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 10px;
        }
        .blog-list__subtitle {
          font-family: var(--font-reading);
          font-size: 1.1rem;
          color: var(--text-muted);
        }
        .section-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .blog-list__filters {
          display: flex;
          gap: 8px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }
        .blog-list__filter {
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: var(--bg-card);
          border: 1px solid var(--border);
          transition: var(--transition);
        }
        .blog-list__filter:hover {
          border-color: var(--text);
          color: var(--text);
        }
        .blog-list__filter--active {
          background: var(--text);
          color: white;
          border-color: var(--text);
        }
        .blog-list__loading {
          text-align: center;
          padding: 60px 0;
          color: var(--text-muted);
        }
        .blog-list__grid {
          display: grid;
          gap: 0;
        }
        .blog-card {
          display: block;
          padding: 32px 0;
          border-bottom: 1px solid var(--border-light);
          transition: var(--transition);
        }
        .blog-card:first-child {
          border-top: 1px solid var(--border-light);
        }
        .blog-card:hover {
          padding-left: 12px;
        }
        .blog-card__img {
          margin-bottom: 16px;
          border-radius: 10px;
          overflow: hidden;
          max-height: 240px;
          border: 1px solid var(--border-light);
        }
        .blog-card__img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .blog-card__cat {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 10px;
        }
        .blog-card__title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--text);
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .blog-card__excerpt {
          font-family: var(--font-reading);
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 12px;
          max-width: 600px;
        }
        .blog-card__meta {
          display: flex;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .blog-list { padding: 120px 0 60px; }
          .blog-list__title { font-size: 2.2rem; }
          .blog-card__title { font-size: 1.25rem; }
        }
      `}</style>
    </main>
  )
}
