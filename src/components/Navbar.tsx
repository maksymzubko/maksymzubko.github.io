import {useContext, useRef, useState} from 'react';
import {Link} from 'react-router-dom';

import {motion} from "framer-motion";
import {styles} from '../styles.js'
import {navLinks} from "@constants/index.ts";
import {logoNcenter, logoCenter} from '@assets/index.ts'

import {useOutsideAlerter} from '../hooks'
import {GlobalContext} from "../contexts/GlobalContext.ts";

const Navbar = () => {
    const currentHash = useContext(GlobalContext).currentHash;
    const [toggle, setToggle] = useState(false)
    const ref = useRef()

    const onClickOutside = () => {
        if(toggle)
        {
            setToggle(false)
        }
    }

    const handleState = () => {
        setToggle(!toggle)
    }

    useOutsideAlerter(ref, onClickOutside)

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
            <div className={"w-full flex justify-between items-center max-w-8xl mx-auto"}>
                <Link to={import.meta.env.VITE_HOME}
                      className={"flex items-center gap-2"} onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                    <div className={"w-12 h-12 relative invert"}>
                        <img src={logoCenter} alt={"logo"} className={"w-full absolute h-full object-contain"}/>
                        <motion.img animate={{rotate: 360, transition: {ease: "linear", duration: 10, repeat: Infinity}}} src={logoNcenter} alt={"logo"} className={"w-full absolute h-full object-contain"}/>
                    </div>
                    <p className={"text-white text-[18px] font-bold cursor-pointer flex"}>
                        Maksym Zubko &nbsp;
                        <span className={"sm:block hidden"}>|&nbsp;JS developer</span></p>
                </Link>
                <ul className={"list-none hidden md:flex flex-row gap-10"}>
                    {navLinks.map((link) =>
                        <li key={link.id}
                            className={`${currentHash === link.id ? "text-white-100" : "text-[#999]"} hover: text-white text-[18px] font-medium cursor-pointer`}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    )}
                </ul>

                <div ref={ref} className={"md:hidden flex flex-1 justify-end items-center"}>
                    <div
                        className={"w-[24px] flex flex-col gap-[4px] cursor-pointer [&>*]:block [&>*]:w-full [&>*]:h-[3px] [&>*]:bg-[#cdcdcd] rounded-[3px] z-1 origin-[4px_0px]"}
                        onClick={handleState}>
                        <motion.span animate={toggle ? {rotate: "45deg", translateX: "-1px", translateY: "-2px"} : {}}
                                     className={"origin-[0%_0%]"}></motion.span>
                        <motion.span animate={toggle ? {
                            opacity: 0,
                            rotate: "0deg",
                            scaleX: 0.2,
                            scaleY: 0.2
                        } : {}}></motion.span>
                        <motion.span animate={toggle ? {rotate: "-45deg", translateX: 0, translateY: 0} : {}}
                                     className={"origin-[0%_100%]"}></motion.span>
                    </div>

                    <motion.div
                        initial={{translateX: 200, opacity: 0}}
                        animate={{translateX: !toggle ? 200 : 0, opacity: !toggle ? 0 : 1}}
                        className={`p-6 blue-gradient top-20 right-0 mx-4 my-2 min-w-[140px] absolute z-10 rounded-xl`}>
                        <ul className={"list-none flex justify-end items-start flex-col gap-4"}>
                            {navLinks.map((link) =>
                                <li key={link.id}
                                    className={`${currentHash === link.id ? "text-white" : "text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`}
                                    onClick={() => {
                                        setToggle(false)
                                    }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            )}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;