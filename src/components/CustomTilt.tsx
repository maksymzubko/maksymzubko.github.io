import React, {useContext} from 'react';
import Tilt from "react-parallax-tilt";
import {GlobalContext} from "../contexts/GlobalContext.ts";

const CustomTilt = (props) => {
    const isMobile = useContext(GlobalContext).isMobile;

    return (
        <Tilt {...props} tiltEnable={!isMobile}>
            {props.children}
        </Tilt>
    );
};

export default CustomTilt;