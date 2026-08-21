import Image from "next/image";
import Header from "./Header";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroFrame}>
        <div className={styles.heroMedia}>
          <Image
            src="/hero.png"
            alt="Renew-It! office in Dubai"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 92vw"
            className={styles.heroBg}
          />
        </div>

        <div className={styles.heroInner}>
          <Header />

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleAccent}>Due?</span>{" "}
              We{" "}
              <span className={styles.titleEmphasis}>renew.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              <span className={styles.subtitleLead}>
                Stay compliant without the bureaucracy.
              </span>
              Fast, reliable renewals for visas, Emirates ID, trade licenses, and
              business documents.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#contact" className={styles.btnPrimary}>
                Start a renewal
                <span className={styles.arrowIcon} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
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
                View our services
              </a>
            </div>

            <div className={styles.infoCard}>
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
                  Local Dubai team. Clear timelines. Zero paperwork stress.
                </span>
                <a href="#how-it-works" className={styles.cardLink}>
                  How it works
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
