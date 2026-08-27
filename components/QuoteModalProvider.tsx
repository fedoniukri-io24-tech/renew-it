"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import ContactForm from "./ContactForm";
import styles from "./QuoteModal.module.css";

type QuoteModalContextValue = {
  openQuoteModal: () => void;
  closeQuoteModal: () => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within QuoteModalProvider");
  }
  return context;
}

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuoteModal = useCallback(() => setIsOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeQuoteModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeQuoteModal]);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}

      {isOpen ? (
        <div
          className={styles.overlay}
          onClick={closeQuoteModal}
          role="presentation"
        >
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.close}
              onClick={closeQuoteModal}
              aria-label="Close form"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 3l8 8M11 3l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className={styles.formCard}>
              <h2 id="quote-modal-title" className={styles.formTitle}>
                Request your renewal quote
              </h2>
              <p className={styles.formSubtitle}>
                Tell us what&apos;s due — we&apos;ll reply with next steps and a clear
                breakdown.
              </p>
              <ContactForm idPrefix="modal" formSource="quote-modal" />
            </div>
          </div>
        </div>
      ) : null}
    </QuoteModalContext.Provider>
  );
}
