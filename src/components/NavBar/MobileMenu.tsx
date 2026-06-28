"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/lib/contact";
import styles from "./MobileMenu.module.scss";

type NavLink = { label: string; href: string };

type MobileMenuProps = {
    links: NavLink[];
    accent?: "green" | "gold" | "red" | "blue";
};

export default function MobileMenu({ links, accent = "green" }: MobileMenuProps) {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const overlay = (
        <div
            className={`${styles.overlay} ${styles[accent]} ${open ? styles.open : ""}`}
            onClick={() => setOpen(false)}
        >
            <div
                className={styles.panel}
                role="dialog"
                aria-modal="true"
                aria-label="Menu"
                onClick={(e) => e.stopPropagation()}
            >
                <nav className={styles.links} aria-label="Mobile">
                    {links.map((l) => {
                        const active =
                            l.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(l.href);
                        return (
                            <Link
                                key={l.label}
                                href={l.href}
                                className={`${styles.link} ${active ? styles.active : ""}`}
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                </nav>

                <a
                    href={contact.general}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}
                    onClick={() => setOpen(false)}
                >
                    Get in touch
                </a>
            </div>
        </div>
    );

    return (
        <div className={`${styles.root} ${styles[accent]}`}>
            <button
                className={styles.trigger}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
            >
                <span className={styles.triggerLabel}>{open ? "Close" : "Menu"}</span>
            </button>

            {mounted && createPortal(overlay, document.body)}
        </div>
    );
}
