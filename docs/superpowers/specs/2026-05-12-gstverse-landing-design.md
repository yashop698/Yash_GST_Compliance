# GSTverse Landing Page — Design Spec

**Date:** 2026-05-12
**Status:** Approved (pending written-spec review)
**Author:** Claude (brainstormed with Yash)

## Overview

Repurpose the existing GST Compliance Analysis React + Vite app into the public landing page for **GSTverse**, a live-video platform for GST/tax/compliance content. The page is a single cinematic scroll: a full-screen looping video hero, followed by a standard SaaS narrative (trust → features → live preview → CTA band).

The existing GST analysis app source is **archived** under `legacy/` rather than deleted so it remains recoverable.

## Brand

- **Name:** GSTverse
- **Tagline:** *Where compliance goes live.*
- **Audience:** Chartered accountants / tax professionals **and** business owners.
- **Personality:** Cinematic, premium, futuristic, emotionally weighty. Feels like the opening titles of a prestige film, not a typical SaaS marketing site.

## Visual System

### Palette
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#000000` | Page base |
| `--surface` | `#0A0A0F` | Cards, raised panels |
| `--border` | `rgba(255,255,255,0.08)` | Hairlines |
| `--accent-cyan` | `#06B6D4` | Primary CTA, live indicators, focus rings |
| `--accent-gold` | `#F5B544` | Emotional accent, footer headline, timer |
| `--text` | `#E7E7EA` | Primary copy |
| `--muted` | `#8A8A95` | Secondary copy, captions |

### Typography
- **Display:** A tight modern serif — **Instrument Serif** (preferred) or **Fraunces**, loaded via Google Fonts. Used for the hero headline and section titles.
- **Body / UI:** **Inter** (variable), loaded via Google Fonts.
- **Hero headline:** ~88–104px on desktop, 48–60px on mobile, tracking slightly negative.
- **Section headline:** ~56px desktop, 36px mobile.
- **Body:** 17px / 1.6 line-height.

### Surface Treatments
- **Film grain:** subtle SVG-noise overlay across the whole page at ~4% opacity.
- **Vignette:** very faint radial darkening on the hero to focus the centre.
- **Glassmorphism:** feature cards use `backdrop-filter: blur(20px)` + `rgba(255,255,255,0.04)` background + `1px` cyan-tinted border that intensifies on hover.
- **Glows:** cyan radial glow under the primary CTA; gold radial glow behind the footer headline.

### Motion
- Slow, deliberate easing (`cubic-bezier(0.16, 1, 0.3, 1)`), durations 600–900ms.
- Scroll-linked: subtle parallax on the hero video (translateY) and fade-in-up on sections as they enter the viewport.
- Pulsing red→cyan dot beside the wordmark to signal "LIVE."
- No bouncy springs. No emoji microinteractions.
- Honour `prefers-reduced-motion`: disable parallax + scroll fades, swap video for poster image.

## Page Architecture

### 1. Hero (100vh, full-bleed)

