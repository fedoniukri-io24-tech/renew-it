import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    title: "Tell us what needs to be renewed",
    text: "Send us the document and its expiry date.",
    icon: "/clients-icons/step-share.svg",
  },
  {
    title: "Get a clear quote",
    text: "We show you the government fees, third-party costs and our service fee separately.",
    icon: "/clients-icons/step-quote.svg",
  },
  {
    title: "We handle the process",
    text: "Our team prepares, submits and follows up on the renewal while keeping you updated.",
    icon: "/clients-icons/step-process.svg",
  },
  {
    title: "Receive your renewed document",
    text: "Once completed, we send you the renewed document and can track its next expiry date for you.",
    icon: "/clients-icons/step-deliver.svg",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title} data-reveal>Renew in 4 simple steps.</h2>

        <ol className={styles.steps}>
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className={styles.step}
              data-reveal="scale"
              style={{ "--reveal-delay": index * 90 } as CSSProperties}
            >
              <div className={styles.iconWrap}>
                <Image
                  src={step.icon}
                  alt=""
                  width={100}
                  height={100}
                  className={styles.icon}
                />
              </div>
              <span className={styles.stepNum}>0{index + 1}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div
          className={styles.ctaWrap}
          data-reveal
          style={{ "--reveal-delay": 120 } as CSSProperties}
        >
          <CtaButton href="#contact">Start my renewal</CtaButton>
        </div>
      </div>
    </section>
  );
}
