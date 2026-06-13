import { CmsTopbar, Field, FieldGrid, EditSection, SaveBar } from "@/components/cms/Ui";

export const metadata = { title: "Brand Access — Studio CMS" };

const COMPARE_ROWS = [
  ["To get started", "$150 down", "Months of saving"],
  ["Cash flow", "$150/mo, predictable", "One $5,000+ check"],
  ["Work begins", "Immediately", "Whenever the budget allows"],
  ["Your capital", "Stays in the business", "Tied up in design fees"],
  ["Your brand", "Working from day one", "Still the DIY logo"],
  ["Risk", "Cancel anytime", "All-in, all at once"],
];

const DELIVERABLES = [
  ["Primary logo + variations", "Dark, light and icon-only formats delivered in every format you need for print, web and signage — AI, SVG, PNG and PDF."],
  ["Brand color palette + typography", "A complete color system with hex codes and carefully selected font pairings that define your brand voice."],
  ["All source files delivered", "Every file format you'll ever need — vector files for print, optimized files for web, and editable source files. AI, SVG, PNG, PDF, EPS."],
  ["Brand guidelines document", "Logo usage rules, minimum sizes, clear space, color applications, and do/don't examples — all in one document."],
  ["Revision rounds included", "We work collaboratively through multiple revision rounds to refine every detail until you love it. No extra fees."],
];

const STEPS = [
  ["Activate for $150", "One small payment gets your project started. No massive deposit. No financial risk."],
  ["We start immediately", "Once activated, your brand creatives go into production right away. No approval queues."],
  ["Full access while you pay", "Use your files from day one. Pay $150/month until complete — then you're done."],
];

