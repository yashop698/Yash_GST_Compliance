import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar.jsx'
import DocViewer from './components/DocViewer.jsx'
import { TOPICS, findDoc } from './data/docs.js'

function Welcome({ onSelect }) {
  return (
    <div className="welcome">
      <div className="welcome-icon">⚖️</div>
      <h1>GST Compliance Analysis<br /><span style={{ color: 'var(--gold)' }}>Advanced Reference</span></h1>
      <p className="welcome-subtitle">
        Comprehensive coverage of RCM, Blocked ITC, and ITC Apportionment under CGST, IGST,
        and Maharashtra SGST law — current to May 2026.
      </p>

      <div className="welcome-grid">
        {TOPICS.map(t => (
          <button
            key={t.id}
            className="welcome-card"
            onClick={() => onSelect(t.docs[0].id)}
            style={{ borderTopColor: t.color, borderTopWidth: 3 }}
          >
            <span
              className="welcome-card-abbr"
              style={{ background: t.bg, color: t.color }}
            >
              {t.abbr}
            </span>
            <div className="welcome-card-title">{t.label}</div>
            <div className="welcome-card-count">{t.docs.length} documents</div>
          </button>
        ))}
      </div>

      <div className="welcome-seq">
        <h3>The Master Compliance Sequence</h3>
        <div className="seq-steps">
          <div className="seq-step">
            <span className="seq-step-num">1</span>
            RCM Check — Section 9(3)/(4)
          </div>
          <span className="seq-arrow">→</span>
          <div className="seq-step">
            <span className="seq-step-num">2</span>
            Block Check — Section 17(5)
          </div>
          <span className="seq-arrow">→</span>
          <div className="seq-step">
            <span className="seq-step-num">3</span>
            Attribute — T1 / T2 / T3
          </div>
          <span className="seq-arrow">→</span>
          <div className="seq-step">
            <span className="seq-step-num">4</span>
            Apportion — Rule 43 E/F
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [selectedId, setSelectedId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const searchRef = useRef(null)
  const mainRef = useRef(null)

  // Keyboard shortcut: / to focus search
  useEffect(() => {
    function onKey(e) {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault()
        searchRef.current?.focus()
      }
      if (e.key === 'Escape') {
        setSearchQuery('')
        searchRef.current?.blur()
        setSidebarOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  function handleSelect(id) {
    setSelectedId(id)
    setSearchQuery('')
    setSidebarOpen(false)
    mainRef.current?.scrollTo(0, 0)
  }

  const doc = selectedId ? findDoc(selectedId) : null

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <button className="menu-btn" onClick={() => setSidebarOpen(o => !o)} aria-label="Menu">
          {sidebarOpen ? '✕' : '☰'}
        </button>

        <button
          className="header-logo"
          onClick={() => { setSelectedId(null); setSidebarOpen(false) }}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span className="header-logo-icon">⚖️</span>
          <span className="header-title">GST <span>Compliance</span></span>
        </button>

        <div className="header-search">
          <span className="header-search-icon">🔍</span>
          <input
            ref={searchRef}
            type="search"
            placeholder="Search all 37 documents… ( / )"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setSidebarOpen(true)}
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => setSearchQuery('')}>×</button>
          )}
        </div>

        {doc && (
          <div className="header-badge">
            {doc.topicAbbr} › {doc.title}
          </div>
        )}
      </header>

      {/* Sidebar overlay (mobile) */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <nav className={`sidebar${sidebarOpen ? ' open' : ''}`}>
        <Sidebar
          selectedId={selectedId}
          onSelect={handleSelect}
          searchQuery={searchQuery}
        />
      </nav>

      {/* Main */}
      <main className="main" ref={mainRef}>
        {selectedId
          ? <DocViewer docId={selectedId} />
          : <Welcome onSelect={handleSelect} />
        }
      </main>
    </div>
  )
}
