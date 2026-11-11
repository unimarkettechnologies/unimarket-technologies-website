import type { Metadata } from 'next';

import { Arrow } from '@/components/arrow';

export const metadata: Metadata = {
  title: 'Page not found: Unimarket Technologies',
  description: 'This address has no page. The site has four: home, solutions, POS and EIS, and contact.',
};

/* The kit's statement hero, plain copy, a link home. Not gate-checked. */
export default function NotFound() {
  return (
    <main id="top">
      <section aria-labelledby="hero-h" className="hero hero--statement" data-enter="">
        <div className="wrap">
          <div className="hero-text hero__in">
            <div>
              <h1 id="hero-h">No page at this address</h1>
              <p className="hero__lead">
                The link may be old or mistyped. The site has four pages: home, solutions, POS and EIS, and contact.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href="/">
                  Go to the home page
                  <Arrow />
                </a>
                <a className="btn btn--secondary" href="/solutions">
                  See the solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
