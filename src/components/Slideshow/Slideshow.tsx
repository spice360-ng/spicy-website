"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Slideshow.module.scss";

type SlideshowProps = {
    images: string[];
    interval?: number;
    priority?: boolean;
    startIndex?: number;
    className?: string;
};

export default function Slideshow({
    images,
    interval = 5000,
    priority = false,
    startIndex = 0,
    className,
}: SlideshowProps) {
    const [active, setActive] = useState(startIndex);

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
                    priority={priority && i === startIndex}
                    className={`${styles.slide} ${i === active ? styles.active : ""}`}
                />
            ))}
        </div>
    );
}
