import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import { contact, route } from "@/lib/contact";
import styles from "./SpiceCallout.module.scss";

export default function SpiceCallout() {
    return (
        <section className={styles.section}>
            <Glow position="top" tone="blue-dawn" />
            <div className={styles.inner}>
                <p className={styles.eyebrow}>Brief us</p>
                <h2 className={styles.heading}>Tell us what you&rsquo;re building</h2>
                <p className={styles.body}>
                    We&rsquo;ll tell you what it will take to build the brand around it
                </p>
                <div className={styles.actions}>
                    <a
                        href={contact.brief}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.button} ${styles.primary}`}
                    >
                        Brief Spice Digital
                    </a>
                    <Link
                        href={route("home")}
                        className={`${styles.button} ${styles.secondary}`}
                    >
                        Learn about Spice360
                    </Link>
                </div>
            </div>
        </section>
    );
}
