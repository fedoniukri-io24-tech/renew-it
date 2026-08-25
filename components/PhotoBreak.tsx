import type { CSSProperties } from "react";
import Image from "next/image";
import CtaButton from "./CtaButton";
import styles from "./PhotoBreak.module.css";

type PhotoBreakProps = {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
  tall?: boolean;
  short?: boolean;
  fullWidth?: boolean;
  position?: string;
  /** CSS aspect-ratio value, e.g. "3 / 2" — keeps original photo proportions */
  aspectRatio?: string;
};

export default function PhotoBreak({
  src,
  alt,
  title,
  caption,
  description,
  ctaHref,
  ctaLabel,
  tall = false,
  short = false,
  fullWidth = false,
  position = "center",
  aspectRatio,
}: PhotoBreakProps) {
  const heading = title || caption;
  const preserveRatio = Boolean(aspectRatio);

  return (
    <section
      className={`${styles.break} ${fullWidth ? styles.fullWidth : ""}`}
      aria-label={heading || alt}
    >
      <div
        className={`${styles.frame} ${tall ? styles.tall : ""} ${short ? styles.short : ""} ${
          fullWidth ? styles.frameFull : ""
        } ${preserveRatio ? styles.frameRatio : ""}`}
        style={preserveRatio ? ({ "--photo-ratio": aspectRatio } as CSSProperties) : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className={preserveRatio ? styles.imageRatio : styles.image}
          style={preserveRatio ? undefined : { objectPosition: position }}
          priority={false}
        />
        <div className={styles.veil} />
        {heading ? (
          <div
            className={styles.content}
            data-reveal
            style={{ "--reveal-delay": 80 } as CSSProperties}
          >
            <h2 className={styles.title}>{heading}</h2>
            {description ? <p className={styles.description}>{description}</p> : null}
            {ctaHref && ctaLabel ? (
              <CtaButton href={ctaHref} variant="light" className={styles.cta}>
                {ctaLabel}
              </CtaButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
