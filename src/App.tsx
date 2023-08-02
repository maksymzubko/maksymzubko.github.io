import Navbar from "@components/Navbar.tsx";
import Hero from "@components/Hero.tsx";
import About from "@components/About.tsx";
import Experience from "@components/Experience.tsx";
import TechSphere from "@components/TechSphere.tsx";
// import MachineCanvas from "@components/canvas/Machine.tsx";
import Works from "@components/Works.tsx";
import Contact from "@components/Contact.tsx";
import StarsCanvas from "@components/canvas/Stars.tsx";
import Socials from "@components/Socials.tsx";
import {Suspense} from "react";
import PageLoader from "@components/PageLoader.tsx";

function App() {
    return (
        <div className={"relative z-0 bg-primary select-none"}>
            <div className={"bg-hero-pattern bg-cover bg-no-repeat bg-center"}>
                <Navbar/>
                <Hero/>
            </div>
            <About/>
            <Experience/>
            <TechSphere/>
            <Works/>
            <Socials/>
            <div className={"z-0"}>
                <Contact/>
                <StarsCanvas/>
            </div>
        </div>
    )
}

export default App
