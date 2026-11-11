/*
  The Unimarket till as live HTML (the client's own subject, house rule: real product UI). Generic shop items and a
  placeholder card number only; no real company, bank or card scheme is named. The payment column is the hero's
  one loop (layout.js data-ly-steps): the card approval, the receipt and the MRA EIS line arrive 0.9 s apart, then
  the finished sale holds 2.4 s. It rests on the finished picture under reduced motion and on a phone.
*/

export const sale = {
  number: 'R-20418',
  till: 'Till 2',
  time: '10:42',
  card: '•••• 4417',
  lines: [
    { qty: 2, name: 'Cooking oil, 2 L', each: '9,900', total: '19,800' },
    { qty: 1, name: 'Rice, 5 kg', each: '21,500', total: '21,500' },
    { qty: 1, name: 'Sugar, 2 kg', each: '6,450', total: '6,450' },
    { qty: 4, name: 'Bath soap', each: '1,625', total: '6,500' },
  ],
  net: '46,567',
  vat: '7,683',
  total: '54,250',
} as const;

export function PosWindow({ className = 'ly-piece' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`${className} ui pos`}>
      <div className="pos__bar">
        <span className="pos__dots">
          <i />
          <i />
          <i />
        </span>
        <span>
          <b>{sale.till}</b> · Front counter
        </span>
        <span className="pos__sp" />
        <span className="pos__meta">Sale {sale.number} · {sale.time}</span>
      </div>
      <div className="pos__body">
        <div className="pos__basket">
          {sale.lines.map((l) => (
            <div className="pos__row" key={l.name}>
              <span className="pos__qty">{l.qty}</span>
              <span className="pos__name">
                <b>{l.name}</b>
              </span>
              <span className="pos__num">{l.total}</span>
            </div>
          ))}
        </div>
        <div className="pos__pay" data-ly-hold="2400" data-ly-steps="900">
          <div className="pos__total">
            <small>Total, VAT {sale.vat} included</small>
            <strong>MWK {sale.total}</strong>
          </div>
          <div className="pos__state" data-step="">
            <i className="pos__ok">✓</i>
            <span>
              <b>Card approved</b> {sale.card}
            </span>
          </div>
          <div className="pos__state" data-step="">
            <i className="pos__ok">✓</i>
            <span>
              <b>Receipt printed</b> {sale.number}
            </span>
          </div>
          <div className="pos__state pos__state--eis" data-step="">
            <i className="pos__ok">✓</i>
            <span>
              <b>MRA EIS</b> invoice accepted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
