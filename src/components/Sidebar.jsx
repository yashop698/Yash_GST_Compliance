import { useState } from 'react';
import { TOPICS } from '../data/manifest.js';

export default function Sidebar({ selectedId, onSelect }) {
  const [open, setOpen] = useState(() => {
    const init = {};
    TOPICS.forEach((t) => {
      init[t.id] = true;
    });
    return init;
  });

  function toggle(id) {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <aside className="sidebar" aria-label="Document navigation">
      <div className="sidebar__inner">
        <div className="sidebar__intro">
          <span className="sidebar__intro-label">Library</span>
          <span className="sidebar__intro-meta">35 documents · 4 topics</span>
        </div>

        {TOPICS.map((topic) => (
          <section key={topic.id} className="topic">
            <button
              className="topic__head"
              onClick={() => toggle(topic.id)}
              aria-expanded={open[topic.id]}
            >
              <span
                className="topic__chip"
                style={{ background: topic.bg, color: topic.color }}
              >
                {topic.abbr}
              </span>
              <span className="topic__label">{topic.label}</span>
              <span className="topic__count">{topic.docs.length}</span>
              <span className={`topic__chev${open[topic.id] ? ' is-open' : ''}`} aria-hidden>
                ›
              </span>
            </button>

            {open[topic.id] && (
              <p className="topic__summary">{topic.summary}</p>
            )}

            {open[topic.id] && (
              <ul className="topic__docs">
                {topic.docs.map((doc, i) => {
                  const active = doc.id === selectedId;
                  return (
                    <li key={doc.id}>
                      <button
                        className={`docitem${active ? ' is-active' : ''}`}
                        style={active ? { '--accent': topic.color } : undefined}
                        onClick={() => onSelect(doc.id)}
                      >
                        <span className="docitem__num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="docitem__title">{doc.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>
        ))}
      </div>
    </aside>
  );
}
