import CalEmbed from "@/components/CalEmbed";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
  {/* ===== Preloader ===== */}
  <div className="preloader" id="preloader" aria-hidden="true">
    <div className="preloader__inner">
      <img className="preloader__logo-img" src="/assets/img/logo-white.webp" alt="je.design" width="110" height="105" />
      <div className="preloader__count" id="preCount">0</div>
    </div>
  </div>

  <main id="top">

    {/* ===== Hero ===== */}
    <section className="heroB" id="hero">
      <div className="heroB__bg" aria-hidden="true">
        <div className="heroB__glow heroB__glow--a"></div>
        <div className="heroB__glow heroB__glow--b"></div>
        <div className="heroB__dots"></div>
        <div className="heroB__beam"></div>
        <div className="heroB__grain"></div>
      </div>
      <div className="container heroB__layout">

        <div className="heroB__left">
          <div className="heroB__rating">
            <span className="stars">★★★★★</span> <strong>5.0</strong> — 1,800+ success stories
          </div>
          <h1 className="heroB__title">
            <span className="b-line"><span>Brands</span></span>
            <span className="b-line"><span>built to</span></span>
            <span className="b-line"><span><em>empower</em> growth</span></span>
          </h1>
          <p className="heroB__sub">Offering tailored creative solutions and brand packages designed to amplify your business — efficient, impactful, and built for growth.</p>
          <div className="heroB__cta">
            <a href="#" className="btn btn--solid magnetic" data-drawer data-cursor="hover"><span>Get a Quote</span><svg className="btn__arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a href="#results" className="btn btn--ghost magnetic" data-cursor="hover"><span>Real Results</span></a>
          </div>
        </div>

        <div className="heroB__right" id="book">
          <div className="heroB__offset" aria-hidden="true"></div>
          <div className="heroB__note" aria-hidden="true">
            <span className="heroB__note-text">it's free —<br/>grab a slot!</span>
            <svg className="heroB__note-arrow" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64 4 C84 28 76 50 34 62" stroke="#FFF600" strokeWidth="3.5" strokeLinecap="round"/>
              <path d="M48 52 L30 64 L50 70" stroke="#FFF600" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="heroB__booking">
            <div className="heroB__booking-head">
              <span className="heroB__booking-dot"></span>
              <span>Book your <em>free</em> design consultation</span>
            </div>
            <CalEmbed />

          </div>
        </div>
      </div>
    </section>

    {/* ===== Marquee ===== */}
    <div className="tape" aria-hidden="true">
    <div className="marquee marquee--yellow">
      <div className="marquee__track">
        <div className="marquee__group">
          <span>Logo Design</span><i>✦</i><span>Vehicle Wraps</span><i>✦</i><span>Websites</span><i>✦</i><span>Business Cards</span><i>✦</i><span>Packaging &amp; Labels</span><i>✦</i><span>Company Shirts</span><i>✦</i><span>Brochures</span><i>✦</i><span>Menus</span><i>✦</i>
        </div>
        <div className="marquee__group">
          <span>Logo Design</span><i>✦</i><span>Vehicle Wraps</span><i>✦</i><span>Websites</span><i>✦</i><span>Business Cards</span><i>✦</i><span>Packaging &amp; Labels</span><i>✦</i><span>Company Shirts</span><i>✦</i><span>Brochures</span><i>✦</i><span>Menus</span><i>✦</i>
        </div>
      </div>
    </div>
    </div>

    {/* ===== About ===== */}
    <section className="about section" id="about">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow reveal">Who we are</span>
        </div>
        <p className="about__statement split-words statement-zoom">We solve brand challenges through distinctive design — from bold logos to eye-catching vehicle wraps, strategic websites and more.</p>

        <div className="about__row">
          <p className="about__copy reveal">je.design — Jeremy Ellsworth Designs LLC — is a full-service design agency with a specialty in home service brands: HVAC, electrical, plumbing, roofing, painting and beyond. What started as one designer's craft 20 years ago is now a 10-person team of designers, project managers and brand consultants — every concept researched, brainstormed and designed entirely in-house.</p>
          <div className="about__cta reveal">
            <a href="#" data-drawer className="btn btn--solid magnetic" data-cursor="hover"><span>Work with us</span><svg className="btn__arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <a href="#team" className="btn btn--ghost magnetic" data-cursor="hover"><span>Meet the team</span></a>
          </div>
        </div>

        <div className="about__stats">
          <div className="about-stat reveal"><strong><span data-count="20">0</span>+</strong><span>Years of experience</span></div>
          <div className="about-stat reveal"><strong>10</strong><span>In-house creatives</span></div>
          <div className="about-stat reveal"><strong><span data-count="1800">0</span>+</strong><span>Five-star reviews</span></div>
          <div className="about-stat reveal"><strong><span data-count="8000">0</span>+</strong><span>Startups served, US-wide</span></div>
        </div>
      </div>
    </section>

    {/* ===== Work ===== */}
    <section className="work section section--padless section--panel" id="work">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">Selected work</span><h2 className="section__title split-lines"><span>Brand</span> <span className="hero__accent">projects</span></h2></div>
          <p className="section__sub reveal">Strategic brand transformations that tell powerful stories and create lasting connections with your audience.</p>
        </div>
      </div>

      <div className="container work__grid">
        <a href="https://je.design/projects/boss-hawgs-bbq-brand-identity" target="_blank" rel="noopener" className="work-card work-card--lg" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/boss-hawgs.jpg" alt="Boss Hawgs BBQ Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Boss Hawgs BBQ</h3><span>Brand Identity · Food &amp; Beverage</span></div>
        </a>
        <a href="https://je.design/projects/stoopid-energy-brand-identity-product-design" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/stoopid-energy.jpg" alt="Stoopid Energy Brand Identity and Product Design" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Stoopid Energy</h3><span>Brand Identity + Product Design</span></div>
        </a>
        <a href="https://je.design/projects/high-caliber-electric-brand-identity" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/high-caliber.jpg" alt="High Caliber Electric Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>High Caliber Electric</h3><span>Brand Identity · Home Service</span></div>
        </a>
        <a href="https://je.design/projects/spartan-hvac-brand-identity" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/spartan-hvac.jpg" alt="Spartan HVAC Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Spartan HVAC</h3><span>Brand Identity · Home Service</span></div>
        </a>
        <a href="https://je.design/projects/graybeard-construction-and-maintenance-brand-identity" target="_blank" rel="noopener" className="work-card work-card--lg" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/graybeard.jpg" alt="Graybeard Construction and Maintenance Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Graybeard Construction</h3><span>Brand Identity · Construction</span></div>
        </a>
        <a href="https://je.design/projects/macdavy-heating-and-air" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/macdavy.jpg" alt="MacDavy Heating and Air Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>MacDavy Heating &amp; Air</h3><span>Brand Identity · Home Service</span></div>
        </a>
        <a href="https://je.design/projects/salty-soft-wash-brand-identity" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/salty-soft-wash.jpg" alt="Salty Soft Wash Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Salty Soft Wash</h3><span>Brand Identity · Home Service</span></div>
        </a>
        <a href="https://je.design/projects/bison-roofing-and-construction" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/bison-roofing.jpg" alt="Bison Roofing and Construction Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Bison Roofing &amp; Construction</h3><span>Brand Identity · Construction</span></div>
        </a>
        <a href="https://je.design/projects/big-spring-builders-co-brand-identity" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/big-spring.jpg" alt="Big Spring Builders Co. Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Big Spring Builders, Co.</h3><span>Brand Identity · Construction</span></div>
        </a>
        <a href="https://je.design/projects/jump-party-brand-identity" target="_blank" rel="noopener" className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/jump-party.jpg" alt="Jump Party! Brand Identity" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Jump Party!</h3><span>Brand Identity · Party / Entertainment</span></div>
        </a>
        <div className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/zero-gravity.jpg" alt="Zero Gravity ATV Rental Website Design" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Zero Gravity ATV Rental</h3><span>Website Design</span></div>
        </div>
        <div className="work-card" data-cursor="view">
          <div className="work-card__media"><img src="/assets/img/work/bags-website.jpg" alt="Bags Website Design" loading="lazy" /></div>
          <div className="work-card__meta"><h3>Bags</h3><span>Website Design</span></div>
        </div>
      </div>

      <div className="container work__foot reveal">
        <p>Our work in action — bold design, bringing visionary ideas to life through strategic creativity.</p>
        <a href="#" data-drawer className="btn btn--ghost magnetic" data-cursor="hover"><span>Start your project</span></a>
      </div>
    </section>

    {/* ===== Mascot divider ===== */}
    <div className="tape" aria-hidden="true">
    <div className="marquee marquee--yellow marquee--tiltUp">
      <div className="marquee__track">
        <div className="marquee__group">
          <span>Mascot Logos</span><i>✦</i><span>Impossible to Ignore</span><i>✦</i><span>Full of Personality</span><i>✦</i><span>Brands They Remember</span><i>✦</i>
        </div>
        <div className="marquee__group">
          <span>Mascot Logos</span><i>✦</i><span>Impossible to Ignore</span><i>✦</i><span>Full of Personality</span><i>✦</i><span>Brands They Remember</span><i>✦</i>
        </div>
      </div>
    </div>
    </div>

    {/* ===== Mascots ===== */}
    <section className="mascots section" id="mascots">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">Mascot logos</span><h2 className="section__title split-lines"><span>Mascots they</span> <span className="hero__accent">remember</span></h2></div>
          <p className="section__sub reveal">Mascot logos make your brand impossible to ignore — full of personality, character, and the kind of fun that customers remember.</p>
        </div>
      </div>

      <div className="mascots__rows" aria-label="Mascot logo showcase">
        <div className="mascots__row">
          <div className="mascots__track">
            <img src="/assets/img/mascots/layer-7.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-8.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-9.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-10.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-11.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-12.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-13.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-14.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-7.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-8.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-9.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-10.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-11.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-12.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-13.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-14.jpg" alt="Mascot logo design by je.design" loading="lazy" />
          </div>
        </div>
        <div className="mascots__row">
          <div className="mascots__track mascots__track--reverse">
            <img src="/assets/img/mascots/layer-15.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-16.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-17.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-18.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-19.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-20.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-21.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-7.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-15.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-16.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-17.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-18.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-19.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-20.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-21.jpg" alt="Mascot logo design by je.design" loading="lazy" />
            <img src="/assets/img/mascots/layer-7.jpg" alt="Mascot logo design by je.design" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="container mascots__foot reveal">
        <div className="mascots__uses">
          <span className="mascots__uses-label">One mascot, every use case</span>
          <div className="mascots__chips">
            <span>Primary lockup</span><span>Mascot-only mark</span><span>Badge</span><span>Roundel</span><span>Wordmark</span><span>Truck wraps</span><span>Apparel</span><span>Yard signs</span><span>Socials &amp; stickers</span>
          </div>
        </div>
        <a href="#" data-drawer className="btn btn--ghost magnetic" data-cursor="hover"><span>Get a mascot</span></a>
      </div>
    </section>

    {/* ===== Services ===== */}
    <section className="services section section--panel" id="services">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">What we do</span><h2 className="section__title split-lines"><span>Creative</span> <span className="hero__accent">solutions</span></h2></div>
          <p className="section__sub reveal">We solve brand challenges through distinctive design — every deliverable handled in-house by a dedicated 10-person creative team.</p>
        </div>

        <ul className="services__list" id="servicesList">
          <li className="service" data-img="/assets/img/work/boss-hawgs.jpg">
            <a href="#" role="button" data-cursor="hover">
              <span className="service__num">01</span>
              <h3 className="service__name">Logo &amp; Branding</h3>
              <span className="service__desc">Logo + five-page style guide</span>
              <span className="service__arrow">→</span>
            </a>
          <div className="service__panel">
            <div className="service__gallery">
              <div className="service__galleryTrack">
                <div className="service__galleryGroup"><img src="/assets/img/work/boss-hawgs.jpg" alt="" loading="lazy" /><img src="/assets/img/work/high-caliber.jpg" alt="" loading="lazy" /><img src="/assets/img/work/spartan-hvac.jpg" alt="" loading="lazy" /><img src="/assets/img/work/graybeard.jpg" alt="" loading="lazy" /><img src="/assets/img/work/bison-roofing.jpg" alt="" loading="lazy" /><img src="/assets/img/work/big-spring.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
                <div className="service__galleryGroup" aria-hidden="true"><img src="/assets/img/work/boss-hawgs.jpg" alt="" loading="lazy" /><img src="/assets/img/work/high-caliber.jpg" alt="" loading="lazy" /><img src="/assets/img/work/spartan-hvac.jpg" alt="" loading="lazy" /><img src="/assets/img/work/graybeard.jpg" alt="" loading="lazy" /><img src="/assets/img/work/bison-roofing.jpg" alt="" loading="lazy" /><img src="/assets/img/work/big-spring.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
              </div>
            </div>
          </div>
          </li>
          <li className="service" data-img="/assets/img/work/high-caliber.jpg">
            <a href="#" role="button" data-cursor="hover">
              <span className="service__num">02</span>
              <h3 className="service__name">Vehicle Wrap</h3>
              <span className="service__desc">Designs that turn heads on every road</span>
              <span className="service__arrow">→</span>
            </a>
          <div className="service__panel">
            <div className="service__gallery">
              <div className="service__galleryTrack">
                <div className="service__galleryGroup"><img src="/assets/img/work/salty-soft-wash.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-1.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-5.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-3.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-4.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-6.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
                <div className="service__galleryGroup" aria-hidden="true"><img src="/assets/img/work/salty-soft-wash.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-1.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-5.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-3.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-4.jpg" alt="" loading="lazy" /><img src="/assets/img/revenue/rev-6.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
              </div>
            </div>
          </div>
          </li>
          <li className="service" data-img="/assets/img/work/zero-gravity.jpg">
            <a href="#" role="button" data-cursor="hover">
              <span className="service__num">03</span>
              <h3 className="service__name">Website Design &amp; Dev.</h3>
              <span className="service__desc">Strategic websites built to convert</span>
              <span className="service__arrow">→</span>
            </a>
          <div className="service__panel">
            <div className="service__gallery">
              <div className="service__galleryTrack">
                <div className="service__galleryGroup"><img src="/assets/img/work/zero-gravity.jpg" alt="" loading="lazy" /><img src="/assets/img/work/bags-website.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
                <div className="service__galleryGroup" aria-hidden="true"><img src="/assets/img/work/zero-gravity.jpg" alt="" loading="lazy" /><img src="/assets/img/work/bags-website.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
              </div>
            </div>
          </div>
          </li>
          <li className="service" data-img="/assets/img/work/macdavy.jpg">
            <a href="#" role="button" data-cursor="hover">
              <span className="service__num">04</span>
              <h3 className="service__name">Print Collateral</h3>
              <span className="service__desc">Business cards · Brochures · Menus</span>
              <span className="service__arrow">→</span>
            </a>
          <div className="service__panel">
            <div className="service__gallery">
              <div className="service__galleryTrack">
                <div className="service__galleryGroup"><img src="/assets/img/work/macdavy.jpg" alt="" loading="lazy" /><img src="/assets/img/work/jump-party.jpg" alt="" loading="lazy" /><img src="/assets/img/mascots/layer-13.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
                <div className="service__galleryGroup" aria-hidden="true"><img src="/assets/img/work/macdavy.jpg" alt="" loading="lazy" /><img src="/assets/img/work/jump-party.jpg" alt="" loading="lazy" /><img src="/assets/img/mascots/layer-13.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
              </div>
            </div>
          </div>
          </li>
          <li className="service" data-img="/assets/img/work/stoopid-energy.jpg">
            <a href="#" role="button" data-cursor="hover">
              <span className="service__num">05</span>
              <h3 className="service__name">Packaging &amp; Labels</h3>
              <span className="service__desc">Shelf-ready product design</span>
              <span className="service__arrow">→</span>
            </a>
          <div className="service__panel">
            <div className="service__gallery">
              <div className="service__galleryTrack">
                <div className="service__galleryGroup"><img src="/assets/img/work/stoopid-energy.jpg" alt="" loading="lazy" /><img src="/assets/img/work/boss-hawgs.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
                <div className="service__galleryGroup" aria-hidden="true"><img src="/assets/img/work/stoopid-energy.jpg" alt="" loading="lazy" /><img src="/assets/img/work/boss-hawgs.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
              </div>
            </div>
          </div>
          </li>
          <li className="service" data-img="/assets/img/work/graybeard.jpg">
            <a href="#" role="button" data-cursor="hover">
              <span className="service__num">06</span>
              <h3 className="service__name">Company Apparel</h3>
              <span className="service__desc">Shirts and uniforms your crew will wear proudly</span>
              <span className="service__arrow">→</span>
            </a>
          <div className="service__panel">
            <div className="service__gallery">
              <div className="service__galleryTrack">
                <div className="service__galleryGroup"><img src="/assets/img/work/graybeard.jpg" alt="" loading="lazy" /><img src="/assets/img/work/jump-party.jpg" alt="" loading="lazy" /><img src="/assets/img/mascots/layer-7.jpg" alt="" loading="lazy" /><img src="/assets/img/work/bison-roofing.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
                <div className="service__galleryGroup" aria-hidden="true"><img src="/assets/img/work/graybeard.jpg" alt="" loading="lazy" /><img src="/assets/img/work/jump-party.jpg" alt="" loading="lazy" /><img src="/assets/img/mascots/layer-7.jpg" alt="" loading="lazy" /><img src="/assets/img/work/bison-roofing.jpg" alt="" loading="lazy" /><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div><div className="service__ph" aria-hidden="true"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></div></div>
              </div>
            </div>
          </div>
          </li>
        </ul>
      </div>
      <div className="service-preview" id="servicePreview" aria-hidden="true"><img src="/assets/img/work/boss-hawgs.jpg" alt="" /></div>
    </section>

    {/* ===== Process ===== */}
    <section className="process section" id="process">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">The process</span><h2 className="section__title split-lines"><span>How we</span> <span className="hero__accent">work</span></h2></div>
          <p className="section__sub reveal">A proven sprint that takes you from first call to launch-ready brand — most projects delivered in 2–3 weeks, not months.</p>
        </div>

        <div className="process__stack">
          <article className="pstep" style={{ '--i': '0' }}>
            <div className="pstep__body">
              <h3>Discovery &amp; strategy</h3>
              <p>Every project starts with a thorough discovery phase — clarifying your vision, objectives and preferences so every concept aligns with your goals.</p>
              <span className="pstep__meta">Free consultation</span>
            </div>
            <span className="pstep__num" aria-hidden="true">01</span>
          </article>
          <article className="pstep" style={{ '--i': '1' }}>
            <div className="pstep__body">
              <h3>Original concepts</h3>
              <p>Fresh, 100% original concepts — researched, brainstormed and designed in-house by real designers. No AI, no templates, no recycled elements — ever.</p>
              <span className="pstep__meta">First draft in 5–7 business days</span>
            </div>
            <span className="pstep__num" aria-hidden="true">02</span>
          </article>
          <article className="pstep" style={{ '--i': '2' }}>
            <div className="pstep__body">
              <h3>Refine together</h3>
              <p>You get a private communication channel and a dedicated creative team. If something isn't sitting right, we address it before moving forward.</p>
              <span className="pstep__meta">Typically 5–7 revisions</span>
            </div>
            <span className="pstep__num" aria-hidden="true">03</span>
          </article>
          <article className="pstep pstep--yellow" style={{ '--i': '3' }}>
            <div className="pstep__body">
              <h3>Launch &amp; deliver</h3>
              <p>Final files in AI, SVG, PDF, JPG and PNG — print-crisp, web-ready and yours to own forever. Then we help you roll it out everywhere.</p>
              <span className="pstep__meta">Most projects in 2–3 weeks</span>
            </div>
            <span className="pstep__num" aria-hidden="true">04</span>
          </article>
        </div>
      </div>
    </section>

    {/* ===== Videos ===== */}
    <section className="videos section section--panel" id="videos">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">Watch the craft</span><h2 className="section__title split-lines"><span>Sketch to</span> <span className="hero__accent">sizzle</span></h2></div>
          <p className="section__sub reveal">Watch as we transform brands through bold design, bringing visionary ideas to life through strategic creativity.</p>
        </div>

        <div className="vrow" id="vrow">
          <div className="vslot vslot--left" data-video="-BNnw0WfyjM" data-cursor="view">
            <div className="video-card__media"><img src="https://i.ytimg.com/vi/-BNnw0WfyjM/hqdefault.jpg" alt="Vector logo timelapse — Pōlani Poised" loading="lazy" /><span className="video-card__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
            <div className="video-card__meta"><h3>Pōlani Poised</h3><span>Vector logo timelapse</span></div>
          </div>
          <div className="vslot vslot--center" data-video="BpuC_iyq0l8" data-cursor="view">
            <div className="video-card__media"><img src="https://i.ytimg.com/vi/BpuC_iyq0l8/maxresdefault.jpg" alt="Igniting Creativity. Fueling Brands. — je.design brand reel" loading="lazy" /><span className="video-card__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
            <div className="video-card__meta"><h3>Igniting Creativity. Fueling Brands.</h3><span>Brand reel</span></div>
          </div>
          <div className="vslot vslot--right" data-video="P-Zq6cjDuuE" data-cursor="view">
            <div className="video-card__media"><img src="https://i.ytimg.com/vi/P-Zq6cjDuuE/hqdefault.jpg" alt="Sketch logo timelapse — Computer Wiz" loading="lazy" /><span className="video-card__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
            <div className="video-card__meta"><h3>Computer Wiz</h3><span>Sketch logo timelapse</span></div>
          </div>
        </div>

        <div className="videos__grid">
          <div className="video-card" data-video="PXyjsFFNHAs" data-cursor="view">
            <div className="video-card__media">
              <img src="https://i.ytimg.com/vi/PXyjsFFNHAs/hqdefault.jpg" alt="From Sketch to Sizzle: Suegra's Pika-Pika logo journey" loading="lazy" />
              <span className="video-card__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
            </div>
            <div className="video-card__meta"><h3>Suegra's Pika-Pika — logo journey</h3><span>Sketch to sizzle</span></div>
          </div>
          <div className="video-card" data-video="3IjRK4f669A" data-cursor="view">
            <div className="video-card__media">
              <img src="https://i.ytimg.com/vi/3IjRK4f669A/hqdefault.jpg" alt="Vector logo timelapse — Boss Hogg BBQ" loading="lazy" />
              <span className="video-card__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
            </div>
            <div className="video-card__meta"><h3>Boss Hogg BBQ</h3><span>Vector logo timelapse</span></div>
          </div>
          <div className="video-card" data-video="0_NqkhfwIHI" data-cursor="view">
            <div className="video-card__media">
              <img src="https://i.ytimg.com/vi/0_NqkhfwIHI/hqdefault.jpg" alt="Sketch logo timelapse — FP Outfitters" loading="lazy" />
              <span className="video-card__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
            </div>
            <div className="video-card__meta"><h3>FP Outfitters</h3><span>Sketch logo timelapse</span></div>
          </div>
        </div>

        <div className="videos__foot reveal">
          <p>New timelapses, process breakdowns and brand launches — every week.</p>
          <a href="https://www.youtube.com/@jeremyellsworthdesignsllc" target="_blank" rel="noopener" className="btn btn--ghost magnetic" data-cursor="hover"><span>More on YouTube</span></a>
        </div>
      </div>
    </section>

    {/* ===== Why je.design ===== */}
    <section className="why section" id="why">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">The difference</span><h2 className="section__title split-lines"><span>Why brands</span> <span className="hero__accent">pick us</span></h2></div>
          <p className="section__sub reveal">Big-agency output without the big-agency bloat — faster, flatter and more personal than the corporate branding shops.</p>
        </div>

        <div className="why__manifesto">
          <p className="why-line"><span className="why-line__big">Real humans, <em>real answers</em>.</span><span className="why-line__small">A trained, dedicated creative team in a private channel — not a ticket queue. From kickoff to launch.</span></p>
          <p className="why-line"><span className="why-line__big">Flat pricing, <em>no surprises</em>.</span><span className="why-line__small">You know the full investment before we start — no hidden fees, no change orders.</span></p>
          <p className="why-line"><span className="why-line__big">Days, <em>not months</em>.</span><span className="why-line__small">First concepts in 5–7 business days. Most brands launch in 2–3 weeks.</span></p>
          <p className="why-line why-line--video"><span className="why-line__big">Drawn by hand, <em>never AI</em>.</span><span className="why-line__small">Every concept starts from a blank page with real designers — no AI-generated artwork, no templates, no recycled elements. Ever. <a className="why-line__link" href="https://www.youtube.com/@jeremyellsworthdesignsllc" target="_blank" rel="noopener">Watch us draw ↗</a></span></p>
          <p className="why-line"><span className="why-line__big">Your brand, <em>your files</em>.</span><span className="why-line__small">AI, SVG, PDF, JPG and PNG with every project — yours to own forever.</span></p>
        </div>
      </div>
    </section>

    <div className="why-preview" id="whyPreview" aria-hidden="true"><video muted loop playsInline preload="none"></video></div>

    {/* ===== Revenue results ===== */}
    <section className="revenue section" id="results">
      <div className="revenue__bg" aria-hidden="true">
        <div className="revenue__glow revenue__glow--b"></div>
        <div className="revenue__dots"></div>
        <div className="revenue__beam"></div>
        <div className="revenue__grain"></div>
      </div>
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">Real results</span><h2 className="section__title split-lines"><span>Rebrands that</span> <span className="hero__accent">pay for themselves</span></h2></div>
          <p className="section__sub reveal">Real customers, real growth — revenue increases reported by owners after rebranding with Jeremy Ellsworth Designs LLC.</p>
        </div>

        <div className="revenue__grid">
          <figure className="revenue-card reveal"><img src="/assets/img/revenue/rev-1.jpg" alt="200% revenue increase since rebranding with Jeremy Ellsworth Designs LLC" loading="lazy" /></figure>
          <figure className="revenue-card reveal"><img src="/assets/img/revenue/rev-5.jpg" alt="150% revenue increase since rebranding with Jeremy Ellsworth Designs LLC" loading="lazy" /></figure>
          <figure className="revenue-card reveal"><img src="/assets/img/revenue/rev-3.jpg" alt="Revenue increase since rebranding with Jeremy Ellsworth Designs LLC" loading="lazy" /></figure>
          <figure className="revenue-card reveal"><img src="/assets/img/revenue/rev-4.jpg" alt="Revenue increase since rebranding with Jeremy Ellsworth Designs LLC" loading="lazy" /></figure>
          <figure className="revenue-card reveal"><img src="/assets/img/revenue/rev-6.jpg" alt="Revenue increase since rebranding with Jeremy Ellsworth Designs LLC" loading="lazy" /></figure>
          <figure className="revenue-card reveal"><img src="/assets/img/revenue/rev-8.jpg" alt="Revenue increase since rebranding with Jeremy Ellsworth Designs LLC" loading="lazy" /></figure>
        </div>

        <div className="revenue__foot reveal">
          <p>Your rebrand could be next on this wall.</p>
          <a href="#" data-drawer className="btn btn--solid magnetic" data-cursor="hover"><span>Start yours</span><svg className="btn__arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
        </div>
      </div>
    </section>

    {/* ===== Pricing: Brand Access Program ===== */}
    <section className="pricing section" id="pricing">
      <div className="pricing__bg" aria-hidden="true"></div>
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow eyebrow--dark reveal">A better way to pay</span>
          <h2 className="section__title section__title--dark split-lines"><span>Brand Access</span> <span className="pricing__accent">Program</span></h2>
          <p className="section__sub section__sub--dark reveal">Get branded now and pay as you grow — $150 down, then $150 a month until paid off.<br />Your capital stays in your business, your files are yours from day one.</p>
        </div>

        <div className="pricing__card reveal" data-tilt>
          <div className="pricing__left">
            <ul className="pricing__list">
              <li><strong>Full file access from day one</strong><span>No holding assets hostage — ever</span></li>
              <li><strong>Work starts immediately</strong><span>No waiting for approval rounds</span></li>
              <li><strong>Logo + variations, every format</strong><span>AI · SVG · PNG · PDF · EPS</span></li>
              <li><strong>Brand colors, type &amp; guidelines</strong><span>A complete system, documented</span></li>
              <li><strong>Revision rounds included</strong><span>No extra fees, no scope creep</span></li>
              <li><strong>Cancel anytime after completion</strong></li>
            </ul>
          </div>
          <div className="pricing__right">
            <div className="payplan">
              <div className="payplan__today">
                <div className="pricing__price"><sup>$</sup>150</div>
                <span className="payplan__label">down today — work starts immediately</span>
              </div>
              <div className="payplan__tear" aria-hidden="true"></div>
              <div className="payplan__months" aria-label="Then $150 per month until paid off">
                <em>then</em>
                <i>$150</i><i>$150</i><i>$150</i><i className="payplan__more">…</i>
                <em>/mo until paid off</em>
              </div>
            </div>
            <a href="https://agreement.je.design/brand-access-program" target="_blank" rel="noopener" className="btn btn--invert magnetic" data-cursor="hover"><span>Get Instant Quote</span></a>
            <a href="/brand-access-program" className="pricing__custom" data-cursor="hover">Learn how the program works →</a>
          </div>
        </div>

        <p className="pricing__files reveal">No hidden fees · no hostage files · <strong>cancel anytime after completion</strong>.</p>
      </div>
    </section>

    {/* ===== Testimonials ===== */}
    <section className="reviews section section--padless" id="reviews">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">Reviews</span><h2 className="section__title split-lines"><span>1.8k success</span> <span className="hero__accent">stories</span></h2></div>
          <p className="section__sub reveal">At je.design, we are committed to your success. We believe that our success lies in your success — and we are dedicated to helping you achieve it.</p>
        </div>
      </div>

      <div className="reviews__rows">
        <div className="reviews__row" data-speed="1">
          <div className="reviews__track">
            <div className="reviews__group">
            <article className="review" data-cursor="view" data-full="I recently had the pleasure of working with this company for a logo design, t-shirt design, yard sign design, and several other projects. The results were absolutely incredible! The designs exceeded my expectations in every way. Communication was seamless throughout the entire process, and the delivery was outstanding. Highly recommend their services!" data-name="Shevan Rowland" data-co="Lakeview Roofing LLC">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“I recently had the pleasure of working with this company for a logo design, t-shirt design, yard sign design, and several other projects. The results were absolutely incredible! The designs exceeded my expectations in every way.”</p>
              <footer>
                <span className="review__avatar">S</span>
                <div><strong>Shevan Rowland</strong><span>Lakeview Roofing LLC</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="They did great at designing my logo. I wouldn&#x27;t have gone with anyone else!" data-name="Ryan" data-co="Big Country Heat &amp; Air">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“They did great at designing my logo. I wouldn't have gone with anyone else!”</p>
              <footer>
                <span className="review__avatar">R</span>
                <div><strong>Ryan</strong><span>Big Country Heat & Air</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="These guys are top notch!! Seriously, I have had many designers in the past that do not even come close to what these guys put out. I am extremely happy with the design of my logo and I know for sure without a doubt it is going to grab attention. I am so happy in fact that I am having them do any and all design work my company has going forward including shirts and business cards which are in the process. Well worth paying the money for something such as the face of your company." data-name="Paul Margott" data-co="Window Blasters">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“These guys are top notch!! I have had many designers in the past that do not even come close to what these guys put out. I am extremely happy with the design of my logo and I know for sure it is going to grab attention.”</p>
              <footer>
                <span className="review__avatar">P</span>
                <div><strong>Paul Margott</strong><span>Window Blasters</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="I 100% recommend working with Jeremy and his team. He is very professional, very quick to respond and the logo he did for my small business turned out AMAZING! His work is well worth the money and I for sure will be using his services again in the future!" data-name="Ezri Valdes" data-co="TrashPanda">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“I 100% recommend working with Jeremy and his team. He is very professional, very quick to respond and the logo he did for my small business turned out AMAZING!”</p>
              <footer>
                <span className="review__avatar">E</span>
                <div><strong>Ezri Valdes</strong><span>TrashPanda</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="My experience with the Jeremy Ellsworth team was phenomenal. They brought my existing logo to life with some beautiful colors that really help my brand pop. Quick turnaround &amp; very professional. Super on point with the few versions of logos they showed me and they were quick to finish everything up &amp; provide me the final files. I give the team a 10/10. Would absolutely use again and highly recommend you guys to use them to keep your brand cohesive throughout." data-name="Julio Santiago" data-co="August Hardscapes">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“My experience with the Jeremy Ellsworth team was phenomenal. They brought my existing logo to life with some beautiful colors that really help my brand pop. Quick turnaround & very professional. I give the team a 10/10.”</p>
              <footer>
                <span className="review__avatar">J</span>
                <div><strong>Julio Santiago</strong><span>August Hardscapes</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="I had a fantastic experience working with Jeremy and the team on a new logo for my business. Their communication was excellent, I was constantly informed and updated on the process and timeline. I could not have asked for a better experience. Not to mention the quality of our new logo is incredible. Working with Jeremy was an insane value!" data-name="Nick Boyles" data-co="Breeze Painting">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“Their communication was excellent — I was constantly informed and updated on the process and timeline. Not to mention the quality of our new logo is incredible. Working with Jeremy was an insane value!”</p>
              <footer>
                <span className="review__avatar">N</span>
                <div><strong>Nick Boyles</strong><span>Breeze Painting</span></div>
              </footer>
            </article>
            </div>
            <div className="reviews__group" aria-hidden="true">
            <article className="review" data-cursor="view" data-full="I recently had the pleasure of working with this company for a logo design, t-shirt design, yard sign design, and several other projects. The results were absolutely incredible! The designs exceeded my expectations in every way. Communication was seamless throughout the entire process, and the delivery was outstanding. Highly recommend their services!" data-name="Shevan Rowland" data-co="Lakeview Roofing LLC">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“I recently had the pleasure of working with this company for a logo design, t-shirt design, yard sign design, and several other projects. The results were absolutely incredible! The designs exceeded my expectations in every way.”</p>
              <footer>
                <span className="review__avatar">S</span>
                <div><strong>Shevan Rowland</strong><span>Lakeview Roofing LLC</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="They did great at designing my logo. I wouldn&#x27;t have gone with anyone else!" data-name="Ryan" data-co="Big Country Heat &amp; Air">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“They did great at designing my logo. I wouldn't have gone with anyone else!”</p>
              <footer>
                <span className="review__avatar">R</span>
                <div><strong>Ryan</strong><span>Big Country Heat & Air</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="These guys are top notch!! Seriously, I have had many designers in the past that do not even come close to what these guys put out. I am extremely happy with the design of my logo and I know for sure without a doubt it is going to grab attention. I am so happy in fact that I am having them do any and all design work my company has going forward including shirts and business cards which are in the process. Well worth paying the money for something such as the face of your company." data-name="Paul Margott" data-co="Window Blasters">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“These guys are top notch!! I have had many designers in the past that do not even come close to what these guys put out. I am extremely happy with the design of my logo and I know for sure it is going to grab attention.”</p>
              <footer>
                <span className="review__avatar">P</span>
                <div><strong>Paul Margott</strong><span>Window Blasters</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="I 100% recommend working with Jeremy and his team. He is very professional, very quick to respond and the logo he did for my small business turned out AMAZING! His work is well worth the money and I for sure will be using his services again in the future!" data-name="Ezri Valdes" data-co="TrashPanda">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“I 100% recommend working with Jeremy and his team. He is very professional, very quick to respond and the logo he did for my small business turned out AMAZING!”</p>
              <footer>
                <span className="review__avatar">E</span>
                <div><strong>Ezri Valdes</strong><span>TrashPanda</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="My experience with the Jeremy Ellsworth team was phenomenal. They brought my existing logo to life with some beautiful colors that really help my brand pop. Quick turnaround &amp; very professional. Super on point with the few versions of logos they showed me and they were quick to finish everything up &amp; provide me the final files. I give the team a 10/10. Would absolutely use again and highly recommend you guys to use them to keep your brand cohesive throughout." data-name="Julio Santiago" data-co="August Hardscapes">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“My experience with the Jeremy Ellsworth team was phenomenal. They brought my existing logo to life with some beautiful colors that really help my brand pop. Quick turnaround & very professional. I give the team a 10/10.”</p>
              <footer>
                <span className="review__avatar">J</span>
                <div><strong>Julio Santiago</strong><span>August Hardscapes</span></div>
              </footer>
            </article>
            <article className="review" data-cursor="view" data-full="I had a fantastic experience working with Jeremy and the team on a new logo for my business. Their communication was excellent, I was constantly informed and updated on the process and timeline. I could not have asked for a better experience. Not to mention the quality of our new logo is incredible. Working with Jeremy was an insane value!" data-name="Nick Boyles" data-co="Breeze Painting">
              <div className="review__stars">★★★★★ <em>5.0</em></div>
              <p>“Their communication was excellent — I was constantly informed and updated on the process and timeline. Not to mention the quality of our new logo is incredible. Working with Jeremy was an insane value!”</p>
              <footer>
                <span className="review__avatar">N</span>
                <div><strong>Nick Boyles</strong><span>Breeze Painting</span></div>
              </footer>
            </article>
            </div>
          </div>
        </div>
      </div>

      <div className="container reviews__foot reveal">
        <div className="reviews__badges">
          <span className="reviews__rating">5.0 ★ on Google &amp; Facebook</span>
          <span className="reviews__sep">·</span>
          <span>Featured on</span>
          <a href="https://99designs.com/blog/designers/designer-profile-jeremy-ellsworth-jerekel/" target="_blank" rel="noopener" data-cursor="hover"><img src="/assets/img/99designs.webp" alt="99designs" height="26" /></a>
        </div>
        <a href="#" data-drawer className="btn btn--solid magnetic" data-cursor="hover"><span>Start your story</span><svg className="btn__arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
      </div>
    </section>

    {/* ===== Team ===== */}
    <section className="team section section--panel" id="team">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">The people</span><h2 className="section__title split-lines"><span>Team</span> <span className="hero__accent">je.design</span></h2></div>
          <div className="team__headRight">
            <p className="section__sub reveal">Your five-star creative design agency — 10 strategists, designers and brand consultants behind every brand we build.</p>
            <div className="team__controls reveal">
              <button className="team-nav" id="teamPrev" aria-label="Scroll team left" data-cursor="hover"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m6-6-6 6 6 6"/></svg></button>
              <button className="team-nav" id="teamNext" aria-label="Scroll team right" data-cursor="hover"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button>
            </div>
          </div>
        </div>
      </div>
      <div className="team__strip" id="teamStrip">
        <div className="team__track">
          <figure className="team-card"><img src="/assets/img/team/jeremy.jpg" alt="Jeremy E." loading="lazy"/><figcaption><strong>Jeremy E.</strong><span>Owner / Designer</span></figcaption></figure>
          <figure className="team-card"><span className="team-card__ph" aria-hidden="true">P</span><figcaption><strong>Paul F.</strong><span>Creative Director</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/robin.jpg" alt="Robin D." loading="lazy"/><figcaption><strong>Robin D.</strong><span>VP of Operations</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/roymarc.jpg" alt="Roy Marc C." loading="lazy"/><figcaption><strong>Roy Marc C.</strong><span>Ads Manager</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/charlie.jpg" alt="Charlie P." loading="lazy"/><figcaption><strong>Charlie P.</strong><span>Human Resource</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/roberta.jpg" alt="Robert A." loading="lazy"/><figcaption><strong>Robert A.</strong><span>Design Consultant</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/ernst.jpg" alt="Ernst" loading="lazy"/><figcaption><strong>Ernst</strong><span>Designer</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/robertl.jpg" alt="Robert L." loading="lazy"/><figcaption><strong>Robert L.</strong><span>Designer</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/zyrus.jpg" alt="Zyrus T." loading="lazy"/><figcaption><strong>Zyrus T.</strong><span>Designer</span></figcaption></figure>
          <figure className="team-card"><img src="/assets/img/team/irvan.jpg" alt="Irvan R." loading="lazy"/><figcaption><strong>Irvan R.</strong><span>Designer</span></figcaption></figure>
        </div>
      </div>
    </section>

    <Faq />

    <ContactSection />
  </main>
    </>
  );
}
