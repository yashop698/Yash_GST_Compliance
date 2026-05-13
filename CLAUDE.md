# GST Compliance Analysis — Project Guide

## Project Overview

A comprehensive Advanced-level legal/regulatory analysis system covering three interconnected GST topics:
- **RCM** (Reverse Charge Mechanism) — Sections 9(3)/(4) CGST
- **Blocked ITC** (Section 17(5)) — Input Tax Credit restrictions
- **Apportionment** (Rule 43) — ITC allocation for mixed outputs

**Target Audience**: Chartered Accountants, Company Secretaries, CMA professionals, and their article/trainee staff.

**Scope**: CGST Act 2017, IGST Act 2017, Maharashtra SGST Act 2017. Current to May 2026 with all amendments and CBIC circulars through May 2026.

**Total Content**: 37 markdown documents (~200KB, 150,000+ words) + React + Vite frontend SPA.

---

## Repository Structure

```
/home/user/Yash_GST_Compliance/
├── GST_Compliance_Analysis/          # Legal analysis documents (37 files)
│   ├── Topic_1_RCM/                  # 10 files on Reverse Charge Mechanism
│   ├── Topic_2_Blocked_ITC/          # 10 files on Blocked ITC
│   ├── Topic_3_Apportionment/        # 11 files on Rule 43 Apportionment
│   ├── Shared/                       # 4 reference files
│   └── index.md                      # Master navigation
│
├── src/                              # React application source
│   ├── App.jsx                       # Main layout & state management
│   ├── index.css                     # Comprehensive styling
│   ├── components/
│   │   ├── Sidebar.jsx               # Navigation tree + search results
│   │   └── DocViewer.jsx             # Markdown renderer
│   ├── data/
│   │   └── docs.js                   # Document manifest & content loader
│   └── main.jsx                      # React entry point
│
├── package.json                      # Dependencies & npm scripts
├── vite.config.js                    # Vite build config (base path for GH Pages)
├── index.html                        # HTML entry point
└── .github/workflows/
    └── deploy.yml                    # GitHub Actions CI/CD workflow
```

---

## Key Files & Their Purposes

### Content Files (GST_Compliance_Analysis/)

**docs.js** (`src/data/docs.js`)
- Manifest of all 37 documents with metadata (topic, title, file path)
- Maps document IDs to file paths for easy navigation
- Uses `import.meta.glob` to eagerly load all markdown as raw strings at build time
- Search-related functions: `findDoc()`, `getContent()`

**Topic 1: RCM** (10 files)
- `01_RCM_Overview.md` — Overview, legislative intent, framework
- `02_RCM_Legal_Framework.md` — Full statutory text (Sections 9(3)/(4), Rules 3-5)
- `03_RCM_Eligibility_and_Exclusions.md` — Who pays RCM, exemptions
- `04_RCM_Path_A_Transaction_Type.md` — RCM by supply category
- `05_RCM_Path_B_Rule_Section.md` — RCM by rules structure
- `06_RCM_Practical_Implementation.md` — How to implement RCM
- `07_RCM_Scenarios_Advanced.md` — 5 worked scenarios with numbers
- `08_RCM_Audit_and_Compliance.md` — Audit red flags, common errors
- `09_RCM_Amendments_and_Clarifications.md` — All CBIC circulars to May 2026
- `10_RCM_Ambiguity_and_Conflicts.md` — 7 disputed areas with risk ratings

**Topic 2: Blocked ITC** (10 files)
- `01_Blocked_ITC_Overview.md` → `10_Blocked_ITC_Amendments.md`
- Same structure as RCM: overview, legal, two paths, practical, scenarios, audit, amendments, disputes
- Covers Section 17(5)(a)–(i), Finance Act 2021 retrospective amendment, plant & machinery exception

**Topic 3: Apportionment** (11 files)
- `01_Apportionment_Overview.md` → `11_Apportionment_Amendments.md`
- Full Rule 43 mechanics, T1/T2/T3 classification, E/F formula
- 5 worked numerical examples (legal firm, CA firm, gold trader, bank, capital goods)
- Sequencing rule: blocking FIRST, then apportionment

**Shared Reference** (4 files)
- `Glossary.md` — 21 GST term definitions
- `Amendments_Timeline_May_2026.md` — 47-entry chronological amendment log 2017–May 2026
- `Cross_Topic_References.md` — Full RCM↔BlockedITC↔Apportionment interaction map + master CA firm scenario
- `Disputed_Ambiguous_Areas.md` — 14 disputes across 3 topics + 2 Maharashtra-specific with risk tiers

### Metadata Tag Convention

Every section begins with metadata tags in curly braces:
```
{complexity_level: "Advanced"}
{topic: "RCM"}
{law_reference: "Section 9(3) CGST Act, 2017; Rule 3 CGST Rules, 2017"}
{amendment_date: "01-Jan-2022"}
{jurisdiction: "CGST + IGST + Maharashtra SGST"}
```

Maharashtra-specific content is marked:
```
**[MAHARASHTRA-SPECIFIC]**
```

