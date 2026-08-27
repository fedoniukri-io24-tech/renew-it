import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import { HOW_IT_WORKS_STEPS } from "@/lib/how-it-works";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title} data-reveal>Renew in 4 simple steps.</h2>

        <ol className={styles.steps}>
          {HOW_IT_WORKS_STEPS.map((step, index) => (
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
