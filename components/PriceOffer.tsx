import type { CSSProperties } from "react";
import CtaButton from "./CtaButton";
import styles from "./PriceOffer.module.css";

export default function PriceOffer() {
  return (
    <section id="offer" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.main} data-reveal>
          <h2 className={styles.title}>
            Renew Any UAE License for Just
          </h2>
          <p className={styles.price} aria-label="AED 299">
            <span className={styles.currency}>AED</span>
            <span className={styles.amount}>299</span>
          </p>
          <p className={styles.subtitle}>
            One simple service fee. No hidden charges.
          </p>
        </div>

        <div
          className={styles.details}
          data-reveal
          style={{ "--reveal-delay": 90 } as CSSProperties}
        >
          <p>
            AED 299 is our professional service fee for handling your license
            renewal.
          </p>
          <p>
            Government and authority fees are paid separately, at the official
            cost shown on the payment voucher.
          </p>
          <p className={styles.emphasis}>
            You see exactly what you pay — and where it goes.
          </p>
        </div>

        <div
          className={styles.actions}
          data-reveal
          style={{ "--reveal-delay": 140 } as CSSProperties}
        >
          <CtaButton href="#contact" variant="light" className={styles.cta}>
            Get my renewal quote
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
