import React, {useEffect, useState} from 'react';
import Tilt, {TiltProps} from "react-parallax-tilt";

const CustomTilt = (props) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 700px)');

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, [])

    return (
        <Tilt {...props} tiltEnable={!isMobile}>
            {props.children}
        </Tilt>
    );
};

export default CustomTilt;