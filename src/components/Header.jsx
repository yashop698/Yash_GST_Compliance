import { useEffect, useRef } from 'react';

export default function Header({ query, setQuery, onFocusSearch, totalDocs, onBrandClick }) {
  const inputRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      const isMod = e.metaKey || e.ctrlKey;
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      } else if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        setQuery('');
        inputRef.current?.blur();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setQuery]);

  return (
    <header className="header">
      <button
        className="header__brand"
        onClick={onBrandClick}
        aria-label="Back to The Compliance Codex landing page"
      >
        <div className="header__mark" aria-hidden>§</div>
        <div className="header__title">
          <span className="header__name">The Compliance Codex</span>
          <span className="header__sub">Vol. I · Edition May 2026</span>
        </div>
      </button>

      <div className="header__search">
        <span className="header__search-icon" aria-hidden>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>
        <input
          ref={inputRef}
          type="search"
          className="header__search-input"
          placeholder={`Search ${totalDocs} documents — section, keyword, notification…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={onFocusSearch}
          aria-label="Search documents"
        />
        <span className="header__search-kbd" aria-hidden>
          {navigator.platform.includes('Mac') ? '⌘K' : 'Ctrl K'}
        </span>
      </div>
    </header>
  );
}
