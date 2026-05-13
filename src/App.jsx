import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Reader from './components/Reader.jsx';
import SearchResults from './components/SearchResults.jsx';
import Landing from './components/Landing.jsx';
import { ALL_DOCS } from './data/manifest.js';
import './styles/landing.css';
import './styles/reader.css';

const DEFAULT_DOC = 'rcm-01';

function readHash() {
  const h = window.location.hash.replace(/^#/, '');
  if (!h) return { mode: 'landing' };
  if (ALL_DOCS.some((d) => d.id === h)) return { mode: 'reader', docId: h };
  return { mode: 'landing' };
}

export default function App() {
  const [route, setRoute] = useState(readHash);
  const [query, setQuery] = useState('');
  const [highlightTerm, setHighlightTerm] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function onHash() {
      setRoute(readHash());
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  function gotoLanding() {
    window.location.hash = '';
    setRoute({ mode: 'landing' });
    setQuery('');
    setSearchOpen(false);
  }

  function gotoReader(docId, q = '') {
    window.location.hash = docId;
    setRoute({ mode: 'reader', docId });
    setHighlightTerm(q);
    setQuery('');
    setSearchOpen(false);
    window.scrollTo({ top: 0 });
  }

  if (route.mode === 'landing') {
    return (
      <Landing
        onEnter={() => gotoReader(DEFAULT_DOC)}
        onJumpToDoc={(id) => gotoReader(id)}
      />
    );
  }

  function handleSelectFromTree(id) {
    gotoReader(id);
  }

  function handleSelectFromSearch(id, q) {
    gotoReader(id, q);
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
        onBrandClick={gotoLanding}
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

      <Sidebar selectedId={route.docId} onSelect={handleSelectFromTree} />
      <Reader docId={route.docId} query={highlightTerm} />
    </div>
  );
}
