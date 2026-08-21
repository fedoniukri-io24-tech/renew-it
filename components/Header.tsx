"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${isOpen ? styles.headerOpen : ""}`}>
      <a href="#" className={styles.logo} aria-label="Renew-It! home" onClick={closeMenu}>
        <Image
          src="/logo.png"
          alt="Renew-It!"
          width={2172}
          height={724}
          priority
          className={styles.logoImg}
        />
      </a>

      <nav className={styles.nav} aria-label="Main navigation">
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <a href="#contact" className={styles.btnHeader}>
        Get a consultation
        <span className={styles.arrowIcon} aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>

      <button
        type="button"
        className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpenTop : ""}`} />
        <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpenHide : ""}`} />
        <span className={`${styles.burgerLine} ${isOpen ? styles.burgerLineOpenBottom : ""}`} />
      </button>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={styles.btnHeaderMobile} onClick={closeMenu}>
          <span className={styles.btnLabel}>Get a consultation</span>
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
    </header>
  );
}
