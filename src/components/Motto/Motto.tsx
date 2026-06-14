import Image from "next/image";
import styles from "./Motto.module.scss";

export default function Motto() {
    return (
        <section className={styles.motto} aria-label="Our motto">
            <Image
                src="/motto.png"
                alt=""
                fill
                sizes="100vw"
                className={styles.photo}
            />
            <div className={styles.scrim} aria-hidden />
            <div className={styles.content}>
                <h2 className={styles.quote}>
                    &ldquo;We exist to make brands impossible to ignore.&rdquo;
                </h2>
                <p className={styles.label}>Our Motto</p>
            </div>
        </section>
    );
}
