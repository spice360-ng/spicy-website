import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <Glow position="top" tone="warm" />
            <div className={styles.inner}>
                <h1 className={styles.headline}>
                    We make Nigerian<br />brands impossible to ignore.
                </h1>

                <div className={styles.content}>
                    <p className={styles.body}>
                        We build integrated 360 campaigns rooted in cultural truths. We
                        find what actually moves people in and build campaigns that go all
                        the way. From strategy to execution
                    </p>
                    <div className={styles.actions}>
                        <Link href="/work" className={styles.primary}>
                            See what we&rsquo;ve cooked
                        </Link>
                        <Link href="/contact" className={styles.secondary}>
                            Get in touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
