import { CmsTopbar, Field, FieldGrid, SaveBar } from "@/components/cms/Ui";

export const metadata = { title: "Settings — Studio CMS" };

const NAV = [
  ["business", "Business"],
  ["proof", "Social proof"],
  ["booking", "Booking"],
  ["integrations", "Integrations"],
  ["options", "Site options"],
  ["seo", "SEO"],
  ["social", "Social links"],
  ["danger", "Danger zone"],
];

function Toggle({ label, hint, on }) {
  return (
    <label className="cms-switch">
      <input type="checkbox" defaultChecked={on} />
      <i></i>
      <span>
        <strong>{label}</strong>
        {hint ? <em>{hint}</em> : null}
      </span>
    </label>
  );
}

function Integration({ name, desc, status, children }) {
  return (
    <div className="cmss-integration">
      <header>
        <strong>{name}</strong>
        <span className={"cms-chip " + (status === "Connected" ? "cms-chip--live" : "cms-chip--replied")}>{status}</span>
      </header>
      <p>{desc}</p>
      {children}
    </div>
  );
}

export default function SettingsAdmin() {
  return (
    <>
      <CmsTopbar title="Settings" subtitle="Business details, integrations and site-wide defaults." />
      <div className="cms__content cmss">
        <nav className="cmss__nav" aria-label="Settings sections">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>

        <div className="cmss__sections">
          <section className="cms-panel cmss__panel" id="business">
            <header className="cms-panel__head"><h2>Business</h2></header>
            <div className="cmsc-section__body">
              <FieldGrid>
                <Field label="Legal name" value="Jeremy Ellsworth Designs LLC" half />
                <Field label="Brand name" value="je.design" half />
                <Field label="Inquiry email" value="inquiry@jeremynellsworth.com" half />
                <Field label="Reply-from email (Resend)" value="hello@je.design" half />
                <Field label="Team size (shown in copy)" value="10" half />
                <Field label="Years in business (shown in copy)" value="20" half />
              </FieldGrid>
            </div>
          </section>

          <section className="cms-panel cmss__panel" id="proof">
            <header className="cms-panel__head"><h2>Social proof</h2></header>
            <div className="cmsc-section__body">
              <FieldGrid>
                <Field label="Aggregate rating" value="5.0" half />
                <Field label="Review badge text" value="Based on 700+ reviews" half />
                <Field label="Success stories line" value="1,800+ success stories" half />
                <Field label="Five-star brands (Brand Access)" value="100+" half />
              </FieldGrid>
              <p className="cmsc-note">These numbers appear in the hero, the Google badge, the reviews section and the Brand Access page. Keep them honest — they're claims.</p>
            </div>
          </section>

          <section className="cms-panel cmss__panel" id="booking">
            <header className="cms-panel__head"><h2>Booking</h2></header>
            <div className="cmsc-section__body">
              <FieldGrid>
                <Field label="Cal.com link" value="jeremyellsworth/design-consultation" hint="Powers the hero booking embed" />
                <Field label="Booking heading" value="Book your FREE design consultation" />
                <Field label="Marker note" value="it's free—grab a slot!" half />
              </FieldGrid>
            </div>
          </section>

          <section className="cms-panel cmss__panel" id="integrations">
            <header className="cms-panel__head"><h2>Integrations</h2></header>
            <div className="cmsc-section__body cmss__integrations">
              <Integration name="Resend" status="Not connected" desc="Sends ticket replies from the Inquiries workspace.">
                <FieldGrid>
                  <Field label="API key" value="re_••••••••••••••••••••" half />
                  <Field label="From address" value="Jeremy at je.design <hello@je.design>" half />
                </FieldGrid>
              </Integration>
              <Integration name="Anthropic" status="Connected" desc="Powers the concierge letter chat (claude-haiku-4-5).">
                <FieldGrid>
                  <Field label="API key" value="sk-ant-••••••••••••••••" half />
                  <Field label="Model" value="claude-haiku-4-5" half />
                </FieldGrid>
              </Integration>
              <Integration name="Cal.com" status="Connected" desc="The booking calendar embedded in the home hero.">
                <FieldGrid>
                  <Field label="Username / event" value="jeremyellsworth/design-consultation" half />
                </FieldGrid>
              </Integration>
              <Integration name="Analytics" status="Not connected" desc="Feeds the dashboard traffic chart, live visitors and the US map.">
                <FieldGrid>
                  <Field label="Provider" value="—" half hint="e.g. Plausible, GA4, Vercel Analytics" />
                  <Field label="Site ID / key" value="" half />
                </FieldGrid>
              </Integration>
              <Integration name="Quote form" status="Connected" desc="The external Brand Access instant-quote flow.">
                <FieldGrid>
                  <Field label="URL" value="https://agreement.je.design/brand-access-program" />
                </FieldGrid>
              </Integration>
            </div>
          </section>

          <section className="cms-panel cmss__panel" id="options">
            <header className="cms-panel__head"><h2>Site options</h2></header>
            <div className="cmsc-section__body cmss__toggles">
              <Toggle on label="Preloader" hint="The JE intro animation on first load" />
              <Toggle on label="Smooth scrolling" hint="Lenis-powered inertia scroll" />
              <Toggle on label="Custom cursor" hint="Yellow ring cursor on fine pointers" />
              <Toggle on label="Concierge letter" hint="Notification bell + AI chat in the header" />
              <Toggle on label="Google rating badge" hint="Floating 5.0 badge (desktop only)" />
              <Toggle on label="Ticket cut interaction" hint="Scissors cut on the Brand Access pass" />
              <Toggle label="Maintenance mode" hint="Shows a holding page to visitors" />
            </div>
          </section>

          <section className="cms-panel cmss__panel" id="seo">
            <header className="cms-panel__head"><h2>SEO</h2></header>
            <div className="cmsc-section__body">
              <FieldGrid>
                <Field label="Title template" value="%s | je.design" half />
                <Field label="Default title" value="je.design — your five-star creative design agency" half />
                <Field label="Default description" value="Premium creative brand agency for small businesses — logos, vehicle wraps, websites and mascots. Drawn by hand, never AI." textarea rows={2} />
                <Field label="Social share image" value="/assets/img/work/boss-hawgs.jpg" hint="Pick from Media" />
              </FieldGrid>
            </div>
          </section>

          <section className="cms-panel cmss__panel" id="social">
            <header className="cms-panel__head"><h2>Social links</h2></header>
            <div className="cmsc-section__body">
              <FieldGrid>
                <Field label="Instagram" value="https://instagram.com/jeremyellsworthdesigns" half />
                <Field label="Facebook" value="https://facebook.com/jeremyellsworthdesigns" half />
                <Field label="YouTube" value="https://youtube.com/@jeremyellsworth" half />
                <Field label="X / Twitter" value="https://x.com/je_design" half />
              </FieldGrid>
            </div>
          </section>

          <section className="cms-panel cmss__panel cmss__panel--danger" id="danger">
            <header className="cms-panel__head"><h2>Danger zone</h2></header>
            <div className="cmsc-section__body cmss__danger">
              <div>
                <strong>Export all content</strong>
                <span>Download projects, services, reviews, FAQs and page copy as JSON.</span>
                <button type="button" className="cms__btn-ghost">Export</button>
              </div>
              <div>
                <strong>Purge image cache</strong>
                <span>Force-regenerate optimized images after replacing files.</span>
                <button type="button" className="cms__btn-ghost">Purge</button>
              </div>
              <div>
                <strong>Reset CMS data</strong>
                <span>Restore all content to the last published state. Cannot be undone.</span>
                <button type="button" className="cms__btn-ghost cmsm__danger">Reset</button>
              </div>
            </div>
          </section>

          <SaveBar />
        </div>
      </div>
    </>
  );
}
