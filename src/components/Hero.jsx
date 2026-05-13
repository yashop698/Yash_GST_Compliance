import { useEffect, useState } from 'react';

const VIDEO_URL = 'https://assets.mixkit.co/videos/preview/mixkit-curls-of-dark-smoke-1180-large.mp4';
const POSTER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='50%25' r='70%25'%3E%3Cstop offset='0%25' stop-color='%23111118'/%3E%3Cstop offset='100%25' stop-color='%23000000'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23g)'/%3E%3C/svg%3E";

const TICKER = [
  'GST Amendment Review — RCM expansion sector 9 — CA Priya Nair',
  'Notification 12/2026 dropped 04:14 IST — discussion at 18:30',
  'Live Q&A on Section 17(5) — CA Rohan Mehta — 4,823 in queue',
  'GSTR-9 Annual Return masterclass starts in 02:14:37',
];

export default function Hero() {
  const [tc, setTc] = useState(() => fmt(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTc(fmt(new Date())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="hero">
      <video
        className="hero__video"
        src={VIDEO_URL}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className="hero__overlay" />

      <div className="hero__hud">
        <span className="hud__corner hud__corner--tl" />
        <span className="hud__corner hud__corner--tr" />
        <span className="hud__corner hud__corner--bl" />
        <span className="hud__corner hud__corner--br" />
      </div>

      <div className="hero__inner">
        <div className="hero__slate">
          <div className="hero__slate-l">
            <span>26.85°N · 80.95°E / IST</span>
            <strong>Broadcast №001 · 2026 — Q2</strong>
          </div>
          <div className="hero__slate-mid">
            <span>Signal Stable</span>
          </div>
          <div className="hero__slate-r">
            <span>Frame · {tc}</span>
            <strong>47 Active Streams</strong>
          </div>
        </div>

        <div className="hero__center">
          <span className="hero__kicker">Live Tax Intelligence Platform</span>
          <h1 className="hero__headline">
            Where compliance<br />goes <em>live.</em>
          </h1>
          <p className="hero__sub">
            Stream expert-led GST sessions, replay critical broadcasts, and never miss the moment tax law shifts. Built for the chartered, the curious, and the careful.
          </p>
          <div className="hero__ctas">
            <a href="#preview" className="btn btn--primary">
              Watch Live
              <span className="btn__arrow" aria-hidden>→</span>
            </a>
            <a href="#waitlist" className="btn btn--ghost">Join the Waitlist</a>
          </div>
        </div>

        <div className="hero__bottom">
          <div />
          <div className="hero__scroll">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
          <div />
        </div>
      </div>

      <div className="hero__ticker">
        <span className="ticker__badge">On Air</span>
        <div className="ticker__track">
          <div className="ticker__rail">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className="ticker__item">{t}</span>
            ))}
          </div>
        </div>
        <span className="ticker__viewers"><strong>12,487</strong> watching</span>
      </div>
    </section>
  );
}

function fmt(d) {
  const h = String(d.getHours()).padStart(2, '0');
  const m = String(d.getMinutes()).padStart(2, '0');
  const s = String(d.getSeconds()).padStart(2, '0');
  return `${h}:${m}:${s}`;
}
