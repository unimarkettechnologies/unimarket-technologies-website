import type { Metadata } from 'next';

import { Arrow } from '@/components/arrow';
import { Diagram } from '@/components/diagram';
import { PosWindow } from '@/components/pos-window';
import { SalesApp } from '@/components/sales-app';
import { primaryAction, solutions } from '@/config/site';

export const metadata: Metadata = {
  title: 'Unimarket Technologies: POS and MRA EIS software for Malawi',
  description:
    'Point-of-sale software, card terminals and electronic invoicing to MRA EIS, built as one system by a Blantyre team for shops and offices.',
  openGraph: {
    title: 'Unimarket Technologies: POS and MRA EIS software for Malawi',
    description: 'Point-of-sale software, card terminals and MRA EIS invoicing, built as one system in Blantyre.',
  },
};

/*
  Home (software). Screens at 1440x900:
  hero centred (the POS sale in the fluted-glass frame, the hero's loop) · #sales app-frame (object) ·
  #build four photo cards (use) · #connects on the surface band, iris-opens (diagram) ·
  #statement letters-assemble (type) · #process three steps (photographs, one fragment) · #questions faq · footer.closing
*/

const hub = {
  layout: 'hub',
  alt: 'A sale at the POS updates the card terminal, stock, the MRA EIS invoice, the reports and the accounts.',
  center: { label: 'POS sale', icon: 'ui:shopping-cart' },
  spokes: [
    { label: 'Card terminal', icon: 'ui:credit-card' },
    { label: 'Stock', icon: 'ui:package' },
    { label: 'MRA EIS', icon: 'ui:receipt' },
    { label: 'Reports', icon: 'ui:chart-no-axes-column-increasing' },
    { label: 'Accounts', icon: 'ui:landmark' },
  ],
};

const faq = [
  {
    q: 'What does MRA EIS work involve?',
    a: 'We confirm the current MRA requirements with you, map how sales, returns and corrections become invoices, then connect and test before go-live.',
  },
  {
    q: 'Can we keep the card machines we have?',
    a: 'Often, yes. It depends on the terminal and the payment provider, so we check both before planning the work.',
  },
  {
    q: 'Do we have to replace our current POS?',
    a: 'No. We can connect to the system you run today, replace one part of it, or build new where nothing fits.',
  },
  {
    q: 'What hardware does the POS need?',
    a: 'A screen or tablet, a receipt printer and a card terminal. We confirm the models when we scope the work.',
  },
  {
    q: 'What happens to MRA EIS invoices offline?',
    a: 'We plan that case before building: how invoices wait, when they are sent again and what staff see meanwhile.',
  },
];

