export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__card">
          <svg className="testimonials__quote" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="testimonials__text">
            Philip is a thoughtful builder who ships real products that solve
            real problems. His work across EdTech, FinTech, and AI shows a
            rare ability to bridge technical depth with user impact.
          </blockquote>
          <div className="testimonials__author">
            <div className="testimonials__avatar">
              <span>AS</span>
            </div>
            <div>
              <p className="testimonials__name">African Stable-coin Network</p>
              <p className="testimonials__role">Recognition, July 2025</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .testimonials {
          padding: 80px 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }
        .testimonials__card {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          position: relative;
        }
        .testimonials__quote {
          color: var(--peach);
          margin-bottom: 20px;
        }
        .testimonials__text {
          font-family: var(--font-reading);
          font-size: 1.2rem;
          font-style: italic;
          color: var(--text);
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .testimonials__author {
          display: flex;
          align-items: center;
          gap: 14px;
          justify-content: center;
        }
        .testimonials__avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--peach-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
        }
        .testimonials__name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
        }
        .testimonials__role {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}
