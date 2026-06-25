import styles from './CtaPoster.module.css'

export default function CtaPoster() {
  return (
    <section id="download" aria-labelledby="cta-heading">
      <div className="container">
        <div className={`${styles.poster} rv`}>
          <div className={styles.glow} aria-hidden="true" />
          <h2 id="cta-heading">
            Be cited. <span className={styles.accent}>Be quoted.</span><br />
            Start free today.
          </h2>
          <p>Free forever. Installs in under a minute. No account, no credit card, no API key — and your AEO score updates the moment you publish.</p>
          <div className={styles.ctas}>
            <a className="btn btn-primary" href="https://wordpress.org/plugins/aeomatic/" target="_blank" rel="noopener noreferrer">
              Download free on WordPress.org <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className={`btn ${styles.ghostDark}`} href="#features">Explore features</a>
          </div>
          <p className={styles.small} aria-label="Rating and license info">★★★★★ rated · GPL v2 · WordPress 6.4+</p>
        </div>
      </div>
    </section>
  )
}
