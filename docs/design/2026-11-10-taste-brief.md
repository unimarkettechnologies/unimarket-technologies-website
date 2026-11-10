# Taste pass brief, 10 November 2026

Second design pass on branch `feature/061126-redesign`. The 6 November pass (`2026-11-06-redesign-brief.md`) applied `/frontend-design` and `impeccable`. This pass applies **tasteskill 2.5** (`/Users/kabwe/.claude/skills/design-taste-frontend-v2`, called `<skill>` below). Where this brief and the 6 November brief disagree, this brief wins. Where this brief and the skill disagree, ask the orchestrator.

## Owner decisions (10 Nov)

1. **Typeface:** follow the skill. Inter goes. The dealt pairing is used (below).
2. **Imagery:** replace `commerce-dashboard.webp` (third-party brand, real Malawian company names) with **live HTML POS / MRA EIS UI** in an `app-frame`. Keep every other existing photograph (`retail-pos-payment`, `inventory-team`, `technology-team`, `solution-cards/*`). Add licensed stand-in photographs (`photos.mjs`) only where a section has no picture. Leave the `.webp` file on disk, unused; the owner decides whether to delete it.
3. **Kind:** software.

## Line 1: the kind

`software` · page type `software` · site-kind `software`. Category: "POS software, card machines and MRA EIS electronic invoicing". Main action: **Request a consultation** (word for word in nav, every hero, the close; nowhere else as a filled button).

## Line 2: the deal (already run; build exactly this)

| Part | Dealt |
|---|---|
| Palette | client colours through `start.mjs brand`: the Unimarket blues fit a business-systems firm whose logo is that blue; printed `:root` below, keep verbatim |
| Pairing | `funnel`: Funnel Display / Funnel Sans + DM Mono (first dealt) |
| Radius | `soft` |
| Hero, home | `centred` (x.ai): pill, centred h1 (36 chars max, 2 lines), lead, two buttons, lit frame holding one live window |
| Hero, /solutions | `collage` (h1 48 chars max) |
| Hero, /solutions/pos-eis | `split` (h1 45 chars max), a window on the right |
| Hero, /contact | `triptych` (h1 34 chars max): headline left, collage of 3 to 5 outputs (POS receipt, EIS invoice, website, app screen) changing set every 2.8 s, one large button on the right line (to `#enquiry`). `film` was dealt first and re-dealt: no film exists |
| Moments, home | 1. `letters-assemble` (statement section), 2. `iris-opens` (the section that moves onto the surface ground) |
| Moments, subpages | one each; deal with `moments.mjs pick --page software --count 1 --fits section,statement --history .taste-skill/history.json` from the project folder |
| Effect | `fluted-glass`, the one effect, in the home hero's lit frame behind the window (quiet). No other effect, no scene |
| Lit ground | `<html data-ground="sand">` |
| Nav | `nav-centre` |
| Footer | `footer-statement` (lit ground) |
| Close | `close-type` |
| Rhythm | `surface-pairs` (one `.ground-surface` band of one or two sections) |
| Buttons | `data-buttons="arrow"` |
| Mark | the client's own logo replaces it (`public/logos/unimarket-logo-horizontal-480.png` / existing `brand-logo.tsx`) |

Printed `:root` (keep as is, after the kit links):

```css
:root {
  --p-bg: #f7f9fc; --p-surface: #eaf1fa; --p-ink: #111f31; --p-muted: #4a5a70;
  --p-accent: #1652a6; --p-accent-ink: #f7f9fc; --p-action: #1652a6; --p-action-ink: #f7f9fc;
  --p-inv-bg: #111f31; --p-inv-surface: #1e2c3d; --p-inv-ink: #f7f9fc; --p-inv-muted: #979fa9;
  --p-inv-accent: #f7f9fc; --p-inv-accent-ink: #111f31; --p-inv-action: #f7f9fc; --p-inv-action-ink: #111f31;
  --font-display: "Funnel Display", system-ui, sans-serif;
  --font-text: "Funnel Sans", system-ui, sans-serif;
  --font-mono: "DM Mono", ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace;
  --display-weight: 400;
  --display-tracking: -0.03em;
  --display-tracking-xl: -0.04em;
  --ly-scale: 0.98;
}
```

Fonts: `https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400..700&family=Funnel+Sans:wght@400..600&family=DM+Mono:wght@400;500&display=swap` (preconnect both Google hosts).

## Stack rules

