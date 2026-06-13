import { CmsTopbar, Field, FieldGrid, SaveBar } from "@/components/cms/Ui";

export const metadata = { title: "FAQs — Studio CMS" };

const SITE_FAQS = [
  ["How does payment work?", "We currently offer the following payment options, ensuring a smooth transaction with je.design: Square Invoicing, Afterpay, Cashapp, Venmo, PayPal Invoicing, and crypto such as Bitcoin, Litecoin, Solana and XRP. If there is a payment option you do not see and you'd like to inquire about it, you may reach out to us at inquiry@jeremynellsworth.com."],
  ["Which files will I receive?", "You'll receive the final design in the following formats: AI, JPG, PNG, SVG, and PDF. For crisp, high-quality printing, we recommend AI, SVG, or PDF files, while JPG and PNG are best for displaying your logo online."],
  ["How long does it take to complete a project?", "On average, it takes 2–3 weeks."],
  ["How many revisions do I get?", "This depends on what type of package you're going to get, but it's typically 5 to 7 revisions."],
  ["What if I don't like the design?", "Our goal is to ensure you feel confident about your brand's direction from the very first step. We begin every project with a thorough discovery phase, clarifying your vision, objectives, and preferences so we can present a concept that aligns with your goals. If you are not happy and want to pivot or request a different direction, we allow for one concept change early in the process to keep our timeline on track. That way, if something isn't sitting right, we can address it promptly before moving forward with refinements. By staying in close communication throughout, we strive to deliver a final design that meets — and exceeds — your expectations."],
  ["How soon before I see the first draft?", "You can typically expect your initial design within 5 to 7 business days after payment is received. This timeframe allows us to conduct thorough research, explore creative options, and present a well-thought-out concept. In certain cases, we can expedite delivery if your project requires a quicker turnaround."],
  ["Are your designs 100% original?", "Absolutely. Every concept we create starts with blank pages and fresh ideas — no templates, no recycled elements. We take pride in doing all of our work in-house at je.design, conducting thorough research and brainstorming to ensure each logo is truly unique."],
];

const BAP_FAQS = [
  ["Is this a subscription?", "No. It's a fixed payment plan — $150 down, then $150/month until your project balance is paid off. Once it's paid, you're done. No recurring fees, no renewals."],
  ["Do I get my files right away?", "Yes — full file access from day one. We never hold your assets hostage while you're paying. Every client, no exceptions."],
  ["How fast do we start?", "Immediately. The moment you activate for $150, your project goes into production — no waiting weeks for deposits to clear or approval rounds to schedule."],
  ["What if I already have a logo?", "Perfect — the program covers rebrands and refreshes too. We'll take what's working, fix what isn't, and deliver a brand system you can actually grow with."],
  ["Is this only for new businesses?", "Not at all. We work with new launches and established companies that have outgrown their DIY branding alike."],
  ["What types of businesses do you work with?", "Service-based businesses — trades, contractors and companies that build things: roofing, HVAC, plumbing, electrical, landscaping and beyond."],
  ["How do revisions work?", "They're included. We work through revision rounds collaboratively until you love it — no per-round fees, no scope creep."],
  ["How do I get an instant quote?", "Click any \"Get Instant Quote\" button on this page — it takes about 60 seconds and there's no obligation."],
];

function FaqGroup({ title, where, items }) {
  return (
    <section className="cms-panel">
      <header className="cms-panel__head">
        <h2>{title}</h2>
        <span className="cms-panel__meta">{where}</span>
      </header>
      {items.map(([q, a], i) => (
        <details className="cmsc-item" key={q}>
          <summary>
            <span className="cmsc-item__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="cmsc-item__title"><strong>{q}</strong></span>
            <span className="faq__icon"></span>
          </summary>
          <div className="cmsc-section__body">
            <FieldGrid>
              <Field label="Question" value={q} />
              <Field label="Answer" value={a} textarea rows={4} />
            </FieldGrid>
          </div>
        </details>
      ))}
      <button type="button" className="cmsc-addrow">＋ Add question</button>
    </section>
  );
}

export default function FaqsAdmin() {
  return (
    <>
      <CmsTopbar title="FAQs" subtitle="Two sets — the site-wide FAQ and the Brand Access Program FAQ." />
      <div className="cms__content cmsc">
        <FaqGroup title="Site FAQ" where="Home · About · Service pages" items={SITE_FAQS} />
        <FaqGroup title="Brand Access FAQ" where="/brand-access-program" items={BAP_FAQS} />
        <SaveBar />
      </div>
    </>
  );
}
