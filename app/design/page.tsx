import Link from "next/link";

const colors = [
  { name: "Midnight", token: "--ink-950", hex: "#0F1B3D", type: "dark" },
  { name: "Indigo", token: "--indigo-700", hex: "#263F87", type: "dark" },
  { name: "Marigold", token: "--saffron-500", hex: "#F5A524", type: "light" },
  { name: "Teal", token: "--teal-500", hex: "#18B8A6", type: "light" },
  { name: "Coral", token: "--coral-500", hex: "#FF6B5E", type: "light" },
  { name: "Warm cream", token: "--cream-100", hex: "#FFF6E5", type: "light" },
];

const typeSamples = [
  { label: "Display / 64", className: "type-display", copy: "Your companion." },
  { label: "Heading / 32", className: "type-heading", copy: "From records to readiness." },
  { label: "Body / 17", className: "type-body", copy: "Plain language, meaningful choice, and a clear next step." },
  { label: "Hindi / 25", className: "type-language", copy: "कागज़ से कर्ज़ तक, आपका साथी।" },
  { label: "Kannada / 23", className: "type-language", copy: "ದಾಖಲೆಯಿಂದ ಸಾಲದವರೆಗೆ, ನಿಮ್ಮ ಸಂಗಾತಿ." },
];

const journeys = [
  ["01", "Understand", "Tell Saathi about your business in your own words."],
  ["02", "Choose", "Review each use of your information before sharing it."],
  ["03", "Prepare", "Build a clear, lender-ready file — only when you approve."],
];

export default function DesignPage() {
  return (
    <main className="design-page">
      <header className="design-nav">
        <Link href="/" className="wordmark" aria-label="CreditSaathi AI home"><span>Credit</span>Saathi <i>AI</i></Link>
        <p>Visual language / v0.1</p>
        <a href="#sitemap" className="nav-pill">Sitemap <span aria-hidden>↓</span></a>
      </header>

      <section className="design-hero">
        <div className="hero-ornament hero-ornament--dots" aria-hidden />
        <div className="hero-ornament hero-ornament--thread" aria-hidden />
        <p className="eyebrow"><span className="status-dot" /> Foundation / design review</p>
        <h1>Built to feel <em>human</em><br />when money feels hard.</h1>
        <p className="design-hero__intro">CreditSaathi’s system is rooted in the texture of a working notebook and the clarity a financial decision deserves. It is warm, direct, and always explicit about what is verified.</p>
        <div className="principle-row" aria-label="Core design principles">
          <span>Consent-first</span><span>Plain-language</span><span>Evidence-visible</span><span>Human-in-loop</span>
        </div>
      </section>

      <section className="design-section" aria-labelledby="colour-title">
        <div className="section-label"><span>01</span><h2 id="colour-title">Colour makes status legible.</h2></div>
        <p className="section-description">Indigo holds the system steady. Marigold is an invitation, teal communicates verified progress, and coral calls for attention. Colour never carries a message alone.</p>
        <div className="swatch-grid">
          {colors.map((color) => <article className={`swatch swatch--${color.type}`} style={{ backgroundColor: color.hex }} key={color.token}>
            <span>{color.name}</span><code>{color.token}</code><b>{color.hex}</b>
          </article>)}
        </div>
      </section>

      <section className="design-section split-section" aria-labelledby="type-title">
        <div>
          <div className="section-label"><span>02</span><h2 id="type-title">Words lead the way.</h2></div>
          <p className="section-description">A soft editorial display face gives the product its voice; a clear sans keeps financial information easy to scan. Native scripts receive equal visual care.</p>
        </div>
        <div className="type-list">
          {typeSamples.map((sample) => <div className="type-sample" key={sample.label}>
            <p className="token-label">{sample.label}</p><p className={sample.className}>{sample.copy}</p>
          </div>)}
        </div>
      </section>

      <section className="design-section" aria-labelledby="components-title">
        <div className="section-label"><span>03</span><h2 id="components-title">Components communicate confidence.</h2></div>
        <div className="component-showcase">
          <article className="preview-card preview-card--profile">
            <div className="card-kicker"><span className="icon-disc">✦</span><span>Synthetic preview</span><button aria-label="More options">•••</button></div>
            <h3>Business readiness</h3>
            <div className="confidence-row"><strong>Needs your review</strong><span>Not a credit score</span></div>
            <div className="progress-track"><i /></div>
            <p>We’ll show the evidence behind every result and name any missing information.</p>
            <button className="button button--ink">Review details <span aria-hidden>→</span></button>
          </article>
          <article className="preview-card preview-card--consent">
            <p className="overline">Meri Ijaazat <span>• Your consent</span></p>
            <h3>You decide what moves forward.</h3>
            <div className="consent-line"><span className="check">✓</span><p><b>Bank statement analysis</b><small>Used to prepare your file</small></p><button className="text-button">Review</button></div>
            <div className="consent-line consent-line--off"><span className="check">+</span><p><b>Share with a lender</b><small>Not shared</small></p><button className="text-button">Choose</button></div>
          </article>
          <article className="preview-card preview-card--scheme">
            <p className="overline">Scheme discovery</p>
            <div className="scheme-stamp">M</div>
            <h3>Evidence before advice.</h3>
            <p>Scheme information is shown with its source and verification date. Eligibility is never promised.</p>
            <button className="source-button"><span>↗</span> View source <small>Unverified: check with branch</small></button>
          </article>
        </div>
      </section>

      <section id="sitemap" className="design-section sitemap" aria-labelledby="sitemap-title">
        <div className="section-label"><span>04</span><h2 id="sitemap-title">A journey with no dark corners.</h2></div>
        <p className="section-description">The public story builds trust before a visitor is asked to share anything. The private workspace uses the same language, with more context at every decision point.</p>
        <div className="sitemap-tree">
          <article className="map-root"><p>Public experience</p><h3>Home</h3><span>Story, trust, and an invitation to begin</span></article>
          <div className="map-branches">
            <article><b>How it works</b><span>Consent-first workflow</span></article>
            <article><b>For lenders</b><span>Evidence-ready files</span></article>
            <article><b>For facilitators</b><span>Guided cohorts</span></article>
            <article><b>Impact &amp; responsibility</b><span>Limits, sources, fairness</span></article>
          </div>
          <article className="map-root map-root--private"><p>Private workspace</p><h3>My CreditSaathi</h3><span>Sign-in required · user-controlled data</span></article>
          <div className="map-branches map-branches--private">
            <article><b>Business profile</b><span>Information you provide</span></article>
            <article><b>Documents</b><span>Private records &amp; extraction review</span></article>
            <article><b>Analysis</b><span>Evidence, limitations &amp; corrections</span></article>
            <article><b>Applications</b><span>Drafts · explicit approve step</span></article>
          </div>
        </div>
      </section>

      <section className="journey-band" aria-labelledby="journey-title">
        <p className="eyebrow"><span className="status-dot" /> Interaction north star</p>
        <h2 id="journey-title">Nothing happens to a business owner.<br /><em>It happens with them.</em></h2>
        <div className="journey-cards">{journeys.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <footer className="design-footer"><p>CreditSaathi AI · A design system for consent-first credit readiness.</p><p>Stage 0 / ready for approval</p></footer>
    </main>
  );
}
