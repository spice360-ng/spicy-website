import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import { route } from "@/lib/contact";
import styles from "./SpiceDigital.module.scss";

export default function SpiceDigital() {
    return (
        <section className={styles.section}>
            <Glow position="bottom" tone="cool" />
            <div className={styles.inner}>
                <p className={styles.eyebrow}>A Spice360 sub-brand</p>
                <h2 className={styles.heading}>
                    Built a product.<br />Now build the brand.
                </h2>
                <p className={styles.copy}>
                    Spice Digital is our dedicated arm for African tech startups. Same
                    creative standards. Different kind of client.
                </p>
                <Link href={route("spice-digital")} className={styles.cta}>
                    Explore Spice Digital
                </Link>
            </div>
        </section>
    );
}
