import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Plugin',
    links: ['Features', 'Schema', 'llms.txt', 'Crawlers', 'Audit'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'llms.txt guide', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Support',
    links: ['WordPress.org', 'GitHub', 'Contact', 'Status'],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.foot}>
          <div className={styles.brand}>
            <div className={styles.brandInner}>
              <span className={styles.brandMark} aria-hidden="true" />
              AEOmatic
            </div>
            <p>Answer Engine Optimization for WordPress. Make your content quotable by ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews — for free.</p>
          </div>
          {cols.map(col => (
            <nav key={col.heading} aria-label={col.heading}>
              <h5 className={styles.colHead}>{col.heading}</h5>
              <ul>
                {col.links.map(link => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className={styles.bottom}>
          <span>© 2026 AEOmatic · GPL v2 licensed</span>
          <span>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
