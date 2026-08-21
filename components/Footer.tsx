import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo} aria-label="Renew-It! home">
          <Image
            src="/logo.png"
            alt="Renew-It!"
            width={2172}
            height={724}
            className={styles.logoImg}
          />
        </a>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Renew-It!. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
