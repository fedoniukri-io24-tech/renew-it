import ContactForm from "./ContactForm";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.info}>
          <h2 className={styles.title}>Ready to renew? Let’s talk.</h2>
          <p className={styles.text}>
            Tell us what’s due — visa, Emirates ID, trade license, or business
            documents. Our Dubai team will get back to you with next steps.
          </p>

          <ul className={styles.details}>
            <li>
              <span className={styles.detailLabel}>Phone</span>
              <a href="tel:+971400000000">+971 (0) 4 000 0000</a>
            </li>
            <li>
              <span className={styles.detailLabel}>Email</span>
              <a href="mailto:hello@renew-it.ae">hello@renew-it.ae</a>
            </li>
            <li>
              <span className={styles.detailLabel}>Office</span>
              <span>Dubai, United Arab Emirates</span>
            </li>
          </ul>
        </div>

        <div className={styles.formWrap}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
