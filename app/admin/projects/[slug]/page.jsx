import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { CmsTopbar, Field, FieldGrid, EditSection, ChipPicker, SaveBar } from "@/components/cms/Ui";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }) {
  return { title: `Edit project — Studio CMS` };
}

export default async function ProjectEditor({ params }) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <>
      <CmsTopbar
        title={p.title}
        subtitle={<a href="/admin/projects" className="cmsc-back">← Back to projects</a>}
        action={
          <>
            <a href={`/work/${p.slug}`} target="_blank" rel="noopener" className="cms__btn-ghost">View page ↗</a>
            <span className="cms-chip cms-chip--live">Published</span>
          </>
        }
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          <div className="cmsc-sections">
            <EditSection title="Details" count="5 fields" open>
              <FieldGrid>
                <Field label="Title" value={p.title} half />
                <Field label="Slug" value={p.slug} half hint={`Public URL: /work/${p.slug}`} />
                <Field label="Category" value={p.category} half />
                <Field label="Industry" value={p.industry} half />
                <Field label="Blurb (case hero)" value={p.blurb} textarea rows={3} hint="Shown under the title on the case page hero" />
              </FieldGrid>
            </EditSection>

            <EditSection title="The Solution panel" count={`${p.deliverables.length + p.services.length} items`}>
              <FieldGrid>
                <Field label="Deliverables" value={p.deliverables.join(", ")} hint="Comma-separated — the numbered spec list" />
                <ChipPicker
                  label="Services (numbered links to service pages)"
                  options={services.map((s) => s.title)}
                  picked={p.services.map((sl) => services.find((x) => x.slug === sl)?.title).filter(Boolean)}
                />
              </FieldGrid>
              <p className="cmsc-note">The “Project Approved · Delivered” stamp and JE mark render automatically next to this panel.</p>
            </EditSection>

            <EditSection title="Gallery" count={`${p.gallery.length} images`}>
              <div className="cmsc-gallery">
                <span className="cmsc-field__label">First image is the lead — rows flow 3 / 1 / 2 after it; the first single row becomes the testimonial billboard</span>
                <div className="cmsc-gallery__grid">
                  {p.gallery.map((g, i) => (
                    <figure key={i} className="cmsc-gallery__cell">
                      <img src={g} alt="" loading="lazy" />
                      <button type="button" title="Remove">✕</button>
                    </figure>
                  ))}
                  <button type="button" className="cmsc-gallery__add" title="Add image">＋</button>
                </div>
              </div>
            </EditSection>

            <EditSection title="Testimonial billboard" count="3 fields">
              <FieldGrid>
                <Field label="Quote" value={p.testimonial.quote} textarea rows={2} />
                <Field label="Name" value={p.testimonial.name} half />
                <Field label="Company" value={p.testimonial.company} half />
              </FieldGrid>
            </EditSection>

            <EditSection title="Links & related" count="2 fields">
              <FieldGrid>
                <Field label="Original case study" value={p.external} />
              </FieldGrid>
              <p className="cmsc-note">The case pager (next/previous projects with hover thumbnails) is built automatically from the project order in <a href="/admin/projects">Projects</a>.</p>
            </EditSection>

            <EditSection title="SEO" count="2 fields">
              <FieldGrid>
                <Field label="Meta title" value={`${p.title} — ${p.category} | je.design`} />
                <Field label="Meta description" value={p.blurb} textarea rows={2} />
              </FieldGrid>
            </EditSection>
          </div>
        </section>
        <SaveBar />
      </div>
    </>
  );
}
