"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Brands.module.scss";

const tiles = [
    "/brand-tiles/tile-1.png",
    "/brand-tiles/tile-2.png",
    "/brand-tiles/tile-3.png",
    "/brand-tiles/tile-4.png",
    "/brand-tiles/tile-5.png",
    "/brand-tiles/tile-6.png",
    "/brand-tiles/tile-7.png",
    "/brand-tiles/tile-8.png",
];

// Four rows, each a rotated order so the columns don't line up, alternating direction.
const rows = [
    { dir: "left", order: [0, 1, 2, 3, 4, 5, 6, 7], dur: 38 },
    { dir: "right", order: [4, 5, 6, 7, 0, 1, 2, 3], dur: 46 },
    { dir: "left", order: [2, 3, 4, 5, 6, 7, 0, 1], dur: 42 },
    { dir: "right", order: [6, 7, 0, 1, 2, 3, 4, 5], dur: 50 },
];

export default function Brands() {
    const ref = useRef<HTMLDivElement>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => setPlaying(entry.isIntersecting),
            { threshold: 0.2 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.panel}>
                <header className={styles.head}>
                    <p className={styles.eyebrow}>Awards &amp; Accolades</p>
                    <h2 className={styles.heading}>
                        The brands Nigerians know. We make them.
                    </h2>
                </header>

                <div
                    ref={ref}
                    className={`${styles.marquee} ${playing ? styles.playing : ""}`}
                >
                    {rows.map((row, i) => (
                        <div key={i} className={styles.row}>
                            <div
                                className={`${styles.track} ${styles[row.dir]}`}
                                style={{ "--dur": `${row.dur}s` } as React.CSSProperties}
                            >
                                {[...row.order, ...row.order].map((t, j) => (
                                    <span key={j} className={styles.tile}>
                                        <img src={tiles[t]} alt="" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className={styles.copy}>
                    Active mandates include Indomie, Dano Milk, Power Oil, Kellogg&rsquo;s,
                    Colgate Nigeria, 2sure, Hero, Minimie, Lush Hair, and Hypo &mdash;
                    across food, personal care, and lifestyle.
                </p>
            </div>
        </section>
    );
}
