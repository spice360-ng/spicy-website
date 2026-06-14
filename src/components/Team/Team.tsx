import Image from "next/image";
import styles from "./Team.module.scss";

const photos = [
    { src: "/team/team-1.png", tall: false },
    { src: "/team/team-2.png", tall: true },
    { src: "/team/team-3.png", tall: false },
    { src: "/team/team-4.png", tall: true },
    { src: "/team/team-5.png", tall: false },
];

export default function Team() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <p className={styles.eyebrow}>Our Team</p>
                <h2 className={styles.heading}>We are more than just workmates</h2>

                <div className={styles.gallery}>
                    {photos.map((p, i) => (
                        <div
                            key={p.src}
                            className={`${styles.tile} ${p.tall ? styles.tall : ""}`}
                        >
                            <Image
                                src={p.src}
                                alt={`Spice360 team candid ${i + 1}`}
                                fill
                                sizes="(max-width: 760px) 50vw, 20vw"
                                className={styles.photo}
                            />
                        </div>
                    ))}
                </div>

                <p className={styles.caption}>
                    We have social bonding time with all the staffs and try to do beyond
                    just work
                </p>
            </div>
        </section>
    );
}
