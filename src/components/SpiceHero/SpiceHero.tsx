import Glow from "@/components/Glow/Glow";
import { contact } from "@/lib/contact";
import styles from "./SpiceHero.module.scss";

export default function SpiceHero() {
    return (
        <section className={styles.hero}>
            <Glow position="top" tone="blue-dawn" />
            <div className={styles.inner}>
                <h1 className={styles.title}>
                    Same kitchen,<br />different kind of heat
                </h1>
                <div className={styles.foot}>
                    <p className={styles.intro}>
                        Spice Digital is Spice 360&rsquo;s dedicated arm for African tech
                        startups. Brand identity, growth marketing, and digital
                        infrastructure, built for the pace and reality of a company
                        that cannot afford to slow down.
                    </p>
                    <a
                        href={contact.brief}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.button}
                    >
                        Brief Spice Digital
                    </a>
                </div>
            </div>
        </section>
    );
}
