import { useState } from 'react'
import styles from './Developer.module.css'

const tabs = [
  {
    label: 'cURL', badge: 'shell',
    code: `<span class="${styles.com}"># Fetch the AEO audit score for a post</span>
<span class="${styles.key}">curl</span> --request GET \\
  --url <span class="${styles.str}">https://yoursite.com/wp-json/aeomatic/v1/audit/124</span> \\
  --header <span class="${styles.str}">'X-AEO-Key: $AEO_API_KEY'</span>

<span class="${styles.com}"># Response</span>
{
  <span class="${styles.fn}">"post_id"</span>:      <span class="${styles.num}">124</span>,
  <span class="${styles.fn}">"score"</span>:        <span class="${styles.num}">82</span>,
  <span class="${styles.fn}">"delta_7d"</span>:    <span class="${styles.num}">+14</span>,
  <span class="${styles.fn}">"schema_type"</span>: <span class="${styles.str}">"Recipe"</span>,
  <span class="${styles.fn}">"confidence"</span>:  <span class="${styles.num}">0.87</span>,
  <span class="${styles.fn}">"breakdown"</span>: {
    <span class="${styles.fn}">"schema"</span>:     <span class="${styles.num}">94</span>,
    <span class="${styles.fn}">"quotable"</span>:   <span class="${styles.num}">88</span>,
    <span class="${styles.fn}">"questions"</span>:  <span class="${styles.num}">61</span>,
    <span class="${styles.fn}">"links"</span>:      <span class="${styles.num}">76</span>
  },
  <span class="${styles.fn}">"next_fix"</span>:    <span class="${styles.str}">"add FAQPage block"</span>
}`,
  },
  {
    label: 'Node', badge: 'js',
    code: `<span class="${styles.key}">const</span> <span class="${styles.fn}">res</span> = <span class="${styles.key}">await</span> fetch(
  <span class="${styles.str}">'https://yoursite.com/wp-json/aeomatic/v1/audit/124'</span>,
  { headers: { <span class="${styles.str}">'X-AEO-Key'</span>: process.env.AEO_API_KEY } }
);
<span class="${styles.key}">const</span> data = <span class="${styles.key}">await</span> res.json();
console.log(data.score); <span class="${styles.com}">// 82</span>`,
  },
  {
    label: 'Python', badge: 'py',
    code: `<span class="${styles.key}">import</span> requests

r = requests.get(
    <span class="${styles.str}">"https://yoursite.com/wp-json/aeomatic/v1/audit/124"</span>,
    headers={<span class="${styles.str}">"X-AEO-Key"</span>: os.environ[<span class="${styles.str}">"AEO_API_KEY"</span>]}
)
<span class="${styles.key}">print</span>(r.json()[<span class="${styles.str}">"score"</span>])  <span class="${styles.com}"># 82</span>`,
  },
  {
    label: 'PHP', badge: 'php',
    code: `<span class="${styles.key}">$response</span> = wp_remote_get(
    <span class="${styles.str}">'https://yoursite.com/wp-json/aeomatic/v1/audit/124'</span>,
    [<span class="${styles.str}">'headers'</span> => [<span class="${styles.str}">'X-AEO-Key'</span> => AEO_API_KEY]]
);
<span class="${styles.key}">$data</span> = json_decode(wp_remote_retrieve_body(<span class="${styles.key}">$response</span>));
<span class="${styles.key}">echo</span> <span class="${styles.key}">$data</span>->score; <span class="${styles.com}">// 82</span>`,
  },
]

export default function Developer() {
  const [active, setActive] = useState(0)

  return (
    <section id="how" className={styles.dev} aria-labelledby="dev-heading">
      <div className="container">
        <div className={styles.grid}>
          <div className={`${styles.text} rv`}>
            <span className="eyebrow">Development</span>
            <h2 id="dev-heading">
              For teams that want <span className={styles.accent}>programmatic access.</span>
            </h2>
            <p>AEOmatic ships a REST API for everything you can do from the admin — query schema, regenerate llms.txt, set crawler policies, fetch audit scores. Perfect for headless WordPress and CI pipelines.</p>
            <div className={styles.ctas}>
              <a className="btn btn-primary" href="#download">
                View documentation <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href="#download">Contact sales</a>
            </div>
          </div>

          <div className={`${styles.window} rv`} role="region" aria-label="Code examples">
            <div className={styles.tabs} role="tablist">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls={`tab-panel-${i}`}
                  className={`${styles.tab} ${i === active ? styles.tabOn : ''}`}
                  onClick={() => setActive(i)}
                >
                  {t.label} <span className={styles.badge}>{t.badge}</span>
                </button>
              ))}
            </div>
            {tabs.map((t, i) => (
              <div
                key={t.label}
                id={`tab-panel-${i}`}
                role="tabpanel"
                aria-label={`${t.label} example`}
                hidden={i !== active}
              >
                <pre
                  className={styles.code}
                  dangerouslySetInnerHTML={{ __html: t.code }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
