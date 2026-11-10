import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { primaryAction, siteConfig } from '@/config/site';


/*
  The tasteskill 2.5 kit (public/assets, a plain copy of the skill's assets folder) is the design system:
  its stylesheets load in the order start.mjs printed, then the dealt :root block, then the page CSS
  (public/site.css, linked last so it follows the kit). Its scripts (system.js, motion.js, layout.js, diagrams/mount.js) run after React has
  hydrated (next/script afterInteractive), so the DOM they change is never one React still has to check.
  Every route links with a plain <a>, so each page loads whole and the kit starts on it once.
*/

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Unimarket Technologies: POS and MRA EIS software for businesses in Malawi',
    template: '%s',
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicons/unimarket-logo-32.png',
    apple: '/favicons/unimarket-logo-180.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MW',
    siteName: siteConfig.name,
    images: [{ url: '/share.jpg', width: 1200, height: 630, alt: 'Unimarket Technologies home page' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/share.jpg'],
  },
  robots: { index: true, follow: true },
  other: {
    'page-type': 'software',
    'site-kind': 'software',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f7f9fc',
  colorScheme: 'light',
};

// --p-muted: printed #4a5a70 read 6.66:1 and 6.18:1 for lead text (7:1 needed); darkened to #3d4c61 (8.28:1, 7.68:1)
const palette = `:root {
  --p-bg: #f7f9fc; --p-surface: #eaf1fa; --p-ink: #111f31; --p-muted: #3d4c61;
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
}`;

const enterLine =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)";
const momentsLine =
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)";

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  address: { '@type': 'PostalAddress', streetAddress: 'Victoria Avenue', addressLocality: 'Blantyre', addressCountry: 'MW' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      data-buttons="arrow"
      data-ground="sand"
      data-motion=""
      data-radius="soft"
      data-type="software"
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@400..700&family=Funnel+Sans:wght@400..600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link href="/assets/system.css" rel="stylesheet" />
        <link href="/assets/ui/cards.css" rel="stylesheet" />
        <link href="/assets/motion/motion.css" rel="stylesheet" />
        <link href="/assets/backgrounds/backgrounds.css" rel="stylesheet" />
        <link href="/assets/layout/layout.css" rel="stylesheet" />
        <link href="/assets/icons/icon.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: palette }} />
        <link href="/assets/ui/base.css" rel="stylesheet" />
        <link href="/assets/ui/window/fragment.css" rel="stylesheet" />
        <link href="/assets/ui/notify/fragment.css" rel="stylesheet" />
        <link href="/assets/ui/checklist/fragment.css" rel="stylesheet" />
        <link href="/assets/diagrams/diagram.css" rel="stylesheet" />
        {/* the page CSS (inside visuals, one --p-h per card group, the tablet rules) after the kit, so it wins ties */}
        <link href="/site.css" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: enterLine }} />
        <script src="/assets/backgrounds/backgrounds.js" />
        <script dangerouslySetInnerHTML={{ __html: momentsLine }} />
        <link href="/assets/moments/moments.js" rel="modulepreload" />
        <link href="/assets/moments/lib.js" rel="modulepreload" />
      </head>
      <body suppressHydrationWarning>
        {/* type: software · site-kind software
            deal: hero centred (home), collage (/solutions), split (/solutions/pos-eis), triptych (/contact);
            palette: client blues through start.mjs brand; pairing funnel; radius soft; nav nav-centre;
            footer footer-statement; close close-type; rhythm surface-pairs; buttons arrow; mark: the client's logo;
            ground sand; effect fluted-glass in the home hero frame; no CSS grounds, no scene
            moments: home letters-assemble (#statement) and iris-opens (#connects); /solutions line-carries-colour;
            /solutions/pos-eis pinned-chapters; /contact marquee-row */}
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        {/* the phone action bar (system.md, Nav): under 640px the nav's button moves into the sheet and this bar carries
            the main action once the hero's button has scrolled away; system.js shows and hides it */}
        <nav aria-label="Quick actions" className="actionbar">
          <a className="btn btn--primary" href={primaryAction.href}>
            {primaryAction.label}
          </a>
        </nav>
        <Script src="/assets/system.js" strategy="afterInteractive" type="module" />
        <Script src="/assets/motion/motion.js" strategy="afterInteractive" type="module" />
        <Script src="/assets/layout/layout.js" strategy="afterInteractive" type="module" />
        <Script src="/assets/diagrams/mount.js" strategy="afterInteractive" type="module" />
      </body>
    </html>
  );
}
