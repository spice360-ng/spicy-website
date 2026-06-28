import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./SpiceServices.module.scss";

type Service = { title: string; body: string };

const SERVICES: Service[] = [
    {
        title: "Brand and Identity",
        body: "Logomark, colour system, typography, brand voice guide, and complete guidelines. Built to perform in front of investors, users, and the press at the same time.",
    },
    {
        title: "Website Design and Development",
        body: "Website strategy, UX design, and development from brief to launch. Mobile-first, performance-optimised, and designed to convert the people who actually land on it.",
    },
    {
        title: "Performance Marketing",
        body: "Paid social, search, and programmatic campaigns. Weekly reporting. Continuous optimisation. No set-and-forget.",
    },
    {
        title: "Content Strategy",
        body: "Social media strategy, content calendar, copywriting, graphic design, and short-form video. Built for Nigerian audiences, not adapted from a global template.",
    },
    {
        title: "AI-Powered Marketing",
        body: "Audience segmentation, content personalisation, sentiment analysis, and automated reporting. Offered as a premium service to clients whose growth stage can leverage it properly.",
    },
    {
        title: "Digital Maintenance",
        body: "Ongoing management across all digital touchpoints: website updates, social scheduling, ad optimisation, and monthly brand audit reports.",
    },
];

export default function SpiceServices() {
    return (
        <section className={styles.section} data-stagger>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="What do we do"
                    heading="Six services, all of them connected"
                    tone="cyan"
                />
                <div className={styles.grid}>
                    {SERVICES.map((s) => (
                        <article key={s.title} className={styles.card}>
                            <span className={styles.cardGlow} aria-hidden />
                            <div className={styles.cardBody}>
                                <h3 className={styles.title}>{s.title}</h3>
                                <p className={styles.body}>{s.body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
