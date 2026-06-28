import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./SpiceCompare.module.scss";

const SPICE_360 = [
    "Large corporates and established brands",
    "FMCG and consumer goods depth",
    "Multi-channel integrated campaigns",
    "Long engagement cycles",
];

const SPICE_DIGITAL = [
    "Tech startups and digital-first brands",
    "Brand, growth marketing, and digital infra",
    "Digital-first, performance-driven",
    "Sprint-based, startup commercial model",
];

export default function SpiceCompare() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="S360 VS SD"
                    heading="Two doors into the same building"
                    subcopy="Spice 360 serves established brands with integrated, multi-channel campaigns. Large FMCG accounts, corporate clients, long engagement cycles."
                    tone="muted"
                    surface="light"
                />

                <div className={styles.cards}>
                    <article className={`${styles.card} ${styles.green}`}>
                        <h3 className={styles.cardTitle}>Spice 360</h3>
                        <ul className={styles.list}>
                            {SPICE_360.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                    <article className={`${styles.card} ${styles.blue}`}>
                        <h3 className={styles.cardTitle}>Spice Digital</h3>
                        <ul className={styles.list}>
                            {SPICE_DIGITAL.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </article>
                </div>

                <p className={styles.closer}>
                    Both brands share infrastructure, creative values, and the FlavourBoard.
                    They do not compete for the same clients. When a Spice Digital client
                    grows to the point of needing above-the-line campaign work, the
                    transition to a Spice 360 engagement is natural, not a pitch.
                </p>
            </div>
        </section>
    );
}
