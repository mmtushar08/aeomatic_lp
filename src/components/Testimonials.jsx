import styles from './Testimonials.module.css'

const row1 = [
  { av: 'MV', name: 'Mira Voss',     title: 'slowloafkitchen.com',    quote: '"I had llms.txt generated and 200 recipes serving structured data before my second coffee. Citation traffic from Perplexity tripled in a month."' },
  { av: 'DK', name: 'Devin Kapoor',  title: 'Lead SEO · Northwind',   quote: '"Replaced two paid plugins and a custom JSON-LD snippet with AEOmatic. The confidence score is genuinely best-in-class."' },
  { av: 'SA', name: 'Sara Albright',  title: 'Linen & Loom',           quote: '"The audit told us exactly which 12 product pages were holding us back. ChatGPT names us on three buying-guide queries now."' },
  { av: 'RH', name: 'Reza Hassan',   title: 'Halcyon Press',           quote: '"Setup took longer to caffeinate for than to actually install. llms.txt was live in three minutes."' },
  { av: 'EC', name: 'Elena Costa',   title: 'Marginalia',              quote: '"Crawler control alone is worth it — we finally have a clear policy across GPTBot, ClaudeBot and Google-Extended."' },
]

const row2 = [
  { av: 'JL', name: 'Juno Lee',       title: 'Field Notes Co.',        quote: '"The audit score is the part I keep coming back to — it\'s like Lighthouse for AI engines."' },
  { av: 'PK', name: 'Priya Krishnan', title: 'Open Stack',             quote: '"Works perfectly alongside Yoast. AEO layer drops in cleanly without touching the rest of our SEO setup."' },
  { av: 'AT', name: 'Atelier Twelve', title: 'Editorial studio',       quote: '"For a free plugin this is unreasonably good. Found three schema misses on day one."' },
  { av: 'NF', name: 'Nora Fischer',   title: 'Atelier Brut',           quote: '"Page-builder support is the real story for us — we run Bricks and everything just worked."' },
  { av: 'TW', name: 'Tomás Weber',   title: 'Solo dev',               quote: '"Honestly the cleanest plugin UX I\'ve seen in WordPress in years."' },
]

function ReviewCard({ av, name, title, quote }) {
  return (
    <figure className={styles.card}>
      <div className={styles.stars} aria-label="5 stars">★★★★★</div>
      <blockquote className={styles.quote}>{quote}</blockquote>
      <figcaption className={styles.foot}>
        <div className={styles.av} aria-hidden="true">{av}</div>
        <div>
          <div className={styles.nm}>{name}</div>
          <div className={styles.ti}>{title}</div>
        </div>
      </figcaption>
    </figure>
  )
}

function ReviewRow({ reviews, reverse }) {
  const doubled = [...reviews, ...reviews]
  return (
    <div className={`${styles.row} ${reverse ? styles.rowReverse : ''}`}>
      <div className={styles.track}>
        {doubled.map((r, i) => <ReviewCard key={i} {...r} />)}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="quotes" className={styles.reviews} aria-labelledby="reviews-heading">
      <div className="container">
        <div className={`${styles.head} rv`}>
          <span className="eyebrow">From the community</span>
          <h2 id="reviews-heading">
            Builders shipping with <span className={styles.accent}>AEOmatic.</span>
          </h2>
          <p>Verified WordPress.org reviewers — abridged where indicated.</p>
        </div>
      </div>
      <ReviewRow reviews={row1} reverse={false} />
      <ReviewRow reviews={row2} reverse={true} />
    </section>
  )
}
