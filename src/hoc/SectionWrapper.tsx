import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, needRenderId = false) =>
  function HOC() {
    return (
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={idName === "" && needRenderId ? '' : `${styles.padding} max-w-7xl mx-auto z-0`}
        onViewportEnter={()=>{
            if(needRenderId)
                window.history.pushState({}, "", `#${idName}`)
        }}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
