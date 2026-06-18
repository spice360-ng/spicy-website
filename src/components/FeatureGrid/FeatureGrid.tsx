import styles from "./FeatureGrid.module.scss";

export type FeatureItem = {
    /** Numbered variant: "01"…"06" (faint number, About capabilities). */
    number?: string;
    /** Icon variant: path to an SVG under /public (People values). */
    icon?: string;
    /** Optional lead/sub line shown above the title (About capabilities). */
    kicker?: string;
    title: string;
    body: string;
};

type FeatureGridProps = {
    items: FeatureItem[];
    /** Index from which cards switch to half-width (e.g. a 3-then-2 value grid). */
    wideFrom?: number;
    /** Icon-chip colour for the icon variant. */
    accent?: "gold" | "red";
};

/**
 * Card grid shared by About's "Six capabilities" (faint number + sub-line) and People's
 * "Five values" (icon chip). Cards have no fill — each sits on the black section with its
 * own soft orange glow behind it, matching the per-card ellipses in Figma.
 */
export default function FeatureGrid({ items, wideFrom, accent = "gold" }: FeatureGridProps) {
    return (
        <div className={styles.grid}>
            {items.map((item, i) => {
                const wide = wideFrom !== undefined && i >= wideFrom;
                return (
                    <article
                        key={item.title}
                        className={`${styles.card} ${wide ? styles.wide : ""}`}
                    >
                        <span className={styles.cardGlow} aria-hidden />
                        <div className={styles.cardBody}>
                            <div className={styles.top}>
                                {item.icon ? (
                                    <span className={`${styles.iconChip} ${styles[accent]}`}>
                                        <span
                                            className={styles.icon}
                                            style={{
                                                maskImage: `url(${item.icon})`,
                                                WebkitMaskImage: `url(${item.icon})`,
                                            }}
                                            aria-hidden
                                        />
                                    </span>
                                ) : (
                                    <span className={`${styles.numberChip} ${styles[accent]}`}>
                                        {item.number}
                                    </span>
                                )}
                                {item.kicker && (
                                    <p className={styles.kicker}>{item.kicker}</p>
                                )}
                            </div>
                            <div className={styles.bottom}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.body}>{item.body}</p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
