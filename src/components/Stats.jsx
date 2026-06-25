import { useEffect, useRef } from 'react'
import styles from './Stats.module.css'

const stats = [
  { target: 60, suffix: '%', label: 'AI Overview coverage', desc: 'Google AI Overviews now appear on 60%+ of informational queries — and growing.' },
  { target: 2.4, suffix: 'B+', label: 'Monthly AI answers', desc: 'ChatGPT, Claude, Gemini and Perplexity answer billions of queries every month.' },
  { target: 3, suffix: '×', label: 'Citation lift', desc: 'Sites running AEOmatic see 3× more answer-engine citations within 60 days.' },
]

function useCountUp(rowRef) {
  useEffect(() => {
    const row = rowRef.current
    if (!row) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        row.querySelectorAll('[data-target]').forEach(el => {
          const target = parseFloat(el.dataset.target)
          const suffix = el.dataset.suffix || ''
          const dur = 1400
          const start = performance.now()
          const isFloat = target % 1 !== 0
          const step = t => {
            const p = Math.min(1, (t - start) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            el.textContent = (isFloat ? (target * eased).toFixed(1) : Math.round(target * eased)) + suffix
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        })
        io.unobserve(row)
      })
    }, { threshold: 0.3 })
    io.observe(row)
    return () => io.disconnect()
  }, [rowRef])
}

export default function Stats() {
  const rowRef = useRef(null)
  useCountUp(rowRef)

  return (
    <section className={styles.stats} aria-labelledby="stats-heading">
      <div className="container">
        <div className={`${styles.head} rv`}>
          <div>
            <span className="eyebrow">Why AEO in 2026</span>
            <h2 className={styles.secH} id="stats-heading">
              Built for the <span className={styles.accent}>answer era.</span>
            </h2>
          </div>
          <p className={styles.sub}>
            Search results are being rewritten by AI engines. With 10+ years of schema and SEO context baked in,
            AEOmatic gets your WordPress site quotable across every answer engine — without changing a single theme file.
          </p>
        </div>

        <div className={`${styles.row} rv`} ref={rowRef}>
          {stats.map(s => (
            <div key={s.label} className={styles.cell}>
              <div
                className={styles.n}
                data-target={s.target}
                data-suffix={s.suffix}
              >
                {s.target % 1 !== 0 ? `${s.target.toFixed(1)}${s.suffix}` : `${s.target}${s.suffix}`}
              </div>
              <div className={styles.l}>{s.label}</div>
              <div className={styles.d}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
