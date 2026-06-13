import { geoAlbersUsa } from "d3-geo";
import UsLiveMap from "@/components/cms/UsLiveMap";
import { TrafficChart, LiveSpark } from "@/components/cms/Charts";
import SearchExpand from "@/components/cms/SearchExpand";

/* ---- mock data (swap for live sources when wiring up) ---- */

const STATS = [
  { label: "New inquiries", value: "14", delta: "+5 this week", up: true, href: "/admin/inquiries" },
  { label: "Published projects", value: "12", delta: "2 drafts", up: null, href: "/admin/projects" },
  { label: "Active services", value: "6", delta: "All published", up: null, href: "/admin/services" },
  { label: "Five-star reviews", value: "1,847", delta: "+23 this month", up: true, href: "/admin/reviews" },
];

const TRAFFIC_VALUES = [820, 940, 1110, 980, 1240, 1490, 1320, 1180, 1420, 1610, 1530, 1380, 1700, 1920, 1780, 1640, 1860, 2050, 1940, 2180, 1990, 2240, 2120, 2370, 2280, 2150, 2410, 2520, 2390, 2640];
const TRAFFIC_30D = TRAFFIC_VALUES.map((visitors, i) => {
  const day = 14 + i;
  return { date: day <= 31 ? `May ${day}` : `Jun ${day - 31}`, visitors };
});

const LIVE_NOW = 23;
const LIVE_PAGES = [
  { path: "/", count: 9 },
  { path: "/brand-access-program", count: 6 },
  { path: "/work", count: 4 },
  { path: "/services", count: 3 },
  { path: "/about", count: 1 },
];
const LIVE_HOUR = [4, 6, 5, 9, 7, 11, 8, 12, 10, 14, 11, 16, 13, 12, 17, 15, 19, 16, 21, 18, 23, 20, 24, 23]
  .map((active, i) => ({ time: `${60 - (24 - 1 - i) * 2.5}m`, active }));
const LIVE_DEVICES = [["Mobile", 61], ["Desktop", 36], ["Tablet", 3]];
const LIVE_SOURCES = [["Google", 9], ["Direct", 6], ["Instagram", 4], ["Facebook", 3], ["Other", 1]];

/* live visitors grouped by state; `at` anchors the state dot, cities are [name, lon, lat, n] */
const LIVE_GEO_PINS = [
  { state: "Texas", at: [-99.3, 31.4], cities: [["Dallas, TX", -96.8, 32.8, 4], ["Houston, TX", -95.4, 29.8, 3], ["Austin, TX", -97.7, 30.3, 1]] },
  { state: "Florida", at: [-81.7, 27.9], cities: [["Miami, FL", -80.2, 25.8, 3], ["Tampa, FL", -82.5, 28.0, 1]] },
  { state: "California", at: [-119.6, 37.0], cities: [["Los Angeles, CA", -118.2, 34.1, 2], ["San Francisco, CA", -122.4, 37.8, 1]] },
  { state: "New York", at: [-75.5, 42.9], cities: [["New York, NY", -74.0, 40.7, 2]] },
  { state: "Illinois", at: [-89.2, 40.0], cities: [["Chicago, IL", -87.6, 41.9, 2]] },
  { state: "Georgia", at: [-83.4, 32.6], cities: [["Atlanta, GA", -84.4, 33.7, 2]] },
  { state: "Washington", at: [-120.4, 47.4], cities: [["Seattle, WA", -122.3, 47.6, 1]] },
  { state: "Colorado", at: [-105.5, 39.0], cities: [["Denver, CO", -104.9, 39.7, 1]] },
];

const GEO = {
  Countries: [["United States", 78], ["Canada", 8], ["United Kingdom", 4], ["Australia", 3], ["Germany", 2], ["Other", 5]],
  States: [["Texas", 22], ["Florida", 14], ["California", 11], ["New York", 8], ["Ohio", 6], ["Georgia", 5]],
  Cities: [["Dallas, TX", 9], ["Miami, FL", 7], ["Houston, TX", 6], ["New York, NY", 5], ["Chicago, IL", 4], ["Atlanta, GA", 4]],
};

