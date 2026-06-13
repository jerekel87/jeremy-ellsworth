export default function ContactSection() {
  return (
    <>
    {/* ===== Contact / CTA ===== */}
    <section className="contact" id="contact">
      <div className="contact__marquee" aria-hidden="true">
        <div className="marquee__track marquee__track--slow">
          <div className="marquee__group"><span>Ready to amplify your brand?</span><i>✦</i><span>Ready to amplify your brand?</span><i>✦</i></div>
          <div className="marquee__group"><span>Ready to amplify your brand?</span><i>✦</i><span>Ready to amplify your brand?</span><i>✦</i></div>
        </div>
      </div>
      <div className="container contact__inner">
        <a href="mailto:inquiry@jeremynellsworth.com?subject=Project%20inquiry%20—%20je.design" className="contact__big magnetic" data-cursor="hover">
          <span className="contact__big-text">Let's <em>talk</em></span>
          <span className="contact__big-arrow">→</span>
        </a>
        <div className="contact__meta">
          <a href="mailto:inquiry@jeremynellsworth.com" data-cursor="hover">inquiry@jeremynellsworth.com</a>
          <p>Tell us about your business and we'll map out the brand package that fits — no surprises, just results.</p>
        </div>
      </div>
    </section>
    </>
  );
}
