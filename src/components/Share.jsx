import { useState } from 'react'

export default function Share({ title, url }) {
  const [copied, setCopied] = useState(false)

  const link = url || (typeof window !== 'undefined' ? window.location.href : '')
  const encTitle = encodeURIComponent(title || 'Philip Bankole')
  const encLink = encodeURIComponent(link)

  const targets = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encTitle}%20${encLink}`,
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?text=${encTitle}&url=${encLink}`,
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encLink}`,
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encLink}`,
    },
  ]

  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share

  const nativeShare = async () => {
    try {
      await navigator.share({ title: title || document.title, url: link })
    } catch { /* user dismissed */ }
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy this link:', link)
    }
  }

  return (
    <section className="share">
      <div className="share__inner">
        <p className="share__label">Share this post</p>
        <div className="share__actions">
          {targets.map(t => (
            <a
              key={t.label}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="share__btn"
            >
              {t.label}
            </a>
          ))}
          {canNativeShare && (
            <button type="button" className="share__btn" onClick={nativeShare}>
              Share
            </button>
          )}
          <button type="button" className={`share__btn share__btn--copy ${copied ? 'is-copied' : ''}`} onClick={copyLink}>
            {copied ? 'Link copied' : 'Copy link'}
          </button>
        </div>
      </div>

      <style>{`
        .share {
          margin-top: 48px;
          padding: 24px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .share__label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 14px;
        }
        .share__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .share__btn {
          padding: 9px 18px;
          border: 1px solid var(--border);
          border-radius: 50px;
          background: var(--bg-card);
          color: var(--text-secondary);
          font-family: var(--font);
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: var(--transition);
        }
        .share__btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .share__btn--copy.is-copied {
          background: var(--accent);
          border-color: var(--accent);
          color: #fff;
        }
      `}</style>
    </section>
  )
}
