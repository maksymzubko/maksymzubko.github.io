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
import {PageLoader} from '@components/PageLoader.tsx'
import {useEffect, useState} from "react";
import {useWaitEvents} from "./hooks/useWaitEvents.ts";
import {GlobalContext} from "./contexts/GlobalContext.ts";

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
}

function App() {
    const [isMobileState, setIsMobile] = useState(isMobile())
    const [currentHash, setCurrentHash] = useState("")

    const loadingFonts = useWaitFonts([])

    const loadingEvents = useWaitEvents(!isMobile() ? ['computer', 'earth'] : ['earth'])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        }

        const handlePopChange = () => {
            setCurrentHash(window.location.hash.replace("#", ""))
        }

        window.addEventListener('history', handlePopChange);
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            window.removeEventListener('history', handlePopChange);
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    useEffect(() => {
        if (!loadingFonts && !loadingEvents) {
            document.getElementById("style-init").remove()
            setTimeout(() => {
                document.body.setAttribute('style', "");
                document.documentElement.setAttribute('style', "");
            }, 3000)
        }
    }, [loadingFonts, loadingEvents])

    if (loadingFonts) {
        return <PageLoader/>
    }

    return (
        <GlobalContext.Provider value={{isMobile: isMobileState, currentHash: currentHash}}>
            <AnimatePresence>
                {loadingEvents && <PageLoader/>}
            </AnimatePresence>

            <motion.div initial={{opacity: 0}}
                        animate={{opacity: loadingEvents ? 0 : 1}} transition={{duration: 1, delay: 3}}
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
                    <Contact isMobile={isMobileState}/>
                </div>
                <div className={"flex flex-col items-center justify-center gap-2 my-3"}>
                    Found bug, issue or typo?
                    <a className={"font-bold"} target={"_blank"} href={"https://github.com/maksymzubko/maksymzubko.github.io/issues"}>
                        Please write here.
                    </a>
                </div>
            </motion.div>
        </GlobalContext.Provider>
    )
}

export default App
