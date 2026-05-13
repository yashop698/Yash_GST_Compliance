import { useMemo } from 'react';
import { search, highlightTokens } from '../lib/search.js';

function HL({ text, query }) {
  const parts = highlightTokens(text, query);
  const q = query.trim().toLowerCase();
  return (
    <>
      {parts.map((p, i) =>
        p.toLowerCase() === q ? <mark key={i}>{p}</mark> : <span key={i}>{p}</span>
      )}
    </>
  );
}

export default function SearchResults({ query, onSelect, onClose }) {
  const results = useMemo(() => search(query), [query]);
  const q = query.trim();

  if (q.length < 2) {
    return (
      <div className="results" role="listbox">
        <div className="results__hint">
          Type at least two characters. Try <code>Section 17(5)</code>, <code>RCM</code>, <code>Rule 43</code>, <code>notification 12/2017</code>.
        </div>
      </div>
    );
  }

  return (
    <div className="results" role="listbox">
      <div className="results__head">
        <span>
          <strong>{results.length}</strong>{' '}
          {results.length === 1 ? 'document' : 'documents'} matched &ldquo;{q}&rdquo;
        </span>
        <button className="results__close" onClick={onClose} aria-label="Close search">
          Esc
        </button>
      </div>

      {results.length === 0 && (
        <div className="results__empty">
          Nothing matched. Try a different spelling, or a section number like{' '}
          <code>17(5)(d)</code>.
        </div>
      )}

      <ul className="results__list">
        {results.map((r) => (
          <li key={r.doc.id}>
            <button
              className="result"
              onClick={() => onSelect(r.doc.id, q)}
              role="option"
            >
              <div className="result__row">
                <span
                  className="result__topic"
                  style={{ background: r.doc.topicBg, color: r.doc.topicColor }}
                >
                  {r.doc.topicAbbr}
                </span>
                <span className="result__title">
                  <HL text={r.doc.title} query={q} />
                </span>
                <span className="result__count">
                  {r.totalHits} {r.totalHits === 1 ? 'hit' : 'hits'}
                </span>
              </div>
              {r.snippets.map((s, i) => (
                <p key={i} className="result__snippet">
                  <HL text={s} query={q} />
                </p>
              ))}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
