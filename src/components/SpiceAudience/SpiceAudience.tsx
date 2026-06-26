import Image from "next/image";
import Glow from "@/components/Glow/Glow";
import SectionHead from "@/components/SectionHead/SectionHead";
import { SPICE_AUDIENCE_BG } from "@/data/groupPhotos";
import styles from "./SpiceAudience.module.scss";

export default function SpiceAudience() {
    return (
        <section className={styles.section}>
            <Image src={SPICE_AUDIENCE_BG} alt="" fill sizes="100vw" className={styles.bg} />
            <div className={styles.scrim} aria-hidden />
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
                        investors who will notice, and value, a credible brand
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
