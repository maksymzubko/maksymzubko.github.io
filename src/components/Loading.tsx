import {usePresence} from "framer-motion";
import {useEffect} from "react";
import {motion} from "framer-motion";

export const Loading = (props) => {
    const [isPresent, safeToRemove] = usePresence()

    useEffect(() => {
        if(!isPresent)
        {
            setTimeout(()=>{
                safeToRemove()
            }, 3000)
        }
    }, [isPresent, safeToRemove])

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} className={"w-screen h-screen fixed flex items-center justify-center"}>
            <div className="container-box-animated">

                <div className="h1Container">

                    <div className="cube-animated h1 w1 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w1 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w1 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w2 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w2 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w2 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w3 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w3 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h1 w3 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>
                </div>

                <div className="h2Container">

                    <div className="cube-animated h2 w1 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w1 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w1 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w2 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w2 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w2 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w3 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w3 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h2 w3 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>
                </div>

                <div className="h3Container">

                    <div className="cube-animated h3 w1 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w1 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w1 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w2 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w2 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w2 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w3 l1">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w3 l2">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>

                    <div className="cube-animated h3 w3 l3">
                        <div className="face-box-animated top-box-animated"></div>
                        <div className="face-box-animated left-box-animated"></div>
                        <div className="face-box-animated right-box-animated"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};