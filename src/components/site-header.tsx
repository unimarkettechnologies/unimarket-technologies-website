'use client';

import { usePathname } from 'next/navigation';

import { navigation, primaryAction, solutions } from '@/config/site';

/*
  nav-centre (sections-library.md): one fixed, opaque bar on the page's .wrap, the logo on the left line, the
  words on the page axis, the main action ending on the right line. system.js runs the phone sheet, Escape,
  aria-expanded and the focus return; this component only marks the current page. Plain <a> links: every
  route loads whole, so the kit starts once on each page.
*/
export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="nav nav--centre">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <a aria-label="Unimarket Technologies home" className="nav__logo" href="/">
          <img
            alt="Unimarket Technologies"
            className="nav__word"
            height={80}
            src="/logos/unimarket-logo-horizontal-clear-80.png"
            width={326}
          />
          <img alt="" className="nav__mark" loading="lazy" height={80} src="/logos/unimarket-mark-clear-80.png" width={83} />
        </a>
        <nav aria-label="Main" className="nav__links">
          {navigation.map((item) => {
            const current = pathname === item.href ? 'page' : undefined;
            if (item.href !== '/solutions') {
              return (
                <div className="nav__item" key={item.href}>
                  <a aria-current={current} className="nav__link" href={item.href}>
                    {item.label}
                  </a>
                </div>
              );
            }
            return (
              <div className="nav__item" key={item.href}>
                <a aria-current={current} className="nav__link" href={item.href}>
                  {item.label}{' '}
                  <svg aria-hidden="true" className="chev" viewBox="0 0 12 12">
                    <path
                      d="M3 4.5l3 3 3-3"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </a>
                <div className="nav__menu">
                  <div className="wrap grid">
                    <div className="menu-col span-3">
                      <p className="t-label">At the counter</p>
                      {solutions.slice(0, 3).map((s) => (
                        <a href={s.href} key={s.id}>
                          {s.title}
                          <span>{s.menuLine}</span>
                        </a>
                      ))}
                    </div>
                    <div className="menu-col span-3">
                      <p className="t-label">Behind the counter</p>
                      {solutions.slice(3).map((s) => (
                        <a href={s.listHref} key={s.id}>
                          {s.title}
                          <span>{s.menuLine}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={primaryAction.href}>
            {primaryAction.label}
          </a>
        </div>
        <button aria-expanded="false" aria-label="Menu" className="nav__toggle" type="button">
          <svg aria-hidden="true" height="18" viewBox="0 0 18 18" width="18">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
    </header>
  );
}
