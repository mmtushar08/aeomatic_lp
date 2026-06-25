import styles from './Awards.module.css'

const awards = [
  { big: '#1',   lbl: 'WordPress.org',   sub: 'Top AEO plugin, 2026 Q1' },
  { big: '4.9',  suffix: '/5', lbl: 'Avg review score', sub: 'From 1,800+ verified reviews' },
  { big: '50k+', lbl: 'Active sites',    sub: 'In 80+ countries worldwide' },
  { big: '∞',    lbl: 'Free',            sub: 'GPL v2 · forever, no upsell' },
]

export default function Awards() {
  return (
    <section className={styles.awards} aria-label="Awards and ratings">
      <div className="container">
        <div className={`${styles.row} rv`}>
          <div className={styles.headCol}>
            <h3>Loved by builders.<br />Recognised by the standards bodies.</h3>
            <p>AEOmatic is the only AEO-focused plugin co-authored with the maintainers of the llms.txt and schema.org guidance.</p>
          </div>
          {awards.map(a => (
            <div key={a.lbl} className={styles.award}>
              <div className={styles.big}>
                {a.big}
                {a.suffix && <span className={styles.bigSuffix}>{a.suffix}</span>}
              </div>
              <div className={styles.lbl}>{a.lbl}</div>
              <div className={styles.sub}>{a.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
