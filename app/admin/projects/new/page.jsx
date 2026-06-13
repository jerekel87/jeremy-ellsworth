import { services } from "@/lib/services";
import { CmsTopbar, Field, FieldGrid, Select, ChipPicker, CreateBar } from "@/components/cms/Ui";

export const metadata = { title: "New project — Studio CMS" };

export default function NewProject() {
  return (
    <>
      <CmsTopbar
        title="New project"
        subtitle={<a href="/admin/projects" className="cmsc-back">← Back to projects</a>}
        action={<span className="cms-chip cms-chip--replied">Draft</span>}
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          <header className="cms-panel__head"><h2>Details</h2></header>
          <div className="cmsc-section__body">
            <FieldGrid>
              <Field label="Title" placeholder="e.g. Hutchins Roofing" half />
              <Field label="Slug" placeholder="hutchins-roofing" half hint="Public URL: /work/<slug> — leave blank to generate from the title" />
              <Select label="Category" value="Brand Identity" options={["Brand Identity", "Brand Identity + Product Design", "Vehicle Wrap", "Website", "Mascot Design", "Print & Collateral"]} half />
              <Select label="Industry" value="Home Service" options={["Home Service", "Construction", "Food & Beverage", "Recreation", "Retail", "Other"]} half />
              <Field label="Blurb" placeholder="One or two sentences for the case page hero — what was built and why it works." textarea rows={3} />
              <Field label="Deliverables" placeholder="Logo design, Five-page style guide, Business cards…" hint="Comma-separated — shown in The Solution panel" />
              <ChipPicker label="Services (links to service pages)" options={services.map((s) => s.title)} hint="Each picked service renders as a numbered link on the case page" />
              <Field label="Original case study link" placeholder="https://je.design/projects/…" />
            </FieldGrid>
          </div>
        </section>

        <section className="cms-panel">
          <header className="cms-panel__head"><h2>Testimonial</h2></header>
          <div className="cmsc-section__body">
            <FieldGrid>
              <Field label="Quote" placeholder="What the client said — real reviews only, with real attribution." textarea rows={2} />
              <Field label="Name" placeholder="e.g. Dale H." half />
              <Field label="Company" placeholder="e.g. Hutchins Roofing" half />
            </FieldGrid>
          </div>
        </section>

        <section className="cms-panel">
          <header className="cms-panel__head">
            <h2>Gallery</h2>
            <span className="cms-panel__meta">First image becomes the cover and case-page lead</span>
          </header>
          <div className="cmsc-section__body">
            <div className="cmsc-gallery__grid">
              {Array.from({ length: 4 }).map((_, i) => (
                <button key={i} type="button" className="cmsc-gallery__add" title="Add image">＋</button>
              ))}
            </div>
            <p className="cmsc-note" style={{ marginTop: "12px" }}>Pick from <a href="/admin/media">Media</a> or drop files here. Case pages lay galleries out in a 3 / 1 / 2 rhythm after the lead.</p>
          </div>
        </section>

        <CreateBar publishLabel="Publish project" />
      </div>
    </>
  );
}
