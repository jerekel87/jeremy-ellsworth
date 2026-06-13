import ContactSection from "@/components/ContactSection";
import SpinBadge from "@/components/SpinBadge";
import { projects } from "@/lib/projects";

const mascotNames = { 7: "Panther Painting", 8: "Poller\u00eda Cinco Estrella's", 9: "Pronto Air Duct Cleaning", 10: "Ranger Garage Door Repair", 11: "Texguard Pest Solutions", 12: "TrueBite Teeth Supply", 14: "Rock Solid Concrete AZ", 16: "Giant Roofing & Exteriors", 19: "Galaxy Electric & Solar", 21: "MAV Designs" };
const mascotTiles = Array.from({ length: 15 }, (_, k) => {
  const n = k + 7;
  return { img: `/assets/img/mascots/layer-${n}.jpg`, title: mascotNames[n] || "Mascot Logo" };
});

export const metadata = {
  title: "Work — Jeremy Ellsworth Designs LLC | je.design",
  description: "Brand identities, mascot logos, vehicle wraps and websites by je.design — 20 years of original, hand-drawn work for home service businesses and startups.",
};

export default function WorkPage() {
  return (
    <>
  <main id="top">

    {/* ===== Page hero ===== */}
    <section className="pagehero">
      <div className="container">
        
        <span className="eyebrow reveal">Selected work</span>
        <h1 className="pagehero__title split-lines"><span>Brands built to</span> <span className="hero__accent">win their market</span></h1>
        <p className="pagehero__sub reveal">Strategic brand transformations that tell powerful stories and create lasting connections with your audience — every one drawn by hand, in-house.</p>
      </div>
      <SpinBadge />
    </section>

    {/* ===== Listing ===== */}
    <section className="worklist section section--padless" id="worklist">
      <div className="container">
        <div className="filters reveal" id="workFilter" role="tablist" aria-label="Filter projects">
          <button className="filter is-active" data-filter="all">All</button>
          <button className="filter" data-filter="home">Home Service</button>
          <button className="filter" data-filter="construction">Construction</button>
          <button className="filter" data-filter="food">Food &amp; Beverage</button>
          <button className="filter" data-filter="entertainment">Entertainment</button>
          <button className="filter" data-filter="mascots">Mascot Logos</button>
          <button className="filter" data-filter="web">Web Design</button>
        </div>

        <div className="worklist__grid" id="workGrid">
          {projects.map((p) => (
            <a key={p.slug} href={`/work/${p.slug}`} className="work-card wcard" data-cat={p.cat} data-cursor="view">
              <div className="work-card__media"><img src={p.img} alt={`${p.title} — ${p.category}`} loading="lazy" /></div>
              <div className="work-card__meta"><h3>{p.title}</h3><span>{p.category} · {p.industry}</span></div>
            </a>
          ))}
          {mascotTiles.map((m, idx) => (
            <div key={idx} className="work-card wcard" data-cat="mascots" data-cursor="view">
              <div className="work-card__media"><img src={m.img} alt={`${m.title} — Mascot Logo`} loading="lazy" /></div>
              <div className="work-card__meta"><h3>{m.title}</h3><span>Mascot Logo</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <ContactSection />
  </main>
    </>
  );
}
