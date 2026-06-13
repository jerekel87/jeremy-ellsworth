"use client";
import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    window.Cal("init", "design-consultation-a", { origin: "https://app.cal.com" });
    window.Cal.config = window.Cal.config || {};
    window.Cal.config.forwardQueryParams = true;
    window.Cal.ns["design-consultation-a"]("inline", {
      elementOrSelector: "#my-cal-inline-design-consultation-a",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" },
      calLink: "jeremy-ellsworth-uwa6in/design-consultation-a",
    });
    window.Cal.ns["design-consultation-a"]("ui", { theme: "dark", cssVarsPerTheme: { light: { "cal-brand": "#000000" }, dark: { "cal-brand": "#ffed00" } }, hideEventTypeDetails: true, layout: "month_view" });
  }, []);
  return <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-design-consultation-a"></div>;
}
