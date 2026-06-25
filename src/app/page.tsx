import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import Glow from "@/components/Glow/Glow";
import BrandsMarquee from "@/components/BrandsMarquee/BrandsMarquee";
import Slideshow from "@/components/Slideshow/Slideshow";
import FunGallery from "@/components/FunGallery/FunGallery";
import { contact, route } from "@/lib/contact";
import { HERO_SLIDES, MOTTO_BG, CANNES_IMG } from "@/data/groupPhotos";
import styles from "./page.module.scss";

const pillars = [
    {
        no: "01",
        title: "Outthink",
        body: "We interrogate every brief before we answer it.",
    },
    {
        no: "02",
        title: "Outcreate",
        body: "We pursue the kind of work no other agency is brave enough to make.",
    },
    {
        no: "03",
        title: "Outpace",
        body: "We move faster, adapt sharper, and stay ahead of the market.",
    },
];

const stats = [
    { value: "4th", label: "Most creative agency in Nigeria, 2024" },
    { value: "5", label: "Gold medals, maiden entry" },
    { value: "7", label: "Silver medals" },
    { value: "4", label: "Bronze medals" },
    { value: "90", label: "Total points scored" },
    { value: "19yr", label: "Competition we walked into on day one" },
];

const people = [
    {
        img: "/staff/corporate/Biodun-Adefila-Salt.jpg",
        role: "Managing Director",
        name: "Biodun Adefila",
        bio: "Former COO at SO&U, AAAN board member, campaigns for Guinness Nigeria, GTBank, and Unilever. She leads the agency’s strategy and its expansion across Sub-Saharan Africa.",
    },
    {
        img: "/staff/corporate/Rotimi-AdeOnojobi-Alligator-pepper.jpg",
        role: "Creative Director",
        name: "Rotimi Ade-Onojobi",
        bio: "Over a decade at Livespot, BOGO Beverages, and the Ark Group. The creative direction behind five gold medals on our first time at the table.",
    },
];