- Build in the existing Next.js App Router project. Copy `<skill>/assets` into `public/assets` (plain files). Load from `src/app/layout.tsx`: the five stylesheet links in the order `start.mjs` printed (`system.css`, `ui/cards.css`, `motion/motion.css`, `backgrounds/backgrounds.css`, `layout/layout.css`, `icons/icon.css`), then the `:root` block, then `system.js`, `layout.js` and motion scripts as `starter.html` loads them (use `next/script` or plain `<script>` in the root layout; keep the `m-enter` head line). Never edit the kit files.
- Components take the starter's markup and classes. Tailwind may stay for utilities that the kit does not cover, but the kit's tokens, `.wrap`, grid, buttons, sections and cards are the system; remove the old Inter/next/font setup, `hero-radial`, `dark-panel`, `site-container` and other 6 Nov chrome that the kit replaces.
- `<html lang="en" data-type="software" data-radius="soft" data-buttons="arrow" data-motion data-ground="sand">`, metas `page-type=software`, `site-kind=software`.
- Keep the four routes, `robots.ts`, `sitemap.ts`, the contact form logic (prototype, sends nothing; restyle to the starter's `booking-form` pattern, errors under each field), Escape-closes-menu, focus return.
- **Multi-page exception:** the skill assumes one page with `#id` links. This site keeps its four routes, so nav links to `/solutions`, `/solutions/pos-eis`, `/contact` are correct. If a check flags them, waive in `.taste-skill/waivers.json` with reason "multi-page Next.js site, owner keeps four routes".
- Contacts: rule 9. No real-format phone. Any email shown is on `.example` (e.g. `hello@unimarket.example`) until the owner supplies one; street and district only.

## Page plans (screens at 1440x900)

Read `copy.md`, `copy-voice.md`, `system.md`, `layout-v4.md`, `sections.md` and `sections-library.md` (the recipe of every id used) before building. Write the voice card first. Rewrite copy to `copy.md` (60 to 80 words a screen outside UI; h1 names category and buyer/place; one hard fact on the first screen; noun in every heading; buttons verb + object). Keep the 6 Nov guardrails: no MRA accreditation claim, no payment partner names, no client counts, no reply-time promises, concept/prototype disclaimers kept but plain (and never as a caption under a visual).

### Home `/`

1. `hero` centred, 1 screen. h1 ≤ 36 chars naming the category and Malawi (e.g. "POS and MRA EIS software for Malawi"). Window in the fluted-glass lit frame: a live HTML POS sale, basket, card payment approved, then the EIS invoice status line arriving (the hero's own loop: 0.9 s apart, hold 2.4 s, repeat). Placeholder customer and product names only (generic shop items, no real companies).
2. `app-frame`, 1 screen (2 only if content needs it). The product big: a sales list beside the open sale/invoice (receipt lines, VAT, payment method, EIS submission state, Accept/Retry actions). `<skill>/assets/ui` fragments rewritten to Unimarket's subject. One object line.
3. `what-we-build`, 1 screen: the four solutions as photo cards with the existing `solution-cards/*` images (a linked card lifts 2px, photo zooms 1.02 inside its frame). No captions under images; titles/descriptions sit as card text, not image captions.
4. `connects`, 1 screen, `.ground-surface` (the surface-pairs band begins), holds the **iris-opens** moment: a pulsing `data-diagram` hub card (POS at the centre; card terminal, stock, MRA EIS, reports, accounting as branches) beside short text.
5. `statement`, 1 screen, still on the surface band: **letters-assemble**, two to five words (e.g. "Checkout to invoice").
6. `process`, 1 screen: the delivery steps (Discover, Define, Design, Build, Integrate, Support) as `steps`, each with a small UI fragment or the `technology-team.webp` / `inventory-team.webp` photo. Different layout from section 3.
7. `faq`, 1 screen: the calm section (5 to 6 questions; what MRA EIS work involves, hardware, existing systems, support, timeline-free scope wording).
8. `footer.closing`: close-type ("Request a consultation" big button) + footer-statement links and legal row.

### `/solutions`

hero collage (the solutions overview window cut by its frame, one result card looping) · three paths (Operate, Modernize, Create) as one section, click-only tabs allowed on software · all five solutions list with existing images (one screen or `.g2`) · engagement model as steps or a diagram card (different layout from home) · its dealt moment in its own section · footer.closing. Every section one or two screens, h2 first.

### `/solutions/pos-eis`

hero split (text left, a POS window right, the `retail-pos-payment.webp` photo may be the picture instead if the window lives in the next section; never both mid-size) · workflow (the five steps, concept disclaimer as a plain line inside the section text, not under a visual) · checkout (POS fragments) · card payments (photo `solution-cards/card-payments.webp` + payment-state fragment) · EIS (invoice fragment with submission states; "Keys stay on the server") · its dealt moment · faq or calm section · footer.closing. Respect "object whole: hero + two more sections at most".

### `/contact`

hero triptych · enquiry section (`booking-form` pattern, prototype note as one plain line above the submit, success state only after a real local "send") · its dealt moment if it fits, else a short page per `sections.md` section 4 · footer.closing.

### `not-found`

Kit hero (statement), plain copy, link home. Not gate-checked.

## Checks (in order, all from the project folder, dev server on http://localhost:3000)

Run `npm run dev` in the background. Then, one at a time in the foreground, 10-minute timeout, profile `.taste-skill/chrome-check`, for **each** of the four URLs:

```bash
S=/Users/kabwe/.claude/skills/design-taste-frontend-v2
node $S/scripts/copy-lint.mjs <built html or URL> --kind software
node $S/scripts/consistency.mjs <URL> --widths 1440,1024,820,768,390 --rhythm-widths 1440,820,768,390 --profile .taste-skill/chrome-check --page software --category "POS software, card machines and MRA EIS electronic invoicing" --primary "Request a consultation"
node $S/assets/layout/check.mjs --url <URL> --profile .taste-skill/chrome-check --sizes 1440x900,1024x768,820x1180,768x1024,390x844 --shots .taste-skill/shots/<page>
node $S/scripts/shoot.mjs --url <URL> --w 1440 --out .taste-skill/shots/<page>-1440.png --profile .taste-skill/chrome-check
node $S/scripts/perf.mjs <URL> --profile .taste-skill/chrome-check
```

Then `node $S/scripts/gate.mjs http://localhost:3000/` (armed on the home page) until `GATE: PASS` or `GATE: OPEN`, three rounds at most. Also `npm run lint`, `npm run typecheck`, `npm run build` must pass. Add `.taste-skill/` to `.gitignore` except `waivers.json` and `names.json` if created.

Copy the home hero tile from `shoot.mjs` to `public/share.jpg` and point the og image at it.

## Report back

The `GATE:` line, every waiver and its reason, every open FAIL, the voice card in one line, copy-lint WARNs kept and why, checker/layout/perf results per page, assumed facts, stand-in photographs added (with source and licence), anything you could not check.
