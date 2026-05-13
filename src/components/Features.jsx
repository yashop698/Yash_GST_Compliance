const FEATURES = [
  {
    code: 'F.01',
    title: 'Live Expert Broadcasts',
    body: 'Top chartered accountants going live on amendments, GSTR cycles, and high-stakes audits as they happen.',
    icon: 'broadcast',
  },
  {
    code: 'F.02',
    title: 'Cinematic Replay Library',
    body: 'Every session archived in HD, searchable by topic, jumpable by timestamp. Watch where you left off.',
    icon: 'archive',
  },
  {
    code: 'F.03',
    title: 'Interactive Q&A',
    body: 'Ask the expert live or anonymously. Answers tied to the moment, cited to the section under review.',
    icon: 'chat',
  },
  {
    code: 'F.04',
    title: 'Real-time Compliance Alerts',
    body: 'Push notifications the instant a circular, notification, or amendment drops. Never miss what just changed.',
    icon: 'alert',
  },
];

const ICONS = {
  broadcast: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M6.34 17.66a8 8 0 0 1 0-11.32M17.66 6.34a8 8 0 0 1 0 11.32" />
      <path d="M3 21a12 12 0 0 1 0-18M21 3a12 12 0 0 1 0 18" />
    </svg>
  ),
  archive: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="4" rx="0.5" />
      <path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8" />
      <path d="M10 13h4" />
    </svg>
  ),
  chat: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  ),
  alert: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </svg>
  ),
};

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-head">
        <span className="section-head__num">01 / Platform</span>
        <h2 className="section-head__title">
          A studio for tax —<br />built for the way <em>experts actually work.</em>
        </h2>
      </div>

      <div className="features__grid">
        {FEATURES.map((f) => (
          <article key={f.code} className="feature">
            <div className="feature__meta">
              <span>{f.code}</span>
              <span className="feature__meta-live">In production</span>
            </div>
            <div className="feature__icon">{ICONS[f.icon]}</div>
            <div>
              <h3 className="feature__title">{f.title}</h3>
              <p className="feature__body">{f.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
