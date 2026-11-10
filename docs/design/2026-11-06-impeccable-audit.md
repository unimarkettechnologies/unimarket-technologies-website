# Impeccable audit, 6 November 2026

Scope: the four prototype pages (Home, Solutions, POS + MRA EIS, Contact), the shared header and footer, `src/app/globals.css`, `tailwind.config.ts`, and the image assets under `public/`. Evidence comes from source reading, the Impeccable mechanical detector, and Playwright captures at 1440, 768 and 390 px (desktop, tablet with touch, iPhone 14 emulation) taken from `next dev` on Chrome.

## Current palette and type (as implemented)

| Token | Value | Role |
|---|---|---|
| `brand-950` | `#073071` | Deep navy, dark panels |
| `brand-800` | `#104896` | Hover on primary, active nav text |
| `brand-700` | `#1652A6` | Primary action (`--primary` is `hsl(215 83% 34%)`, the same blue) |
| `brand-600` | `#3470B3` | Secondary accent, small labels |
| `brand-500` | `#3E80C3` | Highlights, numerals on dark |
| `brand-100` | `#DBEAF8` | Selection, soft fills |
| `brand-50` | `#F4F9FD` | Pale section background |
| `--foreground` | `hsl(215 49% 13%)` ≈ `#111F31` | Body text |
| `--muted-foreground` | `hsl(215 16% 43%)` ≈ `#5C6B7F` | Secondary text |
| `--border` | `hsl(214 28% 89%)` ≈ `#DCE3EB` | Rules and input borders |
| Dark panel | `#073071` to `#071B3A` gradient | Hero on POS page, closing CTA panels |
| Canvas | `#F7F9FC` (hard-coded) | Alternate sections |

Type: Inter only, loaded at six weights (400 to 900). Four other families (Poppins, Montserrat, Raleway, Roboto Slab) were imported in `layout.tsx` and never applied.

## Audit health score

| # | Dimension | Score | Key finding |
|---|---|---|---|
| 1 | Accessibility | 2 | Global reduced-motion kill, no `autocomplete` on the enquiry form, two small-text contrast failures |
| 2 | Performance | 1 | Dev server returns 500 from an unused font import; broken `@import`; layout-property animations; oversized sources |
| 3 | Theming | 3 | Token system is sound; a dozen hard-coded hex values leak around it |
| 4 | Responsive | 2 | Contact form card escapes the container; hero overlap and 31 rem card stack on phones |
| 5 | Implementation integrity | 1 | Eyebrow badge above every heading, decorative numerals, tracked all-caps labels, arrow glyphs on every link |
| | **Total** | **9/20** | **Poor: major overhaul** |

## Implementation integrity verdict

Fail. The structure is interchangeable with any SaaS template: a centered hero with a single accent-coloured phrase, a row of identical rounded cards with `01` to `04` markers, a dark closing panel with a pill badge, and a footer that lists the build stack. Every `SectionHeading` requires an `eyebrow`, so every section opens with a pill label such as "Solutions", "Capabilities" or "Payments" that repeats the heading beneath it. The Solutions page repeats the Home page's four cards verbatim. The detector flags one deterministic finding (the hairline grid background in `.hero-grid`); the rest is template chrome that no detector catches but any designer sees. What is product-specific survives in the imagery, the copy about MRA EIS, and the expanding-card interaction. Those are worth keeping.

The "monospace labels" the team noticed are the tracked all-caps labels (`uppercase tracking-[0.12em]` to `tracking-[0.14em]`) in the category tabs, the "What this includes" panel and the EIS readiness card, plus the `01` to `04` numerals on cards. No `font-mono` is set anywhere; the letter-spaced caps read as code labels.

## Executive summary

- Audit health score: **9/20** (Poor).
- Issues: 2 P0, 11 P1, 12 P2, 4 P3.
- Top problems:
  1. `next dev` returns HTTP 500. Turbopack fails on the unused `Roboto_Slab` import in `src/app/layout.tsx` ("next/font/google queries have exactly one entry"). Trimmed to Inter during this audit so screenshots could be taken; the trim must stay.
  2. `globals.css` opens with `@import url('https://googleapis.com');`, a render-blocking request to a bare domain that returns nothing.
  3. The enquiry card on `/contact` sits outside `.site-container`, so the form runs edge to edge at 1440 px.
  4. Template chrome on every section: eyebrow pills, decorative numerals, tracked caps labels, arrow glyphs, footer stack credits, placeholder copy ("Contact email to be confirmed") shipping to visitors.
  5. The reduced-motion rule sets every transition to 0.01 ms, which also removes the feedback that tells a keyboard user a card expanded or a menu opened.
- Next steps: `/impeccable layout`, `/impeccable animate`, `/impeccable adapt`, `/impeccable optimize`, `/impeccable clarify` (copy), then `/impeccable polish`.

## Detailed findings

### P0 Blocking

**[P0] Dev server fails to compile the root layout**
Location: `src/app/layout.tsx`, font imports.
Category: Performance / build.
Impact: `next dev` responds 500 on every route under Turbopack; the site cannot be previewed.
Recommendation: import only Inter. Prefer the variable font (omit `weight`) or limit to 400, 500, 600 and 700. Already applied for this audit; keep it.
Command: `/impeccable optimize`.

