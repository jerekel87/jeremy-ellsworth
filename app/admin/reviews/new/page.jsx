import { CmsTopbar, Field, FieldGrid, Select, CreateBar } from "@/components/cms/Ui";

export const metadata = { title: "New review — Studio CMS" };

export default function NewReview() {
  return (
    <>
      <CmsTopbar
        title="New review"
        subtitle={<a href="/admin/reviews" className="cmsc-back">← Back to reviews</a>}
        action={<span className="cms-chip cms-chip--replied">Draft</span>}
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          <header className="cms-panel__head"><h2>Review</h2></header>
          <div className="cmsc-section__body">
            <FieldGrid>
              <Field label="Name" placeholder="e.g. Dale Hutchins" half />
              <Field label="Company" placeholder="e.g. Hutchins Roofing" half />
              <Select label="Source" value="Google" options={["Google", "Facebook"]} half hint="Only real, verifiable reviews" />
              <Select label="Rating" value="★★★★★ (5)" options={["★★★★★ (5)", "★★★★ (4)"]} half />
              <Field label="Short version (marquee card)" placeholder="The punchy excerpt shown on the scrolling review cards — keep it under ~240 characters." textarea rows={3} />
              <Field label="Full review (lightbox)" placeholder="The complete review, word for word as posted." textarea rows={5} />
              <Field label="Link to original" placeholder="https://g.co/… or https://facebook.com/…" hint="Kept for verification, not shown on the site" />
            </FieldGrid>
          </div>
        </section>

        <p className="cmsc-note">House rule: no fabricated testimonials — name, company and wording must match the original post.</p>
        <CreateBar publishLabel="Feature review" />
      </div>
    </>
  );
}
