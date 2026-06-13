import ContactSection from "@/components/ContactSection";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Brand Access Program — $150 down, $150/month | je.design",
  description:
    "You don't need thousands upfront to get branded. $150 down and $150/month — full file access from day one, work starts immediately.",
};

const QUOTE_URL = "https://agreement.je.design/brand-access-program";
const SHOWCASE = ["high-caliber-electric", "spartan-hvac", "salty-soft-wash", "macdavy-heating-air", "graybeard-construction", "bison-roofing"];

const industries = ["Roofing", "HVAC", "Plumbing", "Electrical", "Concrete", "Landscaping", "Remodeling", "Painting", "Flooring", "Handyman", "Lawn Care", "Foundations", "Pool Service", "Fencing", "Pest Control", "Cleaning", "Moving", "Demolition"];

const faqs = [
  ["Is this a subscription?", "No. It's a fixed payment plan — $150 down, then $150/month until your project balance is paid off. Once it's paid, you're done. No recurring fees, no renewals."],
  ["Do I get my files right away?", "Yes — full file access from day one. We never hold your assets hostage while you're paying. Every client, no exceptions."],
  ["How fast do we start?", "Immediately. The moment you activate for $150, your project goes into production — no waiting weeks for deposits to clear or approval rounds to schedule."],
  ["What if I already have a logo?", "Perfect — the program covers rebrands and refreshes too. We'll take what's working, fix what isn't, and deliver a brand system you can actually grow with."],
  ["Is this only for new businesses?", "Not at all. We work with new launches and established companies that have outgrown their DIY branding alike."],
  ["What types of businesses do you work with?", "Service-based businesses — trades, contractors and companies that build things: roofing, HVAC, plumbing, electrical, landscaping and beyond."],
  ["How do revisions work?", "They're included. We work through revision rounds collaboratively until you love it — no per-round fees, no scope creep."],
  ["How do I get an instant quote?", "Click any \"Get Instant Quote\" button on this page — it takes about 60 seconds and there's no obligation."],
];

