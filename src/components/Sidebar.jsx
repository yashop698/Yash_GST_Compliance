import { useState, useMemo } from 'react'
import { TOPICS, ALL_DOCS, getContent } from '../data/docs.js'

function highlight(text, query) {
  if (!query) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  )
}

function getExcerpt(content, query) {
  if (!query) return ''
  const lower = content.toLowerCase()
  const idx = lower.indexOf(query.toLowerCase())
  if (idx === -1) return ''
  const start = Math.max(0, idx - 30)
  const end = Math.min(content.length, idx + query.length + 60)
  return (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '')
}

export default function Sidebar({ selectedId, onSelect, searchQuery }) {
  const [expanded, setExpanded] = useState(() => {
    const init = {}
    TOPICS.forEach(t => { init[t.id] = true })
    return init
  })

  function toggle(id) {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return null
    const q = searchQuery.toLowerCase()
    return ALL_DOCS
      .filter(doc => {
        const titleMatch = doc.title.toLowerCase().includes(q)
        const content = getContent(doc.file)
        const contentMatch = content.toLowerCase().includes(q)
        return titleMatch || contentMatch
      })
      .slice(0, 25)
      .map(doc => ({
        ...doc,
        excerpt: getExcerpt(getContent(doc.file), searchQuery),
      }))
  }, [searchQuery])

  if (searchResults !== null) {
    return (
      <div className="sidebar-inner">
        <div className="search-results">
          <div className="search-results-header">
            {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
          </div>
          {searchResults.length === 0 && (
            <div className="no-results">No documents found.</div>
          )}
          {searchResults.map(doc => (
            <button
              key={doc.id}
              className={`search-result-item${doc.id === selectedId ? ' active' : ''}`}
              onClick={() => onSelect(doc.id)}
            >
              <span
                className="search-result-topic"
                style={{ background: doc.topicBg, color: doc.topicColor }}
              >
                {doc.topicAbbr}
              </span>
              <span className="search-result-title">
                {highlight(doc.title, searchQuery)}
              </span>
              {doc.excerpt && (
                <span className="search-result-excerpt">{doc.excerpt}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="sidebar-inner">
      {TOPICS.map(topic => (
        <div key={topic.id} className="sidebar-section">
          <button
            className="sidebar-topic-btn"
            onClick={() => toggle(topic.id)}
          >
            <span
              className="sidebar-topic-abbr"
              style={{ background: topic.bg, color: topic.color }}
            >
              {topic.abbr}
            </span>
            <span className="sidebar-topic-label">{topic.label}</span>
            <span className="sidebar-topic-count">{topic.docs.length}</span>
            <span className={`sidebar-chevron${expanded[topic.id] ? ' open' : ''}`}>▶</span>
          </button>

          {expanded[topic.id] && (
            <ul className="sidebar-docs">
              {topic.docs.map((doc, i) => {
                const isActive = doc.id === selectedId
                return (
                  <li key={doc.id}>
                    <button
                      className={`sidebar-doc-btn${isActive ? ' active' : ''}`}
                      style={isActive ? { borderRightColor: topic.color } : {}}
                      onClick={() => onSelect(doc.id)}
                    >
                      <span className="sidebar-doc-num">{String(i + 1).padStart(2, '0')}</span>
                      <span
                        className="sidebar-doc-title"
                        style={isActive ? { color: topic.color } : {}}
                      >
                        {doc.title}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}
