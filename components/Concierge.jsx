"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const FALLBACKS = [
  "Here's the honest version: most businesses don't lose customers because their work is bad — they lose them because nobody remembers their name. That's fixable in 2–3 weeks. Click \"Get a Quote\" in the header and tell us about your business.",
  "Fair enough — but think about the last contractor truck you actually remembered. That's what a real brand buys you, and it's exactly what we've done for 8,000+ businesses over 20 years. The quote form takes two minutes.",
  "I'll leave you with this: your competitors are getting calls today because they look established — not because they're better. When you're ready, the free consultation calendar on the homepage has open slots this week.",
];

export default function Concierge() {
  const [mounted, setMounted] = useState(false);
  const [hasNotif, setHasNotif] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [thread, setThread] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const fallbackIdx = useRef(0);
  const wrapRef = useRef(null);
  const threadRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    try {
      if (!sessionStorage.getItem("je-letter-seen")) setHasNotif(true);
    } catch (e) { setHasNotif(true); }
  }, []);

  useEffect(() => {
    if (!dropOpen) return;
    const onDoc = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setDropOpen(false); };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [dropOpen]);

  useEffect(() => {
    if (threadRef.current) threadRef.current.scrollTop = threadRef.current.scrollHeight;
  }, [thread, busy]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLetterOpen(false); };
    if (letterOpen) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [letterOpen]);

  function openLetter() {
    setDropOpen(false);
    setLetterOpen(true);
    setHasNotif(false);
    try { sessionStorage.setItem("je-letter-seen", "1"); } catch (e) {}
  }

  async function send(e, preset) {
    if (e) e.preventDefault();
    const text = (preset || input).trim();
    if (!text || busy) return;
    const next = [...thread, { role: "user", text }];
    setThread(next);
    setInput("");
    setBusy(true);
    let reply = null;
    try {
      const res = await fetch("/api/concierge", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      reply = data.reply;
    } catch (err) {}
    if (!reply) {
      reply = FALLBACKS[Math.min(fallbackIdx.current, FALLBACKS.length - 1)];
      fallbackIdx.current += 1;
    }
    setThread((t) => [...t, { role: "assistant", text: reply }]);
    setBusy(false);
  }

  return (
    <>
      {/* profile icon -> future customer portal */}
      <a className="hicon" href="/login" aria-label="Client portal sign in" data-cursor="hover">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-3.6 4.5-5.5 8-5.5s6.5 1.9 8 5.5" /></svg>
      </a>

      {/* notification bell */}
      <div className="notif" ref={wrapRef}>
        <button
          className={"hicon" + (dropOpen ? " is-open" : "")}
          aria-label={hasNotif ? "Notifications (1 unread)" : "Notifications"}
          aria-expanded={dropOpen}
          onClick={(e) => { e.stopPropagation(); setDropOpen(!dropOpen); }}
          data-cursor="hover"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 9a6 6 0 1 0-12 0c0 6-2.5 7-2.5 7h17S18 15 18 9" /><path d="M10.3 20a2 2 0 0 0 3.4 0" /></svg>
          {hasNotif && <span className="hicon__badge">1</span>}
        </button>
        <div className={"notif__menu" + (dropOpen ? " is-open" : "")} aria-hidden={!dropOpen}>
          <span className="notif__label">Notifications</span>
          <button className="notif__item" onClick={openLetter}>
            <span className="notif__dot" aria-hidden="true"></span>
            <span className="notif__body">
              <strong>Are you ready?</strong>
              <em>A letter from je.design · just now</em>
            </span>
          </button>
        </div>
      </div>

      {/* the letter — portaled to body so the fixed header's backdrop-filter can't trap it */}
      {mounted && letterOpen && createPortal(
        <div className="letter" role="dialog" aria-modal="true" aria-label="A letter from je.design">
          <div className="letter__backdrop" onClick={() => setLetterOpen(false)} />
          <div className="letter__card">
            <div className="letter__bar">
              <span className="letter__avatar"><img src="/assets/img/logo-white.webp" alt="" width="20" height="19" /></span>
              <strong className="letter__title">Inbox</strong>
              <button className="letter__close" onClick={() => setLetterOpen(false)} aria-label="Close letter">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>
            <div className="letter__status"><i></i>Online — usually replies in seconds</div>
            <div className="letter__scroll" ref={threadRef} data-lenis-prevent="true">
              <div className="letter__letterbody">
                <p className="letter__greeting">Are you ready?</p>
                <p>You found your way here, which tells me something: you already suspect your business deserves to look better than it does.</p>
                <p>Twenty years has taught us this — businesses rarely fail because the work is bad. They fail because nobody <i>remembers</i> them. The competitor with the sharper truck and the cleaner logo gets the call first, every time.</p>
                <p>So this is the fork in the road. Close this letter and nothing changes — or write back, tell us what you're building, and find out what happens when your brand works as hard as you do.</p>
                <p className="letter__sign">— je.design</p>
              </div>
              {thread.map((m, i) => (
                <div key={i} className={"letter__msg" + (m.role === "user" ? " letter__msg--user" : "")}>{m.text}</div>
              ))}
              {busy && <div className="letter__msg letter__typing"><span></span><span></span><span></span></div>}
            </div>
            {thread.length === 0 && !busy && (
              <div className="letter__chips">
                <button onClick={(e) => send(null, "I need a logo for my business.")}>I need a logo</button>
                <button onClick={(e) => send(null, "I want my truck wrapped.")}>Wrap my truck</button>
                <button onClick={(e) => send(null, "I need the whole brand — logo, wrap, website.")}>The whole brand</button>
                <button onClick={(e) => send(null, "Honestly, I'm just browsing.")}>Just browsing 👀</button>
              </div>
            )}
            <form className="letter__form" onSubmit={send}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write back…"
                aria-label="Your reply"
              />
              <button type="submit" className="letter__send" aria-label="Send reply" disabled={busy}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
              </button>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
