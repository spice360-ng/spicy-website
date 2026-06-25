import Glow from "@/components/Glow/Glow";
import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./AwardsRecord.module.scss";

const paragraphs = [
    "Nigeria’s Lagos Advertising and Ideas Festival ran its 19th edition in 2024. More than 50 agencies competed across categories including Print, Film, Digital Craft, and Integrated Campaigns. On debut, Spice 360 accumulated 90 points: five golds, seven silvers, four bronzes. The final ranking placed the agency 4th nationally.",
    "The three agencies ahead were Insight Publicis, X3M Ideas, and Noah’s Ark — agencies with decades of institutional history behind them. Industry press named Spice 360 a standout among new entrants. The agency called it confirmation.",
];

export default function AwardsRecord() {
    return (
        <section className={styles.section}>
            <Glow position="bottom" tone="amber" />
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="Awards & Accolades"
                    heading="LAIF 2024, the full record"
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
