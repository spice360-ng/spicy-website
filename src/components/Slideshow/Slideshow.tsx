"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Slideshow.module.scss";

type SlideshowProps = {
    images: string[];
    /** Time each slide is held, ms. */
    interval?: number;
    /** Priority-load the first image (use for above-the-fold backgrounds). */
    priority?: boolean;
    className?: string;
};

/**
 * Full-bleed crossfading background. Cycles `images` on an interval, fading the
 * active one in over the others. Respects prefers-reduced-motion (holds the first
 * image, no cycling). Render inside a position:relative, overflow:hidden parent.
 */
export default function Slideshow({
    images,
    interval = 5000,
    priority = false,
    className,
}: SlideshowProps) {
    const [active, setActive] = useState(0);

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
