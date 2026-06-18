import styles from "./SectionHead.module.scss";

type SectionHeadProps = {
    eyebrow?: string;
    heading: string;
    subcopy?: string;
    align?: "center" | "left";
    /** Eyebrow colour: gold (About dark), red (People dark), muted (white), green. */
    tone?: "gold" | "red" | "muted" | "green";
    /** dark = white text on black; light = near-black text on white sections. */
    surface?: "dark" | "light";
};

/**
 * Recurring section header: eyebrow label, display heading, optional subcopy.
 * Centred by default to match the Figma section headers on both pages.
 */
export default function SectionHead({
    eyebrow,
    heading,
    subcopy,
    align = "center",
    tone = "gold",
    surface = "dark",
}: SectionHeadProps) {
    return (
        <header
            className={`${styles.head} ${styles[align]} ${styles[tone]} ${styles[surface]}`}
        >
            {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
            <h2 className={styles.heading}>{heading}</h2>
            {subcopy && <p className={styles.subcopy}>{subcopy}</p>}
        </header>
    );
}
