import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

import { Arrow } from '@/components/arrow';
import { PosWindow } from '@/components/pos-window';
import { primaryAction, solutions, photo } from '@/config/site';

export const metadata: Metadata = {
  title: 'Solutions: POS, EIS and business software for Malawi',
  description:
    'Point of sale, card machines, MRA EIS invoicing, enterprise systems, websites and apps from one Blantyre team, each able to start alone.',
  openGraph: {
    title: 'Solutions: POS, EIS and business software for Malawi',
    description: 'Five solutions from one Blantyre team, each able to start alone.',
  },
};

/*
  /solutions (software). Screens at 1440x900:
  hero collage (the stock window cut by its frame, the reorder card looping) · #paths tabs-tour, click only (three
  fragments) · #all the five solutions as a ruled list with the client's photographs · #engagement on the surface
  band, line-carries-colour, the project plan as a checklist fragment · footer.closing
*/

const stages = [
  'Understand: a workshop on the problem',
  'Scope: a written plan you approve',
  'Prototype: screens your staff test',
  'Build: a tested release',
  'Launch: training and support',
];

const stock = [
  { name: 'Cooking oil, 2 L', unit: 'Case of 12', n: '18', chip: 'Low by Thu', cls: 'd-chip--low', tone: '#f1e3b8' },
  { name: 'Rice, 5 kg', unit: 'Bag', n: '64', chip: 'In stock', cls: '', tone: '#efe9dc' },
  { name: 'Bath soap', unit: 'Box of 48', n: '0', chip: 'Sold out', cls: 'd-chip--out', tone: '#dfe9f3' },
  { name: 'Maize flour, 10 kg', unit: 'Bag', n: '22', chip: 'Low by Sat', cls: 'd-chip--low', tone: '#f3ead2' },
];


type Solution = (typeof solutions)[number];

/* one solution: its photograph in a flush panel, the title as the card's link (to its page, or the contact page) */
function SolutionCard({ s, span }: { s: Solution; span: string }) {
  const href = s.id === 'enterprise' || s.id === 'business' ? '/contact' : s.listHref;
  return (
    <article className={`card card--row ${span}`} id={s.id}>
      <h3>
        <a className="card__link" href={href}>
          {s.title}
        </a>
      </h3>
      <p>{s.description}</p>
      <div className="panel panel--flush">
        <img alt={s.imageAlt} className="frame__img" data-source="client" data-subject={s.title} loading="lazy" {...photo(s.image, '(max-width: 639px) 112px, 33vw')} />
      </div>
    </article>
  );
}

