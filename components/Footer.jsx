export default function Footer() {
  return (
    <>
  {/* ===== Footer ===== */}
  <footer className="footer">
    <div className="container footer__grid">
      <div className="footer__brand">
        <a href="#top" className="header__brand" data-cursor="hover">
          <img src="/assets/img/logo-white.webp" alt="je.design logo" className="header__logo" width="44" height="42" />
          <span className="header__wordmark">je<em>.</em>design</span>
        </a>
        <p>je.design is a full-service design agency catering to businesses and individuals, with a focus on delivering high-quality, professional design solutions.</p>
        <span className="footer__rating">5.0 ★ · 1,800+ reviews on Google &amp; Facebook</span>
      </div>
      <nav className="footer__col" aria-label="Footer site links">
        <h4>Site</h4>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/services">Services</a>
        <a href="/brand-access-program">Brand Access Program</a>
        </nav>
      <nav className="footer__col" aria-label="Footer social links">
        <h4>Social</h4>
        <a href="https://www.instagram.com/jnellsworth" target="_blank" rel="noopener">Instagram</a>
        <a href="https://web.facebook.com/jnellsworth" target="_blank" rel="noopener">Facebook</a>
        <a href="https://www.x.com/jnellsworth_" target="_blank" rel="noopener">X / Twitter</a>
        <a href="https://g.co/kgs/E6KKgsQ" target="_blank" rel="noopener">Google Business</a>
        <a href="https://99designs.com/blog/designers/designer-profile-jeremy-ellsworth-jerekel/" target="_blank" rel="noopener">99designs</a>
      </nav>
      <div className="footer__col">
        <h4>Payments</h4>
        <p className="footer__pay">Square · Afterpay · Cashapp · Venmo · PayPal</p>
        <p className="footer__pay footer__pay--crypto">Now accepting <strong>Bitcoin, Litecoin, Solana &amp; XRP</strong></p>
      </div>
    </div>
    <div className="container footer__bottom">
      <span>© 2026 Jeremy Ellsworth Designs LLC. All rights reserved.</span>
      <span>Building Brands That Empower Growth — www.je.design</span>
    </div>
  </footer>
    </>
  );
}
