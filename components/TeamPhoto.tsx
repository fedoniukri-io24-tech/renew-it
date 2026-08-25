import type { CSSProperties } from "react";
import Image from "next/image";
import styles from "./TeamPhoto.module.css";

type TeamPhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export default function TeamPhoto({
  src,
  alt,
  width,
  height,
  caption,
}: TeamPhotoProps) {
  return (
    <section className={styles.section} aria-label={caption || alt}>
      <div className={`container ${styles.inner}`}>
        <figure
          className={styles.figure}
          data-reveal
          style={{ "--reveal-delay": 60 } as CSSProperties}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(max-width: 900px) 100vw, min(1120px, 92vw)"
            className={styles.photo}
          />
          {caption ? (
            <figcaption className={styles.caption}>{caption}</figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
