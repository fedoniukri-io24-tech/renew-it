import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroFrame}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.png"
            alt="Renew-It Dubai office — UAE trade license, visa and Emirates ID renewals"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 92vw"
            className={styles.heroBg}
          />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={`${styles.heroTitle} hero-enter`}>
              <span className={styles.titleAccent}>Due?</span>{" "}
              We{" "}
              <span className={styles.titleEmphasis}>renew.</span>
            </h1>

            <p className={`${styles.heroSubtitle} hero-enter hero-enter-delay-1`}>
              <span className={styles.subtitleLead}>
                Renewals made simple, transparent and on time.
              </span>
              Trade licenses, visas, Emirates IDs, company formation and more —
              across all 7 Emirates.
            </p>

            <div className={`${styles.ctaGroup} hero-enter hero-enter-delay-2`}>
              <CtaButton href="#contact" className={styles.heroCta}>
                Get my renewal quote
              </CtaButton>
              <a href="#services" className={styles.btnVideo}>
                <span className={styles.playIcon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4 9h10M10 5l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                What we renew?
              </a>
            </div>

            <div className={`${styles.infoCard} hero-enter hero-enter-delay-3`}>
              <div className={styles.cardImg}>
                <Image
                  src="/hero.png"
                  alt=""
                  fill
                  sizes="72px"
                  className={styles.cardImgPhoto}
                />
              </div>
              <div className={styles.cardText}>
                <span className={styles.cardTitle}>
                  Certified CSP. Dubai-based team. Best price guaranteed.
                </span>
                <a href="#beyond" className={styles.cardLink}>
                  Beyond renewals
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M2 6h8M7 3l3 3-3 3"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
