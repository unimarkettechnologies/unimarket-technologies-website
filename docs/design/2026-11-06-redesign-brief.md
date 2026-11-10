# Redesign brief, 6 November 2026

Companion to `2026-11-06-impeccable-audit.md`. This is the working contract for the implementation pass and the review pass. The palette, the Inter typeface and every AI-generated photograph and dashboard image stay. What changes is structure, chrome, motion, responsiveness, asset weight and copy.

## Design plan

### Colour (unchanged, with two tokens added)

| Name | Hex | Use |
|---|---|---|
| Navy | `#073071` (`brand-950`) | Dark panels, inverse buttons' text |
| Ink blue | `#071B3A` (new `--brand-ink`) | Dark gradient end, dark card scrim |
| Primary | `#1652A6` (`brand-700`, `--primary`) | Buttons, links, active markers |
| Accent | `#3470B3` (`brand-600`) | Small labels on white, step numerals |
| Pale | `#F4F9FD` (`brand-50`) | Pale sections, card base |
| Canvas | `#F7F9FC` (new `--canvas`) | Alternate sections, replaces `bg-[#f7f9fc]` |
| Ink | `#111F31` (`--foreground`) | Text |

Primary blue covers 10 to 20% of a light page. Navy panels are punctuation: one per page at most, plus the POS hero.

### Type

Inter, variable (no `weight` array in `next/font`), weights used: 400, 500, 600, 700. One family, no second face.

| Role | Size | Weight | Line height | Tracking |
|---|---|---|---|---|
| Display (h1) | `clamp(2.5rem, 1.6rem + 3.6vw, 4.5rem)` | 700 | 1.04 | `-0.03em` |
| Section (h2) | `clamp(1.875rem, 1.3rem + 2vw, 2.75rem)` | 700 | 1.1 | `-0.025em` |
| Card / step (h3) | `1.25rem` to `1.5rem` | 600 | 1.25 | `-0.015em` |
| Lead | `1.125rem` to `1.25rem` | 400 | 1.6 | `-0.01em` |
| Body | `1rem` | 400 | 1.65 | `-0.01em` |
| Small | `0.875rem` | 400 / 500 | 1.55 | 0 |

No uppercase labels. No letter-spaced labels. No eyebrows. Headings carry their own sections. Body measure 60 to 70 characters (`max-w-[62ch]` on paragraphs, `max-w-[20ch]` to `[24ch]` on display headings).

### Layout concept

Left-aligned, editorial, one strong composition per page.

```
HOME (desktop)
+------------------------------------------------------------------+
| logo                       Home Solutions POS+EIS Contact  [CTA] |
+------------------------------------------------------------------+
| Business technology                                              |
| built around how                                                 |
| you actually work.                 (lead paragraph, 2 CTAs)      |
|                                                                  |
| +------------------------------------------------------------+   |
| |  photo: cashier + customer, 16:9, full container width      |   |
| |                                                            |   |
| |  +---------------------------------+                       |   |
| |  | dashboard image, ~62% width,    |   subject stays       |   |
| |  | anchored lower-left, overlaps   |   visible on right    |   |
| +--|  the frame edge by ~96px        |-----------------------+   |
|    +---------------------------------+                           |
|                                                                  |
| What we build                                                    |
| (sentence lead, max 62ch)                                        |
| +-------------+-------------+-------------+-------------+        |
| | POS         | Card        | MRA EIS     | Enterprise  |  <-    |
| | software    | machines    |             | software    |  hover |
| | (image)     | (image)     | (image)     | (dark)      |  grows |
| +-------------+-------------+-------------+-------------+        |
|                                                                  |
| +------------------------------------------------------------+   |
| | navy panel: closing invitation + one CTA                    |   |
| +------------------------------------------------------------+   |
| footer: logo + address | Explore | Capabilities        (c) 2026   |
+------------------------------------------------------------------+
```

