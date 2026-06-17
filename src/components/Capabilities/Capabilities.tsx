import Glow from "@/components/Glow/Glow";
import SectionHead from "@/components/SectionHead/SectionHead";
import FeatureGrid, { FeatureItem } from "@/components/FeatureGrid/FeatureGrid";
import styles from "./Capabilities.module.scss";

const items: FeatureItem[] = [
    {
        number: "01",
        kicker: "Stories people actually care about",
        title: "Film and TV Production",
        body: "In a market where attention is the scarcest resource, the campaigns that build brands over time are the ones that earn it. We produce TV commercials, digital films, and video campaigns from brief to final cut. The 2022 Indomie 'Mother's Love' campaign, directed by Jay Bhansali of KKDD Films, earned global recognition on Ads of the World. That is the standard we work against.",
    },
    {
        number: "02",
        kicker: "The conviction before the campaign",
        title: "Brand Strategy",
        body: "Naming, visual identity, brand voice, and positioning for brands that want to own a corner of the market. Before a line of copy is written, we work out what the brand actually believes and whether that belief will move the people it's made for. The insight driving any campaign worth making is almost always found in this stage.",
    },
    {
        number: "03",
        kicker: "Built for the speed of this culture",
        title: "Digital Content",
        body: "Always-on content strategies and social media campaigns for brands navigating Africa's most active online market. We write and design for Nigerian audiences, not for global templates adapted downward. The difference shows up in the engagement numbers.",
    },
    {
        number: "04",
        kicker: "Every channel, one idea",
        title: "Integrated Campaigns",
        body: "Strategy and production across TV, radio, OOH, digital, experiential, and print, as a single coherent campaign. Not parallel workstreams loosely branded under one name. One insight, expressed with equal force at every point where the consumer encounters the brand.",
    },
    {
        number: "05",
        kicker: "Put the brand in the room",
        title: "Experiential & Activation",
        body: "Live activations, consumer promotions, and on-ground experiences that bring the brand into direct contact with its audience. From the Indomie Fan Club running in schools across Nigeria to large-scale promotions like Eat and Win, we build activations that move products and generate earned media.",
    },
    {
        number: "06",
        kicker: "Sharper insights, faster",
        title: "AI-Assisted Insights",
        body: "We use AI tools to surface consumer insights, test creative hypotheses, and identify content patterns before committing production budgets. No established Nigerian agency has built this as a named, premium service line. We have. It is a practical advantage in how we work, not a technology pitch.",
    },
];

export default function Capabilities() {
    return (
        <section className={styles.section}>
            <Glow position="bottom" tone="amber" />
            <div className={styles.inner}>
                <SectionHead
                    eyebrow="What we offer"
                    heading="Six capabilities, One standard"
                    tone="gold"
                />
                <FeatureGrid items={items} />
            </div>
        </section>
    );
}