**[P0] Contact form escapes the page container**
Location: `src/app/contact/page.tsx`, the `Card` after the hero.
Category: Responsive.
Impact: at desktop widths the card touches both viewport edges and inputs stretch to 700 px each.
Recommendation: wrap the card in `.site-container` with a `max-w-3xl` centred column.
Command: `/impeccable layout`.

### P1 Major

**[P1] Broken `@import` at the top of the stylesheet**
Location: `src/app/globals.css:1`.
Category: Performance.
Impact: a blocking network request for a stylesheet that does not exist, before any Tailwind layer loads.
Recommendation: delete the line. Fonts are already self-hosted by `next/font`.

**[P1] Reduced-motion rule destroys state feedback**
Location: `src/app/globals.css`, `@media (prefers-reduced-motion: reduce)`.
Category: Accessibility. WCAG 2.3.3.
Impact: card expansion, menu open and tab crossfade snap with no acknowledgement.
Recommendation: replace the global kill with per-effect alternatives: remove spatial movement and clip reveals, keep opacity and colour transitions at 150 ms or less.

**[P1] Animated layout properties**
Location: `.expanding-card-row` (`grid-template-columns`), `.expanding-card-detail` (`max-height`).
Category: Performance.
Impact: every hover across the four-card row relayouts four image cards per frame; visibly judders on mid-range laptops and tablets with pointers.
Recommendation: keep the expansion, but reveal detail with `grid-template-rows: 0fr / 1fr`, add `contain: layout paint` on cards, and set `will-change: grid-template-columns` only while a card is active. Measure after.

**[P1] Eyebrow label above every heading**
Location: `src/components/section-heading.tsx` (required `eyebrow` prop), all four pages.
Category: Implementation integrity.
Impact: eleven pills repeat the heading or the CTA label ("Request a consultation" above an h1 that invites a consultation).
Recommendation: drop the prop. Where the label named a category (Operate, Modernize, Create) make it the heading.

**[P1] Decorative numerals on non-sequential cards**
Location: `src/components/expanding-image-cards.tsx` (`0{index + 1}`).
Category: Implementation integrity.
Impact: the cards are parallel options, not steps; numbers imply an order that does not exist. `brand-500` at 12 px on white measures about 4.1:1, under the 4.5:1 floor.
Recommendation: remove. Keep the numbers on the POS workflow, which is a real sequence, and render them in `brand-700`.

**[P1] Tracked all-caps labels**
Location: `category-content-showcase.tsx:90,155`, `solutions/pos-eis/page.tsx:233`.
Category: Implementation integrity / Typography.
Impact: reads as code chrome; these are the labels the team called "monospace".
Recommendation: sentence case at 14 px, weight 600, no tracking.

**[P1] Placeholder and build credits shipping in the footer**
Location: `src/components/site-footer.tsx`.
Category: Implementation integrity / Copy.
Impact: visitors read "Contact email to be confirmed", a hard-coded "v1.0.0.0004" (package.json says 1.0.0, release notes say 0006), and "Next.js + React.js · TypeScript · Tailwind CSS · shadcnui · Nuxt.js cues".
Recommendation: remove the stack line and the version; replace the email placeholder with a link to the enquiry form until an address is confirmed.

**[P1] Enquiry form has no `autocomplete` and no inline error messages**
Location: `src/components/contact-form.tsx`.
Category: Accessibility. WCAG 1.3.5, 3.3.1.
Impact: browsers cannot fill name, organisation, email or phone; validation relies on the native bubble only.
Recommendation: add `autocomplete="name|organization|email|tel"`, inline messages tied by `aria-describedby`, `aria-invalid` on failure, focus the first invalid field.

**[P1] Secondary text below contrast floor**
Location: `category-content-showcase.tsx` inactive descriptions (`text-muted-foreground/70`, about 2.9:1).
Category: Accessibility. WCAG 1.4.3.
Recommendation: use full `text-muted-foreground` and signal inactivity through the title weight and marker only.

**[P1] Hero phrase accent and arrow glyphs**
Location: `src/app/page.tsx` h1 (`<span className="text-primary">better solutions.</span>`), every `Button` and footer link appending `ArrowRight` or `ArrowUpRight`.
Category: Implementation integrity.
Impact: two of the commonest generated-page tells, on every page.
Recommendation: rewrite the headline without the coloured phrase; keep an arrow only on the single primary CTA per page, or none.

**[P1] Heading levels on the POS page**
Location: `solutions/pos-eis/page.tsx` workflow steps use `h2` under an `h2` section title.
Category: Accessibility. WCAG 1.3.1.
Recommendation: steps become `h3`.

### P2 Minor

