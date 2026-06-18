import Image from "next/image";
import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import { route } from "@/lib/contact";
import styles from "./Blog.module.scss";

const secondary = [
    {
        img: "/blog/cannes.png",
        date: "15th of January 2026",
        title: "The year we took our young lions to Cannes.",
        tag: "Agency Story",
    },
    {
        img: "/blog/indomie-noodles.png",
        date: "15th of January 2026",
        title: "How we partnered with Indomie to build one of Nigeria's most loved brands.",
        tag: "Case Study",
    },
];

export default function Blog() {
    return (
        <section className={styles.section}>
            <Glow position="top" tone="warm" />
            <div className={styles.inner}>
                <header className={styles.head}>
                    <p className={styles.eyebrow}>Our Blog</p>
                    <h2 className={styles.heading}>Behind the kitchen</h2>
                    <p className={styles.copy}>
                        We&rsquo;ve gotten the job done countless times, here&rsquo;s how
                        we did some and insights we have to share
                    </p>
                    <Link href={route("blog")} className={styles.cta}>
                        More from the kitchen
                    </Link>
                </header>

                <article className={`${styles.card} ${styles.featured}`}>
                    <Image
                        src="/blog/indomie-feature.png"
                        alt="Indomie partnership case study"
                        fill
                        sizes="(max-width: 760px) 100vw, 1150px"
                        className={styles.photo}
                    />
                    <div className={styles.scrim} />
                    <div className={styles.meta}>
                        <p className={styles.date}>15th of January 2026</p>
                        <h3 className={styles.title}>
                            How we partnered with Indomie to build one of Nigeria&rsquo;s
                            most loved brands.
                        </h3>
                        <p className={styles.tag}>Case Study</p>
                    </div>
                </article>

                <div className={styles.grid}>
                    {secondary.map((p) => (
                        <article key={p.title} className={styles.card}>
                            <Image
                                src={p.img}
                                alt={p.title}
                                fill
                                sizes="(max-width: 760px) 100vw, 571px"
                                className={styles.photo}
                            />
                            <div className={styles.scrim} />
                            <div className={styles.meta}>
                                <p className={styles.date}>{p.date}</p>
                                <h3 className={styles.title}>{p.title}</h3>
                                <p className={styles.tag}>{p.tag}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
