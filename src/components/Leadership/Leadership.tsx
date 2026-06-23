import Image from "next/image";
import Link from "next/link";
import Glow from "@/components/Glow/Glow";
import styles from "./Leadership.module.scss";

const people = [
    {
        img: "/leadership/biodun.jpg",
        role: "Managing Director",
        name: "Biodun Adefila",
        bio: "Former COO at SO&U, AAAN board member, campaigns for Guinness Nigeria, GTBank, and Unilever. She leads the agency's strategy and its expansion across Sub-Saharan Africa.",
    },
    {
        img: "/leadership/rotimi.jpg",
        role: "Creative Director",
        name: "Rotimi Ade-Onojobi",
        bio: "Over a decade at Livespot, BOGO Beverages, and the Ark Group. The creative direction behind five gold medals on our first time at the table.",
    },
];

export default function Leadership() {
    return (
        <section className={styles.section}>
            <Glow position="bottom" tone="warm" scale={2} />
            <div className={styles.inner}>
                <div className={styles.head}>
                    <p className={styles.eyebrow}>Leadership</p>
                    <h2 className={styles.heading}>Two hires, One direction</h2>
                    <Link href="/people" className={styles.cta}>
                        See full team
                    </Link>
                </div>

                <div className={styles.grid}>
                    {people.map((p) => (
                        <article key={p.name} className={styles.card} tabIndex={0}>
                            <Image
                                src={p.img}
                                alt={`${p.name}, ${p.role}`}
                                fill
                                sizes="(max-width: 760px) 90vw, 432px"
                                className={styles.photo}
                            />
                            <div className={styles.overlay} />
                            <div className={styles.meta}>
                                <p className={styles.role}>{p.role}</p>
                                <h3 className={styles.name}>{p.name}</h3>
                                <p className={styles.bio}>{p.bio}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
