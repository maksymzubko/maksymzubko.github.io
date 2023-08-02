import React, {useRef} from 'react';
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {useOutsideAlerter} from "../hooks";

const Modal = ({modalOpen, onClick, result}) => {
    const ref = useRef()

    function onClickOutside() {
        if(modalOpen)
        {
            onClick();
        }
    }

    useOutsideAlerter(ref, onClickOutside);

    return (
        <>
            <motion.div animate={{
                opacity: modalOpen ? 1 : 0,
                zIndex: modalOpen ? 20 : -1,
                transition: {duration: 0.25, delay: modalOpen ? 0 : 0.25}
            }}
                        initial={{opacity: 0, zIndex: -1}}
                        className={`fixed z-20 h-screen w-screen bg-[#00000080] left-0 bottom-0 flex items-center justify-center overflow-hidden`}>
                <motion.div ref={ref} initial={{scale: 0}} animate={{scale: modalOpen ? 1 : 0}}
                            transition={{duration: 0.25, delay: modalOpen ? 0.25 : 0}}
                            className={"flex flex-col z-10 bg-black-100 p-8 rounded-2xl absolute md:min-w-[240px] sm:w-auto w-[90%] min-w-[120px] gap-10 min-h-[200px]"}>
                    <h3 className={`${styles.sectionHeadText}`}>{result.error ? "Oops.." : "Thanks."}</h3>
                    <p className={`${styles.sectionSubText}`}>{result.error ?? "Thank you. I will get back to you as soon as possible."}</p>
                    <button
                        className='self-center bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                        onClick={onClick}
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Modal;