import NavBar from "@/components/NavBar/NavBar";
import Hero from "@/components/Hero/Hero";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Motto from "@/components/Motto/Motto";
import Scoreboard from "@/components/Scoreboard/Scoreboard";
import Services from "@/components/Services/Services";
import Leadership from "@/components/Leadership/Leadership";
import Brands from "@/components/Brands/Brands";
import Team from "@/components/Team/Team";
import Blog from "@/components/Blog/Blog";
import SpiceDigital from "@/components/SpiceDigital/SpiceDigital";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <NavBar />
            <main>
                <Hero />
                <HowWeWork />
                <Motto />
                <Scoreboard />
                <Services />
                <Leadership />
                <Brands />
                <Team />
                <Blog />
                <SpiceDigital />
            </main>
            <Footer />
        </>
    );
}
