import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./Why.module.css";

const REASONS = [
  {
    title: "One point of contact",
    text: "Send us what needs to be renewed. We coordinate the process for you.",
    icon: "/clients-icons/one-contact.svg",
  },
  {
    title: "Clear pricing",
    text: "You see the full cost before we start.",
    icon: "/clients-icons/clear-price.svg",
  },
  {
    title: "Transparent government fees",
    text: "Government and third-party charges are shown separately from our service fee.",
    icon: "/clients-icons/transparent-fees.svg",
  },
  {
    title: "Official payment proof",
    text: "Where available, we share official government payment vouchers and receipts.",
    icon: "/clients-icons/payment-proof.svg",
  },
  {
    title: "Regular updates",
    text: "You always know where your renewal stands.",
    icon: "/clients-icons/status-updates.svg",
  },
  {
    title: "Renewal reminders",
    text: "We can remind you before your documents expire again.",
    icon: "/clients-icons/renewal-alert.svg",
  },
  {
    title: "Real human support",
    text: "Speak directly with our Dubai-based team whenever you need assistance.",
    icon: "/clients-icons/human-support.svg",
  },
];

export default function Why() {
  return (
    <section id="why" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro} data-reveal>
          <h2 className={styles.title}>Renewals should be simple.</h2>
          <p className={styles.text}>
            You shouldn’t have to deal with multiple government portals, typing
            centres, service providers and different points of contact.
          </p>
          <p className={styles.lead}>
            With Renew-It, everything is managed through one team.
          </p>
          <CtaButton href="#contact" className={styles.introCta}>
            Start a renewal
          </CtaButton>
        </div>

        <ul className={styles.grid}>
          {REASONS.map((reason, index) => (
            <li
              key={reason.title}
              className={styles.item}
              data-reveal="scale"
              style={{ "--reveal-delay": index * 70 } as CSSProperties}
            >
              <div className={styles.iconWrap}>
                <Image
                  src={reason.icon}
                  alt=""
                  width={96}
                  height={96}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.itemTitle}>{reason.title}</h3>
              <p className={styles.itemText}>{reason.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
