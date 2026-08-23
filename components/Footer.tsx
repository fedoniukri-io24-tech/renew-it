import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { CONTACT } from "@/lib/contact";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "What we renew?", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div
            className={styles.brand}
            data-reveal
            style={{ "--reveal-delay": 40 } as CSSProperties}
          >
            <a href="#" className={styles.logo} aria-label="Renew-It home">
            <Image
              src="/logo.png"
              alt="Renew-It"
              width={2182}
              height={721}
              className={styles.logoImg}
            />
            </a>
            <p className={styles.tagline}>
              UAE-based Corporate Service Provider
            </p>
            <p className={styles.pitch}>
              Renewals made simple, transparent and on time.
            </p>
          </div>

          <nav
            className={styles.nav}
            aria-label="Footer navigation"
            data-reveal
            style={{ "--reveal-delay": 80 } as CSSProperties}
          >
            <ul className={styles.navList}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={styles.ctaBlock}
            data-reveal
            style={{ "--reveal-delay": 120 } as CSSProperties}
          >
            <p className={styles.ctaLabel}>Need a renewal?</p>
            <CtaButton href="#contact" variant="light" className={styles.ctaBtn}>
              Get my renewal quote
            </CtaButton>
            <CtaButton
              href={CONTACT.whatsapp}
              variant="light"
              external
              className={styles.ctaBtn}
            >
              Chat on WhatsApp
            </CtaButton>
          </div>
        </div>

        <div
          className={styles.bottom}
          data-reveal="fade"
          style={{ "--reveal-delay": 160 } as CSSProperties}
        >
          <div className={styles.meta}>
            <p className={styles.location}>Dubai, United Arab Emirates</p>
            <p className={styles.coverage}>
              Serving individuals and businesses across all 7 Emirates
            </p>
          </div>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Renew-It. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
