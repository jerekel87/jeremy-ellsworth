export const metadata = {
  title: "Studio CMS — je.design",
  robots: { index: false, follow: false },
};

const NAV = [
  { group: "Overview", items: [
    { href: "/admin", label: "Dashboard", icon: "M4 13h6V4H4v9Zm0 7h6v-5H4v5Zm10 0h6v-9h-6v9Zm0-16v5h6V4h-6Z" },
    { href: "/admin/inquiries", label: "Inquiries", icon: "M4 5h16v11H8l-4 4V5Z", badge: "14" },
  ]},
  { group: "Content", items: [
    { href: "/admin/pages", label: "Pages", icon: "M7 3h7l5 5v13H7V3Zm7 0v5h5" },
    { href: "/admin/projects", label: "Projects", icon: "M3 7l9-4 9 4-9 4-9-4Zm0 5l9 4 9-4M3 17l9 4 9-4" },
    { href: "/admin/services", label: "Services", icon: "M12 3l2.4 4.8 5.6.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.6-.8L12 3Z" },
    { href: "/admin/reviews", label: "Reviews", icon: "M8 10h8M8 14h5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
    { href: "/admin/faqs", label: "FAQs", icon: "M9 9a3 3 0 1 1 4.6 2.5c-1 .7-1.6 1.2-1.6 2.5M12 17.5v.01" },
    { href: "/admin/brand-access", label: "Brand Access", icon: "M4 7h16v10H4V7Zm0 5h16M9 7v10" },
  ]},
  { group: "System", items: [
    { href: "/admin/media", label: "Media", icon: "M4 5h16v14H4V5Zm4 8 3-3 5 5M15 9h.01" },
    { href: "/admin/settings", label: "Settings", icon: "M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm8 3a8 8 0 0 1-.1 1.2l2 1.5-2 3.4-2.3-.9a8 8 0 0 1-2.1 1.2l-.4 2.6H10l-.4-2.6a8 8 0 0 1-2.1-1.2l-2.3.9-2-3.4 2-1.5A8 8 0 0 1 5 12c0-.4 0-.8.1-1.2l-2-1.5 2-3.4 2.3.9a8 8 0 0 1 2.1-1.2L10 3h4l.4 2.6a8 8 0 0 1 2.1 1.2l2.3-.9 2 3.4-2 1.5c.1.4.2.8.2 1.2Z" },
  ]},
];

const ALL_ITEMS = NAV.flatMap((g) => g.items);
const MOBILE_MAIN = ["/admin", "/admin/inquiries", "/admin/projects", "/admin/pages"].map(
  (href) => ALL_ITEMS.find((it) => it.href === href)
);
const MOBILE_MORE = ALL_ITEMS.filter((it) => !MOBILE_MAIN.includes(it));

export default function AdminLayout({ children }) {
  return (
    <div className="cms">
      <aside className="cms__side">
        <a className="cms__brand" href="/admin">
          <img src="/assets/img/logo-white.webp" alt="je.design" width="34" height="33" />
          <span>Studio <em>CMS</em></span>
        </a>
        <nav className="cms__nav">
          {NAV.map((g) => (
            <div className="cms__group" key={g.group}>
              <span className="cms__group-label">{g.group}</span>
              {g.items.map((it) => (
                <a key={it.href} href={it.href} className="cms__link">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg>
                  <span>{it.label}</span>
                  {it.badge ? <em className="cms__badge">{it.badge}</em> : null}
                </a>
              ))}
            </div>
          ))}
        </nav>
        <a className="cms__viewsite" href="/" target="_blank" rel="noopener">
          View live site
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
        </a>
      </aside>
      <div className="cms__main">{children}</div>

      {/* mobile bottom navigation */}
      <nav className="cms__bottomnav" aria-label="CMS navigation">
        {MOBILE_MAIN.map((it) => (
          <a key={it.href} href={it.href} className="cms__tab">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg>
            <span>{it.label}</span>
            {it.badge ? <em className="cms__badge cms__tab-badge">{it.badge}</em> : null}
          </a>
        ))}
        <details className="cms__morenav">
          <summary className="cms__tab">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"><circle cx="5" cy="12" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="19" cy="12" r="1.6" /></svg>
            <span>More</span>
          </summary>
          <div className="cms__moresheet">
            {MOBILE_MORE.map((it) => (
              <a key={it.href} href={it.href}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={it.icon} /></svg>
                {it.label}
              </a>
            ))}
            <a href="/" target="_blank" rel="noopener">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M9 7h8v8" /></svg>
              View live site
            </a>
          </div>
        </details>
      </nav>
    </div>
  );
}