export default function BrandAccessPage() {
  return (
    <main id="top">
      {/* ===== Hero: headline + access pass ticket ===== */}
      <section className="pagehero bap-hero">
        <div className="container bap-hero__grid">
          <div>
            <span className="eyebrow reveal">Brand Access Program</span>
            <h1 className="pagehero__title split-lines"><span>Get branded now,</span> <span className="hero__accent">pay as you grow</span></h1>
            <p className="pagehero__sub reveal">Full professional branding for $150 down and $150 a month — your capital stays where it belongs: in your business.</p>
            <div className="bap__heroCta reveal">
              <a href={QUOTE_URL} target="_blank" rel="noopener" className="btn btn--solid magnetic" data-cursor="hover">
                <span>Get Instant Quote</span>
                <svg className="btn__arrow" width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <a href="#included" className="btn btn--ghost magnetic" data-cursor="hover"><span>See what's included</span></a>
            </div>
            <p className="bap-hero__proof reveal">★★★★★ &nbsp;100+ five-star brands launched through Brand Access</p>
          </div>

          <div className="bap-ticket reveal" id="bapTicket">
            <div className="bap-ticket__keep">
              <div className="bap-ticket__top">
                <img src="/assets/img/logo-white.webp" alt="" width="30" height="29" />
                <span>Brand Access Pass</span>
                <em>NO. 0150</em>
              </div>
              <div className="bap-ticket__price"><sup>$</sup>150<span>down today</span></div>
              <div className="bap-ticket__tear" id="bapTear" aria-hidden="true">
                <i className="bap-ticket__cutline"></i>
                <i className="bap-ticket__cutline bap-ticket__cutline--r"></i>
              </div>
            </div>
            <div className="bap-ticket__stub" id="bapStub">
              <div className="bap-ticket__rows">
                <div><em>Then</em><strong>$150 / month until paid off</strong></div>
                <div><em>Files</em><strong>Full access from day one</strong></div>
                <div><em>Starts</em><strong>Immediately</strong></div>
              </div>
              <div className="bap-ticket__barcode" aria-hidden="true">
                {Array.from({ length: 32 }).map((_, i) => <i key={i} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== The problem ===== */}
      <section className="section section--panel bap-problem">
        <div className="container bap-problem__grid">
          <div className="bap-invoices" aria-hidden="true">
            <div className="bap-invoice bap-invoice--back reveal">
              <header><span>BRANDING QUOTE</span><em>#0042</em></header>
              <div className="bap-invoice__row"><span>Logo &amp; brand identity</span><strong>$5,200</strong></div>
              <div className="bap-invoice__row"><span>Brand guidelines</span><strong>$2,300</strong></div>
              <div className="bap-invoice__total"><span>DUE BEFORE WORK</span><strong>$7,500</strong></div>
            </div>
            <div className="bap-invoice reveal">
              <header><span>BRANDING QUOTE</span><em>#0117</em></header>
              <div className="bap-invoice__row"><span>Full brand identity</span><strong>$6,400</strong></div>
              <div className="bap-invoice__row"><span>Vehicle wrap design</span><strong>$2,200</strong></div>
              <div className="bap-invoice__row"><span>Collateral design</span><strong>$1,200</strong></div>
              <div className="bap-invoice__total"><span>DUE UPFRONT</span><strong>$9,800</strong></div>
              <span className="bap-invoice__stamp">DUE IN FULL — BEFORE WORK STARTS</span>
            </div>
          </div>
          <div className="bap-problem__copy">
            <span className="eyebrow reveal">The problem</span>
            <h2 className="section__title split-lines"><span>Real branding</span> <span className="hero__accent">costs real money</span></h2>
            <p className="bap-problem__sub reveal">A brand done right runs thousands — and that's cash most owners need for payroll, trucks and materials.</p>
            <ul className="bap-problem__list reveal">
              <li><i>✕</i>$3K–$10K is the honest cost of a full brand done right</li>
              <li><i>✕</i>Paying it in one check drains the cash your business runs on</li>
              <li><i>✕</i>So the rebrand waits — and the DIY logo keeps costing you jobs</li>
            </ul>
            <p className="svc-card__note reveal">"We'll get to branding when we can afford it." — every owner running on tight cash flow.</p>
          </div>
        </div>
      </section>

      {/* ===== How it works: staircase ===== */}
      <section className="section bap-how">
        <div className="container">
          <div className="section__head section__head--split">
            <div className="section__head-left">
              <span className="eyebrow reveal">How it works</span>
              <h2 className="section__title split-lines"><span>Three steps.</span> <span className="hero__accent">No risk.</span></h2>
            </div>
            <p className="section__sub reveal">Simple, predictable and built for businesses that need to keep moving.</p>
          </div>
          <div className="bap-stairs">
            <svg className="bap-stairs__path" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true">
              <path d="M120 90 C 350 90, 380 210, 600 210 S 880 330, 1080 330" fill="none" stroke="rgba(255,246,0,0.35)" strokeWidth="2" strokeDasharray="7 9" />
            </svg>
            <div className="bap-stair bap-stair--1 reveal">
              <span className="bap-stair__num" aria-hidden="true">1</span>
              <div className="bap-stair__card" data-tilt>
                <span className="bap-step__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v10M15 9.5c-.6-1-1.7-1.5-3-1.5-1.7 0-3 .9-3 2.25S10.3 12 12 12s3 .9 3 2.25-1.3 2.25-3 2.25c-1.3 0-2.4-.5-3-1.5" /></svg>
                </span>
                <h3>Activate for $150</h3>
                <p>One small payment gets your project started. No massive deposit. No financial risk.</p>
              </div>
            </div>
            <div className="bap-stair bap-stair--2 reveal">
              <span className="bap-stair__num" aria-hidden="true">2</span>
              <div className="bap-stair__card" data-tilt>
                <span className="bap-step__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3v18l15-9L5 3Z" /></svg>
                </span>
                <h3>We start immediately</h3>
                <p>Once activated, your brand creatives go into production right away. No approval queues.</p>
              </div>
            </div>
            <div className="bap-stair bap-stair--3 reveal">
              <span className="bap-stair__num" aria-hidden="true">3</span>
              <div className="bap-stair__card" data-tilt>
                <span className="bap-step__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 7.7-1.5" /></svg>
                </span>
                <h3>Full access while you pay</h3>
                <p>Use your files from day one. Pay $150/month until complete — then you're done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Compare: center ledger ===== */}
      <section className="section section--panel">
        <div className="container">
          <div className="section__head section__head--split">
            <div className="section__head-left">
              <span className="eyebrow reveal">Compare</span>
              <h2 className="section__title split-lines"><span>Start now,</span> <span className="hero__accent">not someday</span></h2>
            </div>
          </div>
          <div className="vsl">
            <div className="vsl__head reveal">
              <span className="vsl__crown">Brand Access</span>
              <span className="vsl__mid">Feature</span>
              <span className="vsl__old">Saving Up First</span>
            </div>
            <div className="vsl__row reveal">
              <div className="vsl__us"><i>✓</i>$150 down</div>
              <span className="vsl__label">To get started</span>
              <div className="vsl__them"><i>✕</i>Months of saving</div>
            </div>
            <div className="vsl__row reveal">
              <div className="vsl__us"><i>✓</i>$150/mo, predictable</div>
              <span className="vsl__label">Cash flow</span>
              <div className="vsl__them"><i>✕</i>One $5,000+ check</div>
            </div>
            <div className="vsl__row reveal">
              <div className="vsl__us"><i>✓</i>Immediately</div>
              <span className="vsl__label">Work begins</span>
              <div className="vsl__them"><i>✕</i>Whenever the budget allows</div>
            </div>
            <div className="vsl__row reveal">
              <div className="vsl__us"><i>✓</i>Stays in the business</div>
              <span className="vsl__label">Your capital</span>
              <div className="vsl__them"><i>✕</i>Tied up in design fees</div>
            </div>
            <div className="vsl__row reveal">
              <div className="vsl__us"><i>✓</i>Working from day one</div>
              <span className="vsl__label">Your brand</span>
              <div className="vsl__them"><i>✕</i>Still the DIY logo</div>
            </div>
            <div className="vsl__row reveal">
              <div className="vsl__us"><i>✓</i>Cancel anytime</div>
              <span className="vsl__label">Risk</span>
              <div className="vsl__them"><i>✕</i>All-in, all at once</div>
            </div>
            <div className="vsl__foot reveal">
              <a href={QUOTE_URL} target="_blank" rel="noopener" className="btn btn--solid magnetic" data-cursor="hover"><span>Get Instant Quote</span></a>
              <p>Same five-star brand either way. One starts today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What you get: orbit + accordion ===== */}
      <section className="section" id="included">
        <div className="container bap-files__grid">
          <div className="bap-orbit reveal" aria-hidden="true">
            <span className="bap-orbit__ring bap-orbit__ring--1"></span>
            <span className="bap-orbit__ring bap-orbit__ring--2"></span>
            <span className="bap-orbit__ring bap-orbit__ring--3"></span>
            <div className="bap-orbit__stack">
              <div className="bap-file bap-file--1"><em>.AI</em><span>vector source</span></div>
              <div className="bap-file bap-file--2"><em>.SVG</em><span>web-ready</span></div>
              <div className="bap-file bap-file--3"><em>.PDF</em><span>print-crisp</span></div>
              <div className="bap-file bap-file--4"><em>.PNG</em><span>everywhere else</span></div>
              <div className="bap-file bap-file--5"><em>.EPS</em><span>vendor-proof</span></div>
            </div>
          </div>
          <div>
            <span className="eyebrow reveal">What you get</span>
            <h2 className="section__title split-lines"><span>Everything you need</span> <span className="hero__accent">to look professional</span></h2>
            <p className="section__sub reveal" style={{ marginTop: "18px", maxWidth: "52ch" }}>No partial deliveries. No locked files. Every asset below is yours to use from day one — click any row for the details.</p>
            <div className="bap-acc">
              <details className="bap-acc__item reveal">
                <summary data-cursor="hover"><em>01</em>Primary logo + variations<span className="faq__icon"></span></summary>
                <div className="bap-acc__body"><p>Dark, light and icon-only formats delivered in every format you need for print, web and signage — AI, SVG, PNG and PDF.</p></div>
              </details>
              <details className="bap-acc__item reveal">
                <summary data-cursor="hover"><em>02</em>Brand color palette + typography<span className="faq__icon"></span></summary>
                <div className="bap-acc__body"><p>A complete color system with hex codes and carefully selected font pairings that define your brand voice.</p></div>
              </details>
              <details className="bap-acc__item reveal">
                <summary data-cursor="hover"><em>03</em>All source files delivered<span className="faq__icon"></span></summary>
                <div className="bap-acc__body"><p>Every file format you'll ever need — vector files for print, optimized files for web, and editable source files. AI, SVG, PNG, PDF, EPS.</p></div>
              </details>
              <details className="bap-acc__item reveal">
                <summary data-cursor="hover"><em>04</em>Brand guidelines document<span className="faq__icon"></span></summary>
                <div className="bap-acc__body"><p>Logo usage rules, minimum sizes, clear space, color applications, and do/don't examples — all in one document.</p></div>
              </details>
              <details className="bap-acc__item reveal">
                <summary data-cursor="hover"><em>05</em>Revision rounds included<span className="faq__icon"></span></summary>
                <div className="bap-acc__body"><p>We work collaboratively through multiple revision rounds to refine every detail until you love it. No extra fees.</p></div>
              </details>
            </div>
            <p className="bap__fineprint reveal">Exact deliverables confirmed at onboarding based on your package. We deliver design files — printing and installation are handled by your preferred vendors.</p>
          </div>
        </div>
      </section>

      {/* ===== Testimonial ===== */}
      <section className="section section--padless">
        <div className="container">
          <blockquote className="cg-quote reveal">
            <span className="cg-quote__mark" aria-hidden="true">“</span>
            <div className="cg-quote__stars" aria-label="5.0 star review">★★★★★</div>
            <p>We went from a DIY logo to a brand that gets us taken seriously. Clients now say we look like a million-dollar company.</p>
            <footer>
              <strong>Marcus R.</strong>
              <span>Roofing Contractor, TX</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ===== Showcase: owners who used the program ===== */}
      <section className="section bap-showcase">
        <div className="container">
          <div className="section__head section__head--split">
            <div className="section__head-left">
              <span className="eyebrow reveal">The proof</span>
              <h2 className="section__title split-lines"><span>Owners who</span> <span className="hero__accent">started here</span></h2>
            </div>
            <p className="section__sub reveal">Service businesses that branded through Brand Access — drawn by hand, on trucks and uniforms today.</p>
          </div>
        </div>
        <div className="container work__grid">
          {SHOWCASE.map(function (slug, i) {
            var p = projects.find(function (x) { return x.slug === slug; });
            if (!p) return null;
            return (
              <a key={p.slug} href={"/work/" + p.slug} className={"work-card" + (i === 0 || i === 4 ? " work-card--lg" : "")} data-cursor="view">
                <div className="work-card__media"><img src={p.img} alt={p.title + " brand identity"} loading="lazy" /></div>
                <div className="work-card__meta"><h3>{p.title}</h3><span>{p.category} · {p.industry}</span></div>
              </a>
            );
          })}
        </div>
      </section>

      {/* ===== Results + industry tape ===== */}
      <section className="section bap-results">
        <div className="container">
          <div className="section__head section__head--split">
            <div className="section__head-left">
              <span className="eyebrow reveal">Results</span>
              <h2 className="section__title split-lines"><span>Built for businesses</span> <span className="hero__accent">that build things</span></h2>
            </div>
            <p className="section__sub reveal">We work exclusively with service businesses — trades, contractors and companies that need branding that works as hard as they do.</p>
          </div>
          <div className="about__stats" style={{ marginTop: 0 }}>
            <div className="about-stat reveal"><strong>100+</strong><span>Brands built through Brand Access</span></div>
            <div className="about-stat reveal"><strong>$150</strong><span>To get started — not thousands upfront</span></div>
            <div className="about-stat reveal"><strong>100%</strong><span>File ownership from day one</span></div>
            <div className="about-stat reveal"><strong>0</strong><span>Contracts, lock-ins or hidden fees</span></div>
          </div>
        </div>
        <div className="tape" aria-label="Industries we serve" style={{ marginTop: "clamp(48px, 7vw, 80px)" }}>
          <div className="marquee marquee--yellow">
            <div className="marquee__track">
              <div className="marquee__group"><span>Roofing</span><i>✦</i><span>HVAC</span><i>✦</i><span>Plumbing</span><i>✦</i><span>Electrical</span><i>✦</i><span>Concrete</span><i>✦</i><span>Landscaping</span><i>✦</i><span>Remodeling</span><i>✦</i><span>Painting</span><i>✦</i><span>Flooring</span><i>✦</i><span>Handyman</span><i>✦</i><span>Lawn Care</span><i>✦</i><span>Foundations</span><i>✦</i><span>Pool Service</span><i>✦</i><span>Fencing</span><i>✦</i><span>Pest Control</span><i>✦</i><span>Cleaning</span><i>✦</i><span>Moving</span><i>✦</i><span>Demolition</span><i>✦</i></div>
              <div className="marquee__group" aria-hidden="true"><span>Roofing</span><i>✦</i><span>HVAC</span><i>✦</i><span>Plumbing</span><i>✦</i><span>Electrical</span><i>✦</i><span>Concrete</span><i>✦</i><span>Landscaping</span><i>✦</i><span>Remodeling</span><i>✦</i><span>Painting</span><i>✦</i><span>Flooring</span><i>✦</i><span>Handyman</span><i>✦</i><span>Lawn Care</span><i>✦</i><span>Foundations</span><i>✦</i><span>Pool Service</span><i>✦</i><span>Fencing</span><i>✦</i><span>Pest Control</span><i>✦</i><span>Cleaning</span><i>✦</i><span>Moving</span><i>✦</i><span>Demolition</span><i>✦</i></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq section section--panel" id="faq">
        <div className="container faq__layout">
          <div className="faq__head">
            <span className="eyebrow reveal">Answers</span>
            <h2 className="section__title split-lines"><span>FAQ</span></h2>
            <p className="section__sub reveal">Common questions, straight answers.</p>
            <a href={QUOTE_URL} target="_blank" rel="noopener" className="btn btn--ghost magnetic reveal" data-cursor="hover"><span>Get Instant Quote</span></a>
          </div>
          <div className="faq__list">
            {faqs.map(([q, a]) => (
              <details className="faq__item" key={q}>
                <summary data-cursor="hover">{q}<span className="faq__icon"></span></summary>
                <div className="faq__body"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
