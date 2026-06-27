import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import Slideshow from "@/components/Slideshow/Slideshow";
import { contact, route, type ContactKind } from "@/lib/contact";
import {
    SPICE_FOOTER_SLIDES,
    PEOPLE_FOOTER_WIDE,
    PEOPLE_FOOTER_MOBILE,
} from "@/data/groupPhotos";
import { randomIndex } from "@/lib/random";
import styles from "./Footer.module.scss";

type Page = "home" | "about" | "people" | "spice-digital";

type GlowTone =
    | "warm"
    | "cool"
    | "amber"
    | "ember"
    | "blue-dawn"
    | "orange-ellipse"
    | "red-ellipse";

type CtaButton = {
    label: string;
    href: string;
    variant: "primary" | "secondary";
    external?: boolean;
};

type FooterProps = {
    page?: Page;
};

const CONFIG: Record<
    Page,
    {
        accent: string;
        ctaGlow: GlowTone;
        footerGlow: GlowTone;
        footerStrength: number;
        footerContact: ContactKind;
        eyebrow?: string;
        heading: string;
        body: string;
        buttons: CtaButton[];
    }
> = {
    home: {
        accent: "var(--c-green-dark)",
        ctaGlow: "cool",
        footerGlow: "cool",
        footerStrength: 0.5,
        footerContact: "general",
        eyebrow: "A Spice360 sub-brand",
        heading: "Built a product. Now build the brand.",
        body: "Spice Digital is our dedicated arm for African tech startups. Same creative standards. Different kind of client.",
        buttons: [
            {
                label: "Explore Spice Digital",
                href: route("spice-digital"),
                variant: "primary",
            },
        ],
    },
    about: {
        accent: "var(--c-yellow)",
        ctaGlow: "amber",
        footerGlow: "orange-ellipse",
        footerStrength: 0.25,
        footerContact: "work",
        heading: "Start a conversation",
        body: "Tell us what your brand is trying to do and leave the rest to us.",
        buttons: [
            {
                label: "Brief us",
                href: contact.work,
                variant: "primary",
                external: true,
            },
        ],
    },
    people: {
        accent: "var(--c-red)",
        ctaGlow: "ember",
        footerGlow: "red-ellipse",
        footerStrength: 0.5,
        footerContact: "apply",
        heading:
            "There is probably a spice name with your character written into it.",
        body: "Spice 360 hires people who are curious, specific, and allergic to lukewarm work. If that describes you, and if you have work that proves it, we want to hear from you. Send your portfolio and a short note about what you believe.",
        buttons: [
            {
                label: "Get in touch",
                href: contact.apply,
                variant: "primary",
                external: true,
            },
        ],
    },
    "spice-digital": {
        accent: "var(--c-blue-deep)",
        ctaGlow: "blue-dawn",
        footerGlow: "blue-dawn",
        footerStrength: 0.5,
        footerContact: "brief",
        eyebrow: "Brief us",
        heading: "Tell us what you're building",
        body: "We'll tell you what it will take to build the brand around it.",
        buttons: [
            {
                label: "Brief Spice Digital",
                href: contact.brief,
                variant: "primary",
                external: true,
            },
            {
                label: "Learn about Spice360",
                href: route("home"),
                variant: "secondary",
            },
        ],
    },
};

export default function Footer({ page = "home" }: FooterProps) {
    const cfg = CONFIG[page];

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

    function renderButton(b: CtaButton) {
        const cls = `${styles.ctaButton} ${b.variant === "secondary" ? styles.ctaSecondary : styles.ctaPrimary}`;
        return b.external ? (
            <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
            >
                {b.label}
            </a>
        ) : (
            <Link key={b.label} href={b.href} className={cls}>
                {b.label}
            </Link>
        );
    }

    return (
        <div className={styles.outro}>
            {page === "people" ? (
                <>
                    <Slideshow
                        images={PEOPLE_FOOTER_WIDE}
                        startIndex={randomIndex(PEOPLE_FOOTER_WIDE.length)}
                        className={`${styles.outroBg} ${styles.onlyWide}`}
                    />
                    <Slideshow
                        images={PEOPLE_FOOTER_MOBILE}
                        startIndex={randomIndex(PEOPLE_FOOTER_MOBILE.length)}
                        className={`${styles.outroBg} ${styles.onlyNarrow}`}
                    />
                </>
            ) : (
                <Slideshow
                    images={SPICE_FOOTER_SLIDES}
                    startIndex={randomIndex(SPICE_FOOTER_SLIDES.length)}
                    className={styles.outroBg}
                />
            )}
            <div className={styles.outroScrim} aria-hidden />

            <section
                className={styles.cta}
                style={{ "--cta-accent": cfg.accent } as CSSProperties}
            >
                <Glow position="top" tone={cfg.ctaGlow} />
                <div className={styles.ctaInner}>
                    {cfg.eyebrow && <p className={styles.ctaEyebrow}>{cfg.eyebrow}</p>}
                    <h2 className={styles.ctaHeading}>{cfg.heading}</h2>
                    <p className={styles.ctaBody}>{cfg.body}</p>
                    <div className={styles.ctaActions}>
                        {cfg.buttons.map(renderButton)}
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <Glow position="bottom" tone={cfg.footerGlow} strength={cfg.footerStrength} />
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
                                        href={contact[cfg.footerContact]}
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
        </div>
    );
}
