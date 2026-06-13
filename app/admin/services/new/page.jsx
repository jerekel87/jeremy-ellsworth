import { CmsTopbar, Field, FieldGrid, CreateBar } from "@/components/cms/Ui";

export const metadata = { title: "New service — Studio CMS" };

export default function NewService() {
  return (
    <>
      <CmsTopbar
        title="New service"
        subtitle={<a href="/admin/services" className="cmsc-back">← Back to services</a>}
        action={<span className="cms-chip cms-chip--replied">Draft</span>}
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          <header className="cms-panel__head"><h2>Details</h2></header>
          <div className="cmsc-section__body">
            <FieldGrid>
              <Field label="Title" placeholder="e.g. Sign Design" half />
              <Field label="Slug" placeholder="sign-design" half hint="Public URL: /services/<slug>" />
              <Field label="Short label (sticky index)" placeholder="Signs" half hint="Used in the services page side index" />
              <Field label="Number" placeholder="07" half />
              <Field label="Description" placeholder="Two or three sentences — what it is, how it's made, why it wins work." textarea rows={4} />
              <Field label="Note (italic aside)" placeholder="A one-line aside in the brand voice — the wink under the description." textarea rows={2} />
              <Field label="Industries line" placeholder="Storefronts · Job sites · Trade shows" hint="Dot-separated, shown under the description" />
              <Field label="What's included 1" placeholder="e.g. Concept & design" half />
              <Field label="What's included 2" placeholder="e.g. Print-ready files" half />
              <Field label="What's included 3" placeholder="e.g. Size variants" half />
              <Field label="What's included 4" placeholder="e.g. Vendor coordination" half />
            </FieldGrid>
          </div>
        </section>

        <section className="cms-panel">
          <header className="cms-panel__head">
            <h2>Cover image</h2>
            <span className="cms-panel__meta">Listing card + service page hero</span>
          </header>
          <div className="cmsc-section__body">
            <div className="cmsc-gallery__grid">
              <button type="button" className="cmsc-gallery__add" title="Pick cover">＋</button>
            </div>
            <p className="cmsc-note" style={{ marginTop: "12px" }}>Pick from <a href="/admin/media">Media</a> — usually the strongest recent project in this service.</p>
          </div>
        </section>

        <CreateBar publishLabel="Publish service" />
      </div>
    </>
  );
}