const INQUIRIES = [
  { name: "Dale Hutchins", business: "Hutchins Roofing", service: "Brand Access Program", budget: "$150/mo plan", date: "Jun 12", status: "new" },
  { name: "Maria Cortez", business: "Cortez Cleaning Co.", service: "Logo & Branding", budget: "$2,500 – $5,000", date: "Jun 12", status: "new" },
  { name: "Tommy Nguyen", business: "TN Electric", service: "Vehicle Wrap", budget: "$1,000 – $2,500", date: "Jun 11", status: "replied" },
  { name: "Curt Bradley", business: "Bradley & Sons HVAC", service: "Brand Access Program", budget: "$150/mo plan", date: "Jun 11", status: "booked" },
  { name: "Jess Whitfield", business: "Whitfield Lawn Care", service: "Mascot Design", budget: "$2,500 – $5,000", date: "Jun 10", status: "replied" },
  { name: "Andre Marsh", business: "Marsh Concrete", service: "Website", budget: "$5,000+", date: "Jun 9", status: "booked" },
];

const STATUS_LABEL = { new: "New", replied: "Replied", booked: "Booked" };

/* official AlbersUSA projection matching the us-atlas 975x610 viewport */
const projection = geoAlbersUsa().scale(1300).translate([487.5, 305]);

