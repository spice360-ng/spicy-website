import Image from "next/image";
import Glow from "@/components/Glow/Glow";
import styles from "./PageHero.module.scss";

type PageHeroProps = {
    title: string;
    intro: string;
    glow?: "orange-ellipse" | "red-ellipse";
    glowStrength?: number;

    bgImage?: string;
};

export default function PageHero({
    title,
    intro,
    glow = "orange-ellipse",
    glowStrength,
    bgImage,
}: PageHeroProps) {
    return (
        <section className={styles.hero}>
            {bgImage && (
                <>
                    <Image
                        src={bgImage}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        className={styles.bg}
                    />
                    <div className={styles.scrim} aria-hidden />
                </>
            )}
            <Glow position="top" tone={glow} strength={glowStrength} />
            <div className={styles.inner}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.intro}>{intro}</p>
            </div>
        </section>
    );
}
