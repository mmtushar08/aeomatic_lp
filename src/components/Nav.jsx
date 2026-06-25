import { useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Reviews', href: '#quotes' },
  { label: 'Download', href: '#download' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.top} role="navigation" aria-label="Main navigation">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="/" aria-label="AEOmatic — home">
          <span className={styles.brandMark} aria-hidden="true" />
          AEOmatic
        </a>

        <ul className={styles.links} role="list">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <span className={styles.socialProof} aria-hidden="true">★ 3.1k on WP.org</span>
          <a className="btn btn-primary" href="#download">
            Download free <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <button
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen(v => !v)}
        >
          <span className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className={styles.mobileNav}>
          <ul role="list">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#download" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setOpen(false)}>
            Download free <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </nav>
  )
}