**Layers, back to front:**
1. `<video>` — muted, autoplay, loop, playsInline, preload="auto", with `poster` fallback. Source: free cinematic clip from Coverr (https://coverr.co) — abstract drone / particles / data flow style. URL hardcoded in code; commented as easily swappable.
2. Gradient overlay: `linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 100%)`.
3. Content layer:
   - **Top bar (absolute):** wordmark "GSTverse" left + pulsing cyan LIVE dot; right-side nav: *Platform · Experts · Pricing* + cyan ghost button "Watch Live".
   - **Center stack (vertically centered):**
     - Small kicker, all-caps, letter-spaced: *LIVE TAX INTELLIGENCE PLATFORM*
     - Massive serif headline: *Where compliance goes live.*
     - Supporting line (max ~640px): *Stream expert GST sessions, replay critical broadcasts, and never miss a compliance moment again.*
     - Two CTAs side-by-side: primary cyan **Watch Live** + ghost **Join the Waitlist**.
   - **Bottom strip (absolute):** scroll-cue chevron centered, and a thin live-ticker line: *• ON AIR — GST Amendment Review with CA Priya Nair · 12,487 watching*.

### 2. Trust Strip

- Single horizontal row, dark background, top + bottom hairlines.
- Eyebrow text: *Trusted by professionals at*.
- 6 stylised text-logos (no images): Deloitte, EY, KPMG, ICAI, Grant Thornton, BDO — rendered as muted greyscale text in a clean sans, easy to swap later.

### 3. Features Grid (4 cards, 2×2 on desktop, 1-col on mobile)

Each card is a glass surface (~360×260px), with a small cyan-stroke icon, a serif title, and a 2–3 line body in `--muted`. Hover: border brightens, soft cyan glow underneath.

| Title | Body |
|---|---|
| Live Expert Broadcasts | Top CAs going live on amendments, GSTR cycles, and high-stakes audits. |
| Cinematic Replay Library | Every session archived in HD, searchable by topic, jumpable by timestamp. |
| Interactive Q&A | Ask the expert live or anonymously. Answers tied to the moment. |
| Compliance Alerts | Real-time push the instant a notification, circular, or amendment drops. |

### 4. Live Broadcast Preview

- Large 16:9 mock-player frame with a dark cinematic still (CSS-generated gradient with subtle silhouettes — no image asset required).
- Overlays: top-left red "ON AIR" badge with white pulse, top-right viewer count "12,487 watching", bottom strip with expert name + session title + progress bar.
- Below the player: a row of 3 small "Upcoming" cards (time, title, expert).

### 5. Footer CTA Band

- Full-bleed dark band.
- Centered: small gold caption *NEXT BROADCAST IN*, then a live countdown timer in serif (`02:14:37`) with gold glow.
- Sub-line headline: *Be in the room when it goes live.*
- Email input + cyan **Join the Waitlist** button.
- Below: 3-col footer (Product / Company / Legal links) + small wordmark + © line.

## Component Architecture

```
src/
  main.jsx                    ← entry (unchanged)
  App.jsx                     ← composes the landing in order
  index.css                   ← reset + CSS variables + font imports + grain/vignette
  components/
    Nav.jsx                   ← wordmark + live pill + nav links
    Hero.jsx                  ← video bg, overlay, content stack, ticker
    TrustStrip.jsx            ← logo row
    Features.jsx              ← 4 glass cards
    LivePreview.jsx           ← mock player + upcoming thumbnails
    FooterCTA.jsx             ← countdown + waitlist + footer links
  styles/
    landing.css               ← all section-level styles (single stylesheet)
legacy/
  (old GST_Compliance_Analysis/, old components/, old data/ moved here)
```

**Why a single `landing.css`:** the page is one cohesive cinematic experience. Splitting CSS per component fragments the system; one file makes the design language easier to keep coherent during iteration.

## External Dependencies

- **Video source:** Coverr free cinematic clip (URL chosen at implementation time — must be CORS-friendly and ≤6MB).
- **Fonts:** Google Fonts — Instrument Serif (or Fraunces) + Inter.
- **No new npm packages.** The existing React 18 + Vite 5 setup is sufficient. Existing `react-markdown` / `remark-gfm` deps stay (cheap to leave; removing them is a separate cleanup).

## Performance & Accessibility

- Video: `preload="auto"`, `poster` image, `playsInline`, muted. Total weight target ≤6MB.
- `prefers-reduced-motion`: video replaced by poster, parallax + scroll-fades disabled.
- Lighthouse target: Performance ≥85 (video makes 95+ unrealistic), Accessibility ≥95.
- Semantic HTML: `<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- All interactive elements keyboard-focusable with visible cyan focus ring.
- Color contrast: body text at AA, headlines at AAA against the dark background.

## Out of Scope

- Real backend / waitlist submission (form posts to a `console.log` stub).
- Real authentication or "Watch Live" routing (button is a stub).
- Real video CMS / live infrastructure.
- Pricing page, Experts page, Platform page (nav links scroll to anchor or are placeholders).
- Mobile-app-style native experience — this is a desktop-first responsive web landing.

## Success Criteria

1. Hero loads with autoplaying looping cinematic video on first paint (within ~2s on a good connection).
2. The page reads as **cinematic and premium** at first glance — not a typical SaaS template.
3. All 5 sections render correctly at desktop (≥1280px), tablet (768px), and mobile (≤480px).
4. Lighthouse Accessibility ≥95.
5. `prefers-reduced-motion` users see a still poster instead of the video.
6. Existing GST app code is preserved under `legacy/` (recoverable).