export default function AdminDashboard() {
  const states = LIVE_GEO_PINS.map((s) => {
    const [sx, sy] = projection(s.at);
    return {
      state: s.state,
      x: +sx.toFixed(1), y: +sy.toFixed(1),
      total: s.cities.reduce((sum, c) => sum + c[3], 0),
      cities: s.cities.map(([city, lon, lat, n]) => {
        const [cx, cy] = projection([lon, lat]);
        return { city, x: +cx.toFixed(1), y: +cy.toFixed(1), n };
      }),
    };
  });

  return (
    <>
      <header className="cms__topbar">
        <div>
          <h1 className="cms__title">Dashboard</h1>
          <p className="cms__subtitle">Welcome back, Jeremy. Here&rsquo;s what&rsquo;s happening at je.design.</p>
        </div>
        <div className="cms__topbar-actions">
          <SearchExpand />
          <a href="/admin/projects/new" className="btn btn--sm btn--solid"><span>+ New project</span></a>
          <span className="cms__avatar" title="Jeremy Ellsworth"><img src="/assets/img/logo-white.webp" alt="JE" width="22" height="21" /></span>
        </div>
      </header>

      <div className="cms__content">
        <section className="cms__stats">
          {STATS.map((s) => (
            <a className="cms-stat" href={s.href} key={s.label}>
              <span className="cms-stat__label">{s.label}</span>
              <strong className="cms-stat__value">{s.value}</strong>
              <span className={"cms-stat__delta" + (s.up ? " is-up" : "")}>{s.up ? "↑ " : ""}{s.delta}</span>
            </a>
          ))}
        </section>

        {/* ---- recent inquiries ---- */}
        <section className="cms-panel cms-panel--table">
          <header className="cms-panel__head">
            <h2>Recent inquiries</h2>
            <a href="/admin/inquiries" className="cms__more">View all →</a>
          </header>
          <table className="cms-table">
            <thead>
              <tr><th>Name</th><th>Business</th><th>Interested in</th><th>Budget</th><th>Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              {INQUIRIES.map((q) => (
                <tr key={q.name}>
                  <td><strong>{q.name}</strong></td>
                  <td>{q.business}</td>
                  <td>{q.service}</td>
                  <td>{q.budget}</td>
                  <td className="cms-table__dim">{q.date}</td>
                  <td><span className={"cms-chip cms-chip--" + q.status}>{STATUS_LABEL[q.status]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* ---- traffic + quick actions ---- */}
        <div className="cms__grid-a">
          <section className="cms-panel">
            <header className="cms-panel__head">
              <h2>Traffic — last 30 days</h2>
              <span className="cms-panel__meta"><i className="cms-dot cms-dot--yellow"></i>Visitors · <strong>48,212</strong> total</span>
            </header>
            <TrafficChart data={TRAFFIC_30D} />
          </section>

          <section className="cms-panel">
            <header className="cms-panel__head"><h2>Quick actions</h2></header>
            <div className="cms-actions">
              <a href="/admin/projects" className="cms-action"><i>＋</i>Add a project</a>
              <a href="/admin/reviews" className="cms-action"><i>★</i>Import reviews</a>
              <a href="/admin/brand-access" className="cms-action"><i>✂</i>Edit Brand Access page</a>
              <a href="/admin/media" className="cms-action"><i>▦</i>Upload media</a>
              <a href="/admin/pages" className="cms-action"><i>✎</i>Edit page copy</a>
            </div>
          </section>
        </div>

        {/* ---- right now | where visitors are | live map ---- */}
        <div className="cms__grid-b">
          <section className="cms-panel cms-live">
            <header className="cms-panel__head">
              <h2>Right now</h2>
              <span className="cms-live__badge"><i></i>Live</span>
            </header>
            <div className="cms-live__count">
              <strong>{LIVE_NOW}</strong>
              <span>visitors on the site</span>
            </div>
            <LiveSpark data={LIVE_HOUR} />
            <span className="cms-live__spark-label">Active visitors · past hour</span>
            <div className="cms-live__group">
              <span className="cms-geo__label">Active pages</span>
              <ul className="cms-live__pages">
                {LIVE_PAGES.map((p) => (
                  <li key={p.path}>
                    <span>{p.path}</span>
                    <i style={{ width: `${(p.count / LIVE_PAGES[0].count) * 100}%` }}></i>
                    <strong>{p.count}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cms-live__group">
              <span className="cms-geo__label">Sources</span>
              <ul className="cms-live__pages">
                {LIVE_SOURCES.map(([name, count]) => (
                  <li key={name}>
                    <span>{name}</span>
                    <i style={{ width: `${(count / LIVE_SOURCES[0][1]) * 100}%` }}></i>
                    <strong>{count}</strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="cms-live__group">
              <span className="cms-geo__label">Devices</span>
              <div className="cms-live__devbar" aria-hidden="true">
                {LIVE_DEVICES.map(([name, pct], i) => (
                  <i key={name} className={`cms-live__dev--${i + 1}`} style={{ width: `${pct}%` }}></i>
                ))}
              </div>
              <div className="cms-live__devlegend">
                {LIVE_DEVICES.map(([name, pct], i) => (
                  <span key={name}><i className={`cms-live__dev--${i + 1}`}></i>{name} {pct}%</span>
                ))}
              </div>
            </div>
          </section>

          <section className="cms-panel cms-geo">
            <header className="cms-panel__head"><h2>Where visitors are</h2></header>
            {Object.entries(GEO).map(([group, rows]) => (
              <div className="cms-geo__group" key={group}>
                <span className="cms-geo__label">{group}</span>
                <ul>
                  {rows.map(([name, pct]) => (
                    <li key={name}>
                      <span>{name}</span>
                      <i><b style={{ width: `${(pct / rows[0][1]) * 100}%` }}></b></i>
                      <strong>{pct}%</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="cms-panel">
            <header className="cms-panel__head">
              <h2>Live visitors — USA</h2>
              <span className="cms-panel__meta"><i className="cms-dot cms-dot--green"></i>{LIVE_NOW} active</span>
            </header>
            <UsLiveMap states={states} />
          </section>
        </div>

      </div>
    </>
  );
}
