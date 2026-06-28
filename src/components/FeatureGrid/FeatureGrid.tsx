import type { CSSProperties } from "react";
import styles from "./FeatureGrid.module.scss";

export type FeatureItem = {

    number?: string;

    icon?: string;

    kicker?: string;
    title: string;
    body: string;
};

type FeatureGridProps = {
    items: FeatureItem[];

    wideFrom?: number;

    accent?: "gold" | "red";

    glowScale?: number;
};

export default function FeatureGrid({ items, wideFrom, accent = "gold", glowScale }: FeatureGridProps) {
    return (
        <div className={styles.grid}>
            {items.map((item, i) => {
                const wide = wideFrom !== undefined && i >= wideFrom;
                return (
                    <article
                        key={i}
                        className={`${styles.card} ${wide ? styles.wide : ""}`}
                    >
                        <span
                            className={styles.cardGlow}
                            style={glowScale != null ? ({ "--card-glow-scale": glowScale } as CSSProperties) : undefined}
                            aria-hidden
                        />
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
