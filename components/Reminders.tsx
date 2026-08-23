import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./Reminders.module.css";

const REMINDERS = [
  {
    when: "30 days before",
    text: "First reminder.",
    icon: "/clients-icons/reminder-30.svg",
  },
  {
    when: "14 days before",
    text: "Follow-up reminder.",
    icon: "/clients-icons/reminder-14.svg",
  },
  {
    when: "7 days before",
    text: "Final reminder.",
    icon: "/clients-icons/reminder-7.svg",
  },
];

export default function Reminders() {
  return (
    <section id="reminders" className={styles.section}>
      <div className={styles.bg}>
        <Image
          src="/dubai/night.jpg"
          alt=""
          fill
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.bgVeil} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.intro} data-reveal>
          <h2 className={styles.title}>Documents expire. We remember.</h2>
          <p className={styles.text}>
            Once your renewal is completed, we can keep track of the next expiry
            date and remind you before it is due.
          </p>
        </div>

        <ol className={styles.list}>
          {REMINDERS.map((item, index) => (
            <li
              key={item.when}
              className={styles.item}
              data-reveal="scale"
              style={{ "--reveal-delay": index * 90 } as CSSProperties}
            >
              <Image
                src={item.icon}
                alt=""
                width={80}
                height={80}
                className={styles.icon}
              />
              <h3 className={styles.when}>{item.when}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ol>

        <div
          className={styles.cta}
          data-reveal
          style={{ "--reveal-delay": 140 } as CSSProperties}
        >
          <p className={styles.closing}>We remember, so you don’t have to.</p>
          <CtaButton href="#contact" variant="light">
            Set my renewal reminder
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
