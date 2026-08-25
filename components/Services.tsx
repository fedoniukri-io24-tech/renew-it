"use client";

import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./Services.module.css";

const CATEGORIES = [
  {
    title: "Company & Corporate",
    icon: "/clients-icons/ecommerce.svg",
    items: [
      "Trade Licenses",
      "Free Zone Licenses",
      "Mainland Licenses",
      "Establishment Cards",
      "Immigration Cards",
      "Corporate Documents",
      "Government Permits & Approvals",
    ],
  },
  {
    title: "Visas & Residency",
    icon: "/clients-icons/passport.svg",
    items: [
      "Investor Visas",
      "Golden Visas",
      "Partner Visas",
      "Family & Dependent Visas",
      "Employee Visas",
      "Residence Visas",
      "Emirates IDs",
    ],
  },
  {
    title: "Other Renewals",
    icon: "/clients-icons/permits.svg",
    items: [
      "Work Permits",
      "Government Approvals",
      "Regulatory Documents",
      "Other documents with an expiry or renewal date",
    ],
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const clamped = Math.max(0, Math.min(CATEGORIES.length - 1, index));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (!card) return;

    setActiveIndex(clamped);
    track.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    const scrollLeft = track.scrollLeft;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    track.childNodes.forEach((node, index) => {
      const card = node as HTMLElement;
      const distance = Math.abs(card.offsetLeft - scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(nearestIndex);
  };

  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro} data-reveal>
          <h2 className={styles.title}>If it expires, we help you renew it.</h2>
          <p className={styles.text}>
            Renew-It is focused on one thing: renewing documents that require
            regular renewal in the UAE.
          </p>
          <p className={styles.note}>For individuals, families and businesses.</p>
        </div>

        <div className={styles.sliderWrap} data-reveal="fade" style={{ "--reveal-delay": 100 } as CSSProperties}>
          <div className={styles.sliderViewport}>
            <div className={styles.grid} ref={trackRef} onScroll={handleScroll}>
              {CATEGORIES.map((category, index) => (
                <div
                  key={category.title}
                  className={styles.category}
                  data-reveal="scale"
                  style={{ "--reveal-delay": index * 90 } as CSSProperties}
                >
                  <div className={styles.iconWrap}>
                    <Image
                      src={category.icon}
                      alt=""
                      width={92}
                      height={92}
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                  <ul className={styles.list}>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.sliderControls}>
            <button
              type="button"
              className={styles.sliderBtn}
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous category"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M9 3L4 7l5 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className={styles.sliderBtn}
              onClick={handleNext}
              disabled={activeIndex === CATEGORIES.length - 1}
              aria-label="Next category"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M5 3l5 4-5 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={styles.footerRow}
          data-reveal
          style={{ "--reveal-delay": 160 } as CSSProperties}
        >
          <p className={styles.footerNote}>
            Not sure if we can renew your document? Send it to us and we’ll
            check.
          </p>
          <CtaButton href="#contact">Get my renewal quote</CtaButton>
        </div>
      </div>
    </section>
  );
}
