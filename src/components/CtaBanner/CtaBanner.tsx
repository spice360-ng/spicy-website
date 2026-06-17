import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import styles from "./CtaBanner.module.scss";

type CtaBannerProps = {
    heading: string;
    body: string;
    button: { label: string; href: string };
    glow?: "amber" | "ember";
    accent?: "gold" | "red";
};

/** Closing call-to-action shared by both pages: heading, body, single button, top glow. */
export default function CtaBanner({
    heading,
    body,
    button,
    glow = "amber",
    accent = "gold",
}: CtaBannerProps) {
    return (
        <section className={`${styles.section} ${styles[accent]}`}>
            <Glow position="bottom" tone={glow} />
            <div className={styles.inner}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.body}>{body}</p>
                <Link href={button.href} className={styles.button}>
                    {button.label}
                </Link>
            </div>
        </section>
    );
}
