import styles from './TrustBar.module.css'

const logos = [
  'Slowloaf', 'Northwind', 'Linen & Loom', 'Field Notes Co.',
  'Halcyon Press', 'Marginalia', 'Atelier Twelve', 'Open Stack',
]

export default function TrustBar() {
  return (
    <div className={styles.trust} aria-label="Trusted by">
      <p className={styles.label}>Trusted by 50,000+ WordPress sites — including these</p>
      <div className={styles.marquee} role="img" aria-label="Companies using AEOmatic">
        <div className={styles.track} aria-hidden="true">
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className={styles.logo}>
              <span className={styles.logoMk} />
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
