import styles from './Features.module.css'

/* ─── Visual sub-components ─── */

function SchemaVisual() {
  const rows = [
    { nm: 'Recipe', pct: 87, dim: false },
    { nm: 'HowTo',  pct: 62, dim: true  },
    { nm: 'Article',pct: 31, dim: true  },
    { nm: 'Product',pct: 18, dim: true  },
    { nm: 'Event',  pct:  9, dim: true  },
  ]
  return (
    <>
      <div className={styles.fbvHead}><span>post · #124 · "Sourdough Focaccia"</span><span>recipe</span></div>
      <div className={styles.conf}>
        {rows.map(r => (
          <div key={r.nm} className={`${styles.crow} ${r.dim ? styles.crowDim : ''}`}>
            <span className={styles.crowNm}>{r.nm}</span>
            <span className={styles.crowBar}><i style={{ width: `${r.pct}%` }} /></span>
            <span className={styles.crowPct}>{r.pct}%</span>
          </div>
        ))}
      </div>
      <div className={styles.schemaMeta}>
        <span className={styles.good}>✓</span> detected from: <span className={styles.inkLight}>ingredients list, cook-time, yield</span><br />
        <span className={styles.good}>✓</span> JSON-LD injected → <span className={styles.accentText}>live</span>
      </div>
    </>
  )
}

function LlmsVisual() {
  return (
    <>
      <div className={styles.fbvHead}><span>yoursite.com/llms.txt</span><span>auto · synced</span></div>
      <pre className={styles.code}>
        <span className={styles.com}># slowloafkitchen.com</span>{'\n'}
        <span className={styles.key}>&gt;</span>{' '}Slow-fermentation baking blog — recipes &amp; technique{'\n\n'}
        <span className={styles.codeH}>## Recipes</span>{'\n'}
        {`- `}<a className={styles.codeA}>Sourdough Focaccia, Slow Rise</a>{' '}<span className={styles.com}>— 36h cold ferment</span>{'\n'}
        {`- `}<a className={styles.codeA}>Country Loaf, 78% Hydration</a>{' '}<span className={styles.com}>— beginner</span>{'\n'}
        {`- `}<a className={styles.codeA}>Olive Oil Brioche</a>{'          '}<span className={styles.com}>— enriched dough</span>{'\n\n'}
        <span className={styles.codeH}>## Technique</span>{'\n'}
        {`- `}<a className={styles.codeA}>Stretch and Folds, Explained</a>{'\n'}
        {`- `}<a className={styles.codeA}>Reading Your Starter</a>
      </pre>
    </>
  )
}

