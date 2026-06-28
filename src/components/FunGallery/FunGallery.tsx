"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FUN_PHOTOS } from "@/data/groupPhotos";
import styles from "./FunGallery.module.scss";

const PER_PAGE = 5;
const PAGES = Math.ceil(FUN_PHOTOS.length / PER_PAGE);
const INTERVAL = 5000;
const STAGGER = 150;

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
            {slice.map((src, i) => {
                const dir = (i + page) % 2 === 0 ? "up" : "down";
                return (
                    <div
                        key={`${page}-${i}`}
                        className={`${styles.tile} ${styles[dir]} ${started ? styles.run : ""}`}
                        style={{ animationDelay: `${i * STAGGER}ms` }}
                    >
                        <Image
                            src={src}
                            alt=""
                            fill
                            sizes="(max-width: 760px) 20vw, 18vw"
                            className={styles.photo}
                        />
                    </div>
                );
            })}
        </div>
    );
}
