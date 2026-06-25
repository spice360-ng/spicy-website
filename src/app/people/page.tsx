import type { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import PageHero from "@/components/PageHero/PageHero";
import LeaderProfiles from "@/components/LeaderProfiles/LeaderProfiles";
import TeamGrid from "@/components/TeamGrid/TeamGrid";
import Values from "@/components/Values/Values";
import CultureSystem from "@/components/CultureSystem/CultureSystem";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import Footer from "@/components/Footer/Footer";
import { contact } from "@/lib/contact";
import { PEOPLE_LANDING_BG } from "@/data/groupPhotos";

export const metadata: Metadata = {
    title: "People — Spice360",
    description:
        "The people who run Spice 360, make the work, and serve the clients — each one named after a spice, each name earned.",
};

export default function PeoplePage() {
    return (
        <>
            <NavBar accent="red" />
            <main>
                <PageHero
                    glow="red-ellipse"
                    bgImage={PEOPLE_LANDING_BG}
                    title="People"
                    intro="Spice 360 is a Nigerian creative agency. The people who run it, make the work, and serve the clients are the agency. This is who they are."
                />
                <LeaderProfiles />
                <TeamGrid />
                <Values />
                <CultureSystem />
                <CtaBanner
                    glow="ember"
                    accent="red"
                    heading="There is probably a spice name with your character written into it."
                    body="Spice 360 hires people who are curious, specific, and allergic to lukewarm work. If that describes you, and if you have work that proves it, we want to hear from you. Send your portfolio and a short note about what you believe."
                    button={{ label: "Get in touch", href: contact.apply }}
                />
            </main>
            <Footer page="people" />
        </>
    );
}
