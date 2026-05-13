export default function Nav() {
  return (
    <header className="nav">
      <a href="#hero" className="nav__brand">
        GSTverse<span className="nav__brand-dot" />
        <span className="live-pill"><span className="live-dot" />Live</span>
      </a>
      <nav className="nav__links">
        <a href="#features">Platform</a>
        <a href="#preview">Experts</a>
        <a href="#waitlist">Pricing</a>
      </nav>
      <a href="#preview" className="nav__cta">
        Watch Live
        <span aria-hidden>→</span>
      </a>
    </header>
  );
}
