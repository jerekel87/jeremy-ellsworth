"use client";
import { useState } from "react";

export default function LoginPage() {
  const [note, setNote] = useState("");
  return (
    <main className="login-bare">
      <div className="login-stack">
        <a className="login-back" href="/" aria-label="Back to je.design">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m6 6-6-6 6-6" /></svg>
        </a>
        <div className="login-card">
          <img src="/assets/img/logo-white.webp" alt="je.design" width="44" height="42" />
          <h1>Client <em>portal</em></h1>
          <p>Sign in to follow your project, files and approvals.</p>
          <form onSubmit={(e) => { e.preventDefault(); setNote("The portal is launching soon — your project manager will send your invite."); }}>
            <label><span>Email</span><input type="email" required placeholder="you@company.com" /></label>
            <label><span>Password</span><input type="password" required placeholder="••••••••" /></label>
            <button className="btn btn--solid" type="submit"><span>Sign in</span></button>
          </form>
          {note && <p className="login-note">{note}</p>}
          <p className="login-foot">Portal access is for active clients — no self-serve signups yet.</p>
        </div>
      </div>
    </main>
  );
}