### React Frontend

**App.jsx**
- Main layout: header + sidebar + main content area
- State: `selectedId` (current doc), `searchQuery`, `sidebarOpen` (mobile)
- Welcome screen with topic cards + master compliance sequence
- Keyboard shortcuts: `/` to search, `Escape` to clear

**Sidebar.jsx**
- Collapsible topic groups (RCM, Blocked ITC, Apportionment, Shared)
- Each topic shows document count and abbreviation (color-coded)
- Active document highlighted in topic color
- Search mode: shows matching documents with excerpts, keyword highlighted
- Mobile-responsive: drawer with overlay

**DocViewer.jsx**
- Renders markdown using `react-markdown` + `remark-gfm` (tables, task lists, strikethrough)
- Custom renderers:
  - Metadata tags `{key: "value"}` → styled chips
  - `**[MAHARASHTRA-SPECIFIC]**` → amber badge
  - Tables wrapped in scrollable div
  - Blockquotes styled as blue callout boxes
  - Code blocks with dark background
- Breadcrumb navigation: Topic › Category › Document

**index.css**
- Professional legal document styling (serif-style fonts for readability, navy/gold color scheme)
- CSS variables for theming
- Responsive grid layout
- Print-friendly styles for markdown content

---

## Development Workflow

### Prerequisites
```bash
node v22.22.2
npm 10.9.7+
git
```

### Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Navigate to http://localhost:5173
# Sidebar loads all 37 docs, search works live
# Hot reload on file changes
```

### Build for Production

```bash
# Build optimized dist/ folder
npm run build

# Output: dist/index.html + assets/
# Base path: /Yash_GST_Compliance/ (for GitHub Pages)
```

### Deploy to GitHub Pages

```bash
# Deploy dist/ to gh-pages branch
npm run deploy

# After enabling Pages in GitHub Settings:
# Live at: https://yashop698.github.io/Yash_GST_Compliance/
```

---

## Adding or Modifying Content

### Adding a New Document

1. Create `.md` file in the appropriate Topic folder:
   ```
   GST_Compliance_Analysis/Topic_X_YYY/NN_YYY_ZZZ.md
   ```

2. Add metadata tags at the top:
   ```
   # Document Title
   {complexity_level: "Advanced"}
   {topic: "Topic Name"}
   {law_reference: "Relevant sections"}
   {amendment_date: "DD-MMM-YYYY"}
   {jurisdiction: "CGST + IGST + Maharashtra SGST"}
   ```

3. Update `src/data/docs.js`:
   - Add entry to the appropriate topic's `docs` array
   - Follow naming: `id: "topic-NN"`, `title: "..."`, `file: "/GST_Compliance_Analysis/..."`

4. The glob loader will automatically include it at build time.

### Editing Metadata Tags

Metadata tags appear as styled chips in the UI. Keep them consistent:
- `complexity_level`: "Advanced" (this is a professional-level project)
- `topic`: Match one of the 4 main topics (RCM, Blocked ITC, Apportionment, Shared)
- `law_reference`: Cite specific sections, rules, circulars, dates
- `amendment_date`: When this provision was last amended (format: DD-MMM-YYYY)
- `jurisdiction`: Always "CGST + IGST + Maharashtra SGST" unless region-specific

### Using Maharashtra-Specific Tags

For content specific to Maharashtra SGST:
```
## Maharashtra Context
**[MAHARASHTRA-SPECIFIC]**

Maharashtra SGST officers follow...
```

The `**[MAHARASHTRA-SPECIFIC]**` text renders as an amber badge in the UI.

---

## Architecture Decisions

### Why Vite?
- Zero-config for React
- ~1.9s build time
- Fast HMR (hot module reload) for dev
- Tree-shaking for production
- ESM-first (aligned with modern JavaScript)

### Why react-markdown + remark-gfm?
- No dependency on HTML parsing (pure markdown rendering)
- GitHub Flavored Markdown (tables, task lists, strikethrough) out of the box
- Custom component renderers for legal-document styling
- Lightweight compared to alternatives (MDX, markdown-it)

### Why eager glob loading?
- All 37 markdown files bundled into the JS at build time
- No HTTP requests for content → faster perceived load
- Trade-off: slightly larger JS bundle (~1.3MB uncompressed, 394KB gzip)
  - Acceptable for a static SPA; consider code-splitting if content grows significantly

### Base Path = `/Yash_GST_Compliance/`
- GitHub Pages serves project repos under `/username/repo/`
- All asset URLs prefixed in production (build sets `base` in vite.config.js)
- Allows hosting on the exact GitHub Pages URL without trailing hash routing

---

## Maintenance & Contributions

### Common Tasks

**Update amendments (annually)**
- Edit `Shared/Amendments_Timeline_May_2026.md`
- Add new entries chronologically
- Update filename and document headers with current date

**Add new dispute or AAR ruling**
- Edit `Shared/Disputed_Ambiguous_Areas.md`
- Add risk tier (HIGH/MEDIUM/LOW)
- Cross-reference to related doc files

**Fix a legal inaccuracy**
- Find the relevant file (use sidebar search or grep)
- Update the content
- Add `{amendment_date: "DD-MMM-YYYY"}` if a new update
- Rebuild and test locally: `npm run dev`

**Update Maharashtra-specific content**
- Files with `**[MAHARASHTRA-SPECIFIC]**` tags (search for `MAHARASHTRA` in sidebar)
- Verify against latest Maharashtra AAR rulings
- Add amendment dates for Maharashtra SGST Circulars

### Testing Changes Locally

```bash
# Dev mode (watch for changes)
npm run dev

