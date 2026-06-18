"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import styles from "./NavBar.module.scss";

const links = [
    { label: "Home", href: "/" },
    { label: "About & Work", href: "/about" },
    { label: "People", href: "/people" },
    { label: "Spice Digital", href: "/spice-digital" },
];

type NavBarProps = {
    /** Per-page accent for the CTA and mobile menu (gold on About, red on People). */
    accent?: "green" | "gold" | "red";
};

export default function NavBar({ accent = "green" }: NavBarProps) {
    const [scrolled, setScrolled] = useState(false);

    // Sticky nav gains a frosted background once scrolled off the hero so links stay
    // readable over the white sections.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`${styles.nav} ${styles[accent]} ${scrolled ? styles.scrolled : ""}`}
        >
            <div className={styles.inner}>
                <Link href="/" className={styles.logo} aria-label="Spice360 home">
                    <Image
                        src="/logo/spice360-color.png"
                        alt="Spice360"
                        width={109}
                        height={29}
                        priority
                    />
                </Link>

                <nav className={styles.links} aria-label="Primary">
                    {links.map((l) => (
                        <Link key={l.label} href={l.href} className={styles.link}>
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <Link href="/contact" className={styles.cta}>
                    Get in touch
                </Link>

                <MobileMenu links={links} accent={accent} />
            </div>
        </header>
    );
}
