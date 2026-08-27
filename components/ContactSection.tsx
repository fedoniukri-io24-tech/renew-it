import type { CSSProperties } from "react";
import ContactForm from "./ContactForm";
import CtaButton from "./CtaButton";
import { CONTACT } from "@/lib/contact";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.shell}`}>
        <div className={styles.inner}>
          <div className={styles.info} data-reveal="left">
            <h2 className={styles.title}>Something expiring soon?</h2>
            <p className={styles.text}>
              Send us the document and its expiry date. We’ll check what is
              required, explain the process and provide a clear quotation before
              we start.
            </p>

            <div className={styles.ctaRow}>
              <CtaButton href="#contact-form" className={styles.ctaBtn}>
                Get my renewal quote
              </CtaButton>
              <CtaButton
                href={CONTACT.whatsapp}
                variant="outline"
                external
                className={styles.ctaBtn}
              >
                Chat on WhatsApp
              </CtaButton>
            </div>

            <p className={styles.note}>
              No complicated forms. Just send us what’s due.
            </p>

            <ul className={styles.details}>
              <li>
                <span className={styles.detailLabel}>Contact</span>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <span className={styles.detailLabel}>Email</span>
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </li>
              <li>
                <span className={styles.detailLabel}>Office</span>
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>

          <div
            id="contact-form"
            className={styles.formWrap}
            data-reveal="right"
            style={{ "--reveal-delay": 120 } as CSSProperties}
          >
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Request your renewal quote</h3>
              <p className={styles.formSubtitle}>
                Tell us what’s due — we’ll reply with next steps and a clear
                breakdown.
              </p>
              <ContactForm formSource="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
