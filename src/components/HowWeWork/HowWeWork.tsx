import Glow from "@/components/Glow/Glow";
import styles from "./HowWeWork.module.scss";

const pillars = [
    {
        no: "01",
        title: "Outthink",
        body: "We interrogate every brief before we answer it.",
    },
    {
        no: "02",
        title: "Outcreate",
        body: "We pursue the kind of work no other agency is brave enough to make.",
    },
    {
        no: "03",
        title: "Outpace",
        body: "We move faster, adapt sharper, and stay ahead of the market.",
    },
];

export default function HowWeWork() {
    return (
        <section className={styles.section}>
            <Glow position="bottom" tone="warm" />
            <div className={styles.inner}>
                <p className={styles.eyebrow}>Our three pillars</p>
                <h2 className={styles.heading}>How we work</h2>

                <div className={styles.grid}>
                    {pillars.map((p) => (
                        <article key={p.no} className={styles.card}>
                            <span className={styles.no}>{p.no}</span>
                            <h3 className={styles.title}>{p.title}</h3>
                            <p className={styles.body}>{p.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
