"use client";

import { useState, type CSSProperties } from "react";
import CtaButton from "./CtaButton";
import { FAQ_ITEMS } from "@/lib/faq";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title} data-reveal>Frequently Asked Questions</h2>

        <div className={styles.list}>
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={styles.item}
                data-reveal
                style={{ "--reveal-delay": index * 50 } as CSSProperties}
              >
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? <p className={styles.answer}>{item.answer}</p> : null}
              </div>
            );
          })}
        </div>

        <div className={styles.ctaWrap} data-reveal style={{ "--reveal-delay": 120 } as CSSProperties}>
          <CtaButton href="#contact">Still have questions? Get a quote</CtaButton>
        </div>
      </div>
    </section>
  );
}
