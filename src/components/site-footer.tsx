import { primaryAction, solutions } from '@/config/site';

const arrow = (
  <svg aria-hidden="true" className="m-arrow" viewBox="0 0 12 12">
    <path className="m-arrow__stem" d="M1 6h8" />
    <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
  </svg>
);

/*
  footer.closing, footer-statement on the lit ground (sections-library.md): row 1 the close-type close
  (the h2, one line, the big button across the .wrap), row 2 the directory and the legal row.
  Street and district only (rule 9); no phone, no printed email. No credits line: every photograph on the
  site is the client's own file.
*/
export function SiteFooter() {
  return (
    <footer aria-labelledby="close-h" className="footer closing footer--statement" id="contact">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">Bring us the counter as it runs today</h2>
            <p>We map the sale from till to MRA EIS invoice, then suggest the first piece to build.</p>
          </div>
          <a className="btn btn--primary btn--xl btn--wide" href={primaryAction.href}>
            {primaryAction.label}
            {arrow}
          </a>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a aria-label="Unimarket Technologies home" className="nav__logo" href="/">
                <img alt="Unimarket Technologies" height={160} src="/logos/unimarket-logo-horizontal-clear.png" width={652} />
              </a>
              <p className="footer__lede">POS software, card machines and MRA EIS invoicing for businesses in Malawi.</p>
            </div>
            <div className="span-3 start-6 footer__col">
              <h3>Solutions</h3>
              <ul>
                {solutions.map((s) => (
                  <li key={s.id}>
                    <a href={s.listHref}>{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Pages</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/solutions">Solutions</a>
                </li>
                <li>
                  <a href="/solutions/pos-eis">POS and EIS</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Office</h3>
              <ul>
                <li>
                  <a href="https://www.openstreetmap.org/search?query=Victoria%20Avenue%20Blantyre">Victoria Avenue, Blantyre</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; 2026 Unimarket Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
