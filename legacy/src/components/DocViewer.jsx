import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getContent, findDoc } from '../data/docs.js'

// Regex to detect metadata tag lines like {key: "value"}
const META_RE = /^\{([a-z_]+):\s*"([^"]*)"\}$/

function MetaTag({ keyName, value }) {
  return (
    <span className="meta-tag">
      <span className="meta-tag-key">{keyName}</span>
      <span style={{ color: '#94a3b8' }}>:</span>
      <span className="meta-tag-val">{value}</span>
    </span>
  )
}

// Custom renderers
function buildComponents() {
  return {
    // Wrap tables in a scrollable div
    table({ children, ...props }) {
      return (
        <div className="table-wrapper">
          <table {...props}>{children}</table>
        </div>
      )
    },

    // Detect metadata tag paragraphs and Maharashtra badges
    p({ children, ...props }) {
      const text = extractText(children)

      // Multiple metadata tags on consecutive lines come as single paragraph
      // split by newlines — detect if ALL lines are meta tags
      const lines = text.split('\n').map(l => l.trim()).filter(Boolean)
      if (lines.length > 0 && lines.every(l => META_RE.test(l))) {
        return (
          <p className="meta-row">
            {lines.map((line, i) => {
              const m = line.match(META_RE)
              return <MetaTag key={i} keyName={m[1]} value={m[2]} />
            })}
          </p>
        )
      }

      // Single meta tag
      const singleMeta = text.trim().match(META_RE)
      if (singleMeta) {
        return (
          <p className="meta-row">
            <MetaTag keyName={singleMeta[1]} value={singleMeta[2]} />
          </p>
        )
      }

      return <p {...props}>{children}</p>
    },

    // Maharashtra-specific badge in strong elements
    strong({ children, ...props }) {
      const text = extractText(children)
      if (text === '[MAHARASHTRA-SPECIFIC]') {
        return (
          <span className="mh-badge">
            🏛 Maharashtra-Specific
          </span>
        )
      }
      return <strong {...props}>{children}</strong>
    },
  }
}

function extractText(children) {
  if (typeof children === 'string') return children
  if (Array.isArray(children)) return children.map(extractText).join('')
  if (children?.props?.children) return extractText(children.props.children)
  return ''
}

export default function DocViewer({ docId }) {
  const doc = findDoc(docId)
  if (!doc) return null

  const content = getContent(doc.file)
  const components = buildComponents()

  return (
    <div className="doc-wrapper">
      <div className="doc-breadcrumb">
        <span
          className="doc-breadcrumb-topic"
          style={{ background: doc.topicBg, color: doc.topicColor }}
        >
          {doc.topicAbbr}
        </span>
        <span className="doc-breadcrumb-sep">›</span>
        <span>{doc.topicLabel}</span>
        <span className="doc-breadcrumb-sep">›</span>
        <span style={{ color: 'var(--text)' }}>{doc.title}</span>
      </div>

      <div className="doc-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={components}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}