export default function HomePage() {
  return (
    <main id="top">
      <section aria-labelledby="hero-h" className="hero hero--centred" data-enter="">
        <div className="wrap">
          <div className="hero-text">
            <div className="hero__c">
              <a className="pill" href="/solutions/pos-eis">
                <span>Till, card and invoice in one flow</span>
                <span className="muted">See the workflow</span>
              </a>
              <h1 id="hero-h">POS and MRA EIS software for Malawi</h1>
              <p className="hero__lead">
                Unimarket builds the till, the card payment and the MRA EIS invoice as one system, so each sale is
                entered once. Designed and supported from Blantyre.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href={primaryAction.href}>
                  {primaryAction.label}
                  <Arrow />
                </a>
                <a className="btn btn--secondary" href="/solutions">
                  See the solutions
                </a>
              </div>
            </div>
            <div
              aria-label="A sale on the Unimarket till: four items in the basket, the card payment approved, the receipt printed and the invoice accepted by MRA EIS"
              className="hero__window"
              data-fx="fluted-glass"
              data-fx-params='{"speed":0.02,"distortion":0.35,"highlight":0.1,"shadow":0.1,"calm":0.6,"calmX":0.5,"calmY":0.3}'
              data-fx-seed="7"
              role="img"
            >
              <PosWindow />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="sales-h" className="section" id="sales">
        <div className="wrap">
          <div className="grid">
            <h2 className="span-5" id="sales-h">
              POS sales beside their MRA EIS invoices
            </h2>
            <div className="span-6 start-7 stack-4">
              <p>
                The back office lists each sale as the till closes it. Open one to see its lines, the VAT, how it was
                paid and whether MRA EIS accepted the invoice.
              </p>
              <a className="link" href="/solutions/pos-eis">
                See the POS and EIS workflow
              </a>
            </div>
          </div>
          <SalesApp />
        </div>
      </section>

      <section aria-labelledby="build-h" className="section" id="build">
        <div className="wrap">
          <div className="section-head">
            <h2 id="build-h">POS software, card machines and EIS</h2>
          </div>
          <div className="grid build">
            {solutions.slice(0, 2).map((s, i) => (
              <article className={`card card--row build__top ${i === 0 ? 'span-8' : 'span-4'}`} key={s.id}>
                <h3>
                  <a className="card__link" href={s.href}>
                    {s.title}
                  </a>
                </h3>
                <p>{s.description}</p>
                <div className="panel panel--flush">
                  <img
                    alt={s.imageAlt}
                    className="frame__img"
                    data-source="client"
                    data-subject={s.title}
                    loading={i === 0 ? undefined : 'lazy'}
                    src={s.image}
                  />
                </div>
              </article>
            ))}
            {solutions.slice(2, 4).map((s) => (
              <article className="card build__side span-6" key={s.id}>
                <div className="build__text">
                  <h3 className="card__title">
                    <a className="card__link" href={s.href}>
                      {s.title}
                    </a>
                  </h3>
                  <p className="card__text">{s.description}</p>
                </div>
                <div className="build__pic">
                  <img
                    alt={s.imageAlt}
                    className="frame__img"
                    data-source="client"
                    data-subject={s.title}
                    loading="lazy"
                    src={s.image}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="connects-h"
        className="section ground-surface"
        data-moment="iris-opens"
        data-moment-opts='{"from": "base"}'
        id="connects"
      >
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-6">
              <h2 id="connects-h">One POS sale updates five records</h2>
              <p className="t-lead">
                When the cashier closes a sale, the card payment, the stock count, the MRA EIS invoice, the day’s report
                and the accounts all change with it.
              </p>
              <p>Nobody types the sale a second time, so the totals agree at the end of the day.</p>
              <a className="link" href="/solutions/pos-eis#workflow">
                See the five steps
              </a>
            </div>
            <div className="frame frame--split span-6 start-7">
              <Diagram spec={hub} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="statement-h" className="section ground-surface" data-moment="letters-assemble" id="statement">
        <div className="wrap">
          <h2 className="mo-la__type" id="statement-h">
            POS sale to EIS invoice
          </h2>
          <p className="mo-la__sub t-lead">
            The till, the card terminal and MRA EIS share one record of each sale, from the first scan to the accepted
            invoice.
          </p>
        </div>
      </section>

      <section aria-labelledby="process-h" className="section" id="process">
        <div className="wrap">
          <div className="section-head">
            <h2 id="process-h">
              How a POS project runs, in 3 stages. <span className="muted">Six steps, agreed before any code.</span>
            </h2>
          </div>
          <div className="grid">
            <article className="card card--row span-4 m-nolift">
              <span className="step-num">1</span>
              <h3>Discover and define</h3>
              <p>We watch the counter at work, then write down the scope and the decisions.</p>
              <div className="panel panel--flush">
                <img
                  alt="A team mapping a business workflow on a wall"
                  className="frame__img"
                  data-source="client"
                  data-subject="workflow workshop"
                  loading="lazy"
                  src="/images/technology-team.webp"
                />
              </div>
            </article>
            <article className="card card--row span-4 m-nolift">
              <span className="step-num">2</span>
              <h3>Design and build</h3>
              <p>You test the screens before full development, then we build what you approved.</p>
              <div className="panel">
                <div className="stage stage--fade-b">
                  <div
                    className="at-rise fit"
                    data-ui-loop=""
                    style={{ '--fit-max': '340px', '--ax': 'max(24px, 50% - 170px)', '--ay': '32px', '--ay-sm': '16px' } as React.CSSProperties}
                  >
                    <div className="ui ui-panel ui-checks" data-ui="checklist">
                      <div className="ui-checks__head">
                        <div className="ui-title">Till build, sprint 3</div>
                        <span className="ui-spacer" />
                        <div className="ui-meta" data-checks-count>
                          2 of 5
                        </div>
                      </div>
                      <div className="ui-checks__bar">
                        <i data-checks-bar="" style={{ '--k': 0.4 } as React.CSSProperties} />
                      </div>
                      <ul className="ui-checks__list">
                        <li className="ui-check is-done">
                          <span className="ui-check__box">
                            <svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg>
                          </span>
                          <span className="ui-check__label">Basket and price lookup</span>
                        </li>
                        <li className="ui-check is-done">
                          <span className="ui-check__box">
                            <svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg>
                          </span>
                          <span className="ui-check__label">Cashier roles</span>
                        </li>
                        <li className="ui-check">
                          <span className="ui-check__box">
                            <svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg>
                          </span>
                          <span className="ui-check__label">Card terminal states</span>
                        </li>
                        <li className="ui-check">
                          <span className="ui-check__box">
                            <svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg>
                          </span>
                          <span className="ui-check__label">Returns and voids</span>
                        </li>
                        <li className="ui-check">
                          <span className="ui-check__box">
                            <svg viewBox="0 0 16 16"><path d="m4.5 8.2 2.3 2.3 4.7-5" /></svg>
                          </span>
                          <span className="ui-check__label">Daily close report</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className="card card--row span-4 m-nolift">
              <span className="step-num">3</span>
              <h3>Integrate and support</h3>
              <p>We connect MRA EIS and the terminals, train staff and stay on after launch.</p>
              <div className="panel panel--flush">
                <img
                  alt="A shop owner checking stock on a tablet while a worker scans products"
                  className="frame__img"
                  data-source="client"
                  data-subject="stock check in a shop"
                  loading="lazy"
                  src="/images/inventory-team.webp"
                />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="questions-h" className="section" id="questions">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-4">
              <h2 id="questions-h">Questions before a POS project</h2>
              <p className="muted">What owners ask before the first visit.</p>
              <a className="link" href="/contact">
                Ask your own question
              </a>
              <div className="frame frame--photo q-photo">
                <img
                  alt="A cashier using a point-of-sale tablet while a customer pays by card at the counter"
                  className="frame__img"
                  data-source="client"
                  data-subject="card payment at a shop counter"
                  loading="lazy"
                  src="/images/retail-pos-payment.webp"
                />
              </div>
            </div>
            <div className="faq span-6 start-7">
              {faq.map((item) => (
                <div className="faq__item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
