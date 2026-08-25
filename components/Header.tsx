"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useQuoteModal } from "./QuoteModalProvider";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What we renew?", href: "#services" },
  { label: "Beyond renewals", href: "#beyond" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const { openQuoteModal } = useQuoteModal();

  const handleQuoteClick = () => {
    closeMenu();
    openQuoteModal();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`${styles.bar} ${isScrolled ? styles.barScrolled : ""} ${
        isOpen ? styles.barOpen : ""
      }`}
    >
      <header
        className={`container ${styles.header} ${isOpen ? styles.headerOpen : ""}`}
      >
        <a
          href="#"
          className={styles.logo}
          aria-label="Renew-It! home"
          onClick={closeMenu}
        >
        <Image
          src="/logo.png"
          alt="Renew-It!"
          width={2182}
          height={721}
          priority
          className={styles.logoImg}
        />
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className={styles.btnHeader} onClick={handleQuoteClick}>
          Get my renewal quote
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
        </button>

        <button
          type="button"
          className={`${styles.menuToggle} ${isOpen ? styles.menuToggleOpen : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className={styles.menuToggleInner}>
            <span className={styles.menuBracket}>[</span>
            <span className={styles.menuToggleLabel}>menu</span>
            <span className={styles.menuToggleArrow} aria-hidden="true">
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
            <span className={styles.menuBracket}>]</span>
          </span>
        </button>

        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
        >
          <div className={styles.menuBlob} aria-hidden="true" />
          <div className={styles.menuBlobSecondary} aria-hidden="true" />

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

          <button
            type="button"
            className={styles.btnHeaderMobile}
            onClick={handleQuoteClick}
          >
            <span className={styles.btnLabel}>Get my renewal quote</span>
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
          </button>
        </div>
      </header>
    </div>
  );
}
