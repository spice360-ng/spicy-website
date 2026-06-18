"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./TeamGrid.module.scss";

type Member = {
    spice: string;
    name: string;
    role: string;
    blurb: string;
    img: string;
};

/**
 * Placeholder roster — swap `members` for the real team (photos, names, spice names,
 * roles) when available. Images currently point at a shared placeholder avatar.
 */
const members: Member[] = [
    {
        spice: "Saffron",
        name: "Rotimi Ade-Onojobi",
        role: "Creative Director",
        blurb: "Saffron oversees the temperature, tuning into the room's feelings for optimal comfort.",
        img: "/leadership/rotimi.jpg",
    },
    {
        spice: "Cayenne",
        name: "Biodun Adefila",
        role: "Managing Director",
        blurb: "Cayenne sets the temperature. Direct, decisive, and never lukewarm about the work.",
        img: "/leadership/biodun.jpg",
    },
    { spice: "Paprika", name: "Team Member", role: "Strategy", blurb: "Adds colour without overwhelming the dish.", img: "/team/placeholder.png" },
    { spice: "Cumin", name: "Team Member", role: "Account Lead", blurb: "Warm, earthy, holds a campaign together.", img: "/team/placeholder.png" },
    { spice: "Nutmeg", name: "Team Member", role: "Design", blurb: "A little goes a long way.", img: "/team/placeholder.png" },
    { spice: "Clove", name: "Team Member", role: "Production", blurb: "Sharp, unmistakable, used with intent.", img: "/team/placeholder.png" },
    { spice: "Ginger", name: "Team Member", role: "Social", blurb: "Brings the heat that wakes a brand up.", img: "/team/placeholder.png" },
    { spice: "Cardamom", name: "Team Member", role: "Copy", blurb: "Complex, refined, worth the work.", img: "/team/placeholder.png" },
    { spice: "Turmeric", name: "Team Member", role: "Insights", blurb: "Colours everything it touches.", img: "/team/placeholder.png" },
    { spice: "Sumac", name: "Team Member", role: "Activation", blurb: "Tart, bright, hard to ignore.", img: "/team/placeholder.png" },
];

export default function TeamGrid() {
    const [active, setActive] = useState(0);
    const current = members[active];

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="The minds behind the magic"
                    heading="Our team"
                    subcopy="The team grid carries each person's real name, spice name, and role. The naming convention is not a gimmick. It is how the agency's identity extends into the people who carry it. Each name describes who the person is, not who they want to be."
                    tone="red"
                />

                <div className={styles.layout}>
                    <ul className={styles.grid}>
                        {members.map((m, i) => (
                            <li key={i}>
                                <button
                                    type="button"
                                    className={`${styles.tile} ${i === active ? styles.tileActive : ""}`}
                                    onClick={() => setActive(i)}
                                    onMouseEnter={() => setActive(i)}
                                    aria-label={`${m.spice} — ${m.name}, ${m.role}`}
                                >
                                    <Image
                                        src={m.img}
                                        alt=""
                                        fill
                                        sizes="113px"
                                        className={styles.tileImg}
                                    />
                                </button>
                            </li>
                        ))}
                    </ul>

                    <aside className={styles.detail} aria-live="polite">
                        <p className={styles.spice}>{current.spice}</p>
                        <h3 className={styles.name}>{current.name}</h3>
                        <p className={styles.role}>{current.role}</p>
                        <p className={styles.blurb}>{current.blurb}</p>
                    </aside>
                </div>
            </div>
        </section>
    );
}
