const UPCOMING = [
  { time: 'Tonight · 18:30 IST', title: 'GSTR-9 Annual Return Masterclass', expert: 'CA Priya Nair' },
  { time: 'Tomorrow · 11:00 IST', title: 'Section 17(5) — Blocked ITC Deep Dive', expert: 'CA Rohan Mehta' },
  { time: 'Fri 15 May · 20:00 IST', title: 'Notification 12/2026 — What Changed', expert: 'CA Anjali Bhat' },
];

export default function LivePreview() {
  return (
    <section className="preview" id="preview">
      <div className="section-head">
        <span className="section-head__num">02 / On Air</span>
        <h2 className="section-head__title">
          The next broadcast<br /><em>is already starting.</em>
        </h2>
      </div>

      <div className="player" role="img" aria-label="Live broadcast preview">
        <span className="player__onair"><span className="live-dot" />On Air</span>
        <span className="player__viewers">12,487 Watching</span>
        <div className="player__silhouette" />
        <div className="player__corners">
          <span className="hud__corner hud__corner--tl" />
          <span className="hud__corner hud__corner--tr" />
          <span className="hud__corner hud__corner--bl" />
          <span className="hud__corner hud__corner--br" />
        </div>
        <button className="player__playicon" aria-label="Play current broadcast">
          <span className="player__playicon-tri" />
        </button>
        <div className="player__bottom">
          <div className="player__meta">
            <h3 className="player__title">GST Amendment Review — RCM Expansion in Sector 9</h3>
            <div className="player__expert">
              CA Priya Nair · ICAI
              <span className="player__expert-time">00:42:11 / 01:48:00</span>
            </div>
          </div>
          <div className="player__progress">
            <div className="player__progress-bar" />
          </div>
        </div>
      </div>

      <div className="upcoming">
        <span className="upcoming__label">Up Next</span>
        <div className="upcoming__list">
          {UPCOMING.map((u) => (
            <div key={u.title} className="upcoming__item" tabIndex={0} role="button">
              <span className="upcoming__time">{u.time}</span>
              <span className="upcoming__title">{u.title}</span>
              <span className="upcoming__expert">{u.expert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
