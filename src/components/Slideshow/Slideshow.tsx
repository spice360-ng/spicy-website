"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Slideshow.module.scss";

type SlideshowProps = {
    images: string[];
    interval?: number;
    priority?: boolean;
    randomStart?: boolean;
    className?: string;
};

export default function Slideshow({
    images,
    interval = 5000,
    priority = false,
    randomStart = false,
    className,
}: SlideshowProps) {
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (!randomStart || images.length <= 1) return;
        const id = requestAnimationFrame(() =>
            setActive(Math.floor(Math.random() * images.length)),
        );
        return () => cancelAnimationFrame(id);
    }, [randomStart, images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const reduce = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduce) return;
        const id = setInterval(
            () => setActive((i) => (i + 1) % images.length),
            interval,
        );
        return () => clearInterval(id);
    }, [images.length, interval]);

    return (
        <div className={`${styles.slideshow} ${className ?? ""}`} aria-hidden>
            {images.map((src, i) => (
                <Image
                    key={src}
                    src={src}
                    alt=""
                    fill
                    sizes="100vw"
                    priority={priority && i === 0}
                    className={`${styles.slide} ${i === active ? styles.active : ""}`}
                />
            ))}
        </div>
    );
}
