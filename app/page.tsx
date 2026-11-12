import Link from "next/link";

export default function Home() {
  return (
    <main className="stage-landing">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <section className="stage-landing__content">
        <p className="eyebrow"><span className="status-dot" /> Stage 0 of 7</p>
        <p className="wordmark"><span>Credit</span>Saathi <i>AI</i></p>
        <h1>The design foundation<br />is ready for review.</h1>
        <p className="stage-landing__copy">
          A warm, consent-first visual language for a companion that helps Indian small businesses move from paperwork to payout.
        </p>
        <Link className="button button--saffron" href="/design">Explore the design system <span aria-hidden>↗</span></Link>
      </section>
      <p className="stage-footnote">All interface examples use synthetic data. No lender, loan, or scheme outcome is implied.</p>
    </main>
  );
}
