import { useEffect, useState } from 'react';

const START_SECONDS = 2 * 3600 + 14 * 60 + 37;

function useCountdown(initial) {
  const [s, setS] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = String(Math.floor(s / 3600)).padStart(2, '0');
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const ss = String(s % 60).padStart(2, '0');
  return { hh, mm, ss };
}

export default function FooterCTA() {
  const { hh, mm, ss } = useCountdown(START_SECONDS);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    console.log('Waitlist:', email);
    setSubmitted(true);
    setEmail('');
  }

  return (
    <section className="footercta" id="waitlist">
      <div className="footercta__inner">
        <span className="footercta__kicker">03 / Premiere</span>

        <div className="countdown" aria-label="Time until next broadcast">
          <span className="countdown__seg">{hh}</span>
          <span className="countdown__colon">:</span>
          <span className="countdown__seg">{mm}</span>
          <span className="countdown__colon">:</span>
          <span className="countdown__seg">{ss}</span>
        </div>
        <span className="countdown__label">Until the next live broadcast</span>

        <h2 className="footercta__title">
          Be in the room<br />when it <em>goes live.</em>
        </h2>
        <p className="footercta__sub">
          Reserve your seat. Get notified the moment a CA goes on air or a notification drops.
          No spam, only signal.
        </p>

        <form className="waitlist" onSubmit={onSubmit}>
          <input
            type="email"
            required
            placeholder="you@firm.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            className="waitlist__input"
          />
          <button type="submit" className="waitlist__btn">
            Reserve Seat
            <span aria-hidden>→</span>
          </button>
        </form>
        {submitted && (
          <p className="waitlist__ok" role="status">
            You're on the list. Watch your inbox for the broadcast key.
          </p>
        )}
      </div>

      <footer className="foot">
        <div className="foot__brand">
          <span className="foot__word">GSTverse<span className="foot__dot" /></span>
          <p className="foot__tag">Where compliance goes live.</p>
        </div>

        <div className="foot__cols">
          <div className="foot__col">
            <span className="foot__col-h">Platform</span>
            <a href="#features">Features</a>
            <a href="#preview">Live Now</a>
            <a href="#waitlist">Pricing</a>
            <a href="#waitlist">For Firms</a>
          </div>
          <div className="foot__col">
            <span className="foot__col-h">Company</span>
            <a href="#">About</a>
            <a href="#">Experts</a>
            <a href="#">Press</a>
            <a href="#">Careers</a>
          </div>
          <div className="foot__col">
            <span className="foot__col-h">Legal</span>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Broadcast Policy</a>
          </div>
        </div>

        <div className="foot__meta">
          <span>© 2026 GSTverse Inc.</span>
          <span>Broadcast №001</span>
          <span>Made with cinematic intent.</span>
        </div>
      </footer>
    </section>
  );
}
