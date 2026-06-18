import SectionHead from "@/components/SectionHead/SectionHead";
import FeatureGrid, { FeatureItem } from "@/components/FeatureGrid/FeatureGrid";
import styles from "./Values.module.scss";

const items: FeatureItem[] = [
    {
        icon: "/icons/heat.svg",
        title: "Heat",
        body: "Every brief is an opportunity to make something that creates a real reaction. Not warm, not pleasant — genuinely felt. If a campaign does not move someone, it has not done its job. The agency is uncomfortable with lukewarm.",
    },
    {
        icon: "/icons/root.svg",
        title: "Root",
        body: "We understand Nigerian consumers from the inside, because we live here. We eat what they eat, hear what they hear, feel what the market feels. That rootedness is the source of every creatively specific thing this agency has ever made.",
    },
    {
        icon: "/icons/precision.svg",
        title: "Precision",
        body: "Paid social, search, and programmatic campaigns. Weekly reporting. Continuous optimisation. No set-and-forget.",
    },
    {
        icon: "/icons/full-circle.svg",
        title: "Full Circle",
        body: "The 360 in the name is a promise. We think across every stage of the consumer journey, every channel where the brand lives, every moment where communication can build or erode trust. Single-channel thinking is somebody else's business model.",
    },
    {
        icon: "/icons/intelligence.svg",
        title: "Intelligence",
        body: "The best creative work is also the best-researched work. We study our clients' consumers with a level of attention that less curious agencies direct elsewhere. Then we make something human from what we find.",
    },
];

export default function Values() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="Culture and values"
                    heading="Five values, all of them working everyday"
                    subcopy="What the agency believes"
                    tone="red"
                />
                <FeatureGrid items={items} wideFrom={3} accent="red" />
            </div>
        </section>
    );
}
