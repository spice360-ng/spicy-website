import Link from "next/link";
import styles from "./Services.module.scss";

export default function Services() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.head}>
                    <p className={styles.eyebrow}>What we do</p>
                    <h2 className={styles.heading}>
                        The recipe for campaigns that actually works
                    </h2>
                    <Link href="/services" className={styles.cta}>
                        Everything we offer
                    </Link>
                </div>

                <div className={styles.card}>
                    <article className={`${styles.block} ${styles.strategy}`}>
                        <h3 className={styles.title}>Brand Strategy</h3>
                        <p className={styles.body}>
                            The conviction before the campaign. We work out what a brand
                            actually believes before we make anything.
                        </p>
                    </article>

                    <article className={`${styles.block} ${styles.digital}`}>
                        <h3 className={styles.title}>Digital Content</h3>
                        <p className={styles.body}>
                            Always-on creative for Africa&rsquo;s most engaged online
                            market. Built for Nigerian audiences from line one.
                        </p>
                    </article>

                    <article className={`${styles.block} ${styles.integrated}`}>
                        <h3 className={styles.title}>Integrated Campaigns</h3>
                        <p className={styles.body}>
                            Every channel, one idea behind all of it. The 360 in our name
                            is a commitment, not a category claim.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
