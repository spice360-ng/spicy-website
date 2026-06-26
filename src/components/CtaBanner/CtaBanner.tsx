import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import styles from "./CtaBanner.module.scss";

type CtaBannerProps = {
    heading: string;
    body: string;
    button: { label: string; href: string };
    glow?: "amber" | "ember";
    accent?: "gold" | "red";

    transparent?: boolean;
};

export default function CtaBanner({
    heading,
    body,
    button,
    glow = "amber",
    accent = "gold",
    transparent = false,
}: CtaBannerProps) {
    return (
        <section
            className={`${styles.section} ${styles[accent]} ${transparent ? styles.transparent : ""}`}
        >
            <Glow position="bottom" tone={glow} />
            <div className={styles.inner}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.body}>{body}</p>
                {button.href.startsWith("http") ? (
                    <a
                        href={button.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        {button.label}
                    </a>
                ) : (
                    <Link href={button.href} className={styles.button}>
                        {button.label}
                    </Link>
                )}
            </div>
        </section>
    );
}
