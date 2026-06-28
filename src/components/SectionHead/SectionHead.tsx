import styles from "./SectionHead.module.scss";

type SectionHeadProps = {
    eyebrow?: string;
    heading: string;
    subcopy?: string;
    align?: "center" | "left";

    tone?: "gold" | "red" | "muted" | "green" | "cyan";

    surface?: "dark" | "light";
};

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
