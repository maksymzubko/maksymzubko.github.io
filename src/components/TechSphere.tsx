import React, {Suspense, useEffect, useRef} from 'react';
import {technologies} from "@constants/index.ts"
import CanvasLoader from "@components/Loader.tsx";
import {styles} from "../styles.js";
import SectionWrapper from "../hoc/SectionWrapper.tsx";

const TechSphere = () => {
    const svgEl = useRef()

    useEffect(() => {
        const entries = technologies.map(t => {
           return {image: t.icon, width: '50', height: '50', tooltip: t.name}
        })

        const settings = {
            entries: entries,
            width: 600,
            height: 600,
            radius: '60%',
            radiusMin: 75,
            bgDraw: false,
            bgColor: 'rgba(63,65,93,0.1)',
            opacityOver: 1,
            opacityOut: 0.2,
            opacitySpeed: 1,
            fov: 800,
            speed: 0.1,
            fontFamily: 'Oswald, Arial, sans-serif',
            fontSize: '14',
            fontColor: '#fff',
            fontWeight: 'normal',//bold
            fontStyle: 'normal',//italic
            fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            fontToUpperCase: true,
            tooltipFontFamily: 'Oswald, Arial, sans-serif',
            tooltipFontSize: '14',
            tooltipFontColor: 'transparent',
            tooltipFontWeight: 'normal',//bold
            tooltipFontStyle: 'normal',//italic
            tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
            tooltipFontToUpperCase: false,
            tooltipTextAnchor: 'right',
            tooltipDiffX: 0,
            tooltipDiffY: 5,
            animatingSpeed: 1,
            animatingRadiusLimit: 4
        };
        // @ts-ignore
        SVG3DTagCloud(svgEl.current, settings)
        return () => {
            // @ts-ignore
            svgEl.current.innerHTML = "";
        }
    }, [])

    return (
        <Suspense fallback={<CanvasLoader/>}>
            <div className={"w-full relative items-center justify-center flex"}>
                <div className={"z-10"} id={"tagcloud"} ref={svgEl}></div>
                <h3 className={`${styles.sectionHeadText} z-0 text-white-100 absolute`}>Tech stack.</h3>
            </div>
        </Suspense>
    );
};

export default SectionWrapper(TechSphere, "tech");