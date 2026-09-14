import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'

const API = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

const fallbackPosts = {
  'building-rag-pipeline': {
    title: 'Building a RAG Pipeline from Scratch with Python and Pinecone',
    category: 'AI & Engineering',
    created_at: '2026-08-28',
    read_time: '12 min read',
    content: `
## What is RAG?

Retrieval-Augmented Generation (RAG) is a technique that combines the power of large language models with external knowledge retrieval. Instead of relying solely on the model's training data, RAG systems fetch relevant documents at query time and use them to ground the LLM's responses.

## Why RAG Matters

Traditional LLMs have a cutoff date and can hallucinate facts. RAG solves this by:

- **Grounding responses in real data** — the model cites actual documents
- **Reducing hallucinations** — answers are backed by retrieved context
- **Keeping knowledge fresh** — no retraining needed for new documents
- **Providing source attribution** — users can verify where answers come from

## Architecture Overview

A typical RAG pipeline consists of three stages:

### 1. Document Ingestion

We load documents, split them into chunks, and generate embeddings for each chunk. The chunking strategy is critical — too small and you lose context, too large and you lose precision.

\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=500,
    chunk_overlap=50,
    separators=["\\n\\n", "\\n", ". ", " "]
)
chunks = splitter.split_documents(documents)
\`\`\`

### 2. Vector Storage

Each chunk gets embedded using a model like OpenAI's \`text-embedding-3-small\` and stored in a vector database like Pinecone.

\`\`\`python
from pinecone import Pinecone
from langchain_openai import OpenAIEmbeddings

pc = Pinecone(api_key=os.environ["PINECONE_API_KEY"])
index = pc.Index("knowledge-base")

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
for chunk in chunks:
    vector = embeddings.embed_query(chunk.page_content)
    index.upsert([(chunk.id, vector, {"text": chunk.page_content})])
\`\`\`

### 3. Query & Generation

At query time, we embed the user's question, find the most similar chunks, and pass them as context to the LLM.

\`\`\`python
def rag_query(question: str) -> str:
    q_vector = embeddings.embed_query(question)
    results = index.query(vector=q_vector, top_k=5)
    
    context = "\\n\\n".join([r["metadata"]["text"] for r in results["matches"]])
    
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": f"Answer based on this context:\\n{context}"},
            {"role": "user", "content": question}
        ]
    )
    return response.choices[0].message.content
\`\`\`

## Key Design Decisions

### Chunking Strategy

I experimented with several approaches:

| Strategy | Chunk Size | Precision | Context |
|----------|-----------|-----------|---------|
| Fixed-size | 500 chars | Medium | Low |
| Recursive | 500 chars | High | Medium |
| Semantic | Variable | Very High | High |

**Winner:** Recursive text splitting with 500-char chunks and 50-char overlap. It balances precision and context retention.

### Embedding Model

I tested OpenAI, Cohere, and open-source models. OpenAI's \`text-embedding-3-small\` gave the best balance of cost and performance for this use case.

### Top-K Retrieval

Retrieving the top 5 chunks worked well for most queries. More than that introduced noise; fewer missed relevant context.

## Lessons Learned

1. **Chunk quality matters more than quantity.** Better chunking beats more chunks.
2. **Metadata filtering is powerful.** Adding category/date filters before vector search improved relevance by 23%.
3. **Hybrid search works.** Combining vector similarity with keyword matching catches edge cases.
4. **Context window management is critical.** You need to fit retrieved chunks within the model's context limit while leaving room for the answer.

## Conclusion

RAG is not just a trend — it's the practical path to building AI systems that are grounded, verifiable, and useful. The pipeline isn't complex, but the details matter. Get the chunking, embedding, and retrieval right, and the generation follows.

The full code is available on my GitHub.
    `,
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [comments, setComments] = useState([])
  const [commentForm, setCommentForm] = useState({ name: '', email: '', content: '' })
  const [submitting, setSubmitting] = useState(false)
  const [readProgress, setReadProgress] = useState(0)
  const articleRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return
      const el = articleRef.current
      const rect = el.getBoundingClientRect()
      const total = el.scrollHeight - window.innerHeight
      const current = -rect.top
      const progress = Math.min(Math.max(current / total, 0), 1)
      setReadProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    fetch(`${API}/posts/slug/${slug}`)
      .then(r => r.json())
      .then(data => { setPost(data); setLoading(false) })
      .catch(() => {
        const fallback = fallbackPosts[slug]
        if (fallback) setPost(fallback)
        setLoading(false)
      })
  }, [slug])

  useEffect(() => {
    if (!post) return
    fetch(`${API}/comments/${post.id || slug}`)
      .then(r => r.json())
      .then(setComments)
      .catch(() => setComments([
        { id: 1, name: 'Ade T.', content: 'Great article! The chunking strategy comparison was really helpful.', created_at: '2026-08-29' },
        { id: 2, name: 'Sarah M.', content: 'I implemented this for my project and it works beautifully. Thanks for sharing.', created_at: '2026-08-30' },
      ]))
  }, [post, slug])

  const handleComment = (e) => {
    e.preventDefault()
    setSubmitting(true)
    fetch(`${API}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...commentForm, post_slug: slug, post_id: post?.id }),
    })
      .then(r => r.json())
      .then(newComment => {
        setComments([...comments, newComment])
        setCommentForm({ name: '', email: '', content: '' })
        setSubmitting(false)
      })
      .catch(() => {
        setComments([...comments, {
          ...commentForm,
          id: Date.now(),
          created_at: new Date().toISOString(),
        }])
        setCommentForm({ name: '', email: '', content: '' })
        setSubmitting(false)
      })
  }

  const formatDate = (d) => {
    if (!d) return ''
    return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  }

  const renderContent = (content) => {
    if (!content) return null
    return content.split('\n').map((line, i) => {
      if (line.startsWith('## ')) return <h2 key={i}>{line.replace('## ', '')}</h2>
      if (line.startsWith('### ')) return <h3 key={i}>{line.replace('### ', '')}</h3>
      if (line.startsWith('**') && line.endsWith('**')) return <p key={i}><strong>{line.replace(/\*\*/g, '')}</strong></p>
      if (line.startsWith('- ')) return <li key={i}>{line.replace('- ', '')}</li>
      if (line.startsWith('| ')) return null
      if (line.trim() === '') return <br key={i} />
      if (line.includes('`')) {
        const parts = line.split('`')
        return <p key={i}>{parts.map((p, j) => j % 2 === 1 ? <code key={j}>{p}</code> : p)}</p>
      }
      return <p key={i}>{line}</p>
    })
  }

  if (loading) return <div className="blog-post-loading"><div className="container">Loading...</div></div>
  if (!post) return <div className="blog-post-loading"><div className="container">Post not found.</div></div>

  return (
    <article className="post" ref={articleRef}>
      <SEO
        title={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        image={post.cover_image}
      />
      <div className="post__progress" style={{ transform: `scaleX(${readProgress})` }} />
      <div className="container post__container">
        <header className="post__header">
          <Link to="/blog" className="post__back">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Back to writing
          </Link>
          <span className="post__cat">{post.category}</span>
          <h1 className="post__title">{post.title}</h1>
          <div className="post__meta">
            <span>{formatDate(post.created_at)}</span>
            <span>·</span>
            <span>{post.read_time}</span>
          </div>
        </header>

        {post.cover_image && (
          <div className="post__cover">
            <img src={post.cover_image} alt={post.title} />
          </div>
        )}

        <div className="post__body">
          {renderContent(post.content)}
        </div>

        <section className="post__comments">
          <h3 className="post__comments-title">Comments ({comments.length})</h3>

          <form className="comment-form" onSubmit={handleComment}>
            <div className="comment-form__row">
              <input
                type="text"
                placeholder="Your name"
                value={commentForm.name}
                onChange={e => setCommentForm({ ...commentForm, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email (not published)"
                value={commentForm.email}
                onChange={e => setCommentForm({ ...commentForm, email: e.target.value })}
                required
              />
            </div>
            <textarea
              placeholder="Write a comment..."
              rows={4}
              value={commentForm.content}
              onChange={e => setCommentForm({ ...commentForm, content: e.target.value })}
              required
            />
            <button type="submit" disabled={submitting}>
              {submitting ? 'Posting...' : 'Post Comment'}
            </button>
          </form>

          <div className="comments-list">
            {comments.map(c => (
              <div className="comment" key={c.id}>
                <div className="comment__header">
                  <span className="comment__avatar">{c.name?.charAt(0) || 'A'}</span>
                  <div>
                    <p className="comment__name">{c.name}</p>
                    <p className="comment__date">{formatDate(c.created_at)}</p>
                  </div>
                </div>
                <p className="comment__body">{c.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .post { padding: 120px 0 80px; position: relative; }
        .post__progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent);
          transform-origin: left;
          transform: scaleX(0);
          z-index: 200;
          transition: transform 0.1s linear;
        }
        .post__container { max-width: 720px; }
        .post__back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 32px;
          transition: color 0.2s;
        }
        .post__back:hover { color: var(--accent); }
        .post__cat {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 14px;
        }
        .post__title {
          font-family: var(--font-serif);
          font-size: 2.8rem;
          font-weight: 400;
          line-height: 1.15;
          color: var(--text);
          margin-bottom: 16px;
        }
        .post__meta {
          display: flex;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border-light);
        }
        .post__cover {
          margin-bottom: 40px;
          border-radius: var(--radius);
          overflow: hidden;
          border: 1px solid var(--border-light);
        }
        .post__cover img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: cover;
        }
        .post__body {
          font-family: var(--font-reading);
          font-size: 1.08rem;
          line-height: 1.85;
          color: var(--text-secondary);
        }
        .post__body h2 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 400;
          color: var(--text);
          margin: 48px 0 16px;
          line-height: 1.25;
        }
        .post__body h3 {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--text);
          margin: 32px 0 12px;
        }
        .post__body p { margin-bottom: 16px; }
        .post__body strong { color: var(--text); font-weight: 600; }
        .post__body li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }
        .post__body li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 10px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
        }
        .post__body code {
          background: var(--bg-warm);
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.9em;
          color: var(--accent);
        }
        .post__body pre {
          background: var(--text);
          color: #e0e0e0;
          padding: 20px 24px;
          border-radius: var(--radius-sm);
          overflow-x: auto;
          margin: 20px 0;
          font-size: 0.88rem;
          line-height: 1.6;
        }
        .post__body pre code {
          background: none;
          color: inherit;
          padding: 0;
        }
        .post__body table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
          font-size: 0.9rem;
        }
        .post__body th, .post__body td {
          padding: 10px 14px;
          border: 1px solid var(--border);
          text-align: left;
        }
        .post__body th {
          background: var(--bg-warm);
          font-weight: 600;
          color: var(--text);
        }

        .post__comments {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid var(--border-light);
        }
        .post__comments-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 400;
          margin-bottom: 28px;
        }
        .comment-form {
          margin-bottom: 40px;
        }
        .comment-form__row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }
        .comment-form input, .comment-form textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          background: var(--bg-card);
          color: var(--text);
          outline: none;
          transition: border-color 0.2s;
        }
        .comment-form input:focus, .comment-form textarea:focus {
          border-color: var(--accent);
        }
        .comment-form textarea {
          resize: vertical;
          margin-bottom: 12px;
        }
        .comment-form button {
          padding: 12px 28px;
          background: var(--accent);
          color: white;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .comment-form button:hover { background: var(--accent-hover); }
        .comment-form button:disabled { opacity: 0.6; }
        .comments-list { display: flex; flex-direction: column; gap: 20px; }
        .comment {
          padding: 20px;
          background: var(--bg);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-light);
        }
        .comment__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .comment__avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--peach-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--accent);
        }
        .comment__name { font-size: 0.88rem; font-weight: 600; color: var(--text); }
        .comment__date { font-size: 0.75rem; color: var(--text-muted); }
        .comment__body {
          font-family: var(--font-reading);
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .blog-post-loading {
          padding: 200px 0;
          text-align: center;
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .post__title { font-size: 2rem; }
          .comment-form__row { grid-template-columns: 1fr; }
        }
      `}</style>
    </article>
  )
}