```
HOME (phone, 390)
+-------------------+
| logo         [≡]  |  64px
+-------------------+
| Business          |
| technology built  |
| around how you    |
| actually work.    |
| lead              |
| [Request a consultation]
| [Explore solutions]
| +---------------+ |
| | photo 4:3     | |
| |   +-----------+-+
| +---| dashboard 86% width, anchored left, overlap 24px
|     +-------------+
| What we build     |
| +---------------+ |
| | POS (22rem)   | |
| +---------------+ |
| | Card machines | |
| ...               |
```

At 640 to 1023 px the card row is a 2×2 grid; the hover expansion is desktop-only (`lg:` and `(hover: hover)`).

Solutions page: split hero stays (text left, photo right). The three paths (Operate, Modernize, Create) become the tab headings themselves. The duplicated four-card row is replaced by a compact list of all five solutions: image thumbnail 4:3 at 160 px, title, one sentence, link; two columns from 768 px.

POS page: dark hero stays. The five-step workflow keeps its numerals (1 to 5, in `brand-700`, no zero padding) because it is a sequence, and gets the page's one authored motion: the connecting line draws once when the section enters view and the steps fade in order.

Contact page: hero text left-aligned over a short band; the form sits in a centred `max-w-3xl` column inside `.site-container`.

### Principles

1. The headline does the work the eyebrow used to do. If a section needs a label to be understood, the heading is wrong.
2. Structure encodes information: numerals only on real sequences, rules only between distinct groups, borders only where a surface is interactive or inset.
3. One authored motion per page (home hero entrance, POS workflow draw); everything else is feedback that answers a pointer, a key or a tap.
4. Photographs are evidence. Scrims cover only the text area; at least the lower 45% of every card image stays legible at every breakpoint.
5. Copy states what the company does in plain sentences. No contrasts with a straw man, no padded lists, no promises the brief marks as unverified.

### Review against defaults

- The first draft of this plan centred the hero and kept a pill badge above the final CTA. Both are the SaaS default for this brief, so the hero is now left-aligned with the composition as the wide moment, and the badge is gone.
- The first draft kept `ArrowRight` on every CTA. Now only the primary CTA of each page carries one.
- The grid-line hero background is removed rather than restyled; the brand's "connection" idea is carried by the drawn workflow line on the POS page instead, where it means something.
- The card numerals were nearly kept "for rhythm". Rhythm comes from spacing; the numerals go.

## Work packages (in order)

### 1. Optimize

- `src/app/globals.css`: delete the `@import url('https://googleapis.com');` line.
- `src/app/layout.tsx`: Inter only, variable weight (omit `weight`), keep `display: 'swap'`, keep `variable: '--font-inter'`.
- Assets, keeping every original picture:
  - `public/images/commerce-dashboard.png` to `public/images/commerce-dashboard.webp`, 2000 px wide, quality 82 (`cwebp -q 82 -resize 2000 0`). Update both references and the `width`/`height` props. Move the PNG to `private/originals/` (untracked).
  - `public/logos/unimarket-logo-horizontal.png` to a 480 px wide PNG `public/logos/unimarket-logo-horizontal-480.png` for the header; keep the original for print.
  - Regenerate `public/favicons/unimarket-logo-{16,32,48,64,128,180,256}.png` at their real sizes from `public/logos/logo-design-1-no-bg.png` with `sips -z N N`. Regenerate `public/favicons/favicon.ico` from the 16/32/48 PNGs with `magick`. Remove the stray 504 KB `favicon.ico` at the repo root if it is identical to the one in `public/favicons/`.
- `priority` on the hero photograph only. The dashboard image uses `loading="eager"` without `priority` on the home page and keeps `priority` on the POS page where it is the only hero image.
- Header: `backdrop-blur-md bg-white/85`.
- Cards: `contain: layout paint;` on `.expanding-card`; `will-change: grid-template-columns` only on `.expanding-card-row:has(.is-active)`.

### 2. Layout

