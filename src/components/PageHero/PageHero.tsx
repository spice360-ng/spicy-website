import Glow from "@/components/Glow/Glow";
import styles from "./PageHero.module.scss";

type PageHeroProps = {
    title: string;
    intro: string;
    glow?: "orange-ellipse" | "red-ellipse";
    glowStrength?: number;
};

/**
 * Top-of-page hero shared by About & Work and People: a large display title with a
 * supporting intro paragraph set lower in a narrower column. Glow anchored to the top
 * so the fixed NavBar reads against the bloom.
 */
export default function PageHero({
    title,
    intro,
    glow = "orange-ellipse",
    glowStrength,
}: PageHeroProps) {
    return (
        <section className={styles.hero}>
            <Glow position="top" tone={glow} strength={glowStrength} />
            <div className={styles.inner}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.intro}>{intro}</p>
            </div>
        </section>
    );
}
