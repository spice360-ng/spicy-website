import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./ProcessSteps.module.scss";

const steps = [
    {
        no: "01",
        title: "Brief",
        body: "We push back before we start. A brief that cannot survive interrogation cannot survive the market.",
    },
    {
        no: "02",
        title: "Insight",
        body: "We find the specific Nigerian consumer truth the brief has been working around. That truth is the campaign.",
    },
    {
        no: "03",
        title: "Creative",
        body: "Ideas rooted in culture, designed to earn attention, built to change behavior. Not decoration.",
    },
    {
        no: "04",
        title: "Execution",
        body: "Strategy and production under one roof, across every format, at the same standard.",
    },
    {
        no: "05",
        title: "Results",
        body: "We measure against what we agreed to measure. We report what we found, including what did not work.",
    },
];

export default function ProcessSteps() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="How we work"
                    heading="From first brief to final result"
                    subcopy="Five stages, every client engagement runs through all of them"
                    tone="gold"
                />

                <ol className={styles.steps}>
                    {steps.map((s) => (
                        <li key={s.no} className={styles.step}>
                            <span className={styles.no}>{s.no}</span>
                            <h3 className={styles.title}>{s.title}</h3>
                            <p className={styles.body}>{s.body}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
