import { useEffect, useRef } from 'react'
import styles from './Integrations.module.css'

const bubbles = [
  { label: 'ChatGPT',     abbr: 'G', color: '#10a37f', pos: styles.b1 },
  { label: 'Claude',      abbr: 'C', color: '#d97706', pos: styles.b2 },
  { label: 'Gemini',      abbr: 'G', color: '#4285f4', pos: styles.b3 },
  { label: 'Perplexity',  abbr: 'P', color: '#22d3ee', pos: styles.b4 },
  { label: 'AI Overviews',abbr: 'A', color: '#f5f1ea', textColor: '#0a0a0a', pos: styles.b5 },
  { label: 'Copilot',     abbr: 'C', color: '#a78bfa', pos: styles.b6 },
  { label: 'You.com',     abbr: 'Y', color: '#fb923c', pos: styles.b7 },
  { label: 'Bytespider',  abbr: 'B', color: '#34d399', pos: styles.b8 },
]

function useBubbleDrift(containerRef) {
  useEffect(() => {
    const els = containerRef.current?.querySelectorAll('[data-bubble]')
    if (!els?.length) return
    let rafId
    function tick(t) {
      els.forEach((b, i) => {
        const phase = i * 0.7
        const sx = Math.sin(t / 1500 + phase) * 4
        const sy = Math.cos(t / 1700 + phase) * 4
        b.style.transform = `translate(${sx}px, ${sy}px)`
      })
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [containerRef])
}

export default function Integrations() {
  const stageRef = useRef(null)
  useBubbleDrift(stageRef)

  return (
    <section className={styles.section} aria-labelledby="integrations-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.text} rv`}>
            <span className="eyebrow">Reach &amp; ecosystem</span>
            <h2 id="integrations-heading">
              Every <span className={styles.accent}>answer engine,</span> covered.
            </h2>
            <p>One plugin, six answer engines — and counting. AEOmatic ships with crawler policies and structured-data profiles tuned for each, updated whenever the standards shift.</p>
            <a className="btn btn-primary" href="#download" style={{ padding: '12px 18px' }}>
              Get AEOmatic free <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div className={`${styles.stage} rv`} ref={stageRef} aria-hidden="true">
            <div className={styles.center}><span>aeo</span></div>
            {bubbles.map((b, i) => (
              <div
                key={b.label}
                className={`${styles.bubble} ${b.pos}`}
                data-bubble={i}
              >
                <span
                  className={styles.mk}
                  style={{ background: b.color, color: b.textColor || '#fff' }}
                >
                  {b.abbr}
                </span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
