export const siteConfig = {
  name: 'Unimarket Technologies',
  description:
    'Unimarket Technologies builds POS software, card machine set-ups and MRA EIS electronic invoicing for shops and businesses in Malawi, from Victoria Avenue in Blantyre.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://unimarkettechnologies.com',
  /** Stand-in until the owner supplies a real inbox (rule 9: contacts on .example). */
  email: 'hello@unimarket.example',
} as const;

/** The one main action: word for word in the nav, every hero and the close, nowhere else as a filled button. */
export const primaryAction = {
  label: 'Request a consultation',
  href: '/contact#enquiry',
} as const;

/** Nav words (nav-centre): plain one-word nouns, each to its own page or section. */
export const navigation = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'POS', href: '/solutions/pos-eis' },
  { label: 'EIS', href: '/solutions/pos-eis#eis' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * The five solutions. `href`/`label` serve the home cards; `listHref` the Solutions page list and the nav menu.
 * Every photograph is the client's own file.
 */
export const solutions = [
  {
    id: 'pos',
    title: 'POS software',
    description: 'Sales, stock, staff permissions and the day’s report in one till.',
    menuLine: 'Sell, count stock, close the day',
    href: '/solutions/pos-eis#checkout',
    label: 'See the checkout',
    listHref: '/solutions/pos-eis#checkout',
    image: '/images/solution-cards/pos-software.webp',
    imageAlt: 'A shop worker using point-of-sale software at a checkout',
  },
  {
    id: 'card-machines',
    title: 'Card machines',
    description: 'The card payment is recorded against the sale it pays for, with its reference.',
    menuLine: 'Card payments tied to each sale',
    href: '/solutions/pos-eis#payments',
    label: 'See card payments',
    listHref: '/solutions/pos-eis#payments',
    image: '/images/solution-cards/card-payments.webp',
    imageAlt: 'A customer tapping a card on a handheld payment terminal',
  },
  {
    id: 'mra-eis',
    title: 'MRA EIS invoicing',
    description: 'Each invoice goes to MRA EIS from the sale, with its state on screen.',
    menuLine: 'Invoices sent from the sale',
    href: '/solutions/pos-eis#eis',
    label: 'See EIS invoicing',
    listHref: '/solutions/pos-eis#eis',
    image: '/images/solution-cards/electronic-invoicing.webp',
    imageAlt: 'An operations worker reviewing electronic invoices and reports',
  },
  {
    id: 'enterprise',
    title: 'Enterprise software',
    description: 'Systems that replace spreadsheets and hand-offs, with access set by role.',
    menuLine: 'Replace spreadsheets and hand-offs',
    href: '/solutions#enterprise',
    label: 'See enterprise software',
    listHref: '/solutions#enterprise',
    image: '/images/solution-cards/enterprise-software.webp',
    imageAlt: 'An operations team around a shared dashboard',
  },
  {
    id: 'business',
    title: 'Websites and apps',
    description: 'Websites, web apps and full-stack applications, designed before they are built.',
    menuLine: 'Design, websites, full-stack apps',
    href: '/solutions#business',
    label: 'See websites and apps',
    listHref: '/solutions#business',
    image: '/images/technology-team.webp',
    imageAlt: 'A technology team mapping a business workflow on a wall',
  },
] as const;

/** Natural sizes of the client's photographs; each has -320, -480 and -800 copies beside it for srcset. */
const photoSizes: Record<string, [number, number]> = {
  '/images/retail-pos-payment.webp': [1672, 941],
  '/images/inventory-team.webp': [1536, 1024],
  '/images/technology-team.webp': [1448, 1086],
  '/images/solution-cards/card-payments.webp': [1600, 1001],
  '/images/solution-cards/electronic-invoicing.webp': [1600, 1001],
  '/images/solution-cards/enterprise-software.webp': [1600, 1001],
  '/images/solution-cards/pos-software.webp': [1600, 1001],
};

/** The <img> props of a photograph: src, srcSet, sizes and its intrinsic width and height (no layout shift). */
export function photo(src: string, sizes = '(max-width: 639px) 100vw, 50vw') {
  const [width, height] = photoSizes[src] ?? [1600, 1000];
  const base = src.replace(/\.webp$/, '');
  return { src, srcSet: `${base}-320.webp 320w, ${base}-480.webp 480w, ${base}-800.webp 800w, ${src} ${width}w`, sizes, width, height };
}
