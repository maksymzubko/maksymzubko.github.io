import Navbar from "@components/Navbar.tsx";
import Hero from "@components/Hero.tsx";
import About from "@components/About.tsx";
import Experience from "@components/Experience.tsx";
import TechSphere from "@components/TechSphere.tsx";

import {AnimatePresence, motion} from 'framer-motion'
import Works from "@components/Works.tsx";
import Contact from "@components/Contact.tsx";
import StarsCanvas from "@components/canvas/Stars.tsx";
import Socials from "@components/Socials.tsx";
import {useWaitFonts} from "./hooks/useWaitFonts.ts";
import {Loading} from './components/Loading.tsx'
import {useEffect} from "react";
import {useWaitEvents} from "./hooks/useWaitEvents.ts";

function App() {
    const loadingFonts = useWaitFonts([
        '"Poppins"'
    ])

    const loadingEvents = useWaitEvents(['computer', 'earth', 'stars'])

    useEffect(() => {
        if (!loadingFonts && !loadingEvents) {
            document.getElementById("style-init").remove()
            setTimeout(()=>{
                document.body.setAttribute('style', null);
            }, 5000)
        }
    }, [loadingFonts, loadingEvents])

    if(loadingFonts)
    {
        return <Loading/>
    }

    return (
        <>
            <AnimatePresence>
                {loadingEvents && <Loading animateEnd={true}/>}
            </AnimatePresence>

            <motion.div initial={{opacity: 0}}
                        animate={{opacity: loadingEvents ? 0 : 1}}
                        transition={{duration: 1, delay: 5}}
                        className={"relative z-0 bg-primary select-none"}>
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
            </motion.div>
        </>
    )
}

export default App
