import SectionHead from "@/components/SectionHead/SectionHead";
import styles from "./CultureSystem.module.scss";

const paragraphs = [
    "Each name is chosen to describe who the person is. Cayenne sets the temperature. Saffron changes the colour of everything it touches. The names are used in informal communications, on event badges, and in any context where warmth and personality belong. They are never used in contracts.",
    "Leadership at Spice 360 is called the Flavour Board. Not the management team. Not the C-suite. The Flavour Board. New team members propose their own spice names, which the Flavour Board confirms. The name should describe who you are — not who you are trying to become.",
];

export default function CultureSystem() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="The Spice culture system"
                    heading="Nobody here goes by their job title alone"
                    tone="red"
                />
                <div className={styles.body}>
                    {paragraphs.map((p, i) => (
                        <p key={i} className={styles.para}>
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
