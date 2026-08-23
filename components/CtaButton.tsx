"use client";

import type { ReactNode } from "react";
import { isQuoteModalHref } from "@/lib/is-quote-modal-href";
import { useQuoteModal } from "./QuoteModalProvider";
import styles from "./CtaButton.module.css";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
  className?: string;
  external?: boolean;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CtaButtonProps) {
  const { openQuoteModal } = useQuoteModal();
  const classNames = `${styles.btn} ${styles[variant]} ${className}`;

  if (!external && isQuoteModalHref(href)) {
    return (
      <button type="button" className={classNames} onClick={openQuoteModal}>
        <span className={styles.label}>{children}</span>
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
    );
  }

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} className={classNames} {...externalProps}>
      <span className={styles.label}>{children}</span>
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
  );
}
