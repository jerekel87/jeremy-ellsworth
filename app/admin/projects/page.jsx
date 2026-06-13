import { projects } from "@/lib/projects";
import { CmsTopbar } from "@/components/cms/Ui";

export const metadata = { title: "Projects — Studio CMS" };

export default function ProjectsAdmin() {
  return (
    <>
      <CmsTopbar
        title="Projects"
        subtitle={`${projects.length} published — each row opens the full case-page editor.`}
        action={<a href="/admin/projects/new" className="btn btn--sm btn--solid"><span>+ New project</span></a>}
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          {projects.map((p) => (
            <a className="cmsc-item cmsc-item--link" key={p.slug} href={`/admin/projects/${p.slug}`}>
              <img src={p.img} alt="" className="cmsc-item__thumb" loading="lazy" />
              <span className="cmsc-item__title">
                <strong>{p.title}</strong>
                <span>{p.category} · {p.industry} · /work/{p.slug}</span>
              </span>
              <span className="cms-chip cms-chip--live">Published</span>
              <span className="cmsc-item__go">Edit →</span>
            </a>
          ))}
        </section>
      </div>
    </>
  );
}
