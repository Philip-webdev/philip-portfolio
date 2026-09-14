import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Founder', href: '#founder' },
    { label: 'Blog', to: '/blog' },
  ]

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__logo">PB.</Link>

          <ul className={`nav__links ${mobileOpen ? 'nav__links--open' : ''}`}>
            {links.map(l => (
              <li key={l.label}>
                {l.to ? (
                  <Link to={l.to} onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ) : (
                  <a href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>
                )}
              </li>
            ))}
          </ul>

          <a href="#contact" className="nav__cta">Get in touch</a>

          <button className={`nav__burger ${mobileOpen ? 'nav__burger--open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: var(--transition);
        }
        .nav--scrolled {
          background: rgba(250,250,250,0.9);
          backdrop-filter: blur(20px);
          padding: 14px 0;
          border-bottom: 1px solid var(--border);
        }
        .nav__inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav__logo {
          font-size: 1.3rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .nav__links {
          display: flex;
          gap: 32px;
        }
        .nav__links a {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.2s;
        }
        .nav__links a:hover { color: var(--text); }
        .nav__cta {
          padding: 10px 22px;
          background: var(--text);
          color: white;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 500;
          transition: var(--transition);
        }
        .nav__cta:hover { background: #333; }
        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
          z-index: 101;
        }
        .nav__burger span {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--text);
          transition: var(--transition);
        }
        .nav__burger--open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
        .nav__burger--open span:nth-child(2) { opacity: 0; }
        .nav__burger--open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }
        @media (max-width: 768px) {
          .nav__links {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 280px;
            background: var(--bg-card);
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 0;
            padding: 40px 32px;
            box-shadow: -8px 0 30px rgba(0,0,0,0.1);
            transform: translateX(100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            border-left: 1px solid var(--border);
          }
          .nav__links--open {
            transform: translateX(0);
            pointer-events: all;
          }
          .nav__links li {
            width: 100%;
          }
          .nav__links a {
            font-size: 1rem;
            padding: 14px 0;
            display: block;
            width: 100%;
            border-bottom: 1px solid var(--border);
          }
          .nav__links a:last-child {
            border-bottom: none;
          }
          .nav__cta { display: none; }
          .nav__burger { display: flex; z-index: 102; }
        }
      `}</style>
    </>
  )
}