- `SectionHeading`: remove `eyebrow`. Props: `title`, `description?`, `align?`, `inverse?`, `as?` (`'h1' | 'h2'`). Description `max-w-[62ch]`.
- `Badge`: keep the component for the POS hero ("Concept") only; remove every other usage.
- Home: left-aligned hero, headline and lead per copy below, composition per wireframe. Section title "What we build". Remove the numerals from `ExpandingImageCards`. Closing panel without the badge.
- Solutions: tabs show the path name as the title (Operate, Modernize, Create) and the sentence as description, sentence case, no tracking. Panel label "Included" in `text-sm font-semibold`, no caps. Replace the second card row with the five-solution list described above. Closing panel without the `CircleDot` line.
- POS: steps are `h3`; numerals `1` to `5` in `brand-700` at 14 px semibold; EIS readiness labels sentence case; remove the "Payments" and other eyebrows.
- Contact: hero text left-aligned, form in a contained `max-w-3xl` column.
- Header 64 px on phones, 72 px from `lg`; logo 160 px / 184 px; nav links `min-h-11`.
- Footer: logo, two-line address (no middle dot), "Send an enquiry" link to `/contact` in place of the email placeholder, Explore and Capabilities columns, copyright line only. Links `min-h-11 inline-flex items-center`.
- Tokens: add `--canvas` and `--brand-ink` to `globals.css` and `tailwind.config.ts`; replace the hard-coded values listed in the audit.
- `h1` tracking `-0.03em`.
- 404: "Page not found" without the middle dot.

### 3. Motion

- Easing tokens: `--ease-out: cubic-bezier(0.16, 1, 0.3, 1)` for arrivals, `--ease-standard: cubic-bezier(0.65, 0, 0.35, 1)` for state changes.
- Home hero entrance (only authored moment on Home, runs once on load): headline, lead and CTA row fade in with a 12 px rise, 400 ms, stagger 80 ms (total under 300 ms of delay); the photo frame reveals with `clip-path: inset(0 0 100% 0)` to `inset(0)`, 700 ms `--ease-out`, starting at 120 ms; the dashboard rises 24 px and fades in, 600 ms, starting at 320 ms. Implement with CSS keyframes on classes applied in server markup so content is visible if JS fails (default state visible; animation starts from the hidden keyframe).
- POS workflow (only authored moment on that page): an SVG line between the five step icons draws with `stroke-dashoffset` over 900 ms when the section enters the viewport (IntersectionObserver, once); steps fade in 300 ms at 120 ms intervals. Below `lg` the line is hidden and steps simply fade in.
- Buttons: colour and shadow change only; remove the `-translate-y-0.5` lift. Active state scales to 0.98 for 100 ms.
- Expanding cards: keep the column expansion at 320 ms `--ease-standard`; reveal the detail with `grid-template-rows: 0fr` to `1fr` instead of `max-height`; image scales 1.03 on the active card; arrow rotates as now.
- Mobile menu: `grid-template-rows: 0fr` to `1fr` over 240 ms with opacity; lock body scroll while open; move focus to the first link on open and back to the toggle on close.
- Category tabs: keep the 250 ms crossfade; the active marker scales from the centre as now.
- Reduced motion: replace the global 0.01 ms rule. Under `prefers-reduced-motion: reduce`: hero elements render in their final state with a 200 ms opacity fade only; the workflow line is drawn immediately; card columns do not animate but the detail still fades in over 150 ms; the menu toggles with a 150 ms opacity fade; no transforms anywhere.

### 4. Adapt

- Card row: 1 column under 640 px, 2 columns from 640 px, 4 from 1024 px. Card `min-height` 22 rem under 1024 px, 30 rem from 1024 px. Scrim: a gradient that covers the top 55% of the card and leaves the rest clear; on dark cards the scrim is `--brand-ink` based.
- Hover expansion only under `@media (hover: hover) and (min-width: 1024px)`. With touch the cards are equal and tapping navigates.
- Hero stack per the phone wireframe; under 640 px the photo is 4:3 and the dashboard overlaps by 24 px at 86% width, anchored left.
- Footer: 1 column under 640 px, 3 columns from 768 px.
- Touch targets: nav links, footer links, mobile menu items, the form checkbox row and the card arrow all at or above 44 px.
- `viewport-fit=cover` in the viewport export and `padding-bottom: max(1rem, env(safe-area-inset-bottom))` on the open mobile menu.

