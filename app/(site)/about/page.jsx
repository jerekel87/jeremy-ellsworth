import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import SpinBadge from "@/components/SpinBadge";

export const metadata = {
  title: "About — Jeremy Ellsworth Designs LLC | je.design",
  description: "je.design is a 10-person, in-house creative team with 20 years of experience building home service brands — 1,800+ five-star reviews, zero AI, zero templates.",
};

export default function AboutPage() {
  return (
    <>
  <main id="top">

    {/* ===== Page hero ===== */}
    <section className="pagehero">
      <div className="container">
        
        <span className="eyebrow reveal">Who we are</span>
        <h1 className="pagehero__title split-lines"><span>The team behind</span> <span className="hero__accent">1,800+ five-stars</span></h1>
        <p className="pagehero__sub reveal">A full-service design agency with a specialty in home service brands — built on 20 years of craft, not shortcuts.</p>
      </div>
      <SpinBadge />
    </section>

    {/* ===== Story ===== */}
    <section className="story section section--panel">
      <div className="container story__grid">

        <div className="story__stick">
          <figure className="story__card" data-tilt>
            <img src="/assets/img/team/jeremy.jpg" alt="Jeremy E., Owner and Designer" loading="lazy" />
            <figcaption><strong>Jeremy E.</strong><span>Owner / Designer</span></figcaption>
          </figure>
          <div className="story__note" aria-hidden="true">
            <svg className="story__note-arrow" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M64 84 C84 60 76 38 34 26" stroke="#FFF600" strokeWidth="3.5" strokeLinecap="round"/>
              <path d="M48 36 L30 24 L50 18" stroke="#FFF600" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="story__note-text">the guy who<br/>started it all</span>
          </div>
        </div>

        <div className="story__copy">
          <h2 className="story__statement split-words">From one designer's craft to a 10-person creative force — built on 20 years of doing it the hard way.</h2>
          <p className="reveal">je.design — Jeremy Ellsworth Designs LLC — started 20 years ago with one designer and a simple conviction: small businesses deserve brands as professional as the big guys'. Today we're a full bench of designers, project managers and brand consultants serving startups across the United States.</p>
          <p className="reveal">We specialize in home service businesses — HVAC, electrical, plumbing, roofing, painting and beyond — because that's where a bold, memorable brand changes everything: more calls, better jobs, crews that wear the shirt with pride.</p>
          <ul className="spec reveal">
            <li><em>01</em>Home service specialists</li>
            <li><em>02</em>100% in-house</li>
            <li><em>03</em>Drawn by hand — never AI</li>
            <li><em>04</em>US-wide</li>
          </ul>
          <blockquote className="about__quote reveal">
            "We believe that our success lies in your success — and we are dedicated to helping you achieve it."
            <cite>— Jeremy E., Owner / Designer</cite>
          </blockquote>
          <div className="story__cta reveal">
            <a href="#" data-drawer className="btn btn--solid magnetic" data-cursor="hover"><span>Work with us</span><svg className="btn__arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Stats tape ===== */}
    <div className="tape" aria-hidden="true">
      <div className="marquee marquee--yellow">
        <div className="marquee__track">
          <div className="marquee__group">
            <span>20+ Years of craft</span><i>✦</i><span>10 In-house creatives</span><i>✦</i><span>1,800+ Five-star reviews</span><i>✦</i><span>8,000+ Startups served</span><i>✦</i>
          </div>
          <div className="marquee__group">
            <span>20+ Years of craft</span><i>✦</i><span>10 In-house creatives</span><i>✦</i><span>1,800+ Five-star reviews</span><i>✦</i><span>8,000+ Startups served</span><i>✦</i>
          </div>
        </div>
      </div>
    </div>

    {/* ===== People ===== */}
    <section className="people section" id="people">
      <div className="container">
        <div className="section__head section__head--split">
          <div className="section__head-left"><span className="eyebrow reveal">The people</span><h2 className="section__title split-lines"><span>Meet the</span> <span className="hero__accent">crew</span></h2></div>
          <p className="section__sub reveal">Designers, project managers, developers and consultants — every brand gets the whole bench, in a private channel.</p>
        </div>
        <div className="people__grid">
          <figure className="person reveal">
            <img src="/assets/img/team/jeremy.jpg" alt="Jeremy E., Owner / Designer at je.design" loading="lazy" />
            <figcaption><strong>Jeremy E.</strong><span>Owner / Designer</span></figcaption>
          </figure>
          <figure className="person reveal">
            <span className="person__avatar" aria-hidden="true">P</span>
            <figcaption><strong>Paul F.</strong><span>Creative Director</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/robin.jpg" alt="Robin D., VP of Operations at je.design" loading="lazy" />
            <figcaption><strong>Robin D.</strong><span>VP of Operations</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/roymarc.jpg" alt="Roy Marc C., Ads Manager at je.design" loading="lazy" />
            <figcaption><strong>Roy Marc C.</strong><span>Ads Manager</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/charlie.jpg" alt="Charlie P., Human Resource at je.design" loading="lazy" />
            <figcaption><strong>Charlie P.</strong><span>Human Resource</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/roberta.jpg" alt="Robert A., Design Consultant at je.design" loading="lazy" />
            <figcaption><strong>Robert A.</strong><span>Design Consultant</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/ernst.jpg" alt="Ernst, Designer at je.design" loading="lazy" />
            <figcaption><strong>Ernst</strong><span>Designer</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/robertl.jpg" alt="Robert L., Designer at je.design" loading="lazy" />
            <figcaption><strong>Robert L.</strong><span>Designer</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/zyrus.jpg" alt="Zyrus T., Designer at je.design" loading="lazy" />
            <figcaption><strong>Zyrus T.</strong><span>Designer</span></figcaption>
          </figure>
          <figure className="person reveal">
            <img src="/assets/img/team/irvan.jpg" alt="Irvan R., Designer at je.design" loading="lazy" />
            <figcaption><strong>Irvan R.</strong><span>Designer</span></figcaption>
          </figure>
        </div>
      </div>
    </section>

    <Faq />

    <ContactSection />
  </main>
    </>
  );
}
