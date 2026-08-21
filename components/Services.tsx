import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "Visa renewal",
    text: "Residence and employment visa renewals handled end to end, on time.",
  },
  {
    title: "Emirates ID renewal",
    text: "Renew your Emirates ID quickly with clear steps and status updates.",
  },
  {
    title: "Trade License renewal",
    text: "Keep your company legally active with smooth trade license renewals.",
  },
  {
    title: "Business documents",
    text: "Other UAE business paperwork — renewals, updates, and compliance filings.",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Everything you need to stay compliant</h2>
          <p className={styles.text}>
            Renew-It! helps people and companies in Dubai and across the UAE keep
            documents current — without chasing government portals.
          </p>
        </div>

        <ul className={styles.list}>
          {SERVICES.map((service, index) => (
            <li key={service.title} className={styles.item}>
              <span className={styles.index}>0{index + 1}</span>
              <div className={styles.itemBody}>
                <h3 className={styles.itemTitle}>{service.title}</h3>
                <p className={styles.itemText}>{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