export default function SolutionsPage() {
  return (
    <main id="top">
      <section aria-labelledby="hero-h" className="hero hero--collage" data-enter="">
        <div className="wrap">
          <div className="hero-text grid hero__grid">
            <div className="hero__text span-5">
              <h1 id="hero-h">POS, EIS and business software for Malawi</h1>
              <p className="hero__lead">
                Five solutions from our team in Blantyre: the till, card machines, MRA EIS invoicing, enterprise
                systems, and websites and apps. Start with one and connect the rest later.
              </p>
              <div className="btn-row">
                <a className="btn btn--primary" href={primaryAction.href}>
                  {primaryAction.label}
                  <Arrow />
                </a>
                <a className="btn btn--secondary" href="#all">
                  See the five solutions
                </a>
              </div>
            </div>
            <div
              aria-label="Unimarket stock software: cooking oil running low by Thursday, and a reorder sent to the main supplier"
              className="hero__art span-6 start-7"
              role="img"
            >
              <div aria-hidden="true" className="ly-piece ly-piece--main d-win">
                <div className="d-win__bar">
                  <span className="d-win__dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>Unimarket · Stock, Front counter</span>
                </div>
                <div className="d-win__body">
                  <div className="d-side">
                    <span>
                      <i />
                      Today
                    </span>
                    <span className="is-on">
                      <i />
                      Stock
                    </span>
                    <span>
                      <i />
                      Orders
                    </span>
                    <span>
                      <i />
                      Suppliers
                    </span>
                    <span>
                      <i />
                      Reports
                    </span>
                    <span className="d-side__label">Sites</span>
                    <span>
                      <i />
                      Front counter
                    </span>
                    <span>
                      <i />
                      Warehouse
                    </span>
                  </div>
                  <div className="d-main">
                    <div className="d-main__head">
                      <h4>Stock</h4>
                      <span className="d-btn">Draft order</span>
                    </div>
                    <div className="d-tabs">
                      <span className="is-on">All 412</span>
                      <span>Running low 9</span>
                      <span>Out 2</span>
                    </div>
                    <div className="d-rows">
                      {stock.map((r) => (
                        <div className="d-row" key={r.name}>
                          <span className="d-thumb" style={{ background: r.tone }} />
                          <div>
                            <b>{r.name}</b>
                            <small>{r.unit}</small>
                          </div>
                          <span className="num">{r.n}</span>
                          <span className={`d-chip ${r.cls}`}>{r.chip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="ly-piece ly-piece--note d-card" data-ly-steps="700">
                <div className="d-card__row">
                  <h5>Order to main supplier</h5>
                  <span className="d-chip" data-step="" data-step-at="4">
                    Sent
                  </span>
                </div>
                <div className="d-note__line" data-step="">
                  <i className="warn">!</i>
                  <span>
                    <b>Cooking oil</b> runs out Thursday
                  </span>
                </div>
                <div className="d-note__line" data-step="">
                  <i>✓</i>
                  <span>
                    <b>12 lines</b> drafted from last month
                  </span>
                </div>
                <div className="d-note__line" data-step="">
                  <i>✓</i>
                  <span>
                    Sent at 16:02, <b>MWK 1,284,300</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="paths-h" className="section" id="paths">
        <div className="wrap">
          <div className="grid">
            <div className="span-5">
              <div className="section-head">
                <h2 id="paths-h">
                  Three ways to start. <span className="muted">Most projects touch more than one.</span>
                </h2>
              </div>
              <div aria-label="Ways to start" className="tabs" role="tablist">
                <button aria-controls="path-1 screen-1" aria-selected="true" className="tab" id="tab-1" role="tab" type="button">
                  Run the counter
                </button>
                <button aria-controls="path-2 screen-2" aria-selected="false" className="tab" id="tab-2" role="tab" type="button">
                  Replace spreadsheets
                </button>
                <button aria-controls="path-3 screen-3" aria-selected="false" className="tab" id="tab-3" role="tab" type="button">
                  Build a product
                </button>
              </div>
              <div aria-labelledby="tab-1" className="tab-panel stack-4" id="path-1" role="tabpanel">
                <p>
                  Operate: point of sale, MRA EIS invoicing and daily reports for the shop floor. The till records the
                  day and owners read it the same evening.
                </p>
                <a className="link" href="/solutions/pos-eis">
                  See POS and EIS
                </a>
              </div>
              <div aria-labelledby="tab-2" className="tab-panel stack-4" hidden id="path-2" role="tabpanel">
                <p>
                  Modernise: one connected system in place of spreadsheets and hand-offs, with approvals and access set
                  by role.
                </p>
                <a className="link" href="#enterprise">
                  See enterprise software
                </a>
              </div>
              <div aria-labelledby="tab-3" className="tab-panel stack-4" hidden id="path-3" role="tabpanel">
                <p>
                  Create: product design, websites and full-stack applications, tested as screens before they are
                  built.
                </p>
                <a className="link" href="#business">
                  See websites and apps
                </a>
              </div>
            </div>
            <div
              aria-label="Three screens, one per way to start: the Unimarket till with a sale paid by card, a queue of requests waiting for approval, and a delivery app scope with a decision marked"
              className="frame frame--split span-6 start-7"
              role="img"
            >
              <div className="stage stage--fade-br">
                <div className="at-corner to-edge" id="screen-1" style={{ '--ax': '56px', '--ay': '56px' } as CSSProperties}>
                  <PosWindow className="pos--wide" />
                </div>
                <div
                  className="at-corner to-edge"
                  data-ui-loop=""
                  hidden
                  id="screen-2"
                  style={{ '--ax': '56px', '--ay': '56px' } as CSSProperties}
                >
                  <div className="ui ui-panel ui-win" data-done="Approved" data-open="Waiting" data-ui="window" data-work="Checking">
                    <div className="ui-win__bar">
                      <span aria-hidden="true" className="ui-dots">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="ui-win__crumb">
                        Requests <i>/</i> <b>Waiting</b>
                      </span>
                      <span className="ui-spacer" />
                    </div>
                    <div className="ui-win__body">
                      <nav aria-hidden="true" className="ui-win__side">
                        <span className="ui-win__nav is-on">
                          Waiting<em>4</em>
                        </span>
                        <span className="ui-win__nav">
                          Mine<em>2</em>
                        </span>
                        <span className="ui-win__nav">Approved</span>
                        <span className="ui-win__label">Teams</span>
                        <span className="ui-win__nav">
                          <span className="ui-win__hash">#</span>Stores
                        </span>
                        <span className="ui-win__nav">
                          <span className="ui-win__hash">#</span>Finance
                        </span>
                      </nav>
                      <div className="ui-win__main">
                        <div aria-hidden="true" className="ui-win__cols">
                          <span>From</span>
                          <span>Request</span>
                          <span>Status</span>
                          <span>Age</span>
                        </div>
                        <ul className="ui-win__rows">
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="1">ST</span>
                            <span className="ui-win__who">Stores</span>
                            <span className="ui-win__sub">Purchase, 40 cases of oil</span>
                            <span className="ui-win__st" data-st="">Waiting</span>
                            <span className="ui-win__age">3m</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="3">FI</span>
                            <span className="ui-win__who">Finance</span>
                            <span className="ui-win__sub">Supplier payment run</span>
                            <span className="ui-win__st" data-st="">Waiting</span>
                            <span className="ui-win__age">9m</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="4">HR</span>
                            <span className="ui-win__who">People</span>
                            <span className="ui-win__sub">New cashier account</span>
                            <span className="ui-win__st is-you" data-st="">Needs you</span>
                            <span className="ui-win__age">20m</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="2">ST</span>
                            <span className="ui-win__who">Stores</span>
                            <span className="ui-win__sub">Stock transfer to Till 2</span>
                            <span className="ui-win__st is-done" data-st="">Approved</span>
                            <span className="ui-win__age">41m</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="5">FI</span>
                            <span className="ui-win__who">Finance</span>
                            <span className="ui-win__sub">Month-end VAT report</span>
                            <span className="ui-win__st is-done" data-st="">Approved</span>
                            <span className="ui-win__age">1h</span>
                          </li>
                          <li className="ui-win__row" data-row="">
                            <span className="ui-avatar" data-tone="3">ST</span>
                            <span className="ui-win__who">Stores</span>
                            <span className="ui-win__sub">Price change, 14 items</span>
                            <span className="ui-win__st is-done" data-st="">Approved</span>
                            <span className="ui-win__age">2h</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="at-corner to-edge"
                  data-ui-loop=""
                  hidden
                  id="screen-3"
                  style={{ '--ax': '40px', '--ay': '40px' } as CSSProperties}
                >
                  <div className="ui ui-doc" data-ui="doc">
                    <article className="ui-doc__page">
                      <div className="ui-doc__label">Delivery app, scope draft 2</div>
                      <div className="ui-doc__title">3. Booking a delivery</div>
                      <div className="ui-doc__text">
                        The customer picks a <mark className="ui-doc__mark is-on">two-hour slot</mark> when the order is
                        placed, and gets a text when the driver leaves.
                      </div>
                      <div className="ui-doc__text">
                        Drivers see the day’s route on a phone.{' '}
                        <mark
                          className="ui-doc__mark"
                          data-kind="Decide"
                          data-msg="Cash on delivery needs a receipt on the phone."
                          data-where="Payments, section 5"
                        >
                          Payment on delivery
                        </mark>{' '}
                        is taken in cash or by card.
                      </div>
                      <div className="ui-doc__text">Orders close at 15:00 for next-day delivery.</div>
                      <div className="ui-doc__text">The shop sees every order and its slot on one screen.</div>
                    </article>
                    <aside aria-live="polite" className="ui-doc__note ui-panel is-on">
                      <div className="ui-doc__kind">
                        <span className="ui-doc__dot" />
                        <span data-doc-kind="">Test with staff</span>
                      </div>
                      <div className="ui-doc__msg" data-doc-msg="">
                        Two-hour slots on the prototype first.
                      </div>
                      <div className="ui-doc__where" data-doc-where="">
                        Screens, round 1
                      </div>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="all-h" className="section g2" id="all">
        <div className="wrap">
          <div className="group">
            <div className="section-head">
              <h2 id="all-h">
                All five solutions. <span className="muted">Each can start small and grow.</span>
              </h2>
            </div>
            <div className="grid">
              {solutions.slice(0, 3).map((s) => (
                <SolutionCard key={s.id} s={s} span="span-4" />
              ))}
            </div>
          </div>
          <div className="grid">
            {solutions.slice(3).map((s) => (
              <SolutionCard key={s.id} s={s} span="span-6" />
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="engagement-h"
        className="section ground-surface"
        data-moment="line-carries-colour"
        data-moment-opts='{"from": "base"}'
        id="engagement"
      >
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-6">
              <h2 id="engagement-h">Five stages for every project</h2>
              <p className="t-lead">
                Every engagement follows the same outline, scaled to the size of the work: a small till change and a new
                platform both start with a workshop.
              </p>
              <p>You approve the written scope and test the screens before full development begins.</p>
              <a className="link" href="/#process">
                See how a project runs
              </a>
            </div>
            <div className="frame frame--split span-6 start-7">
              <div className="stage stage--fade-b">
                <div
                  className="at-rise fit"
                  data-ui-still=""
                  style={{ '--fit-max': '340px', '--ax': 'max(32px, 50% - 170px)', '--ay': '56px', '--ay-sm': '24px' } as CSSProperties}
                >
                  <div className="ui ui-panel ui-checks" data-ui="checklist">
                    <div className="ui-checks__head">
                      <div className="ui-title">Project plan, five stages</div>
                      <span className="ui-spacer" />
                      <div className="ui-meta" data-checks-count="">
                        2 of 5
                      </div>
                    </div>
                    <div className="ui-checks__bar">
                      <i data-checks-bar="" style={{ '--k': 0.4 } as CSSProperties} />
                    </div>
                    <ul className="ui-checks__list">
                      {stages.map((st, i) => (
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
    </main>
  );
}
