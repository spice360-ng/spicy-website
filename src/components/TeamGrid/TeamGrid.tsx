"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHead from "@/components/SectionHead/SectionHead";
import { STAFF, type Staff } from "@/data/staff";
import styles from "./TeamGrid.module.scss";

function TeamTile({ m }: { m: Staff }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <li
            className={`${styles.tile} ${flipped ? styles.flipped : ""}`}
            tabIndex={0}
            onClick={() => setFlipped((f) => !f)}
            onMouseLeave={() => setFlipped(false)}
            onBlur={() => setFlipped(false)}
        >
            <Image
                src={m.corporate}
                alt={m.fullName}
                fill
                sizes="(max-width: 760px) 45vw, 220px"
                className={`${styles.photo} ${styles.corporate}`}
            />
            <Image
                src={m.tshirt}
                alt=""
                fill
                sizes="(max-width: 760px) 45vw, 220px"
                className={`${styles.photo} ${styles.tshirt}`}
            />
            <div className={styles.overlay} />
            <div className={styles.meta}>
                {m.spice && <p className={styles.spice}>{m.spice}</p>}
                <p className={styles.name}>{m.fullName}</p>
                {m.role && <p className={styles.role}>{m.role}</p>}
            </div>
        </li>
    );
}

export default function TeamGrid() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="The minds behind the magic"
                    heading="Our team"
                    subcopy="Each person carries a real name and a spice name. The naming convention is not a gimmick, it is how the agency's identity extends into the people who carry it. Each name describes who the person is, not who they want to be."
                    tone="red"
                />

                <ul className={styles.grid}>
                    {STAFF.map((m) => (
                        <TeamTile key={m.fullName} m={m} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
