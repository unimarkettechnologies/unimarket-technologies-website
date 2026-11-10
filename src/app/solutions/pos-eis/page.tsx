import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

import { Arrow } from '@/components/arrow';
import { PosWindow, sale } from '@/components/pos-window';
import { primaryAction } from '@/config/site';

export const metadata: Metadata = {
  title: 'POS and MRA EIS: invoicing for Malawi retail',
  description:
    'How the Unimarket till takes a sale and a card payment, updates stock and sends the invoice to MRA EIS, with its state on screen.',
  openGraph: {
    title: 'POS and MRA EIS: invoicing for Malawi retail',
    description: 'The sale, the card payment, the stock count and the MRA EIS invoice in one flow.',
  },
};

/*
  /solutions/pos-eis (software). Screens at 1440x900:
  hero split (the counter photograph, one float card) · #workflow five steps as a timeline diagram card ·
  #checkout split-text-left, the till window (object) · #payments two cards, photograph and payment states ·
  #eis pinned-chapters, two screens live (photograph, invoice states, the server log) · #questions faq · footer.closing
*/

const workflow = [
  'Sale captured at Till 2',
  'Card payment recorded',
  'Stock updated, 4 lines',
  'Invoice sent to MRA EIS',
  'Day report refreshed',
];

const faq = [
  {
    q: 'Which card machines work with the till?',
    a: 'That depends on the payment provider and the terminal model. We check both in the consultation, before planning the build.',
  },
  {
    q: 'Can the POS keep selling without internet?',
    a: 'We plan for it: sales go on, invoices wait in a queue and are sent when the line returns, within the current MRA rules.',
  },
  {
    q: 'Can the POS handle returns and corrections?',
    a: 'Yes. Returns, voids and corrections are mapped in the first step, so each one produces the right document.',
  },
  {
    q: 'What do you need to start a POS project?',
    a: 'A walk through the counter, a list of what you sell and how customers pay, and the person who closes the day.',
  },
  {
    q: 'Is this POS flow running in shops today?',
    a: 'What this page shows is our design for the flow. Your build follows your scope, your provider and the current MRA requirements.',
  },
];

