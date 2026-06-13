import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { CmsTopbar, Field, FieldGrid, EditSection, SaveBar } from "@/components/cms/Ui";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export function generateMetadata() {
  return { title: "Edit service — Studio CMS" };
}

export default async function ServiceEditor({ params }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = projects.filter((p) => p.services.includes(s.slug));

  return (
    <>
      <CmsTopbar
        title={s.title}
        subtitle={<a href="/admin/services" className="cmsc-back">← Back to services</a>}
        action={
          <>
            <a href={`/services/${s.slug}`} target="_blank" rel="noopener" className="cms__btn-ghost">View page ↗</a>
            <span className="cms-chip cms-chip--live">Published</span>
          </>
        }
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          <div className="cmsc-sections">
            <EditSection title="Listing card (services page)" count="6 fields" open>
              <FieldGrid>
                <Field label="Title" value={s.title} half />
                <Field label="Slug" value={s.slug} half hint={`Public URL: /services/${s.slug}`} />
                <Field label="Short label (sticky index)" value={s.short || s.title} half />
                <Field label="Number" value={s.num} half />
                <Field label="Description" value={s.desc} textarea rows={4} hint="Shown on the listing card and the service page hero" />
                <Field label="Cover image" value={s.img} hint="Pick from Media — also the listing card image" />
              </FieldGrid>
            </EditSection>

            <EditSection title="Service page — hero & intro" count="3 fields">
              <FieldGrid>
                <Field label="Eyebrow" value={`Service / ${s.num} · What we do`} />
                <Field label="Note (italic aside)" value={s.note} textarea rows={2} />
                <Field label="Industries line" value={s.industries} hint="Dot-separated, under the description" />
              </FieldGrid>
            </EditSection>

            <EditSection title="What's included panel" count={`${s.bullets.length} items`}>
              <FieldGrid>
                {s.bullets.map((b, i) => (
                  <Field key={i} label={`Item ${String(i + 1).padStart(2, "0")}`} value={b} half />
                ))}
              </FieldGrid>
              <p className="cmsc-note">The image beside this panel is the latest related project's lead image, linked to its case page — it updates automatically.</p>
            </EditSection>

            <EditSection title="Project gallery (full-bleed scroller)" count={`${related.length} related projects`}>
              {related.length ? (
                <div className="cmsc-gallery__grid">
                  {related.map((p) => (
                    <figure key={p.slug} className="cmsc-gallery__cell" title={p.title}>
                      <img src={p.img} alt={p.title} loading="lazy" />
                    </figure>
                  ))}
                </div>
              ) : (
                <p className="cmsc-note">No projects are tagged with this service yet.</p>
              )}
              <p className="cmsc-note" style={{ marginTop: "12px" }}>Pulled automatically from projects tagged “{s.title}” — manage tags in each project's <a href="/admin/projects">Solution panel</a>.</p>
            </EditSection>

            <EditSection title="Shared sections on this page" count="4 blocks">
              <p className="cmsc-note" style={{ padding: "4px 0 10px" }}>
                These render on every service page and are edited once, site-wide:
              </p>
              <ul className="cmsc-shared">
                <li><strong>From hello to handoff</strong> — the process strip · <a href="/admin/pages">Pages → Services</a></li>
                <li><strong>Owner's note</strong> — flashlight wall + signature · <a href="/admin/pages">Pages → Services</a></li>
                <li><strong>Five stars, every time</strong> — reviews strip · <a href="/admin/reviews">Reviews</a></li>
                <li><strong>FAQ + Let's talk</strong> — <a href="/admin/faqs">FAQs</a> · <a href="/admin/pages">Pages → Home → Contact</a></li>
              </ul>
            </EditSection>

            <EditSection title="SEO" count="2 fields">
              <FieldGrid>
                <Field label="Meta title" value={`${s.title} | je.design`} />
                <Field label="Meta description" value={s.desc} textarea rows={2} />
              </FieldGrid>
            </EditSection>
          </div>
        </section>
        <SaveBar />
      </div>
    </>
  );
}
