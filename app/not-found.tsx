import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./not-found.module.css";

export const metadata = createPageMetadata({
  title: "Page not found",
  description:
    "This page does not exist. Return to Renew-It for UAE trade license, visa, Emirates ID and corporate document renewals across all 7 Emirates.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.notFound}>
        <div className={styles.inner}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>This page could not be found.</h1>
          <p className={styles.text}>
            The link may be outdated or the page may have moved. Head back to
            Renew-It to explore UAE renewals, pricing and contact options.
          </p>
          <div className={styles.actions}>
            <CtaButton href="/">Back to home</CtaButton>
            <Link href="/#contact" className={styles.link}>
              Contact our team
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
