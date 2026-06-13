import { services } from "@/lib/services";
import { CmsTopbar } from "@/components/cms/Ui";

export const metadata = { title: "Services — Studio CMS" };

export default function ServicesAdmin() {
  return (
    <>
      <CmsTopbar
        title="Services"
        subtitle={`${services.length} services — each row opens the full service-page editor.`}
        action={<a href="/admin/services/new" className="btn btn--sm btn--solid"><span>+ New service</span></a>}
      />
      <div className="cms__content cmsc">
        <section className="cms-panel">
          {services.map((s) => (
            <a className="cmsc-item cmsc-item--link" key={s.slug} href={`/admin/services/${s.slug}`}>
              <img src={s.img} alt="" className="cmsc-item__thumb" loading="lazy" />
              <span className="cmsc-item__title">
                <strong>{s.num} — {s.title}</strong>
                <span>{s.industries} · /services/{s.slug}</span>
              </span>
              <span className="cms-chip cms-chip--live">Published</span>
              <span className="cmsc-item__go">Edit →</span>
            </a>
          ))}
        </section>
        <p className="cmsc-note">The services <em>listing page</em> (hero, differentiator strip, program finale) is edited in <a href="/admin/pages">Pages → Services</a>.</p>
      </div>
    </>
  );
}
