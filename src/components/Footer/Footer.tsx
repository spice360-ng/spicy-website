import Image from "next/image";
import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import styles from "./Footer.module.scss";

const primary = [
    { label: "Home", href: "/" },
    { label: "About & Work", href: "/about" },
    { label: "Awards", href: "/awards" },
    { label: "Blog", href: "/blog" },
];

const company = [
    { label: "People", href: "/people" },
    { label: "Careers", href: "/careers" },
    { label: "Spice Digital", href: "/spice-digital" },
    { label: "Get in touch", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Glow position="bottom" tone="cool" />
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Image
                            src="/logo/spice360-white.png"
                            alt="Spice360"
                            width={109}
                            height={29}
                            className={styles.logo}
                        />
                        <ul className={styles.list}>
                            {primary.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className={styles.link}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.colHead}>Company</p>
                        <ul className={styles.list}>
                            {company.map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} className={styles.link}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.colHead}>Legal &amp; Info</p>
                        <ul className={styles.list}>
                            <li>
                                <Link href="/privacy" className={styles.link}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <span>&copy; 2026 Spice 360</span>
                    <span className={styles.dot}>&middot;</span>
                    <span>AAN Member</span>
                    <span className={styles.dot}>&middot;</span>
                    <span>1 Akanbi Onitiri Street, Surulere, Lagos</span>
                </div>
            </div>
        </footer>
    );
}