**[P2] Oversized image sources**
`public/logos/unimarket-logo-horizontal.png` is 2170×725 (1.2 MB) for a 221 px slot; `public/images/commerce-dashboard.png` is 3420×1972 (719 KB) and marked `priority` on two pages alongside a second `priority` photo; the seven favicon PNGs are all the same 537×537 file (136 KB each) and `favicon.ico` is 504 KB. `next/image` resizes at request time, but the first byte and build cost still carry the originals.
Recommendation: export the dashboard as WebP at 2000 px wide (quality 82), export the header logo at 480 px, generate real 16 to 256 px favicons from `logo-design-1-no-bg.png`, give `priority` to the hero photo only. Keep the originals outside `public/` if they are still wanted.

**[P2] Six Inter weights**
Only 400, 500, 600 and 700 are used. Load the variable font or those four.

**[P2] Hard-coded colours outside tokens**
`.dark-panel` hex gradient, `bg-[#f7f9fc]`, `bg-[#071b3a]/90`, `from-[#06172f]`, `accent-[#1652A6]`, `border-slate-200/90`, `text-slate-600`, emerald and amber in the success state. Add `--canvas` and `--brand-ink` (`#071B3A`) tokens and point these at them.

**[P2] Header height and logo**
88 px sticky header with a 221 px logo takes 10% of a phone viewport. 64 px on phones, 72 px on desktop, with a 160 to 184 px logo, is enough.

**[P2] Hero stack on phones and tablets**
The dashboard overlaps the photo at 92% width and `-mt-10`, covering the subject's hands. Offset the dashboard to the lower-left at about 80% width so the cashier stays visible, and give it less overlap under 640 px.

**[P2] Solution cards on phones**
Four cards at `min-height: 31rem` stack into 2,000 px of scrolling; the dark card's image disappears under its gradient. Use two columns from 640 px, shorter cards under 1024 px, and a scrim that stops at 55% so the lower half of the image stays legible.

**[P2] Grid-line hero background**
Detector finding `codex-grid-background` in `.hero-grid`. Either remove it or make it the single brand motif derived from the circuit monogram and use it nowhere else.

**[P2] Sticky header `backdrop-blur-xl`**
Full-width 24 px blur recomputed on every scroll frame. `backdrop-blur-md` with `bg-white/85` reads the same and costs a third.

**[P2] Mobile menu has no transition, no scroll lock, no focus move**
Open and close snap; the page scrolls behind the open menu.

**[P2] Solutions page repeats the Home cards**
The same four `ExpandingImageCards` appear on both pages with the same copy. Give the Solutions page a different, denser treatment of all five solutions.

**[P2] Footer link targets**
Text-only links at 14 px with 12 px gaps give about 20 px targets. Give each link a 44 px minimum height.

**[P2] Copy carries generated-text patterns**
Em-dash contrasts ("Clarity before code—and support after launch", "in the workflow—not beside it", "not a decorative feature toggle"), negative parallelisms ("the operational problem, not just the software request"), triads padded to four ("improve, replace, connect, or launch"), promotional filler ("We make anything possible and reachable"), and a stray comma ("software, or hardware needs"). Rewrite in plain sentences without adding claims.

### P3 Polish

- `h1` tracking at `-0.055em` is past the `-0.04em` floor; `tracking-[-0.03em]` is enough at 72 px.
- Middle dots in "404 · Page not found" and the footer address.
- `CommerceDashboard` component is unused since the dashboard image replaced it.
- `tsconfig.tsbuildinfo` is committed.

## Patterns and systemic issues

- Template chrome is systemic, not local: the eyebrow is enforced by the `SectionHeading` API, the numeral by the card component, the arrow by habit in every CTA. Fixing the two components removes most of it.
- Motion is scattered feedback (button lift, card scale, arrow rotate, image zoom) with no authored moment, and the reduced-motion rule removes the feedback along with the decoration.
- Image sources are untouched exports; `next/image` hides the cost but does not remove it.

## Positive findings

- Token layer and `cn` discipline are good; the palette is coherent and the brand blue holds up on white and navy.
- Semantic landmarks, skip link, visible `:focus-visible` outline and keyboard-operable tabs with roving `tabIndex` are already in place.
- Alt text is specific and the generated photography is consistent in tone, colour and subject.
- The expanding-card row and the category showcase are the two product-specific interactions; both are worth keeping and tuning.
- No horizontal overflow at 390, 768 or 1440 px.

## Recommended actions

1. **[P0] `/impeccable optimize`**: keep the Inter-only layout, delete the broken `@import`, reduce weights, re-export the dashboard, logo and favicons, single `priority` image.
2. **[P0/P1] `/impeccable layout`**: contain the contact card, remove eyebrows and numerals, make headings carry the sections, rework the hero stack, give Solutions its own capability treatment, shrink the header.
3. **[P1] `/impeccable animate`**: one authored hero entrance, feedback-only transitions elsewhere, per-effect reduced-motion alternatives, `grid-template-rows` reveal in cards, animated mobile menu.
4. **[P1] `/impeccable adapt`**: two-column cards from 640 px, shorter cards under 1024 px, 44 px targets in the footer and nav, scroll lock on the open menu.
5. **[P1] `/impeccable clarify`** (with `/humanize`): rewrite copy across `site.ts`, the four pages, the footer, the form and the 404.
6. **[P2] `/impeccable polish`**: final pass after the above.

Re-run `/impeccable audit` after fixes to see the score move.
