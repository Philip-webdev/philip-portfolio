import { useState, useEffect } from 'react'

const API = 'http://localhost:3001/api'

const ADMIN_EMAIL = 'philipbankole2100@gmail.com'
const ADMIN_PASS = 'philip2026'

export default function Admin() {
  const [authed, setAuthed] = useState(false)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState('')

  const [posts, setPosts] = useState([])
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({
    title: '', slug: '', category: '', excerpt: '', content: '',
    read_time: '5 min read', featured: false, cover_image: ''
  })
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    const session = sessionStorage.getItem('pb_admin')
    if (session === 'authenticated') setAuthed(true)
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginForm.email === ADMIN_EMAIL && loginForm.password === ADMIN_PASS) {
      sessionStorage.setItem('pb_admin', 'authenticated')
      setAuthed(true)
      setLoginError('')
    } else {
      setLoginError('Invalid email or password.')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('pb_admin')
    setAuthed(false)
  }

  useEffect(() => {
    if (authed) fetchPosts()
  }, [authed])

  const fetchPosts = () => {
    fetch(`${API}/posts`)
      .then(r => r.json())
      .then(setPosts)
      .catch(() => setPosts([]))
  }

  const resetForm = () => {
    setForm({
      title: '', slug: '', category: '', excerpt: '', content: '',
      read_time: '5 min read', featured: false, cover_image: ''
    })
    setEditing(null)
  }

  const handleEdit = (post) => {
    setForm({
      title: post.title || '',
      slug: post.slug || '',
      category: post.category || '',
      excerpt: post.excerpt || '',
      content: post.content || '',
      read_time: post.read_time || '5 min read',
      featured: post.featured || false,
      cover_image: post.cover_image || '',
    })
    setEditing(post.id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = (id) => {
    if (!confirm('Delete this post?')) return
    fetch(`${API}/posts/${id}`, { method: 'DELETE' })
      .then(() => { setPosts(posts.filter(p => p.id !== id)); setMsg('Post deleted') })
      .catch(() => setMsg('Failed to delete'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaving(true)
    const url = editing ? `${API}/posts/${editing}` : `${API}/posts`
    const method = editing ? 'PUT' : 'POST'

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(r => r.json())
      .then(() => {
        setMsg(editing ? 'Post updated!' : 'Post created!')
        resetForm()
        fetchPosts()
        setSaving(false)
      })
      .catch(() => {
        setMsg('Failed to save. Is the server running?')
        setSaving(false)
      })
  }

  const autoSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
  }

  if (!authed) {
    return (
      <div className="admin-login">
        <div className="admin-login__card">
          <h1>Admin Access</h1>
          <p>Enter your credentials to manage blog posts.</p>
          {loginError && <div className="admin-login__error">{loginError}</div>}
          <form onSubmit={handleLogin}>
            <div className="admin-login__field">
              <label>Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="admin-login__field">
              <label>Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="••••••••"
                required
              />
            </div>
            <button type="submit" className="admin-login__btn">Sign In</button>
          </form>
        </div>

        <style>{`
          .admin-login {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            background: var(--bg);
          }
          .admin-login__card {
            width: 100%;
            max-width: 380px;
            background: var(--bg-card);
            border: 1px solid var(--border-light);
            border-radius: var(--radius);
            padding: 40px 32px;
          }
          .admin-login__card h1 {
            font-family: var(--font-serif);
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 8px;
          }
          .admin-login__card p {
            font-size: 0.88rem;
            color: var(--text-muted);
            margin-bottom: 24px;
          }
          .admin-login__error {
            background: #FEF2F2;
            color: #DC2626;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 0.82rem;
            margin-bottom: 16px;
          }
          .admin-login__field {
            margin-bottom: 16px;
          }
          .admin-login__field label {
            display: block;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: var(--text-secondary);
            margin-bottom: 6px;
          }
          .admin-login__field input {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--border);
            border-radius: 8px;
            font-family: var(--font-sans);
            font-size: 0.9rem;
            outline: none;
            transition: border-color 0.2s;
          }
          .admin-login__field input:focus {
            border-color: var(--accent);
          }
          .admin-login__btn {
            width: 100%;
            padding: 12px;
            background: var(--accent);
            color: white;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 500;
            margin-top: 8px;
            transition: var(--transition);
          }
          .admin-login__btn:hover { background: var(--accent-hover); }
        `}</style>
      </div>
    )
  }

  return (
    <div className="admin">
      <div className="container admin__container">
        <div className="admin__header">
          <div>
            <p className="section-label">Admin</p>
            <h1 className="admin__title">{editing ? 'Edit Post' : 'New Post'}</h1>
          </div>
          <div className="admin__header-actions">
            <a href="/admin" className="admin__refresh" onClick={(e) => { e.preventDefault(); resetForm(); fetchPosts() }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              Refresh
            </a>
            <button className="admin__logout" onClick={handleLogout}>Sign Out</button>
          </div>
        </div>

        {msg && <div className="admin__msg">{msg}</div>}

        <form className="admin__form" onSubmit={handleSubmit}>
          <div className="admin__form-row">
            <div className="admin__field admin__field--wide">
              <label>Title</label>
              <input
                type="text"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value, slug: autoSlug(e.target.value) })}
                placeholder="Your post title"
                required
              />
            </div>
            <div className="admin__field">
              <label>Slug</label>
              <input
                type="text"
                value={form.slug}
                onChange={e => setForm({ ...form, slug: e.target.value })}
                placeholder="post-url-slug"
                required
              />
            </div>
          </div>

          <div className="admin__field">
            <label>Cover Image URL</label>
            <input
              type="text"
              value={form.cover_image}
              onChange={e => setForm({ ...form, cover_image: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
            {form.cover_image && (
              <div className="admin__cover-preview">
                <img src={form.cover_image} alt="Cover preview" onError={e => e.target.style.display='none'} />
              </div>
            )}
          </div>

          <div className="admin__form-row">
            <div className="admin__field">
              <label>Category</label>
              <input
                type="text"
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                placeholder="e.g. AI & Engineering"
                required
              />
            </div>
            <div className="admin__field">
              <label>Read Time</label>
              <input
                type="text"
                value={form.read_time}
                onChange={e => setForm({ ...form, read_time: e.target.value })}
                placeholder="e.g. 8 min read"
              />
            </div>
            <div className="admin__field admin__field--check">
              <label>
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={e => setForm({ ...form, featured: e.target.checked })}
                />
                Featured
              </label>
            </div>
          </div>

          <div className="admin__field">
            <label>Excerpt</label>
            <textarea
              rows={2}
              value={form.excerpt}
              onChange={e => setForm({ ...form, excerpt: e.target.value })}
              placeholder="Short description for the post card..."
              required
            />
          </div>

          <div className="admin__field">
            <label>Content (Markdown supported)</label>
            <textarea
              rows={18}
              value={form.content}
              onChange={e => setForm({ ...form, content: e.target.value })}
              placeholder="Write your post content here... Use ## for headings, - for lists, `code` for inline code."
              required
              className="admin__editor"
            />
          </div>

          <div className="admin__actions">
            <button type="submit" className="admin__save" disabled={saving}>
              {saving ? 'Saving...' : editing ? 'Update Post' : 'Create Post'}
            </button>
            {editing && (
              <button type="button" className="admin__cancel" onClick={resetForm}>Cancel</button>
            )}
          </div>
        </form>

        <div className="admin__list">
          <h2 className="admin__list-title">All Posts ({posts.length})</h2>
          {posts.length === 0 ? (
            <p className="admin__empty">No posts yet. Create your first one above.</p>
          ) : (
            <div className="admin__posts">
              {posts.map(p => (
                <div className="admin__post" key={p.id}>
                  {p.cover_image && (
                    <div className="admin__post-thumb">
                      <img src={p.cover_image} alt="" />
                    </div>
                  )}
                  <div className="admin__post-info">
                    <span className="admin__post-cat">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <div className="admin__post-meta">
                      <span>{p.read_time}</span>
                      {p.featured && <span className="admin__post-badge">Featured</span>}
                      {p.cover_image && <span className="admin__post-badge">Has Cover</span>}
                    </div>
                  </div>
                  <div className="admin__post-actions">
                    <button onClick={() => handleEdit(p)}>Edit</button>
                    <button onClick={() => handleDelete(p.id)} className="admin__delete">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .admin { padding: 120px 0 80px; min-height: 80vh; }
        .admin__container { max-width: 800px; }
        .admin__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 32px;
        }
        .admin__header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .admin__title {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 400;
          color: var(--text);
        }
        .section-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .admin__refresh {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .admin__refresh:hover { color: var(--accent); }
        .admin__logout {
          padding: 6px 16px;
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.78rem;
          color: var(--text-muted);
          transition: var(--transition);
        }
        .admin__logout:hover { border-color: #DC2626; color: #DC2626; }
        .admin__msg {
          background: var(--peach-light);
          color: var(--accent-hover);
          padding: 12px 20px;
          border-radius: var(--radius-sm);
          font-size: 0.88rem;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .admin__form {
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius);
          padding: 32px;
          margin-bottom: 48px;
        }
        .admin__form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }
        .admin__form-row .admin__field--wide { grid-column: 1; }
        .admin__form-row .admin__field--check {
          display: flex;
          align-items: end;
          padding-bottom: 4px;
        }
        .admin__field { margin-bottom: 16px; }
        .admin__field label {
          display: block;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .admin__field input[type="text"],
        .admin__field input[type="email"],
        .admin__field textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius-xs);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text);
          background: var(--bg);
          outline: none;
          transition: border-color 0.2s;
        }
        .admin__field input:focus, .admin__field textarea:focus {
          border-color: var(--accent);
        }
        .admin__editor {
          font-family: 'Courier New', monospace;
          font-size: 0.88rem;
          line-height: 1.6;
          resize: vertical;
        }
        .admin__field input[type="checkbox"] {
          margin-right: 8px;
          accent-color: var(--accent);
        }
        .admin__cover-preview {
          margin-top: 10px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border-light);
        }
        .admin__cover-preview img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }
        .admin__actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .admin__save {
          padding: 12px 28px;
          background: var(--accent);
          color: white;
          border-radius: 50px;
          font-size: 0.88rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .admin__save:hover { background: var(--accent-hover); }
        .admin__save:disabled { opacity: 0.6; }
        .admin__cancel {
          padding: 12px 28px;
          background: transparent;
          color: var(--text-muted);
          border: 1px solid var(--border);
          border-radius: 50px;
          font-size: 0.88rem;
          transition: var(--transition);
        }
        .admin__cancel:hover { border-color: var(--text); color: var(--text); }
        .admin__list-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 400;
          margin-bottom: 20px;
        }
        .admin__empty {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .admin__posts { display: flex; flex-direction: column; gap: 12px; }
        .admin__post {
          display: flex;
          align-items: start;
          padding: 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          transition: var(--transition);
        }
        .admin__post:hover { box-shadow: var(--shadow-sm); }
        .admin__post-thumb {
          width: 80px;
          height: 60px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
          margin-right: 16px;
          border: 1px solid var(--border-light);
        }
        .admin__post-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .admin__post-cat {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
        }
        .admin__post h3 {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 400;
          margin: 4px 0 6px;
        }
        .admin__post p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .admin__post-meta {
          display: flex;
          gap: 10px;
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .admin__post-badge {
          background: var(--peach-light);
          color: var(--accent);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }
        .admin__post-info { flex: 1; }
        .admin__post-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
          margin-left: 16px;
        }
        .admin__post-actions button {
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 0.78rem;
          font-weight: 500;
          border: 1px solid var(--border);
          background: var(--bg);
          color: var(--text-secondary);
          transition: var(--transition);
        }
        .admin__post-actions button:hover { border-color: var(--text); color: var(--text); }
        .admin__delete:hover { border-color: #DC2626; color: #DC2626; background: #FEF2F2; }
        @media (max-width: 768px) {
          .admin__form-row { grid-template-columns: 1fr; }
          .admin__post { flex-direction: column; }
          .admin__post-thumb { margin-bottom: 12px; }
          .admin__post-actions { margin-left: 0; margin-top: 12px; }
        }
      `}</style>
    </div>
  )
}
