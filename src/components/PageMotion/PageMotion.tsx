"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageMotion() {
    const pathname = usePathname();

    useEffect(() => {
        const sections = Array.from(
            document.querySelectorAll<HTMLElement>("main > section"),
        );
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, [pathname]);

    return null;
}
