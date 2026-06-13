export default function Faq() {
  return (
    <>
    {/* ===== FAQ ===== */}
    <section className="faq section" id="faq">
      <div className="container faq__layout">
        <div className="faq__head">
          <span className="eyebrow reveal">Answers</span>
          <h2 className="section__title split-lines"><span>FAQ</span></h2>
          <p className="section__sub reveal">Everything you need to know before we start building your brand.</p>
          <a href="#" data-drawer className="btn btn--ghost magnetic reveal" data-cursor="hover"><span>Still curious? Ask us</span></a>
        </div>
        <div className="faq__list">
          <details className="faq__item">
            <summary data-cursor="hover">How does payment work?<span className="faq__icon"></span></summary>
            <div className="faq__body">
              <p>We currently offer the following payment options, ensuring a smooth transaction with je.design:</p>
              <ol>
                <li>Square Invoicing</li><li>Afterpay</li><li>Cashapp</li><li>Venmo</li><li>PayPal Invoicing</li><li>Crypto such as Bitcoin, Litecoin, Solana and XRP</li>
              </ol>
              <p>If there is a payment option you do not see and you'd like to inquire about it, you may reach out to us at <a href="mailto:inquiry@jeremynellsworth.com">inquiry@jeremynellsworth.com</a>.</p>
            </div>
          </details>
          <details className="faq__item">
            <summary data-cursor="hover">Which files will I receive?<span className="faq__icon"></span></summary>
            <div className="faq__body">
              <p>You'll receive the final design in the following formats: <strong>AI, JPG, PNG, SVG, and PDF</strong>.</p>
              <p>For crisp, high-quality printing, we recommend AI, SVG, or PDF files, while JPG and PNG are best for displaying your logo online.</p>
            </div>
          </details>
          <details className="faq__item">
            <summary data-cursor="hover">How long does it take to complete a project?<span className="faq__icon"></span></summary>
            <div className="faq__body"><p>On average, it takes 2–3 weeks.</p></div>
          </details>
          <details className="faq__item">
            <summary data-cursor="hover">How many revisions do I get?<span className="faq__icon"></span></summary>
            <div className="faq__body"><p>This depends on what type of package you're going to get, but it's typically 5 to 7 revisions.</p></div>
          </details>
          <details className="faq__item">
            <summary data-cursor="hover">What if I don't like the design?<span className="faq__icon"></span></summary>
            <div className="faq__body"><p>Our goal is to ensure you feel confident about your brand's direction from the very first step. We begin every project with a thorough discovery phase, clarifying your vision, objectives, and preferences so we can present a concept that aligns with your goals. If you are not happy and want to pivot or request a different direction, we allow for one concept change early in the process to keep our timeline on track. That way, if something isn't sitting right, we can address it promptly before moving forward with refinements. By staying in close communication throughout, we strive to deliver a final design that meets — and exceeds — your expectations.</p></div>
          </details>
          <details className="faq__item">
            <summary data-cursor="hover">How soon before I see the first draft?<span className="faq__icon"></span></summary>
            <div className="faq__body"><p>You can typically expect your initial design within <strong>5 to 7 business days</strong> after payment is received. This timeframe allows us to conduct thorough research, explore creative options, and present a well-thought-out concept. In certain cases, we can expedite delivery if your project requires a quicker turnaround.</p></div>
          </details>
          <details className="faq__item">
            <summary data-cursor="hover">Are your designs 100% original?<span className="faq__icon"></span></summary>
            <div className="faq__body"><p>Absolutely. Every concept we create starts with blank pages and fresh ideas — no templates, no recycled elements. We take pride in doing all of our work in-house at je.design, conducting thorough research and brainstorming to ensure each logo is truly unique.</p></div>
          </details>
        </div>
      </div>
    </section>
    </>
  );
}
