import React, {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";

const VerticalScroll = () => {
        const [loaded, setIsLoaded] = useState(false)
        const [progress, setProgress] = useState(0)
        const [pointsReached, setPointsReached] = useState([])

        const [positions, setPositions] = useState([
            {
                name: "about",
                pos: 0,
                reached: false
            }, {
                name: "works",
                pos: 0,
                reached: false,
            }, {
                name: "tech",
                pos: 0,
                reached: false,
            }, {
                name: "socials",
                pos: 0,
                reached: false,
            }, {
                name: "contact",
                pos: 0,
                reached: false,
            }
        ])

        const isReached = (name) => {
            return pointsReached.some(p=>p.name === name && p.reached);
        }

        const getPos = (name: string) => {
            const obj = document.getElementById(name)
            return obj ? parseInt(String((obj.offsetTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100)) : 0;
        }

        const handlePositions = (parent: HTMLDivElement) => {
            if (!loaded && getPos(positions.at(-1).name) !== 0) {
                positions.forEach((pos) => {
                    const getPosition = getPos(pos.name);
                    const currentState = positions;
                    currentState[currentState.findIndex(p => p.name === pos.name)].pos = getPosition;
                    setPositions(currentState)

                    const obj = parent.getElementsByClassName(pos.name).item(0) as HTMLSpanElement;
                    obj.style.top = `${getPosition}%`;
                })
                setIsLoaded(true)
            }
        }

        const handleReachedPositions = (current) => {
            const newPositions = positions.map((pos) => {
                    return {...pos, reached: current >= pos.pos}
            })
            console.log(newPositions)
            setPointsReached(newPositions.filter(p=>p.reached));
            setPositions(newPositions);
        }

        useEffect(() => {
            const parent = document.getElementById("vertical-parent") as HTMLDivElement;

            const checkScroll = () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                setProgress(scrolled);

                handleReachedPositions(scrolled);
                handlePositions(parent);
            }

            window.addEventListener('scroll', checkScroll);

            checkScroll()

            return () => {
                window.removeEventListener('scroll', checkScroll)
            }

        }, [])

        return (
            <div id={'vertical-parent'}
                 className={"fixed xl:visible invisible top-[50%] translate-y-[-50%] xl:left-[1%] md:left-8 w-[30px] h-[calc(100vh-20%-200px)] bg-transparent p-4"}>
                <div
                    className={"flex items-start relative h-full w-full [&>span]:left-[50%] [&>span]:translate-x-[-50%] [&>span]:absolute"}>
                <span className={"h-full w-[6px] bg-white rounded"}>
                       <motion.span initial={{height: `${progress}%`}}
                                    animate={{height: `${progress}%`, transition: {duration: .1}}}
                                    style={{position: 'relative'}}
                                    className={"w-full h-0 bg-violet-500 block"}></motion.span>
                </span>

                    {positions.map(pos =>
                        <motion.span
                            initial={{transform: "translate(-50%, -50%)"}}
                            animate={isReached(pos.name) ? {background: 'rgb(139, 92, 246)', transform: "translate(-50%, -50%) scale(1.1)"} : {background: '#fff'}}
                            transition={{duration: .2}}
                            key={pos.name}
                            className={`${pos.name} rounded-full w-[18px] h-[18px] translate-y-[-50%] border-2 border-violet-500`}>
                            <span className={"relative h-full w-full"}>
                                <motion.span  className={"max-2xl:invisible visible absolute left-5 top-1/2 uppercase font-[50px]"}>
                                    {pos.name}
                                </motion.span>
                            </span>
                        </motion.span>
                    )}
                </div>
            </div>
        );
    }
;

export default VerticalScroll;