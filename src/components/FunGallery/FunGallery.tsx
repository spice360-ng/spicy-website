"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FUN_PHOTOS } from "@/data/groupPhotos";
import styles from "./FunGallery.module.scss";

const PER_PAGE = 5;
const PAGES = Math.ceil(FUN_PHOTOS.length / PER_PAGE);
const INTERVAL = 6500; // hold each set of 5 before switching
const STAGGER = 101; // ms between tiles (1.125× the previous 90ms)

/**
 * Home "We are more than workmates" gallery. Shows five candids at a time:
 * "up" tiles slide+fade up from below, "down" tiles slide+fade down from above,
 * staggered. After a few seconds the next five replace them, and so on, looping.
 * Animation only runs once the section is in view; reduced-motion users get a
 * plain, static set.
 */
export default function FunGallery() {
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    io.disconnect();
                }
            },
            { threshold: 0.2 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!started) return;
        const id = setInterval(() => setPage((p) => (p + 1) % PAGES), INTERVAL);
        return () => clearInterval(id);
    }, [started]);

    const slice = FUN_PHOTOS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    return (
        <div ref={ref} className={styles.gallery}>
            {slice.map((p, i) => (
                <div
                    // key includes page so React remounts each tile per set, replaying
                    // the entrance animation.
                    key={`${page}-${i}`}
                    className={`${styles.tile} ${styles[p.dir]} ${started ? styles.run : ""}`}
                    style={{ animationDelay: `${i * STAGGER}ms` }}
                >
                    <Image
                        src={p.src}
                        alt=""
                        fill
                        sizes="(max-width: 760px) 20vw, 18vw"
                        className={styles.photo}
                    />
                </div>
            ))}
        </div>
    );
}
