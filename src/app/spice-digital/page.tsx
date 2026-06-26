import type { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import SpiceHero from "@/components/SpiceHero/SpiceHero";
import SpiceAbout from "@/components/SpiceAbout/SpiceAbout";
import SpiceServices from "@/components/SpiceServices/SpiceServices";
import SpiceAudience from "@/components/SpiceAudience/SpiceAudience";
import SpiceCompare from "@/components/SpiceCompare/SpiceCompare";
import SpiceWork from "@/components/SpiceWork/SpiceWork";
import SpiceCallout from "@/components/SpiceCallout/SpiceCallout";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Spice Digital | Spice360",
    description:
        "Spice Digital is Spice 360's dedicated arm for African tech startups: brand identity, growth marketing, and digital infrastructure built for the pace of a funded company.",
};

export default function SpiceDigitalPage() {
    return (
        <>
            <NavBar accent="blue" />
            <main>
                <SpiceHero />
                <SpiceAbout />
                <SpiceServices />
                <SpiceAudience />
                <SpiceCompare />
                <SpiceWork />
                <SpiceCallout />
            </main>
            <Footer page="spice-digital" />
        </>
    );
}
