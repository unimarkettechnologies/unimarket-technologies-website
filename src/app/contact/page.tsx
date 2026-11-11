import type { Metadata } from 'next';
import type { CSSProperties } from 'react';

import { primaryAction, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact: POS and MRA EIS projects in Malawi',
  description:
    'Send Unimarket Technologies a few lines about your till, card payments or invoicing, and get a suggested first step from the Blantyre team.',
  openGraph: {
    title: 'Contact: POS and MRA EIS projects in Malawi',
    description: 'A few lines about your till, card payments or invoicing are enough to start.',
  },
};

/*
  /contact (software, the short page). Screens at 1440x900:
  hero triptych (outputs: a receipt, an EIS invoice, a website, an app screen, a report; sets change every 2.8 s,
  the large button on the right line) · #enquiry the booking-form pattern, run by system.js and sent to the local
  /api/enquiry prototype route · footer.closing
*/


const pos = (left: string, top: string, width: string, height?: string): CSSProperties => ({ left, top, width, height });

export default function ContactPage() {
  return (
    <main id="top">
      <section aria-labelledby="hero-h" className="hero hero--triptych" data-enter="">
        <div className="wrap">
          <div className="hero-text grid hero__grid">
            <div className="span-3">
              <h1 id="hero-h">POS and MRA EIS projects in Malawi</h1>
              <p className="hero__lead">
                Tell us how your counter runs today. Our team on Victoria Avenue, Blantyre, replies with a suggested
                first step.
              </p>
            </div>
            <div
              aria-label="Work Unimarket builds: a till receipt, an invoice accepted by MRA EIS, a shop website, a delivery app and a daily sales report"
              className="ly-collage span-6 start-4"
              role="img"
            >
              <div className="ly-collage__set is-on">
                <div className="ly-piece" style={pos('50%', '34%', '46%', '60%')}>
                  <img alt="" src="/images/retail-pos-payment.webp" style={{ objectPosition: '50% 50%' }} />
                </div>
                <div className="ly-piece pc-receipt" style={pos('4%', '6%', '42%')}>
                  <b>Front counter, Till 2</b>
                  <small>Receipt R-20418 · 10:42</small>
                  <div className="ln">
                    <span>Cooking oil, 2 L ×2</span>
                    <span>19,800</span>
                  </div>
                  <div className="ln">
                    <span>Rice, 5 kg</span>
                    <span>21,500</span>
                  </div>
                  <div className="ln">
                    <span>Sugar, 2 kg</span>
                    <span>6,450</span>
                  </div>
                  <div className="ln">
                    <span>Bath soap ×4</span>
                    <span>6,500</span>
                  </div>
                  <div className="ln ln--total">
                    <span>Total MWK</span>
                    <span>54,250</span>
                  </div>
                </div>
                <div className="ly-piece pc-eis" style={pos('50%', '8%', '44%')}>
                  <small>MRA EIS</small>
                  <b>Invoice R-20418</b>
                  <small>10:42:03</small>
                  <span className="pc-ok">Accepted</span>
                </div>
              </div>
              <div aria-hidden="true" className="ly-collage__set">
                <div className="ly-piece pc-browser" style={pos('4%', '6%', '62%', '62%')}>
                  <div className="pc-browser__bar">
                    <i />
                    <i />
                    <i />
                    <span>Online orders</span>
                  </div>
                  <div className="pc-browser__body">
                    <strong>Hardware and building supplies</strong>
                    <span>Order by 15:00 for next-day delivery in Blantyre.</span>
                    <em>Start an order</em>
                  </div>
                </div>
                <div className="ly-piece pc-phone" style={pos('70%', '18%', '26%', '72%')}>
                  <small>Delivery</small>
                  <b>On its way</b>
                  <span>Slot 14:00 to 16:00</span>
                  <span className="pc-ok">Paid by card</span>
                </div>
                <div className="ly-piece" style={pos('8%', '72%', '46%', '24%')}>
                  <img alt="" src="/images/technology-team.webp" style={{ objectPosition: '50% 40%' }} />
                </div>
              </div>
              <div aria-hidden="true" className="ly-collage__set">
                <div className="ly-piece" style={pos('4%', '6%', '46%', '50%')}>
                  <img alt="" src="/images/inventory-team.webp" style={{ objectPosition: '50% 45%' }} />
                </div>
                <div className="ly-piece pc-report" style={pos('48%', '40%', '48%')}>
                  <small>Day closed · 38 sales</small>
                  <div className="bar">
                    <span>Till 1</span>
                    <i style={{ '--v': '72%' } as CSSProperties} />
                  </div>
                  <div className="bar">
                    <span>Till 2</span>
                    <i style={{ '--v': '54%' } as CSSProperties} />
                  </div>
                  <div className="bar">
                    <span>Online</span>
                    <i style={{ '--v': '18%' } as CSSProperties} />
                  </div>
                </div>
                <div className="ly-piece pc-eis" style={pos('8%', '62%', '36%')}>
                  <small>Card terminal</small>
                  <b>MWK 54,250</b>
                  <span className="pc-ok">Approved</span>
                </div>
              </div>
            </div>
            <div className="span-3 start-10 hero__cta">
              <a className="btn btn--primary" href="#enquiry">
                {primaryAction.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="office-h" className="section statement" data-moment="liquid-type" id="office">
        <div className="wrap">
          <h2 className="mo-lt__type" id="office-h">
            Victoria Avenue, Blantyre
          </h2>
          <p className="statement__sub t-lead">
            The Unimarket office in Blantyre, where we plan POS, card machine and MRA EIS work with the teams who run
            the counter.
          </p>
          <a className="link statement__link" href="https://www.openstreetmap.org/search?query=Victoria%20Avenue%20Blantyre">
            Get directions
          </a>
        </div>
      </section>

      <section aria-labelledby="enquiry-h" className="section" id="enquiry">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-6">
              <h2 id="enquiry-h">Tell us about your business</h2>
              <p className="t-lead">
                A few lines about the counter and the problem are enough. We reply with a suggested next step.
              </p>
              <ul className="facts">
                <li>
                  <a className="link" href={`mailto:${siteConfig.email}`}>
                    Email the team
                  </a>
                </li>
              </ul>
              <div className="frame frame--photo q-photo">
                <img
                  alt="An operations worker reviewing electronic invoices and reports at a desk"
                  className="frame__img"
                  data-source="client"
                  data-subject="invoice review at a desk"
                  loading="lazy"
                  src="/images/solution-cards/electronic-invoicing.webp"
                />
              </div>
            </div>
            <div className="form-panel span-6 start-7">
              <form
                action={`mailto:${siteConfig.email}`}
                className="form"
                data-endpoint="/api/enquiry"
                data-sent="Your consultation request is in. While the site is a prototype it is checked and then discarded, so it does not reach our inbox yet."
                encType="text/plain"
                method="post"
                noValidate
              >
                  <div className="field">
                    <label htmlFor="f-name">Name</label>
                    <input aria-describedby="f-name-err" autoComplete="name" id="f-name" name="name" required type="text" />
                    <p className="field__error" hidden id="f-name-err">
                      Write your name.
                    </p>
                  </div>
                  <div className="field">
                    <label htmlFor="f-org">Business or organisation</label>
                    <input
                      aria-describedby="f-org-err"
                      autoComplete="organization"
                      id="f-org"
                      name="organisation"
                      required
                      type="text"
                    />
                    <p className="field__error" hidden id="f-org-err">
                      Write the name of the business.
                    </p>
                  </div>
                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input
                      aria-describedby="f-email-err"
                      autoComplete="email"
                      id="f-email"
                      inputMode="email"
                      name="email"
                      required
                      type="email"
                    />
                    <p className="field__error" hidden id="f-email-err">
                      Write an email address with an @, like name@company.com.
                    </p>
                  </div>
                  <div className="field">
                    <label htmlFor="f-need">What you need</label>
                    <select aria-describedby="f-need-err" defaultValue="" id="f-need" name="need" required>
                      <option disabled value="">
                        Choose one
                      </option>
                      <option>POS software and card machines</option>
                      <option>MRA EIS invoicing</option>
                      <option>Enterprise software</option>
                      <option>UX/UI design</option>
                      <option>A website</option>
                      <option>A full-stack application</option>
                      <option>Not sure yet</option>
                    </select>
                    <p className="field__error" hidden id="f-need-err">
                      Choose what the enquiry is about.
                    </p>
                  </div>
                <div className="field field--full">
                  <label htmlFor="f-msg">How the counter works today</label>
                  <textarea aria-describedby="f-msg-err" id="f-msg" name="message" required rows={3} />
                  <p className="field__error" hidden id="f-msg-err">
                    Write a line or two about what is slow, doubled or unclear.
                  </p>
                </div>
                <div className="field field--full field--check">
                  <input aria-describedby="f-ok-err" id="f-ok" name="consent" required type="checkbox" />
                  <label htmlFor="f-ok">Unimarket Technologies may use these details to reply to this enquiry.</label>
                  <p className="field__error" hidden id="f-ok-err">
                    Tick the box so we may use your details to reply.
                  </p>
                </div>
                <p className="t-small muted">Prototype: this form checks your details and sends them to a test address that keeps nothing.</p>
                <div className="btn-row">
                  <button className="btn btn--primary" type="submit">
                    {primaryAction.label}
                  </button>
                </div>
                <p className="form__status" data-form-status="" role="status" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
