import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./Transparency.module.css";

const ITEMS = [
  {
    title: "Government & regulator fees",
    text: "Official fees payable to UAE authorities.",
    icon: "/clients-icons/gov-fees.svg",
  },
  {
    title: "Third-party costs",
    text: "Medical tests, insurance, courier, typing or other external costs, where applicable.",
    icon: "/clients-icons/pricing-tag.svg",
  },
  {
    title: "Renew-It service fee",
    text: "Our professional fee is always shown separately.",
    icon: "/clients-icons/breakdown.svg",
  },
  {
    title: "Official payment vouchers",
    text: "Where available, we provide official receipts and payment confirmations for government transactions processed on your behalf.",
    icon: "/clients-icons/receipt.svg",
  },
];

export default function Transparency() {
  return (
    <section id="pricing" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro} data-reveal>
          <h2 className={styles.title}>
            You know exactly what you are paying for.
          </h2>
          <p className={styles.text}>
            Before we start, you receive a clear cost breakdown.
          </p>
        </div>

        <div
          className={styles.visualBand}
          data-reveal="fade"
          style={{ "--reveal-delay": 100 } as CSSProperties}
        >
          <Image
            src="/dubai/business.jpg"
            alt=""
            fill
            sizes="100vw"
            className={styles.photo}
          />
          <div className={styles.visualVeil} />
          <blockquote className={styles.photoQuote}>
            Government fees, third-party costs and our service fee — shown
            separately.
          </blockquote>
        </div>

        <ul className={styles.list}>
          {ITEMS.map((item, index) => (
            <li
              key={item.title}
              className={styles.item}
              data-reveal="scale"
              style={{ "--reveal-delay": index * 80 } as CSSProperties}
            >
              <Image
                src={item.icon}
                alt=""
                width={72}
                height={72}
                className={styles.icon}
              />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>

        <div
          className={styles.closing}
          data-reveal
          style={{ "--reveal-delay": 120 } as CSSProperties}
        >
          <div className={styles.closingTextBlock}>
            <p className={styles.closingLead}>No hidden fees. No surprise charges.</p>
            <p className={styles.closingText}>
              You see the costs. You approve them. We proceed.
            </p>
          </div>
          <CtaButton href="#contact">Get a clear quote</CtaButton>
        </div>
      </div>
    </section>
  );
}