# Then open http://localhost:5173
# - Test sidebar navigation and search
# - Verify markdown rendering (tables, code blocks, blockquotes)
# - Check Maharashtra badges render correctly

# Before deploying, build for production
npm run build
npm run preview  # Preview production build locally
```

### Git Workflow

```bash
# Create a branch for your changes
git checkout -b claude/update-maharashtra-aars

# Make changes, commit with descriptive message
git add .
git commit -m "Update Maharashtra AAR rulings for TY 2025-26"

# Push to origin
git push -u origin claude/update-maharashtra-aars

# Create PR on GitHub
# After review + merge to main, GitHub Actions deploys automatically
```

---

## Deployment

### GitHub Pages (Current Setup)

**Source**: `gh-pages` branch (pushed by `npm run deploy`)  
**URL**: `https://yashop698.github.io/Yash_GST_Compliance/`  
**Auto-deploy**: When PR merged to `main`, GitHub Actions workflow (`deploy.yml`) builds and deploys automatically

**To enable Pages** (one-time setup):
1. GitHub repo → **Settings → Pages**
2. **Source** → Deploy from a branch
3. Branch: `gh-pages` / Folder: `/ (root)`
4. Save

### CI/CD Pipeline

`.github/workflows/deploy.yml`:
- Trigger: Push to `main` or manual trigger (`workflow_dispatch`)
- Steps:
  1. Checkout code
  2. Set up Node 22
  3. `npm ci` (clean install)
  4. `npm run build` (Vite builds)
  5. Upload `dist/` as Pages artifact
  6. GitHub's `actions/deploy-pages` pushes to Pages hosting
- Status badge available on GitHub

---

## Performance Considerations

### Bundle Size
- **Total JS**: 1.3MB (uncompressed), 394KB (gzip)
- **CSS**: 10.3KB (uncompressed), 2.75KB (gzip)
- Dominated by markdown content embedded in JS
- Vite minification + gzip is aggressive; production build is ~400KB total

### Optimization Opportunities
- If content exceeds ~100 documents, consider dynamic import() to code-split by topic
- Lazy-load markdown content from server instead of bundling
- Enable pre-compression (brotli) on GitHub Pages host

### Accessibility
- Semantic HTML (nav, main, section tags)
- Color contrast: ≥4.5:1 for body text
- Keyboard navigation: Tab/Shift+Tab, Enter/Space for buttons, Escape for modals
- ARIA labels on search, sidebar toggle

---

## Troubleshooting

### "Content not found" error in DocViewer
- Check `src/data/docs.js`: file path matches actual file path
- Ensure `.md` file exists in `GST_Compliance_Analysis/`
- Rebuild: `npm run build`

### Search not working
- Ensure all doc manifest entries in `src/data/docs.js` are correct
- Rebuild to include new files: `npm run build`
- Check browser console for errors

### Markdown not rendering (tables, blockquotes, etc.)
- Verify `remark-gfm` is installed: `npm list remark-gfm`
- Check markdown syntax matches GFM spec (pipe tables, `>` for blockquotes, `` ``` `` for code)
- Rebuild: `npm run build`

### GitHub Pages shows 404
- Check Pages **Source** setting: deploy from branch `gh-pages`
- Verify `dist/index.html` was created: `ls dist/`
- Check that `vite.config.js` has `base: '/Yash_GST_Compliance/'`
- Rebuild and redeploy: `npm run build && npm run deploy`

---

## References

**In-Project**
- `README.md` — Quick start
- `GST_Compliance_Analysis/index.md` — Master navigation with learning paths
- `Shared/Glossary.md` — GST term definitions
- `Shared/Amendments_Timeline_May_2026.md` — Amendment history

**External**
- CGST Act, 2017: https://taxscan.cbec-gst.gov.in
- Maharashtra SGST Act, 2017: Maharashtra Finance Department
- CBIC Circulars: https://www.cbic.gov.in (search for circular number)
- ICAI Technical Guides: https://www.icai.org

---

## License & Attribution

Content is original legal analysis compiled for professional reference. Cite appropriately when sharing.

Frontend built with:
- React 18.3.1
- Vite 5.4.21
- react-markdown 9.0.1
- remark-gfm 4.0.0

---

**Last Updated**: May 2026  
**Maintainers**: GST Compliance Analysis Team  
**GitHub**: https://github.com/yashop698/Yash_GST_Compliance
