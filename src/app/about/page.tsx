import type { Metadata } from "next";
import NavBar from "@/components/NavBar/NavBar";
import PageHero from "@/components/PageHero/PageHero";
import OurStory from "@/components/OurStory/OurStory";
import SelectedWork from "@/components/SelectedWork/SelectedWork";
import Capabilities from "@/components/Capabilities/Capabilities";
import AwardsRecord from "@/components/AwardsRecord/AwardsRecord";
import BrandsStrip from "@/components/BrandsStrip/BrandsStrip";
import ProcessSteps from "@/components/ProcessSteps/ProcessSteps";
import CtaBanner from "@/components/CtaBanner/CtaBanner";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "About & Work — Spice360",
    description:
        "Spice360 grew out of the Tolaram Group into a LAIF-winning Nigerian creative agency. The work, the capabilities, and the standard behind it.",
};

export default function AboutPage() {
    return (
        <>
            <NavBar accent="gold" />
            <main>
                <PageHero
                    glow="orange-ellipse"
                    glowStrength={0.55}
                    title="About & Work"
                    intro="The agency grew out of the Tolaram Group, one of West Africa's largest consumer goods conglomerates and the company behind Indomie, Power Oil, Dano Milk, Colgate Nigeria, and twelve other brands that are part of Nigerian daily life. Working that account, year after year, built something most agencies spend careers trying to acquire: a genuine, granular understanding of what moves Nigerian people."
                />
                <OurStory />
                <SelectedWork />
                <Capabilities />
                <AwardsRecord />
                <BrandsStrip />
                <ProcessSteps />
                <CtaBanner
                    glow="amber"
                    accent="gold"
                    heading="Start a conversation"
                    body="Tell us what your brand is trying to do and leave the rest to us"
                    button={{ label: "Brief us", href: "/contact" }}
                />
            </main>
            <Footer />
        </>
    );
}
