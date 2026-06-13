import ContactSection from "@/components/ContactSection";
import SpinBadge from "@/components/SpinBadge";
import Faq from "@/components/Faq";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services — Jeremy Ellsworth Designs LLC | je.design",
  description:
    "Brand identity, vehicle wraps, websites, print, packaging and apparel for home service businesses — designed in-house, by hand, never AI. Flat pricing, 2–3 week delivery.",
};

export default function ServicesPage() {
  return (
    <main id="top">
      {/* ===== Page hero ===== */}
      <section className="pagehero">
        <div className="container">
        
          <span className="eyebrow reveal">What we do</span>
          <h1 className="pagehero__title split-lines"><span>Creative Brand</span> <span className="hero__accent">solutions</span></h1>
          <p className="pagehero__sub reveal">Six ways we make your business impossible to ignore — all under one roof, all by the same hands.</p>
      </div>
        <SpinBadge />
      </section>

      {/* ===== The difference ===== */}
      <section className="svcdiff section section--panel">
        <div className="container">
          <p className="about__statement split-words">Most agencies bury you in process, hand you to account managers and disappear for months. We do the opposite — and it shows in the work.</p>
          <div className="svcdiff__strip">
            <div className="svcdiff__item reveal">
              <strong>All in-house</strong>
              <span>One team designs everything you see here. Nothing outsourced, nothing handed off.</span>
            </div>
            <div className="svcdiff__item reveal">
              <strong>Drawn by hand — never AI</strong>
              <span>Every concept starts on a blank page with a real designer. No generated artwork, no templates.</span>
            </div>
            <div className="svcdiff__item reveal">
              <strong>Flat pricing</strong>
              <span>You know the full number before we start. No quote roulette, no change orders.</span>
            </div>
            <div className="svcdiff__item reveal">
              <strong>Weeks, not months</strong>
              <span>First concepts in 5–7 business days. Most projects launch in 2–3 weeks.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Service index + cards ===== */}
      <section className="svc section section--padless">
        <div className="container svc-layout">
          <nav className="svc-index" id="svcIndex" aria-label="Services index">
            {services.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} data-target={s.slug} data-cursor="hover">
                <em>{s.num}</em><span>{s.short || s.title}</span>
              </a>
            ))}
          </nav>
          <div className="svc-cards">
            {services.map((s, i) => (
              <article key={s.slug} className="svc-card reveal" id={s.slug}>
                <figure className="svc-card__media" data-tilt>
                  <img src={s.img} alt={s.title} loading={i === 0 ? "eager" : "lazy"} />
                </figure>
                <div className="svc-card__body">
                  <h2 className="svc-card__title">{s.title}</h2>
                  <p>{s.desc}</p>
                  <ul className="spec">
                    {s.bullets.map((b, bi) => (
                      <li key={b}><em>{String(bi + 1).padStart(2, "0")}</em>{b}</li>
                    ))}
                  </ul>
                  <p className="svc-card__note">{s.note}</p>
                  <div className="svc-card__foot">
                    <span className="svc-card__industries">{s.industries}</span>
                    <a href={`/services/${s.slug}`} className="btn btn--solid magnetic" data-cursor="hover">
                      <span>Learn more</span>
                      <svg className="btn__arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Sprint finale ===== */}
      <section className="sprint section">
        <div className="container">
          <div className="sprintcard reveal" data-tilt>
            <div className="sprintcard__top">
              <span className="sprintcard__kicker">A better way to pay — Brand Access Program</span>
              <div className="sprintcard__price"><sup>$</sup>150<span>down · $150/mo until paid off</span></div>
            </div>
            <h2 className="sprintcard__title">Start for <em>$150.</em></h2>
            <ul className="sprintcard__spec">
              {services.map((s, i) => (
                <li key={s.slug}><em>{String(i + 1).padStart(2, "0")}</em>{s.title}</li>
              ))}
            </ul>
            <div className="sprintcard__foot">
              <p className="sprintcard__line">Full file access from day one, work starts immediately, revisions included — pay it off month by month.</p>
              <div className="sprintcard__actions">
                <a href="https://agreement.je.design/brand-access-program" target="_blank" rel="noopener" className="btn btn--invert magnetic" data-cursor="hover"><span>Get Instant Quote</span></a>
                <a href="/brand-access-program" className="sprintcard__more" data-cursor="hover">How the program works →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <ContactSection />
    </main>
  );
}
