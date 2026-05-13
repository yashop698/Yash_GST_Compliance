import { useEffect, useRef, useState } from 'react';
import { TOPICS, ALL_DOCS } from '../data/manifest.js';

const DEMO_QUERIES = [
  { q: 'Section 17(5)(d)', meta: 'Blocked ITC · 12 hits', snip: '…construction of immovable property — Section <mark>17(5)(d)</mark> blocks credit on goods or services received…' },
  { q: 'RCM on legal services', meta: 'Reverse Charge · 8 hits', snip: '…legal services supplied by an advocate or firm of advocates are notified under <mark>RCM</mark>…' },
  { q: 'Rule 43 monthly D2', meta: 'Apportionment · 6 hits', snip: '…monthly common credit reversal computed as <mark>D2</mark> = (E ÷ F) × C2 where E denotes…' },
  { q: 'Maharashtra notification 12/2017', meta: 'Shared Reference · 4 hits', snip: '…MGST <mark>Notification 12/2017</mark>, dated 29 June 2017, adopted the corresponding CGST schedule…' },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-in');
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Section({ children, className = '' }) {
  const ref = useReveal();
  return (
    <section ref={ref} className={`reveal ${className}`}>
      {children}
    </section>
  );
}

function useTypedDemo() {
  const [step, setStep] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const target = DEMO_QUERIES[step].q;
    let id;

    if (phase === 'typing') {
      if (text.length < target.length) {
        id = setTimeout(() => setText(target.slice(0, text.length + 1)), 55);
      } else {
        id = setTimeout(() => setPhase('hold'), 2200);
      }
    } else if (phase === 'hold') {
      id = setTimeout(() => setPhase('deleting'), 1400);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        id = setTimeout(() => setText(text.slice(0, -1)), 22);
      } else {
        setStep((s) => (s + 1) % DEMO_QUERIES.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(id);
  }, [text, phase, step]);

  return { text, step, phase, current: DEMO_QUERIES[step] };
}

export default function Landing({ onEnter, onJumpToDoc }) {
  const demo = useTypedDemo();
  const showResult = demo.text.length === demo.current.q.length && demo.phase !== 'deleting';

  function openTopic(topicId) {
    const topic = TOPICS.find((t) => t.id === topicId);
    if (topic) onJumpToDoc(topic.docs[0].id);
  }

  return (
    <div className="landing">
      <div className="grain" aria-hidden />

      {/* ============================================================
          MASTHEAD
          ============================================================ */}
      <header className="masthead">
        <div className="masthead__row">
          <div className="masthead__pub">
            <span className="masthead__mark" aria-hidden>§</span>
            <span className="masthead__name">The Compliance Codex</span>
          </div>
          <div className="masthead__rule" aria-hidden>
            <span className="dot" />
            <span className="line" />
            <span className="dot" />
          </div>
          <div className="masthead__meta">
            <span>Vol. I</span>
            <span className="masthead__sep">·</span>
            <span>Edition · May 2026</span>
          </div>
        </div>
        <div className="masthead__nav">
          <nav>
            <a href="#doctrines">Contents</a>
            <a href="#instrument">Search</a>
            <a href="#readership">Readership</a>
            <a href="#colophon">Colophon</a>
          </nav>
          <button className="masthead__enter" onClick={onEnter}>
            Enter the Codex <span aria-hidden>→</span>
          </button>
        </div>
      </header>

      {/* ============================================================
          HERO
          ============================================================ */}
      <Section className="hero">
        <span className="hero__stamp" aria-hidden>
          <span className="hero__stamp-inner">
            ★ ISSUED · MAY · MMXXVI ★<br />
            EDITION I · MAHARASHTRA SUBSCRIPTION
          </span>
        </span>

        <span className="hero__sidemark" aria-hidden>VOL. I</span>
        <span className="hero__pagenum" aria-hidden>P. 01</span>

        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          Volume I — Advanced Compliance
          <span className="hero__eyebrow-dot" />
        </div>

        <h1 className="hero__headline">
          <span className="hero__line">The codex</span>
          <span className="hero__line">of advanced</span>
          <span className="hero__line">
            GST compliance<em className="hero__period">.</em>
          </span>
        </h1>

        <div className="hero__lead-wrap">
          <p className="hero__lead">
            Reverse Charge Mechanism. Blocked Input Tax Credit. Apportionment under Rule 43.
            Read in full and searchable to the clause — annotated against the law as
            notified through 13 May 2026.
          </p>
          <aside className="hero__marginalia" aria-hidden>
            <span className="hero__marginalia-mark">§</span>
            <p>
              An annotated companion to the CGST Act, the IGST Act, and the Maharashtra
              SGST Act, with the rules and notifications they invoke.
            </p>
          </aside>
        </div>

        <div className="hero__ctas">
          <button className="btn btn--primary" onClick={onEnter}>
            <span>Enter the Codex</span>
            <span className="btn__arrow" aria-hidden>→</span>
          </button>
          <a href="#doctrines" className="btn btn--ghost">
            <span className="btn__chev" aria-hidden>↓</span>
            <span>Browse the contents</span>
          </a>
        </div>

        <div className="hero__rulewrap" aria-hidden>
          <span className="hero__ruleline" />
          <span className="hero__rulemark">§</span>
          <span className="hero__ruleline" />
        </div>
      </Section>

      {/* ============================================================
          IN THIS ISSUE / STATS
          ============================================================ */}
      <Section className="issue">
        <div className="issue__head">
          <span className="eyebrow">In this issue</span>
          <h2 className="display display--lg">
            Four topics. <em>Thirty-five</em> chapters. One library.
          </h2>
        </div>

        <div className="issue__grid">
          <article className="stat">
            <span className="stat__num">35</span>
            <span className="stat__rule" />
            <span className="stat__label">Documents authored</span>
            <span className="stat__sub">averaging 4,800 words</span>
          </article>
          <article className="stat">
            <span className="stat__num">04</span>
            <span className="stat__rule" />
            <span className="stat__label">Topic clusters</span>
            <span className="stat__sub">RCM · ITC · APR · REF</span>
          </article>
          <article className="stat">
            <span className="stat__num">100<sup>+</sup></span>
            <span className="stat__rule" />
            <span className="stat__label">Cross-references</span>
            <span className="stat__sub">sections, rules, circulars</span>
          </article>
          <article className="stat">
            <span className="stat__num stat__num--roman">III</span>
            <span className="stat__rule" />
            <span className="stat__label">Orders of analysis</span>
            <span className="stat__sub">law · practice · scenario</span>
          </article>
        </div>

        <div className="issue__credits">
          <span className="issue__credits-label">Cited authorities</span>
          <span className="issue__credits-body">
            CGST Act 2017 · IGST Act 2017 · Maharashtra GST Act 2017 · CBIC Notifications
            1/2017 — 33/2026 · Circulars 1 — 213 · Council Recommendations to 53<sup>rd</sup>
            Meeting
          </span>
        </div>
      </Section>

      {/* ============================================================
          THREE DOCTRINES
          ============================================================ */}
      <div id="doctrines" />
      <Section className="doctrines">
        <header className="doctrines__head">
          <span className="eyebrow">— Table of Contents —</span>
          <h2 className="display display--xl">
            Three doctrines,<br />
            <em>three paths through the law.</em>
          </h2>
          <p className="doctrines__sub">
            Each chapter is read in full — from the constitutional foundation down to the
            filing-desk procedure. Cross-references run between them like wiring.
          </p>
        </header>

        {TOPICS.filter((t) => t.id !== 'shared').map((topic, i) => {
          const roman = ['I', 'II', 'III'][i];
          return (
            <article
              key={topic.id}
              className={`doctrine doctrine--${topic.id} doctrine--align-${i % 2 === 0 ? 'left' : 'right'}`}
              style={{ '--accent': topic.color, '--accent-bg': topic.bg }}
            >
              <div className="doctrine__numeral" aria-hidden>
                <span className="doctrine__numeral-pre">§</span>
                <span className="doctrine__numeral-letter">{roman}</span>
              </div>

              <div className="doctrine__body">
                <span className="doctrine__chip">{topic.abbr}</span>
                <h3 className="doctrine__title display">{topic.label}</h3>
                <span className="doctrine__cite">{topic.summary}</span>
                <p className="doctrine__lead">
                  {i === 0 &&
                    'When the buyer pays the tax instead of the seller — and why the rule was written that way. Read against twenty years of service-tax jurisprudence and every notification since 1 July 2017.'}
                  {i === 1 &&
                    'Ten clauses that disqualify otherwise-eligible credits. Read clause-by-clause with the construction amendment, the motor-vehicle carve-outs, and every contested boundary.'}
                  {i === 2 &&
                    'Common-use credits, exempt-supply attribution, and the monthly D2 / C2 reconciliation that everyone defers until audit. Computed step-by-step with the formulas, the worked examples, and the annual true-up.'}
                </p>

                <div className="doctrine__chapters">
                  {topic.docs.map((doc, idx) => (
                    <button
                      key={doc.id}
                      className="chapline"
                      onClick={() => onJumpToDoc(doc.id)}
                    >
                      <span className="chapline__num">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="chapline__title">{doc.title}</span>
                      <span className="chapline__dot" aria-hidden />
                    </button>
                  ))}
                </div>

                <button
                  className="btn btn--vermillion"
                  onClick={() => openTopic(topic.id)}
                >
                  <span>Open this doctrine</span>
                  <span className="btn__arrow" aria-hidden>→</span>
                </button>
              </div>
            </article>
          );
        })}

        <div className="doctrines__ref">
          <span className="doctrines__ref-rule" />
          <span className="doctrines__ref-label">— & —</span>
          <span className="doctrines__ref-rule" />
        </div>

        <article
          className="doctrine doctrine--ref doctrine--align-center"
          style={{ '--accent': 'var(--shr)', '--accent-bg': 'var(--shr-bg)' }}
        >
          <div className="doctrine__body doctrine__body--centered">
            <span className="doctrine__chip">REF</span>
            <h3 className="doctrine__title display">Shared Reference</h3>
            <span className="doctrine__cite">
              Glossary · Amendments Timeline · Cross-Topic Map · Disputed Areas
            </span>
            <p className="doctrine__lead">
              Four working reference texts that sit alongside the three doctrines —
              defined terms, the amendment ledger, the citation graph, and the open questions.
            </p>
            <div className="doctrine__chapters doctrine__chapters--grid">
              {TOPICS.find((t) => t.id === 'shared').docs.map((doc, idx) => (
                <button
                  key={doc.id}
                  className="chapline"
                  onClick={() => onJumpToDoc(doc.id)}
                >
                  <span className="chapline__num">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="chapline__title">{doc.title}</span>
                  <span className="chapline__dot" aria-hidden />
                </button>
              ))}
            </div>
          </div>
        </article>
      </Section>

      {/* ============================================================
          PULL QUOTE
          ============================================================ */}
      <Section className="pull">
        <span className="pull__mark" aria-hidden>“</span>
        <blockquote className="pull__quote">
          To read the law is to <em>hold the rule</em> against the
          facts you have, and the facts you have not.
        </blockquote>
        <cite className="pull__cite">— A note from the editors</cite>
      </Section>

      {/* ============================================================
          INSTRUMENT / SEARCH DEMO
          ============================================================ */}
      <div id="instrument" />
      <Section className="instrument">
        <header className="instrument__head">
          <span className="eyebrow">Instrumentation</span>
          <h2 className="display display--xl">
            Find any clause<br />
            in <em>two keystrokes.</em>
          </h2>
          <p className="instrument__sub">
            Every paragraph of every chapter is indexed. Section numbers, notification
            references, party names, doctrines — all reachable through one bar.
          </p>
        </header>

        <div className="instrument__demo">
          <div className="demo__bar">
            <span className="demo__icon" aria-hidden>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </span>
            <span className="demo__query">
              {demo.text}
              <span className={`demo__caret${demo.phase === 'hold' ? ' is-still' : ''}`}>|</span>
            </span>
            <span className="demo__kbd" aria-hidden>⌘ K</span>
          </div>

          <div className={`demo__panel${showResult ? ' is-open' : ''}`}>
            <div className="demo__meta">{demo.current.meta}</div>
            <p
              className="demo__snip"
              dangerouslySetInnerHTML={{ __html: demo.current.snip }}
            />
          </div>
        </div>

        <ul className="instrument__tags">
          {DEMO_QUERIES.map((q, i) => (
            <li key={q.q} className={i === demo.step ? 'is-current' : ''}>
              {q.q}
            </li>
          ))}
          <li>·</li>
          <li>Section 9(3)</li>
          <li>Block-credit motor vehicle</li>
          <li>Annual true-up Rule 43</li>
          <li>Composite supply</li>
        </ul>

        <p className="instrument__hint">
          <span className="instrument__hint-kbd">⌘K</span> opens the search from
          anywhere in the Codex.
        </p>
      </Section>

      {/* ============================================================
          READERSHIP
          ============================================================ */}
      <div id="readership" />
      <Section className="readership">
        <header className="readership__head">
          <span className="eyebrow">— Readership —</span>
          <h2 className="display display--xl">
            For those who read<br />
            <em>the law for a living.</em>
          </h2>
        </header>

        <div className="readership__grid">
          {[
            {
              mark: 'CA',
              name: 'Chartered Accountants',
              body: 'For the practitioner negotiating the boundary between Section 17(5) and Rule 43, between forward charge and reverse, between what is filed and what is defensible at audit.',
              meta: 'ICAI · Practice & Industry',
            },
            {
              mark: 'CS',
              name: 'Company Secretaries',
              body: 'For the secretarial advisor mapping GST exposure into board reports, related-party returns, and the compliance certificates that sit on the cover of an annual report.',
              meta: 'ICSI · Listed & Unlisted',
            },
            {
              mark: 'CMA',
              name: 'Cost & Management Accountants',
              body: 'For the cost accountant computing the unit-economics distortion of blocked credits, the apportionment carry-forward, and the cash-flow inflection RCM creates on the balance sheet.',
              meta: 'ICMAI · Industry & Audit',
            },
          ].map((p) => (
            <article key={p.mark} className="persona">
              <div className="persona__mark" aria-hidden>
                <span>{p.mark}</span>
              </div>
              <h3 className="persona__name">{p.name}</h3>
              <p className="persona__body">{p.body}</p>
              <span className="persona__meta">{p.meta}</span>
            </article>
          ))}
        </div>

        <p className="readership__footnote">
          <span>And for the article and trainee staff</span> who will live inside these
          documents for the next three filing cycles.
        </p>
      </Section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <Section className="final">
        <div className="final__ornament" aria-hidden>
          <span>—</span>
          <span className="final__ornament-mark">§ VI</span>
          <span>—</span>
        </div>
        <h2 className="display display--xxl final__title">
          Open <em>Volume I.</em>
        </h2>
        <p className="final__sub">
          Thirty-five chapters wait at the other side of this page.
        </p>
        <button className="btn btn--primary btn--xl" onClick={onEnter}>
          <span>Enter the Codex</span>
          <span className="btn__arrow" aria-hidden>→</span>
        </button>
        <p className="final__legal">
          Free to read. Cite responsibly. An annotated companion — not a substitute
          for the bare Act.
        </p>
      </Section>

      {/* ============================================================
          COLOPHON / FOOTER
          ============================================================ */}
      <footer id="colophon" className="colophon">
        <div className="colophon__top">
          <div className="colophon__brand">
            <span className="colophon__mark">§</span>
            <span className="colophon__name">The Compliance Codex</span>
          </div>
          <div className="colophon__rule" />
        </div>

        <div className="colophon__grid">
          <div className="colophon__col">
            <span className="colophon__col-label">Edition</span>
            <p>Volume I — May 2026</p>
            <p className="colophon__col-sub">Maharashtra Subscription</p>
          </div>
          <div className="colophon__col">
            <span className="colophon__col-label">Set in</span>
            <p>Bodoni Moda for display.</p>
            <p>Newsreader for editorial body.</p>
            <p>Geist &amp; Geist Mono for instrumentation.</p>
          </div>
          <div className="colophon__col">
            <span className="colophon__col-label">Topics</span>
            <ul className="colophon__topics">
              {TOPICS.map((t) => (
                <li key={t.id}>
                  <button onClick={() => openTopic(t.id)}>
                    <span style={{ color: t.color }}>{t.abbr}</span>
                    <span>{t.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="colophon__col">
            <span className="colophon__col-label">Reader notice</span>
            <p>
              An annotated companion to CGST, IGST, and Maharashtra SGST. Not legal advice.
              Cite the bare Act and the relevant notification directly.
            </p>
          </div>
        </div>

        <div className="colophon__strip">
          <span>The Compliance Codex</span>
          <span className="colophon__strip-mid">VOL · I · MAY · MMXXVI</span>
          <span>{ALL_DOCS.length} chapters indexed</span>
        </div>
      </footer>
    </div>
  );
}
