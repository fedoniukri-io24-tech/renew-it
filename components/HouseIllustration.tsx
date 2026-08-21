import styles from "./HouseIllustration.module.css";

/**
 * Signature element: a single continuous line-art contour of a modern
 * gable-roof country house, sitting on a horizon line, with a sun disc.
 * The roofline "draws in" on load — a quiet, one-time gesture rather than
 * a decorative loop, echoing the idea of a house being built line by line.
 */
export default function HouseIllustration() {
  return (
    <svg
      className={styles.illustration}
      viewBox="0 0 1200 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {/* Sun */}
      <circle className={styles.sun} cx="964" cy="150" r="86" />

      {/* Horizon */}
      <line className={styles.horizon} x1="0" y1="472" x2="1200" y2="472" />

      {/* Tree line, left */}
      <path
        className={styles.foliage}
        d="M40 472 C40 420 90 380 130 380 C160 380 200 405 205 445 C230 430 260 445 262 472 Z"
      />

      {/* House contour */}
      <path
        className={styles.houseLine}
        d="M300 472
           L300 300
           L520 168
           L740 300
           L740 472"
      />
      {/* Roof overhang + ridge detail */}
      <path className={styles.houseLine} d="M270 320 L520 168 L770 320" />
      {/* Chimney */}
      <path className={styles.houseLine} d="M640 210 L640 130 L688 130 L688 250" />
      {/* Door */}
      <path className={styles.houseLine} d="M480 472 L480 380 L560 380 L560 472" />
      {/* Windows */}
      <rect className={styles.houseLine} x="330" y="340" width="70" height="70" rx="4" />
      <rect className={styles.houseLine} x="600" y="340" width="70" height="70" rx="4" />

      {/* Ground shadow */}
      <ellipse className={styles.shadow} cx="520" cy="480" rx="260" ry="10" />
    </svg>
  );
}
