import Image from "next/image";
import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./SelectedWork.module.scss";

export default function SelectedWork() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="Selected work"
                    heading="Ideas that earn attention and awards."
                    subcopy="From integrated campaigns to LAIF-winning creative. A look at what Spice 360 builds for brands that mean business."
                    tone="muted"
                    surface="light"
                />

                <article className={styles.card}>
                    <div className={styles.copy}>
                        <h3 className={styles.title}>
                            Nigerian mothers don&rsquo;t just buy Indomie, they trust it
                        </h3>
                        <p className={styles.text}>
                            The brief was never to sell noodles. The brief was to tell the
                            truth about the emotional contract between a Nigerian mother and
                            her family&rsquo;s kitchen. Built on that single insight,
                            &lsquo;Mother&rsquo;s Love&rsquo; became a film and digital
                            campaign directed by Jay Bhansali of KKDD Films. It earned global
                            recognition on Ads of the World and set the standard for how the
                            Indomie brand speaks to its most important audience.
                        </p>
                    </div>

                    <div className={styles.media}>
                        <Image
                            src="/blog/indomie-feature.png"
                            alt="Indomie 'Mother's Love' campaign"
                            fill
                            sizes="(max-width: 760px) 100vw, 415px"
                            className={styles.photo}
                        />
                        <div className={styles.scrim} />
                        <button className={styles.play} aria-label="Play case study">
                            <span className={styles.playIcon} aria-hidden />
                        </button>
                        <p className={styles.tag}>Case Study / Indomie / 2022</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
