import Glow from "@/components/Glow/Glow";
import styles from "./Scoreboard.module.scss";

const stats = [
    { value: "4th", label: "Most creative agency in Nigeria, 2024" },
    { value: "5", label: "Gold medals, maiden entry" },
    { value: "7", label: "Silver medals" },
    { value: "4", label: "Bronze medals" },
    { value: "90", label: "Total points scored" },
    { value: "19yr", label: "Competition we walked into on day one" },
];

export default function Scoreboard() {
    return (
        <section className={styles.section}>
            <Glow position="bottom" tone="warm" scale={2} />
            <div className={styles.inner}>
                <p className={styles.eyebrow}>Awards &amp; Accolades</p>
                <h2 className={styles.heading}>The scoreboard</h2>

                <div className={styles.grid}>
                    {stats.map((s) => (
                        <div key={s.value + s.label} className={styles.stat}>
                            <span className={styles.value}>{s.value}</span>
                            <span className={styles.label}>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
