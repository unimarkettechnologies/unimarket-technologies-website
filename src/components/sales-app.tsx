import { sale } from '@/components/pos-window';

/*
  app-frame (sections-library.md): one app window across the .wrap, the sales list (the kit's `window`
  fragment, rewritten to Unimarket's subject) beside the open sale and its invoice. The list holds still;
  the open invoice is the section's one loop (layout.js data-ly-steps: built, sent, accepted), with the
  pause disc in the frame's lower-right corner. Customer names are generic accounts, never real companies.
*/

const rows = [
  { who: 'Walk-in', sub: `${sale.number} · MWK ${sale.total}`, st: 'Accepted', cls: 'is-done', age: '1m', tone: '4', ini: 'W', sel: true },
  { who: 'Account 1042', sub: 'R-20417 · MWK 212,900', st: 'Sending', cls: 'is-work', age: '2m', tone: '2', ini: 'A' },
  { who: 'Walk-in', sub: 'R-20416 · MWK 8,300', st: 'Accepted', cls: 'is-done', age: '4m', tone: '4', ini: 'W' },
  { who: 'Staff sale', sub: 'R-20415 · MWK 3,250', st: 'Accepted', cls: 'is-done', age: '6m', tone: '3', ini: 'S' },
  { who: 'Account 0877', sub: 'R-20414 · MWK 96,400', st: 'Check', cls: 'is-you', age: '9m', tone: '1', ini: 'A' },
  { who: 'Walk-in', sub: 'R-20413 · MWK 15,750', st: 'Accepted', cls: 'is-done', age: '12m', tone: '4', ini: 'W' },
  { who: 'Walk-in', sub: 'R-20412 · MWK 41,000', st: 'Accepted', cls: 'is-done', age: '15m', tone: '4', ini: 'W' },
  { who: 'Account 1042', sub: 'R-20411 · MWK 57,600', st: 'Accepted', cls: 'is-done', age: '21m', tone: '2', ini: 'A' },
  { who: 'Walk-in', sub: 'R-20410 · MWK 2,900', st: 'Accepted', cls: 'is-done', age: '24m', tone: '4', ini: 'W' },
  { who: 'Return', sub: 'C-00093 · MWK −6,450', st: 'Accepted', cls: 'is-done', age: '31m', tone: '5', ini: 'R' },
];

export function SalesApp() {
  return (
    <div
      aria-label="The Unimarket back office: today's sales listed with their MRA EIS state, and sale R-20418 open with its lines, VAT, card payment and accepted invoice"
      className="ui app fill"
      data-ui-pause-host=""
      role="img"
    >
      <div className="app__pane app__pane--list">
        <div className="ui ui-panel ui-win" data-done="Accepted" data-open="Queued" data-ui="window" data-work="Sending">
          <div className="ui-win__bar">
            <span aria-hidden="true" className="ui-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="ui-win__crumb">
              Sales <i>/</i> <b>Today</b>
            </span>
            <span className="ui-spacer" />
            <span aria-hidden="true" className="ui-win__search">
              <svg className="ui-icon" viewBox="0 0 16 16">
                <circle cx="7" cy="7" r="4.5" />
                <path d="m10.5 10.5 3 3" />
              </svg>
              <span className="ui-win__ph">Search</span>
              <span className="ui-kbd">/</span>
            </span>
          </div>
          <div className="ui-win__body">
            <nav aria-hidden="true" className="ui-win__side">
              <span className="ui-win__nav is-on">
                Today<em>38</em>
              </span>
              <span className="ui-win__nav">
                Sending<em>1</em>
              </span>
              <span className="ui-win__nav">
                To check<em>1</em>
              </span>
              <span className="ui-win__nav">Accepted</span>
              <span className="ui-win__label">Tills</span>
              <span className="ui-win__nav">
                <span className="ui-win__hash">#</span>Till 1
              </span>
              <span className="ui-win__nav">
                <span className="ui-win__hash">#</span>Till 2
              </span>
            </nav>
            <div className="ui-win__main">
              <div aria-hidden="true" className="ui-win__cols">
                <span>Customer</span>
                <span>Sale</span>
                <span>MRA EIS</span>
                <span>Age</span>
              </div>
              <ul className="ui-win__rows">
                {rows.map((r) => (
                  <li className={`ui-win__row${r.sel ? ' is-sel' : ''}`} data-row="" key={r.sub}>
                    <span className="ui-avatar" data-tone={r.tone}>
                      {r.ini}
                    </span>
                    <span className="ui-win__who">{r.who}</span>
                    <span className="ui-win__sub">{r.sub}</span>
                    <span className={`ui-win__st ${r.cls}`} data-st="">
                      {r.st}
                    </span>
                    <span className="ui-win__age">{r.age}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="app__pane app__pane--open">
        <div className="inv">
          <div className="inv__head">
            <div>
              <small>Sale and invoice</small>
              <b>{sale.number}</b>
            </div>
            <span className="inv__meta">
              {sale.till} · today {sale.time}
            </span>
          </div>
          <div className="inv__lines">
            <div className="inv__line inv__line--head">
              <span>Item</span>
              <span>Qty</span>
              <span>Each</span>
              <span>MWK</span>
            </div>
            {sale.lines.map((l) => (
              <div className="inv__line" key={l.name}>
                <span>{l.name}</span>
                <span>{l.qty}</span>
                <span>{l.each}</span>
                <span>{l.total}</span>
              </div>
            ))}
          </div>
          <dl className="inv__sum">
            <div>
              <dt>Before VAT</dt>
              <dd>{sale.net}</dd>
            </div>
            <div>
              <dt>VAT 16.5%</dt>
              <dd>{sale.vat}</dd>
            </div>
            <div className="inv__total">
              <dt>Total</dt>
              <dd>MWK {sale.total}</dd>
            </div>
          </dl>
          <div className="inv__paid">
            <span className="inv__label">Paid</span>
            <span>
              Card {sale.card} · terminal ref 004418 · approved {sale.time}
            </span>
          </div>
          <ol className="inv__eis" data-ly-hold="1800" data-ly-steps="700">
            <li data-step="">
              <i>✓</i>Invoice built from the sale<time>10:42:01</time>
            </li>
            <li data-step="">
              <i>✓</i>Sent to MRA EIS<time>10:42:02</time>
            </li>
            <li className="is-ok" data-step="">
              <i>✓</i>Accepted, EIS reference attached<time>10:42:03</time>
            </li>
          </ol>
          <div className="inv__acts">
            <span className="inv__btn">Print invoice</span>
            <span className="inv__btn inv__btn--quiet">Retry send</span>
          </div>
          <div className="inv__note">
            <span className="inv__label">Stock</span>
            <span>4 lines taken off stock at Front counter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
