import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./SpiceAbout.module.scss";

/**
 * "About Spice Digital" (Figma 233:214): cyan eyebrow, a two-line display heading, and
 * three centred paragraphs laying out who the sub-brand is built for.
 */
export default function SpiceAbout() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="About Spice Digital"
                    heading="Built for founders, not brand managers"
                    tone="cyan"
                />
                <div className={styles.prose}>
                    <p>
                        The marketing needs of a seed-stage fintech in Lagos and the
                        marketing needs of an established FMCG brand have almost nothing in
                        common. Different budgets, different timelines, different definitions
                        of a result. Different pressures entirely.
                    </p>
                    <p>
                        Spice Digital was built for the founder. The same creative standards
                        as Spice 360. The same cultural intelligence about Nigerian and West
                        African consumers. A commercial model and delivery pace that match a
                        startup&rsquo;s reality, not a corporate agency&rsquo;s engagement
                        cycle.
                    </p>
                    <p>
                        We work with founders and CMOs at seed to Series A: companies that
                        have grown fast enough that informal marketing is no longer working,
                        but do not yet need the infrastructure of a full integrated agency.
                        If your current marketing strategy lives in a WhatsApp thread, you
                        are exactly who Spice Digital was built for.
                    </p>
                </div>
            </div>
        </section>
    );
}
