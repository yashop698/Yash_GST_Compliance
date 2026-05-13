import { ALL_DOCS, getContent } from '../data/manifest.js';

const META_LINE = /^\{[a-z_]+:\s*"[^"]*"\}\s*$/;
const HEADING_LINE = /^#{1,6}\s+/;

function stripMarkdown(line) {
  return line
    .replace(/^#{1,6}\s+/, '')
    .replace(/[*_`]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim();
}

function paragraphs(content) {
  const blocks = content.split(/\n{2,}/);
  const out = [];
  for (const block of blocks) {
    const lines = block.split('\n').filter((l) => l.trim() && !META_LINE.test(l.trim()));
    if (!lines.length) continue;
    const isHeading = HEADING_LINE.test(lines[0]);
    const text = lines.map(stripMarkdown).join(' ').trim();
    if (text.length < 4) continue;
    out.push({ text, isHeading });
  }
  return out;
}

const INDEX = ALL_DOCS.map((doc) => {
  const content = getContent(doc.file);
  return { doc, content, paragraphs: paragraphs(content) };
});

export function search(rawQuery, limit = 30) {
  const query = rawQuery.trim();
  if (query.length < 2) return [];
  const q = query.toLowerCase();
  const tokens = q.split(/\s+/).filter(Boolean);
  const results = [];

  for (const entry of INDEX) {
    const { doc, paragraphs: paras } = entry;
    const titleLower = doc.title.toLowerCase();
    const titleHit = titleLower.includes(q);

    const matchedParas = [];
    let totalHits = 0;
    for (const p of paras) {
      const lower = p.text.toLowerCase();
      if (lower.includes(q)) {
        matchedParas.push({ text: p.text, isHeading: p.isHeading, score: 5 });
        totalHits++;
        continue;
      }
      if (tokens.length > 1 && tokens.every((t) => lower.includes(t))) {
        matchedParas.push({ text: p.text, isHeading: p.isHeading, score: 2 });
        totalHits++;
      }
    }

    if (!titleHit && matchedParas.length === 0) continue;

    matchedParas.sort((a, b) => b.score - a.score);
    const topParas = matchedParas.slice(0, 3);

    const score =
      (titleHit ? 50 : 0) +
      (topParas.some((p) => p.isHeading) ? 10 : 0) +
      Math.min(totalHits, 20);

    results.push({
      doc,
      score,
      totalHits,
      snippets: topParas.map((p) => makeSnippet(p.text, query)),
    });
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, limit);
}

function makeSnippet(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  const radius = 90;
  if (idx === -1) {
    return text.length > 200 ? text.slice(0, 200) + '…' : text;
  }
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

export function highlightTokens(text, query) {
  if (!query) return [text];
  const q = query.trim();
  if (!q) return [text];
  const re = new RegExp('(' + escapeRegex(q) + ')', 'gi');
  const parts = text.split(re);
  return parts;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
