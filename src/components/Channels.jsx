import styles from './Channels.module.css'

const cards = [
  { icon: 'JL', title: 'JSON-LD', desc: "Structured data injected into every page's &lt;head&gt;, generated from your content with confidence scoring.", cta: 'Explore JSON-LD' },
  { icon: 'LM', title: 'llms.txt', desc: 'The new standard for answer engines. AEOmatic writes yours automatically and keeps it synced.', cta: 'Explore llms.txt' },
  { icon: 'CR', title: 'Crawlers', desc: 'Allow or block 18 named AI bots — per content-type, with audit logs and IP-aware rules.', cta: 'Explore crawlers' },
  { icon: 'AD', title: 'Audit', desc: '0–100 quotability score with priority-ordered fixes you can apply with one click.', cta: 'Explore audit' },
]

export default function Channels() {
  return (
    <section className={styles.channels} aria-labelledby="channels-heading">
      <div className="container">
        <div className={`${styles.head} rv`}>
          <h2 id="channels-heading">
            One plugin. <span className={styles.accent}>Every surface.</span>
          </h2>
          <p>Schema, llms.txt, crawler rules, and audit — four pillars that make every page on your site ready for the answer era.</p>
        </div>
        <div className={styles.grid}>
          {cards.map(c => (
            <article key={c.title} className={`${styles.ch} rv`}>
              <div className={styles.chIcon} aria-hidden="true">{c.icon}</div>
              <h3 className={styles.chTitle}>{c.title}</h3>
              <p className={styles.chDesc} dangerouslySetInnerHTML={{ __html: c.desc }} />
              <a href="#" className={styles.chCta}>
                {c.cta} <span className="arrow" aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
