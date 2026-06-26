import Image from "next/image";
import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import { contact, route, type ContactKind } from "@/lib/contact";
import styles from "./Footer.module.scss";

type GlowTone = "warm" | "cool" | "blue-dawn" | "orange-ellipse" | "red-ellipse";

type FooterProps = {

    page?: "home" | "about" | "people" | "spice-digital";

    transparent?: boolean;
};

const PAGE: Record<
    NonNullable<FooterProps["page"]>,
    { glow: GlowTone; contact: ContactKind }
> = {
    home: { glow: "cool", contact: "general" },
    about: { glow: "orange-ellipse", contact: "work" },
    people: { glow: "red-ellipse", contact: "apply" },
    "spice-digital": { glow: "blue-dawn", contact: "brief" },
};

export default function Footer({ page = "home", transparent = false }: FooterProps) {
    const cfg = PAGE[page];

    const primary = [
        { label: "Home", href: route("home") },
        { label: "About & Work", href: route("about") },
        { label: "Awards", href: route("awards") },
        { label: "Blog", href: route("blog") },
    ];

    const company = [
        { label: "People", href: route("people") },
        { label: "Careers", href: route("careers") },
        { label: "Spice Digital", href: route("spice-digital") },
    ];

    return (
        <footer className={`${styles.footer} ${transparent ? styles.transparent : ""}`}>
            <Glow position="bottom" tone={cfg.glow} strength={0.5} />
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Image
                            src="/logo/spice360-color.png"
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
                            <li>
                                <a
                                    href={contact[cfg.contact]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    Get in touch
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <p className={styles.colHead}>Legal &amp; Info</p>
                        <ul className={styles.list}>
                            <li>
                                <Link href={route("privacy")} className={styles.link}>
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.legal}>
                    <span>&copy; 2026 Spice 360</span>
                    <span>AAN Member</span>
                    <span>1 Akanbi Onitiri Street, Surulere, Lagos</span>
                </div>
            </div>
        </footer>
    );
}
