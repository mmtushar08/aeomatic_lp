import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const checklistSteps = [
  'Detecting schema type',
  'Generating llms.txt',
  'Writing JSON-LD into <head>',
  'Updating crawler policy',
  'Running AEO audit',
]

const metaItems = [
  '✓ Free forever',
  '✓ No API keys',
  '✓ 50,000+ sites',
  '✓ GPL v2',
]

function useChecklist(itemCount) {
  const activeRef = useRef(0)
  const itemsRef = useRef([])

  useEffect(() => {
    const items = itemsRef.current
    if (!items.length) return

    let timer
    function tick() {
      const active = activeRef.current
      items.forEach((el, i) => {
        el.classList.remove(styles.ciActive, styles.ciDone)
        if (i < active) el.classList.add(styles.ciDone)
        else if (i === active) el.classList.add(styles.ciActive)
      })
      activeRef.current = (active + 1) % (itemCount + 1)
      timer = setTimeout(tick, activeRef.current === 0 ? 1400 : 1300)
    }
    tick()
    return () => clearTimeout(timer)
  }, [itemCount])

  return itemsRef
}

export default function Hero() {
  const itemsRef = useChecklist(checklistSteps.length)

  return (
    <header className={styles.hero}>
      <div className={`container ${styles.inner}`}>

        {/* Left: copy */}
        <div>
          <div className={styles.badge} role="note">
            <span className={styles.badgeTag}>v1.6</span>
            Free WordPress plugin — just shipped
          </div>

          <h1 className={styles.heroH} id="hero-heading">
            <span className={styles.grad}>Be cited by</span><br />
            <span className={styles.accent}>every AI answer engine</span><br />
            <span className={`${styles.grad} ${styles.gradDim}`}>automatically.</span>
          </h1>

          <p className={styles.heroSub}>
            From schema detection to{' '}
            <code className={styles.inlineCode}>llms.txt</code>, AEOmatic handles
            the entire answer-engine layer for WordPress — so ChatGPT, Claude, Gemini,
            Perplexity and Google AI Overviews quote your URL, not someone else's.
          </p>

          <div className={styles.heroCtas}>
            <a className="btn btn-primary" href="#download">
              Download free <span className="arrow" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#how">See how it works</a>
          </div>

          <ul className={styles.heroMeta} aria-label="Key features">
            {metaItems.map((item, i) => (
              <>
                {i > 0 && <li key={`dot-${i}`} className={styles.dot} aria-hidden="true" />}
                <li key={item}>{item}</li>
              </>
            ))}
          </ul>
        </div>

        {/* Right: animated AEO stage */}
        <div className={styles.stage} aria-hidden="true" role="presentation">
          <div className={styles.stageHead}>
            <span>aeo.run · session #2148</span>
            <span className={styles.lights}><i /><i /><i /></span>
          </div>

          <div className={styles.stageBody}>
            <p className={styles.stageTitle}>
              Optimizing <strong>slowloafkitchen.com</strong> for citation…
            </p>

            <ol className={styles.checklist}>
              {checklistSteps.map((text, i) => (
                <li
                  key={text}
                  className={styles.ci}
                  ref={el => { itemsRef.current[i] = el }}
                >
                  <span className={styles.ciIndicator} />
                  <span className={styles.ciText}>{text}</span>
                  <span className={styles.ciMeta}>step {i + 1} / {checklistSteps.length}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className={styles.stageFoot}>
            <span className={styles.stageLive}>
              <span className={styles.stageDot} />
              live · 12 citations / hr
            </span>
            <span>WordPress 6.4+</span>
          </div>
        </div>

      </div>
    </header>
  )
}