function CrawlerVisual() {
  const crawlers = [
    { nm: 'GPTBot', on: true }, { nm: 'ClaudeBot', on: true }, { nm: 'PerplexityBot', on: true },
    { nm: 'GeminiBot', on: true }, { nm: 'Google-Extended', on: true }, { nm: 'CCBot', on: false },
    { nm: 'Applebot', on: true }, { nm: 'YouBot', on: false }, { nm: 'Bytespider', on: true },
    { nm: 'Amazonbot', on: false }, { nm: 'DiffBot', on: true }, { nm: '+7 more', on: true },
  ]
  return (
    <>
      <div className={styles.fbvHead}><span>crawler policy · live</span><span>14 allowed · 4 blocked</span></div>
      <div className={styles.crawlers}>
        {crawlers.map(c => (
          <div key={c.nm} className={`${styles.cr} ${c.on ? styles.crOn : styles.crOff}`}>
            <span className={styles.crSw} />
            <span className={styles.crNm}>{c.nm}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function AuditVisual() {
  const r = 60
  const circ = 2 * Math.PI * r
  const dashOffset = circ * (1 - 82 / 100)
  return (
    <>
      <div className={styles.fbvHead}><span>aeo audit · #124</span><span>↑ +14 vs last week</span></div>
      <div className={styles.gauge}>
        <div className={styles.ring}>
          <svg viewBox="0 0 140 140" role="img" aria-label="AEO score: 82 out of 100">
            <circle cx="70" cy="70" r={r} stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none"/>
            <circle cx="70" cy="70" r={r} stroke="url(#gg)" strokeWidth="8" fill="none"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={dashOffset}
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            />
            <defs>
              <linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.18 248)"/>
                <stop offset="100%" stopColor="oklch(0.62 0.22 280)"/>
              </linearGradient>
            </defs>
          </svg>
          <div className={styles.ringNum}>82<span className={styles.ringOf}>/100</span></div>
        </div>
        <div>
          {[
            ['Schema completeness', '94%'],
            ['Quote-ready paragraphs', '88%'],
            ['Question coverage', '61%'],
            ['Internal entity links', '76%'],
          ].map(([label, val]) => (
            <div key={label} className={styles.gl}>
              <span>{label}</span><strong>{val}</strong>
            </div>
          ))}
          <div className={styles.glUp}>↑ +14 since last week</div>
        </div>
      </div>
    </>
  )
}

/* ─── Feature block data ─── */
const blocks = [
  {
    tag: 'Schema detection',
    heading: 'Auto-detect the right type — with a confidence score.',
    body: 'AEOmatic reads your post and picks from 26 schema.org types: Article, Recipe, Product, How-To, FAQ, Event and more. Every choice ships with a confidence percentage so you know when to trust it and when to override.',
    list: [
      { icon: '26', title: 'Schema types out of the box', text: 'From Article to LocalBusiness to MedicalCondition — covered without configuration.' },
      { icon: '%',  title: 'Confidence on every detection', text: 'See exactly how sure AEOmatic is before it ships JSON-LD into your &lt;head&gt;.' },
      { icon: '↺',  title: 'One-click override', text: 'Edge cases happen. Pick the right type yourself; the rest stays auto-synced.' },
    ],
    cta: 'Explore schema detection',
    Visual: SchemaVisual,
  },
  {
    tag: 'LLM indexing',
    heading: 'A clean llms.txt, generated for you.',
    body: 'The emerging standard — like robots.txt for answer engines — that tells LLMs which pages on your site are most worth quoting. AEOmatic writes yours automatically and updates it as you publish.',
    list: [
      { icon: '⌘', title: 'Auto-prioritised by content', text: 'Most quotable pages bubble to the top, sorted by freshness and structure.' },
      { icon: '↧', title: 'Markdown export', text: 'Review offline, edit, push back. Or let AEOmatic keep it in sync.' },
      { icon: '⊘', title: 'Per-section opt-out', text: 'Exclude private, paid, or low-quality pages with a single toggle.' },
    ],
    cta: 'Read the llms.txt guide',
    Visual: LlmsVisual,
  },
  {
    tag: 'Crawler control',
    heading: 'Decide which AIs can read you.',
    body: 'Allow the engines you want to be cited by. Block the ones you don\'t. AEOmatic writes the robots directives, the meta tags, and the IP-aware rules — across 18 known AI crawlers — so your policy stays consistent everywhere.',
    list: [
      { icon: '18', title: 'Named crawlers covered', text: 'GPTBot, ClaudeBot, PerplexityBot, GeminiBot, Google-Extended, Applebot, CCBot — and 11 more.' },
      { icon: '⊕', title: 'Per-content-type rules', text: 'Block paid posts from training while letting your blog be quoted freely.' },
      { icon: '≡', title: 'Audit log', text: 'See what each bot last fetched — and when.' },
    ],
    cta: 'Explore crawler control',
    Visual: CrawlerVisual,
  },
  {
    tag: 'Content audit',
    heading: 'A 0–100 AEO score, with the next thing to fix.',
    body: 'Every post gets a quotability score. The fixes are written as direct edits you can apply with one click — no consultant, no waiting.',
    list: [
      { icon: '100', title: 'Quotability score', text: 'One number that tells you whether AI engines will pull from this page.' },
      { icon: '★',  title: 'Priority-ordered fixes', text: 'The biggest wins, in order, with one-click apply.' },
      { icon: '≋',  title: 'Trend history', text: 'See how your score moves with every publish — site-wide or per-post.' },
    ],
    cta: 'Explore the audit',
    Visual: AuditVisual,
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.features} aria-labelledby="features-heading">
      <div className="container">
        <div className={`${styles.head} rv`}>
          <h2 id="features-heading">
            Everything you need <span className={styles.accent}>to be quotable.</span>
          </h2>
          <p>From schema detection to crawler control — every module targets a specific reason an AI engine might skip your page, and fixes it automatically.</p>
        </div>

        {blocks.map((b, i) => (
          <div key={b.tag} className={`${styles.fblock} rv`}>
            <div className={styles.fbText}>
              <span className={styles.fbTag}>{b.tag}</span>
              <h3 className={styles.fbH}>{b.heading}</h3>
              <p className={styles.fbP}>{b.body}</p>
              <ul className={styles.fbList}>
                {b.list.map(item => (
                  <li key={item.title}>
                    <span className={styles.icn} aria-hidden="true">{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <span dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className={styles.fbCta}>
                {b.cta} <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
            <div className={styles.fbVisual}>
              <b.Visual />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
