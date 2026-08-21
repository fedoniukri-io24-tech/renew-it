import styles from "./About.module.css";

const STEPS = [
  {
    title: "Tell us what’s due",
    text: "Share the document type and expiry — visa, Emirates ID, license, or other paperwork.",
  },
  {
    title: "We handle the process",
    text: "Our local team prepares, submits, and tracks everything with clear status updates.",
  },
  {
    title: "You stay compliant",
    text: "Get renewals completed on time — without the queues, portals, and guesswork.",
  },
];

export default function About() {
  return (
    <>
      <section id="how-it-works" className={styles.stepsSection}>
        <div className={`container ${styles.stepsInner}`}>
          <div className={styles.intro}>
            <h2 className={styles.title}>Three steps. Zero bureaucracy stress.</h2>
          </div>

          <ol className={styles.steps}>
            {STEPS.map((step, index) => (
              <li key={step.title} className={styles.step}>
                <span className={styles.stepNum}>0{index + 1}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="about" className={styles.aboutSection}>
        <div className={`container ${styles.aboutInner}`}>
          <h2 className={styles.aboutTitle}>
            Fast, reliable, and local — built for Dubai compliance.
          </h2>
          <p className={styles.aboutText}>
            Renew-It! is a document renewal service for individuals and companies in
            Dubai and the UAE. We keep you legally compliant so you can focus on
            living and working — not chasing paperwork.{" "}
            <strong>Due? We renew.</strong>
          </p>
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
        </div>
      </section>
    </>
  );
}
