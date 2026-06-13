import { CmsTopbar, Field, FieldGrid, EditSection, SaveBar } from "@/components/cms/Ui";

export const metadata = { title: "Pages — Studio CMS" };

/* Site page copy, mirrored from the live pages — every headline, sub and CTA. */
const PAGES = [
  {
    title: "Home", path: "/", updated: "Today",
    sections: [
      { name: "Hero", fields: [
        { label: "Proof line", value: "★★★★★ 5.0 — 1,800+ success stories" },
        { label: "Headline", value: "Brands built to empower growth" },
        { label: "Subheadline", value: "Offering tailored creative solutions and brand packages designed to amplify your business — efficient, impactful, and built for growth.", textarea: true },
        { label: "Primary button", value: "Get a Quote", half: true },
        { label: "Secondary button", value: "Real Results", half: true },
        { label: "Booking box heading", value: "Book your FREE design consultation" },
        { label: "Marker note (handwritten)", value: "it's free—grab a slot!", half: true },
      ]},
      { name: "Work", fields: [
        { label: "Section title", value: "Brand projects" },
        { label: "Subtitle", value: "Strategic brand transformations that tell powerful stories and create lasting connections with your audience.", textarea: true },
      ]},
      { name: "Who we are", fields: [
        { label: "Statement", value: "We're a 10-person creative team with 20 years in the game — building brands for the trades that out-shine companies ten times their size.", textarea: true },
      ]},
      { name: "Why brands pick us", fields: [
        { label: "Section title", value: "Why brands pick us" },
        { label: "Manifesto note", value: "Drawn by hand, never AI. Real people answer, real artists draw.", textarea: true },
      ]},
      { name: "Services", fields: [
        { label: "Section title", value: "Creative solutions" },
        { label: "Subtitle", value: "Six ways we make your business impossible to ignore.", textarea: true },
      ]},
      { name: "Mascots", fields: [
        { label: "Section title", value: "Mascots they remember" },
      ]},
      { name: "Videos / How we work", fields: [
        { label: "Videos title", value: "Sketch to sizzle", half: true },
        { label: "Process title", value: "How we work", half: true },
      ]},
      { name: "Results", fields: [
        { label: "Section title", value: "Rebrands that pay for themselves" },
        { label: "Foot line", value: "Your rebrand could be next on this wall." },
      ]},
      { name: "Brand Access Program", fields: [
        { label: "Eyebrow", value: "A better way to pay" },
        { label: "Section title", value: "Brand Access Program" },
        { label: "Subtitle", value: "Get branded now and pay as you grow — $150 down, then $150 a month until paid off. Your capital stays in your business, your files are yours from day one.", textarea: true },
        { label: "Fine print", value: "No hidden fees · no hostage files · cancel anytime after completion." },
      ]},
      { name: "Reviews", fields: [
        { label: "Section title", value: "1.8k success stories" },
        { label: "Subtitle", value: "At je.design, we are committed to your success. We believe that our success lies in your success — and we are dedicated to helping you achieve it.", textarea: true },
      ]},
      { name: "Contact", fields: [
        { label: "Big line", value: "Let's talk" },
        { label: "Availability badge", value: "Available for work", half: true },
      ]},
    ],
  },
  {
    title: "About", path: "/about", updated: "1 week ago",
    sections: [
      { name: "Hero", fields: [
        { label: "Headline", value: "The team behind 1,800+ five-stars" },
      ]},
      { name: "Who we are", fields: [
        { label: "Statement", value: "A 10-person team, 20 years of brand-building, and one rule: everything is drawn by hand — never AI.", textarea: true },
      ]},
      { name: "Team", fields: [
        { label: "Section title", value: "Team je.design" },
      ]},
    ],
  },
  {
    title: "Work", path: "/work", updated: "3 days ago",
    sections: [
      { name: "Hero", fields: [
        { label: "Headline", value: "Brands built to win their market" },
      ]},
      { name: "Listing", fields: [
        { label: "Filter labels", value: "All, Home Service, Construction, Food & Beverage, Recreation" },
        { label: "Note", value: "Projects and their order are managed in Projects.", hint: "Informational — the grid is data-driven" },
      ]},
    ],
  },
  {
    title: "Services", path: "/services", updated: "5 days ago",
    sections: [
      { name: "Hero", fields: [
        { label: "Headline", value: "Creative Brand solutions" },
      ]},
      { name: "Differentiator", fields: [
        { label: "Statement", value: "Most agencies bury you in process, hand you to account managers and disappear for months. We do the opposite — and it shows in the work.", textarea: true },
        { label: "Strip 1 — title", value: "All in-house", half: true },
        { label: "Strip 1 — text", value: "One team designs everything you see here. Nothing outsourced, nothing handed off.", textarea: true },
        { label: "Strip 2 — title", value: "Drawn by hand — never AI", half: true },
        { label: "Strip 2 — text", value: "Every concept starts on a blank page with a real designer. No generated artwork, no templates.", textarea: true },
        { label: "Strip 3 — title", value: "Weeks, not months", half: true },
        { label: "Strip 3 — text", value: "First concepts in 5–7 business days. Most projects launch in 2–3 weeks.", textarea: true },
      ]},
      { name: "Service detail template (shared)", fields: [
        { label: "Process heading", value: "From hello to handoff" },
        { label: "Process eyebrow", value: "How it goes", half: true },
        { label: "Reviews heading", value: "Five stars, every time" },
        { label: "Owner signature", value: "Jeremy E.", half: true },
        { label: "Owner title", value: "Owner / Designer", half: true },
      ]},
      { name: "Program finale", fields: [
        { label: "Kicker", value: "A better way to pay — Brand Access Program" },
        { label: "Title", value: "Start for $150." },
        { label: "Foot line", value: "Full file access from day one, work starts immediately, revisions included — pay it off month by month.", textarea: true },
      ]},
    ],
  },
  {
    title: "Brand Access Program", path: "/brand-access-program", updated: "Today",
    managed: "Has its own editor — every section, the access pass, compare table and FAQs.",
    href: "/admin/brand-access",
    sections: [],
  },
];

export default function PagesAdmin() {
  return (
    <>
      <CmsTopbar title="Pages" subtitle="Every headline, subtitle and call-to-action on the site." />
      <div className="cms__content cmsc">
        {PAGES.map((p) => (
          <section className="cms-panel" key={p.path}>
            <header className="cms-panel__head">
              <h2>{p.title} <span className="cmsc-path">{p.path}</span></h2>
              <span className="cms-panel__meta">Updated {p.updated}</span>
            </header>
            {p.managed ? (
              <div className="cmsc-managed">
                <p>{p.managed}</p>
                <a href={p.href} className="cms__btn-ghost">Open editor</a>
              </div>
            ) : (
              <div className="cmsc-sections">
                {p.sections.map((s) => (
                  <EditSection key={s.name} title={s.name} count={`${s.fields.length} fields`}>
                    <FieldGrid>
                      {s.fields.map((f) => <Field key={f.label} {...f} />)}
                    </FieldGrid>
                  </EditSection>
                ))}
              </div>
            )}
          </section>
        ))}
        <SaveBar />
      </div>
    </>
  );
}