### 5. Copy (humanize)

Rules: sentence case; plain verbs; no em dashes; no "not X, but Y" contrasts; no padded triads; no promotional adjectives; no claims the brief marks as unverified (no reply times, client counts, accreditation). Keep the "concept" and "prototype" disclaimers, written plainly. Keep product nouns exact: POS, MRA EIS, card machines.

Approved copy (use verbatim; fill the rest in the same voice):

- Home h1: "Business technology built around how you actually work."
- Home lead: "Unimarket Technologies designs and builds POS systems, electronic invoicing for MRA EIS, enterprise software, websites and full-stack applications for businesses in Malawi."
- Home CTAs: "Request a consultation", "See our solutions".
- Home section h2: "What we build". Lead: "Start with the part of the business that hurts most. Each of these works on its own and connects to the others when you are ready."
- Home closing h2: "Tell us what your business needs next." Lead: "Bring the workflow, the problem or the product idea. We will help you decide the first step." CTA: "Request a consultation".
- Solutions h1: "Solve the operating problem first. The software follows." Lead: "We combine business analysis, product design, engineering, integration and support so the finished system works as one."
- Solutions paths: "Operate: run the day with clear information." "Modernize: replace scattered tools with one connected system." "Create: turn an idea into a working digital product."
- Solutions engagement h2: "Clear scope before code. Support after launch."
- Solutions closing h2: "Start with the friction your team feels every day." Lead: "Tell us what is slow, duplicated or unclear. We will suggest the right first engagement after we understand the workflow." CTA: "Tell us what is not working".
- POS h1: "One retail workflow from checkout to reporting." Lead: "The point of sale, the card payment, stock movement, electronic invoicing and the reports managers need, connected in one flow."
- POS workflow h2: "Every sale moves the business forward." Disclaimer: "This workflow is a concept. Live behaviour depends on current MRA requirements, the payment provider and the hardware in use."
- POS checkout h2: "A checkout built for a busy counter." Lead: "Fast for the cashier, informative for the owner, and never an accounting exercise at the till."
- POS payments h2: "Card machines that belong to the workflow." Lead: "The physical payment and the software state are designed together, so staff and customers always know what happened."
- POS EIS h2: "Electronic invoicing planned around the rules that apply." Lead: "MRA EIS is a compliance and operations workflow. We map it before we build it."
- POS closing h2: "Define the retail and invoicing workflow before choosing the implementation." CTA: "Request a solution workshop".
- Contact h1: "Tell us what you want to build, replace or fix." Lead: "A few sentences about the business and the problem are enough. We will come back with a suggested next step."
- Form heading: "Your enquiry". Note: "This form is a prototype. It checks your details but does not send them anywhere yet."
- Form success h2: "Your details are ready to send." Body: "This is a preview, so nothing was sent. The contact inbox will be connected before launch."
- Footer line: "Business technology designed, built and supported around the way your organisation works."
- 404 h1: "That page is not here." Body: "The prototype has four pages. Go back home or look at the solutions overview."
- Site description (metadata): "Unimarket Technologies designs and builds POS, MRA EIS electronic invoicing, enterprise software, websites and full-stack applications for businesses in Malawi."

## Acceptance

- `npm run lint`, `npm run typecheck` and `npm run build` pass.
- `impeccable detect --json src` returns no unexplained finding.
- Captures at 1440, 768 and 390 px show: no horizontal overflow, the hero subject visible on every width, card images legible in their lower half, the contact form contained, no eyebrows, numerals or tracked caps anywhere except the POS workflow numerals.
- Keyboard: Tab reaches every control; Escape closes the menu; focus returns to the toggle; card detail reveals on focus.
- `prefers-reduced-motion: reduce` leaves every state change visible.
