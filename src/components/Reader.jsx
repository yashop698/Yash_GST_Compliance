import { useEffect, useMemo, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { findDoc, getContent } from '../data/manifest.js';

const META_RE = /^\{([a-z_]+):\s*"([^"]*)"\}$/;

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function extractText(node) {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractText).join('');
  if (node?.props?.children) return extractText(node.props.children);
  return '';
}

function withHighlight(children, query) {
  if (!query) return children;
  const q = query.trim();
  if (!q) return children;
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');

  function walk(node, keyPrefix = 'k') {
    if (typeof node === 'string') {
      const parts = node.split(re);
      return parts.map((p, i) =>
        re.test(p) || p.toLowerCase() === q.toLowerCase() ? (
          <mark key={`${keyPrefix}-${i}`}>{p}</mark>
        ) : (
          p
        )
      );
    }
    if (Array.isArray(node)) return node.map((n, i) => walk(n, `${keyPrefix}-${i}`));
    return node;
  }
  return walk(children);
}

function buildComponents(query) {
  return {
    h2({ children, ...props }) {
      const text = extractText(children);
      return <h2 id={slugify(text)} {...props}>{withHighlight(children, query)}</h2>;
    },
    h3({ children, ...props }) {
      const text = extractText(children);
      return <h3 id={slugify(text)} {...props}>{withHighlight(children, query)}</h3>;
    },
    h4({ children, ...props }) {
      return <h4 {...props}>{withHighlight(children, query)}</h4>;
    },
    table({ children, ...props }) {
      return (
        <div className="table-wrap">
          <table {...props}>{children}</table>
        </div>
      );
    },
    p({ children, ...props }) {
      const text = extractText(children);
      const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
      if (lines.length > 0 && lines.every((l) => META_RE.test(l))) {
        return (
          <p className="metarow" {...props}>
            {lines.map((line, i) => {
              const m = line.match(META_RE);
              return (
                <span key={i} className="metatag">
                  <span className="metatag__k">{m[1]}</span>
                  <span className="metatag__v">{m[2]}</span>
                </span>
              );
            })}
          </p>
        );
      }
      const singleMeta = text.trim().match(META_RE);
      if (singleMeta) {
        return (
          <p className="metarow" {...props}>
            <span className="metatag">
              <span className="metatag__k">{singleMeta[1]}</span>
              <span className="metatag__v">{singleMeta[2]}</span>
            </span>
          </p>
        );
      }
      return <p {...props}>{withHighlight(children, query)}</p>;
    },
    li({ children, ...props }) {
      return <li {...props}>{withHighlight(children, query)}</li>;
    },
    strong({ children, ...props }) {
      const text = extractText(children);
      if (text === '[MAHARASHTRA-SPECIFIC]') {
        return <span className="mh-badge">Maharashtra-Specific</span>;
      }
      return <strong {...props}>{withHighlight(children, query)}</strong>;
    },
    em({ children, ...props }) {
      return <em {...props}>{withHighlight(children, query)}</em>;
    },
    blockquote({ children, ...props }) {
      return <blockquote {...props}>{children}</blockquote>;
    },
  };
}

export default function Reader({ docId, query }) {
  const doc = findDoc(docId);
  const scrollRef = useRef(null);

  const content = useMemo(() => (doc ? getContent(doc.file) : ''), [doc]);
  const components = useMemo(() => buildComponents(query), [query]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    if (query && query.trim().length >= 2) {
      requestAnimationFrame(() => {
        const m = document.querySelector('.reader__content mark');
        if (m && scrollRef.current) {
          const top = m.getBoundingClientRect().top - scrollRef.current.getBoundingClientRect().top;
          scrollRef.current.scrollTop = top - 80;
        }
      });
    }
  }, [docId, query]);

  if (!doc) {
    return (
      <main className="reader reader--empty">
        <div className="reader__empty">
          <h2>Select a document</h2>
          <p>Pick a document from the library on the left, or start typing in the search bar to find what you need.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="reader" ref={scrollRef}>
      <article className="reader__article">
        <div className="reader__crumbs">
          <span
            className="reader__crumbs-chip"
            style={{ background: doc.topicBg, color: doc.topicColor }}
          >
            {doc.topicAbbr}
          </span>
          <span className="reader__crumbs-sep">/</span>
          <span className="reader__crumbs-topic">{doc.topicLabel}</span>
          <span className="reader__crumbs-sep">/</span>
          <span className="reader__crumbs-doc">{doc.title}</span>
        </div>

        <div className="reader__content">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {content}
          </ReactMarkdown>
        </div>

        <footer className="reader__foot">
          <span>{doc.topicLabel} · {doc.title}</span>
          <span>End of document</span>
        </footer>
      </article>
    </main>
  );
}
