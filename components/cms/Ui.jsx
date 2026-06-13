/* Shared CMS building blocks — server-renderable, no client JS.
   Inputs are uncontrolled (defaultValue) so they're typeable in the design
   preview; wire onChange/persistence when hooking up a backend. */

export function CmsTopbar({ title, subtitle, action }) {
  return (
    <header className="cms__topbar">
      <div>
        <h1 className="cms__title">{title}</h1>
        {subtitle ? <p className="cms__subtitle">{subtitle}</p> : null}
      </div>
      <div className="cms__topbar-actions">
        {action}
        <span className="cms__avatar" title="Jeremy Ellsworth"><img src="/assets/img/logo-white.webp" alt="JE" width="22" height="21" /></span>
      </div>
    </header>
  );
}

export function Field({ label, value, placeholder, textarea, rows = 3, hint, half }) {
  return (
    <label className={"cmsc-field" + (half ? " cmsc-field--half" : "")}>
      <span className="cmsc-field__label">{label}</span>
      {textarea
        ? <textarea rows={rows} defaultValue={value} placeholder={placeholder} />
        : <input type="text" defaultValue={value} placeholder={placeholder} />}
      {hint ? <span className="cmsc-field__hint">{hint}</span> : null}
    </label>
  );
}

export function Select({ label, value, options, hint, half }) {
  return (
    <label className={"cmsc-field" + (half ? " cmsc-field--half" : "")}>
      <span className="cmsc-field__label">{label}</span>
      <select defaultValue={value}>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {hint ? <span className="cmsc-field__hint">{hint}</span> : null}
    </label>
  );
}

export function ChipPicker({ label, options, picked = [], hint }) {
  return (
    <div className="cmsc-field">
      <span className="cmsc-field__label">{label}</span>
      <div className="cmsc-chips">
        {options.map((o) => (
          <label key={o} className="cmsc-chips__chip">
            <input type="checkbox" defaultChecked={picked.includes(o)} />
            <span>{o}</span>
          </label>
        ))}
      </div>
      {hint ? <span className="cmsc-field__hint">{hint}</span> : null}
    </div>
  );
}

export function CreateBar({ publishLabel = "Publish" }) {
  return (
    <div className="cmsc-savebar">
      <span>New entries are local until this form is wired to a backend.</span>
      <div>
        <button type="button" className="cms__btn-ghost">Save draft</button>
        <button type="button" className="btn btn--sm btn--solid"><span>{publishLabel}</span></button>
      </div>
    </div>
  );
}

export function FieldGrid({ children }) {
  return <div className="cmsc-grid">{children}</div>;
}

export function EditSection({ title, count, children, open }) {
  return (
    <details className="cmsc-section" open={open}>
      <summary>
        <strong>{title}</strong>
        {count ? <em>{count}</em> : null}
        <span className="faq__icon"></span>
      </summary>
      <div className="cmsc-section__body">{children}</div>
    </details>
  );
}

export function SaveBar({ label = "Save changes" }) {
  return (
    <div className="cmsc-savebar">
      <span>Changes are local until this page is wired to a backend.</span>
      <div>
        <button type="button" className="cms__btn-ghost">Discard</button>
        <button type="button" className="btn btn--sm btn--solid"><span>{label}</span></button>
      </div>
    </div>
  );
}
