const LOGOS = ['Deloitte', 'EY', 'KPMG', 'ICAI', 'Grant Thornton', 'BDO'];

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Trusted by">
      <div className="trust__inner">
        <p className="trust__label">Trusted by professionals at</p>
        <div className="trust__logos">
          {LOGOS.map((l) => (
            <span key={l} className="trust__logo">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
