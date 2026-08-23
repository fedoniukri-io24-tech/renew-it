import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./Beyond.module.css";

const SERVICES = [
  { label: "UAE Golden Visas", icon: "/clients-icons/golden-visa.svg" },
  { label: "Free Zone company formation", icon: "/clients-icons/freezone.svg" },
  { label: "Mainland company formation", icon: "/clients-icons/mainland.svg" },
  { label: "Residency and investor visas", icon: "/clients-icons/residency.svg" },
  {
    label: "PRO, immigration and government services",
    icon: "/clients-icons/pro-services.svg",
  },
  {
    label: "Permits, approvals and corporate documents",
    icon: "/clients-icons/permits.svg",
  },
];

export default function Beyond() {
  return (
    <section id="beyond" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div
          className={styles.visual}
          data-reveal="left"
          style={{ "--reveal-delay": 60 } as CSSProperties}
        >
          <Image
            src="/dubai/downtown.jpg"
            alt="Dubai downtown skyline"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.photo}
          />
          <div className={styles.visualVeil} />
        </div>

        <div className={styles.main}>
          <h2 className={styles.title} data-reveal>Renew-It goes beyond renewals</h2>
          <p className={styles.lead} data-reveal style={{ "--reveal-delay": 80 } as CSSProperties}>
            Whether you need to renew an existing document or obtain something
            new, our team can help.
          </p>

          <ul className={styles.list}>
            {SERVICES.map((item, index) => (
              <li
                key={item.label}
                data-reveal
                style={{ "--reveal-delay": 100 + index * 60 } as CSSProperties}
              >
                <span className={styles.listIcon}>
                  <Image src={item.icon} alt="" width={56} height={56} />
                </span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>

          <p
            className={styles.text}
            data-reveal
            style={{ "--reveal-delay": 180 } as CSSProperties}
          >
            And once everything is issued, we can keep track of the expiry dates
            and help you renew them when the time comes.
          </p>
          <p
            className={styles.closing}
            data-reveal
            style={{ "--reveal-delay": 220 } as CSSProperties}
          >
            From your first UAE document to every renewal after that — one team.
          </p>

          <aside
            className={styles.guarantee}
            aria-label="Best price guarantee"
            data-reveal="scale"
            style={{ "--reveal-delay": 260 } as CSSProperties}
          >
            <div className={styles.guaranteeIcon}>
              <Image
                src="/clients-icons/guarantee.svg"
                alt=""
                width={72}
                height={72}
              />
            </div>
            <p className={styles.guaranteeLabel}>Best price guaranteed</p>
            <p className={styles.guaranteeText}>
              Clear quotations before we start — government fees, third-party
              costs and our service fee shown separately.
            </p>
            <CtaButton href="#contact" variant="light">
              Get my renewal quote
            </CtaButton>
          </aside>
        </div>
      </div>
    </section>
  );
}
