import Image from "next/image";
import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./SpiceWork.module.scss";

type CaseStudy = {
    image: string;
    series: string;
    category: string;
    brand: string;
    metric: string;
};

const FEATURE: CaseStudy = {
    image: "/spice-digital/kellogs.jpg",
    series: "Series A",
    category: "Brand Sprint",
    brand: "Kellogg’s",
    metric: "50x increase in product purchase and brand recognition",
};

const ROW: CaseStudy[] = [
    {
        image: "/spice-digital/heinz.jpg",
        series: "Series B",
        category: "Market Expansion",
        brand: "Heinz",
        metric: "30% growth in market share through new product launches",
    },
    {
        image: "/spice-digital/nestle.jpg",
        series: "Series C",
        category: "Consumer Engagement",
        brand: "Nestlé",
        metric: "40% rise in customer loyalty via targeted campaigns",
    },
];

function Card({ study, wide }: { study: CaseStudy; wide?: boolean }) {
    return (
        <figure className={`${styles.card} ${wide ? styles.wide : ""}`}>
            <Image
                src={study.image}
                alt={`${study.brand} case study`}
                fill
                sizes={wide ? "(max-width: 760px) 100vw, 1150px" : "(max-width: 760px) 100vw, 571px"}
                className={styles.photo}
            />
            <div className={styles.scrim} />
            <figcaption className={styles.caption}>
                <p className={styles.tags}>
                    <span>{study.series}</span>
                    <span aria-hidden className={styles.dot} />
                    <span>{study.category}</span>
                </p>
                <div className={styles.meta}>
                    <h3 className={styles.brand}>{study.brand}</h3>
                    <p className={styles.metric}>{study.metric}</p>
                </div>
            </figcaption>
        </figure>
    );
}

/**
 * "Case studies and performance data" (Figma 172:522): a centred header above a photo
 * grid — one wide feature card over a two-up row — each carrying a series/category tag
 * and a brand + metric overlaid on a darkened scrim.
 */
export default function SpiceWork() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="What we’ve built"
                    heading="Case studies and performance data"
                    subcopy="Campaign outcomes, brand launches, acquisition results, and client proof points. Populate with confirmed Spice Digital case studies as they are cleared for publication."
                    tone="cyan"
                />
                <div className={styles.grid}>
                    <Card study={FEATURE} wide />
                    <div className={styles.row}>
                        {ROW.map((study) => (
                            <Card key={study.brand} study={study} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
