import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Reader from './components/Reader.jsx';
import SearchResults from './components/SearchResults.jsx';
import { ALL_DOCS } from './data/manifest.js';
import './styles/reader.css';

const DEFAULT_DOC = 'rcm-01';

function readHash() {
  const h = window.location.hash.replace(/^#/, '');
  return ALL_DOCS.some((d) => d.id === h) ? h : null;
}

export default function App() {
  const [selectedId, setSelectedId] = useState(() => readHash() ?? DEFAULT_DOC);
  const [query, setQuery] = useState('');
  const [highlightTerm, setHighlightTerm] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function onHash() {
      const h = readHash();
      if (h) setSelectedId(h);
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    window.location.hash = selectedId;
  }, [selectedId]);

  function handleSelectFromTree(id) {
    setSelectedId(id);
    setHighlightTerm('');
  }

  function handleSelectFromSearch(id, q) {
    setSelectedId(id);
    setHighlightTerm(q);
    setSearchOpen(false);
    setQuery('');
  }

  function closeSearch() {
    setSearchOpen(false);
    setQuery('');
  }

  const showResults = searchOpen || query.trim().length > 0;

  return (
    <div className="app">
      <Header
        query={query}
        setQuery={(q) => {
          setQuery(q);
          setSearchOpen(true);
        }}
        onFocusSearch={() => setSearchOpen(true)}
        totalDocs={ALL_DOCS.length}
      />

      {showResults && (
        <div className="results-shell" onClick={closeSearch}>
          <div className="results-shell__inner" onClick={(e) => e.stopPropagation()}>
            <SearchResults
              query={query}
              onSelect={handleSelectFromSearch}
              onClose={closeSearch}
            />
          </div>
        </div>
      )}

      <Sidebar selectedId={selectedId} onSelect={handleSelectFromTree} />
      <Reader docId={selectedId} query={highlightTerm} />
    </div>
  );
}
