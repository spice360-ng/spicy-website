import Glow from "@/components/Glow/Glow";
import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./SpiceAudience.module.scss";

/**
 * "Who Spice Digital serves" (Figma 172:481): cyan eyebrow, a centred display heading over
 * a soft indigo bloom, and three paragraphs ending on the line that defines the fit.
 */
export default function SpiceAudience() {
    return (
        <section className={styles.section}>
            <Glow position="top" tone="blue-dawn" />
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="Who Spice Digital serves"
                    heading="We know what funded looks like, and what growing looks like"
                    tone="cyan"
                />
                <div className={styles.prose}>
                    <p>
                        Spice Digital works with seed to Series A technology companies across
                        fintech, edtech, healthtech, logistics, and e-commerce. Operating in
                        Nigeria or building for Nigerian and West African consumers.
                    </p>
                    <p>
                        Founders or CMOs who understand the value of brand but have not had
                        the time or budget to build it properly. Companies growing fast
                        enough that informal marketing is no longer sufficient. Backed by
                        investors who will notice &mdash; and value &mdash; a credible brand
                        presence.
                    </p>
                    <p>
                        You do not need to be at scale to work with us. You need to be
                        growing.
                    </p>
                </div>
            </div>
        </section>
    );
}
