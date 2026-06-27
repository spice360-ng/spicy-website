import type { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import PageHero from "@/components/PageHero/PageHero";
import LeaderProfiles from "@/components/LeaderProfiles/LeaderProfiles";
import TeamGrid from "@/components/TeamGrid/TeamGrid";
import Values from "@/components/Values/Values";
import CultureSystem from "@/components/CultureSystem/CultureSystem";
import Footer from "@/components/Footer/Footer";
import { PEOPLE_LANDING_BG } from "@/data/groupPhotos";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "People | Spice360",
    description:
        "The people who run Spice 360, make the work, and serve the clients: each one named after a spice, each name earned.",
    alternates: { canonical: "https://www.spice360.com.mg/people" },
    openGraph: {
        title: "People | Spice360",
        description:
            "The people who run Spice 360, make the work, and serve the clients: each one named after a spice, each name earned.",
        url: "https://www.spice360.com.mg/people",
    },
    twitter: {
        title: "People | Spice360",
        description:
            "The people who run Spice 360, make the work, and serve the clients: each one named after a spice, each name earned.",
    },
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
            </main>
            <Footer page="people" />
        </>
    );
}