export default function BrandAccessAdmin() {
  return (
    <>
      <CmsTopbar
        title="Brand Access"
        subtitle="Everything on /brand-access-program — hero, pass, sections, compare table and stats."
        action={<a href="/brand-access-program" target="_blank" rel="noopener" className="cms__btn-ghost">View page ↗</a>}
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          <div className="cmsc-sections">
            <EditSection title="Hero" count="5 fields" open>
              <FieldGrid>
                <Field label="Eyebrow" value="Brand Access Program" />
                <Field label="Headline" value="Get branded now, pay as you grow" hint="Second half renders in the italic accent style" />
                <Field label="Subheadline" value="Full professional branding for $150 down and $150 a month — your capital stays where it belongs: in your business." textarea />
                <Field label="Proof line" value="★★★★★ 100+ five-star brands launched through Brand Access" />
                <Field label="Quote URL (Get Instant Quote)" value="https://agreement.je.design/brand-access-program" />
              </FieldGrid>
            </EditSection>

            <EditSection title="Access pass (the ticket)" count="6 fields">
              <FieldGrid>
                <Field label="Down payment" value="$150" half />
                <Field label="Pass number" value="NO. 0150" half />
                <Field label="Row — Then" value="$150 / month until paid off" />
                <Field label="Row — Files" value="Full access from day one" />
                <Field label="Row — Starts" value="Immediately" />
              </FieldGrid>
              <p className="cmsc-note">The scissors-cut interaction and falling stub are part of the design; only the copy is editable here.</p>
            </EditSection>

            <EditSection title="The problem" count="6 fields">
              <FieldGrid>
                <Field label="Headline" value="Real branding costs real money" />
                <Field label="Subheadline" value="A brand done right runs thousands — and that's cash most owners need for payroll, trucks and materials." textarea />
                <Field label="Pain point 1" value="$3K–$10K is the honest cost of a full brand done right" />
                <Field label="Pain point 2" value="Paying it in one check drains the cash your business runs on" />
                <Field label="Pain point 3" value="So the rebrand waits — and the DIY logo keeps costing you jobs" />
                <Field label="Closing quote" value={'"We\'ll get to branding when we can afford it." — every owner running on tight cash flow'} textarea rows={2} />
              </FieldGrid>
            </EditSection>

            <EditSection title="How it works (3 steps)" count="6 fields">
              <FieldGrid>
                {STEPS.map(([t, d], i) => (
                  <div className="cmsc-pair" key={i}>
                    <Field label={`Step ${i + 1} title`} value={t} />
                    <Field label={`Step ${i + 1} text`} value={d} textarea rows={2} />
                  </div>
                ))}
              </FieldGrid>
            </EditSection>

            <EditSection title="Compare table" count={`${COMPARE_ROWS.length} rows`}>
              <FieldGrid>
                <Field label="Headline" value="Start now, not someday" />
                <Field label="Left column header" value="Brand Access" half />
                <Field label="Right column header" value="Saving Up First" half />
              </FieldGrid>
              <div className="cmsc-table">
                <div className="cmsc-table__head"><span>Feature</span><span>Brand Access</span><span>Saving up</span></div>
                {COMPARE_ROWS.map(([label, us, them]) => (
                  <div className="cmsc-table__row" key={label}>
                    <input type="text" defaultValue={label} />
                    <input type="text" defaultValue={us} />
                    <input type="text" defaultValue={them} />
                  </div>
                ))}
              </div>
              <FieldGrid>
                <Field label="Foot line" value="Same five-star brand either way. One starts today." />
              </FieldGrid>
            </EditSection>

            <EditSection title="What you get" count={`${DELIVERABLES.length} items`}>
              <FieldGrid>
                <Field label="Headline" value="Everything you need to look professional" />
                <Field label="Subheadline" value="No partial deliveries. No locked files. Every asset below is yours to use from day one — click any row for the details." textarea rows={2} />
                {DELIVERABLES.map(([t, d], i) => (
                  <div className="cmsc-pair" key={i}>
                    <Field label={`Item ${i + 1}`} value={t} />
                    <Field label={`Item ${i + 1} details`} value={d} textarea rows={2} />
                  </div>
                ))}
                <Field label="Fine print" value="Exact deliverables confirmed at onboarding based on your package. We deliver design files — printing and installation are handled by your preferred vendors." textarea rows={2} />
              </FieldGrid>
            </EditSection>

            <EditSection title="Testimonial" count="3 fields">
              <FieldGrid>
                <Field label="Quote" value="We went from a DIY logo to a brand that gets us taken seriously. Clients now say we look like a million-dollar company." textarea />
                <Field label="Name" value="Marcus R." half />
                <Field label="Attribution" value="Roofing Contractor, TX" half />
              </FieldGrid>
            </EditSection>

            <EditSection title="Showcase (Owners who started here)" count="6 projects">
              <FieldGrid>
                <Field label="Headline" value="Owners who started here" />
                <Field label="Subheadline" value="Service businesses that branded through Brand Access — drawn by hand, on trucks and uniforms today." textarea rows={2} />
                <Field label="Projects (slugs, in order)" value="high-caliber-electric, spartan-hvac, salty-soft-wash, macdavy-heating-air, graybeard-construction, bison-roofing" hint="Pulled from Projects — first and fifth render large" />
              </FieldGrid>
            </EditSection>

            <EditSection title="Results stats" count="4 stats">
              <div className="cmsc-table">
                <div className="cmsc-table__head"><span>Value</span><span>Label</span><span /></div>
                {[["100+", "Brands built through Brand Access"], ["$150", "To get started — not thousands upfront"], ["100%", "File ownership from day one"], ["0", "Contracts, lock-ins or hidden fees"]].map(([v, l]) => (
                  <div className="cmsc-table__row cmsc-table__row--two" key={l}>
                    <input type="text" defaultValue={v} />
                    <input type="text" defaultValue={l} />
                  </div>
                ))}
              </div>
            </EditSection>

            <EditSection title="Industries tape" count="18 industries">
              <FieldGrid>
                <Field label="Industries (comma-separated)" value="Roofing, HVAC, Plumbing, Electrical, Concrete, Landscaping, Remodeling, Painting, Flooring, Handyman, Lawn Care, Foundations, Pool Service, Fencing, Pest Control, Cleaning, Moving, Demolition" textarea rows={2} />
              </FieldGrid>
            </EditSection>
          </div>
        </section>
        <p className="cmsc-note">The Brand Access FAQ is managed in <a href="/admin/faqs">FAQs</a>. The home-page program section is in <a href="/admin/pages">Pages → Home</a>.</p>
        <SaveBar />
      </div>
    </>
  );
}
