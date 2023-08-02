import React from 'react';
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.ts";
import {styles} from "../styles.js";
import SectionWrapper from "../hoc/SectionWrapper.tsx";
import {socials} from "@constants/index.ts";
import CustomTilt from "@components/CustomTilt.tsx";

const Socials = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>I'm always in touch</p>
                <h2 className={`${styles.sectionHeadText}`}>My socials.</h2>
            </motion.div>

            <div className={"w-full mt-20 flex flex-row flex-wrap gap-10 items-center justify-start"}>
                {socials.map((social, index) =>
                    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.7)}>
                        <CustomTilt
                            key={`tilt-social-${social.name}`}
                            options={{
                                max: 45,
                                scale: 1,
                                speed: 450,
                            }} className={"cursor-pointer bg-tertiary p-5 rounded-2xl sm:w-[150px] w-[120px] h-full"}>
                            <div onClick={() => window.open(social.link, "_blank")}>
                                <img src={social.icon} alt={social.name}/>
                            </div>
                        </CustomTilt>
                    </motion.div>

                )}
            </div>
        </>
    );
};

export default SectionWrapper(Socials, "socials");