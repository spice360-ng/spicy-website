import Image from "next/image";
import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./LeaderProfiles.module.scss";

const leaders = [
    {
        img: "/staff/tshirt/Biodun-Adefila-Salt.jpg",
        bg: "gold" as const,
        role: "Managing Director",
        spice: "Salt",
        name: "Biodun Adefila",
        tagline: "Without salt, no dish is complete, no matter what else goes in.",
        bio: [
            "Biodun Adefila spent over two decades in Nigerian advertising, finishing her time at SO&U Limited as Chief Operating Officer. At SO&U, she ran campaigns for Guinness Nigeria, GTBank, Unilever, P&G, and Access Bank, a portfolio that spans every major FMCG and financial services category in the market.",
            "She served on the AAAN board. Marketing Edge named her Outstanding Advertising Personality of the Year in 2020. Brand Communicator put her in the Top 50 Most Influential Women in Marketing Communications in 2023. She holds an MBA from the University of Liverpool and an Advanced Management Programme certification from Lagos Business School.",
            "At Spice 360, she leads business strategy, client partnerships, and the agency’s expansion across Sub-Saharan Africa. She does not hedge. That is not an observation. It is a working principle.",
        ],
    },
    {
        img: "/staff/tshirt/Rotimi-AdeOnojobi-Alligator-pepper.jpg",
        bg: "red" as const,
        role: "Creative Director",
        spice: "Alligator pepper",
        name: "Rotimi Ade-Onojobi",
        tagline: "Controls the temperature of every room: precise heat, never a degree too much.",
        bio: [
            "Rotimi Ade-Onojobi spent a decade building creative work across Monument Distillers, Livespot Group (the company behind Livespot X Festival featuring Cardi B), the Ark Group, and BOGO Beverages, where he directed the Nigerian market launch of Bottega Italian Sparkling Wine and BOGO Charger Energy Drink.",
            "His campaign credits run through Heineken, Nestlé, Airtel, ABInBev, Skyy Vodka, and Access Bank. The 2022 Indomie ‘Mother’s Love’ campaign, globally recognised on Ads of the World, was produced under his creative direction.",
            "At Spice 360, he sets the creative direction for every client, every format, every platform. The five golds at LAIF 2024 are the first public output of what that direction produces. There are more.",
        ],
    },
];

export default function LeaderProfiles() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    heading="The people behind the heat"
                    subcopy="Each one named after a spice, each name earned."
                    tone="muted"
                    surface="light"
                />

                <div className={styles.list}>
                    {leaders.map((l) => (
                        <article
                            key={l.name}
                            className={`${styles.card} ${styles[l.bg]}`}
                        >
                            <div className={styles.photo}>
                                <Image
                                    src={l.img}
                                    alt={`${l.name}, ${l.role}`}
                                    fill
                                    sizes="250px"
                                    className={styles.img}
                                />
                            </div>
                            <div className={styles.detail}>
                                <p className={styles.role}>
                                    {l.role}
                                    <span className={styles.dot} aria-hidden />
                                    <span className={styles.spice}>{l.spice}</span>
                                </p>
                                <h3 className={styles.name}>{l.name}</h3>
                                {l.tagline && (
                                    <p className={styles.tagline}>{l.tagline}</p>
                                )}
                                {l.bio.map((p, i) => (
                                    <p key={i} className={styles.bio}>
                                        {p}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
