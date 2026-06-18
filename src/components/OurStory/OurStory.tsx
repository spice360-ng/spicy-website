import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./OurStory.module.scss";

const paragraphs = [
    "In 2024, on its maiden entry into LAIF, Nigeria's most competitive advertising awards in its 19-year history, Spice 360 placed 4th overall. Five golds, seven silvers, four bronzes. Ninety points. The three agencies ahead were Insight Publicis, X3M Ideas, and Noah's Ark. Agencies that had been competing since the festival launched. It was not a surprise to anyone who had seen the work.",
    "In April 2025, Biodun Adefila joined as Managing Director, bringing two decades of senior leadership from SO&U and a client list that includes Guinness Nigeria, GTBank, Unilever, P&G, and Access Bank. Rotimi Ade-Onojobi joined as Creative Director, with a decade of creative work across Heineken, Airtel, Nestlé, and the 2022 Indomie campaign that earned global recognition on Ads of the World.",
];

export default function OurStory() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="Our Story"
                    heading="The work the agency built"
                    tone="gold"
                />
                <div className={styles.body}>
                    {paragraphs.map((p, i) => (
                        <p key={i} className={styles.para}>
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
