import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./About.module.css";

const HIGHLIGHTS = [
  { label: "10+ years in the UAE", icon: "/clients-icons/steroids.svg" },
  { label: "Certified CSP", icon: "/clients-icons/vape.svg" },
  { label: "Dubai-based team", icon: "/clients-icons/gaming.svg" },
  { label: "10+ languages", icon: "/clients-icons/subscriptions.svg" },
  { label: "All 7 Emirates", icon: "/clients-icons/courses.svg" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copyCol} data-reveal>
          <h2 className={styles.title}>
            10+ years of UAE experience behind every renewal.
          </h2>

          <div className={styles.copy}>
            <p>
              Renew-It is a Dubai-based Corporate Service Provider helping
              individuals and businesses keep their documents valid, compliant and
              up to date.
            </p>
            <p>
              For more than 10 years, our team has worked with UAE government
              authorities, free zones and regulators across corporate, residency
              and immigration services.
            </p>
            <p>
              We are an officially certified Corporate Service Provider and an
              official partner of Dubai’s Department of Economy and Tourism.
            </p>
            <p>
              Our professional multilingual team speaks 10+ languages and supports
              clients across all 7 Emirates.
            </p>
          </div>
        </div>

        <div
          className={styles.visual}
          data-reveal="left"
          style={{ "--reveal-delay": 80 } as CSSProperties}
        >
          <Image
            src="/dubai/skyline.jpg"
            alt="Dubai skyline with Burj Khalifa"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.photo}
            priority
          />
          <div className={styles.visualVeil} />
        </div>

        <ul className={styles.highlights}>
          {HIGHLIGHTS.map((item, index) => (
            <li
              key={item.label}
              data-reveal="scale"
              style={{ "--reveal-delay": index * 70 } as CSSProperties}
            >
              <Image
                src={item.icon}
                alt=""
                width={48}
                height={48}
                className={styles.highlightIcon}
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        <div
          className={styles.ctaWrap}
          data-reveal
          style={{ "--reveal-delay": 120 } as CSSProperties}
        >
          <CtaButton href="#contact" variant="light">
            Get my renewal quote
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