const secondary = [
    {
        img: CANNES_IMG,
        date: "15th of January 2026",
        title: "The year we took our young lions to Cannes.",
        tag: "Agency Story",
    },
    {
        img: "/blog/indomie-noodles.png",
        date: "15th of January 2026",
        title: "How we partnered with Indomie to build one of Nigeria’s most loved brands.",
        tag: "Case Study",
    },
];

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <Slideshow images={HERO_SLIDES} priority className={styles.heroSlides} />
                    <div className={styles.heroScrim} aria-hidden />
                    <Glow position="top" tone="warm" />
                    <div className={styles.heroInner}>
                        <h1 className={styles.heroHeadline}>
                            We make brands<br />impossible to ignore.
                        </h1>

                        <div className={styles.heroContent}>
                            <p className={styles.heroBody}>
                                We build integrated 360 campaigns rooted in cultural truth. We
                                find what moves Nigerians and build campaigns that go all the way,
                                from strategy to execution.
                            </p>
                            <div className={styles.heroActions}>
                                <Link href={route("about")} className={styles.heroPrimary}>
                                    See what we&rsquo;ve cooked
                                </Link>
                                <a
                                    href={contact.general}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.heroSecondary}
                                >
                                    Get in touch
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How we work */}
                <section className={styles.hwwSection}>
                    <div className={styles.hwwInner}>
                        <p className={styles.hwwEyebrow}>Our three pillars</p>
                        <h2 className={styles.hwwHeading}>How we work</h2>

                        <div className={styles.hwwGrid}>
                            {pillars.map((p) => (
                                <article key={p.no} className={styles.hwwCard}>
                                    <div className={styles.hwwContent}>
                                        <span className={styles.hwwNo}>{p.no}</span>
                                        <div className={styles.hwwText}>
                                            <h3 className={styles.hwwTitle}>{p.title}</h3>
                                            <p className={styles.hwwBody}>{p.body}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Motto */}
                <section className={styles.motto} aria-label="Our motto">
                    <Image
                        src={MOTTO_BG}
                        alt=""
                        fill
                        sizes="100vw"
                        className={styles.mottoPhoto}
                    />
                    <div className={styles.mottoScrim} aria-hidden />
                    <div className={styles.mottoContent}>
                        <h2 className={styles.mottoQuote}>
                            &ldquo;We exist to make brands impossible to ignore.&rdquo;
                        </h2>
                        <p className={styles.mottoLabel}>Our Motto</p>
                    </div>
                </section>

                {/* Scoreboard */}
                <section className={styles.sbSection}>
                    <Glow position="bottom" tone="warm" scale={2} />
                    <div className={styles.sbInner}>
                        <p className={styles.sbEyebrow}>Awards &amp; Accolades</p>
                        <h2 className={styles.sbHeading}>The scoreboard</h2>

                        <div className={styles.sbGrid}>
                            {stats.map((s) => (
                                <div key={s.value + s.label} className={styles.sbStat}>
                                    <span className={styles.sbValue}>{s.value}</span>
                                    <span className={styles.sbLabel}>{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className={styles.svcSection}>
                    <div className={styles.svcInner}>
                        <div className={styles.svcHead}>
                            <p className={styles.svcEyebrow}>What we do</p>
                            <h2 className={styles.svcHeading}>
                                The recipe for campaigns that work
                            </h2>
                            <Link href={route("about")} className={styles.svcCta}>
                                Everything we offer
                            </Link>
                        </div>

                        <div className={styles.svcCard}>
                            <article className={`${styles.svcBlock} ${styles.svcStrategy}`}>
                                <h3 className={styles.svcTitle}>Brand Strategy</h3>
                                <p className={styles.svcBody}>
                                    The conviction before the campaign. We work out what a brand
                                    actually believes before we make anything.
                                </p>
                            </article>

                            <article className={`${styles.svcBlock} ${styles.svcDigital}`}>
                                <h3 className={styles.svcTitle}>Digital Content</h3>
                                <p className={styles.svcBody}>
                                    Always-on creative for Africa&rsquo;s most engaged online
                                    market. Built for Nigerian audiences from line one.
                                </p>
                            </article>

                            <article className={`${styles.svcBlock} ${styles.svcIntegrated}`}>
                                <h3 className={styles.svcTitle}>Integrated Campaigns</h3>
                                <p className={styles.svcBody}>
                                    Every channel, one idea behind all of it. The 360 in our name
                                    is a commitment, not a category claim.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Leadership */}
                <section className={styles.ldSection}>
                    <Glow position="bottom" tone="warm" scale={2} />
                    <div className={styles.ldInner}>
                        <div className={styles.ldHead}>
                            <p className={styles.ldEyebrow}>Leadership</p>
                            <h2 className={styles.ldHeading}>Two hires. One direction</h2>
                            <Link href="/people" className={styles.ldCta}>
                                See full team
                            </Link>
                        </div>

                        <div className={styles.ldGrid}>
                            {people.map((p) => (
                                <article key={p.name} className={styles.ldCard} tabIndex={0}>
                                    <Image
                                        src={p.img}
                                        alt={`${p.name}, ${p.role}`}
                                        fill
                                        sizes="(max-width: 760px) 90vw, 432px"
                                        className={styles.ldPhoto}
                                    />
                                    <div className={styles.ldOverlay} />
                                    <div className={styles.ldMeta}>
                                        <p className={styles.ldRole}>{p.role}</p>
                                        <h3 className={styles.ldName}>{p.name}</h3>
                                        <p className={styles.ldBio}>{p.bio}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Brands */}
                <section className={styles.brSection}>
                    <div className={styles.brPanel}>
                        <header className={styles.brHead}>
                            <p className={styles.brEyebrow}>Awards &amp; Accolades</p>
                            <h2 className={styles.brHeading}>
                                The brands Nigerians know. We make them.
                            </h2>
                        </header>

                        <BrandsMarquee />

                        <p className={styles.brCopy}>
                            Active mandates include Indomie, Dano Milk, Power Oil, Kellogg&rsquo;s,
                            Colgate Nigeria, 2sure, Hero, Minimie, Lush Hair, and Hypo &mdash;
                            across food, personal care, and lifestyle.
                        </p>
                    </div>
                </section>

                {/* Team */}
                <section className={styles.tmSection}>
                    <div className={styles.tmInner}>
                        <p className={styles.tmEyebrow}>Our Team</p>
                        <h2 className={styles.tmHeading}>We are more than workmates</h2>

                        <FunGallery />

                        <p className={styles.tmCaption}>
                            We have social bonding time with all the staffs and try to do beyond
                            just work
                        </p>
                    </div>
                </section>

                {/* Blog */}
                <section className={styles.blSection}>
                    <Glow position="top" tone="warm" />
                    <div className={styles.blInner}>
                        <header className={styles.blHead}>
                            <p className={styles.blEyebrow}>Our Blog</p>
                            <h2 className={styles.blHeading}>Behind the kitchen</h2>
                            <p className={styles.blCopy}>
                                We&rsquo;ve gotten the job done countless times, here&rsquo;s how
                                we did some and insights we have to share
                            </p>
                            <Link href={route("blog")} className={styles.blCta}>
                                More from the kitchen
                            </Link>
                        </header>

                        <article className={`${styles.blCard} ${styles.blFeatured}`}>
                            <Image
                                src="/blog/indomie-feature.png"
                                alt="Indomie partnership case study"
                                fill
                                sizes="(max-width: 760px) 100vw, 1150px"
                                className={styles.blPhoto}
                            />
                            <div className={styles.blScrim} />
                            <div className={styles.blMeta}>
                                <p className={styles.blDate}>15th of January 2026</p>
                                <h3 className={styles.blTitle}>
                                    How we partnered with Indomie to build one of Nigeria&rsquo;s
                                    most loved brands.
                                </h3>
                                <p className={styles.blTag}>Case Study</p>
                            </div>
                        </article>

                        <div className={styles.blGrid}>
                            {secondary.map((p) => (
                                <article key={p.title} className={styles.blCard}>
                                    <Image
                                        src={p.img}
                                        alt={p.title}
                                        fill
                                        sizes="(max-width: 760px) 100vw, 571px"
                                        className={styles.blPhoto}
                                    />
                                    <div className={styles.blScrim} />
                                    <div className={styles.blMeta}>
                                        <p className={styles.blDate}>{p.date}</p>
                                        <h3 className={styles.blTitle}>{p.title}</h3>
                                        <p className={styles.blTag}>{p.tag}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Spice Digital */}
                <section className={styles.sdSection}>
                    <Glow position="top" tone="cool" />
                    <div className={styles.sdInner}>
                        <p className={styles.sdEyebrow}>A Spice360 sub-brand</p>
                        <h2 className={styles.sdHeading}>
                            Built a product.<br />Now build the brand.
                        </h2>
                        <p className={styles.sdCopy}>
                            Spice Digital is our dedicated arm for African tech startups. Same
                            creative standards. Different kind of client.
                        </p>
                        <Link href={route("spice-digital")} className={styles.sdCta}>
                            Explore Spice Digital
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
