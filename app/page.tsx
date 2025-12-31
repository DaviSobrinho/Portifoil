
import AboutMe from "./components/about";
import ParallaxHero from "./components/parallaxhero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Services from "./components/services";

export default function Page() {
    return (
        <>
            <ParallaxHero />
            <AboutMe/>
            <Services/>
            <Projects />
            <Contact/>
        </>
    );
}