export default function PosEisPage() {
  return (
    <main id="top">
      <section aria-labelledby="hero-h" className="hero hero--split" data-enter="">
        <div className="wrap">
          <div className="hero-text grid hero__grid">
            <div className="hero__text span-5">
              <h1 id="hero-h">POS and MRA EIS invoicing for Malawi retail</h1>
              <p className="hero__lead">
                One till takes the sale and the card payment, updates the stock and sends the invoice to MRA EIS. Each
                invoice’s state shows beside its sale.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href={primaryAction.href}>
                  {primaryAction.label}
                  <Arrow />
                </a>
                <a className="btn btn--secondary" href="#workflow">
                  See the workflow
                </a>
              </div>
            </div>
            <div className="hero__media span-6 start-7">
              <img
                alt="A cashier using a point-of-sale tablet while a customer pays by card at the counter"
                data-source="client"
                data-subject="card payment at a shop counter"
                fetchPriority="high"
                src="/images/retail-pos-payment.webp"
                style={{ '--ly-pos': '50% 50%' } as CSSProperties}
              />
              <div className="ly-float">
                <div className="ly-float__row">
                  <span className="ly-live">{sale.till}</span>
                  <span>{sale.time}</span>
                </div>
                <div className="ly-float__title">Card approved, MWK {sale.total}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="workflow-h" className="section" id="workflow">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-6">
              <h2 id="workflow-h">Five POS steps from sale to report</h2>
              <p className="t-lead">
                Each step hands its result to the next, so nobody types the same sale twice and the day’s report agrees
                with the till.
              </p>
              <p>
                This workflow is a concept. Live behaviour depends on the current MRA requirements, the payment
                provider and the hardware in use.
              </p>
              <a className="link" href="#eis">
                See how invoices reach MRA EIS
              </a>
            </div>
            <div className="frame frame--split span-6 start-7">
              <div className="stage stage--fade-b">
                <div
                  className="at-rise fit"
                  data-ui-loop=""
                  style={{ '--fit-max': '340px', '--ax': 'max(32px, 50% - 170px)', '--ay': '56px', '--ay-sm': '24px' } as CSSProperties}
                >
                  <div className="ui ui-panel ui-checks" data-ui="checklist">
                    <div className="ui-checks__head">
                      <div className="ui-title">Sale {sale.number}</div>
                      <span className="ui-spacer" />
                      <div className="ui-meta" data-checks-count="">
                        2 of 5
                      </div>
                    </div>
                    <div className="ui-checks__bar">
                      <i data-checks-bar="" style={{ '--k': 0.4 } as CSSProperties} />
                    </div>
                    <ul className="ui-checks__list">
                      {workflow.map((st, i) => (
                        <li className={`ui-check${i < 2 ? ' is-done' : ''}`} key={st}>
                          <span className="ui-check__box">
                            <svg viewBox="0 0 16 16">
                              <path d="m4.5 8.2 2.3 2.3 4.7-5" />
                            </svg>
                          </span>
                          <span className="ui-check__label">{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="checkout-h" className="section" id="checkout">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-6">
              <h2 id="checkout-h">POS checkout for a busy counter</h2>
              <p className="t-lead">
                The cashier scans, takes the payment and prints the receipt on one screen. Prices, stock and VAT come
                from the same record.
              </p>
              <ul className="facts">
                <li>Each cashier sees only the screens their role allows.</li>
                <li>Every sale takes its items off the stock count.</li>
                <li>The day’s figures close by till and by cashier.</li>
              </ul>
              <a className="link" href="#payments">
                See card payments
              </a>
            </div>
            <div
              aria-label="The Unimarket till: four items in the basket, the card payment approved, the receipt printed and the invoice accepted by MRA EIS"
              className="frame frame--split span-6 start-7"
              role="img"
            >
              <div className="stage stage--fade-br">
                <div className="at-corner to-edge" style={{ '--ax': '56px', '--ay': '56px' } as CSSProperties}>
                  <PosWindow className="pos--wide" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="payments-h" className="section" id="payments">
        <div className="wrap">
          <div className="section-head">
            <h2 id="payments-h">
              Card machines tied to the sale. <span className="muted">The terminal and the till agree on what happened.</span>
            </h2>
          </div>
          <div className="grid">
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Takes card machine payments</h3>
              <p>The amount goes from the till to the terminal, so the cashier never types it twice.</p>
              <div className="panel panel--flush">
                <img
                  alt="A customer tapping a card on a handheld payment terminal"
                  className="frame__img"
                  data-source="client"
                  data-subject="contactless card payment"
                  loading="lazy"
                  src="/images/solution-cards/card-payments.webp"
                />
              </div>
            </article>
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Shows every card payment state</h3>
              <p>Approved, declined and cancelled payments each show plainly, with the terminal reference kept on the sale.</p>
              <div className="panel">
                <div className="stage stage--fade-b">
                  <div
                    className="at-rise fit"
                    data-ui-loop=""
                    style={{ '--fit-max': '380px', '--ax': 'max(32px, 50% - 190px)', '--ay': '48px', '--ay-sm': '24px' } as CSSProperties}
                  >
                    <div className="ui ui-notify" data-ui="notify">
                      <ul className="ui-notify__list" data-notify-list="">
                        <li className="ui-note">
                          <span className="ui-note__ico">
                            <svg className="ui-icon" viewBox="0 0 16 16">
                              <path d="m3.5 8.4 2.8 2.8 6.2-6.4" />
                            </svg>
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Approved, {sale.number}
                              <time>now</time>
                            </span>
                            <span className="ui-note__body">MWK {sale.total}, terminal ref 004418</span>
                          </span>
                        </li>
                        <li className="ui-note">
                          <span className="ui-note__ico">
                            <svg className="ui-icon" viewBox="0 0 16 16">
                              <path d="M4.5 4.5l7 7M11.5 4.5l-7 7" />
                            </svg>
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Declined, R-20417<time>3m</time>
                            </span>
                            <span className="ui-note__body">Customer asked to try another card</span>
                          </span>
                          <span className="ui-btn ui-btn--sm ui-note__btn">Retry</span>
                        </li>
                        <li className="ui-note">
                          <span className="ui-note__ico">
                            <svg className="ui-icon" viewBox="0 0 16 16">
                              <path d="M4 8h8" />
                            </svg>
                          </span>
                          <span className="ui-note__text">
                            <span className="ui-note__title">
                              Cancelled, R-20416<time>7m</time>
                            </span>
                            <span className="ui-note__body">Stopped by the cashier, nothing charged</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="eis-h" className="section" data-moment="pinned-chapters" id="eis" style={{ '--h': 2 } as CSSProperties}>
        <div className="wrap mo-pc__grid">
          <div className="mo-pc__text">
            <h2 id="eis-h">MRA EIS invoicing, planned first</h2>
            <ol className="mo-pc__steps">
              <li className="mo-pc__step">
                <h3>Confirm the MRA EIS rules</h3>
                <p>We check the current MRA requirements with you and map sales, returns, corrections and outages.</p>
                <figure className="mo-pc__visual">
                  <img
                    alt="An operations worker reviewing electronic invoices and reports"
                    data-source="client"
                    data-subject="electronic invoicing review"
                    loading="lazy"
                    src="/images/solution-cards/electronic-invoicing.webp"
                  />
                </figure>
              </li>
              <li className="mo-pc__step">
                <h3>Send each invoice from the POS</h3>
                <p>Each invoice is built from its sale and sent to MRA EIS. Its state shows beside the sale.</p>
                <figure
                  aria-label="Invoice R-20418: built from the sale, sent to MRA EIS and accepted"
                  className="mo-pc__visual mo-pc__visual--lit"
                  role="img"
                >
                  <div className="eis-card">
                    <div className="eis-card__head">
                      <b>Invoice {sale.number}</b>
                      <span>MWK {sale.total}</span>
                    </div>
                    <ol>
                      <li>
                        <i>✓</i>Built from the sale<time>10:42:01</time>
                      </li>
                      <li>
                        <i>✓</i>Sent to MRA EIS<time>10:42:02</time>
                      </li>
                      <li className="is-ok">
                        <i>✓</i>Accepted<time>10:42:03</time>
                      </li>
                    </ol>
                  </div>
                </figure>
              </li>
              <li className="mo-pc__step">
                <h3>Keys stay on the server</h3>
                <p>Signing keys stay on the server, never on the till, and every failure has a set recovery step.</p>
                <figure
                  aria-label="The integration log: the server signs each request, and a timed-out invoice is queued and sent again"
                  className="mo-pc__visual mo-pc__visual--lit"
                  role="img"
                >
                  <div className="eis-card eis-card--log">
                    <div className="eis-card__head">
                      <b>Integration log</b>
                      <span>Server</span>
                    </div>
                    <ol>
                      <li>
                        <time>10:42:02</time>Till 2 sent {sale.number}
                      </li>
                      <li>
                        <time>10:42:02</time>Signed on the server
                      </li>
                      <li>
                        <time>10:51:40</time>R-20421 timed out, queued
                      </li>
                      <li className="is-ok">
                        <time>10:52:10</time>R-20421 sent again, accepted
                      </li>
                    </ol>
                  </div>
                </figure>
              </li>
            </ol>
          </div>
          <div className="mo-pc__visuals frame" />
        </div>
      </section>

      <section aria-labelledby="questions-h" className="section" id="questions">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-4">
              <h2 id="questions-h">Questions about POS and EIS</h2>
              <p className="muted">What shop owners ask about the till and the invoices.</p>
              <a className="link" href="/contact">
                Ask your own question
              </a>
              <div className="frame frame--photo q-photo">
                <img
                  alt={'A shop worker using point-of-sale software at a checkout'}
                  className="frame__img"
                  data-source="client"
                  data-subject="POS software at a checkout"
                  loading="lazy"
                  src="/images/solution-cards/pos-software.webp"
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
