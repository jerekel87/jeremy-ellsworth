import { reviews } from "@/lib/reviews";
import { CmsTopbar, Field, FieldGrid, SaveBar } from "@/components/cms/Ui";

export const metadata = { title: "Reviews — Studio CMS" };

export default function ReviewsAdmin() {
  return (
    <>
      <CmsTopbar
        title="Reviews"
        subtitle={`${reviews.length} featured of 1,800+ collected — home marquee, service pages and lightbox.`}
        action={<a href="/admin/reviews/new" className="btn btn--sm btn--solid"><span>+ Add review</span></a>}
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          {reviews.map((r) => (
            <details className="cmsc-item" key={r.name}>
              <summary>
                <span className="cmsc-item__avatar">{r.name[0]}</span>
                <span className="cmsc-item__title">
                  <strong>{r.name} <em className="cmsc-stars">★★★★★</em></strong>
                  <span>{r.company} — “{r.short.slice(0, 80)}…”</span>
                </span>
                <span className="cms-chip cms-chip--live">Featured</span>
                <span className="faq__icon"></span>
              </summary>
              <div className="cmsc-section__body">
                <FieldGrid>
                  <Field label="Name" value={r.name} half />
                  <Field label="Company" value={r.company} half />
                  <Field label="Short version (marquee card)" value={r.short} textarea rows={3} hint="Keep it under ~240 characters so cards stay even" />
                  <Field label="Full review (lightbox)" value={r.full} textarea rows={5} />
                </FieldGrid>
              </div>
            </details>
          ))}
        </section>
        <p className="cmsc-note">Only real reviews with real attribution — sourced from Google &amp; Facebook. The aggregate badge (5.0 · 700+ reviews) is configured in <a href="/admin/settings">Settings</a>.</p>
        <SaveBar />
      </div>
    </>
  );
}
