import Image from "next/image";
import Link from "next/link";
import styles from "./NavBar.module.scss";

const links = [
    { label: "Home", href: "/" },
    { label: "About & Work", href: "/about" },
    { label: "People", href: "/people" },
    { label: "Spice Digital", href: "/spice-digital" },
];

export default function NavBar() {
    return (
        <header className={styles.nav}>
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

                <button className={styles.menu} aria-label="Open menu">
                    Menu
                </button>
            </div>
        </header>
    );
}
